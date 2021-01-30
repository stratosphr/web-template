<?php

use App\Http\Controllers\AuthController;

Route::prefix('oauth')->middleware('guest')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('refresh-token', [AuthController::class, 'refreshToken']);
    Route::get('user', [AuthController::class, 'user']);
});

Route::prefix('oauth')->middleware('auth:api')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

