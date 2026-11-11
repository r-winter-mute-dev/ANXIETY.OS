import { nav, session } from './nav.svelte';
import type { Exercise } from './routes';

/** Übung aus dem Sortieren oder direkt: am Ende ein kurzer Halt ohne Skala. */
export function startExercise(ex: Exercise) {
  begin('quick', ex);
}

/** Übungsmodus aus „Angst verstehen“: am Ende direkt zurück. */
export function startPractice(ex: Exercise) {
  begin('practice', ex);
}

function begin(mode: 'quick' | 'practice', ex: Exercise) {
  session.mode = mode;
  session.returnDepth = nav.depth;
  session.exercise = ex;
  nav.go(ex);
}

/** Wechsel aus einer Übung in eine andere (z. B. Körpersignale → Grounding), Modus bleibt erhalten. */
export function switchExercise(ex: Exercise) {
  session.exercise = ex;
  nav.go(ex);
}

export function finishExercise() {
  if (session.mode === 'quick') {
    nav.go('quickEnd');
    return;
  }
  const d = session.returnDepth;
  session.exercise = null;
  nav.backTo(d);
}
