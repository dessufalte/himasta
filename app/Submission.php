<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = "submission";
    const CREATED_AT = null;

    protected $fillable = [
        'user_id',
        'status',
        'submission_type',
        'submission_filename',
        'submission_uploaded_filename',
    ];
}
