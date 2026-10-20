import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE lets you deploy under a sub-path (e.g. GitHub Pages: /repo-name/)
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
