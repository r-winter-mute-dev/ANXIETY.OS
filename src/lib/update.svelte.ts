// Hinweis auf eine neue Version. Wird nur auf der Startseite gezeigt, nie während einer Übung.
class Update {
  available = $state(false);
  #reg: ServiceWorkerRegistration | null = null;

  watch(reg: ServiceWorkerRegistration) {
    this.#reg = reg;
    // Nur ein Update, wenn bereits eine Version die Seite steuert (nicht beim allerersten Laden).
    const mark = () => {
      if (reg.waiting && navigator.serviceWorker.controller) this.available = true;
    };
    mark();
    reg.addEventListener('updatefound', () => {
      reg.installing?.addEventListener('statechange', mark);
    });
  }

  apply() {
    const waiting = this.#reg?.waiting;
    if (!waiting) return location.reload();
    navigator.serviceWorker.addEventListener('controllerchange', () => location.reload(), { once: true });
    waiting.postMessage('skipWaiting');
  }
}
export const update = new Update();
