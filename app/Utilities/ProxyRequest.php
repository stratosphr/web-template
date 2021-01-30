<?php

namespace App\Utilities;

use Exception;
use Symfony\Component\HttpFoundation\Request;

class ProxyRequest {
    /**
     * @param string $email
     * @param string $password
     * @return mixed
     * @throws Exception
     */
    public function grantPasswordToken(string $email, string $password) {
        $params = [
            'grant_type' => 'password',
            'username' => $email,
            'password' => $password,
        ];
        return $this->makePostRequest($params);
    }

    /**
     * @param array $params
     * @return mixed
     * @throws Exception
     */
    protected function makePostRequest(array $params) {
        $params = array_merge([
            'client_id' => config('services.passport.password_client_id'),
            'client_secret' => config('services.passport.password_client_secret'),
            'scope' => '*',
        ], $params);

        $proxy = Request::create('oauth/token', 'post', $params);
        $resp = json_decode(app()->handle($proxy)->getContent());
        $this->setHttpOnlyCookie($resp->refresh_token);

        return $resp;
    }

    protected function setHttpOnlyCookie(string $refreshToken) {
        cookie()->queue(
            'refresh_token',
            $refreshToken,
            14400, // 10 days
            null,
            null,
            false,
            true // httponly
        );
    }

    /**
     * @return mixed
     * @throws Exception
     */
    public function refreshAccessToken() {
        $refreshToken = request()->cookie('refresh_token');
        abort_unless($refreshToken, 403, 'Your refresh token is expired.');
        $params = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $refreshToken,
        ];
        return $this->makePostRequest($params);
    }
}
