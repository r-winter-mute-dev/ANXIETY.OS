import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
// @ts-expect-error – reines JS-Modul ohne Typen
import { loadContent, validate, reviewStats, ROOT } from '../../scripts/content-lib.mjs';
// @ts-expect-error – reines JS-Modul ohne Typen
import { renderReport } from '../../scripts/review-report.mjs';

const data = loadContent();

describe('Inhalte', () => {
  it('sind gültig (Struktur, Review-Feld, Quellenverweise)', () => {
    expect(validate(data)).toEqual([]);
  });

  it('jede im Code verwendete Baustein-ID existiert', () => {
    const ids = new Set(Object.values(data.byFile).flatMap((b) => Object.keys(b as object)));
    const walk = (d: string): string[] =>
      readdirSync(d, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? walk(join(d, e.name)) : /\.(svelte|ts)$/.test(e.name) ? [join(d, e.name)] : [],
      );
    const missing: string[] = [];
    for (const f of walk(join(ROOT, 'src'))) {
      const src = readFileSync(f, 'utf8');
      // Nur statische IDs prüfen: t('x'), list('x'), block('x')
      for (const m of src.matchAll(/\b(?:t|list|block)\('([a-z0-9.]+)'/g)) {
        if (!ids.has(m[1])) missing.push(`${f.replace(ROOT, '')}: ${m[1]}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('jedes Körpersignal hat alle Textbausteine, Brustschmerz zuerst und als Warnzeichen', () => {
    const s = data.byFile['symptoms.json'];
    const order: string[] = s['symptoms.order'].text;
    expect(order[0]).toBe('brust');
    for (const k of order)
      for (const f of ['label', 'short', 'what', 'why', 'check']) expect(s[`symptoms.${k}.${f}`], `${k}.${f}`).toBeTruthy();
    expect(s['symptoms.brust.check'].redflag).toBe(true);
    expect(s['symptoms.brust.alert']).toBeTruthy();
  });

  it('Suizidgedanken: Anruf bei der TelefonSeelsorge und 112 direkt erreichbar', () => {
    const d = data.byFile['dark.json'];
    expect(d['dark.call'].tel).toBe('08001110111');
    expect(d['dark.call112'].tel).toBe('112');
  });

  it('Sortieren: jede Antwort hat Text und Anerkennung', () => {
    const s = data.byFile['sort.json'];
    for (const f of ['body', 'thoughts', 'feeling', 'chaos', 'unknown']) {
      expect(s[`sort.${f}.label`]).toBeTruthy();
      expect(s[`sort.${f}.ack`]).toBeTruthy();
    }
  });

  it('Notrufnummern sind korrekt hinterlegt', () => {
    const e = data.byFile['emergency.json'];
    expect(e['emergency.112.label'].tel).toBe('112');
    expect(e['emergency.116117.label'].tel).toBe('116117');
    expect(e['emergency.ts.numbers'].tel).toEqual(['08001110111', '08001110222', '116123']);
    expect(e['emergency.crisis.bayern'].tel).toBe('08006553000');
    expect(e['emergency.crisis.berlin'].tel).toBe('0303906310');
  });

  it('jede Grounding-Variante im Code hat Titel und Schritte', () => {
    const g = data.byFile['grounding.json'];
    const src = readFileSync(join(ROOT, 'src/screens/Grounding.svelte'), 'utf8');
    const variants = JSON.parse(src.match(/const variants = (\[[^\]]+\])/)![1].replace(/'/g, '"'));
    expect(variants).toContain('orient');
    expect(variants).toContain('object');
    for (const v of variants) {
      expect(g[`grounding.${v}.label`], v).toBeTruthy();
      expect(Array.isArray(g[`grounding.${v}.steps`].text), v).toBe(true);
    }
  });

  it('Einstellungen: jede Option hat einen Text', () => {
    const st = data.byFile['settings.json'];
    const opts = { font: ['m', 'l', 'xl'], spacing: ['normal', 'wide'], motion: ['system', 'reduce'], theme: ['system', 'mocha', 'latte'] };
    for (const [k, vs] of Object.entries(opts)) {
      expect(st[`settings.${k}`]).toBeTruthy();
      for (const v of vs) expect(st[`settings.${k}.${v}`], `${k}.${v}`).toBeTruthy();
    }
  });

  it('Ohrensausen ist als schwache Datenlage markiert', () => {
    const s = data.byFile['symptoms.json'];
    expect(s['symptoms.order'].text).toContain('ohren');
    expect(s['symptoms.ohren.short'].note).toMatch(/Schwache Datenlage/);
  });

  it('im Entwurfsstadium ist nichts freigegeben (Schutz vor versehentlicher Freigabe)', () => {
    // Dieser Test wird bewusst angepasst, sobald das fachliche Review beginnt.
    const s = reviewStats(data);
    expect(s.total).toBeGreaterThan(100);
    expect(s.approved).toBe(0);
  });

  it('REVIEW.md ist aktuell (sonst: npm run review)', () => {
    const committed = readFileSync(join(ROOT, 'REVIEW.md'), 'utf8');
    expect(committed).toBe(renderReport(data));
  });
});
