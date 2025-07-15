<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    protected $table = "peserta";
    const CREATED_AT = null;

    protected $fillable = [
        'user_id',
        'peserta_name',
        'peserta_email',
        'peserta_perguruan_tinggi',
        'peserta_jurusan',
        'peserta_angkatan',
        // 'peserta_ktm_filename',
        // 'peserta_uploaded_ktm_filename',
        'peserta_index',
    ];
}
