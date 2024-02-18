import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/core/index.ts"),
      name: "vitoast",
      fileName: (format) => `vitoast.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue", /^vitoast/],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  optimizeDeps: {
    include: ["src/core/*"],
  },
})
