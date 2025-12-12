// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@styles': new URL('./src/styles', import.meta.url).pathname,
        '@assets': new URL('./src/assets', import.meta.url).pathname,
        '@lib': new URL('./src/lib', import.meta.url).pathname,
      }
    },
    plugins: [tailwindcss()]
  },
  integrations: [react()],
});