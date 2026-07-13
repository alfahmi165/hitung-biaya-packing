import defaultConfig from "../config/defaultConfig";

const STORAGE_KEY = "packing-config";

export function getConfig() {

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return defaultConfig;

  try {
    return JSON.parse(data);
  } catch {
    return defaultConfig;
  }

}

export function saveConfig(config) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(config)
  );

}

export function resetConfig() {

  localStorage.removeItem(STORAGE_KEY);

}