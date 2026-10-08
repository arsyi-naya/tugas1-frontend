// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

const daftarItem = [ {id: 1, nama: "Danau Maninjau", kategori: "Danau", tiket: 15000, buka: true },
     { id: 2, nama: "Lembah Harau", kategori: "Air Terjun", tiket: 10000, buka: true }, 
     { id: 3, nama: "Pantai Air Manis", kategori: "Pantai", tiket: 10000, buka: true }, 
     { id: 4, nama: "Gunung Marapi", kategori: "Gunung", tiket: 25000, buka: false }, 
     { id: 5, nama: "Ngarai Sianok", kategori: "Lembah", tiket: 15000, buka: true }, 
     { id: 6, nama: "Air Terjun Lembah Anai", kategori: "Air Terjun", tiket: 10000, buka: false } ];
console.table(daftarItem);

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// wisata alam yang bernilai buka = true
// keluaran: jumlah wisata alam yang buka

// LANGKAH 2 — CONTOH (termasuk kasus tepi)
// 4 wisata buka 2 wisata tutup
// maka keluaran = 4
// semua wisata tutup = null

// LANGKAH 3 — LANGKAH (pseudocode)
// kalau semua wisata tutup, kembalikan null
// item pertama bernilai buka = true, maka mulai hitung
// untuk tiap item di daftarItem:
//   kalau item buka = true, tambah hitungan
// kembalikan hitungan

// LANGKAH 4 — TERJEMAHKAN
function hitungTotal(daftar) {
    let total = 0;
    for (const item of daftar) {
        if (item.buka === true) {
            total++;
        }
    }
    return total;
}

// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan: daftarItem, id (angka)
// Keluaran: item yang id-nya cocok, atau null kalau tidak ada

// LANGKAH 2 — CONTOH (termasuk kasus tepi)
// id = 3, ada item dengan id 3, kembalikan item itu
// id = 99, tidak ada item dengan id 99, kembalikan null

// LANGKAH 3 — LANGKAH (pseudocode)
// untuk tiap item di daftarItem:
//   kalau item.id sama dengan id, kembalikan item itu
// kalau semua item sudah diperiksa dan tidak ada yang cocok, kembalikan null

// LANGKAH 4 — TERJEMAHKAN
function cariBerdasarkanId(daftar, id) {
    for (const item of daftar) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// masukan: mengambil daftarItem, kategori (teks)
// keluaran: array baru berisi item dengan kategori itu, atau array kosong [] 

// LANGKAH 2 — CONTOH (termasuk kasus tepi)
// kategori = "alam", ada item dengan kategori "alam", kembalikan array itu
// kategori = "sejarah", tidak ada item dengan kategori "sejarah", kembalikan array kosong []

// LANGKAH 3 — LANGKAH (pseudocode)
// untuk tiap item di daftarKategori:
//   kalau item.kategori sama dengan kategori, tambahkan item ke array hasil
// kembalikan array hasil

// LANGKAH 4 — TERJEMAHKAN
function saringKategori(daftar, kategori) {
    const hasil = [];       

    for (const item of daftar) {
        if (item.kategori === kategori) {
            hasil.push(item);
        }
    }
    return hasil;
}

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan: menghitung rata rata harga tiket dari item yang buka = true
// Keluaran: rata-rata harga tiket dari item yang buka = true, atau null kalau tidak ada/false

// LANGKAH 2 — CONTOH (termasuk kasus tepi)
// ada 2 wisata yang buka dengan tiket 10.000 dan 20.000
// maka rata rata = (10.000 + 20.000) / 2 = 15.000
// semua wisata tutup = null

// LANGKAH 3 — LANGKAH (pseudocode)
// buat variabel total tiket = 0 dan jumlah item buka = 0
//  untuk tiap item di daftarItem:
//    kalau item buka = true, tambahkan tiket ke total tiket dan jumlah item buka +1
//  kalau jumlah item buka = 0, kembalikan null
//  kembalikan total tiket dibagi jumlah item buka

// LANGKAH 4 — TERJEMAHKAN
function rataRataTersedia(daftar) {
    let totalTiket = 0;
    let jumlahItemBuka = 0;

    for (const item of daftar) {
        if (item.buka === true) {
            totalTiket = totalTiket + item.tiket;
            jumlahItemBuka++;
        }
    }

    if (jumlahItemBuka === 0) {
        return null;
    }

    return totalTiket / jumlahItemBuka;
}

// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────

// FUNGSI 1
console.log(hitungTotal(daftarItem));
console.log(hitungTotal([]));

// FUNGSI 2
console.log(cariBerdasarkanId(daftarItem, 3));
console.log(cariBerdasarkanId(daftarItem, 99));

// FUNGSI 3
console.log(saringKategori(daftarItem, "Pantai"));
console.log(saringKategori(daftarItem, "sejarah"));

// FUNGSI 4
console.log(rataRataTersedia(daftarItem));
console.log(rataRataTersedia([]));  