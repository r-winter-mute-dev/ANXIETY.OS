// Navigation mit Browser-Verlauf, damit die Zurück-Taste (z. B. Android) wie erwartet funktioniert.
// Es wird nichts gespeichert: Der Sitzungszustand lebt nur im Arbeitsspeicher dieses Tabs.
import type { Exercise, Screen } from './routes';

class Session {
  pre = $state<number | null>(null);
  post = $state<number | null>(null);
  exercise = $state<Exercise | null>(null);
  reset() {
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
