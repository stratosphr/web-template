<?php

Route::get('/', function () {
    event(new App\Events\NewMessage(rand(0, 10000)));
    return 'OK';
});
