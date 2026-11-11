<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { startExercise } from '../lib/start-exercise';
  import type { Exercise } from '../lib/routes';
  import { t } from '../lib/content';
  import { update } from '../lib/update.svelte';

  const quick: Exercise[] = ['grounding', 'distract', 'simple', 'breathing'];
</script>

<Screen title={t('start.title')} lead={t('start.lead')} showNav={false} hero>
  {#if update.available}
    <div class="card update" role="status">
      <p>{t('start.update')}</p>
      <button class="secondary" onclick={() => update.apply()}>{t('start.update.button')}</button>
    </div>
  {/if}

  <div class="go">
    <button class="primary big" onclick={() => nav.go('journey')}>
      {t('start.journey')}
      <small>{t('start.journey.sub')}</small>
    </button>
    <button class="secondary" onclick={() => nav.go('ask')}>{t('start.direct')}</button>
  </div>

  <section aria-labelledby="quick">
    <h2 id="quick">{t('start.quick.title')}</h2>
    <div class="chips">
      {#each quick as ex}
        <button class="chip" onclick={() => startExercise(ex)}>{t(`choose.ex.${ex}`)}</button>
      {/each}
    </div>
  </section>

  {#snippet actions()}
    <button class="secondary" onclick={() => nav.go('learn')}>
      {t('start.learn')}
      <small>{t('start.learn.sub')}</small>
    </button>
    <div class="links">
      <button class="quiet" onclick={() => nav.go('settings')}>{t('start.settings')}</button>
      <button class="quiet" onclick={() => nav.go('about')}>{t('start.about')}</button>
    </div>
  {/snippet}
</Screen>

<style>
  .update {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
  }
  .go {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
  }
  .primary.big {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .primary small {
    font-weight: 400;
    font-size: var(--fs-s);
    opacity: 0.8;
    margin-top: 2px;
  }
  section h2 {
    margin: 0;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
    margin-top: var(--s3);
  }
  .links {
    display: flex;
    flex-direction: column;
  }
</style>
