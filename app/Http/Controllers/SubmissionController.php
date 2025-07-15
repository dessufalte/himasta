<?php

namespace App\Http\Controllers;

use App\Submission;
use App\Traits\UserDetailTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SubmissionController extends Controller
{
    use UserDetailTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($type)
    {
        $DUE_DATE = 'Agustus 23, 2024';
        $user_id = Auth::user()->id;

        $kategori_to_submission_type = [
            'esai' => 1,
            'infografis' => 2,
            'ssic' => 3
        ];

        $submission_type = $kategori_to_submission_type[$type];

        $submission = Submission::where([
            'user_id' => $user_id,
            'submission_type' => $submission_type
        ])->first();


        return $this->view('user.pages.lomba')->with([
            'due_date' => $DUE_DATE,
            'submission' => $submission,
            'type' => $type
        ]);
    }

    public function updateSubmission(Request $request, $type)
    {
        $validated = $request->validate([
            'submission_file' => "required|mimes:pdf|max:20480"
        ]);

        if ($validated) {
            $new_pdf = $validated['submission_file'];
            $this->updateSubmissionPDF($new_pdf, $type);
        }

        return redirect()->route('dashboard.lomba', $type);
    }

    public function daftar()
    {
        return view('user.pages.daftar_lomba');
    }

}
