<script lang="ts">
  // Nicht wegklickbar. Verschwindet erst, wenn alle Inhalte fachlich freigegeben sind.
  // Ruhig gestaltet: sichtbar, aber kein Warnblock.
  import { t } from '../lib/content';
</script>

<div class="draft" role="note">
  <strong>{t('draft.banner')}</strong>
  <span>{t('draft.sub')}</span>
</div>

<style>
  .draft {
    background: var(--draft-bg);
    color: var(--draft);
    border-bottom: 1px solid color-mix(in srgb, var(--draft) 25%, transparent);
    padding: var(--s2) var(--s4);
    padding-top: calc(var(--s2) + env(safe-area-inset-top));
    font-size: 0.8125rem;
    line-height: 1.4;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  strong {
    letter-spacing: 0.06em;
    font-weight: 600;
  }
</style>
