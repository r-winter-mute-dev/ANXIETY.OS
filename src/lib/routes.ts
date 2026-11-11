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
  | 'symptoms'
  | 'symptomsLearn'
  | 'breathing'
  | 'ratingPost'
  | 'end'
  | 'learn'
  | 'about'
  | 'settings'
  | 'distract'
  | 'quickEnd';

export type Exercise = 'reframe' | 'symptoms' | 'grounding' | 'distract' | 'breathing' | 'simple';
export type Need = 'thoughts' | 'body' | 'breath' | 'overwhelm';

/**
 * Adaptionsprinzip (Konzept 6.1): Zuordnung der subjektiven Angabe zu einem Angebot.
 * Keine diagnostische Ableitung – die Person kann jederzeit etwas anderes wählen.
 * Abweichung: Körperfokus führt zu "Körpersignale verstehen" (Wunsch Projektinhaber),
 * Grounding wird dort am Ende angeboten.
 */
export const NEED_TO_EXERCISE: Record<Need, Exercise> = {
  thoughts: 'reframe',
  body: 'symptoms',
  breath: 'breathing',
  overwhelm: 'simple',
};

/** Reihenfolge in "Alle Übungen": Atemhilfe bewusst nicht zuerst (geringe Evidenz). */
export const EXERCISE_ORDER: Exercise[] = ['reframe', 'symptoms', 'grounding', 'distract', 'simple', 'breathing'];

/** Übungs-Bildschirme: Hier bleibt der Bildschirm an (Wake Lock), damit er nicht mitten in der Übung ausgeht. */
export const EXERCISE_SCREENS = new Set<Screen>(['reframe', 'symptoms', 'grounding', 'distract', 'breathing', 'simple']);

/** Direkt von der Startseite nutzbar, ohne Sicherheitsfrage und Einschätzung (Wunsch Projektinhaber). */
export const QUICK_EXERCISES: Exercise[] = ['distract', 'grounding', 'breathing', 'symptoms', 'simple'];

/** Sicherheitsfrage: jedes "Ja" oder "unsicher" führt zur Hilfe. */
export function afterSafety(answer: 'yes' | 'no'): Screen {
  return answer === 'no' ? 'ratingPre' : 'emergency';
}

/** Bildschirme, auf denen die Notfall-Leiste nicht nötig ist (weil sie selbst Hilfe zeigen). */
export const HIDE_EMERGENCY_BAR: ReadonlySet<Screen> = new Set(['emergency']);

export function anxietyIncreased(pre: number | null, post: number | null): boolean {
  return pre !== null && post !== null && post > pre;
}

/** Symptome in der Reihenfolge der Bearbeitung; Brustschmerz (Warnzeichen) immer zuerst. */
export function orderSymptoms(selected: Iterable<string>, order: readonly string[]): string[] {
  const set = new Set(selected);
  return order.filter((k) => set.has(k));
}
