import { useState } from "react";
import { Link } from "react-router-dom";

import { getConfig, saveConfig, resetConfig } from "../utils/config";

import Shell from "../components/Shell";
import ConfigInput from "../components/ConfigInput";
import SettingCard from "../components/SettingCard";
import Button from "../components/ui/Button";
import { IconBack, IconSave, IconRefresh } from "../components/icons";

export default function Config() {
    const [config, setConfig] = useState(getConfig());
    const [saved, setSaved] = useState(false);

    function update(material, field, value) {
        setConfig((prev) => ({
            ...prev,
            [material]: { ...prev[material], [field]: Number(value) },
        }));
        setSaved(false);
    }

    function simpan() {
        saveConfig(config);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    }

    function reset() {
        resetConfig();
        setConfig(getConfig());
        setSaved(false);
    }

    return (
        <Shell>
            {/* Top bar */}
            <div className="flex items-center justify-between px-1">
                <Link to="/" className="btn btn-ghost text-xs px-2 py-1.5">
                    <IconBack className="w-3.5 h-3.5" />
                    Kembali
                </Link>
                <span className="text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-ink-500">
                    Pengaturan
                </span>
            </div>

            <div className="px-1">
                <h1 className="font-display font-bold text-lg text-ink-900">Bahan &amp; Margin</h1>
                <p className="text-xs text-ink-500 mt-1">
                    Atur harga bahan baku, dimensi roll/lembar, dan kelipatan margin keuntungan tiap material.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <SettingCard
                    accent="bubble"
                    swatch="bg-mat-bubble"
                    title="Bubble Wrap"
                    description="Gelembung plastik untuk peredam benturan"
                >
                    <ConfigInput
                        label="Harga / Roll"
                        value={config.bubble.hargaRoll}
                        suffix="Rp"
                        onChange={(v) => update("bubble", "hargaRoll", v)}
                    />
                    <ConfigInput
                        label="Lebar Roll"
                        value={config.bubble.lebarRoll}
                        suffix="cm"
                        onChange={(v) => update("bubble", "lebarRoll", v)}
                    />
                    <ConfigInput
                        label="Panjang Roll"
                        value={config.bubble.panjangRoll}
                        suffix="cm"
                        onChange={(v) => update("bubble", "panjangRoll", v)}
                    />
                    <ConfigInput
                        label="Margin (x Modal)"
                        value={config.bubble.marginX}
                        suffix="x"
                        onChange={(v) => update("bubble", "marginX", v)}
                    />
                </SettingCard>

                <SettingCard
                    accent="wrapping"
                    swatch="bg-mat-wrapping"
                    title="Wrapping"
                    description="Plastik pembungkus lapisan luar"
                >
                    <ConfigInput
                        label="Harga / Roll"
                        value={config.wrapping.hargaRoll}
                        suffix="Rp"
                        onChange={(v) => update("wrapping", "hargaRoll", v)}
                    />
                    <ConfigInput
                        label="Lebar Roll"
                        value={config.wrapping.lebarRoll}
                        suffix="cm"
                        onChange={(v) => update("wrapping", "lebarRoll", v)}
                    />
                    <ConfigInput
                        label="Panjang Roll"
                        value={config.wrapping.panjangRoll}
                        suffix="cm"
                        onChange={(v) => update("wrapping", "panjangRoll", v)}
                    />
                    <ConfigInput
                        label="Margin (x Modal)"
                        value={config.wrapping.marginX}
                        suffix="x"
                        onChange={(v) => update("wrapping", "marginX", v)}
                    />
                </SettingCard>

                <SettingCard
                    accent="kardus"
                    swatch="bg-mat-kardus"
                    title="Kardus"
                    description="Kotak kardus untuk pengiriman barang"
                >
                    <ConfigInput
                        label="Harga / Lembar"
                        value={config.kardus.hargaLembar}
                        suffix="Rp"
                        onChange={(v) => update("kardus", "hargaLembar", v)}
                    />
                    <ConfigInput
                        label="Lebar"
                        value={config.kardus.lebar}
                        suffix="cm"
                        onChange={(v) => update("kardus", "lebar", v)}
                    />
                    <ConfigInput
                        label="Panjang"
                        value={config.kardus.panjang}
                        suffix="cm"
                        onChange={(v) => update("kardus", "panjang", v)}
                    />
                    <ConfigInput
                        label="Margin (x Modal)"
                        value={config.kardus.marginX}
                        suffix="x"
                        onChange={(v) => update("kardus", "marginX", v)}
                    />
                </SettingCard>

                <SettingCard
                    accent="kayu"
                    swatch="bg-mat-kayu"
                    title="Peti Kayu"
                    description="Peti kayu untuk barang berat atau fragile"
                >
                    <ConfigInput
                        label="Harga / Batang"
                        value={config.kayu.hargaBatang}
                        suffix="Rp"
                        onChange={(v) => update("kayu", "hargaBatang", v)}
                    />
                    <ConfigInput
                        label="Panjang Batang"
                        value={config.kayu.panjangBatang}
                        suffix="cm"
                        onChange={(v) => update("kayu", "panjangBatang", v)}
                    />
                    <ConfigInput
                        label="Margin (x Modal)"
                        value={config.kayu.marginX}
                        suffix="x"
                        onChange={(v) => update("kayu", "marginX", v)}
                    />
                </SettingCard>
            </div>

            {/* Actions */}
            <div className="flex gap-3 px-1 pb-2">
                <Button variant="outline" onClick={reset} icon={<IconRefresh className="w-4 h-4" />}>
                    Reset
                </Button>
                <Button variant="tape" fullWidth onClick={simpan} icon={<IconSave className="w-4 h-4" />}>
                    {saved ? "Tersimpan ✓" : "Simpan Pengaturan"}
                </Button>
            </div>
        </Shell>
    );
}
