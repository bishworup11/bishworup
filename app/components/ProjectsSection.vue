<template>
  <section id="projects" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <!-- Heading -->
      <div class="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div class="reveal">
          <span class="eyebrow">Selected Work</span>
          <h2 class="h2-display">Projects &amp; builds.</h2>
          <p class="lede">A selection of things I've built — from full-stack products to systems-level experiments.</p>
        </div>
        <a
          href="https://github.com/bishworup11"
          target="_blank" rel="noopener"
          class="hidden sm:inline-flex items-center gap-2 text-[0.82rem] font-mono text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors reveal reveal-delay-2"
        >
          View all on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </a>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-5">
        <article
          v-for="(p, i) in projects" :key="p.title"
          class="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all duration-300 reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <!-- Thumb -->
          <div class="relative h-52 overflow-hidden" :style="{ background: p.bg }">
            <!-- Grid overlay -->
            <div class="absolute inset-0 opacity-20 grid-lines"></div>
            <!-- Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-7xl opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" style="filter: saturate(1.2)">{{ p.icon }}</div>
            </div>
            <!-- Type badge -->
            <div class="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[0.7rem] font-mono text-white/80">
              <span class="w-1.5 h-1.5 rounded-full" :style="{ background: p.dot }"></span>
              {{ p.type }}
            </div>
          </div>

          <!-- Body -->
          <div class="p-6">
            <div class="flex items-start justify-between gap-4">
              <h3 class="font-head font-semibold text-lg tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{{ p.title }}</h3>
              <div class="shrink-0 flex items-center gap-2">
                <a :href="p.github" target="_blank" rel="noopener" aria-label="View source on GitHub"
                   class="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.1.82-.26.82-.58 0-.28-.01-1.23-.02-2.24-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener" aria-label="Open live demo"
                   class="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </a>
              </div>
            </div>
            <p class="mt-2 text-[0.92rem] leading-relaxed text-[var(--text-dim)]">{{ p.desc }}</p>
            <div class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="t in p.tags" :key="t" class="pill">{{ t }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Rick & Morty Explorer',
    type: 'SPA · Live',
    dot: '#42B883',
    icon: '◍',
    bg: 'radial-gradient(circle at 35% 30%, #0a3530 0%, #061614 70%)',
    desc: 'Vue 3 + TypeScript SPA consuming the Rick & Morty REST API. Vuex state, Vue Router with auth guards, token-based login, and Naive UI components.',
    tags: ['Vue 3', 'TypeScript', 'Vuex', 'Vue Router', 'Naive UI', 'Vite'],
    github: 'https://github.com/bishworup11/rick-and-morty-api-vue-js',
    demo: 'https://rick-and-morty-api-vue-js.vercel.app',
  },
  {
    title: 'Chunked S3 Uploader',
    type: 'Backend · Systems',
    dot: '#FF9900',
    icon: '◔',
    bg: 'radial-gradient(circle at 60% 40%, #2a1a05 0%, #150a02 70%)',
    desc: 'Multipart upload service that splits large files into parallel chunks via presigned URLs. Node.js backend issues credentials, Vue frontend streams chunks directly to MinIO (S3-compatible).',
    tags: ['Node.js', 'Vue.js', 'MinIO', 'S3', 'Presigned URLs', 'Docker'],
    github: 'https://github.com/bishworup11/multipart-file-upload-s3',
  },
  {
    title: 'Social Media Platform',
    type: 'Full-stack',
    dot: '#9333EA',
    icon: '◐',
    bg: 'radial-gradient(circle at 30% 20%, #1e1235 0%, #0a0a14 70%)',
    desc: 'Social networking app with real-time feed, user auth, and a responsive UI. React on the client, AdonisJS REST API on the server.',
    tags: ['React', 'Redux Toolkit', 'AdonisJS', 'MySQL', 'Lucid ORM'],
    github: 'https://github.com/bishworup11',
  },
  {
    title: 'React Authorization',
    type: 'Frontend',
    dot: '#06B6D4',
    icon: '◎',
    bg: 'radial-gradient(circle at 70% 30%, #0e2a2a 0%, #081015 70%)',
    desc: 'Production-ready auth system with role-based access control, JWT token handling, and a drop-in API contract for quick prototyping.',
    tags: ['React', 'Tailwind CSS', 'JWT', 'RBAC'],
    github: 'https://github.com/bishworup11',
  },
  {
    title: 'Quiz App',
    type: 'SPA · Live',
    dot: '#42B883',
    icon: '◑',
    bg: 'radial-gradient(circle at 50% 30%, #0e2440 0%, #050a18 70%)',
    desc: 'Interactive quiz app built with the Vue 3 Composition API. Animated question transitions, dynamic score tracking, and Vue Router-driven flow.',
    tags: ['Vue 3', 'TypeScript', 'Composition API', 'Vue Router', 'Vite'],
    github: 'https://github.com/bishworup11/QuizApp',
    demo: 'https://quiz-app-bishworup-molliks-projects.vercel.app',
  },
  {
    title: 'Bangla Fake News ML',
    type: 'ML · NLP',
    dot: '#FFD43B',
    icon: '◊',
    bg: 'radial-gradient(circle at 30% 60%, #2a2010 0%, #15100a 70%)',
    desc: 'Machine learning pipeline for detecting fake news in Bangla. Trained classifiers on a curated 8K-sample corpus (7K authentic, 1K fake) — feature extraction and supervised learning end-to-end.',
    tags: ['Python', 'Jupyter', 'NLP', 'scikit-learn', 'Bangla'],
    github: 'https://github.com/bishworup11/Bangla_Fake_News_ML',
  },
  {
    title: 'Blood Donation Management',
    type: 'Desktop',
    dot: '#F05032',
    icon: '◉',
    bg: 'radial-gradient(circle at 40% 60%, #2a0f0f 0%, #140808 70%)',
    desc: 'Desktop app for managing donor records, blood stock, and hospital requests. Full GUI built in Java Swing with MySQL persistence.',
    tags: ['Java', 'Swing', 'MySQL', 'JDBC'],
    github: 'https://github.com/bishworup11',
  },
  {
    title: 'Duck Hunting',
    type: 'Game',
    dot: '#FCC624',
    icon: '◈',
    bg: 'radial-gradient(circle at 60% 40%, #12221a 0%, #08140d 70%)',
    desc: 'Classic 2D duck-hunting game written in C using the IGraphics library — animated sprites, collision detection, and difficulty scaling.',
    tags: ['C', 'IGraphics', 'Game Loop'],
    github: 'https://github.com/bishworup11/Duck-Hunting',
  },
]
</script>
