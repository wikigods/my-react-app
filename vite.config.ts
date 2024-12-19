import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://wikigods.github.io/my-react-app",
  plugins: [react()],
})
