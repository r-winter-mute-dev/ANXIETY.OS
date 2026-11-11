<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav, session } from '../lib/nav.svelte';
  import { startExercise } from '../lib/start-exercise';
  import { FEELINGS, type Feeling, type Exercise } from '../lib/routes';
  import { t } from '../lib/content';
  import { update } from '../lib/update.svelte';

  const quick: Exercise[] = ['grounding', 'distract', 'simple', 'breathing'];

  function pick(f: Feeling) {
    session.feeling = f;
    nav.go('sort');
  }
</script>

<Screen title={t('start.title')} lead={t('start.lead')} showNav={false}>
  {#if update.available}
    <div class="card update" role="status">
      <p>{t('start.update')}</p>
      <button class="secondary" onclick={() => update.apply()}>{t('start.update.button')}</button>
    </div>
  {/if}

  <section aria-labelledby="q">
    <h2 id="q">{t('start.question')}</h2>
    <p class="muted small hint">{t('start.question.hint')}</p>
    <div class="options">
      {#each FEELINGS as f}
        <button class="option" onclick={() => pick(f)}>{t(`sort.${f}.label`)}</button>
      {/each}
      <button class="option soft" onclick={() => nav.go('dark')}>{t('sort.dark')}</button>
    </div>
  </section>

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
  section h2 {
    margin: 0;
  }
  .hint {
    margin: var(--s1) 0 var(--s3);
  }
  .options .soft {
    color: var(--muted);
    border-style: dashed;
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
