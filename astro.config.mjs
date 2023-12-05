import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: { port: 3000, host: true },
  site: "https://astro-tutorial-wolfboyyang.netlify.app/",
});
