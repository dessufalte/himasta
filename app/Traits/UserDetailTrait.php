<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;

trait UserDetailTrait {
    use FileAccessTrait;

    protected function view($template, $data = array()) {
        $userDetails = $this->getUserDetails();

        $userBriefData = [
            'username' => Auth::user()->username,
            // 'profile_pic_filename' => url('profile_pic/' . $userDetails->profile_pic_filename)
            'profile_pic_filename' => route('fileAccess.profile_pic', $userDetails->profile_pic_filename)
        ];

        return view($template)->with($userBriefData)->with($data);
    }
}
