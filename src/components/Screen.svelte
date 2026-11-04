<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import { nav } from '../lib/nav.svelte';
  import { t } from '../lib/content';

  let {
    title,
    lead,
    onback,
    showNav = true,
    children,
    actions,
  }: {
    title: string;
    lead?: string;
    /** Eigene Zurück-Logik (z. B. vorheriger Schritt einer Übung). */
    onback?: () => void;
    showNav?: boolean;
    children?: Snippet;
    actions?: Snippet;
  } = $props();

  let heading: HTMLHeadingElement;
  // Fokus auf die Überschrift, damit Screenreader den neuen Bildschirm ansagen.
  onMount(() => {
    heading?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  });
</script>

<section class="screen">
  {#if showNav}
    <div class="topnav">
      <button class="quiet" onclick={() => (onback ? onback() : nav.back())}>‹ {t('nav.back')}</button>
      <button class="quiet" onclick={() => nav.home()}>{t('nav.exit')}</button>
    </div>
  {/if}
  <h1 tabindex="-1" bind:this={heading}>{title}</h1>
  {#if lead}<p class="lead">{lead}</p>{/if}
  {#if children}<div class="body">{@render children()}</div>{/if}
  {#if actions}<div class="actions">{@render actions()}</div>{/if}
</section>

<style>
  .screen {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    min-height: 100%;
  }
  .topnav {
    display: flex;
    justify-content: space-between;
    margin: 0 calc(-1 * var(--s2));
  }
  h1 {
    outline: none;
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  .actions {
    display: flex;
    flex-direction: column;
    gap: var(--s3);
    margin-top: auto;
    padding-top: var(--s4);
  }
</style>
