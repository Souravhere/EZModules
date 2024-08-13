// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Check for environment variable to determine build mode
const isLibraryBuild = process.env.BUILD_MODE === 'library';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: isLibraryBuild ? 'lib' : 'dist', // Output directory for library or web app
    lib: isLibraryBuild ? {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'EZModules',
      fileName: (format) => `ezmodules.${format}.js`,
      formats: ['es', 'umd'],
    } : undefined,
    rollupOptions: isLibraryBuild ? {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    } : undefined,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
