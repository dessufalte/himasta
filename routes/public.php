<?php

use App\Http\Controllers\DaftarController;
use App\Http\Controllers\FileAccess;
use App\Http\Controllers\PesertaController;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\UserDetailsController;
use Illuminate\Support\Facades\Route;

Route::get('profile_pic/{filename}', [FileAccess::class, 'getProfileImage'])->name('fileAccess.profile_pic');
Route::get('ktm_images/{filename}', [FileAccess::class, 'getKTMImage'])->name('fileAccess.ktm_image');
Route::get('submission/{filename}', [FileAccess::class, 'getSubmissionPDF'])->name('fileAccess.submission_file');

Route::prefix('dashboard')->group(function () {
    Route::group(['middleware' => 'auth'], function() {
        Route::get('', function() {
            return redirect()->route('dashboard.akun');
        });

        Route::prefix('akun')->group(function() {
            Route::get('', [UserDetailsController::class, 'index'])->name('dashboard.akun');

            Route::put('/change_profile_pic', [UserDetailsController::class, 'changeProfilePic'])->name('dashboard.akun.changeProfilePic');
            Route::put('/change_team_name', [UserDetailsController::class, 'changeTeamName'])->name('dashboard.akun.changeTeamName');
            Route::put('/change_password', [UserDetailsController::class, 'changePassword'])->name('dashboard.akun.changePassword');
        });

        Route::prefix('peserta')->group(function() {
            Route::get('', [PesertaController::class, 'index'])->name('dashboard.peserta');

            Route::put('/change_peserta_data/{peserta_index}', [PesertaController::class, 'changePesertaData'])->name('dashboard.peserta.changePesertaData');
        });

        Route::prefix('daftar')->group(function(){
            Route::get('',[DaftarController::class, 'index'])->name('dashboard.daftar.lomba');
            Route::post('/daftar.lomba', [DaftarController::class, 'save'])->name('dashboard.daftar.lomba.save');
        });

        Route::prefix('lomba')->group(function() {
            Route::get('{submission_type}', [SubmissionController::class, 'index'])->name('dashboard.lomba');
            Route::put('{submission_type}/change_submission', [SubmissionController::class, 'updateSubmission'])->name('dashboard.lomba.updateSubmission');
            // Route::get('daftar_lomba', [SubmissionController::class, 'daftar'])->name('daftar.lomba');
        });
    });
});


