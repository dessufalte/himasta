@extends('user.components.master')

@section('title')
    Daftar Lomba
@endsection

@section('content')
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Daftar Lomba</h1>

    <div class="card shadow mb-4 border-left-success">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Data Pendaftar Lomba</h6>
        </div>

        <div class="card-body">
            @foreach ($kategori_lomba as $k)
                <div class="form-group">
                    <label>Nama : </label>
                    <span>{{ $k->username }}</span>
                </div>

                <div class="form-group">
                    <label>Kategori Lomba : </label>
                    {{-- <span>{{ $k->nama_kategori }}</span> --}}
                    <span>
                        @if ($k->nama_kategori === 'esai')
                            NDAC
                        @elseif ($k->nama_kategori === 'infografis')
                            NSIC
                        @else
                            SSIC
                        @endif
                    </span>
                </div>

                <div class="form-group">
                    <label for=""> Status Pendaftaran : </label>
                    <span>
                        @if ($k->status_pendaftaran == 'Pendaftaran Disetujui')
                            <span class="text-green-500">Disetujui</span>
                        @else
                            <span class="text-red-500">Pending</span>
                        @endif
                    </span>
                </div>
            @endforeach
        </div>
    </div>

    <!-- DataTales Example -->
    <div class="card shadow mb-4 border-left-success">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Daftar Lomba</h6>
        </div>

        <div class="card-body">
            <form method="POST" action="{{ route('dashboard.daftar.lomba.save') }}" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Kategori Lomba</label>
                        <select name="nama_kategori" id="" class="form-control mb-5">
                            <option value="">Silahkan Pilih Kategori Lomba</option>
                            <option value="esai">NDAC</option>
                            <option value="infografis">NSIC</option>
                            <option value="ssic">SSIC</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlFile1">Upload Bukti Pembayaran</label>
                    <input required name="upload_pembayaran" type="file" class="form-control-file"
                        id="exampleFormControlFile1">
                    <small id="emailHelp" class="form-text text-muted">Ukuran file foto max. 5 MB (jpg atau png)</small>
                </div>

                <center>
                    <button type="submit" disabled class="btn btn-info">Submit</button>
                </center>
            </form>
        </div>
    </div>


    </div>
@endsection

@section('js')
    <script>
        // image upload size limited
        const new_pic_input = document.getElementsByName('new_profile_pic')[0];
        new_pic_input.addEventListener('change', function() {
            if (this.files[0].size > 5242880) {
                alert('ukuran foto melebihi 5MB');
                this.value = '';
            }
        });
    </script>
    <script src="{{ asset('assets/js/detectChanges.js') }}"></script>
@endsection
