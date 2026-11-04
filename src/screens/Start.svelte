<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { t } from '../lib/content';
</script>

<Screen title={t('start.title')} showNav={false}>
  <p class="muted">{t('start.note')}</p>
  {#snippet actions()}
    <button class="primary big" onclick={() => nav.go('safety')}>{t('start.acute')}</button>
    <button class="secondary" onclick={() => nav.go('learn')}>
      {t('start.learn')}
      <small>{t('start.learn.sub')}</small>
    </button>
    <button class="quiet" onclick={() => nav.go('about')}>{t('start.about')}</button>
  {/snippet}
</Screen>
