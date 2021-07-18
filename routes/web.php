<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
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

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::fallback(function () {
    return view("welcome");
});
Route::post('send/mail', 'ContactController@store')->name('contact.store');
Route::get('view/email/{contact}', 'ContactController@show')->name('contact.show');;
Route::get('view/email', 'ContactController@index')->name('contact.index');;
Route::get('view/email/read', 'ContactController@update')->name('contact.update');;
