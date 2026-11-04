// 1. Ambil wadah kartu dari HTML
// script ada di akhir body agar html tersedia saat script dijalankan
const wadahKartu = document.querySelector('#daftar-kartu');

// 2. Buat fungsi untuk membuat kartu wisata
function buatKartu(wisata) {
    // menggunakan backtik karena kutip biasa tidak mengisi nilainya
     return `
        <article class="kartu-wisata">
            <h3>${wisata.nama}</h3>
            <p>Kategori: ${wisata.kategori}</p>
            <p>Tiket: Rp ${wisata.tiket}</p>
            ${wisata.buka === false ? "<span>Tidak Buka</span>" : ""}
        </article>
    `;
}

// 3. Buat fungsi untuk menampilkan daftar wisata
function tampilkan(daftar) {
    if (daftar.length === 0) {
        wadahKartu.innerHTML = "<p>Tidak ada wisata yang tersedia.</p>";
        return;
    }
    // .map() membuat kartu untuk setiap wisata
    // join("") menggabungkan semua kartu tanpa koma
    const daftarKartu = daftar.map(buatKartu).join("");
    wadahKartu.innerHTML = daftarKartu;
}
tampilkan(daftarItem);

// 4. Buat event listener untuk tombol filter
const tombolSemua = document.querySelector('#btn-semua');
    tombolSemua.addEventListener('click', function() {
    tampilkan(daftarItem);
    });
const tombolPantai = document.querySelector('#btn-pantai');
    tombolPantai.addEventListener('click', function() {
        // filter() digunakan untuk membuat array baru sehingga tidak mengubah daftarItem asli
        const daftarPantai = daftarItem.filter(function(item) {
        return item.kategori === "Pantai";
    });
    tampilkan(daftarPantai);
});
const tombolGunung = document.querySelector('#btn-gunung');
    tombolGunung.addEventListener('click', function() {
        const daftarGunung = daftarItem.filter(function(item) {
        return item.kategori === "Gunung";
    });
    tampilkan(daftarGunung);
});
const tombolAirTerjun = document.querySelector('#btn-air-terjun');
    tombolAirTerjun.addEventListener('click', function() {
        const daftarAirTerjun = daftarItem.filter(function(item) {
        return item.kategori === "Air Terjun";
    });
    tampilkan(daftarAirTerjun);
});