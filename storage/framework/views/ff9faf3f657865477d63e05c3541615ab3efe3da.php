<script src="https://cdn.tailwindcss.com"></script>
<!-- component -->
<div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
        <img src="https://pbs.twimg.com/media/ETZVvr7UUAIb5_A.jpg" alt="Placeholder Image"
            class="object-cover w-full h-full">
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Admin Login</h1>
        <form action="<?php echo e(route('admin.b_login')); ?>" method="POST">
            <?php echo csrf_field(); ?>
            <!-- Username Input -->
            <div class="mb-4">
                <label for="username" class="block text-gray-600">Username</label>
                <input type="text" id="username" name="username"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off">
            </div>
            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-gray-600">Password</label>
                <input type="password" id="password" name="password"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off">
            </div>
            <!-- Login Button -->
            <button type="submit"
                class="bg-[#f68586] hover:bg-[#f68586] text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
        </form>
    </div>
</div>
<?php /**PATH D:\DOKUMEN PENTING\PROJECT WEBS\himasta\htdocs\resources\views/admin/login.blade.php ENDPATH**/ ?>