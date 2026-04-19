import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mld-dev.com",
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 4096,
    },
  },
  // On regroupe toutes les intégrations dans un seul tableau
  integrations: [react(), sitemap()],
});
