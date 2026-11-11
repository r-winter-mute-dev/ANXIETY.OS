<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { block, t, list } from '../lib/content';
  import { startExercise } from '../lib/start-exercise';

  // Ruhig statt laut: Notfall offen sichtbar, alles andere aufklappbar.
  const tsNumbers = list('emergency.ts.numbers');
  const tsTel = block('emergency.ts.numbers').tel as string[];
  const write = ['krisenchat', 'ts', 'nora'] as const;
</script>

<Screen title={t('emergency.title')} lead={t('emergency.lead')}>
  <section class="card now" aria-labelledby="now">
    <h2 id="now">{t('emergency.now.title')}</h2>
    <ul>
      {#each list('emergency.now.signs') as s}<li>{s}</li>{/each}
    </ul>
    <a class="call call-112" href="tel:{block('emergency.112.label').tel}">{t('emergency.112.label')}</a>
    <p class="muted small">{t('emergency.now.unsure')}</p>
  </section>

  <details class="card">
    <summary>{t('emergency.talk.title')}</summary>
    <p class="muted small">{t('emergency.ts.label')}</p>
    <div class="stack">
      {#each tsNumbers as num, i}
        <a class="call" href="tel:{tsTel[i]}">{num}</a>
      {/each}
    </div>
    <a class="call" href="tel:{block('emergency.116117.label').tel}">{t('emergency.116117.label')}</a>
    <p class="muted small">{t('emergency.116117.desc')}</p>
  </details>

  <details class="card">
    <summary>{t('emergency.write.title')}</summary>
    <ul class="links">
      {#each write as w}
        <li>
          <a href={block(`emergency.write.${w}`).url as string} target="_blank" rel="noopener noreferrer">
            {t(`emergency.write.${w}`)}<span class="sr-only"> ({t('emergency.write.open')})</span>
          </a>
        </li>
      {/each}
    </ul>
  </details>

  <details class="card">
    <summary>{t('emergency.crisis.title')}</summary>
    <p class="muted small">{t('emergency.crisis.lead')}</p>
    <div class="stack">
      <a class="call" href="tel:{block('emergency.crisis.bayern').tel}">{t('emergency.crisis.bayern')}</a>
      <a class="call" href="tel:{block('emergency.crisis.berlin').tel}">{t('emergency.crisis.berlin')}</a>
    </div>
    <p class="muted small">{t('emergency.crisis.other')}</p>
    <a href={block('emergency.crisis.other').url as string} target="_blank" rel="noopener noreferrer">{t('emergency.crisis.link')}</a>
  </details>

  <p class="muted">{t('emergency.notalone')}</p>

  <section class="wait" aria-labelledby="wait">
    <h2 id="wait">{t('emergency.wait.title')}</h2>
    <p class="muted small">{t('emergency.wait.text')}</p>
    <div class="chips">
      <button class="chip" onclick={() => startExercise('grounding')}>{t('choose.ex.grounding')}</button>
      <button class="chip" onclick={() => startExercise('simple')}>{t('choose.ex.simple')}</button>
    </div>
  </section>
</Screen>

<style>
  .now {
    display: flex;
    flex-direction: column;
    gap: var(--s3);
  }
  details.card {
    padding-top: var(--s2);
    padding-bottom: var(--s2);
  }
  details[open].card {
    padding-bottom: var(--s4);
  }
  .card h2 {
    margin: 0;
  }
  ul {
    margin: 0;
    padding-left: 1.2em;
    display: flex;
    flex-direction: column;
    gap: var(--s1);
  }
  details > :not(summary) {
    margin-top: var(--s3);
  }
  details > p + .stack,
  details > .stack + p {
    margin-top: var(--s2);
  }
  summary {
    cursor: pointer;
    font-size: var(--fs-l);
    font-weight: 600;
    min-height: 44px;
    display: flex;
    align-items: center;
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: '+';
    margin-left: auto;
    color: var(--accent);
    font-weight: 400;
    font-size: 1.4em;
  }
  details[open] summary::after {
    content: '–';
  }
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
  }
  .call {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    padding: var(--s2) var(--s4);
    border-radius: var(--radius);
    background: var(--surface-2);
    border: 1px solid var(--line-strong);
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    line-height: 1.35;
  }
  .call-112 {
    background: var(--danger);
    border-color: var(--danger);
    color: var(--on-danger);
    font-weight: 650;
    font-size: var(--fs-l);
  }
  .links {
    list-style: none;
    padding: 0;
    gap: var(--s2);
  }
  .links a {
    display: block;
    padding: var(--s3);
    border-radius: var(--radius-s);
    background: var(--surface-2);
    color: var(--text);
    text-decoration: none;
    line-height: 1.4;
  }
  .links a::after {
    content: ' ↗';
    color: var(--accent);
  }
  .wait h2 {
    margin: 0;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
    margin-top: var(--s3);
  }
</style>
