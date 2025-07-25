<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="shortcut icon" href="img/logo-tk.ico">
  <title>Dashboard | @yield('title')</title>


  <!-- Custom fonts for this template -->
  <link href="{{asset('assets/admin/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link rel="shortcut icon" href="{{ asset('assets/img/logo.png') }}" type="image/x-icon" />

  <!-- Custom styles for this template -->
  <link href="{{asset('assets/admin/css/sb-admin-2.min.css')}}" rel="stylesheet">

  <!-- Custom styles for this page -->
  <link href="{{asset('assets/admin/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">

  {{-- make every file input max-width to 300px --}}
  <style>
      input[type='file']{
          max-width: 300px;
      }

      td a {
          color: inherit;
      }
  </style>

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    @include('user.components.sidebar')

    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            @include('user.components.navbar')

            <div class="container-fluid">
                @yield('content')
            </div>

            @include('user.components.footer')

            <!-- Left navbar cookie -->
            <script src="{{ asset('assets/js/sidebar-cookie.js') }}"></script>
        </div>
    </div>
  </div>
  <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap core JavaScript-->
  <script src="{{ asset('assets/admin/vendor/jquery/jquery.min.js') }}"></script>
  <script src="{{ asset('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

  <!-- Core plugin JavaScript-->
  <script src="{{ asset('assets/admin/vendor/jquery-easing/jquery.easing.min.js') }}"></script>

  <!-- Custom scripts for all pages-->
  <script src="{{ asset('assets/admin/js/sb-admin-2.min.js') }}"></script>

  <!-- Page level plugins -->
  <script src="{{ asset('assets/admin/vendor/chart.js/Chart.min.js') }}"></script>

  <!-- Page level custom scripts -->
  <script src="{{ asset('assets/admin/js/demo/chart-area-demo.js') }}"></script>
  <script src="{{ asset('assets/admin/js/demo/chart-pie-demo.js') }}"></script>

  @yield('js')
</body>

</html>
