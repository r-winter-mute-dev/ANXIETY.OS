<script lang="ts">
  // Skala 0–10. Antippen wählt den Wert und geht direkt weiter (ein Schritt weniger).
  import { t } from '../lib/content';
  let { onpick, value = null }: { onpick: (n: number) => void; value?: number | null } = $props();
</script>

<div class="scale" role="group" aria-label={t('a11y.scale')}>
  {#each Array.from({ length: 11 }, (_, n) => n) as n}
    <button class="num" aria-pressed={value === n} onclick={() => onpick(n)}>{n}</button>
  {/each}
</div>
<div class="ends muted">
  <span>{t('rating.low')}</span>
  <span>{t('rating.high')}</span>
</div>

<style>
  .scale {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--s2);
  }
  .num {
    min-height: 56px;
    font-size: var(--fs-l);
    font-variant-numeric: tabular-nums;
    border-radius: var(--radius);
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--line);
  }
  .num[aria-pressed='true'] {
    background: var(--accent);
    color: var(--on-accent);
  }
  .ends {
    display: flex;
    justify-content: space-between;
    gap: var(--s3);
    font-size: var(--fs-s);
  }
</style>
