<?php $__env->startSection('title'); ?>
    Daftar Lomba
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Daftar Lomba</h1>

    <div class="card shadow mb-4 border-left-success">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Data Pendaftar Lomba</h6>
        </div>

        <div class="card-body">
            <?php $__currentLoopData = $kategori_lomba; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="form-group">
                    <label>Nama : </label>
                    <span><?php echo e($k->username); ?></span>
                </div>

                <div class="form-group">
                    <label>Kategori Lomba : </label>
                    
                    <span>
                        <?php if($k->nama_kategori === 'esai'): ?>
                            NDAC
                        <?php elseif($k->nama_kategori === 'infografis'): ?>
                            NSIC
                        <?php else: ?>
                            SSIC
                        <?php endif; ?>
                    </span>
                </div>

                <div class="form-group">
                    <label for=""> Status Pendaftaran : </label>
                    <span>
                        <?php if($k->status_pendaftaran == 'Pendaftaran Disetujui'): ?>
                            <span class="text-green-500">Disetujui</span>
                        <?php else: ?>
                            <span class="text-red-500">Pending</span>
                        <?php endif; ?>
                    </span>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

    <!-- DataTales Example -->
    <div class="card shadow mb-4 border-left-success">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Daftar Lomba</h6>
        </div>

        <div class="card-body">
            <form method="POST" action="<?php echo e(route('dashboard.daftar.lomba.save')); ?>" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
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
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
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
    <script src="<?php echo e(asset('assets/js/detectChanges.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('user.components.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/epstat/htdocs/resources/views/user/pages/daftar_lomba.blade.php ENDPATH**/ ?>