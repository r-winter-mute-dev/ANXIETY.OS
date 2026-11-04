import { nav, session } from './nav.svelte';
import type { Exercise } from './routes';

export function startExercise(ex: Exercise) {
  session.exercise = ex;
  nav.go(ex);
}

/** Nach jeder Übung: erneute Selbsteinschätzung (Konzept Phase 5). */
export function finishExercise() {
  nav.go('ratingPost');
}
