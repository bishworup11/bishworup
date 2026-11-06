<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    class="logo"
    :class="{ 'logo--animated': animated }"
    :style="{ '--logo-delay': `${delay}s` }"
    role="img"
    aria-label="Bishworup Mollik logo"
  >
    <defs>
      <linearGradient :id="`${uid}-g`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" style="stop-color: var(--accent)" />
        <stop offset="100%" style="stop-color: var(--accent-2)" />
      </linearGradient>
      <!-- Badge: deep violet → accent → cyan -->
      <linearGradient :id="`${uid}-badge`" x1="0.15" y1="0" x2="0.85" y2="1">
        <stop offset="0%" style="stop-color: oklch(36% 0.19 285)" />
        <stop offset="55%" style="stop-color: oklch(48% 0.2 278)" />
        <stop offset="100%" style="stop-color: oklch(52% 0.13 215)" />
      </linearGradient>
      <!-- Soft top highlight for depth -->
      <radialGradient :id="`${uid}-sheen`" cx="0.35" cy="0.15" r="0.75">
        <stop offset="0%" stop-color="#fff" stop-opacity="0.16" />
        <stop offset="60%" stop-color="#fff" stop-opacity="0" />
      </radialGradient>
      <!-- Moving light band -->
      <linearGradient :id="`${uid}-shine`" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#fff" stop-opacity="0" />
        <stop offset="50%" stop-color="#fff" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <clipPath :id="`${uid}-clip`">
        <path :d="HEX_BADGE" />
      </clipPath>
    </defs>

    <!-- Outer outline hexagon (flat-top), offset 30° from the badge -->
    <g class="logo__outer">
      <path
        :d="HEX_OUTER"
        fill="none"
        :stroke="`url(#${uid}-g)`"
        stroke-width="1"
        stroke-linejoin="round"
        pathLength="100"
        class="logo__outer-line"
      />
    </g>

    <!-- Solid badge -->
    <g class="logo__badge">
      <path :d="HEX_BADGE" :fill="`url(#${uid}-badge)`" />
      <path :d="HEX_BADGE" :fill="`url(#${uid}-sheen)`" />
      <g :clip-path="`url(#${uid}-clip)`">
        <rect x="-14" y="-10" width="10" height="60" :fill="`url(#${uid}-shine)`" class="logo__shine" />
      </g>
    </g>

    <!-- Inner outline -->
    <path
      :d="HEX_INNER"
      fill="none"
      stroke-width="0.8"
      stroke-linejoin="round"
      pathLength="100"
      class="logo__inner"
    />

    <!-- Script monogram (Sacramento, converted to outlines) -->
    <g class="logo__script">
      <path :d="GLYPH_B" />
      <path :d="GLYPH_M" />
    </g>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number
  /** Play the build-up animation when mounted */
  animated?: boolean
  /** Seconds to wait before the animation starts */
  delay?: number
}>(), { size: 32, animated: true, delay: 0 })

const uid = `logo-${useId()}`

