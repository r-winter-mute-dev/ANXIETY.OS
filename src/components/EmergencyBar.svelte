<script lang="ts">
  import { nav } from '../lib/nav.svelte';
  import { t } from '../lib/content';
</script>

<nav class="bar" aria-label={t('a11y.emergency')}>
  <button class="emergency" onclick={() => nav.go('emergency')}>{t('emergency.bar')}</button>
</nav>

<style>
  .bar {
    position: sticky;
    bottom: 0;
    padding: var(--s3) var(--s4);
    padding-bottom: calc(var(--s3) + env(safe-area-inset-bottom));
    background: linear-gradient(to top, var(--bg) 70%, transparent);
  }
  .emergency {
    width: 100%;
    max-width: var(--maxw);
    display: block;
    margin: 0 auto;
  }
</style>
