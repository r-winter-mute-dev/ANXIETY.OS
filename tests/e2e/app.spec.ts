import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const START = 'Hier darfst du sein.';
const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const btn = (page: Page, name: string | RegExp) => page.getByRole('button', { name });
const help = (page: Page) => page.getByRole('button', { name: 'Hilfe', exact: true });

async function axe(page: Page) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
}

async function finishSteps(page: Page) {
  for (let i = 0; i < 12; i++) {
    const done = btn(page, 'Fertig');
    if (await done.isVisible()) return done.click();
    await btn(page, 'Weiter').click();
  }
}

test('Entwurfs-Banner ist sichtbar und nicht schließbar', async ({ page }) => {
  await page.goto('./');
  const banner = page.getByRole('note');
  await expect(banner).toContainText('ENTWURF – NICHT FACHLICH GEPRÜFT');
  await expect(banner.getByRole('button')).toHaveCount(0);
});

test('Start: ankommen, keine Notfallfrage, keine Skala', async ({ page }) => {
  await page.goto('./');
  await expect(heading(page)).toHaveText(START);
  await expect(page.getByRole('heading', { name: 'Was ist gerade da?' })).toBeVisible();
  await expect(page.getByText(/Trifft etwas davon/)).toHaveCount(0);
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  await axe(page);
});

test('Sortieren: anerkennen, zwei Schritte, Übung, kurzer Halt', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Alles ist durcheinander').click();
  await expect(heading(page)).toHaveText('Alles ist durcheinander');
  await expect(page.getByText(/fangen wir ganz klein an/)).toBeVisible();
  await axe(page);
  await btn(page, 'Ein einfacher Schritt').click();
  await finishSteps(page);
  await expect(heading(page)).toHaveText('Kurzer Halt');
  await expect(page.getByText(/Gehen wichtiger als das Ankommen/)).toBeVisible();
  await axe(page);
  await btn(page, 'Zurück zum Anfang').click();
  await expect(heading(page)).toHaveText(START);
});

test('Sortieren: „Etwas anderes“ zeigt alle übrigen Übungen', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Ich weiß es nicht genau').click();
  await btn(page, 'Etwas anderes').click();
  await expect(btn(page, 'Sanfte Atemhilfe')).toBeVisible();
  await expect(btn(page, 'Gedanken prüfen')).toBeVisible();
});

test('Gedanken prüfen: nur per Antippen', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Meine Gedanken rasen').click();
  await btn(page, 'Gedanken prüfen').click();
  await btn(page, 'Ich verliere gleich die Kontrolle.').click();
  await btn(page, 'Angst').click();
  await btn(page, '8').click();
  for (let i = 0; i < 4; i++) await btn(page, 'Weiter').click();
  await btn(page, /Das ist ein Gedanke/).click();
  await expect(heading(page)).toHaveText('Deine Einordnung');
  await axe(page);
  await btn(page, 'Fertig').click();
  await expect(heading(page)).toHaveText('Kurzer Halt');
});

test('Hilfe-Link ist auf jedem Bildschirm, Zurück führt an dieselbe Stelle', async ({ page }) => {
  await page.goto('./');
  await expect(help(page)).toBeVisible();
  await btn(page, 'Ein Gefühl ist gerade zu groß').click();
  await expect(help(page)).toBeVisible();
  await btn(page, 'Ein einfacher Schritt').click();
  await expect(help(page)).toBeVisible();
  await help(page).click();
  await expect(heading(page)).toHaveText('Hilfe');
  await expect(help(page)).toHaveCount(0);
  await btn(page, /Zurück/).click();
  await expect(heading(page)).toHaveText('Ein einfacher Schritt');
});

test('Hilfe-Seite: Notfall sichtbar, alles andere aufklappbar', async ({ page }) => {
  await page.goto('./');
  await help(page).click();
  await expect(page.locator('a[href="tel:112"]')).toBeVisible();
  await expect(page.getByText('starke Brustschmerzen oder schwere Atemnot')).toBeVisible();
  // Weitere Nummern erst nach Aufklappen
  await expect(page.locator('a[href="tel:08001110111"]')).toBeHidden();
  await axe(page);
  await page.getByText('Mit jemandem reden').click();
  await expect(page.locator('a[href="tel:08001110111"]')).toBeVisible();
  await expect(page.locator('a[href="tel:116123"]')).toBeVisible();
  await expect(page.locator('a[href="tel:116117"]')).toBeVisible();
  await page.getByText('Lieber schreiben').click();
  await expect(page.getByRole('link', { name: /krisenchat/ })).toHaveAttribute('href', /krisenchat\.de/);
  await expect(page.getByRole('link', { name: /nora/ })).toHaveAttribute('href', /nora-notruf\.de/);
  await expect(page.getByRole('link', { name: /TelefonSeelsorge schriftlich/ })).toHaveAttribute('href', /online\.telefonseelsorge\.de/);
  await page.getByText('Hilfe in deiner Region').click();
  await expect(page.locator('a[href="tel:08006553000"]')).toBeVisible();
  await expect(page.locator('a[href="tel:0303906310"]')).toBeVisible();
  await axe(page);
  await btn(page, 'Ein einfacher Schritt').click();
  await finishSteps(page);
  await expect(heading(page)).toHaveText('Kurzer Halt');
});

