<script lang="ts">
  // Ausführliche Erklärung eines Körpersignals: Mechanismus, Bewertung, Grenze zur Hilfe.
  import { block, blocks, t } from '../lib/content';
  let { k, showCheck = true, learn = false }: { k: string; showCheck?: boolean; learn?: boolean } = $props();
  const redflag = $derived(Boolean(block(`symptoms.${k}.check`).redflag));
</script>

<section class="part">
  <h2>{t('symptoms.what')}</h2>
  <p>{t(`symptoms.${k}.what`)}</p>
</section>
<section class="part">
  <h2>{t('symptoms.why')}</h2>
  <p>{t(`symptoms.${k}.why`)}</p>
</section>
{#if showCheck}
  <section class="card check" class:redflag>
    <h2>{t('symptoms.check')}</h2>
    <p>{t(`symptoms.${k}.check`)}</p>
    {#if learn && blocks[`symptoms.${k}.checknote`]}<p class="muted">{t(`symptoms.${k}.checknote`)}</p>{/if}
  </section>
{/if}

<style>
  .part h2,
  .check h2 {
    font-size: var(--fs-m);
    color: var(--muted);
    font-weight: 600;
    margin: 0 0 var(--s1);
  }
  .check p {
    font-size: var(--fs-s);
  }
  .check.redflag {
    border-color: var(--danger);
  }
</style>
