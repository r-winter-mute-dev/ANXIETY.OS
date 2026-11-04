<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { nav } from '../lib/nav.svelte';
  import { NEED_TO_EXERCISE, type Need } from '../lib/routes';
  import { startExercise } from '../lib/start-exercise';
  import { t } from '../lib/content';

  const needs: Need[] = ['thoughts', 'body', 'breath', 'overwhelm'];
</script>

<Screen title={t('choose.title')}>
  <div class="options">
    {#each needs as need}
      <button class="option" onclick={() => startExercise(NEED_TO_EXERCISE[need])}>{t(`choose.${need}`)}</button>
    {/each}
  </div>
  <p class="muted small">{t('choose.hint')}</p>
  {#snippet actions()}
    <button class="quiet" onclick={() => nav.go('chooseAll')}>{t('choose.other')}</button>
  {/snippet}
</Screen>
