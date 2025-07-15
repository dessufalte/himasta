<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use App\Peserta;
use App\Submission;
use App\UserDetails;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        UserDetails::create([
            'user_id' => $user->id,
        ]);

        Peserta::create([
            'user_id' => $user->id,
            'peserta_index' => 1
        ]);

        Peserta::create([
            'user_id' => $user->id,
            'peserta_index' => 2
        ]);
        Peserta::create([
            'user_id' => $user->id,
            'peserta_index' => 3
        ]);

        Submission::create([
            'user_id' => $user->id,
            'submission_type' => 1
        ]);

        Submission::create([
            'user_id' => $user->id,
            'submission_type' => 2
        ]);

        Submission::create([
            'user_id' => $user->id,
            'submission_type' => 3
        ]);

        return $user;

        // return redirect(RouteServiceProvider::HOME);
    }
}
