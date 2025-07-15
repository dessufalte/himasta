<?php

namespace App\Http\Controllers;

use App\User;
use App\Traits\UserDetailTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UserDetailsController extends Controller
{
    use UserDetailTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private function checkGeneral() {
        $feedback = [];
        $userDetails = $this->getUserDetails();

        if (!$userDetails->team_name) {
            $feedback['status'] = 'warning';
            $feedback['message'] = 'Anda belum menambahkan nama tim anda!';
        }

        if(!Auth::user()->email_verified_at) {
            $feedback['status'] = 'warning';
            $feedback['message'] = 'Email anda belum diverifikasi, silahkan untuk mengecek email anda';
        }

        return $feedback;
    }

    public function index()
    {
        $feedback = $this->checkGeneral();
        if (Session::has('feedback')) {
            $feedback = Session::get('feedback');
        }
        $userDetails = $this->getUserDetails();

        return $this->view('user.pages.akun', ['userDetails' => $userDetails, 'feedback' => $feedback]);
    }

    public function changeProfilePic (Request $request) {
        $feedback = $this->checkGeneral();

        $validated = $request->validate([
            'new_profile_pic' => ['required', "max:5120", 'image']
        ]);

        if ($validated) {
            $new_profile_pic = $validated['new_profile_pic'];
            $this->updateProfileImage($new_profile_pic);

            $feedback['status'] = 'success';
            $feedback['message'] = 'Berhasil mengganti foto profil';
        } else {
            $feedback['status'] = 'danger';
            $feedback['message'] = 'Terjadi Kesalahan, Mohon ulangi setelah beberapa saat';
        }

        return redirect()->route('dashboard.akun')->with('feedback', $feedback);
    }

    public function changeTeamName (Request $request) {
        $feedback = $this->checkGeneral();

        $validated = $request->validate([
            'new_team_name' => ['required']
        ]);

        if ($validated) {
            $userDetails = $this->getUserDetails();

            $userDetails->team_name = $validated['new_team_name'];
            $userDetails->save();

            $feedback['status'] = 'success';
            $feedback['message'] = 'Berhasil mengganti nama tim';
        } else {
            $feedback['status'] = 'danger';
            $feedback['message'] = 'Terjadi Kesalahan, Mohon ulangi setelah beberapa saat';
        }

        return redirect()->route('dashboard.akun')->with('feedback', $feedback);
    }

    public function changePassword (Request $request) {
        $feedback = $this->checkGeneral();

        $validated = $request->validate(([
            'old_password' => ['required'],
            'new_password' => ['required', 'confirmed'],
        ]));

        if ($validated) {
            $user = User::find(Auth::user()->id);
            $userpass = $user->password;

            if(Hash::check($validated['old_password'], $userpass)) {
                $newPassHash = Hash::make($validated['new_password']);

                $user->password = $newPassHash;
                $user->save();

                $feedback['status'] = 'success';
                $feedback['message'] = 'berhasil menggantikan password!';
            } else {
                $feedback['status'] = 'danger';
                $feedback['message'] = 'password baru berbeda!';
            }
        } else {
            $feedback['status'] = 'danger';
            $feedback['message'] = 'password lama salah!';
        }

        return redirect()->route('dashboard.akun')->with('feedback', $feedback);
    }
}
