<script lang="ts">
  import DraftBanner from './components/DraftBanner.svelte';
  import Start from './screens/Start.svelte';
  import Emergency from './screens/Emergency.svelte';
  import Simple from './screens/Simple.svelte';
  import Grounding from './screens/Grounding.svelte';
  import Reframe from './screens/Reframe.svelte';
  import Breathing from './screens/Breathing.svelte';
  import Symptoms from './screens/Symptoms.svelte';
  import SymptomsLearn from './screens/SymptomsLearn.svelte';
  import Learn from './screens/Learn.svelte';
  import About from './screens/About.svelte';
  import Settings from './screens/Settings.svelte';
  import Distract from './screens/Distract.svelte';
  import QuickEnd from './screens/QuickEnd.svelte';
  import Sort from './screens/Sort.svelte';
  import Dark from './screens/Dark.svelte';
  import { keepAwake } from './lib/wakelock';
  import { nav } from './lib/nav.svelte';
  import { EXERCISE_SCREENS } from './lib/routes';
  import { isDraft } from './lib/content';

  $effect(() => keepAwake(EXERCISE_SCREENS.has(nav.screen)));
</script>

<div class="shell">
  {#if isDraft}<DraftBanner />{/if}
  <main>
    {#key nav.screen}
      {#if nav.screen === 'start'}<Start />
      {:else if nav.screen === 'emergency'}<Emergency />
      {:else if nav.screen === 'simple'}<Simple />
      {:else if nav.screen === 'grounding'}<Grounding />
      {:else if nav.screen === 'reframe'}<Reframe />
      {:else if nav.screen === 'breathing'}<Breathing />
      {:else if nav.screen === 'symptoms'}<Symptoms />
      {:else if nav.screen === 'symptomsLearn'}<SymptomsLearn />
      {:else if nav.screen === 'learn'}<Learn />
      {:else if nav.screen === 'about'}<About />
      {:else if nav.screen === 'settings'}<Settings />
      {:else if nav.screen === 'distract'}<Distract />
      {:else if nav.screen === 'quickEnd'}<QuickEnd />
      {:else if nav.screen === 'sort'}<Sort />
      {:else if nav.screen === 'dark'}<Dark />
      {/if}
    {/key}
  </main>
</div>
