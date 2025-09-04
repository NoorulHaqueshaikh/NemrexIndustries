import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/NemrexIndustries/",
  plugins: [react(),tailwindcss()],
  server: {
    host: true, // 👈 always exposes LAN IP
    port: 5173
  }
})
