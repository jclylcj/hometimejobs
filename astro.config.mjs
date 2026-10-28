import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hometimejobs.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') && !page.includes('/privacy/sent') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
