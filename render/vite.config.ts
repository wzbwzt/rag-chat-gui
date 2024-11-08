import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: "./../dist",
    chunkSizeWarningLimit: 1000,
  },
  base: mode == "development" ? "" : "./",
  plugins: [vue()],
  server: {
    port: 3000,
    // host: "0.0.0.0",
  },
  resolve: {
    alias: [
      {
        find: "~",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
}));
