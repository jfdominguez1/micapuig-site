// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTA: cuando migremos a micaelapuig.com, cambiar `site` y quitar `base`.
//   site: 'https://micaelapuig.com',
//   (sin `base`)
export default defineConfig({
  site: 'https://jfdominguez1.github.io',
  base: '/micapuig-site',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
          pt: 'pt-BR',
        },
      },
    }),
  ],
});
