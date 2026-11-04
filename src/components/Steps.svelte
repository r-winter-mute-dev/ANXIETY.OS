<script lang="ts">
  // Zeigt eine Liste von Anweisungen – genau eine pro Bildschirm.
  import Screen from './Screen.svelte';
  import { t } from '../lib/content';

  let {
    title,
    steps,
    badge,
    onfinish,
    onexitstart,
  }: {
    title: string;
    steps: string[];
    badge?: string;
    onfinish: () => void;
    /** Zurück auf dem ersten Schritt. */
    onexitstart: () => void;
  } = $props();

  let i = $state(0);
  const last = $derived(i === steps.length - 1);
</script>

{#key i}
  <Screen {title} onback={() => (i > 0 ? i-- : onexitstart())}>
    {#if badge && i === 0}<p class="badge">{badge}</p>{/if}
    <div class="progress" role="img" aria-label={t('a11y.step', { n: i + 1, total: steps.length })}>
      {#each steps as _, k}<span class:on={k <= i}></span>{/each}
    </div>
    <p class="instruction">{steps[i]}</p>
    {#snippet actions()}
      <button class="primary" onclick={() => (last ? onfinish() : i++)}>
        {last ? t('nav.done') : t('nav.next')}
      </button>
    {/snippet}
  </Screen>
{/key}

<style>
  .instruction {
    font-size: var(--fs-xl);
    line-height: 1.4;
    margin: var(--s4) 0;
  }
  .progress {
    display: flex;
    gap: 6px;
    margin: 0;
  }
  .progress span {
    flex: 1;
    height: 4px;
    border-radius: 2px;
    background: var(--line);
  }
  .progress span.on {
    background: var(--accent);
  }
</style>
