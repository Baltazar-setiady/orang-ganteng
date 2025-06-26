document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default (reload halaman)

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Definisikan username dan password yang benar
    const correctUsername = 'ganteng'; // Anda bisa mengganti ini
    const correctPassword = 'password123'; // Anda bisa mengganti ini

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        alert('Login Berhasil! Mengarahkan ke halaman portofolio...');
        window.location.href = 'portfolio.html'; // Arahkan ke halaman portofolio
    } else {
        alert('Username atau Password salah. Silakan coba lagi.');
        // Opsional: Kosongkan field password setelah percobaan gagal
        document.getElementById('password').value = '';
    }
});