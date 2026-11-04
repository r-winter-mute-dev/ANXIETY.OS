/// <reference types="vitest/config" />
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig, type Plugin } from 'vite';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

/**
 * Erzeugt nach dem Build einen minimalen Service Worker, der alle Dateien vorab cacht.
 * Ohne Fremdabhängigkeit, damit der Offline-Mechanismus vollständig nachvollziehbar bleibt.
 */
function offlineServiceWorker(): Plugin {
  let outDir = 'dist';
  let base = '/';
  return {
    name: 'anxiety-os-offline-sw',
    apply: 'build',
    configResolved(c) {
      outDir = c.build.outDir;
      base = c.base;
    },
    closeBundle() {
      const walk = (d: string): string[] =>
        readdirSync(d).flatMap((f) => {
          const p = join(d, f);
          return statSync(p).isDirectory() ? walk(p) : [p];
        });
      const files = walk(outDir).filter((p) => !p.endsWith('sw.js'));
      const hash = createHash('sha256');
      for (const f of files) hash.update(readFileSync(f));
      const version = hash.digest('hex').slice(0, 12);
      const urls = [base, ...files.map((f) => base + relative(outDir, f).split('\\').join('/'))];
      const sw = `// Automatisch erzeugt (vite.config.ts). Nicht bearbeiten.
const CACHE = 'anxiety-os-${version}';
const BASE = ${JSON.stringify(base)};
const URLS = ${JSON.stringify(urls)};
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(URLS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(caches.match(BASE, { ignoreVary: true }).then((r) => r || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req, { ignoreVary: true, ignoreSearch: true }).then((r) => r || fetch(req)));
});
`;
      writeFileSync(join(outDir, 'sw.js'), sw);
    },
  };
}

export default defineConfig({
  // Für GitHub Pages (Unterpfad) per BASE_PATH setzbar, sonst Wurzel.
  base: process.env.BASE_PATH || '/',
  plugins: [svelte(), offlineServiceWorker()],
  build: { sourcemap: false },
  test: {
    include: ['tests/unit/**/*.test.ts'],
  },
});
