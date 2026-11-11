import { nav, session } from './nav.svelte';
import type { Exercise } from './routes';

/** Aus dem kompletten Ablauf (nach Einschätzung und Auswahl). */
export function startExercise(ex: Exercise) {
  session.mode = 'flow';
  session.exercise = ex;
  nav.go(ex);
}

/** Direkt von der Startseite: ohne Sicherheitsfrage und Einschätzung, am Ende zurück zum Start. */
export function startQuick(ex: Exercise) {
  begin('quick', ex);
}

/** Übungsmodus aus „Angst verstehen“: ohne Einschätzung, am Ende zurück. */
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

/** Nach jeder Übung: im Ablauf erneute Selbsteinschätzung (Konzept Phase 5), sonst zurück. */
export function finishExercise() {
  if (session.mode === 'flow') {
    nav.go('ratingPost');
    return;
  }
  if (session.mode === 'quick') {
    // Kurzer Abschluss ohne Skala, mit Weg zur Hilfe, falls es schlimmer geworden ist.
    nav.go('quickEnd');
    return;
  }
  const d = session.returnDepth;
  session.mode = 'flow';
  session.exercise = null;
  nav.backTo(d);
}
