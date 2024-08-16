import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Set output directory for web app
    minify: true, // Minify the output
    sourcemap: true, // Generate sourcemaps for debugging
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    port: 3000, // Default port for local development
    open: true, // Open the browser when the server starts
  },
  preview: {
    port: 5000, // Port for previewing the production build
  },
});
