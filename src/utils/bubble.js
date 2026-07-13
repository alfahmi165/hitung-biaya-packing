import { getConfig } from "./config";
import { rupiah } from "./helper";
import { volumeKg } from "./volume";
import { getOrientation } from "./orientation";
import { getPackingDimension } from "./packingDimension";

export function calculateBubble(p, l, t) {

  const config = getConfig();

  const dim =
getPackingDimension(
    p,
    l,
    t,
    "bubble"
);

  const hasil =
getOrientation(
    p,
    l,
    t,
    config.bubble.lebarRoll
);


  const panjangBubble =
    hasil.panjang * hasil.strip * 2;

  const modal =
    panjangBubble * (config.bubble.hargaRoll / config.bubble.panjangRoll);

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
      panjangBubble.toFixed(0) +
      " cm",

    metode:
      hasil.metode,

    strip:
      hasil.strip,

    modal:
      
      rupiah(Math.ceil(modal)),

    harga:
      
      rupiah(
        Math.ceil(
          modal +
          config.bubble.margin
        )
      )

  }

}