import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://richardblondet.com',
    outDir: '../../dist/apps/web',
    integrations: [react()],
});
