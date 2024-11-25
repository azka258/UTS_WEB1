        // Fungsi untuk menampilkan halaman utama
        function showHomePage() {
            document.getElementById('homePage').style.display = 'block';
            document.getElementById('detailPage').style.display = 'none';
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('registerPage').style.display = 'none';
            document.getElementById('menuPage').style.display = 'none';
        }

        // Fungsi untuk menampilkan halaman login
        function showLoginPage() {
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('detailPage').style.display = 'none';
            document.getElementById('loginPage').style.display = 'block';
            document.getElementById('registerPage').style.display = 'none';
            document.getElementById('menuPage').style.display = 'none';
        }

        // Fungsi untuk menampilkan halaman registrasi
        function showRegisterPage() {
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('detailPage').style.display = 'none';
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('registerPage').style.display = 'block';
            document.getElementById('menuPage').style.display = 'none';
        }

        // Fungsi untuk menampilkan halaman menu utama setelah login
        function showMenuPage() {
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('detailPage').style.display = 'none';
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('registerPage').style.display = 'none';
            document.getElementById('menuPage').style.display = 'block';
        }

        // Fungsi untuk menampilkan detail informasi
        function showDetail(infoId) {
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('detailPage').style.display = 'block';
            if (infoId === 1) {
                document.getElementById('detailTitle').innerHTML = 'Informasi 1';
                document.getElementById('detailDescription').innerHTML = 'Deskripsi lengkap informasi perusahaan 1.';
            } else if (infoId === 2) {
                document.getElementById('detailTitle').innerHTML = 'Informasi 2';
                document.getElementById('detailDescription').innerHTML = 'Deskripsi lengkap informasi perusahaan 2.';
            } else if (infoId === 3) {
                document.getElementById('detailTitle').innerHTML = 'Informasi 3';
                document.getElementById('detailDescription').innerHTML = 'Deskripsi lengkap informasi perusahaan 3.';
            }
        }

        // Validasi Login dengan JavaScript
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username === 'admin' && password === 'admin123') {
                showMenuPage();
            } else {
                alert('Username atau Password salah!');
            }
        });

        // Menampilkan halaman utama saat pertama kali load
        showHomePage();