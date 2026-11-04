<script lang="ts">
  import Screen from '../components/Screen.svelte';
  import { settings, type Display } from '../lib/settings.svelte';
  import { t } from '../lib/content';

  const groups: { key: keyof Display; values: string[] }[] = [
    { key: 'font', values: ['m', 'l', 'xl'] },
    { key: 'spacing', values: ['normal', 'wide'] },
    { key: 'motion', values: ['system', 'reduce'] },
    { key: 'theme', values: ['system', 'mocha', 'latte'] },
  ];
</script>

<Screen title={t('settings.title')} lead={t('settings.lead')}>
  {#each groups as g}
    <fieldset>
      <legend>{t(`settings.${g.key}`)}</legend>
      <div class="choices">
        {#each g.values as v}
          <label class="choice" class:on={settings.value[g.key] === v}>
            <input
              type="radio"
              name={g.key}
              value={v}
              checked={settings.value[g.key] === v}
              onchange={() => settings.set(g.key, v as never)}
            />
            {t(`settings.${g.key}.${v}`)}
          </label>
        {/each}
      </div>
    </fieldset>
  {/each}

  <p class="muted small">{t('settings.stored')}</p>
  <button class="secondary" onclick={() => settings.reset()}>{t('settings.reset')}</button>
</Screen>

<style>
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  legend {
    font-size: var(--fs-l);
    font-weight: 600;
    margin-bottom: var(--s2);
    padding: 0;
  }
  .choices {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
  }
  .choice {
    display: inline-flex;
    align-items: center;
    gap: var(--s2);
    min-height: 48px;
    padding: var(--s2) var(--s4);
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--line-strong);
    cursor: pointer;
  }
  .choice.on {
    background: var(--accent);
    color: var(--on-accent);
    border-color: var(--accent);
  }
  .choice input {
    accent-color: var(--on-accent);
    width: 1.1em;
    height: 1.1em;
    margin: 0;
  }
  .choice:has(input:focus-visible) {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
  }
  .choice input:focus-visible {
    outline: none;
  }
</style>
