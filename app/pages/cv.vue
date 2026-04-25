<template>
  <div class="cv-bg min-h-screen pb-20 pt-10 px-4 flex flex-col items-center">
    <!-- Toolbar -->
    <div class="w-full max-w-[820px] flex items-center justify-between mb-6 flex-wrap gap-3 print:hidden">
      <NuxtLink to="/"
        class="inline-flex items-center gap-2 text-[0.78rem] font-mono text-black/55 hover:text-black transition-colors">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to portfolio
      </NuxtLink>
      <div class="flex items-center gap-2">
        <a href="mailto:bishworupmollik@gmail.com"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-black/10 text-[0.78rem] font-mono text-black/70 hover:bg-black/5 transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
          Email
        </a>
        <button type="button" @click="downloadPdf"
          class="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#1a1a1a] text-white text-[0.78rem] font-mono font-medium tracking-wide hover:bg-black transition-colors cursor-pointer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
      </div>
    </div>

    <!-- Paper -->
    <article class="paper w-full max-w-[820px] bg-[#fdfdfb] text-[#0e0e16] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.08),0_24px_60px_-8px_rgba(0,0,0,0.18)] px-12 sm:px-16 py-14 leading-snug">

      <!-- Header -->
      <header class="text-center pb-5 border-b border-black">
        <h1 class="text-[2.1rem] font-bold tracking-[0.18em] uppercase font-serif">Bishworup Mollik</h1>
        <p class="mt-1.5 text-[0.78rem] tracking-[0.04em] text-[#444] uppercase font-mono">
          Software Engineer · Full-Stack Developer
        </p>
        <div class="mt-3 flex justify-center flex-wrap gap-x-5 gap-y-1 text-[0.85rem] text-[#333]">
          <a href="mailto:bishworupmollik@gmail.com" class="text-[#1e3a6e] hover:underline">bishworupmollik@gmail.com</a>
          <span class="text-[#aaa]">·</span>
          <span>+880 1771 106071</span>
          <span class="text-[#aaa]">·</span>
          <span>Sunamganj, Sylhet, BD</span>
        </div>
        <div class="mt-1.5 flex justify-center gap-x-4 flex-wrap text-[0.82rem]">
          <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noopener" class="text-[#1e3a6e] hover:underline">
            {{ s.label }}
          </a>
        </div>
      </header>

      <!-- Summary -->
      <p class="mt-5 text-[0.92rem] leading-[1.65] italic text-[#222] text-justify hyphens-auto">
        Software engineer with strong fundamentals in full-stack web development and competitive programming. Specializing in <strong class="not-italic">Vue 3</strong>, <strong class="not-italic">Nuxt</strong>, and modern JavaScript ecosystems. Currently building production-grade products at AppsCode (Dhaka). Active competitive programmer with 1500+ problems solved across Codeforces (Specialist, max rating 1560), LeetCode, GeeksforGeeks, and Beecrowd.
      </p>

      <!-- Experience -->
      <Section title="Experience">
        <div v-for="job in experience" :key="job.title" class="mt-3 first:mt-0">
          <div class="flex items-baseline justify-between gap-4">
            <div>
              <h3 class="text-[0.95rem] font-semibold">{{ job.title }}</h3>
              <p class="text-[0.85rem] italic text-[#444]">{{ job.company }} · {{ job.loc }}</p>
            </div>
            <span class="text-[0.8rem] text-[#444] font-mono whitespace-nowrap">{{ job.date }}</span>
          </div>
          <ul class="mt-1.5 list-none">
            <li v-for="b in job.bullets" :key="b" class="relative pl-4 text-[0.88rem] text-[#222] leading-[1.55] mb-0.5 text-justify before:content-['—'] before:absolute before:left-0 before:text-[#888]" v-html="b"></li>
          </ul>
        </div>
      </Section>

      <!-- Education -->
      <Section title="Education">
        <div v-for="e in education" :key="e.degree" class="mt-2.5 first:mt-0 flex items-baseline justify-between gap-4">
          <div>
            <h3 class="text-[0.95rem] font-semibold">{{ e.degree }}</h3>
            <p class="text-[0.85rem] italic text-[#444]">{{ e.school }}</p>
          </div>
          <span class="text-[0.8rem] text-[#444] font-mono whitespace-nowrap">{{ e.date }}</span>
        </div>
      </Section>

      <!-- Skills -->
      <Section title="Technical Skills">
        <table class="w-full text-[0.88rem] border-collapse mt-1">
          <tr v-for="s in skills" :key="s.label" class="align-top">
            <td class="py-[3px] pr-4 font-semibold w-[120px] whitespace-nowrap">{{ s.label }}</td>
            <td class="py-[3px] text-[#222]">{{ s.value }}</td>
          </tr>
        </table>
      </Section>

      <!-- Projects -->
      <Section title="Selected Projects">
        <div v-for="p in projects" :key="p.title" class="mt-2.5 first:mt-0">
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="text-[0.92rem] font-semibold">{{ p.title }}</h3>
            <span class="text-[0.8rem] italic text-[#666] whitespace-nowrap">{{ p.stack }}</span>
          </div>
          <p class="mt-0.5 text-[0.88rem] text-[#222] leading-[1.55] text-justify pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#888]">{{ p.desc }}</p>
        </div>
      </Section>

      <!-- Achievements -->
      <Section title="Achievements">
        <ul class="mt-1 space-y-0.5">
          <li v-for="a in achievements" :key="a" class="relative pl-4 text-[0.88rem] text-[#222] leading-[1.55] before:content-['—'] before:absolute before:left-0 before:text-[#888]" v-html="a"></li>
        </ul>
      </Section>

      <!-- Problem Solving -->
      <Section title="Problem Solving">
        <p class="text-[0.88rem] text-[#222] mt-1">Solved <strong>1500+</strong> problems across multiple online judges.</p>
        <table class="w-full text-[0.88rem] border-collapse mt-1.5">
          <tr v-for="s in solving" :key="s.platform" class="align-top">
            <td class="py-[3px] pr-4 font-semibold w-[140px]">
              <a :href="s.url" target="_blank" rel="noopener" class="text-[#1e3a6e] hover:underline">{{ s.platform }}</a>
            </td>
            <td class="py-[3px] text-[#222]">{{ s.detail }}</td>
          </tr>
        </table>
      </Section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useSeoMeta({
  title: 'CV — Bishworup Mollik',
  description: 'Curriculum Vitae of Bishworup Mollik — Software Engineer at AppsCode. Vue 3, Nuxt, full-stack JavaScript, ICPC regionalist.',
  robots: 'noindex, follow',
})
useHead({ htmlAttrs: { 'data-theme': 'light' } })

const downloadPdf = () => {
  if (typeof window !== 'undefined') window.print()
}

const Section = (_: any, { slots, attrs }: any) => h('section', { class: 'mt-6' }, [
  h('h2', { class: 'text-[0.78rem] font-bold uppercase tracking-[0.22em] text-black border-b border-black pb-1 mb-2.5' }, attrs.title),
  slots.default?.(),
])

const socials = [
  { label: 'GitHub', url: 'https://github.com/bishworup11' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bishworup-mollik/' },
  { label: 'Codeforces', url: 'https://codeforces.com/profile/bishworup11' },
  { label: 'LeetCode', url: 'https://leetcode.com/bishworup11' },
]

const experience = [
  {
    title: 'Software Engineer',
    company: 'AppsCode',
    loc: 'Dhaka, Bangladesh',
    date: 'Feb 2025 — Present',
    bullets: [
      'Building production web applications with <strong>Vue 3, Pinia, Nuxt,</strong> and <strong>ConnectRPC</strong>',
      'Developing Next.js integrations and maintaining cross-platform UI consistency at scale',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'AppifyLab',
    loc: 'Sylhet, Bangladesh',
    date: 'Sep 2024 — Jan 2025',
    bullets: [
      'Developed full-stack features with <strong>React, Redux Toolkit, Next.js,</strong> and <strong>AdonisJS</strong>',
      'Designed and maintained relational schemas using <strong>MySQL</strong> and <strong>Lucid ORM</strong>',
    ],
  },
]

const education = [
  { degree: 'B.Sc. in Computer Science & Engineering', school: 'Bangabandhu Sheikh Mujibur Rahman Science and Technology University', date: 'Jan 2019 — Apr 2024' },
  { degree: 'Higher Secondary Certificate (HSC)', school: 'MC College, Sylhet', date: 'Aug 2016 — Aug 2018' },
]

const skills = [
  { label: 'Languages', value: 'C, C++, Java, JavaScript, TypeScript, Python, HTML, CSS' },
  { label: 'Frontend', value: 'Vue 3, Nuxt, Pinia, React, Next.js, Redux Toolkit, Tailwind CSS' },
  { label: 'Backend', value: 'Node.js, AdonisJS, ConnectRPC, Lucid ORM, REST APIs' },
  { label: 'Databases', value: 'PostgreSQL, MySQL' },
  { label: 'Tools', value: 'Git, GitHub, Docker, Linux, Postman, LaTeX' },
]

const projects = [
  { title: 'Social Media Platform', stack: 'React · AdonisJS · MySQL', desc: 'Full-stack social networking application with real-time feed, user authentication, and responsive UI' },
  { title: 'React Authorization System', stack: 'React · Tailwind CSS', desc: 'Role-based access control with JWT token handling and a swappable API contract for rapid prototyping' },
  { title: 'Blood Donation Management', stack: 'Java Swing · MySQL', desc: 'Desktop GUI application for donor registration, blood-stock management, and hospital request tracking' },
  { title: 'Duck Hunting', stack: 'C · IGraphics', desc: '2D arcade game featuring animated sprites, collision detection, scoring system, and difficulty scaling' },
]

const achievements = [
  'Ranked <strong>102nd</strong> at ICPC Asia Dhaka Regional 2022, Green University of Bangladesh — Team <em>BSMRSTU_pushback</em>',
  'Ranked <strong>120th</strong> at ICPC Asia Dhaka Regional 2023, BUBT — Team <em>BSMRSTU_Megatron</em>',
  'Ranked <strong>24th</strong> at Inter-University Hackathon 2024 — Team <em>BSMRSTU_Perfect_Number</em>',
]

const solving = [
  { platform: 'Codeforces', url: 'https://codeforces.com/profile/bishworup11', detail: '@bishworup11 · Max rating 1560 (Specialist) · 800+ solved' },
  { platform: 'LeetCode', url: 'https://leetcode.com/bishworup11', detail: '@bishworup11 · 100+ solved' },
  { platform: 'GeeksforGeeks', url: 'https://auth.geeksforgeeks.org/user/bishworupmollik', detail: '@bishworupmollik · 150+ solved' },
  { platform: 'Beecrowd', url: 'https://judge.beecrowd.com', detail: '@bishworup11 · 90+ solved' },
]
</script>

<style scoped>
.cv-bg {
  background: #d6d6d0;
  font-family: var(--font-serif);
}
.font-serif { font-family: var(--font-serif); }
.font-mono { font-family: var(--font-mono); }

@media print {
  .cv-bg { background: #fff; padding: 0; }
  .paper { box-shadow: none; max-width: 100%; padding: 1.6cm 1.8cm; }
  @page { margin: 0; size: A4; }
}
</style>
