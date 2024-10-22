import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure this base URL is correct
  build: {
    outDir: 'dist',  // Vite builds to 'dist' by default
  },
})
