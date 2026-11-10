import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const at = (p: string) => fileURLToPath(new URL(p, import.meta.url));

/**
 * Адрес сайта для превью ссылок (og:image, canonical): SITE_URL → постоянный адрес проекта на Vercel → truegis.uz.
 * Переедет на другой домен — достаточно задать SITE_URL в настройках Vercel.
 */
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://truegis.uz")
).replace(/\/$/, "");

const siteUrlPlugin = (): Plugin => ({
  name: "site-url",
  transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", siteUrl),
});

// Две страницы: / — TrueGis, /shifo24/ — Shifo24 (отдельные HTML: свои заголовки и превью ссылок)
export default defineConfig({
  plugins: [react(), siteUrlPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: at("./index.html"),
        shifo24: at("./shifo24/index.html"),
      },
    },
  },
});
