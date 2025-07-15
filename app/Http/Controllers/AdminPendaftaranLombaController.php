<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AdminPendaftaranLombaController extends Controller
{
    public function index(){
        $data['kategori_lomba'] = DB::table('kategori_lomba')
        ->join('users','users.id', '=', 'kategori_lomba.user_id')
        ->select('kategori_lomba.*','users.username')
        ->get();

        return view('admin.pendaftaran_lomba',$data);
    }

    public function download($filename){
        $path = public_path("img/bukti_pembayaran/{$filename}");

        if(file_exists($path)){
            return response()->download($path);
        }else{
            return response()->json(['message' => 'File Not Exist'],404);
        }
    }

    public function status($id_kategori){
        $pendaftaran = DB::table('kategori_lomba')->where('id_kategori',$id_kategori)->first();

        if($pendaftaran){
            DB::table('kategori_lomba')
            ->where('id_kategori',$id_kategori)
            ->update(['status_pendaftaran' => 'Pendaftaran Disetujui']);
        }

        return redirect()->route('admin.pendaftaran.lomba');
    }
}
