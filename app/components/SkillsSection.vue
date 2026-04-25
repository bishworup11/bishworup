<template>
  <section id="skills" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <!-- Heading -->
      <div class="mb-14 reveal">
        <span class="eyebrow">Tech Stack</span>
        <h2 class="h2-display">Tools I reach for daily.</h2>
        <p class="lede">
          A curated set of languages, frameworks, and tools I've used across production codebases and personal projects.
        </p>
      </div>

      <!-- Grouped skills -->
      <div class="space-y-10">
        <div v-for="(group, gi) in groups" :key="group.title" class="reveal" :class="`reveal-delay-${gi + 1}`">
          <div class="flex items-baseline gap-3 mb-4">
            <div class="w-6 h-px bg-[var(--border-strong)]"></div>
            <h3 class="text-[0.72rem] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">
              {{ group.title }}
            </h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div
              v-for="skill in group.items" :key="skill.name"
              class="skill group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-hover)]"
              :style="`--brand:${skill.color}`"
            >
              <!-- Subtle brand accent on hover -->
              <div class="absolute inset-x-3 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style="background: linear-gradient(90deg, transparent, var(--brand), transparent)"></div>

              <div class="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" v-html="skill.svg"></div>
              <span class="text-[0.8rem] font-medium text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', color: '#F7DF1E', svg: svgJS() },
      { name: 'TypeScript', color: '#3178C6', svg: svgTS() },
      { name: 'Python',     color: '#3776AB', svg: svgPython() },
      { name: 'Java',       color: '#F89820', svg: svgJava() },
      { name: 'C / C++',    color: '#00599C', svg: svgC() },
      { name: 'HTML / CSS', color: '#E34F26', svg: svgHTML() },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'Vue 3',     color: '#42B883', svg: svgVue() },
      { name: 'Nuxt',      color: '#00DC82', svg: svgNuxt() },
      { name: 'React',     color: '#61DAFB', svg: svgReact() },
      { name: 'Next.js',   color: '#ffffff', svg: svgNext() },
      { name: 'Pinia',     color: '#FFD43B', svg: svgPinia() },
      { name: 'Tailwind',  color: '#06B6D4', svg: svgTailwind() },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Node.js',    color: '#3E863D', svg: svgNode() },
      { name: 'AdonisJS',   color: '#5A45FF', svg: svgAdonis() },
      { name: 'ConnectRPC', color: '#A855F7', svg: svgConnect() },
      { name: 'PostgreSQL', color: '#336791', svg: svgPG() },
      { name: 'MySQL',      color: '#4479A1', svg: svgMySQL() },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git',     color: '#F05032', svg: svgGit() },
      { name: 'GitHub',  color: '#ffffff', svg: svgGitHub() },
      { name: 'Docker',  color: '#2496ED', svg: svgDocker() },
      { name: 'Linux',   color: '#FCC624', svg: svgLinux() },
      { name: 'Postman', color: '#FF6C37', svg: svgPostman() },
    ],
  },
]

