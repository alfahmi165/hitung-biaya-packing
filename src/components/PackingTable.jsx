import Checkbox from "./ui/Checkbox";
import { rupiah } from "../utils/helper";

const ROWS = [
  { key: "bubble", label: "Bubble", swatch: "bg-mat-bubble" },
  { key: "wrapping", label: "Wrapping", swatch: "bg-mat-wrapping" },
  { key: "kardus", label: "Kardus", swatch: "bg-mat-kardus" },
  { key: "kayu", label: "Kayu", swatch: "bg-mat-kayu" },
];

function toNumber(rupiahString) {
  if (typeof rupiahString !== "string") return 0;
  const digits = rupiahString.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : 0;
}

function toKgNumber(kgString) {
  if (typeof kgString !== "string") return 0;
  const match = kgString.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export default function PackingTable({ hasil, selected, onToggle }) {
  const isEmpty = hasil.bubble.volumeBarang === "-";

  if (isEmpty) {
    return (
      <div className="px-5 py-10 text-center">
        <p className="text-sm text-ink-500">
          Isi panjang, lebar, dan tinggi lalu tekan{" "}
          <span className="font-semibold text-ink-700">Hitung</span> untuk melihat rincian biaya.
        </p>
      </div>
    );
  }

  const totalHarga = ROWS.reduce((sum, row) => {
    if (!selected[row.key]) return sum;
    return sum + toNumber(hasil[row.key].harga);
  }, 0);

  const checkedCount = ROWS.filter((row) => selected[row.key]).length;

  const volumeBarang = hasil.bubble.volumeBarang;

  const volumePacking = ROWS.reduce((max, row) => {
    if (!selected[row.key]) return max;
    const val = toKgNumber(hasil[row.key].volumePacking);
    return val > max ? val : max;
  }, 0);

  return (
    <div className="flex flex-col">
      <div className="px-5 pt-4">
        <table className="packing-table">
          <thead>
            <tr>
              <th className="w-[30%]">Jenis Packing</th>
              <th className="w-[24%]">Bahan</th>
              <th className="w-[22%]">Modal</th>
              <th className="w-[24%] text-center">Biaya</th>
              <th className="w-6" />
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => {
              const data = hasil[row.key];
              const active = selected[row.key];
              return (
                <tr key={row.key} data-active={active}>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${row.swatch}`} />
                      <span className="font-display font-semibold text-sm text-ink-900">
                        {row.label}
                      </span>
                    </div>
                  </td>
                  <td className="font-mono text-xs text-ink-500 leading-snug">
                    {row.key === "kayu" ? (
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-ink-500">{data.bahan}</span>
                        <button
                          type="button"
                          className="info-tooltip-btn"
                          title={`Rincian potongan: ${data.rincian}`}
                          aria-label="Detail potongan kayu"
                        >
                          ⓘ
                        </button>
                      </div>
                    ) : (
                      data.bahan
                    )}
                  </td>
                  <td className="font-mono text-xs text-ink-500">{data.modal}</td>
                  <td className="font-mono text-sm font-semibold text-ink-900 text-right whitespace-nowrap">
                    {data.harga}
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Checkbox
                        checked={active}
                        onChange={() => onToggle(row.key)}
                        label={`Sertakan ${row.label} pada total`}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="tear-line mx-5 mt-4" />

      <div className="p-5 flex flex-col gap-2">
        <div className="band-row bg-band-total">
          <span className="text-xs font-display font-semibold uppercase tracking-[0.08em] text-band-total-ink">
            Total Biaya Packing
          </span>
          <span className="font-mono font-bold text-band-total-ink">
            {checkedCount ? rupiah(totalHarga) : "—"}
          </span>
        </div>

        <div className="band-row bg-band-barang">
          <span className="text-xs font-display font-semibold uppercase tracking-[0.08em] text-band-barang-ink">
            Volume Barang
          </span>
          <span className="font-mono font-bold text-band-barang-ink">{volumeBarang}</span>
        </div>

        <div className="band-row bg-band-packing">
          <span className="text-xs font-display font-semibold uppercase tracking-[0.08em] text-band-packing-ink">
            Volume Packing
          </span>
          <span className="font-mono font-bold text-band-packing-ink">
            {checkedCount ? `${volumePacking.toFixed(2)} Kg` : "—"}
          </span>
        </div>

        {checkedCount === 0 && (
          <p className="text-[11px] text-ink-400 text-center pt-1">
            Centang minimal satu jenis packing untuk menghitung total.
          </p>
        )}
      </div>
    </div>
  );
}
