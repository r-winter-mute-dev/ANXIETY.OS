<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { block, t, list } from '../lib/content';
  import { startQuick } from '../lib/start-exercise';

  const write = ['nora', 'krisenchat', 'ts'] as const;

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

  <div class="ts">
    <h2>{t('emergency.write.title')}</h2>
    <ul class="links">
      {#each write as w}
        <li>
          <a href={block(`emergency.write.${w}`).url as string} target="_blank" rel="noopener noreferrer">
            {t(`emergency.write.${w}`)}<span class="sr-only"> ({t('emergency.write.open')})</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="ts">
    <h2>{t('emergency.crisis.title')}</h2>
    <p class="desc">{t('emergency.crisis.lead')}</p>
    <div class="ts-numbers">
      <a class="call small-call" href="tel:{block('emergency.crisis.bayern').tel}">{t('emergency.crisis.bayern')}</a>
      <a class="call small-call" href="tel:{block('emergency.crisis.berlin').tel}">{t('emergency.crisis.berlin')}</a>
    </div>
    <p class="desc other">{t('emergency.crisis.other')}</p>
    <a class="extern" href={block('emergency.crisis.other').url as string} target="_blank" rel="noopener noreferrer">{t('emergency.crisis.link')}</a>
  </div>

  <p class="muted">{t('emergency.notalone')}</p>

  <div class="ts wait">
    <h2>{t('emergency.wait.title')}</h2>
    <p class="desc">{t('emergency.wait.text')}</p>
    <div class="ts-numbers">
      <button class="option" onclick={() => startQuick('grounding')}>{t('choose.ex.grounding')}</button>
      <button class="option" onclick={() => startQuick('simple')}>{t('choose.ex.simple')}</button>
    </div>
  </div>
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
  .links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--s3);
  }
  .links a {
    display: block;
    padding: var(--s3) var(--s4);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
    color: var(--text);
    text-decoration: none;
    line-height: 1.4;
  }
  .links a::after {
    content: ' ↗';
    color: var(--accent);
  }
  .other {
    margin-top: var(--s2);
  }
  .extern {
    color: var(--accent);
  }
  .small-call {
    min-height: 56px;
    font-size: var(--fs-m);
    font-weight: 500;
    line-height: 1.35;
  }
</style>
