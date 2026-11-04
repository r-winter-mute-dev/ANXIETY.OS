import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import { nav } from './lib/nav.svelte';
import { settings } from './lib/settings.svelte';
import { update } from './lib/update.svelte';

settings.apply(); // vor dem ersten Zeichnen, damit nichts aufblitzt
nav.init();
const app = mount(App, { target: document.getElementById('app')! });

// Offline-Fähigkeit: Panik passiert auch ohne Netz. Nur im Produktions-Build.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .then((reg) => update.watch(reg))
      .catch(() => {
        /* Ohne Service Worker funktioniert die App weiterhin online. */
      });
  });
}

export default app;
