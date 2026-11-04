<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import CycleDiagram from '../components/CycleDiagram.svelte';
  import { t } from '../lib/content';

  const topics = ['function', 'cycle', 'feeling', 'avoid', 'help'] as const;
</script>

<Screen title={t('learn.title')} lead={t('learn.intro')}>
  {#each topics as k}
    <article class="card">
      <h2>{t(`learn.${k}.title`)}</h2>
      <p>{t(`learn.${k}.text`)}</p>
      {#if k === 'cycle'}<CycleDiagram />{/if}
    </article>
  {/each}
</Screen>

<style>
  article h2 {
    margin-top: 0;
  }
  article p {
    margin-bottom: 0;
  }
</style>
