import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Zelfde hosting als visstick.ai: Astro-site op Cloudflare Pages.
// Deze site is volledig statisch, dus geen SSR-adapter nodig —
// `astro build` levert statische HTML in ./dist die Pages serveert.
export default defineConfig({
  site: 'https://go-fractional.nl',
  integrations: [sitemap()],
});
