import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: [process.env.VITE_ALLOWED_HOST as string],
    port: 8080,
    host: true
  }
})
