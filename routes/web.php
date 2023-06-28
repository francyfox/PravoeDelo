<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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

Route::controller(AuthController::class)->group(function() {
    Route::middleware('guest')->group(function() {
        Route::get('auth/login', 'create')->name('login');
        Route::post('auth/login', 'store');
    });
    Route::middleware('auth')->group(function() {
        Route::post('/auth/logout', 'logout');
    });
});
Route::middleware('auth')->group(function() {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/table', [HomeController::class, 'getTable'])->middleware('can:check-worker');
    Route::post('/update-data', [HomeController::class, 'updateData'])->middleware('can:check-worker');
});


