export function calculateKarung(p, l, t) {

    // ==========================
    // 3 Keliling
    // ==========================

    const sisi = [

        {
            kelilingRumus: "2(P+L)",
            keliling: 2 * (p + l),
            orientasi: [
                {
                    rumus: "P+T",
                    nilai: p + t
                },
                {
                    rumus: "L+T",
                    nilai: l + t
                }
            ]
        },

        {
            kelilingRumus: "2(P+T)",
            keliling: 2 * (p + t),
            orientasi: [
                {
                    rumus: "L+T",
                    nilai: l + t
                },
                {
                    rumus: "L+P",
                    nilai: l + p
                }
            ]
        },

        {
            kelilingRumus: "2(L+T)",
            keliling: 2 * (l + t),
            orientasi: [
                {
                    rumus: "P+L",
                    nilai: p + l
                },
                {
                    rumus: "P+T",
                    nilai: p + t
                }
            ]
        }

    ];

    // ==========================
    // 4 Cara Membelah Karung
    // ==========================

    const metode = [

        {
            nama: "80 × 240",
            keliling: 80,
            orientasi: 240
        },

        {
            nama: "240 × 80",
            keliling: 240,
            orientasi: 80
        },

        {
            nama: "120 × 160",
            keliling: 120,
            orientasi: 160
        },

        {
            nama: "160 × 120",
            keliling: 160,
            orientasi: 120
        }

    ];

    // ==========================
    // Generate Semua Kemungkinan
    // ==========================

    const hasil = [];

    for (const s of sisi) {

        for (const o of s.orientasi) {

            for (const m of metode) {

                const horizontal = Math.ceil(
                    s.keliling / m.keliling
                );

                const vertikal = Math.ceil(
                    o.nilai / m.orientasi
                );

                hasil.push({

                    metode: m.nama,

                    rumusKeliling: s.kelilingRumus,

                    rumusOrientasi: o.rumus,

                    keliling: s.keliling,

                    orientasi: o.nilai,

                    horizontal,

                    vertikal,

                    total: horizontal * vertikal,

                    minimum: Math.min(horizontal, vertikal),

                    maksimum: Math.max(horizontal, vertikal)

                });

            }

        }

    }

    // ==========================
    // Ranking
    // ==========================

    hasil.sort((a, b) => {

        // Total Karung
        if (a.total !== b.total)
            return a.total - b.total;

        // Angka terkecil
        if (a.minimum !== b.minimum)
            return a.minimum - b.minimum;

        // Angka terbesar
        if (a.maksimum !== b.maksimum)
            return a.maksimum - b.maksimum;

        return 0;

    });

    // ==========================
    // Nomor Ranking
    // ==========================

    hasil.forEach((item, index) => {

        item.rank = index + 1;

    });

    return {

        terbaik: hasil[0],

        detail: hasil

    };

}