const HEX_OUTER = 'M39 20 L29.5 3.55 L10.5 3.55 L1 20 L10.5 36.45 L29.5 36.45 Z'
const HEX_BADGE = 'M20 2.6 L35.07 11.3 L35.07 28.7 L20 37.4 L4.93 28.7 L4.93 11.3 Z'
const HEX_INNER = 'M20 5 L32.99 12.5 L32.99 27.5 L20 35 L7.01 27.5 L7.01 12.5 Z'
const GLYPH_B = 'M16.59 20.55Q17.02 20.67 17.32 20.82Q17.62 20.98 17.83 21.14Q18.04 21.31 18.16 21.49Q18.28 21.66 18.34 21.82Q18.41 21.98 18.43 22.12Q18.44 22.26 18.44 22.35Q18.44 22.7 18.31 22.98Q18.18 23.25 17.95 23.46Q17.73 23.67 17.43 23.82Q17.13 23.96 16.81 24.05Q16.48 24.15 16.14 24.19Q15.8 24.23 15.5 24.23Q15 24.23 14.48 24.13Q13.95 24.03 13.41 23.81Q13.29 23.76 13.29 23.63Q13.29 23.55 13.35 23.49Q13.41 23.44 13.48 23.44Q13.51 23.44 13.55 23.46Q14.02 23.65 14.51 23.75Q15 23.85 15.49 23.85Q16.17 23.85 16.65 23.72Q17.14 23.59 17.45 23.38Q17.76 23.17 17.91 22.9Q18.06 22.63 18.06 22.36Q18.06 22.05 17.9 21.79Q17.73 21.53 17.42 21.33Q17.11 21.12 16.68 20.98Q16.25 20.83 15.73 20.76Q15.38 20.82 15.06 20.85Q14.73 20.87 14.46 20.87H14.34Q14.31 20.87 14.28 20.87Q13.92 21.73 13.42 22.36Q12.92 22.99 12.36 23.4Q11.8 23.82 11.21 24.01Q10.61 24.21 10.07 24.21Q9.5 24.21 9.03 24.05Q8.56 23.9 8.22 23.61Q7.88 23.32 7.69 22.9Q7.5 22.49 7.5 21.98Q7.5 21.45 7.71 20.88Q7.91 20.32 8.32 19.73Q8.71 19.18 9.19 18.75Q9.66 18.31 10.19 17.98Q10.71 17.65 11.26 17.41Q11.82 17.18 12.37 17.03Q12.91 16.88 13.44 16.81Q13.96 16.74 14.42 16.74Q14.79 16.74 15.13 16.77Q15.47 16.79 15.78 16.84Q15.96 16.64 16.07 16.56Q16.18 16.47 16.2 16.46Q16.26 16.43 16.3 16.43Q16.37 16.43 16.43 16.47Q16.48 16.51 16.48 16.58Q16.48 16.68 16.41 16.75Q16.34 16.82 16.22 16.93Q17.14 17.16 17.62 17.61Q18.11 18.06 18.11 18.73Q18.11 19.09 17.99 19.38Q17.87 19.67 17.66 19.89Q17.45 20.11 17.18 20.28Q16.9 20.44 16.59 20.55ZM15.73 20.38Q15.95 20.34 16.19 20.28Q16.42 20.21 16.64 20.12Q16.86 20.03 17.06 19.9Q17.26 19.77 17.41 19.6Q17.56 19.43 17.65 19.21Q17.73 19 17.73 18.72Q17.73 18.16 17.27 17.8Q16.8 17.43 15.93 17.26Q15.68 17.57 15.46 17.94Q15.24 18.32 15.06 18.72Q14.87 19.12 14.73 19.54Q14.58 19.95 14.48 20.33Q14.58 20.33 14.67 20.33Q14.75 20.33 14.81 20.33Q15.01 20.33 15.24 20.34Q15.47 20.35 15.73 20.38ZM15.51 17.19Q15.25 17.15 14.98 17.14Q14.71 17.12 14.42 17.12Q13.98 17.12 13.48 17.19Q12.99 17.25 12.47 17.39Q11.95 17.53 11.42 17.76Q10.89 17.98 10.4 18.29Q9.9 18.6 9.45 19.02Q9 19.43 8.63 19.95Q8.25 20.48 8.06 21Q7.87 21.51 7.87 21.98Q7.87 22.41 8.03 22.76Q8.19 23.1 8.48 23.34Q8.77 23.58 9.17 23.7Q9.58 23.83 10.07 23.83Q10.56 23.83 11.09 23.65Q11.62 23.48 12.12 23.11Q12.63 22.74 13.08 22.18Q13.54 21.62 13.88 20.84Q13.79 20.84 13.69 20.79Q13.6 20.74 13.6 20.62Q13.6 20.5 13.71 20.45Q13.83 20.4 14.07 20.36Q14.21 19.95 14.35 19.54Q14.49 19.13 14.66 18.73Q14.83 18.33 15.03 17.95Q15.24 17.56 15.51 17.19Z'
const GLYPH_M = 'M30.9 17.58Q30.69 17.9 30.42 18.34Q30.16 18.78 29.86 19.32Q29.6 19.78 29.35 20.29Q29.11 20.8 28.88 21.3Q28.66 21.81 28.47 22.27Q28.28 22.73 28.14 23.08Q28 23.44 27.92 23.65Q27.84 23.86 27.84 23.87Q27.79 23.99 27.66 23.99Q27.59 23.99 27.54 23.95Q27.49 23.91 27.48 23.84Q27.48 23.84 27.43 23.63Q27.38 23.42 27.3 23.07Q27.22 22.73 27.12 22.27Q27.02 21.82 26.9 21.33Q26.79 20.84 26.68 20.33Q26.56 19.83 26.46 19.37Q26.13 20.32 25.79 21.04Q25.45 21.77 25.1 22.31Q24.74 22.85 24.36 23.21Q23.99 23.58 23.57 23.8Q23.16 24.02 22.71 24.12Q22.26 24.21 21.75 24.21Q21.49 24.21 21.2 24.15Q20.9 24.1 20.61 23.98Q20.32 23.86 20.06 23.68Q19.79 23.5 19.59 23.25Q19.38 23 19.26 22.69Q19.14 22.38 19.14 21.99Q19.14 21.59 19.31 21.25Q19.48 20.91 19.77 20.67Q20.06 20.43 20.44 20.29Q20.83 20.16 21.25 20.16Q21.56 20.16 21.81 20.21Q22.06 20.26 22.25 20.34Q22.44 20.42 22.57 20.52Q22.71 20.61 22.8 20.69Q22.89 20.77 22.93 20.83Q22.97 20.89 22.97 20.89Q23 20.94 23 20.99Q23 21.06 22.95 21.12Q22.9 21.18 22.81 21.18Q22.71 21.18 22.65 21.1Q22.65 21.09 22.57 21Q22.5 20.92 22.33 20.81Q22.16 20.71 21.89 20.62Q21.62 20.54 21.24 20.54Q20.89 20.54 20.57 20.64Q20.26 20.75 20.03 20.95Q19.8 21.14 19.66 21.41Q19.52 21.68 19.52 22Q19.52 22.31 19.63 22.57Q19.73 22.83 19.91 23.04Q20.08 23.24 20.31 23.39Q20.54 23.54 20.79 23.64Q21.04 23.74 21.29 23.78Q21.55 23.83 21.77 23.83Q22.15 23.83 22.51 23.77Q22.88 23.72 23.23 23.56Q23.58 23.4 23.92 23.12Q24.26 22.84 24.6 22.39Q24.93 21.94 25.26 21.3Q25.59 20.67 25.92 19.8Q26.02 19.54 26.11 19.24Q26.21 18.94 26.31 18.64Q26.22 18.2 26.18 17.89Q26.15 17.58 26.15 17.37Q26.15 17.15 26.18 17.02Q26.22 16.89 26.27 16.83Q26.33 16.76 26.39 16.74Q26.46 16.72 26.52 16.72Q26.57 16.72 26.63 16.74Q26.69 16.76 26.74 16.83Q26.8 16.9 26.83 17.03Q26.87 17.16 26.87 17.38Q26.87 17.62 26.82 17.93Q26.78 18.25 26.69 18.63Q26.75 18.93 26.84 19.31Q26.92 19.68 27.01 20.09Q27.1 20.49 27.2 20.91Q27.29 21.33 27.38 21.73Q27.47 22.13 27.55 22.49Q27.64 22.86 27.71 23.15Q27.84 22.81 28.04 22.33Q28.23 21.85 28.47 21.3Q28.71 20.76 28.98 20.2Q29.25 19.64 29.53 19.14Q29.92 18.43 30.25 17.92Q30.58 17.41 30.82 17.08Q31.06 16.75 31.2 16.6Q31.34 16.44 31.35 16.42Q31.4 16.37 31.48 16.37Q31.57 16.37 31.62 16.43Q31.67 16.48 31.67 16.56Q31.67 16.59 31.66 16.63Q31.66 16.63 31.6 16.78Q31.54 16.92 31.45 17.17Q31.37 17.41 31.26 17.75Q31.16 18.08 31.06 18.46Q30.96 18.84 30.88 19.26Q30.8 19.68 30.77 20.09Q30.75 20.28 30.74 20.49Q30.73 20.7 30.73 20.91Q30.73 21.24 30.76 21.57Q30.79 21.91 30.86 22.22Q30.93 22.53 31.05 22.8Q31.17 23.07 31.35 23.28Q31.52 23.48 31.76 23.61Q32.01 23.73 32.33 23.74Q32.41 23.75 32.45 23.81Q32.5 23.87 32.5 23.94Q32.5 24.01 32.45 24.07Q32.39 24.12 32.32 24.12Q32.24 24.12 32.16 24.11Q31.8 24.06 31.52 23.9Q31.25 23.74 31.05 23.51Q30.85 23.28 30.71 22.98Q30.58 22.68 30.5 22.34Q30.42 22 30.39 21.63Q30.36 21.27 30.36 20.89Q30.36 20.45 30.4 20Q30.45 19.56 30.52 19.14Q30.6 18.71 30.7 18.32Q30.8 17.92 30.9 17.58Z'
</script>

