<script lang="ts">
  // Eine kleine Reise an einen ruhigen Ort. Jede Station: ein Bild, ein Satz, kein Zeitdruck.
  // Die Szene im Hintergrund rückt mit jeder Station näher (stageFor in routes.ts).
  import { onDestroy } from 'svelte';
  import Screen from '../components/Screen.svelte';
  import { nav, session } from '../lib/nav.svelte';
  import { t, list } from '../lib/content';
  import { JOURNEY_STATIONS } from '../lib/routes';

  const stations = list('journey.stations');
  const hints = list('journey.hints');
  session.journeyStep = 0;
  const step = $derived(session.journeyStep);
  const last = $derived(step === JOURNEY_STATIONS - 1);

  function next() {
    if (last) nav.go('ask');
    else session.journeyStep++;
  }
  function back() {
    if (step > 0) session.journeyStep--;
    else nav.back();
  }
  onDestroy(() => {
    if (nav.screen !== 'journey') session.journeyStep = 0;
  });
</script>

<Screen title={t('journey.title')} hero onback={back}>
  {#key step}
    <div class="station">
      <p class="line">{stations[step]}</p>
      {#if hints[step]}<p class="hint muted">{hints[step]}</p>{/if}
    </div>
  {/key}
  <div class="dots" role="img" aria-label={t('a11y.step', { n: step + 1, total: JOURNEY_STATIONS })}>
    {#each stations as _, i}<span class:on={i <= step}></span>{/each}
  </div>
  {#snippet actions()}
    <button class="primary" onclick={next}>{last ? t('journey.arrive') : t('journey.next')}</button>
    {#if !last}
      <button class="quiet" onclick={() => nav.go('ask')}>{t('journey.skip')}</button>
    {/if}
  {/snippet}
</Screen>

<style>
  .station {
    display: flex;
    flex-direction: column;
    gap: var(--s4);
  }
  .line {
    font-size: 1.3rem;
    line-height: 1.55;
    animation: appear 1.4s ease-out both;
  }
  .hint {
    animation: appear 1.4s ease-out 1.2s both;
  }
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(8px);
      filter: blur(2px);
    }
    to {
      opacity: 1;
      transform: none;
      filter: none;
    }
  }
  .dots {
    display: flex;
    gap: var(--s2);
  }
  .dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--line-strong);
    transition: background-color 1s ease;
  }
  .dots span.on {
    background: var(--accent);
  }
</style>
