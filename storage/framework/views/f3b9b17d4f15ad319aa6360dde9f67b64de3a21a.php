<?php $__env->startSection('title'); ?>
Akun
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Data Akun</h1>

    <?php if($feedback): ?>
    <div id="alert" class="alert alert-<?php echo e($feedback['status']); ?>" role="alert">
        <?php echo e($feedback['message']); ?>

    </div>
    <?php endif; ?>

    <!-- DataTales Example -->
    <div class="card shadow mb-4 border-left-success">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold" style="color: #3DA020">Foto Profil</h6>
    </div>

    <div class="card-body">
        <center>
            <img class="img-account-profile rounded-circle mb-2" src="<?php echo e($profile_pic_filename); ?>" width="150" height="150" alt="">
        </center>

        <form method="POST" action="<?php echo e(route('dashboard.akun.changeProfilePic')); ?>" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>

            <input type="hidden" name="_method" value="PUT" />

            <div class="form-group">
                <label for="exampleFormControlFile1">Upload Foto Profil Baru</label>
                <input required name="new_profile_pic" accept="image/*" type="file" class="form-control-file" id="exampleFormControlFile1" accept=".jpg, .png, .jpeg">
                <small id="emailHelp" class="form-text text-muted">Ukuran file foto max. 5 MB (jpg atau png)</small>
            </div>

            <center>
                <button type="submit" disabled class="btn btn-info">Ubah</button>
            </center>
        </form>
    </div>
    </div>

    <div class="card shadow mb-4 border-left-success">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Informasi Tim</h6>
        </div>
        <div class="card-body">
            <form method="POST" action="<?php echo e(route('dashboard.akun.changeTeamName')); ?>" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="_method" value="PUT" />


                <div class="form-group">
                    <label for="exampleFormControlFile1">Nama Tim</label>
                    <input required name="new_team_name" value="<?php echo e($userDetails->team_name); ?>" type="text" class="form-control" maxlength="30">
                    <small id="emailHelp" class="form-text text-muted">Max. 30 karakter</small>
                </div>

                <center>
                    <button type="submit" disabled class="btn btn-info">Ubah</button>
                </center>
            </form>
        </div>
    </div>

    <div class="card shadow mb-4 border-left-success">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold" style="color: #3DA020">Ganti Password</h6>
        </div>
        <div class="card-body">
            <form method="POST" action="<?php echo e(route('dashboard.akun.changePassword')); ?>" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <input type="hidden" name="_method" value="PUT" />


                <div class="form-group">
                    <label for="exampleFormControlFile1">Password Lama</label>
                    <input name="old_password" required type="password" class="form-control" maxlength="20">
                    <small id="emailHelp" class="form-text text-muted">Max. 20 karakter</small>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlFile1">Password Baru</label>
                    <input name="new_password" required type="password" class="form-control" maxlength="20">
                    <small id="emailHelp" class="form-text text-muted">Max. 20 karakter</small>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlFile1">Konfirmasi Password Baru</label>
                    <input name="new_password_confirmation" required type="password" class="form-control" maxlength="20">
                    <small id="emailHelp" class="form-text text-muted">Max. 20 karakter</small>
                </div>

                <center>
                    <button type="submit" disabled class="btn btn-info">Ubah</button>
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
    new_pic_input.addEventListener('change', function(){
        if (this.files[0].size > 5242880)  {
            alert('ukuran foto melebihi 5MB');
            this.value = '';
        }
    });
</script>
<script src="<?php echo e(asset('assets/js/detectChanges.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('user.components.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/epstat/htdocs/resources/views/user/pages/akun.blade.php ENDPATH**/ ?>