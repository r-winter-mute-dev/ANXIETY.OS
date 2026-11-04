<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import Scale from '../components/Scale.svelte';
  import { nav, session } from '../lib/nav.svelte';
  import { t } from '../lib/content';

  let { phase }: { phase: 'pre' | 'post' } = $props();

  function pick(n: number | null) {
    if (phase === 'pre') {
      session.pre = n;
      nav.go('choose');
    } else {
      session.post = n;
      nav.go('end');
    }
  }
</script>

<Screen title={t(phase === 'pre' ? 'rating.pre.title' : 'rating.post.title')}>
  <p class="muted">{t('rating.hint')}</p>
  <Scale onpick={pick} value={phase === 'pre' ? session.pre : session.post} />
  {#snippet actions()}
    <button class="quiet" onclick={() => pick(null)}>{t('nav.skip')}</button>
  {/snippet}
</Screen>
