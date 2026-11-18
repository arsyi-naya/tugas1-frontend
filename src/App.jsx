import { useState } from "react"; 
import Navbar from './components/Navbar';
import { daftarItem } from './data';
import Kartu from './components/Kartu';
import TombolFilter from './components/TombolFilter';

function App() {
    // disimpan di app karena kategori terpilih digunakan oleh beberapa komponen sekaligus
    const [kategoriTerpilih, setKategoriTerpilih] = useState("Semua");
    
    //Menggunakan daftarTampil agar data tetap aman dan dapat dikembalikan kembali saat filter diubah
    const daftarTampil =
        kategoriTerpilih === "Semua"
            ? daftarItem
            : daftarItem.filter((item) => item.kategori === kategoriTerpilih);
    
    return (
        <div>
            <header> 
                <Navbar/>
            </header>
            <main className="max-w-7xl mx-auto px-6">
                <h1 className="mb-3 text-3xl font-bold text-gray-800">Katalog Wisata Alam</h1>
                <h2 className="mb-1 text-gray-700 font-medium">Filter berdasarkan kategori:</h2>
                
                <div className="flex gap-2">
                {/*menggunakan onpilih agar fungsi dijalankan saat tombol di klik, jika ditulis langsung setKategoriTerpilih fungsi akan langsung dieksekusi saat render yang akan menyebabkan render berulang*/}
                <TombolFilter
                    teks="Semua"
                    aktif={kategoriTerpilih === "Semua"}
                    onPilih={() => setKategoriTerpilih("Semua")}/>
                <TombolFilter
                    teks="Pantai"
                    aktif={kategoriTerpilih === "Pantai"}
                    onPilih={() => setKategoriTerpilih("Pantai")}/>
                <TombolFilter
                    teks="Gunung"
                    aktif={kategoriTerpilih === "Gunung"}
                    onPilih={() => setKategoriTerpilih("Gunung")}/>
            </div>
            
            <p className="mt-3 mb-2 text-gray-600">
                Menampilkan {daftarTampil.length} dari {daftarItem.length} Wisata Alam</p>
            <section id="daftar-item">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/*menggunakan key={item.id} agar id bersifat unik dan tetap, sehingga react dapat membedakan setiap item yang di render*/}
                    {daftarTampil.map((item) => (
                        <Kartu key={item.id} item={item}/>   
                    ))}
                </div>
            </section>
            </main>
    
            <footer id ="kontak" className="mt-12 py-6 text-center text-gray-600">
                <p>&copy; 2026 Katalog Wisata Alam</p>
            </footer>
        </div>
    );    
}

export default App;