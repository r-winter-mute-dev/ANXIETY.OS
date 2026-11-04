<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { t } from '../lib/content';
  import { update } from '../lib/update.svelte';
</script>

<Screen title={t('start.title')} showNav={false}>
  <p class="muted">{t('start.note')}</p>
  {#if update.available}
    <div class="card update" role="status">
      <p>{t('start.update')}</p>
      <button class="secondary" onclick={() => update.apply()}>{t('start.update.button')}</button>
    </div>
  {/if}
  {#snippet actions()}
    <button class="primary big" onclick={() => nav.go('safety')}>{t('start.acute')}</button>
    <button class="secondary" onclick={() => nav.go('learn')}>
      {t('start.learn')}
      <small>{t('start.learn.sub')}</small>
    </button>
    <button class="quiet" onclick={() => nav.go('settings')}>{t('start.settings')}</button>
    <button class="quiet" onclick={() => nav.go('about')}>{t('start.about')}</button>
  {/snippet}
</Screen>

<style>
  .update {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
    margin-top: var(--s3);
  }
</style>
