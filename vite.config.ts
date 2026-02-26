import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "app";
const base = process.env.NODE_ENV === "production" ? `/${repoName}/` : "/";

export default defineConfig({
  // Set base to repository name for GitHub Pages, or '/' for local dev
  base,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
