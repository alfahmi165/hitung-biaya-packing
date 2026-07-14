/**
 * Perhitungan Metode Indah Cargo Pusat
 * Rumus: ((p+l+t)/3)*1500 untuk bubble, wrapping, kardus
 * Rumus: ((p+l+t)/3)*3500 untuk kayu
 * 
 * PERBAIKAN: Import metode lama untuk mendapatkan volume & detail lainnya
 */

import { rupiah } from "./helper";
import { calculateBubble } from "./bubble";
import { calculateWrapping } from "./wrapping";
import { calculateKardus } from "./kardus";
import { calculateKayu } from "./kayu";

export function calculateIndahCargoBubble(p, l, t) {
  // Dapatkan data dari metode lama untuk mendapatkan volume & detail
  const oldResult = calculateBubble(p, l, t);
  
  // Hitung harga dengan rumus Indah Cargo Pusat
  const harga = Math.ceil(((p + l + t) / 3) * 1500);
  
  return {
    volumeBarang: oldResult.volumeBarang,      // Ambil dari metode lama
    volumePacking: oldResult.volumePacking,    // Ambil dari metode lama
    bahan: oldResult.bahan,                    // Ambil dari metode lama
    metode: "Indah Cargo Pusat",              // Identifikasi metode
    strip: oldResult.strip,                    // Ambil dari metode lama
    modal: oldResult.modal,                      // Harga dengan rumus baru
    harga: rupiah(harga)                       // Harga dengan rumus baru
  };
}

export function calculateIndahCargoWrapping(p, l, t) {
  // Dapatkan data dari metode lama untuk mendapatkan volume & detail
  const oldResult = calculateWrapping(p, l, t);
  
  // Hitung harga dengan rumus Indah Cargo Pusat
  const harga = Math.ceil(((p + l + t) / 3) * 1500);
  
  return {
    volumeBarang: oldResult.volumeBarang,      // Ambil dari metode lama
    volumePacking: oldResult.volumePacking,    // Ambil dari metode lama
    bahan: oldResult.bahan,                    // Ambil dari metode lama
    metode: "Indah Cargo Pusat",              // Identifikasi metode
    strip: oldResult.strip,                    // Ambil dari metode lama
    modal: oldResult.modal,                      // Harga dengan rumus baru
    harga: rupiah(harga)                       // Harga dengan rumus baru
  };
}

export function calculateIndahCargoKardus(p, l, t) {
  // Dapatkan data dari metode lama untuk mendapatkan volume & detail
  const oldResult = calculateKardus(p, l, t);
  
  // Hitung harga dengan rumus Indah Cargo Pusat
  const harga = Math.ceil(((p + l + t) / 3) * 1500);
  
  return {
    volumeBarang: oldResult.volumeBarang,      // Ambil dari metode lama
    volumePacking: oldResult.volumePacking,    // Ambil dari metode lama
    bahan: oldResult.bahan,                    // Ambil dari metode lama
    metode: "Indah Cargo Pusat",              // Identifikasi metode
    strip: oldResult.strip,                    // Ambil dari metode lama
    modal: oldResult.modal,                      // Harga dengan rumus baru
    harga: rupiah(harga)                       // Harga dengan rumus baru
  };
}

export function calculateIndahCargoKayu(p, l, t) {
  // Dapatkan data dari metode lama untuk mendapatkan volume & detail
  const oldResult = calculateKayu(p, l, t);
  
  // Hitung harga dengan rumus Indah Cargo Pusat
  const harga = Math.ceil(((p + l + t) / 3) * 3500);
  
  return {
    volumeBarang: oldResult.volumeBarang,      // Ambil dari metode lama
    volumePacking: oldResult.volumePacking,    // Ambil dari metode lama
    bahan: oldResult.bahan,                    // Ambil dari metode lama
    metode: "Indah Cargo Pusat",              // Identifikasi metode
    strip: oldResult.strip,                    // Ambil dari metode lama
    modal: oldResult.modal,                      // Harga dengan rumus baru
    harga: rupiah(harga),                       // Harga dengan rumus baru
    rincian: oldResult.rincian
  };
}