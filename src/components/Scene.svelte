<script lang="ts">
  // Ein ruhiger Ort: Himmel, schwebende Insel, stille Stadt, Brücke mit Büchern, Baum aus Kristall.
  // Grafiken: Ebenen-Paket des Projektinhabers in einer dunklen und einer hellen Fassung
  // (Originale in docs/scene/, eingebunden über src/lib/scene-layers.ts).
  // Nur Dekoration (aria-hidden). Alle Bewegungen langsam, weich, ohne Blinken;
  // bei reduzierter Bewegung steht die Szene still (globale Regel in app.css).
  import type { Stage } from '../lib/routes';
  import { scene, type Theme } from '../lib/scene-layers';

  let { stage = 0, hero = false }: { stage?: Stage; hero?: boolean } = $props();

  // Feste Pseudo-Zufallswerte: kleine Lichter, die vom Baum aufsteigen („schwebende Verse“).
  function rand(seed: number) {
    const x = Math.sin(seed * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  }
  const motes = Array.from({ length: 12 }, (_, i) => ({
    x: 500 + rand(i + 501) * 200,
    y: 300 + rand(i + 601) * 160,
    r: 3 + rand(i + 901) * 3,
    d: 14 + rand(i + 701) * 10,
    delay: -rand(i + 801) * 24,
  }));
  const themes: Theme[] = ['dark', 'light'];
</script>

<div class="scene" class:hero data-stage={stage} aria-hidden="true">
  <svg viewBox="0 0 1200 1800" preserveAspectRatio="xMidYMid slice">
    <defs>
      {@html scene.dark.defs}
      {@html scene.light.defs}
      <radialGradient id="sc-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#cba6f7" stop-opacity="0.5" />
        <stop offset="45%" stop-color="#b4befe" stop-opacity="0.16" />
        <stop offset="100%" stop-color="#b4befe" stop-opacity="0" />
      </radialGradient>
      <filter id="sc-softGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="14" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    {#each themes as th}
      {@const L = scene[th].layers}
      <g class="set {th}">
        <g class="sky">{@html L['06_himmel']}</g>
        <g class="world">
          <g class="float">
            <circle class="glow" cx="600" cy="380" r="330" fill="url(#sc-glow)" />
            <g class="island">{@html L['01_insel']}</g>
            <g class="city">{@html L['02_stadt']}</g>
            <g class="bridge">{@html L['05_bruecke_buecher']}</g>
            <g class="tree">{@html L['03_baum']}</g>
            <g class="treelight"><g class="pulse" filter="url(#sc-softGlow)">{@html L['04_baumlicht']}</g></g>
            <g class="motes">
              {#each motes as m}
                <circle cx={m.x} cy={m.y} r={m.r} style="animation-duration:{m.d}s;animation-delay:{m.delay}s" />
              {/each}
            </g>
          </g>
        </g>
      </g>
    {/each}
  </svg>
</div>

<style>
  .scene {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.2;
    transition: opacity 1.6s ease;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 45%, transparent 85%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 45%, transparent 85%);
  }
  .scene.hero {
    opacity: 1;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 36%, transparent 58%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 36%, transparent 58%);
  }
  svg {
    width: 100%;
    height: 100%;
  }

  /* Hell oder dunkel: passende Fassung der Grafiken */
  .set.light {
    display: none;
  }
  :global(:root[data-theme='latte']) .set.dark {
    display: none;
  }
  :global(:root[data-theme='latte']) .set.light {
    display: inline;
  }
  @media (prefers-color-scheme: light) {
    :global(:root[data-theme='system']) .set.dark {
      display: none;
    }
    :global(:root[data-theme='system']) .set.light {
      display: inline;
    }
  }

  /* Der Ort rückt Station für Station näher – langsam, ohne Ruck */
  .world {
    transform-origin: 600px 700px;
    transition: transform 2.6s cubic-bezier(0.33, 0, 0.2, 1);
    transform: translateY(-250px) scale(0.45);
  }
  [data-stage='1'] .world {
    transform: translateY(0) scale(0.62);
  }
  [data-stage='2'] .world {
    transform: translateY(40px) scale(0.8);
  }
  [data-stage='3'] .world,
  [data-stage='4'] .world {
    transform: translateY(100px) scale(0.95);
  }

  /* Brücke: unterwegs deutlich, am Baum zurückgenommen */
  .bridge {
    opacity: 0.45;
    transition: opacity 2s ease;
  }
  [data-stage='1'] .bridge,
  [data-stage='2'] .bridge {
    opacity: 1;
  }
  [data-stage='3'] .bridge,
  [data-stage='4'] .bridge {
    opacity: 0.25;
  }

  /* Je näher, desto wärmer das Leuchten */
  .glow {
    opacity: 0.3;
    transition: opacity 2.4s ease;
  }
  [data-stage='2'] .glow {
    opacity: 0.55;
  }
  [data-stage='3'] .glow {
    opacity: 0.8;
  }
  [data-stage='4'] .glow {
    opacity: 1;
  }
  .treelight {
    opacity: 0.4;
    transition: opacity 2.4s ease;
  }
  [data-stage='3'] .treelight {
    opacity: 0.75;
  }
  [data-stage='4'] .treelight {
    opacity: 1;
  }
  /* Das Licht atmet (Vorschlag aus animation.css, langsamer: 10 s statt 4,8 s) */
  .pulse {
    animation: breathe 10s ease-in-out infinite;
  }
  @keyframes breathe {
    0%,
    100% {
      opacity: 0.58;
    }
    50% {
      opacity: 1;
    }
  }

  /* Ruhige Daueranimationen */
  .float {
    animation: bob 16s ease-in-out infinite alternate;
  }
  @keyframes bob {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-18px);
    }
  }
  .sky {
    animation: drift 18s ease-in-out infinite;
  }
  @keyframes drift {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  /* Sterne zeitversetzt schimmern lassen */
  .sky :global(g > path),
  .sky :global(g > circle) {
    animation: shimmer 9s ease-in-out infinite;
  }
  .sky :global(g > :nth-child(3n + 1)) {
    animation-delay: -3s;
  }
  .sky :global(g > :nth-child(3n + 2)) {
    animation-delay: -6s;
    animation-duration: 12s;
  }
  @keyframes shimmer {
    0%,
    100% {
      opacity: 0.55;
    }
    50% {
      opacity: 1;
    }
  }
  .motes circle {
    fill: #f5c2e7;
    opacity: 0;
    animation: rise linear infinite;
  }
  .light .motes circle {
    fill: #b49be8;
  }
  @keyframes rise {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    20% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.4;
    }
    100% {
      transform: translateY(-200px);
      opacity: 0;
    }
  }
</style>
