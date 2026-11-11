<script lang="ts">
  // Akutphase: gewählte Körpersignale werden einzeln erklärt, nach jedem kurze Nachfrage.
  // Bewusst ein einziger Durchgang (kein endloses Nachschlagen, siehe Rückversicherung).
  import Screen from '../components/Screen.svelte';
  import SymptomDetail from '../components/SymptomDetail.svelte';
  import { nav } from '../lib/nav.svelte';
  import { orderSymptoms } from '../lib/routes';
  import { finishExercise, switchExercise } from '../lib/start-exercise';
  import { block, t, list } from '../lib/content';

  const ORDER = list('symptoms.order');

  type Step = { k: 'select' } | { k: 'card'; i: number } | { k: 'ask'; i: number } | { k: 'more'; i: number } | { k: 'done' };
  let steps = $state<Step[]>([{ k: 'select' }]);
  const step = $derived(steps[steps.length - 1]);

  let selected = $state<string[]>([]);
  let queue = $state<string[]>([]);
  let expanded = $state(false);

  const go = (s: Step) => {
    expanded = false;
    steps.push(s);
  };
  const back = () => (steps.length > 1 ? steps.pop() : nav.back());
  const toggle = (key: string) =>
    (selected = selected.includes(key) ? selected.filter((x) => x !== key) : [...selected, key]);
  const next = (i: number) => go(i + 1 < queue.length ? { k: 'card', i: i + 1 } : { k: 'done' });
  const isRedflag = (key: string) => Boolean(block(`symptoms.${key}.check`).redflag);
</script>

{#key steps.length}
  {#if step.k === 'select'}
    <Screen title={t('symptoms.select.title')} lead={t('symptoms.select.hint')} onback={back}>
      <div class="options">
        {#each ORDER as key}
          <button class="option toggle" aria-pressed={selected.includes(key)} onclick={() => toggle(key)}>
            <span class="tick" aria-hidden="true">{selected.includes(key) ? '✓' : ''}</span>
            {t(`symptoms.${key}.label`)}
          </button>
        {/each}
      </div>
      {#snippet actions()}
        <button
          class="primary"
          disabled={selected.length === 0}
          onclick={() => {
            queue = orderSymptoms(selected, ORDER);
            go({ k: 'card', i: 0 });
          }}>{t('symptoms.select.go')}</button
        >
      {/snippet}
    </Screen>
  {:else if step.k === 'card'}
    {@const key = queue[step.i]}
    {@const i = step.i}
    <Screen title={t(`symptoms.${key}.label`)} onback={back}>
      <p class="muted small">{t('symptoms.progress', { n: i + 1, total: queue.length })}</p>
      {#if i === 0}<p class="muted">{t('symptoms.intro')}</p>{/if}

      {#if isRedflag(key)}
        <div class="card redflag" role="note">
          <p><strong>{t(`symptoms.${key}.alert`)}</strong></p>
          <a class="call112" href="tel:{block('emergency.112.label').tel}">{t('emergency.112.label')}</a>
        </div>
      {/if}

      <p class="explain">{t(`symptoms.${key}.short`)}</p>

      <button class="quiet more" aria-expanded={expanded} onclick={() => (expanded = !expanded)}>
        {expanded ? t('symptoms.less') : t('symptoms.more')}
      </button>
      {#if expanded}<SymptomDetail k={key} showCheck={isRedflag(key)} />{/if}

      {#if !isRedflag(key)}
        <div class="card check">
          <h2>{t('symptoms.check')}</h2>
          <p>{t(`symptoms.${key}.check`)}</p>
        </div>
      {/if}

      {#snippet actions()}
        <button class="primary" onclick={() => go({ k: 'ask', i })}>{t('nav.next')}</button>
      {/snippet}
    </Screen>
  {:else if step.k === 'ask'}
    {@const i = step.i}
    <Screen title={t('symptoms.ask.title')} onback={back}>
      <div class="options">
        <button class="option" onclick={() => next(i)}>{t('symptoms.ask.less')}</button>
        <button class="option" onclick={() => next(i)}>{t('symptoms.ask.same')}</button>
        <button class="option" onclick={() => go({ k: 'more', i })}>{t('symptoms.ask.more')}</button>
      </div>
    </Screen>
  {:else if step.k === 'more'}
    {@const i = step.i}
    <Screen title={t('symptoms.ask.more.title')} onback={back}>
      <p>{t('symptoms.ask.more.text')}</p>
      {#snippet actions()}
        <button class="primary" onclick={() => next(i)}>
          {i + 1 < queue.length ? t('symptoms.ask.more.continue') : t('symptoms.ask.more.finish')}
        </button>
        <button class="secondary" onclick={() => switchExercise('grounding')}>{t('symptoms.ask.more.ground')}</button>
        <button class="secondary" onclick={() => nav.go('emergency')}>{t('nav.help.page')}</button>
      {/snippet}
    </Screen>
  {:else}
    <Screen title={t('symptoms.done.title')} onback={back}>
      <p class="explain">{t('symptoms.done.text')}</p>
      {#snippet actions()}
        <button class="primary" onclick={finishExercise}>{t('symptoms.done.next')}</button>
        <button class="secondary" onclick={() => switchExercise('grounding')}>{t('symptoms.done.ground')}</button>
      {/snippet}
    </Screen>
  {/if}
{/key}

<style>
  .toggle {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--s3);
  }
  .toggle[aria-pressed='true'] {
    border-color: var(--accent);
    background: var(--surface-2);
  }
  .tick {
    flex: none;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 2px solid var(--line-strong);
    display: grid;
    place-items: center;
    font-size: 15px;
    color: var(--on-accent);
  }
  .toggle[aria-pressed='true'] .tick {
    background: var(--accent);
    border-color: var(--accent);
  }
  .explain {
    font-size: var(--fs-l);
    line-height: 1.5;
  }
  .more {
    align-self: flex-start;
    padding-left: 0;
    color: var(--accent);
  }
  .redflag {
    border: 2px solid var(--danger);
    display: flex;
    flex-direction: column;
    gap: var(--s3);
  }
  .call112 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    border-radius: var(--radius);
    background: var(--danger);
    color: var(--on-danger);
    font-weight: 700;
    text-decoration: none;
  }
  .check h2 {
    font-size: var(--fs-s);
    color: var(--muted);
    margin: 0 0 var(--s1);
    font-weight: 600;
  }
  .check p {
    font-size: var(--fs-s);
  }
</style>
