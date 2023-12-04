import { defineConfig } from "vite";

export default defineConfig({
    root: './scss',
    build: {
        rollupOptions: {
            input: '/user.scss',
            output: {
                dir: './css',
                assetFileNames: `[name].[ext]`
            }
        }
    }
})