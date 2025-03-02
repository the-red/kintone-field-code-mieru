import { defineConfig } from 'vite';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'フィールドコード見えるくん！',
  version: '1.1.1',
  description: 'Kintoneのフィールドコードが見えるくん',
  action: {
    default_title: 'クリックすると見えるくん！',
    default_icon: 'src/img/icon-32.png',
  },
  host_permissions: ['<all_urls>'],
  background: {
    service_worker: 'src/background.ts',
  },
  icons: {
    '32': 'src/img/icon-32.png',
    '128': 'src/img/icon-128.png',
  },
  content_scripts: [
    {
      matches: ['https://*.cybozu.com/k/*'],
      run_at: 'document_end',
      js: ['src/content.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['src/index.js'],
      matches: ['<all_urls>'],
    },
    {
      resources: ['*.ts', '*.js', '*.css'],
      matches: ['<all_urls>'],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  // https://www.masaakiota.net/2025/02/02/%E3%80%90crxjs-vite-plugin%E3%80%91cors%E3%80%81websocket%E3%80%81%E8%AB%B8%E3%80%85%E3%82%A8%E3%83%A9%E3%83%BC/
  legacy: {
    skipWebSocketTokenCheck: true,
  },
});
