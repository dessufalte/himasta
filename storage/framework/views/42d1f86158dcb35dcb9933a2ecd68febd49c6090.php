<?php $__env->startSection('title'); ?>
Lomba
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<!-- Page Heading -->

<h1 class="h3 mb-2 text-gray-800">Data Submission Lomba <?php echo e($type == 'esai' ? "NDAC" : ($type == 'ssic' ? "SSIC" : "NSIC")); ?> </h1>
<p class="mb-4">Mohon untuk mengumpulkan submission lomba anda</p>

<!-- DataTales Example -->
<?php if($submission['submission_status'] === 1): ?>
    <div class="card shadow mb-4 border-left-success">
<?php elseif($submission['submission_status'] === 0): ?>
    <div class="card shadow mb-4 border-left-danger">
<?php endif; ?>

<div class="card-header py-3">
    <h6 class="m-0 font-weight-bold" style="color: #3DA020">Status Submission Lomba</h6>
</div>
<div class="card-body">
    <div class="form-group">
        <label>Status: </label>
        <?php if($submission['submission_status'] === 1): ?>
            <span>Submitted</span>
        <?php elseif($submission['submission_status'] === 0): ?>
            <span>Not Submitted</span>
        <?php endif; ?>
    </div>
    <div class="form-group">
        <label>Due Date: </label>
        <span><?php echo e($due_date); ?></span>
    </div>

    <div class="form-group">
        <label>Last Submitted: </label>
        <?php if($submission['submission_status'] === 1): ?>
            <span><?php echo e(date('F j, Y', strtotime($submission['updated_at']))); ?></span>
        <?php elseif($submission['submission_status'] === 0): ?>
            <span>-</span>
        <?php endif; ?>
    </div>

    <div class="form-group">
        <label>Current Submitted File: </label>
        <?php if($submission['submission_status'] === 1): ?>
            <span>
                <a target="_blank" href="<?php echo e(route('fileAccess.submission_file', $submission['submission_filename'])); ?>">
                    <?php echo e($submission['submission_uploaded_filename']); ?>

                </a>
        </span>
        <?php elseif($submission['submission_status'] === 0): ?>
            <span>-</span>
        <?php endif; ?>
    </div>
</div>
</div>

<div class="card shadow mb-4 border-left-warning">
<div class="card-header py-3">
    <h6 class="m-0 font-weight-bold" style="color: #3DA020">Upload Submission Lomba</h6>
</div>
<div class="card-body">
    <form method="POST" action="<?php echo e(route('dashboard.lomba.updateSubmission', $type)); ?>" enctype="multipart/form-data">
    <?php echo csrf_field(); ?>
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
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
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
<script src="<?php echo e(asset('assets/js/detectChanges.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('user.components.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/epstat/htdocs/resources/views/user/pages/lomba.blade.php ENDPATH**/ ?>