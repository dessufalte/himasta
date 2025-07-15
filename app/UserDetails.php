<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $table = "user_details";
    const CREATED_AT = null;

    protected $fillable = [
        'user_id',
        'profile_pic_filename',
        'team_name',
    ];
}
