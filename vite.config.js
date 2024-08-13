// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Determine build mode based on environment variable
const isLibraryBuild = process.env.BUILD_MODE === 'library';

export default defineConfig({
  plugins: [react()],
  build: {
    // Set output directory based on build mode
    outDir: isLibraryBuild ? 'lib' : 'dist',

    // Configuration for library build
    lib: isLibraryBuild ? {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'EZModules',
      fileName: (format) => `ezmodules.${format}.js`,
      formats: ['es', 'umd'],
    } : undefined,

    // Rollup options for library build
    rollupOptions: isLibraryBuild ? {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    } : undefined,

    // Optimize build options for web app
    minify: !isLibraryBuild, // Minify for web app, not for library
    sourcemap: !isLibraryBuild, // Generate sourcemaps for web app
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  // Define server options if needed
  server: {
    port: 3000, // Default port for local development
    open: true, // Open the browser when the server starts
  },
  // Define preview options for Vercel
  preview: {
    port: 5000, // Port for previewing the production build
  },
});
