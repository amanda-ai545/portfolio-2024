import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@data': `${path.resolve(__dirname, './src/data/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@routes': `${path.resolve(__dirname, './src/routes/')}`,
    },
  },
});
