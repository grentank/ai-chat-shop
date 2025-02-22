import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/api-docs': 'http://localhost:3000',
      '/img': 'http://localhost:3000',
    },
  },
  build: {
    outDir: '../server/dist',
  },
  base: '/',
});
