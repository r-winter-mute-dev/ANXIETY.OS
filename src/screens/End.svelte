<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav, session } from '../lib/nav.svelte';
  import { anxietyIncreased } from '../lib/routes';
  import { t } from '../lib/content';

  const hasBoth = $derived(session.pre !== null && session.post !== null);
  const higher = $derived(anxietyIncreased(session.pre, session.post));
</script>

<Screen title={t('end.title')}>
  {#if hasBoth}
    <p class="compare">{t('end.compare', { pre: session.pre!, post: session.post! })}</p>
  {/if}
  <p>{t('end.neutral')}</p>
  {#if higher}
    <div class="card warn">
      <p>{t('end.higher')}</p>
      <button class="secondary strong" onclick={() => nav.go('emergency')}>{t('emergency.bar')}</button>
    </div>
  {/if}
  <p class="muted">{t('end.followup')}</p>
  <p class="muted small">{t('end.cleared')}</p>
  {#snippet actions()}
    <button class="secondary" onclick={() => nav.go('chooseAll')}>{t('end.again')}</button>
    <button class="primary" onclick={() => nav.home()}>{t('end.finish')}</button>
  {/snippet}
</Screen>

<style>
  .compare {
    font-size: var(--fs-l);
    font-variant-numeric: tabular-nums;
  }
  .warn {
    display: flex;
    flex-direction: column;
    gap: var(--s3);
    border-color: var(--danger);
  }
  .warn p {
    margin: 0;
  }
</style>
