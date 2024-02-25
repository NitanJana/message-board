import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { baseURL } from './src/utils/constants';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': { target: baseURL, changeOrigin: true },
    },
  },
  plugins: [react()],
});
