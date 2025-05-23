import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://your-domain.com',

  // If you plan to deploy to GitHub Pages, you might want to add the repo name as the base
  // base: '/your-repo-name/',
  base: '/',

  integrations: [react()],
});
