// Navigation mit Browser-Verlauf, damit die Zurück-Taste (z. B. Android) wie erwartet funktioniert.
// Es wird nichts gespeichert: Der Sitzungszustand lebt nur im Arbeitsspeicher dieses Tabs.
import type { Exercise, Screen } from './routes';

class Session {
  pre = $state<number | null>(null);
  post = $state<number | null>(null);
  exercise = $state<Exercise | null>(null);
  /**
   * flow: kompletter Ablauf mit Einschätzung vorher/nachher.
   * quick: direkt von der Startseite, practice: aus „Angst verstehen“ – beide ohne Einschätzung.
   */
  mode = $state<'flow' | 'quick' | 'practice'>('flow');
  /** Verlaufstiefe, zu der eine Schnell- oder Übungs-Übung am Ende zurückkehrt. */
  returnDepth = 0;
  reset() {
    this.mode = 'flow';
    this.returnDepth = 0;
    this.pre = null;
    this.post = null;
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
