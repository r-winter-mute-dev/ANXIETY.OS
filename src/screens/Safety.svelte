<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { afterSafety } from '../lib/routes';
  import { t, list } from '../lib/content';
</script>

<Screen title={t('safety.title')}>
  <ul class="items">
    {#each list('safety.items') as item}<li>{item}</li>{/each}
  </ul>
  <p class="muted small">{t('safety.hint')}</p>
  {#snippet actions()}
    <button class="secondary strong" onclick={() => nav.go(afterSafety('yes'))}>{t('safety.yes')}</button>
    <button class="primary" onclick={() => nav.go(afterSafety('no'))}>{t('safety.no')}</button>
  {/snippet}
</Screen>

<style>
  .items {
    margin: 0;
    padding-left: 1.2em;
    display: flex;
    flex-direction: column;
    gap: var(--s3);
  }
</style>
