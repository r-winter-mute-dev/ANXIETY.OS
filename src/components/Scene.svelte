<script lang="ts">
  // Ein ruhiger Ort: schwebende Insel, Brücke aus Glas, stille Stadt, Baum aus Kristall.
  // Nur Dekoration (aria-hidden). Alle Bewegungen sind langsam, weich und ohne Blinken;
  // bei reduzierter Bewegung steht die Szene still (globale Regel in app.css).
  import type { Stage } from '../lib/routes';

  let { stage = 0, hero = false }: { stage?: Stage; hero?: boolean } = $props();

  // Feste Pseudo-Zufallswerte, damit die Szene bei jedem Laden gleich aussieht.
  function rand(seed: number) {
    const x = Math.sin(seed * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  }
  const stars = Array.from({ length: 34 }, (_, i) => ({
    x: rand(i + 1) * 400,
    y: rand(i + 101) * 330,
    r: 0.5 + rand(i + 201) * 1.1,
    d: 7 + rand(i + 301) * 8,
    delay: -rand(i + 401) * 14,
  }));
  const motes = Array.from({ length: 10 }, (_, i) => ({
    x: 168 + rand(i + 501) * 64,
    y: 150 + rand(i + 601) * 40,
    d: 13 + rand(i + 701) * 9,
    delay: -rand(i + 801) * 20,
  }));
  const books = Array.from({ length: 9 }, (_, i) => i);
</script>

<div class="scene" class:hero data-stage={stage} aria-hidden="true">
  <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#cba6f7" stop-opacity="0.55" />
        <stop offset="45%" stop-color="#b4befe" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#b4befe" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="crystal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f5c2e7" />
        <stop offset="55%" stop-color="#cba6f7" />
        <stop offset="100%" stop-color="#7f849c" />
      </linearGradient>
      <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#313244" />
        <stop offset="100%" stop-color="#11111b" />
      </linearGradient>
      <linearGradient id="glass" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#b4befe" stop-opacity="0" />
        <stop offset="60%" stop-color="#b4befe" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#cba6f7" stop-opacity="0.5" />
      </linearGradient>
    </defs>

    <g class="stars">
      {#each stars as s}
        <circle cx={s.x} cy={s.y} r={s.r} style="animation-duration:{s.d}s;animation-delay:{s.delay}s" />
      {/each}
    </g>

    <g class="world">
      <g class="float">
        <!-- Brücke aus Glas, gesäumt von gebundenen Büchern -->
        <g class="bridge">
          <path d="M -40 640 C 40 520, 110 360, 150 262" fill="none" stroke="url(#glass)" stroke-width="5" stroke-linecap="round" />
          <path d="M -30 628 C 50 510, 116 356, 154 258" fill="none" stroke="#b4befe" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="2 6" />
          {#each books as b}
            {@const t = (b + 1) / 11}
            {@const x = -40 + (150 + 40) * t + Math.sin(t * 3) * 8}
            {@const y = 640 - (640 - 262) * t}
            <rect x={x - 3} y={y - 9} width="5" height="8" rx="1" fill="#45475a" opacity="0.7" />
          {/each}
        </g>

        <!-- Leuchten des Baumes -->
        <circle class="glow" cx="200" cy="175" r="95" fill="url(#glow)" />

        <!-- Insel aus dunklem Stein mit Marmoradern, unten wie gefrorene Tropfen -->
        <path
          d="M 88 250 Q 200 228 312 250 L 298 276 L 304 300 L 284 330 L 270 384 L 254 350 L 242 414 L 224 362 L 206 446 L 190 366 L 172 404 L 160 352 L 140 372 L 128 322 L 108 302 L 100 276 Z"
          fill="url(#rock)"
        />
        <g class="marble" fill="none" stroke="#6c7086" stroke-width="0.8" stroke-opacity="0.45">
          <path d="M 120 268 Q 150 290 140 330" />
          <path d="M 230 262 Q 250 300 236 360" />
          <path d="M 270 270 Q 262 290 280 318" />
          <path d="M 180 272 Q 196 320 188 352" />
        </g>
        <path d="M 88 250 Q 200 228 312 250" fill="none" stroke="#585b70" stroke-width="1.2" />

        <!-- Stille Stadt -->
        <g class="city" fill="#232334">
          <rect x="118" y="214" width="16" height="38" />
          <rect x="136" y="200" width="12" height="52" />
          <rect x="150" y="222" width="18" height="30" />
          <rect x="232" y="218" width="18" height="34" />
          <rect x="252" y="198" width="12" height="54" />
          <rect x="266" y="224" width="16" height="28" />
          <path d="M 136 200 L 142 188 L 148 200 Z" />
          <path d="M 252 198 L 258 184 L 264 198 Z" />
        </g>
        <g class="windows" fill="#b4befe">
          <rect x="123" y="224" width="2" height="3" />
          <rect x="140" y="212" width="2" height="3" />
          <rect x="140" y="230" width="2" height="3" />
          <rect x="157" y="232" width="2" height="3" />
          <rect x="238" y="230" width="2" height="3" />
          <rect x="256" y="210" width="2" height="3" />
          <rect x="271" y="234" width="2" height="3" />
        </g>

        <!-- Baum aus dunklem, gebrochenem Kristall -->
        <g class="tree">
          <path d="M 196 246 L 198 196 L 202 196 L 205 246 Z" fill="#45475a" />
          <g fill="url(#crystal)" stroke="#11111b" stroke-width="0.6" stroke-opacity="0.6">
            <path d="M 200 120 L 214 150 L 206 182 L 194 182 L 186 150 Z" opacity="0.85" />
            <path d="M 186 150 L 166 140 L 158 166 L 180 178 Z" opacity="0.7" />
            <path d="M 214 150 L 236 138 L 244 164 L 220 178 Z" opacity="0.7" />
            <path d="M 180 178 L 162 186 L 170 204 L 196 196 Z" opacity="0.55" />
            <path d="M 220 178 L 238 186 L 230 204 L 204 196 Z" opacity="0.55" />
          </g>
          <!-- Risse, durch die Licht schimmert -->
          <g class="cracks" fill="none" stroke="#f5e0dc" stroke-width="0.7">
            <path d="M 200 128 L 203 146 L 197 160 L 201 178" />
            <path d="M 170 152 L 176 164" />
            <path d="M 232 150 L 226 166" />
          </g>
        </g>

        <!-- Schwebende Verse: kleine Lichter, die langsam aufsteigen -->
        <g class="motes" fill="#f5c2e7">
          {#each motes as m}
            <circle cx={m.x} cy={m.y} r="1.3" style="animation-duration:{m.d}s;animation-delay:{m.delay}s" />
          {/each}
        </g>
      </g>
    </g>
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
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 34%, transparent 58%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 34%, transparent 58%);
  }
  svg {
    width: 100%;
    height: 100%;
  }

  /* Der Ort rückt Station für Station näher – langsam, ohne Ruck */
  .world {
    transform-origin: 200px 250px;
    transition: transform 2.6s cubic-bezier(0.33, 0, 0.2, 1);
    transform: translateY(-110px) scale(0.42);
  }
  [data-stage='1'] .world {
    transform: translateY(-70px) scale(0.62);
  }
  [data-stage='2'] .world {
    transform: translateY(-36px) scale(0.86);
  }
  [data-stage='3'] .world,
  [data-stage='4'] .world {
    transform: translateY(0) scale(1.12);
  }

  /* Brücke erscheint, sobald man losgeht */
  .bridge {
    opacity: 0.35;
    transition: opacity 2s ease;
  }
  [data-stage='1'] .bridge,
  [data-stage='2'] .bridge {
    opacity: 1;
  }
  [data-stage='3'] .bridge,
  [data-stage='4'] .bridge {
    opacity: 0.5;
  }

  /* Je näher, desto wärmer das Leuchten */
  .glow {
    opacity: 0.35;
    transition: opacity 2.4s ease;
  }
  [data-stage='2'] .glow {
    opacity: 0.6;
  }
  [data-stage='3'] .glow {
    opacity: 0.85;
  }
  [data-stage='4'] .glow {
    opacity: 1;
  }
  .windows {
    opacity: 0.35;
    transition: opacity 2s ease;
  }
  [data-stage='2'] .windows,
  [data-stage='3'] .windows,
  [data-stage='4'] .windows {
    opacity: 0.6;
  }
  .cracks {
    opacity: 0.35;
    transition: opacity 2.4s ease;
  }
  [data-stage='3'] .cracks {
    opacity: 0.6;
  }
  [data-stage='4'] .cracks {
    opacity: 0.85;
  }

  /* Ruhige Daueranimationen: sehr langsam, kleine Ausschläge */
  .float {
    animation: bob 16s ease-in-out infinite alternate;
  }
  @keyframes bob {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-7px);
    }
  }
  .stars circle {
    fill: #cdd6f4;
    opacity: 0.3;
    animation: shimmer ease-in-out infinite alternate;
  }
  @keyframes shimmer {
    from {
      opacity: 0.12;
    }
    to {
      opacity: 0.5;
    }
  }
  .motes circle {
    opacity: 0;
    animation: rise linear infinite;
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
      opacity: 0.45;
    }
    100% {
      transform: translateY(-70px);
      opacity: 0;
    }
  }

  /* Helles Farbschema: Szene als zarte Zeichnung */
  :global(:root[data-theme='latte']) .scene {
    filter: invert(0.9) hue-rotate(180deg) saturate(1.2);
    opacity: 0.22;
  }
  :global(:root[data-theme='latte']) .scene.hero {
    opacity: 0.55;
  }
  @media (prefers-color-scheme: light) {
    :global(:root[data-theme='system']) .scene {
      filter: invert(0.9) hue-rotate(180deg) saturate(1.2);
      opacity: 0.22;
    }
    :global(:root[data-theme='system']) .scene.hero {
      opacity: 0.55;
    }
  }
</style>
