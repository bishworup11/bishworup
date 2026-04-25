<template>
  <section id="experience" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div class="mb-14 reveal">
        <span class="eyebrow">Career</span>
        <h2 class="h2-display">Experience &amp; Education.</h2>
        <p class="lede">Places I've worked, what I studied, and the tech I've shipped with.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-x-16 gap-y-12">
        <div v-for="(col, ci) in columns" :key="col.heading" class="reveal" :class="`reveal-delay-${ci + 1}`">
          <div class="flex items-baseline gap-3 mb-8">
            <div class="w-6 h-px bg-[var(--border-strong)]"></div>
            <h3 class="text-[0.72rem] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">
              {{ col.heading }}
            </h3>
          </div>

          <ol class="relative border-l border-[var(--border)] ml-2 space-y-10">
            <li v-for="item in col.items" :key="item.role" class="group relative pl-8">
              <!-- Dot -->
              <span class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--border-strong)] group-hover:border-[var(--accent)] transition-colors"></span>

              <time class="block text-[0.72rem] font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5">
                {{ item.date }}
              </time>
              <h4 class="font-head font-semibold text-lg text-[var(--text)] tracking-tight">{{ item.role }}</h4>
              <div class="mt-1 flex items-center gap-2 text-[0.92rem] text-[var(--text-dim)]">
                <span class="font-medium text-[var(--accent)]">{{ item.company }}</span>
                <span class="text-[var(--muted)]">·</span>
                <span>{{ item.loc }}</span>
              </div>
              <p v-if="item.desc" class="mt-3 text-[0.9rem] text-[var(--text-dim)] leading-relaxed max-w-xl">
                {{ item.desc }}
              </p>
              <div v-if="item.tags" class="mt-4 flex flex-wrap gap-1.5">
                <span v-for="t in item.tags" :key="t" class="pill">{{ t }}</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const columns = [
  {
    heading: 'Work',
    items: [
      {
        date: 'Feb 2025 — Present',
        role: 'Software Engineer',
        company: 'AppsCode',
        loc: 'Dhaka, Bangladesh',
        desc: 'Building production web applications with Vue 3, Nuxt, and ConnectRPC. Developing Next.js integrations and maintaining cross-platform UI consistency at scale.',
        tags: ['Vue 3', 'Pinia', 'Nuxt', 'Next.js', 'ConnectRPC'],
      },
      {
        date: 'Sep 2024 — Jan 2025',
        role: 'Junior Software Engineer',
        company: 'AppifyLab',
        loc: 'Sylhet, Bangladesh',
        desc: 'Developed full-stack features with React, Redux Toolkit, and AdonisJS. Designed and maintained relational schemas with MySQL and Lucid ORM.',
        tags: ['React', 'Redux', 'Next.js', 'AdonisJS', 'MySQL'],
      },
    ],
  },
  {
    heading: 'Education',
    items: [
      {
        date: 'Jan 2019 — Apr 2024',
        role: 'B.Sc. in Computer Science & Engineering',
        company: 'BSMRSTU',
        loc: 'Gopalganj, Bangladesh',
        desc: 'Focused on algorithms, data structures, and systems. Represented the university at ICPC Asia Regionals twice.',
      },
      {
        date: 'Aug 2016 — Aug 2018',
        role: 'Higher Secondary Certificate (HSC)',
        company: 'MC College',
        loc: 'Sylhet, Bangladesh',
      },
    ],
  },
]
</script>
