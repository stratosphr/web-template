<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Utilities\ProxyRequest;
use Exception;
use Hash;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use function abort_unless;
use function auth;
use function cookie;
use function request;
use function response;

class AuthController extends Controller {
    protected $proxy;

    /**
     * AuthController constructor.
     * @param ProxyRequest $proxy
     */
    public function __construct(ProxyRequest $proxy) {
        $this->proxy = $proxy;
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws Exception
     */
    public function register() {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('password'))
        ]);
        $auth = $this->proxy->grantPasswordToken($user->email, request('password'));
        return response([
            'token' => $auth->access_token,
            'expiresIn' => $auth->expires_in,
            'message' => 'Your account has been created.'
        ], 201);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws Exception
     */
    public function login() {
        $user = User::where('email', request('email'))->firstOrFail();
        abort_unless(Hash::check(request('password'), $user->password), 403, 'The e-mail / password combination does not exist.');
        $auth = $this->proxy->grantPasswordToken(request('email'), request('password'));
        return response([
            'token' => $auth->access_token,
            'expiresIn' => $auth->expires_in,
            'message' => 'You have been logged in.'
        ]);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws Exception
     */
    public function refreshToken() {
        $auth = $this->proxy->refreshAccessToken();
        return response([
            'token' => $auth->access_token,
            'expiresIn' => $auth->expires_in,
            'message' => 'Token has been refreshed.'
        ]);
    }

    public function logout() {
        $token = request()->user()->token();
        $token->delete();
        cookie()->queue(cookie()->forget('refresh_token'));
        return response([
            'message' => 'You have been successfully logged out'
        ]);
    }

    public function user(): ?Authenticatable {
        abort_unless(auth()->guard('api')->check(), 401, 'You must be logged in before accessing this page.');
        return auth()->guard('api')->user();
    }
}
