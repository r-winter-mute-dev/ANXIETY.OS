<script lang="ts">
  // Schematische Darstellung des Angstkreislaufs nach Clark (1986).
  // Für Screenreader zusätzlich als geordnete Liste.
  import { t, list } from '../lib/content';
  const steps = list('learn.cycle.steps');

  const W = 360;
  const H = 300;
  const cx = W / 2;
  const cy = H / 2;
  const rx = 104;
  const ry = 104;
  // Positionen: oben, rechts, unten, links
  const pos = steps.map((_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / steps.length;
    return { x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
  });
  // Bogen zwischen zwei Knoten, leicht gekrümmt nach außen
  function arc(i: number) {
    const a1 = -Math.PI / 2 + ((i + 0.28) * 2 * Math.PI) / steps.length;
    const a2 = -Math.PI / 2 + ((i + 0.72) * 2 * Math.PI) / steps.length;
    const p1 = { x: cx + rx * Math.cos(a1), y: cy + ry * Math.sin(a1) };
    const p2 = { x: cx + rx * Math.cos(a2), y: cy + ry * Math.sin(a2) };
    return `M ${p1.x} ${p1.y} A ${rx} ${ry} 0 0 1 ${p2.x} ${p2.y}`;
  }
  // Zeilenumbruch für längere Beschriftungen
  const lines = (s: string) => {
    const w = s.split(' ');
    if (w.length < 2 || s.length < 13) return [s];
    const mid = Math.ceil(w.length / 2);
    return [w.slice(0, mid).join(' '), w.slice(mid).join(' ')];
  };
</script>

<figure>
  <svg viewBox="0 0 {W} {H}" role="img" aria-hidden="true">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
      </marker>
    </defs>
    {#each steps as _, i}
      <path
        d={arc(i)}
        fill="none"
        stroke="var(--accent)"
        stroke-width="2"
        stroke-dasharray={i === steps.length - 1 ? '5 4' : undefined}
        marker-end="url(#arrow)"
      />
    {/each}
    {#each steps as s, i}
      {@const l = lines(s)}
      <g transform="translate({pos[i].x} {pos[i].y})">
        <rect x="-60" y={-14 - (l.length - 1) * 8} width="120" height={28 + (l.length - 1) * 16} rx="8" fill="var(--surface-2)" stroke="var(--line-strong)" />
        {#each l as line, j}
          <text y={5 - (l.length - 1) * 8 + j * 16} text-anchor="middle" fill="var(--text)" font-size="13">{line}</text>
        {/each}
      </g>
    {/each}
    {#each lines(t('learn.cycle.loop')) as line, j}
      <text x={cx} y={cy - 2 + j * 15} text-anchor="middle" fill="var(--muted)" font-size="12" font-style="italic">{line}</text>
    {/each}
  </svg>
  <ol class="sr-only">
    {#each steps as s}<li>{s}</li>{/each}
    <li>{t('learn.cycle.loop')}</li>
  </ol>
</figure>

<style>
  figure {
    margin: var(--s3) 0 0;
  }
  svg {
    width: 100%;
    max-width: 360px;
    display: block;
    margin: 0 auto;
  }
</style>
