<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.js"></script>

<div class="max-w-screen-lg mx-auto px-5">
        <div class="flex justify-between items-center">
            <h1 class="text-4xl py-10"><a href="{{route('admin.home')}}">Submission</a></h1>
            <h1 class="text-4xl py-5"><a href="{{route('admin.pendaftaran.lomba')}}">Pendaftaran Lomba</a></h1>
            <h1 class="text-4xl py-5"><a href="{{route('admin.data.peserta')}}">Data Peserta</a></h1>
            {{-- <a href="">Submission</a>
            <a href="">Daftar Lomba</a> --}}
            <a href="{{ route('admin.logout') }}"
                class="text-red-500 font-semibold hover:opacity-80 text-2xl bg-red-200 block p-2 px-4 pt-0">x</a>
        </div>
    <hr class="pb-5">
    <table id="myTable" class="display">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Asal Sekolah/Universitas</th>
                <th>Jurusan</th>
                <th>Angkatan Peserta</th>
            </tr>
        </thead>
        <tbody>
            @php
                $no = 1;
            @endphp

            @foreach ($peserta as $item)
                <tr>
                    <td>{{ $no++ }}</td>
                    <td>{{ $item['peserta_name'] }}</td>
                    <td>{{ $item['peserta_perguruan_tinggi'] }}</td>
                    <td>{{ $item['peserta_jurusan']}}</td>
                    <td>{{ $item['peserta_angkatan']}}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
<script>
    $(document).ready(function() {
        $('#myTable').DataTable();
    });
</script>
