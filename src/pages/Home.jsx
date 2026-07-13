import { useState } from "react";
import { Link } from "react-router-dom";

import Shell from "../components/Shell";
import DimensionForm from "../components/DimensionForm";
import PackingTable from "../components/PackingTable";
import { IconGear, IconBox } from "../components/icons";

import {
    calculateBubble,
    calculateWrapping,
    calculateKardus,
    calculateKayu
} from "../utils/calculator";

const kosong = {
    volumeBarang: "-",
    volumePacking: "-",
    bahan: "-",
    modal: "-",
    harga: "-"
};

export default function Home() {
    const [panjang, setPanjang] = useState("");
    const [lebar, setLebar] = useState("");
    const [tinggi, setTinggi] = useState("");

    const [hasil, setHasil] = useState({
        bubble: { ...kosong },
        wrapping: { ...kosong },
        kardus: { ...kosong },
        kayu: { ...kosong }
    });

    const [selected, setSelected] = useState({
        bubble: true,
        wrapping: true,
        kardus: true,
        kayu: true
    });

    function hitung() {
        const p = Number(panjang);
        const l = Number(lebar);
        const t = Number(tinggi);

        setHasil({
            bubble: calculateBubble(p, l, t),
            wrapping: calculateWrapping(p, l, t),
            kardus: calculateKardus(p, l, t),
            kayu: calculateKayu(p, l, t)
        });
    }

    function toggle(key) {
        setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    }

    return (
        <Shell>
            <div className="ledger-card animate-slide-up">
                {/* Barcode strip */}
                <div className="barcode">
                    {[3, 1, 2, 1, 4, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 1, 4, 1, 2, 3, 1].map(
                        (w, i) => (
                            <span key={i} style={{ height: `${40 + (w % 3) * 20}%`, width: `${w}px` }} />
                        )
                    )}
                </div>

                {/* Title */}
                <div className="px-5 pt-2 pb-4 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-ink-900 text-white flex items-center justify-center shrink-0">
                        <IconBox className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="font-display font-bold text-[15px] leading-tight uppercase tracking-[0.02em] text-ink-900">
                            Kalkulator Biaya Packing
                        </h1>
                        <p className="text-[11px] text-ink-500">Estimasi bahan &amp; ongkos packing</p>
                    </div>
                </div>

                {/* Dimension inputs */}
                <div className="px-5 pb-4">
                    <DimensionForm
                        panjang={panjang}
                        lebar={lebar}
                        tinggi={tinggi}
                        setPanjang={setPanjang}
                        setLebar={setLebar}
                        setTinggi={setTinggi}
                        hitung={hitung}
                    />
                </div>

                <div className="tear-line" />

                {/* Results */}
                <PackingTable hasil={hasil} selected={selected} onToggle={toggle} />

                <div className="tear-line" />

                {/* Footer */}
                <div className="px-5 py-3.5 flex items-center justify-between">
                    <span className="text-[10px] text-ink-400 font-mono">
                        Update konfigurasi bahan &amp; margin
                    </span>
                    <Link to="/config" className="btn btn-outline text-xs px-3 py-2">
                        <IconGear className="w-3.5 h-3.5" />
                        Setting
                    </Link>
                </div>
            </div>
        </Shell>
    );
}
