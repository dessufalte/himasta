<?php

namespace App\Traits;

use App\Peserta;
use App\Submission;
use App\UserDetails;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

trait FileAccessTrait {
    public function getUser() {
        $user = Auth::user();

        if (!$user) {
            return abort(403);
        }

        return $user;
    }

    public function getUserDetails() {
        $user = $this->getUser();
        return UserDetails::where('user_id', $user->id)->first();
    }

    protected function getProfileImage($filename) {

        $userDetails = $this->getUserDetails();

        if ($userDetails->profile_pic_filename == $filename) {
            $path = storage_path('app/public/profile_pic/' . $filename);

            if (!File::exists($path)) {
                abort(404);
            }

            $file = File::get($path);
            $type = File::mimeType($path);

            $response = Response::make($file);
            $response->header("Content-Type", $type);

            return $response;
        }

        return abort(403);
    }

    protected function getKTMImage($filename) {
        $user = $this->getUser();
        $peserta = Peserta::where([
            'user_id'=> $user->id,
            'peserta_index' => 1
        ])->first();


        if (!$peserta || $peserta->peserta_ktm_filename !== $filename) {
            $peserta = Peserta::where([
                'user_id'=> $user->id,
                'peserta_index' => 2
            ])->first();
        }

        if ($peserta->peserta_ktm_filename == $filename) {
            $path = storage_path('app/public/ktm/' . $filename);

            if (!File::exists($path)) {
                abort(404);
            }

            $file = File::get($path);
            $type = File::mimeType($path);

            $response = Response::make($file);
            $response->header("Content-Type", $type);

            return $response;
        }

        return abort(403);
    }

    protected function getSubmissionPDF($filename) {
        $submission = Submission::where([
            'user_id' => Auth::user()->id,
            'submission_type' => 1
        ])->first();

        if (!$submission || $submission->submission_filename !== $filename) {
            $submission = Submission::where([
                'user_id' => Auth::user()->id,
                'submission_type' => 2
            ])->first();
        }


        if ($submission) {
            $type = "";

            if ($submission->submission_type === 1) {
                $type = 'esai';
            }else {
                $type = 'infografis';
            }

            if ($submission->submission_filename == $filename) {
                $path = storage_path('app/public/submission/' . $type . '/' . $filename);

                if (!File::exists($path)) {
                    abort(404);
                }

                $file = File::get($path);
                $type = File::mimeType($path);

                $response = Response::make($file);
                $response->header("Content-Type", $type);

                return $response;
            }
        } else {
            return abort(404);
        }

        return abort(403);
    }

    protected function updateProfileImage($new_profile_pic) {
        $userDetails = $this->getUserDetails();

        // remove last user profile pic
        $last_user_pic_filename = $userDetails->profile_pic_filename;
        if ($last_user_pic_filename !== 'logo.png') {
            Storage::delete('public/profile_pic/' . $last_user_pic_filename);
        }


        // add new user profile pic
        $new_filename =
            time() . "_" .
            substr(pathinfo($new_profile_pic->getClientOriginalName(), PATHINFO_FILENAME), 0, 5) . '.' .
            $new_profile_pic->getClientOriginalExtension();
        $new_profile_pic->storeAs('public/profile_pic/', $new_filename);

        $userDetails->profile_pic_filename = $new_filename;
        $userDetails->save();
    }

    protected function updateKTMImage($new_ktm, $peserta_index) {
        $peserta = Peserta::where([
            'user_id' => Auth::user()->id,
            'peserta_index' => $peserta_index
        ])->first();

        // delete last KTM file
        $last_peserta_ktm_filename = $peserta->peserta_ktm_filename;
        Storage::delete('public/ktm/'. $last_peserta_ktm_filename);

        $new_filename =
            time() . "_" .
            substr(pathinfo($new_ktm->getClientOriginalName(), PATHINFO_FILENAME), 0, 5) . '.' .
            $new_ktm->getClientOriginalExtension();
        $new_ktm->storeAs('public/ktm/', $new_filename);

        $peserta->peserta_uploaded_ktm_filename = $new_ktm->getClientOriginalName();
        $peserta->peserta_ktm_filename = $new_filename;
        $peserta->save();
    }

    protected function updateSubmissionPDF($new_pdf, $type) {
        $submission_type = '';
        if ($type === 'esai') {
            $submission_type = 1;
        } else if ($type === 'infografis' ) {
            $submission_type = 2;
        }

        $submission = Submission::where([
            'user_id' => Auth::user()->id,
            'submission_type' => $submission_type
        ])->first();

        // delete last PDF file
        $last_pdf_filename = $submission->submission_filename;
        Storage::delete('public/'. $type . '/' . $last_pdf_filename);

        $new_filename =
            time() . "_" .
            substr(pathinfo($new_pdf->getClientOriginalName(), PATHINFO_FILENAME), 0, 5) . '.' .
            $new_pdf->getClientOriginalExtension();
        $new_pdf->storeAs('public/submission/'. $type . '/', $new_filename);

        $submission->submission_uploaded_filename = $new_pdf->getClientOriginalName();
        $submission->submission_filename = $new_filename;
        $submission->submission_status = 1;

        $submission->save();
    }
}
