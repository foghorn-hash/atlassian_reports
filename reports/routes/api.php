<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AtlassianSalesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Test route to ensure the API is working
Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});

// Route for Atlassian sales report
Route::get('/sales-report', [AtlassianSalesController::class, 'getSalesReport']);
Route::get('/cumulative-sales', [AtlassianSalesController::class, 'getCumulativeSales']);
Route::get('/transactions', [AtlassianSalesController::class, 'getTransactions']);
