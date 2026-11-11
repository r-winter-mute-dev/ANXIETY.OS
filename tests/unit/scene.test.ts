import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { LAYERS, parseLayer, scene } from '../../src/lib/scene-layers';

describe('Szenen-Ebenen', () => {
  it('präfixt IDs und Verweise, damit helle und dunkle Ebenen sich nicht stören', () => {
    const p = parseLayer(
      '<svg viewBox="0 0 1 1"><defs><linearGradient id="rock"/></defs><g id="x"><path fill="url(#rock)"/></g></svg>',
      'd',
    );
    expect(p.defs).toContain('id="d-rock"');
    expect(p.body).toContain('url(#d-rock)');
    expect(p.body).toContain('id="d-x"');
    expect(p.body).not.toContain('<defs>');
  });

  it('beide Themen haben alle sechs Ebenen, ohne Skripte oder externe Verweise', () => {
    for (const theme of ['dark', 'light'] as const) {
      for (const l of LAYERS) {
        const body = scene[theme].layers[l];
        expect(body.length, `${theme}/${l}`).toBeGreaterThan(50);
        expect(body).not.toMatch(/<script|href=|<image|<text/i);
      }
    }
  });

  it('alle Ebenen haben dieselbe Leinwand 1200 × 1800', () => {
    for (const theme of ['dark', 'light'])
      for (const l of LAYERS) {
        const raw = readFileSync(`src/assets/scene/${theme}/${l}.svg`, 'utf8');
        expect(raw, `${theme}/${l}`).toContain('viewBox="0 0 1200 1800"');
      }
  });
});
