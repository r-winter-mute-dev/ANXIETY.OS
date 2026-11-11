// Anzeige-Einstellungen. Das ist das Einzige, was ANXIETY.OS dauerhaft speichert:
// nur Darstellung, keine Angaben zur Person oder zur Angst, nur lokal in diesem Browser.
export type FontSize = 'm' | 'l' | 'xl';
export type Spacing = 'normal' | 'wide';
export type Motion = 'system' | 'reduce';
export type Theme = 'system' | 'mocha' | 'latte';

export interface Display {
  font: FontSize;
  spacing: Spacing;
  motion: Motion;
  theme: Theme;
}

export const KEY = 'anxietyos.display';
export const DEFAULTS: Display = { font: 'm', spacing: 'normal', motion: 'system', theme: 'system' };

const ALLOWED: { [K in keyof Display]: readonly Display[K][] } = {
  font: ['m', 'l', 'xl'],
  spacing: ['normal', 'wide'],
  motion: ['system', 'reduce'],
  theme: ['system', 'mocha', 'latte'],
};

/** Nur bekannte Schlüssel und Werte übernehmen; alles andere verwerfen. */
export function sanitize(raw: unknown): Display {
  const out = { ...DEFAULTS };
  if (raw && typeof raw === 'object') {
    for (const k of Object.keys(ALLOWED) as (keyof Display)[]) {
      const v = (raw as Record<string, unknown>)[k];
      if ((ALLOWED[k] as readonly unknown[]).includes(v)) (out as Record<string, unknown>)[k] = v;
    }
  }
  return out;
}

export function isDefault(d: Display) {
  return (Object.keys(DEFAULTS) as (keyof Display)[]).every((k) => d[k] === DEFAULTS[k]);
}

function read(): Display {
  try {
    const s = localStorage.getItem(KEY);
    return s ? sanitize(JSON.parse(s)) : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}

class Settings {
  value = $state<Display>(read());

  set<K extends keyof Display>(k: K, v: Display[K]) {
    this.value = { ...this.value, [k]: v };
    this.persist();
    this.apply();
  }

  reset() {
    this.value = { ...DEFAULTS };
    this.persist();
    this.apply();
  }

  /** Bei Standardwerten wird gar nichts gespeichert. */
  persist() {
    try {
      if (isDefault(this.value)) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, JSON.stringify(this.value));
    } catch {
      /* Speicher nicht verfügbar (z. B. privater Modus): Einstellungen gelten nur für diese Sitzung. */
    }
  }

  apply() {
    const el = document.documentElement;
    el.dataset.font = this.value.font;
    el.dataset.spacing = this.value.spacing;
    el.dataset.motion = this.value.motion;
    el.dataset.theme = this.value.theme;
    // Browserleiste passend zum Farbschema
    const light =
      this.value.theme === 'latte' ||
      (this.value.theme === 'system' && typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: light)').matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#eff1f5' : '#181825');
  }

  get reducedMotion() {
    if (this.value.motion === 'reduce') return true;
    return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
export const settings = new Settings();
