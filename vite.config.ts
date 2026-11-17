import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' = rutas relativas: funciona igual en Vercel y en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
