import {getConfig} from "./config";
import { rupiah } from "./helper";
import { volumeKg } from "./volume";
import { getPackingDimension } from "./packingDimension";


export function calculateWrapping(p, l, t) {
  const config = getConfig();
  const dim =
getPackingDimension(
    p,
    l,
    t,
    "wrapping"
);

  const stripPL = Math.ceil(t / 50)

  const stripPT = Math.ceil(l / 50)

  const keliling =
    (2 * (p + l) * stripPL) +
    (2 * (p + t) * stripPT)

  const panjangWrapping =
    keliling * config.wrapping.layer;

  const biayaPerCm =
    config.wrapping.hargaRoll /
    config.wrapping.panjangRoll

  const modal =
    panjangWrapping * biayaPerCm

  return {

    volumeBarang:
      volumeKg(p, l, t) + " Kg",

    volumePacking:
      volumeKg(dim.p, dim.l, dim.t) + " Kg",

    bahan:
      panjangWrapping.toFixed(0) + " cm",

    modal:
      rupiah(Math.ceil(modal)),

    harga:
      
      rupiah(
        Math.ceil(
          modal +
          config.wrapping.margin
        )
      )

  }

}
