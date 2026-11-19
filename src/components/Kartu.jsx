function Kartu({ item }) {
    // if diletakkan sebelum return agar tidak mengganggu proses render, jika diletakkan di dalam return akan menyebabkan error karena tidak bisa mengeksekusi if di dalam JSX
    let label = null;
    if (item.buka === false) {
        label = <span className="text-xs font-semibold text-red-500">Tutup</span>;
    }

    return (
        <article className="flex flex-col gap-1 p-5 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold">{item.nama}</h3>
            <p className="text-sm text-gray-500">{item.kategori}</p>
            <p className="mt-2 font-bold text-green-800">Rp{item.tiket.toLocaleString("id-ID")}</p>
            {label}
        </article>
    );
}

export default Kartu;