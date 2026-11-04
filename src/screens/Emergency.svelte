<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { block, t, list } from '../lib/content';

  const tsNumbers = list('emergency.ts.numbers');
  const tsTel = block('emergency.ts.numbers').tel as string[];
</script>

<Screen title={t('emergency.title')} lead={t('emergency.lead')}>
  <a class="call call-112" href="tel:{block('emergency.112.label').tel}">
    <span class="label">{t('emergency.112.label')}</span>
  </a>
  <p class="desc">{t('emergency.112.desc')}</p>

  <a class="call" href="tel:{block('emergency.116117.label').tel}">
    <span class="label">{t('emergency.116117.label')}</span>
  </a>
  <p class="desc">{t('emergency.116117.desc')}</p>

  <div class="ts">
    <h2>{t('emergency.ts.label')}</h2>
    <p class="desc">{t('emergency.ts.desc')}</p>
    <div class="ts-numbers">
      {#each tsNumbers as num, i}
        <a class="call small-call" href="tel:{tsTel[i]}">{num}</a>
      {/each}
    </div>
  </div>

  <p class="muted">{t('emergency.notalone')}</p>
</Screen>

<style>
  .call {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 64px;
    padding: var(--s3) var(--s4);
    border-radius: var(--radius);
    background: var(--surface-2);
    border: 2px solid var(--line-strong);
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--fs-l);
    text-align: center;
  }
  .call-112 {
    background: var(--danger);
    border-color: var(--danger);
    color: var(--on-danger);
    font-size: var(--fs-xl);
    min-height: 72px;
  }
  .desc {
    margin: calc(-1 * var(--s2)) 0 var(--s2);
    color: var(--muted);
    font-size: var(--fs-s);
  }
  .ts h2 {
    margin-bottom: var(--s1);
  }
  .ts-numbers {
    display: grid;
    gap: var(--s2);
  }
  .small-call {
    min-height: 56px;
    font-size: var(--fs-m);
  }
</style>
