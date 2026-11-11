<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { t } from '../lib/content';

  let worse = $state(false);
</script>

<Screen title={t('quickend.title')}>
  <p>{t('quickend.text')}</p>
  {#if worse}
    <div class="card warn" role="status">
      <p>{t('quickend.worse.text')}</p>
      <button class="secondary strong" onclick={() => nav.go('emergency')}>{t('nav.help.page')}</button>
    </div>
  {/if}
  <p class="muted">{t('quickend.followup')}</p>
  {#snippet actions()}
    <button class="primary" onclick={() => nav.home()}>{t('quickend.again')}</button>
    {#if !worse}
      <button class="quiet" onclick={() => (worse = true)}>{t('quickend.worse')}</button>
    {/if}
  {/snippet}
</Screen>

<style>
  .warn {
    border-color: var(--line-strong);
    display: flex;
    flex-direction: column;
    gap: var(--s3);
  }
</style>
