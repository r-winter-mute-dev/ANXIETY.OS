import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const btn = (page: Page, name: string | RegExp) => page.getByRole('button', { name });

async function axe(page: Page) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
}

test('Entwurfs-Banner ist sichtbar und nicht schließbar', async ({ page }) => {
  await page.goto('/');
  const banner = page.getByRole('note');
  await expect(banner).toContainText('ENTWURF – NICHT FACHLICH GEPRÜFT');
  await expect(banner.getByRole('button')).toHaveCount(0);
});

test('Sicherheitsfrage "Ja/unsicher" führt zu den Notrufnummern', async ({ page }) => {
  await page.goto('/');
  await btn(page, 'Ich habe gerade starke Angst').click();
  await btn(page, /Ja, etwas davon/).click();
  await expect(heading(page)).toHaveText('Hol dir jetzt Hilfe');
  await expect(page.locator('a[href="tel:112"]')).toBeVisible();
  await expect(page.locator('a[href="tel:116117"]')).toBeVisible();
  await expect(page.locator('a[href="tel:08001110111"]')).toBeVisible();
  await expect(page.locator('a[href="tel:116123"]')).toBeVisible();
  await axe(page);
});

test('Notfall-Leiste ist auf jedem Bildschirm des Ablaufs erreichbar', async ({ page }) => {
  await page.goto('/');
  const bar = btn(page, 'Hilfe & Notrufnummern');
  await expect(bar).toBeVisible();
  await btn(page, 'Ich habe gerade starke Angst').click();
  await expect(bar).toBeVisible();
  await btn(page, 'Nein, nichts davon').click();
  await expect(bar).toBeVisible();
  await btn(page, '7').click();
  await expect(bar).toBeVisible();
  await btn(page, /Alles ist zu viel/).click();
  await expect(bar).toBeVisible();
  await bar.click();
  await expect(heading(page)).toHaveText('Hol dir jetzt Hilfe');
  // Zurück führt an dieselbe Stelle der Übung
  await btn(page, /Zurück/).click();
  await expect(heading(page)).toHaveText('Ein einfacher Schritt');
});

test('Kompletter Ablauf: Gedanken prüfen, nur per Antippen', async ({ page }) => {
  await page.goto('/');
  await btn(page, 'Ich habe gerade starke Angst').click();
  await btn(page, 'Nein, nichts davon').click();
  await expect(heading(page)).toHaveText('Wie stark ist deine Angst gerade?');
  await axe(page);
  await btn(page, '8').click();
  await btn(page, /Meine Gedanken rasen/).click();
  await expect(heading(page)).toHaveText('Welcher Gedanke ist gerade am lautesten?');
  await axe(page);
  await btn(page, 'Ich verliere gleich die Kontrolle.').click();
  await btn(page, 'Angst').click();
  await btn(page, '8').click();
  for (let i = 0; i < 4; i++) await btn(page, 'Weiter').click();
  await btn(page, /Das ist ein Gedanke/).click();
  await expect(heading(page)).toHaveText('Deine Einordnung');
  await expect(page.getByText('Ich verliere gleich die Kontrolle.')).toBeVisible();
  await axe(page);
  await btn(page, 'Fertig').click();
  await btn(page, '6').click();
  await expect(heading(page)).toHaveText('Kurzer Abschluss');
  await expect(page.getByText('Vorher: 8 · Jetzt: 6')).toBeVisible();
  await axe(page);
  await btn(page, 'Beenden').last().click();
  await expect(heading(page)).toHaveText('Was brauchst du gerade?');
});

test('Anstieg der Angst zeigt Hinweis auf Unterstützung', async ({ page }) => {
  await page.goto('/');
  await btn(page, 'Ich habe gerade starke Angst').click();
  await btn(page, 'Nein, nichts davon').click();
  await btn(page, '3').click();
  await btn(page, /Alles ist zu viel/).click();
  for (let i = 0; i < 3; i++) await btn(page, 'Weiter').click();
  await btn(page, 'Fertig').click();
  await btn(page, '7').click();
  await expect(page.getByText(/hol dir Unterstützung/)).toBeVisible();
});

test('Grounding und Atemhilfe sind abbrechbar', async ({ page }) => {
  await page.goto('/');
  await btn(page, 'Ich habe gerade starke Angst').click();
  await btn(page, 'Nein, nichts davon').click();
  await btn(page, 'Überspringen').click();
  await btn(page, /ganz auf meinen Körper/).click();
  await expect(heading(page)).toHaveText('Im Raum ankommen');
  await axe(page);
  await btn(page, /5-4-3-2-1/).click();
  await expect(page.getByText(/nicht speziell für Panikattacken geprüft/).first()).toBeVisible();
  await btn(page, 'Beenden').first().click();
  await expect(heading(page)).toHaveText('Was brauchst du gerade?');

  await btn(page, 'Ich habe gerade starke Angst').click();
  await btn(page, 'Nein, nichts davon').click();
  await btn(page, 'Überspringen').click();
  await btn(page, /Atem fühlt sich unruhig/).click();
  await axe(page);
  await btn(page, 'Starten').click();
  await expect(page.getByText('Ein', { exact: true })).toBeVisible();
  await btn(page, 'Beenden').last().click();
  await expect(page.getByText('Atme jetzt einfach normal weiter.')).toBeVisible();
});

test('Browser-Zurück funktioniert', async ({ page }) => {
  await page.goto('/');
  await btn(page, 'Ich habe gerade starke Angst').click();
  await expect(heading(page)).toHaveText(/Kurz vorab/);
  await page.goBack();
  await expect(heading(page)).toHaveText('Was brauchst du gerade?');
});

test('Lernen und Über-Seite sind barrierefrei', async ({ page }) => {
  await page.goto('/');
  await btn(page, /Angst verstehen/).click();
  await expect(page.getByRole('heading', { name: 'Der Angstkreislauf' })).toBeVisible();
  await axe(page);
  await btn(page, /Zurück/).click();
  await btn(page, /Über diese App/).click();
  await expect(page.getByText(/Fachlich freigegeben: 0 von/)).toBeVisible();
  await axe(page);
});

test('Keine Anfragen an fremde Server, kein Speicher', async ({ page }) => {
  const foreign: string[] = [];
  page.on('request', (r) => {
    if (!r.url().startsWith('http://localhost:4173')) foreign.push(r.url());
  });
  await page.goto('/');
  await btn(page, 'Ich habe gerade starke Angst').click();
  await btn(page, 'Nein, nichts davon').click();
  await btn(page, '5').click();
  const stored = await page.evaluate(() => ({
    ls: localStorage.length,
    ss: sessionStorage.length,
    cookies: document.cookie,
  }));
  expect(foreign).toEqual([]);
  expect(stored).toEqual({ ls: 0, ss: 0, cookies: '' });
});

test('Offline nach erstem Laden', async ({ page, context }) => {
  await page.goto('/');
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await page.reload();
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await context.setOffline(true);
  await page.reload();
  await expect(heading(page)).toHaveText('Was brauchst du gerade?');
  await context.setOffline(false);
});
