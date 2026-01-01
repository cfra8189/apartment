import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5173, // Default dev port in 2025
    open: true  // Automatically opens browser
  }
})
