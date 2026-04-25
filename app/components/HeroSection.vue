<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 -z-10">
      <!-- Grid -->
      <div class="absolute inset-0 opacity-[0.35] grid-lines [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_40%,transparent_100%)]"></div>
      <!-- Glows -->
      <div
        class="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-[120px] opacity-60"
        style="background: var(--accent-glow); animation: drift 14s ease-in-out infinite alternate"
      ></div>
      <div
        class="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] opacity-50"
        style="background: var(--accent-2-soft); animation: drift 16s ease-in-out infinite alternate; animation-delay: -5s"
      ></div>
    </div>

    <div class="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
      <div class="max-w-3xl">
        <!-- Availability -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[0.72rem] font-mono text-[var(--text-dim)] mb-8 opacity-0"
          style="animation: fadeUp 0.7s 0.1s var(--ease) forwards"
        >
          <span class="relative flex w-2 h-2">
            <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>

        <!-- Name -->
        <h1
          class="font-display opacity-0"
          style="animation: fadeUp 0.7s 0.25s var(--ease) forwards; font-size: clamp(2.75rem, 7.5vw, 5.5rem)"
        >
          <span class="block text-[var(--text)]">Bishworup</span>
          <span class="block gradient-text">Mollik.</span>
        </h1>

        <!-- Role -->
        <p
          class="mt-6 text-xl md:text-2xl font-medium text-[var(--text-dim)] opacity-0"
          style="animation: fadeUp 0.7s 0.4s var(--ease) forwards"
        >
          <span class="text-[var(--text)]">Software Engineer</span>
          <span class="text-[var(--muted)] mx-2">/</span>
          <span class="text-[var(--accent)]">{{ displayed }}</span>
          <span class="inline-block w-[2px] h-[1em] align-middle ml-1" style="background: var(--accent); animation: blink 1s step-end infinite"></span>
        </p>

        <!-- Bio -->
        <p
          class="mt-8 text-base md:text-lg leading-relaxed text-[var(--text-dim)] max-w-2xl opacity-0"
          style="animation: fadeUp 0.7s 0.55s var(--ease) forwards"
        >
          I craft production-grade web applications at <span class="text-[var(--text)] font-medium">AppsCode</span>, focusing on Vue 3, Nuxt, and modern JavaScript. Formerly ICPC regionalist and competitive programmer with 1500+ problems solved.
        </p>

        <!-- CTAs -->
        <div
          class="mt-10 flex flex-wrap gap-3 opacity-0"
          style="animation: fadeUp 0.7s 0.7s var(--ease) forwards"
        >
          <a href="#projects" class="btn btn-solid">
            View my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" class="btn btn-ghost">Get in touch</a>
        </div>

        <!-- Meta row -->
        <div
          class="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] font-mono text-[var(--muted)] opacity-0"
          style="animation: fadeUp 0.7s 0.85s var(--ease) forwards"
        >
          <span class="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Sylhet, Bangladesh
          </span>
          <span class="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            UTC+6
          </span>
          <a href="https://codeforces.com/profile/bishworup11" target="_blank" rel="noopener" class="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            CF Specialist · 1560
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-0" style="animation: fadeUp 0.7s 1.2s var(--ease) forwards">
      <span class="text-[0.7rem] font-mono text-[var(--muted)] tracking-wider uppercase">Scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-[var(--muted)] to-transparent"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const roles = ['Full-Stack Developer', 'Vue & Nuxt Specialist', 'Problem Solver', 'React Developer']
const displayed = ref('')
let roleIdx = 0, charIdx = 0, deleting = false

onMounted(() => setTimeout(tick, 1200))

function tick() {
  const current = roles[roleIdx]
  if (!deleting) {
    displayed.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) { deleting = true; setTimeout(tick, 2000); return }
  } else {
    displayed.value = current.slice(0, --charIdx)
    if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length }
  }
  setTimeout(tick, deleting ? 40 : 70)
}
</script>
