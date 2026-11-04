import { defineConfig, devices } from '@playwright/test';

// BASE_PATH=/ANXIETY.OS/ testet den Build so, wie er auf GitHub Pages (Unterpfad) läuft.
const base = process.env.BASE_PATH || '/';
const url = `http://localhost:4173${base}`;

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: url, ...devices['Pixel 7'] },
  webServer: {
    command: 'npx vite preview --port 4173 --strictPort',
    url,
    reuseExistingServer: true,
  },
});
