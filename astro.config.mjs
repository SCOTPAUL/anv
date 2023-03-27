import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://scotpaul.github.io',
  base: "/anv"
});