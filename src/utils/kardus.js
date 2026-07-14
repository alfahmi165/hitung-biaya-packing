import { rupiah } from "./helper";
import { volumeKg } from "./volume";
import { getOrientation } from "./orientation";
import { getPackingDimension } from "./packingDimension";
import { getConfig } from "./config";




export function calculateKardus(
  p,
  l,
  t
) {
  const config = getConfig();

  const dim =
    getPackingDimension(
    p,
    l,
    t,
    "kardus"
  );

  const hasil =
    getOrientation(
    p,
    l,
    t,
    config.kardus.lebar);

  const panjangKardus =
    hasil.panjang * hasil.strip;

  const modal =
    panjangKardus.toFixed(0) * (config.kardus.hargaLembar / config.kardus.panjang);

  // harga = modal × marginX
  const harga = modal * config.kardus.marginX;

  return {

    volumeBarang:
      volumeKg(p, l, t) + " Kg",

    volumePacking:
      volumeKg(
        dim.p,
        dim.l,
        dim.t
      ) + " Kg",

    bahan:
      panjangKardus.toFixed(0) +
      " cm",

    modal:

      rupiah(
        Math.ceil(modal)
      ),

    harga:

      rupiah(Math.ceil(harga))

  }

}
