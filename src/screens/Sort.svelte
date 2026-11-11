<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { session } from '../lib/nav.svelte';
  import { startExercise } from '../lib/start-exercise';
  import { EXERCISE_ORDER, NEXT_STEPS } from '../lib/routes';
  import { t } from '../lib/content';

  // Anerkennen, was da ist – dann zwei kleine nächste Schritte zur Auswahl.
  const f = session.feeling ?? 'unknown';
  const steps = NEXT_STEPS[f];
  let showAll = $state(false);
</script>

<Screen title={t(`sort.${f}.label`)}>
  <p class="ack">{t(`sort.${f}.ack`)}</p>
  <h2>{t('sort.next')}</h2>
  <div class="options">
    {#each steps as ex}
      <button class="option" onclick={() => startExercise(ex)}>{t(`choose.ex.${ex}`)}</button>
    {/each}
    {#if !showAll}
      <button class="quiet" onclick={() => (showAll = true)}>{t('sort.all')}</button>
    {/if}
  </div>
  {#if showAll}
    <h2>{t('sort.all.title')}</h2>
    <div class="chips">
      {#each EXERCISE_ORDER.filter((e) => !steps.includes(e)) as ex}
        <button class="chip" onclick={() => startExercise(ex)}>{t(`choose.ex.${ex}`)}</button>
      {/each}
    </div>
  {/if}
</Screen>

<style>
  .ack {
    font-size: var(--fs-l);
    line-height: 1.5;
  }
  h2 {
    margin: var(--s2) 0 0;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
  }
</style>
