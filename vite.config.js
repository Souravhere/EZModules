// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Determine build mode based on environment variable
const isLibraryBuild = process.env.BUILD_MODE === 'library';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: isLibraryBuild ? 'lib' : 'dist',
    lib: isLibraryBuild
      ? {
          entry: path.resolve(__dirname, 'src/index.js'),
          name: 'EZModules',
          fileName: (format) => `ezmodules.${format}.js`,
          formats: ['es', 'umd'],
        }
      : undefined,
    rollupOptions: isLibraryBuild
      ? {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        }
      : undefined,
    minify: !isLibraryBuild, // Minify for web app, not for library
    sourcemap: !isLibraryBuild, // Generate sourcemaps for web app
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
