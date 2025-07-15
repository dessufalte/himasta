<?php

namespace App\Http\Controllers;

use App\Peserta;
use App\Submission;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function home()
    {
        if (!session('admin')) return redirect()->route('admin.login');

        $ndac = Submission::whereNotNull('submission_filename')
            ->where('submission_type', '1')
            ->get();

        $nsic = Submission::whereNotNull('submission_filename')
            ->where('submission_type', '2')
            ->get();

        $ssic = Submission::whereNotNull('submission_filename')
            ->where('submission_type', '3')
            ->get();

        $peserta = DB::table('users')->select(['*', 'users.id as id'])->leftJoin('user_details', 'users.id', '=', 'user_details.user_id')->get();


        $submission = [];

        foreach ($peserta as $key => $value) {
            $submission[$value->id] = [
                'id' => $value->id,
                'username' => $value->username,
                'team_name' => $value->team_name,
                'email' => $value->email,
                'photo' => $value->profile_pic_filename
            ];
        }

        foreach ($ndac as $key => $value) {
            $submission[$value->user_id]['ndac'] = [
                "submission_status" => $value->submission_status,
                "submission_type" => $value->submission_type,
                "submission_filename" => $value->submission_filename,
                "submission_uploaded_filename" => $value->submission_uploaded_filename,
            ];
        }

        foreach ($nsic as $key => $value) {
            $submission[$value->user_id]['nsic'] = [
                "submission_status" => $value->submission_status,
                "submission_type" => $value->submission_type,
                "submission_filename" => $value->submission_filename,
                "submission_uploaded_filename" => $value->submission_uploaded_filename,
            ];
        }
        foreach ($ssic as $key => $value) {
            $submission[$value->user_id]['nsic'] = [
                "submission_status" => $value->submission_status,
                "submission_type" => $value->submission_type,
                "submission_filename" => $value->submission_filename,
                "submission_uploaded_filename" => $value->submission_uploaded_filename,
            ];
        }

        // dd($submission);

        return view('admin.home', compact('submission'));
    }

    public function login()
    {
        if (session('admin')) return redirect()->route('admin.home');
        return view('admin.login');
    }

    public function b_login(Request $request)
    {
        if ($request->username == "admin" && $request->password == "admin123") {
            session(['admin' => true]);
            return redirect()->route('admin.home');
        }
        return redirect()->route('admin.login');
    }

    public function logout()
    {
        session()->forget('admin');
        return redirect()->route('admin.login');
    }

    public function download($type, $filename)
    {
        if (Storage::exists("public/submission/$type/$filename")) {
            return response()->download(storage_path("app/public/submission/$type/$filename"));
        } else {
            return "File not exist";
        }
    }

    public function dataPeserta(){
        $data['peserta'] = Peserta::get();

        return view('admin.data_peserta',$data);
    }
}
