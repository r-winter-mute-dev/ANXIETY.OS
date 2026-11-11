<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { startExercise } from '../lib/start-exercise';
  import { block, t } from '../lib/content';
</script>

<Screen title={t('dark.title')}>
  <p class="text">{t('dark.text')}</p>
  <a class="call" href="tel:{block('dark.call').tel}">{t('dark.call')}</a>
  <p class="muted">{t('dark.danger')}</p>
  <a class="call quiet-call" href="tel:{block('dark.call112').tel}">{t('dark.call112')}</a>
  <button class="secondary" onclick={() => nav.go('emergency')}>{t('dark.write')}</button>
  <p class="muted small stay">{t('dark.stay')}</p>
  <div class="chips">
    <button class="chip" onclick={() => startExercise('grounding')}>{t('choose.ex.grounding')}</button>
    <button class="chip" onclick={() => startExercise('simple')}>{t('choose.ex.simple')}</button>
  </div>
</Screen>

<style>
  .text {
    font-size: var(--fs-l);
    line-height: 1.5;
  }
  .call {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 64px;
    padding: var(--s3) var(--s4);
    border-radius: var(--radius);
    background: var(--accent);
    color: var(--on-accent);
    text-decoration: none;
    font-weight: 600;
    text-align: center;
  }
  .quiet-call {
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--line-strong);
    min-height: 56px;
  }
  .stay {
    margin-top: var(--s3);
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
  }
</style>
