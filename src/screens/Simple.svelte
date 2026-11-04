<script lang="ts">
  import Steps from '../components/Steps.svelte';
  import { nav } from '../lib/nav.svelte';
  import { finishExercise } from '../lib/start-exercise';
  import { t, list } from '../lib/content';
</script>

<Steps title={t('choose.ex.simple')} steps={list('simple.steps')} onfinish={finishExercise} onexitstart={() => nav.back()} />
