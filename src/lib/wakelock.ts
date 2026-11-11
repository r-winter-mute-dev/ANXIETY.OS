// Hält den Bildschirm während einer Übung an. Ohne Berechtigungsabfrage, ohne Daten.
// Nicht unterstützte Browser ignorieren das einfach.
let lock: WakeLockSentinel | null = null;
let wanted = false;

async function acquire() {
  if (!wanted || lock || document.visibilityState !== 'visible' || !('wakeLock' in navigator)) return;
  try {
    lock = await navigator.wakeLock.request('screen');
    lock.addEventListener('release', () => (lock = null));
  } catch {
    lock = null; // z. B. Energiesparmodus: dann eben nicht
  }
}

if (typeof document !== 'undefined') {
  // Der Browser gibt die Sperre beim Wechsel in den Hintergrund frei; danach neu anfordern.
  document.addEventListener('visibilitychange', acquire);
}

export function keepAwake(on: boolean) {
  wanted = on;
  if (on) void acquire();
  else if (lock) {
    void lock.release().catch(() => {});
    lock = null;
  }
}
