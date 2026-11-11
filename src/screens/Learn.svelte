<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import CycleDiagram from '../components/CycleDiagram.svelte';
  import { nav } from '../lib/nav.svelte';
  import { startPractice } from '../lib/start-exercise';
  import { t, list } from '../lib/content';
  import type { Exercise } from '../lib/routes';

  const topics = ['function', 'cycle', 'feeling', 'avoid', 'help'] as const;
  const practice: Exercise[] = ['grounding', 'distract', 'breathing', 'reframe', 'simple'];
</script>

<Screen title={t('learn.title')} lead={t('learn.intro')}>
  <button class="secondary" onclick={() => nav.go('symptomsLearn')}>{t('learn.symptoms.link')} ›</button>
  {#each topics as k}
    <article class="card">
      <h2>{t(`learn.${k}.title`)}</h2>
      <p>{t(`learn.${k}.text`)}</p>
      {#if k === 'cycle'}<CycleDiagram />{/if}
    </article>
  {/each}
  <section class="card practice">
    <h2>{t('learn.prepare.title')}</h2>
    <ul>
      {#each list('learn.prepare.steps') as s}<li>{s}</li>{/each}
    </ul>
  </section>
  <section class="card practice">
    <h2>{t('learn.practice.title')}</h2>
    <p>{t('learn.practice.text')}</p>
    <div class="options">
      {#each practice as ex}
        <button class="option" onclick={() => startPractice(ex)}>{t(`choose.ex.${ex}`)}</button>
      {/each}
    </div>
  </section>
</Screen>

<style>
  .practice h2 {
    margin-top: 0;
  }
  .practice ul {
    margin: var(--s3) 0 0;
    padding-left: 1.2em;
    display: flex;
    flex-direction: column;
    gap: var(--s2);
  }
  .practice .options {
    margin-top: var(--s3);
  }
  article h2 {
    margin-top: 0;
  }
  article p {
    margin-bottom: 0;
  }
</style>
