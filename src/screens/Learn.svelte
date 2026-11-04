<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import CycleDiagram from '../components/CycleDiagram.svelte';
  import { nav } from '../lib/nav.svelte';
  import { startPractice } from '../lib/start-exercise';
  import { t } from '../lib/content';
  import type { Exercise } from '../lib/routes';

  const topics = ['function', 'cycle', 'feeling', 'avoid', 'help'] as const;
  const practice: Exercise[] = ['grounding', 'breathing', 'reframe', 'simple'];
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
    <h2>{t('learn.practice.title')}</h2>
    <p>{t('learn.practice.text')}</p>
    <div class="options">
      {#each practice as ex}
        <button class="option" onclick={() => startPractice(ex)}>{t(`learn.practice.${ex}`)}</button>
      {/each}
    </div>
  </section>
</Screen>

<style>
  .practice h2 {
    margin-top: 0;
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
