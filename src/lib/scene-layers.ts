// Lädt die Szenen-Ebenen des Projektinhabers (src/assets/scene/{dark,light}/*.svg) zur Build-Zeit
// als Text, damit sie inline in EINER SVG liegen: offline verfügbar und einzeln animierbar.
// IDs bekommen ein Präfix pro Thema, weil beide Sätze dieselben Verlaufs-IDs verwenden.

export type Theme = 'dark' | 'light';
export const LAYERS = ['06_himmel', '01_insel', '02_stadt', '05_bruecke_buecher', '03_baum', '04_baumlicht'] as const;
export type Layer = (typeof LAYERS)[number];

export interface ParsedSvg {
  defs: string;
  body: string;
}

/** Zieht <defs> und Inhalt aus einer SVG-Datei und präfixt alle IDs und Verweise. */
export function parseLayer(svg: string, prefix: string): ParsedSvg {
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  const defsMatch = inner.match(/<defs>([\s\S]*?)<\/defs>/);
  const rename = (s: string) =>
    s.replace(/\bid="([^"]+)"/g, `id="${prefix}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`);
  return {
    defs: rename(defsMatch?.[1] ?? ''),
    body: rename(inner.replace(/<defs>[\s\S]*?<\/defs>/, '')).trim(),
  };
}

const files = import.meta.glob('../assets/scene/*/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<
  string,
  string
>;

function load(theme: Theme) {
  const layers = {} as Record<Layer, string>;
  let defs = '';
  for (const l of LAYERS) {
    const raw = files[`../assets/scene/${theme}/${l}.svg`];
    if (!raw) throw new Error(`Szenen-Ebene fehlt: ${theme}/${l}.svg`);
    const p = parseLayer(raw, theme[0]);
    // Alle Ebenen eines Themas teilen dieselben Verläufe – einmal reicht.
    if (!defs) defs = p.defs;
    layers[l] = p.body;
  }
  return { defs, layers };
}

export const scene = { dark: load('dark'), light: load('light') };
