<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import Steps from '../components/Steps.svelte';
  import { nav } from '../lib/nav.svelte';
  import { finishExercise } from '../lib/start-exercise';
  import { t, list } from '../lib/content';

  // Mehrere Varianten, weil sensorische Übungen individuell verschieden erlebt werden (Konzept 5.3).
  const variants = ['room', 'sound', 'contact', '54321'] as const;
  type Variant = (typeof variants)[number];
  let chosen = $state<Variant | null>(null);
</script>

{#if chosen === null}
  <Screen title={t('grounding.title')} lead={t('grounding.intro')}>
    <h2>{t('grounding.choose')}</h2>
    <div class="options">
      {#each variants as v}
        <button class="option" onclick={() => (chosen = v)}>
          {t(`grounding.${v}.label`)}
          {#if v === '54321'}<small>{t('grounding.54321.badge')}</small>{/if}
        </button>
      {/each}
    </div>
  </Screen>
{:else}
  <Steps
    title={t(`grounding.${chosen}.label`)}
    steps={list(`grounding.${chosen}.steps`)}
    badge={chosen === '54321' ? t('grounding.54321.badge') : undefined}
    onfinish={finishExercise}
    onexitstart={() => (chosen = null)}
  />
{/if}
