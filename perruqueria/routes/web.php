<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ReservaController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('welcome');
    })->name('home');
});

Route::get('/cita', function () {
    return Inertia::render('pidecita');
})->name('pidecita');

Route::post('/reservas',[ReservaController::class,'store']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
