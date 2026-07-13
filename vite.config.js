import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "./", // relative asset paths so the built app loads correctly from file:// inside Electron
  plugins: [
    react(),
    tailwindcss(),
  ],
})