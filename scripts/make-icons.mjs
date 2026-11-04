// Rendert public/icon.svg als PNG (192 und 512 px). Aufruf: npm run icons
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './content-lib.mjs';

const svg = readFileSync(join(ROOT, 'public', 'icon.svg'), 'utf8');
const browser = await chromium.launch();
for (const size of [192, 512]) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(`<style>html,body{margin:0}svg{width:${size}px;height:${size}px;display:block}</style>${svg}`);
  await page.screenshot({ path: join(ROOT, 'public', `icon-${size}.png`), omitBackground: true });
  await page.close();
}
await browser.close();
console.log('Icons erzeugt.');
