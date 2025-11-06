import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    hmr: {
      port: 4000,
      overlay: false,
      clientPort: 4000
    }
  },
  clearScreen: false,
  build: {
    sourcemap: true
  }
})