<style scoped>
.logo {
  overflow: visible;
  flex-shrink: 0;
}

/* Colours: brand gradient badge with white ink, same in light and dark themes. */
.logo__badge {
  filter: drop-shadow(0 1px 3px var(--accent-glow)) drop-shadow(0 0 8px var(--accent-glow));
}
.logo__inner {
  stroke: #fff;
  stroke-opacity: 0.45;
}
.logo__script {
  fill: #fff;
  stroke: #fff;
  stroke-width: 0.4;
  stroke-linejoin: round;
  filter: drop-shadow(0 0.6px 0.6px rgba(20, 10, 60, 0.35));
}
.logo__outer-line { stroke-opacity: 0.85; }

/* Light band sweeps across the badge every few seconds */
.logo__shine {
  transform: rotate(20deg);
  transform-box: view-box;
  transform-origin: 20px 20px;
  animation: logo-shine 6s ease-in-out calc(var(--logo-delay) + 1.8s) infinite;
}
@keyframes logo-shine {
  0%        { transform: rotate(20deg) translateX(0); }
  22%, 100% { transform: rotate(20deg) translateX(58px); }
}

.logo__outer {
  transform-box: view-box;
  transform-origin: 20px 20px;
}
.logo__badge {
  transform-box: view-box;
  transform-origin: 20px 20px;
}

