// Reine Ablauflogik (ohne Browser-Abhängigkeiten) – unit-getestet.

export type Screen =
  | 'start'
  | 'safety'
  | 'emergency'
  | 'ratingPre'
  | 'choose'
  | 'chooseAll'
  | 'simple'
  | 'grounding'
  | 'reframe'
  | 'breathing'
  | 'ratingPost'
  | 'end'
  | 'learn'
  | 'about';

export type Exercise = 'reframe' | 'grounding' | 'breathing' | 'simple';
export type Need = 'thoughts' | 'body' | 'breath' | 'overwhelm';

/**
 * Adaptionsprinzip (Konzept 6.1): Zuordnung der subjektiven Angabe zu einem Angebot.
 * Keine diagnostische Ableitung – die Person kann jederzeit etwas anderes wählen.
 */
export const NEED_TO_EXERCISE: Record<Need, Exercise> = {
  thoughts: 'reframe',
  body: 'grounding',
  breath: 'breathing',
  overwhelm: 'simple',
};

/** Reihenfolge in "Alle Übungen": Atemhilfe bewusst nicht zuerst (geringe Evidenz). */
export const EXERCISE_ORDER: Exercise[] = ['reframe', 'grounding', 'simple', 'breathing'];

/** Sicherheitsfrage: jedes "Ja" oder "unsicher" führt zur Hilfe. */
export function afterSafety(answer: 'yes' | 'no'): Screen {
  return answer === 'no' ? 'ratingPre' : 'emergency';
}

/** Bildschirme, auf denen die Notfall-Leiste nicht nötig ist (weil sie selbst Hilfe zeigen). */
export const HIDE_EMERGENCY_BAR: ReadonlySet<Screen> = new Set(['emergency']);

export function anxietyIncreased(pre: number | null, post: number | null): boolean {
  return pre !== null && post !== null && post > pre;
}
