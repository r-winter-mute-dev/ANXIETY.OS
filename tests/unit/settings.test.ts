import { describe, expect, it } from 'vitest';
import { sanitize, isDefault, DEFAULTS } from '../../src/lib/settings.svelte';

describe('Anzeige-Einstellungen', () => {
  it('übernimmt nur bekannte Schlüssel und Werte', () => {
    expect(sanitize({ font: 'xl', theme: 'latte', evil: '<script>', motion: 'fast' })).toEqual({
      ...DEFAULTS,
      font: 'xl',
      theme: 'latte',
    });
  });
  it('fällt bei Unsinn auf Standard zurück', () => {
    expect(sanitize(null)).toEqual(DEFAULTS);
    expect(sanitize('x')).toEqual(DEFAULTS);
    expect(sanitize([1, 2])).toEqual(DEFAULTS);
  });
  it('erkennt Standardwerte (dann wird nichts gespeichert)', () => {
    expect(isDefault({ ...DEFAULTS })).toBe(true);
    expect(isDefault({ ...DEFAULTS, spacing: 'wide' })).toBe(false);
  });
});
