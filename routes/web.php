<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminPendaftaranLombaController;
use Illuminate\Support\Facades\Auth;
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

Route::get('', function () {
    return view('welcome');
})->name('welcome');

require __DIR__.'/public.php';

Auth::routes(['verify' => true]);

Route::get('/admin', [AdminController::class, 'home'])->name('admin.home');
Route::get('/admin/login', [AdminController::class, 'login'])->name('admin.login');
Route::post('/admin/login', [AdminController::class, 'b_login'])->name('admin.b_login');
Route::get('/admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
Route::get('/admin/download/{type}/{filename}', [AdminController::class, 'download'])->name('admin.download');
Route::get('/admin/pendaftaran_lomba', [AdminPendaftaranLombaController::class, 'index'])->name('admin.pendaftaran.lomba');
Route::get('/admin/download/bukti/pembayaran/{filename}', [AdminPendaftaranLombaController::class, 'download'])->name('admin.download.bukti.pembayaran');
Route::get('/admin/status/pendaftaran/{id_kategori}', [AdminPendaftaranLombaController::class, 'status'])->name('admin.status.pendaftaran');
Route::get('/admin/data/peserta', [AdminController::class, 'dataPeserta'])->name('admin.data.peserta');

