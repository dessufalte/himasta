<?php

namespace App\Http\Controllers;

use App\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class DaftarController extends Controller
{
    public function index()
    {
        $user_id = Auth::user()->id;
        $user = DB::table('users')->where('id', $user_id)->first();
        $user_details = DB::table('user_details')->where('id', $user_id)->first();

        $kategori_lomba = DB::table('kategori_lomba')
        ->where('kategori_lomba.user_id',$user_id)
        ->join('users', 'users.id', '=', 'kategori_lomba.user_id')
        ->select('kategori_lomba.*' , 'users.username')
        ->get();
        // dd($user);

        return view('user.pages.daftar_lomba', [
            'username' => $user ? $user->username : 'Guest',
            'profile_pic_filename' => $user_details ? $user_details->profile_pic_filename : 'default.png',
            'kategori_lomba' => $kategori_lomba
        ]);
    }

    public function save(Request $request)
    {
        Validator::make($request->all(), [
            'nama_kategori' => 'required',
            'upload_pembayaran' => 'required|mimes:jpg,png,jpeg'
        ]);
        $filename = null;
        if ($request->upload_pembayaran) {
            $file = $request->file('upload_pembayaran');
            $filename = time() . '-' . $file->getClientOriginalName();
            $file->move(public_path('img/bukti_pembayaran/'), $filename);
        }

        DB::table('kategori_lomba')->insert([
            'user_id' => Auth::id(),
            'nama_kategori' => $request->nama_kategori,
            'upload_pembayaran' => $filename,
            'status_pendaftaran' => ''
        ]);

        return redirect()->route('dashboard.daftar.lomba');

    }
}
