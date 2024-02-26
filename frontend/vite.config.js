import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { backendURI } from './src/utils/constants';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': { target: backendURI, changeOrigin: true },
    },
  },
  plugins: [react()],
});
