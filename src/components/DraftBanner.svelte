<script lang="ts">
  // Nicht wegklickbar. Verschwindet erst, wenn alle Inhalte fachlich freigegeben sind.
  import { t } from '../lib/content';
</script>

<div class="draft" role="note">
  <strong>{t('draft.banner')}</strong>
  <span>{t('draft.sub')}</span>
</div>

<style>
  .draft {
    background: var(--draft);
    color: var(--on-draft);
    padding: var(--s2) var(--s4);
    padding-top: calc(var(--s2) + env(safe-area-inset-top));
    font-size: var(--fs-s);
    line-height: 1.35;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  strong {
    letter-spacing: 0.04em;
  }
</style>
