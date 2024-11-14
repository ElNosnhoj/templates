/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy()
    ],

    // nos
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            store: path.resolve(__dirname, 'src/store'),
            styles: path.resolve(__dirname, 'src/styles'),
            assets: path.resolve(__dirname, 'src/assets')
        }
    },
    // son
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
    }
})
