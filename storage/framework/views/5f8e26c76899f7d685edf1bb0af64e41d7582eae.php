<?php
    $user = Auth::user();
    $status_pendaftaran = DB::table('kategori_lomba')
        ->where('user_id', $user->id)
        ->where('status_pendaftaran', 'pendaftaran Disetujui')
        ->get();
    $kategori_lomba = DB::table('kategori_lomba')
        ->where('user_id', $user->id)
        ->where('status_pendaftaran', 'pendaftaran Disetujui')
        ->get();
    $kategori_alias = [
        'esai' => 'NDAC',
        'infografis' => 'NSIC',
        'ssic' => 'SSIC',
    ];
?>
<!-- Sidebar -->
<ul class="navbar-nav bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar" style="background-color: #3DA020;">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?php echo e(route('dashboard.akun')); ?>">
        <div class="sidebar-brand-icon">
            <img src="<?php echo e(asset('assets/img/logo.png')); ?>" width="30px">
        </div>
        <div class="sidebar-brand-text mx-3">EPSILON</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
        <a class="nav-link" href="<?php echo e(route('welcome')); ?>">
            <i class="fas fa-fw fa-home"></i>
            <span>Home</span>
        </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Profil
    </div>

    <!-- Informasi -->
    <li class="nav-item <?php if(Request::is('dashboard/akun')): ?> active <?php endif; ?>">
        <a class="nav-link" href="<?php echo e(route('dashboard.akun')); ?>">
            <i class="fas fa-fw fa-user-cog"></i>
            <span>Akun</span>
        </a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="<?php echo e(route('dashboard.daftar.lomba')); ?>">
            <i class="fas fa-fw fa-users"></i>
            <span>Daftar Lomba</span>
        </a>
    </li>

    <?php if($status_pendaftaran->isNotEmpty()): ?>
        <li class="nav-item <?php if(Request::is('dashboard/peserta')): ?> active <?php endif; ?>">
            <a class="nav-link" href="<?php echo e(route('dashboard.peserta')); ?>">
                <i class="fas fa-fw fa-users"></i>
                <span>Data Peserta</span>
            </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Lomba
        </div>

        <?php $__currentLoopData = $kategori_lomba; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $kategori): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <li class="nav-item <?php if(Request::is('dashboard/lomba/' . $kategori->nama_kategori)): ?> active <?php endif; ?>">
                <a class="nav-link" href="<?php echo e(route('dashboard.lomba', $kategori->nama_kategori)); ?>">
                    <i class="fas fa-fw fa-scroll"></i>
                    <span><?php echo e($kategori_alias[$kategori->nama_kategori] ?? $kategori->nama_kategori); ?></span>
                </a>
            </li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    <?php endif; ?>

    <?php if(Route::has('dashboard.pengumuman')): ?>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <li class="nav-item">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-bullhorn"></i>
                <span>Pengumuman</span>
            </a>
        </li>
    <?php endif; ?>

    <hr class="sidebar-divider">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
<!-- End of Sidebar -->
<?php /**PATH D:\DOKUMEN PENTING\PROJECT WEBS\himasta\htdocs\resources\views/user/components/sidebar.blade.php ENDPATH**/ ?>