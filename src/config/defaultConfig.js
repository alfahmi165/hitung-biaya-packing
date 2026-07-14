const defaultConfig = {
    // Metode perhitungan: "mitra-ratu-samban" atau "indah-cargo-pusat"
    method: "mitra-ratu-samban",

    bubble: {
        hargaRoll: 120000,
        panjangRoll: 5000,
        lebarRoll: 120,
        layer: 2,
        marginX: 3
    },

    wrapping: {
        hargaRoll: 100000,
        panjangRoll: 25000,
        lebarRoll: 50,
        layer: 3,
        marginX: 3
    },

    kardus: {
        hargaLembar: 15000,
        panjang: 300,
        lebar: 115,
        marginX: 3
    },

    kayu: {
        hargaBatang: 4000,
        panjangBatang: 160,
        jarakRangka: 40,
        sambungan: 20,
        marginX: 3
    }
}

export default defaultConfig