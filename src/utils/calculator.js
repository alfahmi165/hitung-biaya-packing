import { getConfig } from "./config";

// Metode Mitra Ratu Samban
export { calculateBubble } from "./bubble";
export { calculateWrapping } from "./wrapping";
export { calculateKardus } from "./kardus";
export { calculateKayu } from "./kayu";

// Metode Indah Cargo Pusat
export {
  calculateIndahCargoBubble,
  calculateIndahCargoWrapping,
  calculateIndahCargoKardus,
  calculateIndahCargoKayu
} from "./indahCargoCalculations";

// Wrapper functions untuk menggunakan metode yang dipilih
export function calculateBubbleWrapper(p, l, t) {
  const config = getConfig();
  if (config.method === "indah-cargo-pusat") {
    const { calculateIndahCargoBubble } = require("./indahCargoCalculations");
    return calculateIndahCargoBubble(p, l, t);
  }
  const { calculateBubble } = require("./bubble");
  return calculateBubble(p, l, t);
}

export function calculateWrappingWrapper(p, l, t) {
  const config = getConfig();
  if (config.method === "indah-cargo-pusat") {
    const { calculateIndahCargoWrapping } = require("./indahCargoCalculations");
    return calculateIndahCargoWrapping(p, l, t);
  }
  const { calculateWrapping } = require("./wrapping");
  return calculateWrapping(p, l, t);
}

export function calculateKardusWrapper(p, l, t) {
  const config = getConfig();
  if (config.method === "indah-cargo-pusat") {
    const { calculateIndahCargoKardus } = require("./indahCargoCalculations");
    return calculateIndahCargoKardus(p, l, t);
  }
  const { calculateKardus } = require("./kardus");
  return calculateKardus(p, l, t);
}

export function calculateKayuWrapper(p, l, t) {
  const config = getConfig();
  if (config.method === "indah-cargo-pusat") {
    const { calculateIndahCargoKayu } = require("./indahCargoCalculations");
    return calculateIndahCargoKayu(p, l, t);
  }
  const { calculateKayu } = require("./kayu");
  return calculateKayu(p, l, t);
}