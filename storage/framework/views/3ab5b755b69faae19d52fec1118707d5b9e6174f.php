<?php $__env->startSection('title'); ?>
    Data Peserta
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Data Peserta</h1>
    <p class="mb-4">Mohon untuk melengkapkan data peserta anda</p>


    <?php for($i = 0; $i < 3; $i++): ?>
        <!-- DataTales Example -->
        
        <?php if(isset($peserta[$i]) && $peserta[$i]['already_filled']): ?>
            <div class="card shadow mb-4 border-left-success">
            <?php elseif(isset($peserta[$i])): ?>
                <div class="card shadow mb-4 border-left-danger">
                <?php else: ?>
                    <?php continue; ?>
        <?php endif; ?>
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Form Peserta <?php echo e($i + 1); ?></h6>
        </div>
        <div class="card-body">
            <form method="POST" action="<?php echo e(route('dashboard.peserta.changePesertaData', $i + 1)); ?>"
                enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="_method" value="PUT" />
                <div class="form-group">
                    <label for="exampleInputEmail1">Nama Lengkap</label>
                    <input name="peserta_name" value="<?php echo e($peserta[$i]['peserta_name']); ?>" type="text"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="100">
                    <small id="emailHelp" class="form-text text-muted">Max. 100 karakter</small>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input name="peserta_email" value="<?php echo e($peserta[$i]['peserta_email']); ?>" type="email"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="100">
                </div>

                <div class="form-group">
                    <label>Asal Sekolah/Universitas</label>
                    <input name="peserta_perguruan_tinggi" value="<?php echo e($peserta[$i]['peserta_perguruan_tinggi']); ?>"
                        type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp"
                        maxlength="50">
                    <small id="emailHelp" class="form-text text-muted">Max. 50 karakter</small>
                </div>

                <div class="form-group">
                    <label>Jurusan</label>
                    <input name="peserta_jurusan" value="<?php echo e($peserta[$i]['peserta_jurusan']); ?>" type="text"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="20">
                    <small id="emailHelp" class="form-text text-muted">Max. 20 karakter</small>
                </div>

                <div class="form-group">
                    <label>Angkatan Peserta</label>
                    <input name="peserta_angkatan" value="<?php echo e($peserta[$i]['peserta_angkatan']); ?>" type="text"
                        class="form-control" id="exampleInputText" aria-describedby="emailHelp" maxlength="4">
                    <small id="emailHelp" class="form-text text-muted">Contoh: 2019, 2022</small>
                </div>

                

                
                <center>
                    <button disabled type="submit" class="btn btn-info">Ubah</button>
                </center>
            </form>
        </div>
        </div>
    <?php endfor; ?>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('js'); ?>
    <script src="<?php echo e(asset('assets/js/detectChanges.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('user.components.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/epstat/htdocs/resources/views/user/pages/peserta.blade.php ENDPATH**/ ?>