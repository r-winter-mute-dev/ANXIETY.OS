<script lang="ts">
  import { onDestroy } from 'svelte';
  import Screen from '../components/Screen.svelte';
  import { finishExercise } from '../lib/start-exercise';
  import { settings } from '../lib/settings.svelte';
  import { block, t, list } from '../lib/content';

  // Sanfte, nicht forcierte Atemführung (Konzept 5.5): keine Pausen, kein Zeitlimit, jederzeit abbrechbar.
  const timing = block('breathing.timing') as unknown as { inSeconds: number; outSeconds: number };
  const reducedMotion = settings.reducedMotion;

  let mode = $state<'intro' | 'running' | 'after'>('intro');
  let phase = $state<'in' | 'out'>('in');
  let timer: ReturnType<typeof setTimeout> | undefined;

  function cycle() {
    phase = phase === 'in' ? 'out' : 'in';
    timer = setTimeout(cycle, (phase === 'in' ? timing.inSeconds : timing.outSeconds) * 1000);
  }
  function start() {
    mode = 'running';
    phase = 'in';
    timer = setTimeout(cycle, timing.inSeconds * 1000);
  }
  function stop() {
    clearTimeout(timer);
    mode = 'after';
  }
  onDestroy(() => clearTimeout(timer));

  const duration = $derived((phase === 'in' ? timing.inSeconds : timing.outSeconds) + 's');
</script>

{#if mode === 'intro'}
  <Screen title={t('breathing.title')} lead={t('breathing.intro')}>
    <ul class="rules">
      {#each list('breathing.rules') as r}<li>{r}</li>{/each}
    </ul>
    {#snippet actions()}
      <button class="primary" onclick={start}>{t('breathing.start')}</button>
      <button class="quiet" onclick={finishExercise}>{t('nav.skip')}</button>
    {/snippet}
  </Screen>
{:else if mode === 'running'}
  <Screen title={t('breathing.title')} onback={stop}>
    <div class="stage" aria-live="polite">
      <div
        class="circle"
        class:expand={phase === 'in'}
        class:static={reducedMotion}
        style:transition-duration={duration}
        aria-hidden="true"
      ></div>
      <p class="cue">{t(phase === 'in' ? 'breathing.in' : 'breathing.out')}</p>
    </div>
    {#snippet actions()}
      <button class="primary" onclick={stop}>{t('breathing.stop')}</button>
    {/snippet}
  </Screen>
{:else}
  <Screen title={t('breathing.title')}>
    <p class="instruction">{t('breathing.after')}</p>
    {#snippet actions()}
      <button class="primary" onclick={finishExercise}>{t('nav.next')}</button>
    {/snippet}
  </Screen>
{/if}

<style>
  .rules {
    margin: 0;
    padding-left: 1.2em;
    display: flex;
    flex-direction: column;
    gap: var(--s3);
  }
  .stage {
    display: grid;
    place-items: center;
    gap: var(--s4);
    padding: var(--s5) 0;
  }
  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
    border: 2px solid var(--accent);
    transform: scale(0.6);
    transition-property: transform;
    transition-timing-function: ease-in-out;
  }
  .circle.expand {
    transform: scale(1);
  }
  .circle.static {
    transform: scale(0.8);
    transition: none;
  }
  .cue {
    font-size: var(--fs-xl);
    margin: 0;
  }
  .instruction {
    font-size: var(--fs-xl);
  }
</style>
