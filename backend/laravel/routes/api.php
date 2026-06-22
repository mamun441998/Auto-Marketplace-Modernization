<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VehicleController;


Route::get('/vehicles', [VehicleController::class, 'index']);
Route::get('/vehicles/{vehicle}', [VehicleController::class, 'show']);