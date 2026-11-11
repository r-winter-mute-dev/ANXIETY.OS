<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import { nav } from '../lib/nav.svelte';
  import { HIDE_HELP_LINK } from '../lib/routes';
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
  <div class="topnav">
    {#if showNav}
      <button class="quiet" onclick={() => (onback ? onback() : nav.back())}>‹ {t('nav.back')}</button>
    {:else}
      <span></span>
    {/if}
    <div class="right">
      {#if !HIDE_HELP_LINK.has(nav.screen)}
        <button class="quiet help" onclick={() => nav.go('emergency')}>{t('nav.help')}</button>
      {/if}
      {#if showNav}
        <button class="quiet" onclick={() => nav.home()}>{t('nav.exit')}</button>
      {/if}
    </div>
  </div>
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
    align-items: center;
    margin: 0 calc(-1 * var(--s2));
  }
  .right {
    display: flex;
    gap: var(--s1);
  }
  .help {
    color: var(--accent);
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
