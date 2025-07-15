<?php

namespace App\Http\Controllers;

use App\Peserta;
use App\Traits\UserDetailTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PesertaController extends Controller
{
    use UserDetailTrait;

    public function index()
    {
        $user = Auth::user();

        $pesertaQuery = Peserta::where('user_id', $user->id)->get();

        $pesertaData = array();
        foreach ($pesertaQuery as $peserta) {

            $data = [
                'peserta_name' => $peserta->peserta_name,
                'peserta_email' => $peserta->peserta_email,
                'peserta_perguruan_tinggi' => $peserta->peserta_perguruan_tinggi,
                'peserta_jurusan' => $peserta->peserta_jurusan,
                'peserta_angkatan' => $peserta->peserta_angkatan,
                'already_filled' => $peserta->already_filled
            ];

            array_push($pesertaData, $data);
        }

        // $user = Auth::user();

        // // Ambil team_id dari user_detail yang berhubungan dengan user yang sedang login
        // $userDetail = DB::table('user_details')->where('id', $user->id)->first();
        // if (!$userDetail) {
        //     return $this->view('user.pages.peserta', ['peserta' => []]);
        // }

        // $teamId = $userDetail->team_name;

        // // Ambil semua user_id yang memiliki team_id yang sama
        // $userIds = DB::table('user_details')->where('team_name', $teamId)->pluck('id');

        // // Ambil peserta yang user_id-nya ada di dalam userIds
        // $pesertaQuery = Peserta::whereIn('user_id', $userIds)->get();

        // $pesertaData = array();
        // foreach ($pesertaQuery as $peserta) {

        //     $data = [
        //         'peserta_name' => $peserta->peserta_name,
        //         'peserta_email' => $peserta->peserta_email,
        //         'peserta_perguruan_tinggi' => $peserta->peserta_perguruan_tinggi,
        //         'peserta_jurusan' => $peserta->peserta_jurusan,
        //         'peserta_angkatan' => $peserta->peserta_angkatan,
        //         'already_filled' => $peserta->already_filled
        //     ];

        //     array_push($pesertaData, $data);
        // }
        return $this->view('user.pages.peserta', ['peserta' => $pesertaData]);
    }

    public function changePesertaData(Request $request, $peserta_index = 1)
    {
        $validated = $request->validate([
            'peserta_name' => ' max:50',
            'peserta_email' => 'email | max:100',
            'peserta_perguruan_tinggi' => 'max:50',
            'peserta_jurusan' => 'max:30',
            'peserta_angkatan' => 'max:4',
        ]);
        // dd($validated);

        if ($validated) {
            $peserta = Peserta::where([
                'user_id' => Auth::user()->id,
                'peserta_index' => $peserta_index
            ])->first();

            $peserta->peserta_name = $validated['peserta_name'];
            $peserta->peserta_email = $validated['peserta_email'];
            $peserta->peserta_perguruan_tinggi = $validated['peserta_perguruan_tinggi'];
            $peserta->peserta_jurusan = $validated['peserta_jurusan'];
            $peserta->peserta_angkatan = $validated['peserta_angkatan'];

            $peserta->already_filled = true;
            $peserta->save();
        }

        return redirect()->route('dashboard.peserta');
    }
}
