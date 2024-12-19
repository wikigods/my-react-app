import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://wikigods.github.io/my-react-app",
  plugins: [react()],
  root: './',  // Asegúrate de que sea la raíz de tu proyecto
  build: {
    outDir: 'dist',  // La carpeta donde se generará el build
  }
})
