import { nav, session } from './nav.svelte';
import type { Exercise } from './routes';

export function startExercise(ex: Exercise) {
  session.practice = false;
  session.exercise = ex;
  nav.go(ex);
}

/** Übungsmodus: dieselben Übungen, aber ohne Einschätzung und ohne Abschluss-Ablauf. */
export function startPractice(ex: Exercise) {
  session.practice = true;
  session.exercise = ex;
  nav.go(ex);
}

/** Nach jeder Übung: erneute Selbsteinschätzung (Konzept Phase 5) – außer im Übungsmodus. */
export function finishExercise() {
  if (session.practice) {
    session.practice = false;
    session.exercise = null;
    nav.back();
    return;
  }
  nav.go('ratingPost');
}
