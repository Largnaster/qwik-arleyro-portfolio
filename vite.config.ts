import { defineConfig, type UserConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {qwikSpeakInline} from 'qwik-speak/inline'

export default defineConfig((): UserConfig => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), qwikSpeakInline({
      basePath: './',
      assetsPath: 'i18n',
      supportedLangs: ['en-US', 'es-ES'],
      defaultLang: 'en-US'
    })],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    server: {
      open: true,
    }
  };
});
