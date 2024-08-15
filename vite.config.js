// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isLibraryBuild = process.env.BUILD_MODE === 'library';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    lib: isLibraryBuild
      ? {
          entry: path.resolve(__dirname, 'src/index.js'),
          name: 'EZModules',
          fileName: (format) => `ezmodules.${format}.js`,
          formats: ['es', 'umd'],
        }
      : undefined,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    minify: !isLibraryBuild,
    sourcemap: !isLibraryBuild,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 5000,
  },
});
