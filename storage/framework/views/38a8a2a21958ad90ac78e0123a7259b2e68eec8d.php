<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.js"></script>

<div class="max-w-screen-lg mx-auto px-5">
        <div class="flex justify-between items-center">
            <h1 class="text-4xl py-10"><a href="<?php echo e(route('admin.home')); ?>">Submission</a></h1>
            <h1 class="text-4xl py-5"><a href="<?php echo e(route('admin.pendaftaran.lomba')); ?>">Pendaftaran Lomba</a></h1>
            <h1 class="text-4xl py-5"><a href="<?php echo e(route('admin.data.peserta')); ?>">Data Peserta</a></h1>
            
            <a href="<?php echo e(route('admin.logout')); ?>"
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
            <?php
                $no = 1;
            ?>

            <?php $__currentLoopData = $peserta; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($no++); ?></td>
                    <td><?php echo e($item['peserta_name']); ?></td>
                    <td><?php echo e($item['peserta_perguruan_tinggi']); ?></td>
                    <td><?php echo e($item['peserta_jurusan']); ?></td>
                    <td><?php echo e($item['peserta_angkatan']); ?></td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
</div>
<script>
    $(document).ready(function() {
        $('#myTable').DataTable();
    });
</script>
<?php /**PATH /home/epstat/htdocs/resources/views/admin/data_peserta.blade.php ENDPATH**/ ?>