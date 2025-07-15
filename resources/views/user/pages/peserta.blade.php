@extends('user.components.master')

@section('title')
    Data Peserta
@endsection

@section('content')
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Data Peserta</h1>
    <p class="mb-4">Mohon untuk melengkapkan data peserta anda</p>


    @for ($i = 0; $i < 3; $i++)
        <!-- DataTales Example -->
        {{-- @if ($peserta[$i]['already_filled'])
        <div class="card shadow mb-4 border-left-success">
    @else
        <div class="card shadow mb-4 border-left-danger">
    @endif --}}
        @if (isset($peserta[$i]) && $peserta[$i]['already_filled'])
            <div class="card shadow mb-4 border-left-success">
            @elseif (isset($peserta[$i]))
                <div class="card shadow mb-4 border-left-danger">
                @else
                    @continue
        @endif
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Form Peserta {{ $i + 1 }}</h6>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('dashboard.peserta.changePesertaData', $i + 1) }}"
                enctype="multipart/form-data">
                @csrf
                <input type="hidden" name="_method" value="PUT" />
                <div class="form-group">
                    <label for="exampleInputEmail1">Nama Lengkap</label>
                    <input name="peserta_name" value="{{ $peserta[$i]['peserta_name'] }}" type="text"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="100">
                    <small id="emailHelp" class="form-text text-muted">Max. 100 karakter</small>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input name="peserta_email" value="{{ $peserta[$i]['peserta_email'] }}" type="email"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="100">
                </div>

                <div class="form-group">
                    <label>Asal Sekolah/Universitas</label>
                    <input name="peserta_perguruan_tinggi" value="{{ $peserta[$i]['peserta_perguruan_tinggi'] }}"
                        type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp"
                        maxlength="50">
                    <small id="emailHelp" class="form-text text-muted">Max. 50 karakter</small>
                </div>

                <div class="form-group">
                    <label>Jurusan</label>
                    <input name="peserta_jurusan" value="{{ $peserta[$i]['peserta_jurusan'] }}" type="text"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="20">
                    <small id="emailHelp" class="form-text text-muted">Max. 20 karakter</small>
                </div>

                <div class="form-group">
                    <label>Angkatan Peserta</label>
                    <input name="peserta_angkatan" value="{{ $peserta[$i]['peserta_angkatan'] }}" type="text"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="4">
                    <small id="emailHelp" class="form-text text-muted">Contoh: 2019, 2022</small>
                </div>

                {{-- <div class="form-group">
                <label>Foto KTM / KRS: </label>
                <span>Nama_file.jpg</span>
                <input name="peserta_ktm" type="file" class="form-control-file" id="exampleFormControlFile1"
                accept=".jpg, .png, .jpeg">
                <small id="emailHelp" class="form-text text-muted">Ukuran file foto max. 5 MB (jpg atau png)</small>
            </div> --}}

                {{-- @if ($peserta[$i]['peserta_uploaded_ktm_link'])
            <div class="form-group">
                <span>File yang dimiliki: <a target="_blank" href="{{ $peserta[$i]['peserta_uploaded_ktm_link'] }}">{{ $peserta[$i]['peserta_uploaded_ktm_filename'] }}</a></span>
            </div>
            @endif --}}
                <center>
                    <button disabled type="submit" class="btn btn-info">Ubah</button>
                </center>
            </form>
        </div>
        </div>
    @endfor
@endsection


@section('js')
    <script src="{{ asset('assets/js/detectChanges.js') }}"></script>
@endsection
