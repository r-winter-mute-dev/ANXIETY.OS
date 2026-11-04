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

  it('Notrufnummern sind korrekt hinterlegt', () => {
    const e = data.byFile['emergency.json'];
    expect(e['emergency.112.label'].tel).toBe('112');
    expect(e['emergency.116117.label'].tel).toBe('116117');
    expect(e['emergency.ts.numbers'].tel).toEqual(['08001110111', '08001110222', '116123']);
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
