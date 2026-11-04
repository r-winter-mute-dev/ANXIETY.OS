<script lang="ts">
  // Ruhige Momente: alle Körpersignale zum Nachlesen, plus Hintergrund zum Alarmsystem.
  import Screen from '../components/Screen.svelte';
  import SymptomDetail from '../components/SymptomDetail.svelte';
  import { nav } from '../lib/nav.svelte';
  import { t, list } from '../lib/content';

  const ORDER = list('symptoms.order');
  const general = ['calmfirst', 'alarm', 'peak', 'blue', 'checking'] as const;
  let open = $state<string | null>(null);
</script>

{#if open === null}
  <Screen title={t('symptoms.title')} lead={t('symptoms.learn.lead')}>
    <p>{t('symptoms.intro')}</p>
    <div class="options">
      {#each ORDER as key}
        <button class="option" onclick={() => (open = key)}>{t(`symptoms.${key}.label`)} ›</button>
      {/each}
    </div>
    {#each general as g}
      <article class="card">
        <h2>{t(`symptoms.${g}.title`)}</h2>
        <p>{t(`symptoms.${g}.text`)}</p>
      </article>
    {/each}
  </Screen>
{:else}
  {#key open}
    <Screen title={t(`symptoms.${open}.label`)} onback={() => (open = null)}>
      <SymptomDetail k={open} learn />
      {#snippet actions()}
        <button class="secondary" onclick={() => (open = null)}>‹ {t('symptoms.title')}</button>
        <button class="quiet" onclick={() => nav.back()}>{t('learn.title')}</button>
      {/snippet}
    </Screen>
  {/key}
{/if}

<style>
  article h2 {
    margin-top: 0;
  }
</style>
