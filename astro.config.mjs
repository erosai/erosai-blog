import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
});
