<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EPSILON: Expose Statistic Challenge On National</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="uU9dQWUwle8yvAfRxLnOktx8yqDZzqSmYnWUcHnG" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/img/logo.png') }}" type="image/x-icon" />
    <link rel="apple-touch-icon" href="{{ asset('assets/img/logo.png') }}" />

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet" type="text/css">
    
    <!-- Custom Styles & Tailwind Config -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* slate-50 */
        }
        .orange-gradient-text {
            background: linear-gradient(90deg, #f97316, #ea580c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        orange: {
                            500: '#f97316',
                            600: '#ea580c',
                            700: '#c2410c',
                        },
                        navy: {
                            800: '#1e3a8a',
                            900: '#1e293b',
                        }
                    }
                }
            }
        }
    </script>
</head>

<body class="text-navy-900">

    <!-- App Container -->
    <div id="root">
        <!-- Header -->
        <header class="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" class="flex items-center gap-3 text-2xl font-bold text-navy-900">
                    <img src="{{ asset('assets/img/logo.png') }}" alt="Epsilon Logo" class="h-10 w-10" />
                    <span>EPSILON</span>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center gap-8 text-lg font-medium">
                    <a href="#" class="hover:text-orange-600 transition-colors">Home</a>
                    <a href="#lomba" class="hover:text-orange-600 transition-colors">Lomba</a>
                    <a href="#timeline" class="hover:text-orange-600 transition-colors">Timeline</a>
                    <a href="#faq" class="hover:text-orange-600 transition-colors">FAQ</a>
                </div>
                <div class="hidden lg:flex items-center gap-4">
                    <a href="{{ route('login') }}" class="px-6 py-2 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-md hover:shadow-lg">Login</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="lg:hidden text-2xl">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>

            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="hidden lg:hidden bg-white p-6 absolute top-full left-0 w-full shadow-md">
                <div class="flex flex-col gap-6 text-lg font-medium">
                    <a href="#" class="hover:text-orange-600 transition-colors">Home</a>
                    <a href="#lomba" class="hover:text-orange-600 transition-colors">Lomba</a>
                    <a href="#timeline" class="hover:text-orange-600 transition-colors">Timeline</a>
                    <a href="#faq" class="hover:text-orange-600 transition-colors">FAQ</a>
                    <div class="border-t border-slate-200 pt-6 flex flex-col gap-4">
                         <a href="{{ route('login') }}" class="w-full text-center px-6 py-3 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all">Login</a>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <!-- Hero Section -->
            <section class="relative overflow-hidden py-20 md:py-32 bg-white">
                <div class="container mx-auto px-6">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="text-center lg:text-left z-10">
                            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-navy-900">
                                EPSILON <span class="orange-gradient-text">2025</span>
                            </h1>
                            <p class="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
                                ExPose StatistIc chalLenge On National (Epsilon) adalah kompetisi untuk mengembangkan potensi akademik dan kreativitas mahasiswa serta siswa/i dalam bidang statistika, eksplorasi, dan visualisasi data.
                            </p>
                            <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="https://bit.ly/BukuPanduanEpsilon2025" target="_blank" class="px-8 py-4 rounded-xl font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Download Panduan
                                </a>
                            </div>
                        </div>
                        <div class="relative flex justify-center items-center h-full">
                            <div class="absolute w-full h-full bg-orange-100 rounded-full blur-3xl opacity-50"></div>
                            <img src="{{ asset('assets/img/maskot.png') }}" alt="Epsilon Mascot" class="relative w-3/4 max-w-md lg:w-full z-10 drop-shadow-2xl"/>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Lomba Section -->
            <section id="lomba" class="py-20 md:py-28">
                <div class="container mx-auto px-6 text-center">
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Cabang Perlombaan</h2>
                    <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        EPSILON 2025 mempersembahkan tiga cabang lomba yang menantang dan inovatif untuk menguji kemampuan statistika Anda.
                    </p>
                    <div class="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Lomba Card 1: NSIC -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <img src="{{ asset('assets/img/slide/nsic.png') }}" alt="Lomba NSIC" class="rounded-lg mb-6 w-full h-48 object-cover">
                            <h3 class="text-2xl font-bold text-navy-900">Lomba NSIC</h3>
                            <p class="text-slate-600 mt-3 flex-grow">Kompetisi inovasi ilmiah untuk siswa dengan ide solusi kreatif berbasis sains.</p>
                            <a href="#" class="mt-6 w-full text-center px-6 py-3 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-md hover:shadow-lg">Daftar NSIC</a>
                        </div>
                        <!-- Lomba Card 2: NDAC -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <img src="{{ asset('assets/img/slide/ndac.png') }}" alt="Kompetisi NDAC" class="rounded-lg mb-6 w-full h-48 object-cover">
                            <h3 class="text-2xl font-bold text-navy-900">Kompetisi NDAC</h3>
                            <p class="text-slate-600 mt-3 flex-grow">Debat akademik yang mengasah kemampuan berpikir kritis dan komunikasi.</p>
                             <a href="#" class="mt-6 w-full text-center px-6 py-3 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-md hover:shadow-lg">Daftar NDAC</a>
                        </div>
                        <!-- Lomba Card 3: SSIC -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <img src="{{ asset('assets/img/slide/ssic.png') }}" alt="Kompetisi SSIC" class="rounded-lg mb-6 w-full h-48 object-cover">
                            <h3 class="text-2xl font-bold text-navy-900">Kompetisi SSIC</h3>
                            <p class="text-slate-600 mt-3 flex-grow">Lomba karya tulis ilmiah dengan fokus pada solusi sosial dan lingkungan.</p>
                             <a href="#" class="mt-6 w-full text-center px-6 py-3 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-md hover:shadow-lg">Daftar SSIC</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Timeline Section -->
            <section id="timeline" class="py-20 md:py-28 bg-white">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Timeline <span class="orange-gradient-text">EPSILON 2025</span></h2>
                        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Catat tanggal-tanggal pentingnya dan jangan sampai terlewat!</p>
                    </div>
                    <div class="relative max-w-4xl mx-auto">
                        <!-- The vertical line -->
                        <div class="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-orange-200 rounded-full"></div>
                        
                        <!-- Timeline Items -->
                        <div class="space-y-12">
                            <!-- Item 1 -->
                            <div class="relative">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl">
                                    <h3 class="font-bold text-xl text-navy-800">Pendaftaran Gel. I & II</h3>
                                    <p class="text-slate-500 mt-1">29 Juli - 17 Agustus 2025</p>
                                </div>
                            </div>
                             <!-- Item 2 -->
                            <div class="relative flex justify-end">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl text-right">
                                    <h3 class="font-bold text-xl text-navy-800">Rehearsal (Gladi Bersih)</h3>
                                    <p class="text-slate-500 mt-1">6 September 2025</p>
                                </div>
                            </div>
                             <!-- Item 3 -->
                            <div class="relative">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl">
                                    <h3 class="font-bold text-xl text-navy-800">Pembukaan EPSILON</h3>
                                    <p class="text-slate-500 mt-1">7 September 2025</p>
                                </div>
                            </div>
                             <!-- Item 4 -->
                            <div class="relative flex justify-end">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl text-right">
                                    <h3 class="font-bold text-xl text-navy-800">Pengumuman Finalis</h3>
                                    <p class="text-slate-500 mt-1">7 September 2025</p>
                                </div>
                            </div>
                             <!-- Item 5 -->
                            <div class="relative">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl">
                                    <h3 class="font-bold text-xl text-navy-800">Technical Meeting</h3>
                                    <p class="text-slate-500 mt-1">8 September 2025</p>
                                </div>
                            </div>
                             <!-- Item 6 -->
                            <div class="relative flex justify-end">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl text-right">
                                    <h3 class="font-bold text-xl text-navy-800">Presentasi Final</h3>
                                    <p class="text-slate-500 mt-1">14 September 2025</p>
                                </div>
                            </div>
                             <!-- Item 7 -->
                            <div class="relative">
                                <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                                <div class="w-[calc(50%-2rem)] p-6 bg-white shadow-lg rounded-xl">
                                    <h3 class="font-bold text-xl text-navy-800">Pengumuman & Penutupan</h3>
                                    <p class="text-slate-500 mt-1">14 September 2025</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-center mt-12 text-slate-500">*) Jadwal tentatif dan dapat berubah sewaktu-waktu.</p>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section id="faq" class="py-20 md:py-28">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h5 class="text-lg font-bold text-orange-600">FAQS</h5>
                        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mt-2">Punya Pertanyaan?</h2>
                        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Temukan jawaban dari pertanyaan yang sering diajukan di sini.</p>
                    </div>
                    <div class="max-w-4xl mx-auto space-y-4">
                        <!-- FAQ Item 1 -->
                        <div class="faq-item bg-white rounded-xl shadow-md">
                            <button class="faq-question w-full flex justify-between items-center text-left p-6">
                                <span class="text-lg font-semibold text-navy-900">Apakah mahasiswa boleh mendaftar pada kedua cabang lomba sekaligus?</span>
                                <i class="faq-icon fa-solid fa-chevron-down transition-transform"></i>
                            </button>
                            <div class="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <p class="px-6 pb-6 text-slate-600">Mahasiswa boleh mendaftar pada kedua cabang lomba.</p>
                            </div>
                        </div>
                        <!-- FAQ Item 2 -->
                        <div class="faq-item bg-white rounded-xl shadow-md">
                            <button class="faq-question w-full flex justify-between items-center text-left p-6">
                                <span class="text-lg font-semibold text-navy-900">Bagaimana jika terdapat kendala saat akan mengumpulkan karya melalui website?</span>
                                <i class="faq-icon fa-solid fa-chevron-down transition-transform"></i>
                            </button>
                            <div class="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <p class="px-6 pb-6 text-slate-600">Jika peserta mengalami kendala saat pengumpulan karya, maka peserta harus segera menghubungi panitia Epsilon 2025 melalui contact person yang tersedia di bagian bawah halaman ini.</p>
                            </div>
                        </div>
                        <!-- FAQ Item 3 -->
                        <div class="faq-item bg-white rounded-xl shadow-md">
                            <button class="faq-question w-full flex justify-between items-center text-left p-6">
                                <span class="text-lg font-semibold text-navy-900">Apakah peserta diperbolehkan mengganti anggota tim dalam tahap perlombaan?</span>
                                <i class="faq-icon fa-solid fa-chevron-down transition-transform"></i>
                            </button>
                            <div class="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <p class="px-6 pb-6 text-slate-600">Peserta tidak diperbolehkan mengganti anggota tim selama tahap perlombaan berlangsung.</p>
                            </div>
                        </div>
                         <!-- FAQ Item 4 -->
                        <div class="faq-item bg-white rounded-xl shadow-md">
                            <button class="faq-question w-full flex justify-between items-center text-left p-6">
                                <span class="text-lg font-semibold text-navy-900">Bagaimana jika kami memiliki kesulitan atau pertanyaan lain?</span>
                                <i class="faq-icon fa-solid fa-chevron-down transition-transform"></i>
                            </button>
                            <div class="faq-answer overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <p class="px-6 pb-6 text-slate-600">Jika peserta menemukan kendala atau pertanyaan terkait proses pendaftaran, silakan hubungi contact person kami yang tertera di bagian footer website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-navy-900 text-white">
            <div class="container mx-auto px-6 py-16">
                <div class="grid lg:grid-cols-3 gap-12">
                    <div class="space-y-4">
                        <a href="/" class="flex items-center gap-3 text-2xl font-bold">
                            <img src="{{ asset('assets/img/logo.png') }}" alt="Epsilon Logo" class="h-10 w-10 bg-white rounded-full p-1" />
                            <span>EPSILON</span>
                        </a>
                        <p class="text-slate-400">Expose Statistic Challenge On National</p>
                    </div>
                    <div>
                        <h3 class="font-bold text-xl mb-4">Contact Person</h3>
                        <div class="space-y-3 text-slate-300">
                             <a target="_blank" href="https://wa.me/628988346608" class="flex items-center gap-3 hover:text-white transition-colors"><i class="fa-brands fa-whatsapp w-5 text-center"></i> +62 898-8346-608 (Hanifa)</a>
                             <a target="_blank" href="https://wa.me/6283150943984" class="flex items-center gap-3 hover:text-white transition-colors"><i class="fa-brands fa-whatsapp w-5 text-center"></i> +62 831-5094-3984 (Chinzia)</a>
                             <a target="_blank" href="https://wa.me/6283898568900" class="flex items-center gap-3 hover:text-white transition-colors"><i class="fa-brands fa-whatsapp w-5 text-center"></i> +62 838-9856-8900 (Suci)</a>
                        </div>
                    </div>
                     <div>
                        <h3 class="font-bold text-xl mb-4">Follow Us</h3>
                        <div class="flex items-center gap-4 text-2xl">
                            <a target="_blank" href="https://www.instagram.com/epsilon_himastaunp/" class="w-12 h-12 flex items-center justify-center bg-navy-800 rounded-full hover:bg-orange-600 transition-colors"><i class="fa-brands fa-instagram"></i></a>
                            <a target="_blank" href="https://youtube.com/channel/UCprQA42QtJ7Azap77ukVLvA" class="w-12 h-12 flex items-center justify-center bg-navy-800 rounded-full hover:bg-orange-600 transition-colors"><i class="fa-brands fa-youtube"></i></a>
                            <a target="_blank" href="mailto:epsilonunp22@gmail.com" class="w-12 h-12 flex items-center justify-center bg-navy-800 rounded-full hover:bg-orange-600 transition-colors"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div class="mt-16 pt-8 border-t border-navy-800 text-center text-slate-400">
                    <p>© Copyright 2024, EPSILON. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    </div>

    <script>
        // --- Mobile Menu Toggle ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- FAQ Accordion ---
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            question.addEventListener('click', () => {
                // Close other open FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        otherAnswer.style.maxHeight = '0px';
                        otherIcon.classList.remove('rotate-180');
                    }
                });
                
                // Toggle current FAQ
                if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                    answer.style.maxHeight = '0px';
                    icon.classList.remove('rotate-180');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.classList.add('rotate-180');
                }
            });
        });
    </script>
</body>
</html>
