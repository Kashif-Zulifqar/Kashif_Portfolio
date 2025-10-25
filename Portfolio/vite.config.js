import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Vite configuration for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/Kashif-Portfolio/", // must match your repo name exactly
});