/* ---- Mount animation ---- */
.logo--animated .logo__badge {
  animation: logo-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) var(--logo-delay) backwards;
}
.logo--animated .logo__outer-line {
  stroke-dasharray: 101;
  animation: logo-draw 1s var(--ease) calc(var(--logo-delay) + 0.25s) backwards;
}
.logo--animated .logo__outer {
  animation: logo-spin-in 1.1s var(--ease) calc(var(--logo-delay) + 0.25s) backwards;
}
.logo--animated .logo__inner {
  stroke-dasharray: 101;
  animation: logo-draw 0.8s var(--ease) calc(var(--logo-delay) + 0.45s) backwards;
}
.logo--animated .logo__script {
  animation: logo-write 1s cubic-bezier(0.45, 0, 0.3, 1) calc(var(--logo-delay) + 0.75s) backwards;
}

@keyframes logo-pop {
  from { opacity: 0; transform: scale(0.4) rotate(-30deg); }
}
@keyframes logo-draw {
  from { stroke-dashoffset: 101; }
  to   { stroke-dashoffset: 0; }
}
@keyframes logo-spin-in {
  from { transform: rotate(-90deg); }
}
/* Left-to-right wipe so the signature looks hand-written */
@keyframes logo-write {
  from { clip-path: inset(0 78% 0 18%); opacity: 0.4; }
  to   { clip-path: inset(0 0 0 0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .logo__badge,
  .logo__outer,
  .logo__outer-line,
  .logo__inner,
  .logo__script,
  .logo__shine {
    animation: none !important;
    transition: none !important;
  }
}
</style>
