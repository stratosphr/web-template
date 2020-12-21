<?php

Route::resource('test', function () {
    return response()->json('hello');
});
