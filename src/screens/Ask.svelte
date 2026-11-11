<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav, session } from '../lib/nav.svelte';
  import { FEELINGS, type Feeling } from '../lib/routes';
  import { t } from '../lib/content';

  function pick(f: Feeling) {
    session.feeling = f;
    nav.go('sort');
  }
</script>

<Screen title={t('start.question')} lead={t('start.question.hint')}>
  <div class="options">
    {#each FEELINGS as f, i}
      <button class="option" style="animation-delay:{0.15 + i * 0.12}s" onclick={() => pick(f)}>{t(`sort.${f}.label`)}</button>
    {/each}
    <button class="option soft" style="animation-delay:0.9s" onclick={() => nav.go('dark')}>{t('sort.dark')}</button>
  </div>
</Screen>

<style>
  .option {
    animation: appear 0.9s ease-out both;
  }
  .soft {
    color: var(--muted);
    border-style: dashed;
  }
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
</style>
