// Navigation mit Browser-Verlauf, damit die Zurück-Taste (z. B. Android) wie erwartet funktioniert.
// Es wird nichts gespeichert: Der Sitzungszustand lebt nur im Arbeitsspeicher dieses Tabs.
import type { Exercise, Feeling, Screen } from './routes';

class Session {
  exercise = $state<Exercise | null>(null);
  /** Antwort auf „Was ist gerade da?“ – nur im Arbeitsspeicher. */
  feeling = $state<Feeling | null>(null);
  /** Station der Reise (für die Szene im Hintergrund). */
  journeyStep = $state(0);
  /** quick: aus dem Sortieren oder direkt; practice: aus „Angst verstehen“. */
  mode = $state<'quick' | 'practice'>('quick');
  /** Verlaufstiefe, zu der eine Schnell- oder Übungs-Übung am Ende zurückkehrt. */
  returnDepth = 0;
  reset() {
    this.mode = 'quick';
    this.feeling = null;
    this.journeyStep = 0;
    this.returnDepth = 0;
    this.exercise = null;
  }
}
export const session = new Session();

class Nav {
  screen = $state<Screen>('start');
  #depth = 0;

  init() {
    history.replaceState({ s: 'start', d: 0 }, '');
    window.addEventListener('popstate', (e) => {
      const st = e.state as { s?: Screen; d?: number } | null;
      this.screen = st?.s ?? 'start';
      this.#depth = st?.d ?? 0;
      if (this.screen === 'start') session.reset();
    });
  }

  go(s: Screen) {
    this.#depth++;
    this.screen = s;
    history.pushState({ s, d: this.#depth }, '');
  }

  get depth() {
    return this.#depth;
  }

  /** Zurück zu einer früheren Verlaufstiefe (z. B. Startseite oder „Angst verstehen“). */
  backTo(depth: number) {
    const n = this.#depth - depth;
    if (n > 0) history.go(-n);
  }

  back() {
    if (this.#depth > 0) history.back();
    else this.home();
  }

  /** Beenden: zurück zum Start, alle Eingaben verwerfen. */
  home() {
    session.reset();
    if (this.#depth > 0) history.go(-this.#depth);
    this.#depth = 0;
    this.screen = 'start';
  }
}
export const nav = new Nav();
