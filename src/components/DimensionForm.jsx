export default function DimensionForm({
    panjang,
    lebar,
    tinggi,
    setPanjang,
    setLebar,
    setTinggi,
    hitung
}) {
    const isComplete = panjang !== "" && lebar !== "" && tinggi !== "";

    function handleKeyDown(e) {
        if (e.key === "Enter" && isComplete) hitung();
    }

    return (
        <div className="flex items-stretch gap-4">
            <div className="flex-1 flex flex-col gap-2.5">
                <div className="field-row">
                    <span className="field-label">Panjang</span>
                    <div className="field-box">
                        <input
                            type="number"
                            inputMode="decimal"
                            placeholder="0"
                            min="0"
                            value={panjang}
                            onChange={(e) => setPanjang(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <span className="field-unit">cm</span>
                </div>

                <div className="field-row">
                    <span className="field-label">Lebar</span>
                    <div className="field-box">
                        <input
                            type="number"
                            inputMode="decimal"
                            placeholder="0"
                            min="0"
                            value={lebar}
                            onChange={(e) => setLebar(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <span className="field-unit">cm</span>
                </div>

                <div className="field-row">
                    <span className="field-label">Tinggi</span>
                    <div className="field-box">
                        <input
                            type="number"
                            inputMode="decimal"
                            placeholder="0"
                            min="0"
                            value={tinggi}
                            onChange={(e) => setTinggi(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <span className="field-unit">cm</span>
                </div>
            </div>

            <button
                type="button"
                onClick={hitung}
                disabled={!isComplete}
                className="stamp-btn w-[92px] shrink-0"
            >
                <span className="text-[13px] leading-tight">Hitung</span>
                <span className="text-[9px] font-medium tracking-[0.16em] opacity-80">Biaya</span>
            </button>
        </div>
    );
}
