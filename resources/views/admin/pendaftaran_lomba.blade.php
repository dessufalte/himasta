<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.js"></script>

<div class="max-w-screen-lg mx-auto px-5">
    <div class="flex justify-between items-center">
        <h1 class="text-4xl py-10"><a href="{{ route('admin.home') }}">Submission</a></h1>
        <h1 class="text-4xl py-5"><a href="{{ route('admin.pendaftaran.lomba') }}">Pendaftaran Lomba</a></h1>
        <a href="{{ route('admin.logout') }}"
            class="text-red-500 font-semibold hover:opacity-80 text-2xl bg-red-200 block p-2 px-4 pt-0">x</a>
    </div>
    <hr class="pb-5">
    <table id="myTable" class="display">
        <thead>
            <tr>
                <th>No</th>
                <th>User</th>
                <th>Kategori</th>
                <th>Bukti Pembayaran</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @php
                $no = 1;
            @endphp

            @foreach ($kategori_lomba as $k)
                <tr>
                    <td>{{ $no++ }}</td>
                    <td>{{ $k->username }}</td>
                    <td>{{ $k->nama_kategori }}</td>
                    <td>
                        @if ($k->upload_pembayaran)
                            <a href="{{ route('admin.download.bukti.pembayaran', ['filename' => $k->upload_pembayaran]) }}"
                                class="w-min block mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" style="fill: rgba(76, 175, 80, 1);">
                                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                                </svg>
                            </a>
                        @endif
                    </td>
                    <td>
                        @if ($k->status_pendaftaran == 'Pendaftaran Disetujui')
                            <span class="text-green-500">Pendaftaran Disetujui</span>
                        @else
                            <a href="{{ route('admin.status.pendaftaran', $k->id_kategori) }}"
                                onclick="return confirm('Apakah Yakin Ingin Menyetujui Pendaftaran Lomba ini?')">
                                <div
                                    class="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M17.414 2.586a2 2 0 010 2.828l-10 10a2 2 0 01-.878.474l-4 1a1 1 0 01-1.2-1.2l1-4a2 2 0 01.474-.878l10-10a2 2 0 012.828 0zM15.293 6.293L7 14.586V16h1.414l8.293-8.293-1.414-1.414zm1.414-1.414l1.414 1.414L17.414 4.88l-1.414-1.414z" />
                                    </svg>
                                </div </a>
                        @endif
                    </td>
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