test('Suizidgedanken: ruhige Seite mit direktem Anruf', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Ich denke daran, nicht mehr leben zu wollen').click();
  await expect(heading(page)).toHaveText('Danke, dass du das sagst.');
  await expect(page.locator('a[href="tel:08001110111"]')).toBeVisible();
  await expect(page.locator('a[href="tel:112"]')).toBeVisible();
  await axe(page);
  await btn(page, 'Lieber schreiben oder andere Wege').click();
  await expect(heading(page)).toHaveText('Hilfe');
});

test('Kurzer Halt: „schlimmer geworden“ zeigt den Weg zur Hilfe', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Ein einfacher Schritt').click();
  await finishSteps(page);
  await btn(page, 'Es ist schlimmer geworden').click();
  await expect(page.getByRole('status')).toContainText('hol dir Unterstützung');
  await axe(page);
  await btn(page, 'Zur Hilfe-Seite').click();
  await expect(heading(page)).toHaveText('Hilfe');
});

test('Grounding und Atemhilfe sind abbrechbar', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Im Raum ankommen').click();
  await expect(heading(page)).toHaveText('Im Raum ankommen');
  await axe(page);
  await btn(page, /5-4-3-2-1/).click();
  await expect(page.getByText(/nicht speziell für Panikattacken geprüft/).first()).toBeVisible();
  await btn(page, 'Beenden').first().click();
  await expect(heading(page)).toHaveText(START);

  await btn(page, 'Sanfte Atemhilfe').click();
  await axe(page);
  await btn(page, 'Starten').click();
  await expect(page.getByText('Ein', { exact: true })).toBeVisible();
  await btn(page, 'Beenden').last().click();
  await expect(page.getByText('Atme jetzt einfach normal weiter.')).toBeVisible();
});

test('Browser-Zurück funktioniert', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Mein Körper macht mir Angst').click();
  await expect(heading(page)).toHaveText('Mein Körper macht mir Angst');
  await page.goBack();
  await expect(heading(page)).toHaveText(START);
});

