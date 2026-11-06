<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import Steps from '../components/Steps.svelte';
  import { finishExercise } from '../lib/start-exercise';
  import { t, list } from '../lib/content';

  // Ablenkung mit mäßiger Anforderung: fordernd genug, um zu binden, aber nicht überfordernd.
  const variants = ['count', 'abc', 'colors', 'way'] as const;
  type Variant = (typeof variants)[number];
  let chosen = $state<Variant | null>(null);
</script>

{#if chosen === null}
  <Screen title={t('distract.title')} lead={t('distract.intro')}>
    <h2>{t('distract.choose')}</h2>
    <div class="options">
      {#each variants as v}
        <button class="option" onclick={() => (chosen = v)}>{t(`distract.${v}.label`)}</button>
      {/each}
    </div>
  </Screen>
{:else}
  <Steps
    title={t(`distract.${chosen}.label`)}
    steps={list(`distract.${chosen}.steps`)}
    onfinish={finishExercise}
    onexitstart={() => (chosen = null)}
  />
{/if}
