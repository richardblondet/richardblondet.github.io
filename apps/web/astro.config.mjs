import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://richardblondet.com',
    outDir: '../../dist/apps/web',
    integrations: [react(), mdx()],
});
