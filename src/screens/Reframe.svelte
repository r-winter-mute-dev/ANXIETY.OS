<script lang="ts">
  // Kognitive Neubewertung in 4 Schritten (Konzept 5.4).
  // Alles per Antippen möglich; Freitext ist optional und bleibt nur im Arbeitsspeicher.
  import Screen from '../components/Screen.svelte';
  import Scale from '../components/Scale.svelte';
  import { nav } from '../lib/nav.svelte';
  import { finishExercise } from '../lib/start-exercise';
  import { t, list } from '../lib/content';

  const thoughts = list('reframe.thought.options');
  const emotions = list('reframe.emotion.options');
  const questions = list('reframe.questions');
  const alternatives = list('reframe.alt.options');

  type Step =
    | { k: 'thought' }
    | { k: 'ownThought' }
    | { k: 'emotion' }
    | { k: 'intensity' }
    | { k: 'question'; i: number }
    | { k: 'alt' }
    | { k: 'ownAlt' }
    | { k: 'summary' };

  let history = $state<Step[]>([{ k: 'thought' }]);
  const step = $derived(history[history.length - 1]);

  let thought = $state('');
  let emotion = $state<string | null>(null);
  let intensity = $state<number | null>(null);
  let answers = $state<string[]>(questions.map(() => ''));
  let alt = $state('');

  const go = (s: Step) => history.push(s);
  const back = () => (history.length > 1 ? history.pop() : nav.back());
</script>

{#key history.length}
  {#if step.k === 'thought'}
    <Screen title={t('reframe.thought.title')} lead={t('reframe.intro')} onback={back}>
      <div class="options">
        {#each thoughts as th}
          <button class="option" onclick={() => ((thought = th), go({ k: 'emotion' }))}>{th}</button>
        {/each}
        <button class="option dashed" onclick={() => go({ k: 'ownThought' })}>{t('reframe.thought.own')}</button>
      </div>
    </Screen>
  {:else if step.k === 'ownThought'}
    <Screen title={t('reframe.thought.title')} onback={back}>
      <label class="field">
        <span class="muted small">{t('input.private')}</span>
        <textarea rows="3" bind:value={thought} placeholder={t('reframe.thought.placeholder')}></textarea>
      </label>
      {#snippet actions()}
        <button class="primary" disabled={!thought.trim()} onclick={() => go({ k: 'emotion' })}>{t('nav.next')}</button>
      {/snippet}
    </Screen>
  {:else if step.k === 'emotion'}
    <Screen title={t('reframe.emotion.title')} onback={back}>
      <blockquote>{thought}</blockquote>
      <div class="chips">
        {#each emotions as e}
          <button class="chip" aria-pressed={emotion === e} onclick={() => ((emotion = e), go({ k: 'intensity' }))}>{e}</button>
        {/each}
      </div>
      {#snippet actions()}
        <button class="quiet" onclick={() => go({ k: 'question', i: 0 })}>{t('nav.skip')}</button>
      {/snippet}
    </Screen>
  {:else if step.k === 'intensity'}
    <Screen title={t('reframe.intensity.title')} lead={emotion ?? undefined} onback={back}>
      <Scale value={intensity} onpick={(n) => ((intensity = n), go({ k: 'question', i: 0 }))} />
      {#snippet actions()}
        <button class="quiet" onclick={() => go({ k: 'question', i: 0 })}>{t('nav.skip')}</button>
      {/snippet}
    </Screen>
  {:else if step.k === 'question'}
    {@const i = step.i}
    <Screen title={questions[i]} onback={back}>
      <p class="progress muted small">{i + 1} / {questions.length}</p>
      <blockquote>{thought}</blockquote>
      <label class="field">
        <span class="muted small">{t('reframe.questions.hint')} {t('input.private')}</span>
        <textarea rows="3" bind:value={answers[i]} aria-label={questions[i]}></textarea>
      </label>
      {#snippet actions()}
        <button class="primary" onclick={() => go(i + 1 < questions.length ? { k: 'question', i: i + 1 } : { k: 'alt' })}>
          {t('nav.next')}
        </button>
      {/snippet}
    </Screen>
  {:else if step.k === 'alt'}
    <Screen title={t('reframe.alt.title')} onback={back}>
      <div class="options">
        {#each alternatives as a}
          <button class="option left" onclick={() => ((alt = a), go({ k: 'summary' }))}>{a}</button>
        {/each}
        <button class="option dashed" onclick={() => go({ k: 'ownAlt' })}>{t('reframe.alt.own')}</button>
      </div>
    </Screen>
  {:else if step.k === 'ownAlt'}
    <Screen title={t('reframe.alt.own')} onback={back}>
      <label class="field">
        <span class="muted small">{t('input.private')}</span>
        <textarea rows="4" bind:value={alt}></textarea>
      </label>
      {#snippet actions()}
        <button class="primary" disabled={!alt.trim()} onclick={() => go({ k: 'summary' })}>{t('nav.next')}</button>
      {/snippet}
    </Screen>
  {:else if step.k === 'summary'}
    <Screen title={t('reframe.summary.title')} onback={back}>
      <div class="card">
        <h2 class="muted small">{t('reframe.summary.thought')}</h2>
        <p class="strike">{thought}</p>
      </div>
      <div class="card accent">
        <h2 class="muted small">{t('reframe.summary.alt')}</h2>
        <p class="big-text">{alt}</p>
      </div>
      <p class="muted">{t('reframe.summary.note')}</p>
      {#snippet actions()}
        <button class="primary" onclick={finishExercise}>{t('nav.done')}</button>
      {/snippet}
    </Screen>
  {/if}
{/key}

<style>
  blockquote {
    margin: 0;
    padding: var(--s3) var(--s4);
    border-left: 3px solid var(--line-strong);
    color: var(--muted);
    font-style: italic;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
  }
  .progress {
    margin: 0;
  }
  .card h2 {
    margin: 0 0 var(--s1);
    font-weight: 500;
  }
  .card p {
    margin: 0;
  }
  .card.accent {
    border-color: var(--accent);
  }
  .big-text {
    font-size: var(--fs-l);
    line-height: 1.45;
  }
</style>
