<template>
  <section id="background" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <SectionHeading
        num="04"
        eyebrow="Background"
        title="Education & competitive programming."
        lede="Where I studied, and the contests where I learned to write correct code under pressure."
      />

      <div class="grid lg:grid-cols-12 gap-x-12 gap-y-14">
        <!-- Education -->
        <div class="lg:col-span-5 reveal reveal-delay-1">
          <ColHeading>Education</ColHeading>
          <div class="space-y-4">
            <article
              v-for="e in education" :key="e.degree"
              class="card p-6 transition-colors hover:border-[var(--border-strong)]"
            >
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--accent-soft)] text-[var(--accent)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>
                <div class="min-w-0">
                  <time class="text-[0.7rem] font-mono uppercase tracking-wider text-[var(--muted)]">{{ e.date }}</time>
                  <h4 class="mt-1 font-head font-semibold text-[1.05rem] text-[var(--text)] tracking-tight">{{ e.degree }}</h4>
                  <div class="mt-1 text-[0.88rem] text-[var(--text-dim)]">
                    <span class="font-medium text-[var(--accent)]">{{ e.school }}</span>
                    <span class="text-[var(--muted)]"> · </span>{{ e.loc }}
                  </div>
                  <p v-if="e.desc" class="mt-3 text-[0.88rem] text-[var(--text-dim)] leading-relaxed">{{ e.desc }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Competitions -->
        <div class="lg:col-span-7 reveal reveal-delay-2">
          <ColHeading>Competitions</ColHeading>
          <ol class="relative border-l border-[var(--border)] ml-5 space-y-8">
            <li v-for="a in achievements" :key="a.title" class="relative pl-10">
              <span
                class="absolute -left-5 top-0 w-10 h-10 rounded-xl flex items-center justify-center ring-4 ring-[var(--bg)]"
                :style="{ background: a.bg, color: a.fg }"
              >
                <component :is="a.icon" />
              </span>
              <div class="flex items-center gap-2 text-[0.7rem] font-mono text-[var(--muted)] uppercase tracking-wider">
                <span>{{ a.year }}</span>
                <span class="w-1 h-1 rounded-full bg-[var(--border-strong)]"></span>
                <span>{{ a.event }}</span>
              </div>
              <h4 class="mt-1 font-head font-semibold text-[1.05rem] text-[var(--text)] tracking-tight">{{ a.title }}</h4>
              <p class="mt-0.5 text-[0.86rem] text-[var(--text-dim)]">{{ a.detail }}</p>
            </li>
          </ol>
        </div>
      </div>

      <!-- Judges -->
      <div class="mt-16 reveal">
        <ColHeading>Problem solving · 1,500+ solved</ColHeading>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <a
            v-for="s in solving" :key="s.platform" :href="s.url" target="_blank" rel="noopener"
            class="group flex items-center justify-between p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
          >
            <div class="min-w-0">
              <div class="font-display text-2xl text-[var(--text)]">{{ s.count }}</div>
              <div class="mt-1 text-[0.82rem] font-medium text-[var(--text-dim)]">{{ s.platform }}</div>
              <div class="text-[0.7rem] font-mono text-[var(--muted)] truncate">{{ s.handle }}</div>
            </div>
            <svg class="shrink-0 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const ColHeading = defineComponent((_, { slots }) => () =>
  h('div', { class: 'flex items-baseline gap-3 mb-6' }, [
    h('div', { class: 'w-6 h-px bg-[var(--border-strong)]' }),
    h('h3', { class: 'text-[0.72rem] font-mono uppercase tracking-[0.2em] text-[var(--muted)]' }, slots.default?.()),
  ]),
)

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

const education = [
  {
    date: 'Jan 2019 — Apr 2024',
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Gopalganj Science and Technology University (GSTU)',
    loc: 'Gopalganj, Bangladesh',
    desc: 'Focused on algorithms, data structures, and systems. Represented the university at ICPC Asia Regionals twice.',
  },
  {
    date: 'Aug 2016 — Aug 2018',
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'MC College',
    loc: 'Sylhet, Bangladesh',
  },
]
</script>
