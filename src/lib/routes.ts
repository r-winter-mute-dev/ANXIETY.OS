// Reine Ablauflogik (ohne Browser-Abhängigkeiten) – unit-getestet.

export type Screen =
  | 'start'
  | 'sort'
  | 'dark'
  | 'emergency'
  | 'grounding'
  | 'reframe'
  | 'symptoms'
  | 'symptomsLearn'
  | 'breathing'
  | 'simple'
  | 'distract'
  | 'quickEnd'
  | 'learn'
  | 'about'
  | 'settings';

export type Exercise = 'reframe' | 'symptoms' | 'grounding' | 'distract' | 'breathing' | 'simple';

/**
 * Sortieren statt Triage: Was ist gerade da? Jede Antwort wird anerkannt und bekommt
 * zwei kleine nächste Schritte. Keine diagnostische Ableitung – alles bleibt wählbar.
 * Ersetzt Sicherheitsfrage, Angst-Skala und Bedarfsauswahl (Entscheidung Projektinhaber, 11.11.2026).
 */
export type Feeling = 'body' | 'thoughts' | 'feeling' | 'chaos' | 'unknown';
export const FEELINGS: Feeling[] = ['body', 'thoughts', 'feeling', 'chaos', 'unknown'];

export const NEXT_STEPS: Record<Feeling, [Exercise, Exercise]> = {
  body: ['symptoms', 'grounding'],
  thoughts: ['distract', 'reframe'],
  feeling: ['grounding', 'simple'],
  chaos: ['simple', 'grounding'],
  unknown: ['simple', 'distract'],
};

/** Reihenfolge in "Alle Übungen": Atemhilfe bewusst zuletzt (geringe Evidenz). */
export const EXERCISE_ORDER: Exercise[] = ['grounding', 'distract', 'simple', 'symptoms', 'reframe', 'breathing'];

/** Übungs-Bildschirme: Hier bleibt der Bildschirm an (Wake Lock). */
export const EXERCISE_SCREENS = new Set<Screen>(['reframe', 'symptoms', 'grounding', 'distract', 'breathing', 'simple']);

/** Bildschirme ohne Hilfe-Link (weil sie selbst Hilfe zeigen). */
export const HIDE_HELP_LINK: ReadonlySet<Screen> = new Set(['emergency', 'dark']);

/** Symptome in der Reihenfolge der Bearbeitung; Brustschmerz (Warnzeichen) immer zuerst. */
export function orderSymptoms(selected: Iterable<string>, order: readonly string[]): string[] {
  const set = new Set(selected);
  return order.filter((k) => set.has(k));
}
