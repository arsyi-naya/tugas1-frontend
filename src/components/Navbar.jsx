function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-green-800 text-white">
            <a href="#" className="text-xl font-bold">Wisata Alam</a>
            <div className="flex gap-4 text-sm">
                <a href="#daftar-item">Daftar Wisata</a>
                <a href="#kontak">Kontak</a>
            </div>
        </nav>
    );
}

export default Navbar;