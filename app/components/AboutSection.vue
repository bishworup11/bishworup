<template>
  <section id="about" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div class="mb-14 reveal">
        <span class="eyebrow">About</span>
        <h2 class="h2-display">A focused builder who values clarity and craft.</h2>
        <p class="lede">A bit about who I am, how I work, and what I care about.</p>
      </div>

      <div class="grid lg:grid-cols-12 gap-x-16 gap-y-12 mb-16">
        <!-- Bio -->
        <div class="lg:col-span-7 space-y-4 text-[var(--text-dim)] leading-relaxed text-[1.05rem] reveal reveal-delay-1">
          <p>
            I'm Bishworup Mollik, a frontend-focused software engineer from Bangladesh. I build web applications in
            <span class="text-[var(--text)] font-medium">Vue 3, Nuxt, and TypeScript</span>, and I'm happiest when a complicated
            product turns into an interface people find simple to use.
          </p>
          <p>
            Right now I'm at <span class="text-[var(--text)] font-medium">AppsCode</span>, working on the console for its cloud
            platform. I care about predictable state, typed APIs, and reusable components, so a large app keeps a consistent
            feel as it grows.
          </p>
          <p>
            Outside work I do competitive programming: 1,500+ problems solved and two ICPC Asia Regionals. It taught me to care
            about correctness, think about edge cases early, and keep abstractions small.
          </p>
        </div>

        <!-- Quick facts -->
        <div class="lg:col-span-5 reveal reveal-delay-2">
          <dl class="card divide-y divide-[var(--border)]">
            <div v-for="f in facts" :key="f.label" class="flex items-baseline justify-between gap-6 px-5 py-4">
              <dt class="text-[0.72rem] font-mono uppercase tracking-wider text-[var(--muted)] whitespace-nowrap">{{ f.label }}</dt>
              <dd class="text-[0.92rem] text-[var(--text)] text-right">{{ f.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Stats strip -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--border)] reveal reveal-delay-2">
        <div
          v-for="s in stats" :key="s.label"
          class="group relative p-6 md:p-8 bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors"
        >
          <div class="flex items-baseline gap-1">
            <span class="font-display text-3xl md:text-4xl text-[var(--text)]" :data-count="s.count">0</span>
            <span v-if="s.suffix" class="font-display text-xl md:text-2xl text-[var(--accent)]">{{ s.suffix }}</span>
          </div>
          <div class="mt-2 text-[0.78rem] font-mono uppercase tracking-wider text-[var(--muted)]">{{ s.label }}</div>
          <div class="absolute top-5 right-5 w-1 h-1 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const facts = [
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
  { label: 'Role', value: 'Software Engineer @ AppsCode' },
  { label: 'Focus', value: 'Vue 3 · Nuxt · TypeScript' },
  { label: 'Education', value: 'B.Sc. in CSE, GSTU' },
]

const stats = [
  { count: 1500, suffix: '+', label: 'Problems Solved' },
  { count: 1560, suffix: '', label: 'Max CF Rating' },
  { count: 2, suffix: 'y+', label: 'Experience' },
  { count: 100, suffix: '+', label: 'PRs at AppsCode' },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target as HTMLElement)
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el))
})

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.count!)
  const start = performance.now()
  const step = (now: number) => {
    const t = Math.min((now - start) / 1500, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = Math.round(eased * target).toLocaleString()
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
</script>
