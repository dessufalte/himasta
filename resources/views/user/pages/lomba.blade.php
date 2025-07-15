@extends('user.components.master')

@section('title')
Lomba
@endsection

@section('content')
<!-- Page Heading -->
{{-- <h1 class="h3 mb-2 text-gray-800">Data Submission Lomba {{ $type == 'esai' ? "NDAC" : "NSIC" }} </h1> --}}
<h1 class="h3 mb-2 text-gray-800">Data Submission Lomba {{ $type == 'esai' ? "NDAC" : ($type == 'ssic' ? "SSIC" : "NSIC") }} </h1>
<p class="mb-4">Mohon untuk mengumpulkan submission lomba anda</p>

<!-- DataTales Example -->
@if ($submission['submission_status'] === 1)
    <div class="card shadow mb-4 border-left-success">
@elseif ($submission['submission_status'] === 0)
    <div class="card shadow mb-4 border-left-danger">
@endif

<div class="card-header py-3">
    <h6 class="m-0 font-weight-bold" style="color: #3DA020">Status Submission Lomba</h6>
</div>
<div class="card-body">
    <div class="form-group">
        <label>Status: </label>
        @if ($submission['submission_status'] === 1)
            <span>Submitted</span>
        @elseif ($submission['submission_status'] === 0)
            <span>Not Submitted</span>
        @endif
    </div>
    <div class="form-group">
        <label>Due Date: </label>
        <span>{{ $due_date }}</span>
    </div>

    <div class="form-group">
        <label>Last Submitted: </label>
        @if ($submission['submission_status'] === 1)
            <span>{{ date('F j, Y', strtotime($submission['updated_at'])) }}</span>
        @elseif ($submission['submission_status'] === 0)
            <span>-</span>
        @endif
    </div>

    <div class="form-group">
        <label>Current Submitted File: </label>
        @if ($submission['submission_status'] === 1)
            <span>
                <a target="_blank" href="{{ route('fileAccess.submission_file', $submission['submission_filename']) }}">
                    {{ $submission['submission_uploaded_filename'] }}
                </a>
        </span>
        @elseif ($submission['submission_status'] === 0)
            <span>-</span>
        @endif
    </div>
</div>
</div>

<div class="card shadow mb-4 border-left-warning">
<div class="card-header py-3">
    <h6 class="m-0 font-weight-bold" style="color: #3DA020">Upload Submission Lomba</h6>
</div>
<div class="card-body">
    <form method="POST" action="{{ route('dashboard.lomba.updateSubmission', $type) }}" enctype="multipart/form-data">
    @csrf
    <input type="hidden" name="_method" value="PUT" />


    <div class="form-group">
        <input name="submission_file" required type="file" class="form-control-file" accept=".pdf">
        <small id="emailHelp" class="form-text text-muted">Ukuran file PDF max. 20 MB (PDF)</small>
    </div>

    <center>
        <button type="submit" class="btn btn-info">Upload</button>
    </center>
    </form>
</div>
</div>
@endsection

@section('js')
<script>
    // image upload size limited
    const new_submission_input = document.getElementsByName('submission_file')[0];
    new_submission_input.addEventListener('change', function(){
        if (this.files[0].size > 20971520)  {
            alert('ukuran file melebihi 20MB');
            this.value = '';
        }
    });
</script>
<script src="{{ asset('assets/js/detectChanges.js') }}"></script>
@endsection
