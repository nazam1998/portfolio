<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', 'App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');

Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');

Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

Route::get('register', function () {
    return redirect('/');
})->name('register');

Route::get('view/email/{contact}', 'App\Http\Controllers\ContactController@show')->name('contact.show');
Route::get('view/email', 'App\Http\Controllers\ContactController@index')->name('contact.index');
Route::post('view/email/read', 'App\Http\Controllers\ContactController@update')->name('contact.update');

Route::get('/mailable', function () {

    return new App\Mail\ContactMail('nazam', 'hello');
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::fallback(function () {
    return view("welcome");
});
