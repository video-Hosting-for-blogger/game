import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,        // allows mobile testing on same WiFi
    port: 5173,
    open: true
  },

  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});