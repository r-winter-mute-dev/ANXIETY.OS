<script lang="ts">
  // Ein ruhiger Ort: Himmel, schwebende Insel, stille Stadt, Baum aus Kristall, Brücke mit Büchern.
  // Grafiken: Ebenen des Projektinhabers (Originale in docs/scene/), hier zusammengeführt und animiert.
  // Nur Dekoration (aria-hidden). Alle Bewegungen langsam, weich, ohne Blinken;
  // bei reduzierter Bewegung steht die Szene still (globale Regel in app.css).
  import type { Stage } from '../lib/routes';

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
  // Sterne aus der Himmel-Ebene, einzeln, damit sie zeitversetzt schimmern können.
  const sparkles = [
    'M245 250 l7 18 18 7 -18 7 -7 18 -7 -18 -18 -7 18 -7Z',
    'M930 320 l6 15 15 6 -15 6 -6 15 -6 -15 -15 -6 15 -6Z',
    'M835 180 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5Z',
  ];
  const dots: [number, number, number][] = [
    [360, 210, 5], [780, 265, 5], [1000, 455, 4], [190, 430, 4], [510, 150, 4], [720, 120, 4],
  ];
  const pinks: [number, number][] = [[290, 320], [650, 220], [890, 430], [440, 480]];
</script>

