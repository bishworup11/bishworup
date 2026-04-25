<template>
  <section id="achievements" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div class="mb-14 reveal">
        <span class="eyebrow">Recognition</span>
        <h2 class="h2-display">Achievements &amp; competitive programming.</h2>
        <p class="lede">Contest results, rankings, and problem-solving stats across major judges.</p>
      </div>

      <!-- Achievement cards -->
      <div class="grid md:grid-cols-2 gap-4 mb-12">
        <div
          v-for="(a, i) in achievements" :key="a.title"
          class="group flex items-start gap-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] transition-all reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <div class="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :style="{ background: a.bg, color: a.fg }">
            <component :is="a.icon" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 text-[0.72rem] font-mono text-[var(--muted)] uppercase tracking-wider">
              <span>{{ a.year }}</span>
              <span class="w-1 h-1 rounded-full bg-[var(--border-strong)]"></span>
              <span>{{ a.event }}</span>
            </div>
            <h4 class="mt-1.5 font-head font-semibold text-[1.02rem] text-[var(--text)] tracking-tight">{{ a.title }}</h4>
            <p class="mt-1 text-[0.88rem] text-[var(--text-dim)]">{{ a.detail }}</p>
          </div>
        </div>
      </div>

      <!-- Problem solving stats -->
      <div class="reveal reveal-delay-2">
        <div class="flex items-baseline gap-3 mb-5">
          <div class="w-6 h-px bg-[var(--border-strong)]"></div>
          <h3 class="text-[0.72rem] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">
            Problem Solving · 1500+ solved
          </h3>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <a
            v-for="s in solving" :key="s.platform" :href="s.url" target="_blank" rel="noopener"
            class="group flex items-center justify-between p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
          >
            <div>
              <div class="font-display text-2xl text-[var(--text)]">{{ s.count }}</div>
              <div class="mt-1 text-[0.82rem] font-medium text-[var(--text-dim)]">{{ s.platform }}</div>
              <div class="text-[0.72rem] font-mono text-[var(--muted)]">{{ s.handle }}</div>
            </div>
            <svg class="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const IconTrophy = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }),
  h('path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }),
  h('path', { d: 'M4 22h16' }),
  h('path', { d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' }),
  h('path', { d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' }),
  h('path', { d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z' }),
])
const IconMedal = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15' }),
  h('path', { d: 'M11 12 5.12 2.2' }),
  h('path', { d: 'm13 12 5.88-9.8' }),
  h('path', { d: 'M8 7h8' }),
  h('circle', { cx: 12, cy: 17, r: 5 }),
  h('path', { d: 'M12 18v-2h-.5' }),
])
const IconBulb = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5' }),
  h('path', { d: 'M9 18h6' }),
  h('path', { d: 'M10 22h4' }),
])
const IconStar = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }),
])

const achievements = [
  { year: '2022', event: 'ICPC Asia Regional', title: 'Ranked 102nd at Dhaka Regional', detail: 'Team BSMRSTU_pushback · Green University of Bangladesh', icon: IconTrophy, bg: 'oklch(68% 0.18 280 / 0.12)', fg: 'oklch(75% 0.18 280)' },
  { year: '2023', event: 'ICPC Asia Regional', title: 'Ranked 120th at Dhaka Regional', detail: 'Team BSMRSTU_Megatron · BUBT', icon: IconMedal, bg: 'oklch(72% 0.14 200 / 0.12)', fg: 'oklch(78% 0.14 200)' },
  { year: '2024', event: 'Hackathon', title: 'Ranked 24th at Inter-University', detail: 'Team BSMRSTU_Perfect_Number', icon: IconBulb, bg: 'oklch(75% 0.15 85 / 0.12)', fg: 'oklch(80% 0.15 85)' },
  { year: 'Active', event: 'Codeforces', title: 'Specialist · Max rating 1560', detail: 'Handle: bishworup11 · 800+ problems solved', icon: IconStar, bg: 'oklch(70% 0.18 25 / 0.12)', fg: 'oklch(76% 0.18 25)' },
]
const solving = [
  { count: '800+', platform: 'Codeforces', handle: '@bishworup11', url: 'https://codeforces.com/profile/bishworup11' },
  { count: '100+', platform: 'LeetCode', handle: '@bishworup11', url: 'https://leetcode.com/bishworup11' },
  { count: '150+', platform: 'GeeksforGeeks', handle: '@bishworupmollik', url: 'https://auth.geeksforgeeks.org/user/bishworupmollik' },
  { count: '90+',  platform: 'Beecrowd', handle: '@bishworup11', url: 'https://judge.beecrowd.com' },
]
</script>
