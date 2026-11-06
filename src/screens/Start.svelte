<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { startQuick } from '../lib/start-exercise';
  import { QUICK_EXERCISES } from '../lib/routes';
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
  <button class="primary big" onclick={() => nav.go('safety')}>{t('start.acute')}</button>

  <section class="quick" aria-labelledby="quick-title">
    <h2 id="quick-title">{t('start.quick.title')}</h2>
    <p class="muted small">{t('start.quick.hint')}</p>
    <div class="grid">
      {#each QUICK_EXERCISES as ex}
        <button class="option" onclick={() => startQuick(ex)}>{t(`choose.ex.${ex}`)}</button>
      {/each}
    </div>
  </section>

  {#snippet actions()}
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
  .quick h2 {
    margin: 0;
  }
  .quick p {
    margin: var(--s1) 0 var(--s3);
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s2);
  }
  .grid .option {
    justify-content: center;
    min-height: 64px;
  }
  .grid .option:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
</style>