test('Lernen und Über-Seite sind barrierefrei', async ({ page }) => {
  await page.goto('./');
  await btn(page, /Angst verstehen/).click();
  await expect(page.getByRole('heading', { name: 'Der Angstkreislauf' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Vorbereitet sein' })).toBeVisible();
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
  await page.goto('./');
  await btn(page, 'Meine Gedanken rasen').click();
  await btn(page, 'Ablenken').click();
  const stored = await page.evaluate(() => ({
    ls: localStorage.length,
    ss: sessionStorage.length,
    cookies: document.cookie,
  }));
  expect(foreign).toEqual([]);
  expect(stored).toEqual({ ls: 0, ss: 0, cookies: '' });
});

test('Offline nach erstem Laden', async ({ page, context }) => {
  await page.goto('./');
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await page.reload();
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await context.setOffline(true);
  await page.reload();
  await expect(heading(page)).toHaveText(START);
  await context.setOffline(false);
});

test('Körpersignale: Auswahl, Erklärung, Nachfrage, nächstes Signal', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Mein Körper macht mir Angst').click();
  await btn(page, 'Körpersignale verstehen').click();
  await expect(heading(page)).toHaveText('Was spürst du gerade?');
  await expect(btn(page, 'Erklär es mir')).toBeDisabled();
  await btn(page, /Übelkeit/).click();
  await btn(page, /Schwindel/).click();
  await axe(page);
  await btn(page, 'Erklär es mir').click();
  await expect(heading(page)).toHaveText('Schwindel, Benommenheit');
  await expect(page.getByText('Signal 1 von 2')).toBeVisible();
  await expect(page.getByText(/Mundwinkel hängt.*sofort 112/)).toBeVisible();
  await expect(page.getByText(/Schlaganfall/)).toHaveCount(0);
  await btn(page, 'Genauer erklärt').click();
  await expect(page.getByText(/Blut, Spritzen oder Verletzungen/)).toBeVisible();
  await axe(page);
  await btn(page, 'Weiter').click();
  await expect(heading(page)).toHaveText('Und deine Angst – wie ist sie jetzt?');
  await btn(page, 'Stärker').click();
  await expect(heading(page)).toHaveText('Das kann passieren');
  await btn(page, 'Weiter mit dem nächsten Signal').click();
  await expect(heading(page)).toHaveText('Übelkeit, Bauchgrummeln');
  await btn(page, 'Weiter').click();
  await btn(page, 'Etwas weniger').click();
  await expect(heading(page)).toHaveText('Du hast deine Körpersignale eingeordnet');
  await btn(page, 'Weiter').click();
  await expect(heading(page)).toHaveText('Kurzer Halt');
});

test('Körpersignale: Brustschmerz kommt zuerst und zeigt 112 vor der Erklärung', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Mein Körper macht mir Angst').click();
  await btn(page, 'Körpersignale verstehen').click();
  await btn(page, /Herzrasen/).click();
  await btn(page, /Brust/).click();
  await btn(page, 'Erklär es mir').click();
  await expect(heading(page)).toHaveText('Druck oder Schmerz in der Brust');
  const note = page.getByRole('note').filter({ hasText: 'ruf die 112' });
  await expect(note).toBeVisible();
  await expect(note.locator('a[href="tel:112"]')).toBeVisible();
  await axe(page);
});

test('Körpersignale: Wechsel zum Grounding behält den kurzen Halt', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Mein Körper macht mir Angst').click();
  await btn(page, 'Körpersignale verstehen').click();
  await btn(page, /Zittern/).click();
  await btn(page, 'Erklär es mir').click();
  await btn(page, 'Weiter').click();
  await btn(page, 'Etwas weniger').click();
  await btn(page, /Noch eine Übung/).click();
  await btn(page, 'Ein Gegenstand').click();
  await finishSteps(page);
  await expect(heading(page)).toHaveText('Kurzer Halt');
});

test('Körpersignale im Lernbereich', async ({ page }) => {
  await page.goto('./');
  await btn(page, /Angst verstehen/).click();
  await btn(page, /Körpersignale einzeln erklärt/).click();
  await expect(page.getByRole('heading', { name: 'Das Alarmsystem' })).toBeVisible();
  await axe(page);
  await btn(page, /Alles wirkt unwirklich/).click();
  await expect(page.getByText(/Derealisation/).first()).toBeVisible();
  await axe(page);
});

test('Ablenken: Rückwärts zählen', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Ablenken').click();
  await expect(heading(page)).toHaveText('Ablenken');
  await axe(page);
  await btn(page, 'Rückwärts zählen').click();
  await expect(page.getByText(/100, 97, 94/)).toBeVisible();
  await finishSteps(page);
  await expect(heading(page)).toHaveText('Kurzer Halt');
});

test('Übungsmodus: ohne Halt, zurück zu „Angst verstehen“', async ({ page }) => {
  await page.goto('./');
  await btn(page, /Angst verstehen/).click();
  await page.getByRole('main').getByRole('button', { name: 'Ein einfacher Schritt' }).click();
  await finishSteps(page);
  await expect(page.getByRole('heading', { name: 'In Ruhe üben' })).toBeVisible();
});

test('Darstellung: wird nur bei Änderung gespeichert, Zurücksetzen löscht', async ({ page }) => {
  await page.goto('./');
  await btn(page, 'Darstellung anpassen').click();
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
  await page.getByLabel('Sehr groß').check();
  await page.getByLabel('Hell').check();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'latte');
  await expect(page.locator('html')).toHaveAttribute('data-font', 'xl');
  expect(await page.evaluate(() => Object.keys(localStorage))).toEqual(['anxietyos.display']);
  await axe(page);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'latte');
  await btn(page, 'Darstellung anpassen').click();
  await btn(page, /Zurücksetzen/).click();
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
});

test('Helles Farbschema ist barrierefrei (Start, Sortieren, Hilfe)', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('./');
  await axe(page);
  await btn(page, 'Ein Gefühl ist gerade zu groß').click();
  await axe(page);
  await help(page).click();
  await page.getByText('Hilfe in deiner Region').click();
  await axe(page);
});
