<template>
  <section id="about" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <!-- Heading -->
      <div class="grid lg:grid-cols-12 gap-12 mb-16">
        <div class="lg:col-span-5 reveal">
          <span class="eyebrow">About</span>
          <h2 class="h2-display">
            A focused builder who<br/>values clarity and craft.
          </h2>
        </div>
        <div class="lg:col-span-7 lg:pt-4 reveal reveal-delay-1">
          <p class="text-[var(--text-dim)] leading-relaxed text-[1.05rem]">
            I'm a Software Engineer from Bangladesh with a B.Sc. in Computer Science from BSMRSTU. I specialize in turning complex product requirements into elegant, performant web applications — with a particular focus on the Vue & Nuxt ecosystem.
          </p>
          <p class="text-[var(--text-dim)] leading-relaxed text-[1.05rem] mt-4">
            Alongside engineering, I'm an active competitive programmer. The discipline of tight feedback loops, correctness under constraints, and minimal abstraction has shaped the way I write software.
          </p>
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
const stats = [
  { count: 1500, suffix: '+', label: 'Problems Solved' },
  { count: 1560, suffix: '', label: 'Max CF Rating' },
  { count: 2, suffix: 'y+', label: 'Experience' },
  { count: 4, suffix: '', label: 'Projects Shipped' },
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
