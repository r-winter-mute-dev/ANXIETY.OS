<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { t, list, references, reviewProgress } from '../lib/content';
</script>

<Screen title={t('about.title')}>
  <p>{t('about.what')}</p>
  <div class="card warn">
    <p><strong>{t('about.draft')}</strong></p>
    <p class="muted small">{t('about.progress', reviewProgress)}</p>
  </div>
  <p>{t('about.not')}</p>

  <h2>{t('about.privacy.title')}</h2>
  <ul>
    {#each list('about.privacy') as p}<li>{p}</li>{/each}
  </ul>
  <p class="muted">{t('about.offline')}</p>

  <p class="muted small">{t('about.version', { version: __APP_VERSION__ })} · {t('about.license')}</p>

  <h2>{t('about.sources.title')}</h2>
  <ol class="refs">
    {#each Object.values(references) as r}
      <li>
        {r.citation}
        <a href={r.url} target="_blank" rel="noopener noreferrer">{r.url.replace(/^https:\/\//, '')}</a>
      </li>
    {/each}
  </ol>
</Screen>

<style>
  .warn {
    border-color: var(--draft);
  }
  .warn p {
    margin: 0 0 var(--s1);
  }
  ul,
  .refs {
    padding-left: 1.2em;
    display: flex;
    flex-direction: column;
    gap: var(--s2);
    margin: 0;
  }
  .refs {
    font-size: var(--fs-s);
  }
  .refs a {
    display: block;
    word-break: break-all;
  }
</style>
