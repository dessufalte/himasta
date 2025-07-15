<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="uU9dQWUwle8yvAfRxLnOktx8yqDZzqSmYnWUcHnG" />

    <link rel="stylesheet" href="<?php echo e(asset('assets/dist/css/index.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/main.css')); ?>" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet"
        type="text/css">


    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Archivo&amp;display=swap" rel="stylesheet" />

    <link rel="shortcut icon" href="<?php echo e(asset('assets/img/logo.png')); ?>" type="image/x-icon" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>EPSILON : Expose Statistic Challenge On National</title>

    <link rel="apple-touch-icon" href="<?php echo e(asset('assets/img/logo.png')); ?>" />

    <!-- <meta name="description"
    content="EPSILON atau Pekan Olimpiade Statistika Nasional merupakan program kerja tingakt nasional yang diselenggarakan oleh UKM Pendidikan dan Kebudayaan Bidang Forkas di bawah naungan Senat Mahasiswa Polstat STIS." />

  <meta property="og:site_name" content="https://poisson.stis.ac.id" />
  <meta property="og:title" content="EPSILON : Expose Statistic Challenge On National" />
  <meta property="og:description"
    content="Poisson atau Pekan Olimpiade Statistika Nasional merupakan program kerja tingakt nasional yang diselenggarakan oleh UKM Pendidikan dan Kebudayaan Bidang Forkas di bawah naungan Senat Mahasiswa Polstat STIS." />
  <meta property="og:image" content="https://poisson.stis.ac.id/static/landing-page.png" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="EPSILON : Expose Statistic Challenge On National" />
  <meta name="twitter:description"
    content="Poisson atau Pekan Olimpiade Statistika Nasional merupakan program kerja tingakt nasional yang diselenggarakan oleh UKM Pendidikan dan Kebudayaan Bidang Forkas di bawah naungan Senat Mahasiswa Polstat STIS." />
  <meta name="twitter:image" content="https://poisson.stis.ac.id/static/landing-page.png" />
  <style data-styled="active" data-styled-version="5.3.0"></style> -->
    <style>
        .lomba-items-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .lomba-item {
            margin-bottom: 20px;
            width: 80%;
            /* Adjust width as needed */
        }

        .lomba-slide img {
            width: 100%;
            height: auto;
        }

        .lomba-title-container,
        .lomba-description-container,
        .lomba-image-name {
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="root">
        <div class="app">

            <!-- nav -->
            <section style="transform: none">
                <header class="header">
                    <nav class="desktop-nav">
                        <a href="/" class="logo-nav nav-item">
                            <img src="<?php echo e(asset('assets/img/logo.png')); ?>" alt="logo" />EPSILON
                        </a>
                        <div class="top-middle-nav">
                            <a href="/" class="nav-item">Home</a>
                            <a href="#lomba" class="nav-item">Lomba</a>
                            <a href="#timeline" class="nav-item">Timeline</a>
                            <a href="#faq" class="nav-item">FAQ</a>
                        </div>
                        <div class="top-right-nav">
                            <a href="<?php echo e(route('login')); ?>" class="nav-item login-desktop">Login</a>
                            <a href="<?php echo e(route('register')); ?>" class="nav-item register-desktop">Daftar</a>
                        </div>
                    </nav>
                    <nav class="mobile-nav">
                        <a href="/" class="logo-nav nav-item">
                            <img src="<?php echo e(asset('assets/img/logo.png')); ?>" alt="logo" />EPSILON
                        </a>
                        <div class="top-middle-nav closed">
                            <div class="nav-item-list zhFBr">
                                <a href="/" class="Header__NavLink-sc-1mvtkxz-2 nav-item">Home</a>
                                <a href="#lomba" class="Header__NavLink-sc-1mvtkxz-2 nav-item">Lomba</a>
                                <a href="#timeline" class="Header__NavLink-sc-1mvtkxz-2 nav-item">Timeline</a>
                                <a href="#faq" class="Header__NavLink-sc-1mvtkxz-2 nav-item">FAQ</a>
                            </div>
                            <div class="nav-item-list zhFBr">
                                <a href="<?php echo e(route('login')); ?>" class="login-mobile nav-item">Login</a>
                                <a href="<?php echo e(route('register')); ?>" class="register-mobile nav-item">Daftar</a>
                            </div>
                        </div>
                        <button class="nav-toggle">
                            <i class="fa-sharp fa-solid fa-bars"></i>
                        </button>
                    </nav>
                </header>
            </section>

            <!-- intro -->
            <section style="transform: none">
                <div class="jcTaHb intro-container">
                    <div class="eysHZq intro">
                        <div class="iHvRaa hero">
                            <div class="hero-image hero-mascot keeMyT hIbyIK">
                                <div class="hero-image-container mascot kiPnBq">
                                    <img src="<?php echo e(asset('assets/img/maskot.png')); ?>"
                                        class="Hero__Image-sc-1u0fypn-8 csMrqK" style="translate: -15% 0;" />
                                </div>
                            </div>
                            <div class="hero-container">
                                <h2 class="title">
                                    EPSILON <wbr /><span class="orange">2024</span>
                                </h2>
                                <p class="description">
                                    ExPose StatistIc chalLenge On National (Epsilon) merupakan, perlombaan yang diadakan
                                    dengan tujuan untuk mengembangkan potensi akademik mahasiswa
                                    dan siswa/siswi dalam menyelesaikan permasalahan dan mencari solusi terkait
                                    permasalahan yang berhubungan dengan statistika,
                                    mengeksplorasi data dan memvisualisasikan data. perlombaan yang diselenggarakan
                                    untuk mahasiswa aktif D3/D4/S1 dan siswa/i SLTA sederajat di Sumatera Barat.EPSILON
                                    akan dilaksanakan secara online untuk seluruh mahasiswa di Indonesia dan
                                    offline untuk siswa/i SLTA sederajat di Provinsi Sumatera Barat.
                                </p>
                                <a href="<?php echo e(route('register')); ?>" class="description-register">Daftar</a>
                            </div>
                            <div class="hero-image hero-logo keeMyT hIbyIK">
                                <div class="hero-image-container logo kiPnBq">
                                    <img src="<?php echo e(asset('assets/img/logo.png')); ?>"
                                        class="Hero__Image-sc-1u0fypn-8 csMrqK" />
                                </div>
                                <div class="hero-image-background dCxcnT"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style="transform: none">
                <div id="lomba" class="sc-jrsJWt dJdFwe">
                    <div class="lomba-container bAVzgZ">
                        <div class="lomba-all jibPFy">
                            <div class="lomba-description-container DykGo jEEywD">
                                <div class="lomba-title-container kFmqyc">
                                    <h2 class="lomba-title titles gfuSqG syKsX">Lomba</h2>
                                    <p class="lomba-description hmqpxx">
                                        Rangkaian kegiatan EPSILON 2024 terdiri dari 3 jenis perlombaan
                                    </p>
                                </div>
                            </div>
                            <div class="lomba-items-container">
                                <div class="">
                                    <a href="https://bit.ly/BukuPanduanEpsilon2024" class="btn btn-info">Download buku
                                        pedoman</a>
                                </div>
                                <div class="lomba-item lomba-infografis DykGo iPexDg">
                                    <div class="item eEJWPz">
                                        <div style="position: relative">
                                            <div class="lomba-slide">
                                                <img class="selected" src="<?php echo e(asset('assets/img/slide/nsic.png')); ?>"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="lomba-image-name hKymwP">
                                            <h5 class="biCrYn">Lomba NSIC</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="lomba-item lomba-esai DykGo iPexDg">
                                    <div class="item eEJWPz">
                                        <div style="position: relative">
                                            <div class="lomba-slide">
                                                <img class="selected" src="<?php echo e(asset('assets/img/slide/ndac.png')); ?>"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="lomba-image-name hKymwP">
                                            <h5 class="biCrYn">Kompetisi NDAC</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="lomba-item lomba-esai DykGo iPexDg">
                                    <div class="item eEJWPz">
                                        <div style="position: relative">
                                            <div class="lomba-slide">
                                                <img class="selected" src="<?php echo e(asset('assets/img/slide/ssic.png')); ?>"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="lomba-image-name hKymwP">
                                            <h5 class="biCrYn">Kompetisi SSIC</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"
                        class="sc-dlMDgC kpPvTx">
                        <g transform="translate(300,300)">
                            <path
                                d="M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z"
                                fill="currentColor"></path>
                        </g>
                    </svg>
                </div>
            </section>


            <!-- timeline -->
            <section style="transform: none;">
            <div id="timeline">
                    <div class="timeline-container jcTaHb">
                        <div class="timeline hydYaP">
                            <div class="timeline-title kydRHc">
                                <h2 class="titles gfuSqG lpaEYv">Timeline <span
                                        class="orange sc-bCwfaz hzzSzX">EPSILON 2024</span></h2>
                            </div>
                            <div class="timeline-list-container fHUQtx">
                                <div class="timeline-list hpRDUw">
                                    <div class="sc-bYwzuL fxnzEe">
                                        <div class="sc-kLojOw fEbukM">
                                            <h3 class="sc-iklJeh hbusih">Pendaftaran Gelombang I & II</h3>
                                            <p class="sc-jJMGnK laKGqb">29 Juli - 17 Agustus 2024</p>
                                        </div>
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">1</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL kLLIMD">
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">2</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                        <div class="sc-kLojOw crXLsP">
                                            <h3 class="sc-iklJeh hbusih">Rehearsal (Gladi Bersih) </h3>
                                            <p class="sc-jJMGnK laKGqb">6 September 2024</p>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL fxnzEe">
                                        <div class="sc-kLojOw fEbukM">
                                            <h3 class="sc-iklJeh hbusih">Pembukuan EPSILON</h3>
                                            <p class="sc-jJMGnK laKGqb">7 September 2024</p>
                                        </div>
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">3</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL kLLIMD">
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">4</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                        <div class="sc-kLojOw crXLsP">
                                            <h3 class="sc-iklJeh hbusih">Pengumuman Finalis</h3>
                                            <p class="sc-jJMGnK laKGqb">7 September 2024</p>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL fxnzEe">
                                        <div class="sc-kLojOw fEbukM">
                                            <h3 class="sc-iklJeh hbusih">Technical Meeting</h3>
                                            <p class="sc-jJMGnK laKGqb">8 September 2024</p>
                                        </div>
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">5</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL kLLIMD">
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">6</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                        <div class="sc-kLojOw crXLsP">
                                            <h3 class="sc-iklJeh hbusih">Presentasi Final NDAC, NSIC dan SSIC</h3>
                                            <p class="sc-jJMGnK laKGqb">14 September 2024</p>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL fxnzEe">
                                        <div class="sc-kLojOw fEbukM">
                                            <h3 class="sc-iklJeh hbusih">Pengumuman Pemenang</h3>
                                            <p class="sc-jJMGnK laKGqb">14 September 2024</p>
                                        </div>
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">7</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                    </div>
                                    <div class="sc-bYwzuL kLLIMD">
                                        <div class="sc-iJCRrE bojiJp">
                                            <div class="sc-ezzafa dvHFX">8</div>
                                            <div class="sc-giAqHp bYgUJS"></div>
                                        </div>
                                        <div class="sc-kLojOw crXLsP">
                                            <h3 class="sc-iklJeh hbusih">Penutupan EPSILON</h3>
                                            <p class="sc-jJMGnK laKGqb">14 September 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="sc-hKFxyN sc-fKgJPI kksiKu cxbltl">*) Jadwal Tentatif</p>
                                <p class="sc-hKFxyN sc-fKgJPI kksiKu cxbltl">*) Hati Hati Penipuan, Pendaftrannya Dilakukan di WEB ini</p>
                            </div>
                        </div>
                        <svg viewBox="0 0 600 600" class="sc-gXfVKN jKLUHq">
                            <g transform="translate(300,300)">
                                <path
                                    d="M134.6,-126.1C171.1,-98.1,195,-49,182.7,-12.4C170.3,24.3,121.6,48.6,85.1,84.6C48.6,120.6,24.3,168.3,-21.9,190.2C-68.1,212.1,-136.2,208.2,-181.1,172.2C-225.9,136.2,-247.5,68.1,-229.7,17.8C-211.9,-32.5,-154.7,-65.1,-109.9,-93.1C-65.1,-121.1,-32.5,-144.5,8.2,-152.8C49,-161,98.1,-154.1,134.6,-126.1Z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 600 600" class="sc-hiKfDv dRsyqq">
                            <g transform="translate(300,300)">
                                <path
                                    d="M86.4,-125.7C108.9,-102.5,122,-73.2,149.6,-37.1C177.2,-0.9,219.4,42,223.6,86.1C227.8,130.3,194.2,175.6,150.6,200.7C107,225.9,53.5,231,5.2,223.8C-43.1,216.7,-86.2,197.3,-109.5,165.6C-132.8,133.8,-136.3,89.6,-138.8,52.1C-141.4,14.6,-143,-16.2,-147,-61.4C-151,-106.6,-157.5,-166.1,-133.4,-188.8C-109.3,-211.5,-54.7,-197.2,-11.4,-181.6C31.9,-166,63.9,-148.9,86.4,-125.7Z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>

            <!-- faq -->
            <section style="transform: none;">
                <div id="faq" class="jcTaHb">
                    <div class="faq-container hydYaP">
                        <div class="faq fuJtcf">
                            <div class="faq-title">
                                <h5 class="sc-dlnjwi sc-cOifOu dJXsSm haQoIp">FAQS</h5>
                                <h2 class="titles  sc-Arkif gfuSqG eJDRKz">Any <span class="orange enlJuL">Questions
                                        ?</span>
                                </h2>
                                <p class="sc-hKFxyN sc-khIgEk kksiKu hQhHpX"></p>
                            </div>

                            <dl class="faq-list jcqGXt">
                                <div class="ljWfRO group">
                                    <dt class="jdiWPe">
                                        <span class="sc-jffHpj jjTcTs">apakah mahasiswa boleh mendaftar pada kedua
                                            cabang lomba sekaligus?</span><span class="sc-eJocfa jARayQ"
                                            style="transform: none"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-chevron-down">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg></span>
                                    </dt>
                                    <dd class="sc-oeezt OJJCp" style="opacity: 0; height: 0px; margin-top: 0px">
                                        Mahasiswa boleh mendaftar pada kedua cabang lomba.
                                    </dd>
                                </div>
                                <div class="sc-laZMeE ljWfRO group">
                                    <dt class="sc-iNiQyp jdiWPe">
                                        <span class="sc-jffHpj jjTcTs">
                                            Bagaimana jika terdapat kendala saat akan mengumpulkan karya melalui
                                            website?</span><span class="sc-eJocfa jARayQ" style="transform: none"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-chevron-down">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg></span>
                                    </dt>
                                    <dd class="sc-oeezt OJJCp" style="opacity: 0; height: 0px; margin-top: 0px">
                                        Jika peserta mengalami kendala saat pengumpulan karya, maka peserta harus segera
                                        menghubungi panitia Epsilon 2023 melalui contact
                                        person
                                        kami dibawah.
                                    </dd>
                                </div>
                                <div class="sc-laZMeE ljWfRO group">
                                    <dt class="sc-iNiQyp jdiWPe">
                                        <span class="sc-jffHpj jjTcTs">Apakah peserta diperbolehkan mengganti anggota
                                            tim dalam tahap perlombaan?</span><span class="sc-eJocfa jARayQ"
                                            style="transform: none"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-chevron-down">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg></span>
                                    </dt>
                                    <dd class="sc-oeezt OJJCp" style="opacity: 0; height: 0px; margin-top: 0px">
                                        Peserta tidak diperbolehkan mengganti anggota tim selama tahap perlombaan.
                                    </dd>
                                </div>
                                <div class="sc-laZMeE ljWfRO group">
                                    <dt class="sc-iNiQyp jdiWPe">
                                        <span class="sc-jffHpj jjTcTs">Bagaimana jika kami memiliki kesulitan atau
                                            pertanyaan lain selama proses pendaftaran?</span><span
                                            class="sc-eJocfa jARayQ" style="transform: none"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-chevron-down">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg></span>
                                    </dt>
                                    <dd class="sc-oeezt OJJCp" style="opacity: 0; height: 0px; margin-top: 0px">
                                        jika peserta menemukan kendala atau pertanyaan terkait proses pendaftaran, maka
                                        peserta dapat menghubungi contact person kami
                                        dibawah.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"
                        class="sc-hhIiOg iwisNA">
                        <g transform="translate(300,300)">
                            <path
                                d="M82,-98.3C129.8,-57.7,208.2,-54.1,229.6,-26.6C251.1,1,215.6,52.5,172.9,74.9C130.2,97.2,80.3,90.4,37.8,107.5C-4.8,124.7,-40,165.7,-63.3,162.3C-86.5,158.8,-97.8,110.9,-109.3,72.2C-120.7,33.5,-132.2,4.1,-140.1,-37.4C-147.9,-79,-152.1,-132.6,-128.1,-177.3C-104.1,-222.1,-52.1,-258,-17.5,-237.2C17.1,-216.4,34.3,-138.9,82,-98.3Z"
                                fill="currentColor"></path>
                        </g>
                    </svg><svg viewBox="0 0 600 600" class="sc-eirqVv dSzotL">
                        <g transform="translate(300,300)">
                            <path
                                d="M153.6,-239C199.1,-209.8,236,-167.2,258.4,-118C280.9,-68.9,288.9,-13.1,281.2,40.4C273.5,93.9,250.1,145.2,214.7,186.1C179.3,226.9,131.9,257.4,80,272.6C28.2,287.8,-28.2,287.8,-80,272.6C-131.9,257.4,-179.3,226.9,-214.7,186.1C-250.1,145.2,-273.5,93.9,-281.2,40.4C-288.9,-13.1,-280.9,-68.9,-258.4,-118C-236,-167.2,-199.1,-209.8,-153.6,-239C-108.1,-268.3,-54.1,-284.1,0,-284.1C54.1,-284.1,108.1,-268.3,153.6,-239Z"
                                fill="currentColor"></path>
                        </g>
                    </svg>
                </div>
            </section>

            <!-- footer -->
            <section style="transform: none;">
                <div class="footer-container jcTaHb ghCdOs">
                    <div class="footer dGJRan">
                        <div class="kVjkXt">
                            <div class="footer-logo jREztg">
                                <img src="./img/logo.png" class="sc-FRrlG cIjgB" />
                                <h5 class="sc-fXazdy UjHkE">EPSILON</h5>
                            </div>
                            <div class="footer-hyperlinks iduHXF">
                                <a href="/" class="sc-TtZnY gnBPmJ">Home</a>
                                <a href="#lomba" class="sc-TtZnY gnBPmJ">Lomba</a>
                                <a href="#timeline" class="sc-TtZnY gnBPmJ">Timeline</a>
                                <a href="#faq" class="sc-TtZnY gnBPmJ">FAQ</a>
                            </div>
                            <div class="footer-contact egeLzW">
                                <a target="_blank" href="https://wa.me/628988346608"
                                    class="sc-hmbstg iriXCP">Contact Person 1 (WA) : +62 898-8346-608 (Hanifa)</a>
                            </div>
                            <div class="footer-contact egeLzW">
                                <a target="_blank" href="https://wa.me/6283150943984"
                                    class="sc-hmbstg iriXCP">Contact Person 2 (WA) : +62 831-5094-3984 (Chinzia)</a>
                            </div>
                            <div class="footer-contact egeLzW">
                                <a target="_blank" href="https://wa.me/6283898568900"
                                    class="sc-hmbstg iriXCP">Contact Person 3 (WA) : +62 838-9856-8900 (Suci)</a>
                            </div>
                            <div class="footer-links bvMJFo">
                                <a target="_blank" target="_blank"
                                    href="https://www.instagram.com/epsilon_himastaunp/" class="sc-hmbstg iriXCP">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-instagram">
                                        <rect x="2" y="2" width="20" height="20" rx="5"
                                            ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://youtube.com/channel/UCprQA42QtJ7Azap77ukVLvA"
                                    class="sc-hmbstg iriXCP">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                                        viewBox="-35.20005 -41.33325 305.0671 247.9995">
                                        <path
                                            d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"
                                            fill="#fff" />
                                    </svg>
                                </a>
                                <a target="_blank" href="mailto:epsilonunp22@gmail.com?Subject="
                                    class="sc-hmbstg iriXCP">
                                    <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24"
                                        role="img" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                                        stroke-width="1">
                                        <title>Gmail icon</title>
                                        <path
                                            d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <p class="sc-jHNicF bMmwdY">© Copyright 2023, EPSILON All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <script src="<?php echo e(asset('assets/dist/js/index.js')); ?>"></script>
</body>

</html>
<?php /**PATH /home/epstat/htdocs/resources/views/welcome.blade.php ENDPATH**/ ?>