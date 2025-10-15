import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const allowedHost = env.VITE_ALLOWED_HOST;

  return {
    plugins: [react(), tailwindcss()],
    preview: {
      allowedHosts: [allowedHost],
      port: 8080,
      host: true
    }
  }
})
