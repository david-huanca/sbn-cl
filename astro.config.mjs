import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.sbn.cl',
  output: 'static',
  integrations: [tailwind()],
});
