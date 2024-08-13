// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'EZModules',
            fileName: (format) => `ezmodules.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            // Specify external dependencies that should not be bundled
            external: ['react', 'react-dom'],
            output: {
                // Provide global variable names for UMD builds
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
    resolve: {
        // Setup path aliases for easier imports
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/Components'),
        },
    },
});