function svgJS() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.5 22.8c.4.7.95 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.52-.95-1.4-1.35l-.48-.2c-1.4-.6-2.32-1.35-2.32-2.94 0-1.46 1.1-2.57 2.83-2.57 1.23 0 2.11.43 2.74 1.56l-1.5.87c-.33-.6-.69-.83-1.24-.83-.57 0-.93.36-.93.83 0 .58.36.82 1.19 1.18l.48.21c1.64.7 2.57 1.42 2.57 3.03 0 1.74-1.37 2.69-3.2 2.69-1.8 0-2.95-.86-3.52-1.98l1.58-.7zM11.9 23c.3.54.58 1 1.24 1 .63 0 1.02-.25 1.02-1.2V16.1H16v6.74c0 1.98-.96 2.88-2.36 2.88-1.27 0-2-.66-2.37-1.46L11.9 23z" fill="#000"/></svg>`
}
function svgTS() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><rect width="32" height="32" rx="6" fill="#3178C6"/><path d="M17.5 13h-4v13H11V13H7v-2h10.5v2z" fill="#fff"/><path d="M22 17c-2.07 0-3.65 1.35-3.65 3.55s1.58 3.65 3.65 3.65c1.25 0 2.65-.7 3.15-2.1l-1.95-.65c-.18.5-.65.8-1.2.8-.7 0-1.25-.5-1.25-1.2s.55-1.25 1.25-1.25c.55 0 1.02.3 1.2.8l1.95-.65C24.65 17.65 23.25 17 22 17z" fill="#fff"/></svg>`
}
function svgPython() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><defs><linearGradient id="py1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3776AB"/><stop offset="1" stop-color="#1e4d7b"/></linearGradient><linearGradient id="py2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#f4a500"/></linearGradient></defs><path d="M16 4c-5 0-4.5 2-4.5 2l.01 2h4.58v.65H9.68c-2 0-3.68 1.18-3.68 4.2s1.5 4.5 3.68 4.5h1.65v-2.43c0-2.12 1.84-4 4.1-4h4.5c1.88 0 3.35-1.55 3.35-3.44v-1.48s.43-4-3-4c-3.43 0-3.78 0-3.78 0s-.5 0-.5 2" fill="url(#py1)"/><path d="M16 28c5 0 4.5-2 4.5-2l-.01-2h-4.58v-.65h6.41c2 0 3.68-1.18 3.68-4.2s-1.5-4.5-3.68-4.5h-1.65v2.43c0 2.12-1.84 4-4.1 4h-4.5c-1.88 0-3.35 1.55-3.35 3.44v1.48s-.43 4 3 4c3.43 0 3.78 0 3.78 0s.5 0 .5-2" fill="url(#py2)"/><circle cx="13" cy="7.5" r="0.9" fill="#fff"/><circle cx="19" cy="24.5" r="0.9" fill="#fff"/></svg>`
}
function svgJava() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M12.5 22c-3 .5-1 1.5 0 1.8 2.5.6 7 .4 9.2-.1 0 0 .7.4 1.5.7-6.2 2.5-14-.1-10.7-2.4M12 18.7c-3.4.8-1.1 1.7 0 2 3 .6 6.5.7 10-.1.6-.3 1.1-.6 1.1-.6l-1.5-.7c-2.8.6-7.3.9-9.6.1-.8-.2-.8-.5 0-.7M20.2 15.1c.3.4.1.8.1.8s3-.8 2.5-2.8c-.5-1.9-3-2-4.8-1.3 0 0 .4.1.7.2 0 0-1.3-.5-1.3.4s1.7 1.5 2.8 2.7" fill="#EA2D2E"/><path d="M19 7s2.2 2.2-2.1 5.6c-3.5 2.7-.8 4.2 0 6-2-1.9-3.5-3.5-2.5-5C16 11.3 20 10 19 7M13 24.4c-2.5.7-4.5 3.3.6 3.6 10.5.6 19-2.6 14.8-4.5 0 0-1 .3-1.4.5 2 1.2-5.7 2.3-13.5.2-.5-.1-.5.2-.5.2" fill="#0074BD"/></svg>`
}
function svgC() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M28 22.4c0 .5-.1.9-.3 1.3-.2.3-.6.7-1 .9l-9.9 5.7c-.4.3-1 .4-1.5.4s-1.1-.1-1.5-.4L3.9 24.7c-.4-.3-.8-.6-1-.9-.2-.4-.3-.8-.3-1.3V11c0-.5.1-.9.3-1.3.2-.3.6-.7 1-.9l9.9-5.7c.4-.3 1-.4 1.5-.4s1.1.1 1.5.4l9.9 5.7c.4.3.8.6 1 .9.2.4.3.8.3 1.3z" fill="#00599C"/><path d="M16.3 26.6c-.3 0-.5 0-.7-.1l-1.7-1c.2 0 .5-.1.7-.3l8.8-5.1c.3-.2.6-.4.9-.7.3-.4.5-.8.5-1.2l.1-1.9V13c0-.4-.1-.8-.3-1.2-.2-.3-.5-.6-.9-.8L14 5c-.2-.1-.4-.2-.7-.3l1.7-1c.2-.1.5-.2.7-.2.3 0 .5 0 .7.1l9.9 5.7c.2.1.4.3.6.5.2.3.3.7.3 1.2v11.4c0 .3-.1.8-.3 1.2-.2.3-.4.5-.6.6l-9.9 5.7c-.2.1-.5.2-.7.2z" fill="#004482"/><path d="M20.4 18.9c-.4.8-1 1.4-1.9 1.9-.8.5-1.8.7-2.7.7s-1.9-.2-2.7-.7c-.8-.5-1.5-1.1-1.9-1.9-.4-.8-.7-1.7-.7-2.7s.2-1.9.7-2.7c.4-.8 1.1-1.4 1.9-1.9.8-.5 1.8-.7 2.7-.7.9 0 1.8.2 2.7.7.8.5 1.4 1.1 1.9 1.9l-2.3 1.3c-.2-.4-.5-.7-.9-.9-.4-.2-.8-.4-1.3-.4-.5 0-.9.1-1.3.3-.4.2-.7.6-.9.9-.2.4-.3.8-.3 1.4 0 .5.1.9.3 1.4.2.4.5.7.9.9.4.2.8.3 1.3.3.5 0 .9-.1 1.3-.4.4-.2.7-.5.9-.9z" fill="#fff"/></svg>`
}
function svgHTML() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M5 3l2.36 25.5L16 31l8.64-2.5L27 3z" fill="#E34F26"/><path d="M16 29.3V5.1h9.1L23.1 27.2z" fill="#EF652A"/><path d="M8.8 9.5h7.2v3H12l.3 2.8h3.7v3H9.5zm.5 5.3H12l.1 1.5 3.9 1v3.1l-6.9-1.9z" fill="#fff"/></svg>`
}
function svgVue() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M2 4h5.5L16 19.5 24.5 4H30L16 28 2 4z" fill="#42B883"/><path d="M8.5 4h5L16 10.5 18.5 4h5L16 19 8.5 4z" fill="#35495E"/></svg>`
}
function svgNuxt() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M17.6 7.2L10 21h7.2l1.6-2.8H12l5.6-9.8L23.8 21H27L17.6 7.2z" fill="#00DC82"/><path d="M10.4 21H5l7.2-12.6L13.8 11l-4.4 7.6H13l-2.6 2.4z" fill="#00DC82" opacity="0.75"/></svg>`
}
function svgReact() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><circle cx="16" cy="16" r="2.2" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.3" fill="none"/><ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.3" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.3" fill="none" transform="rotate(120 16 16)"/></svg>`
}
function svgNext() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><circle cx="16" cy="16" r="14" fill="#000"/><path d="M21.5 9.5v9.2l-7.6-9.2H10v13h2.6v-9.3l9.6 11.5c.6-.4 1.2-.9 1.7-1.4V9.5h-2.4z" fill="#fff"/></svg>`
}
function svgPinia() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><circle cx="16" cy="16" r="14" fill="#FFD43B"/><path d="M16 8c-1.5 2-2 4-2 6s.5 4 2 6c1.5-2 2-4 2-6s-.5-4-2-6z" fill="#35495E"/><circle cx="16" cy="16" r="1.5" fill="#FFD43B"/></svg>`
}
function svgTailwind() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M16 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C17.65 12.81 19.08 14.4 22 14.4c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C20.35 8.59 18.92 7 16 7zM10 14.4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C11.65 20.21 13.08 21.8 16 21.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C14.35 15.99 12.92 14.4 10 14.4z" fill="#06B6D4"/></svg>`
}
function svgNode() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><defs><linearGradient id="nd1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#83CD29"/><stop offset="1" stop-color="#3E863D"/></linearGradient></defs><path d="M16 2.5L4.5 9v14L16 29.5 27.5 23V9L16 2.5z" fill="url(#nd1)"/><path d="M16 2.5L4.5 9l11.5 6.5L27.5 9z" fill="#fff" opacity="0.2"/><path d="M16 15.5L27.5 9v14L16 29.5z" fill="#000" opacity="0.13"/></svg>`
}
function svgAdonis() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M16 3L28 26H4L16 3z" fill="#5A45FF"/><path d="M16 9l7.5 14h-15L16 9z" fill="#fff" opacity="0.18"/><rect x="13.5" y="19" width="5" height="1.6" rx="0.8" fill="#fff"/></svg>`
}
function svgConnect() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><circle cx="16" cy="16" r="14" fill="#A855F7"/><path d="M10 13l6 6 6-6-6-3-6 3z" fill="#fff"/><circle cx="16" cy="11.5" r="1.5" fill="#A855F7"/></svg>`
}
function svgPG() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><ellipse cx="16" cy="10" rx="9" ry="4.5" fill="#336791"/><path d="M7 10v12c0 2.76 4.03 5 9 5s9-2.24 9-5V10" stroke="#336791" stroke-width="2" fill="none"/><ellipse cx="16" cy="10" rx="9" ry="4.5" fill="none" stroke="#8fb5cc" stroke-width="1"/><path d="M7 16c0 2.76 4.03 5 9 5s9-2.24 9-5" stroke="#8fb5cc" stroke-width="1" fill="none"/><path d="M7 13c0 2.76 4.03 5 9 5s9-2.24 9-5" stroke="#8fb5cc" stroke-width="1" fill="none" opacity="0.5"/></svg>`
}
function svgMySQL() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><ellipse cx="16" cy="9" rx="9" ry="4" fill="#4479A1"/><path d="M7 9v14c0 2.21 4.03 4 9 4s9-1.79 9-4V9" stroke="#4479A1" stroke-width="2" fill="none"/><ellipse cx="16" cy="9" rx="9" ry="4" fill="none" stroke="#88b8d8" stroke-width="1"/><path d="M7 15c0 2.21 4.03 4 9 4s9-1.79 9-4" stroke="#88b8d8" stroke-width="1" fill="none"/><path d="M7 12c0 2.21 4.03 4 9 4s9-1.79 9-4" stroke="#88b8d8" stroke-width="1" fill="none" opacity="0.5"/></svg>`
}
function svgGit() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.54 0l-2.54 2.54 3.22 3.22a2.14 2.14 0 012.71 2.72l3.1 3.1a2.14 2.14 0 11-1.28 1.28l-2.9-2.9v7.62a2.14 2.14 0 11-1.76.06V12.3a2.14 2.14 0 01-1.16-2.8L10.8 6.3 2.53 14.53a1.8 1.8 0 000 2.54l12 12a1.8 1.8 0 002.54 0l12.4-12.4a1.8 1.8 0 000-2.54z" fill="#F05032"/></svg>`
}
function svgGitHub() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path fill="currentColor" class="text-[var(--text)]" d="M16 3C8.8 3 3 8.9 3 16.2c0 5.85 3.77 10.8 8.99 12.54.66.12.9-.28.9-.62v-2.2c-3.66.8-4.43-1.78-4.43-1.78-.6-1.53-1.46-1.94-1.46-1.94-1.2-.83.09-.8.09-.8 1.32.1 2.01 1.38 2.01 1.38 1.17 2.04 3.08 1.45 3.83 1.1.12-.87.46-1.46.84-1.79-2.92-.34-5.99-1.48-5.99-6.57 0-1.45.51-2.64 1.36-3.57-.14-.34-.59-1.69.13-3.53 0 0 1.1-.36 3.63 1.36a12.4 12.4 0 013.3-.45c1.12 0 2.24.15 3.3.45 2.52-1.72 3.63-1.36 3.63-1.36.72 1.84.27 3.2.13 3.53.84.93 1.36 2.12 1.36 3.57 0 5.1-3.08 6.23-6.02 6.56.48.42.9 1.22.9 2.46v3.65c0 .34.24.75.9.62C25.24 27 29 22.05 29 16.2 29 8.9 23.2 3 16 3z"/></svg>`
}
function svgDocker() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><g fill="#2496ED"><rect x="6" y="14.5" width="3" height="3" rx="0.3"/><rect x="9.5" y="14.5" width="3" height="3" rx="0.3"/><rect x="13" y="14.5" width="3" height="3" rx="0.3"/><rect x="16.5" y="14.5" width="3" height="3" rx="0.3"/><rect x="20" y="14.5" width="3" height="3" rx="0.3"/><rect x="9.5" y="11" width="3" height="3" rx="0.3"/><rect x="13" y="11" width="3" height="3" rx="0.3"/><rect x="16.5" y="11" width="3" height="3" rx="0.3"/><rect x="13" y="7.5" width="3" height="3" rx="0.3"/><path d="M28.5 16.5c-.6-.4-2-.6-3-.5-.2-1.2-.9-2.2-2-3l-.5-.4-.4.5c-.7 1-1 2.4-.5 3.5-.4.2-1 .4-1.7.4H3.5c-.3 1.5 0 6 4 8.5 3 2 6.5 2.5 10.5 2.5 8 0 13-4 15-10 1 0-1-.5-1.5-.6 0-.5-.5-.8-1-.9-.7-.1-1.6-.1-2 .1z"/></g></svg>`
}
function svgLinux() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M16 3C10.5 3 8 8 8 13c0 3 1 5.5 2.5 7.5L9 24h14l-1.5-3.5C23 18.5 24 16 24 13c0-5-2.5-10-8-10z" fill="#FCC624"/><circle cx="12.5" cy="12" r="1.4" fill="#000"/><circle cx="19.5" cy="12" r="1.4" fill="#000"/><path d="M13 17s1 1.5 3 1.5 3-1.5 3-1.5" stroke="#000" stroke-width="1.2" stroke-linecap="round" fill="none"/><rect x="10.5" y="23.5" width="11" height="3" rx="1.5" fill="#333"/></svg>`
}
function svgPostman() {
  return `<svg viewBox="0 0 32 32" width="40" height="40"><circle cx="16" cy="16" r="13" fill="#FF6C37"/><path d="M22 11c-1.5-1.5-4-1.5-5.5 0l-5 5c-.3.3-.3.8 0 1.1l2.4 2.4c.3.3.8.3 1.1 0l5-5c1.5-1.5 1.5-4 0-5.5zm-3.5 6.5l-1.5-1.5 3.5-3.5c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1L19 18l-.5-.5z" fill="#fff"/></svg>`
}

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.15 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.skill:hover { border-color: color-mix(in srgb, var(--brand) 50%, var(--border)); }
</style>