<div class="scene" class:hero data-stage={stage} aria-hidden="true">
  <svg viewBox="0 0 1200 1800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sc-stone" x1="0" y1="0" x2="0.9" y2="1">
        <stop offset="0" stop-color="#313244" /><stop offset="1" stop-color="#11111b" />
      </linearGradient>
      <linearGradient id="sc-crystal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f5c2e7" /><stop offset=".5" stop-color="#cba6f7" /><stop offset="1" stop-color="#b4befe" />
      </linearGradient>
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

    <!-- 06 Himmel: Sterne und zarte Nebelbänder -->
    <g class="sky">
      <g class="nebula" fill="none" stroke="#cba6f7" stroke-width="5">
        <path d="M190 350 Q330 280 460 330 T720 315 T1010 360" />
        <path d="M280 455 Q420 390 550 430 T830 415" />
      </g>
      <g fill="#b4befe">
        {#each sparkles as d, i}<path class="twinkle" {d} style="animation-duration:{9 + i * 2}s;animation-delay:{-i * 3}s" />{/each}
        {#each dots as [cx, cy, r], i}<circle class="twinkle" {cx} {cy} {r} style="animation-duration:{8 + (i % 4) * 2}s;animation-delay:{-i * 1.7}s" />{/each}
      </g>
      <g fill="#f5c2e7">
        {#each pinks as [cx, cy], i}<circle class="twinkle soft" {cx} {cy} r="3" style="animation-duration:{11 + i * 2}s;animation-delay:{-i * 2.5}s" />{/each}
      </g>
    </g>

    <g class="world">
      <g class="float">
        <!-- Leuchten hinter dem Baum -->
        <circle class="glow" cx="600" cy="380" r="330" fill="url(#sc-glow)" />

        <!-- 01 Insel -->
        <g class="island">
          <path
            d="M180 770 Q240 720 330 730 Q410 680 500 710 Q600 675 690 710 Q780 680 860 725 Q970 710 1030 770 Q1005 845 940 895 L895 1010 850 980 820 1130 775 1085 735 1230 690 1175 650 1320 600 1220 550 1335 510 1200 465 1260 430 1110 385 1150 350 1015 300 1050 275 930 220 900Z"
            fill="url(#sc-stone)" stroke="#45465c" stroke-width="8" stroke-linejoin="round"
          />
          <path d="M185 770 Q260 730 330 740 Q420 690 500 720 Q600 690 690 720 Q785 690 860 735 Q960 720 1025 770" fill="none" stroke="#6c7086" stroke-width="12" stroke-linecap="round" />
          <g fill="none" stroke="#6c7086" stroke-width="7" stroke-linecap="round" opacity=".85">
            <path d="M300 812 Q355 850 395 825 T485 850 L530 900" />
            <path d="M690 785 Q655 835 690 870 T665 945 L710 990" />
            <path d="M850 805 Q800 850 830 890 L790 935" />
            <path d="M420 965 Q470 930 505 980 L490 1050" />
            <path d="M565 1080 L600 1035 635 1060 655 1010" />
            <path d="M340 890 L375 925 360 970" />
          </g>
          <g fill="none" stroke="#9399b2" stroke-width="3" opacity=".55">
            <path d="M235 790 Q300 770 340 790" /><path d="M730 750 Q785 735 825 760" />
            <path d="M890 870 Q925 850 950 865" /><path d="M460 1110 L480 1140" />
          </g>
        </g>

        <!-- 02 Stadt -->
        <g class="city" stroke-linejoin="round">
          <g fill="#242436" stroke="#6c7086" stroke-width="6">
            <path d="M300 735 V600 L345 555 390 600 V735Z" />
            <path d="M390 735 V525 L450 470 510 525 V735Z" />
            <path d="M520 735 V615 L560 575 600 615 V735Z" />
            <path d="M675 735 V545 L730 485 785 545 V735Z" />
            <path d="M800 735 V610 L845 565 890 610 V735Z" />
          </g>
          <g fill="#313244" stroke="#6c7086" stroke-width="5">
            <path d="M260 735 V665 L290 635 320 665 V735Z" />
            <path d="M470 735 V650 L500 620 530 650 V735Z" />
            <path d="M615 735 V635 L645 605 675 635 V735Z" />
            <path d="M755 735 V665 L780 640 805 665 V735Z" />
            <path d="M875 735 V680 L900 655 925 680 V735Z" />
          </g>
          <g class="windows" fill="#cba6f7">
            <path d="M340 625h14v28h-14z M430 560h16v32h-16z M475 600h14v26h-14z M712 570h16v34h-16z M830 645h14v26h-14z" />
            <path d="M285 680h10v18h-10z M640 665h10v20h-10z M780 690h10v18h-10z" />
          </g>
          <g fill="#11111b" stroke="#6c7086" stroke-width="4">
            <path d="M430 470 Q450 430 470 470Z" /><path d="M710 485 Q730 445 750 485Z" />
            <path d="M330 555 Q345 525 360 555Z" />
          </g>
          <path d="M255 738 Q600 720 940 738" fill="none" stroke="#9399b2" stroke-width="8" opacity=".7" />
        </g>

        <!-- 03 Baum aus Kristall -->
        <g class="tree">
          <path
            d="M570 770 Q600 675 575 580 Q555 490 600 405 Q625 355 600 300 Q650 360 650 430 Q680 510 635 585 Q620 665 675 770Z"
            fill="#242436" stroke="#6c7086" stroke-width="12" stroke-linejoin="round"
          />
          <path
            d="M605 675 Q520 600 455 555 Q420 530 390 485 M625 620 Q710 560 770 500 M600 500 Q535 430 500 365 M635 465 Q700 390 725 340"
            fill="none" stroke="#45465c" stroke-width="30" stroke-linecap="round"
          />
          <path d="M600 770 Q600 650 612 570 Q620 490 600 405" fill="none" stroke="#9399b2" stroke-width="5" opacity=".65" />
          <g fill="url(#sc-crystal)" stroke="#b4befe" stroke-width="6" stroke-linejoin="round">
            <path d="M600 245 L555 315 570 390 620 420 665 360 650 285Z" />
            <path d="M510 320 L470 365 490 420 545 410 570 360Z" />
            <path d="M680 300 L650 360 680 415 735 390 745 335Z" />
            <path d="M555 395 L530 445 565 475 610 445 600 405Z" />
            <path d="M645 405 L625 455 670 480 710 440 690 405Z" />
            <path d="M595 170 L575 230 600 270 630 225 620 175Z" />
          </g>
          <g fill="none" stroke="#f5c2e7" stroke-width="5" opacity=".9">
            <path d="M600 185 L600 265 M510 330 L540 390 M700 315 L685 380" />
          </g>
          <path d="M450 770 Q600 740 760 770" fill="none" stroke="#6c7086" stroke-width="8" opacity=".8" />
        </g>

        <!-- 04 Licht in den Rissen: atmet langsam -->
        <g class="treelight">
          <g filter="url(#sc-softGlow)">
            <path
              d="M596 300 Q610 340 608 380 M525 360 Q550 380 560 405 M690 345 Q675 370 670 395 M605 455 Q620 475 620 505 M585 565 Q600 590 600 620"
              fill="none" stroke="#cba6f7" stroke-width="10" stroke-linecap="round"
            />
            <g fill="#f5c2e7">
              <circle cx="608" cy="345" r="8" /><circle cx="553" cy="390" r="6" />
              <circle cx="675" cy="375" r="7" /><circle cx="620" cy="485" r="6" />
            </g>
          </g>
        </g>

        <!-- Schwebende Verse -->
        <g class="motes" fill="#f5c2e7">
          {#each motes as m}
            <circle cx={m.x} cy={m.y} r={m.r} style="animation-duration:{m.d}s;animation-delay:{m.delay}s" />
          {/each}
        </g>

        <!-- 05 Brücke mit Büchern: im Vordergrund, solange man unterwegs ist -->
        <g class="bridge-pos">
          <g class="bridge" stroke-linejoin="round">
            <path d="M170 700 Q600 815 1030 700" fill="none" stroke="#242436" stroke-width="48" />
            <path d="M170 685 Q600 800 1030 685" fill="none" stroke="#6c7086" stroke-width="8" />
            <path d="M170 685 Q600 800 1030 685" fill="none" stroke="#45465c" stroke-width="28" />
            <g stroke="#6c7086" stroke-width="8" fill="none">
              <path d="M205 690 L205 585 M300 714 L300 610 M395 738 L395 635 M490 758 L490 655 M585 770 L585 665 M680 758 L680 655 M775 738 L775 635 M870 714 L870 610 M965 690 L965 585" />
              <path d="M205 585 Q585 650 965 585" />
            </g>
            <g stroke="#6c7086" stroke-width="5">
              <path d="M330 680 l0 -72 42 7 0 73Z" fill="#313244" />
              <path d="M375 690 l0 -83 46 8 0 84Z" fill="#45465c" />
              <path d="M780 690 l0 -85 48 -8 0 83Z" fill="#313244" />
              <path d="M830 680 l0 -74 42 -7 0 72Z" fill="#45465c" />
            </g>
            <g fill="none" stroke="#cba6f7" stroke-width="4" opacity=".85">
              <path d="M342 620 l18 3 M388 622 l19 3 M793 622 l20 -3 M842 620 l18 -3" />
            </g>
          </g>
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
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 36%, transparent 58%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 36%, transparent 58%);
  }
  svg {
    width: 100%;
    height: 100%;
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

  /* Brücke: in der Ferne kaum sichtbar, unterwegs im Vordergrund, am Baum ausgeblendet */
  .bridge-pos {
    transform: translateY(330px);
  }
  .bridge {
    opacity: 0.25;
    transition: opacity 2s ease;
  }
  [data-stage='1'] .bridge,
  [data-stage='2'] .bridge {
    opacity: 1;
  }
  [data-stage='3'] .bridge,
  [data-stage='4'] .bridge {
    opacity: 0;
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
  .windows {
    opacity: 0.45;
    transition: opacity 2s ease;
  }
  [data-stage='2'] .windows,
  [data-stage='3'] .windows,
  [data-stage='4'] .windows {
    opacity: 0.75;
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
  /* Das Licht atmet: sehr langsam, kleiner Ausschlag */
  .treelight > g {
    animation: breathe 10s ease-in-out infinite alternate;
  }
  @keyframes breathe {
    from {
      opacity: 0.65;
    }
    to {
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
  .nebula {
    opacity: 0.35;
    animation: drift 40s ease-in-out infinite alternate;
  }
  @keyframes drift {
    from {
      transform: translateX(-12px);
    }
    to {
      transform: translateX(12px);
    }
  }
  .twinkle {
    opacity: 0.6;
    animation: shimmer ease-in-out infinite alternate;
  }
  .twinkle.soft {
    opacity: 0.45;
  }
  @keyframes shimmer {
    from {
      opacity: 0.25;
    }
    to {
      opacity: 0.85;
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
      opacity: 0.4;
    }
    100% {
      transform: translateY(-200px);
      opacity: 0;
    }
  }

  /* Helles Farbschema: Szene als zarte Zeichnung */
  :global(:root[data-theme='latte']) .scene {
    filter: invert(0.9) hue-rotate(180deg) saturate(1.2);
    opacity: 0.18;
  }
  :global(:root[data-theme='latte']) .scene.hero {
    opacity: 0.6;
  }
  @media (prefers-color-scheme: light) {
    :global(:root[data-theme='system']) .scene {
      filter: invert(0.9) hue-rotate(180deg) saturate(1.2);
      opacity: 0.18;
    }
    :global(:root[data-theme='system']) .scene.hero {
      opacity: 0.6;
    }
  }
</style>
