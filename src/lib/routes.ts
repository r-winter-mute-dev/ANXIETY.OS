// Reine Ablauflogik (ohne Browser-Abhängigkeiten) – unit-getestet.

export type Screen =
  | 'start'
  | 'journey'
  | 'ask'
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
export const EXERCISE_SCREENS = new Set<Screen>(['journey', 'reframe', 'symptoms', 'grounding', 'distract', 'breathing', 'simple']);

/**
 * Die Szene im Hintergrund: Je weiter man kommt, desto näher rückt der ruhige Ort.
 * 0 Insel in der Ferne · 1 Brücke · 2 Stadt · 3 Platz mit Kristallbaum · 4 Baum leuchtet (Halt).
 */
export type Stage = 0 | 1 | 2 | 3 | 4;
export const JOURNEY_STATIONS = 4;

export function stageFor(screen: Screen, journeyStep = 0): Stage {
  switch (screen) {
    case 'start':
      return 0;
    case 'journey':
      return Math.max(0, Math.min(3, journeyStep)) as Stage;
    case 'quickEnd':
      return 4;
    case 'learn':
    case 'symptomsLearn':
    case 'about':
    case 'settings':
    case 'emergency':
      return 0;
    default:
      return 3;
  }
}

/** Auf diesen Bildschirmen ist die Szene groß zu sehen, sonst nur gedämpft im Hintergrund. */
export const HERO_SCREENS: ReadonlySet<Screen> = new Set(['start', 'journey']);

/** Bildschirme ohne Hilfe-Link (weil sie selbst Hilfe zeigen). */
export const HIDE_HELP_LINK: ReadonlySet<Screen> = new Set(['emergency', 'dark']);

/** Symptome in der Reihenfolge der Bearbeitung; Brustschmerz (Warnzeichen) immer zuerst. */
export function orderSymptoms(selected: Iterable<string>, order: readonly string[]): string[] {
  const set = new Set(selected);
  return order.filter((k) => set.has(k));
}
