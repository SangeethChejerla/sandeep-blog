import db from '@astrojs/db';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-read-time.mjs';

export default defineConfig({
  integrations: [react(), tailwind(), mdx(), db()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: 'server',
});
