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
                <th>Email</th>
                <th>User</th>
                <th>Team</th>
                <th>NDAC</th>
                <th>NSIC</th>
                <th>SSIC</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $no = 1;
            ?>

            <?php $__currentLoopData = $submission; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($no++); ?></td>
                    <td><?php echo e($item['email']); ?></td>
                    <td><?php echo e($item['username']); ?></td>
                    <td><?php echo e($item['team_name'] ?? '-'); ?></td>
                    <td>
                        <?php if($item['ndac'] ?? false): ?>
                            <a href="<?php echo e(route('admin.download', [
                                'type' => 'esai',
                                'filename' => $item['ndac']['submission_filename'],
                            ])); ?>"
                                class="w-min block mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" style="fill: rgba(76, 175, 80, 1);transform: ;msFilter:;">
                                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if($item['nsic'] ?? false): ?>
                            <a href="<?php echo e(route('admin.download', [
                                'type' => 'infografis',
                                'filename' => $item['nsic']['submission_filename'],
                            ])); ?>"
                                class="w-min block mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" style="fill: rgba(76, 175, 80, 1);transform: ;msFilter:;">
                                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if($item['ssic'] ?? false): ?>
                            <a href="<?php echo e(route('admin.download', [
                                'type' => 'ssic',
                                'filename' => $item['ssic']['submission_filename'],
                            ])); ?>"
                                class="w-min block mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" style="fill: rgba(76, 175, 80, 1);transform: ;msFilter:;">
                                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </td>
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
<?php /**PATH /home/epstat/htdocs/resources/views/admin/home.blade.php ENDPATH**/ ?>