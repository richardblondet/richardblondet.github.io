import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'http://localhost:3001',
    outDir: '../../dist/apps/design-system',
    integrations: [react(), tailwind()],
});
