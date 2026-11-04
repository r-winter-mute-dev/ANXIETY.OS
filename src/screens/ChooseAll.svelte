<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { EXERCISE_ORDER } from '../lib/routes';
  import { startExercise } from '../lib/start-exercise';
  import { t } from '../lib/content';
</script>

<Screen title={t('choose.all.title')}>
  <div class="options">
    {#each EXERCISE_ORDER as ex}
      <button class="option" onclick={() => startExercise(ex)}>{t(`choose.ex.${ex}`)}</button>
    {/each}
  </div>
</Screen>
