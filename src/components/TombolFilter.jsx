function TombolFilter({ teks, aktif, onPilih }) {
    const dasar = "px-4 py-2 rounded-lg border cursor-pointer transition";
    const warna = aktif
        ? "bg-green-700 text-white border-green-700"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100";
    return (
        <button
            onClick={onPilih}
            className={`${dasar} ${warna}`}>
            {teks}
        </button>
    );
}

export default TombolFilter;