<template>
  <section id="hero" class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 opacity-[0.35] grid-lines [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_40%,transparent_100%)]"></div>
      <div
        class="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-[120px] opacity-60"
        style="background: var(--accent-glow); animation: drift 14s ease-in-out infinite alternate"
      ></div>
      <div
        class="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] opacity-50"
        style="background: var(--accent-2-soft); animation: drift 16s ease-in-out infinite alternate; animation-delay: -5s"
      ></div>
    </div>

    <div class="flex-1 flex items-center max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16">
      <div class="w-full grid lg:grid-cols-12 gap-x-12 gap-y-14 items-center">
        <!-- Intro -->
        <div class="lg:col-span-7">
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

          <h1
            class="font-display opacity-0"
            style="animation: fadeUp 0.7s 0.25s var(--ease) forwards; font-size: clamp(2.75rem, 7.5vw, 5.5rem)"
          >
            <span class="block text-[var(--text)]">Bishworup</span>
            <span class="block gradient-text">Mollik.</span>
          </h1>

          <p
            class="mt-6 text-xl md:text-2xl font-medium text-[var(--text-dim)] opacity-0"
            style="animation: fadeUp 0.7s 0.4s var(--ease) forwards"
          >
            <span class="text-[var(--text)]">Software Engineer</span>
            <span class="text-[var(--muted)] mx-2">/</span>
            <span class="text-[var(--accent)]">{{ displayed }}</span>
            <span class="inline-block w-[2px] h-[1em] align-middle ml-1" style="background: var(--accent); animation: blink 1s step-end infinite"></span>
          </p>

          <p
            class="mt-8 text-base md:text-lg leading-relaxed text-[var(--text-dim)] max-w-xl opacity-0"
            style="animation: fadeUp 0.7s 0.55s var(--ease) forwards"
          >
            I build the consoles behind <span class="text-[var(--text)] font-medium">AppsCode Cloud Platform</span> with Vue 3,
            TypeScript, and typed APIs. Two-time ICPC Asia Regionalist, 1,500+ problems solved.
          </p>

          <div
            class="mt-10 flex flex-wrap gap-3 opacity-0"
            style="animation: fadeUp 0.7s 0.7s var(--ease) forwards"
          >
            <a href="#experience" class="btn btn-solid">
              See my experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </a>
            <NuxtLink to="/cv" class="btn btn-ghost">
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Profile card -->
        <div
          class="lg:col-span-5 opacity-0"
          style="animation: fadeUp 0.8s 0.6s var(--ease) forwards"
        >
          <div class="relative">
            <div class="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60 pointer-events-none" style="background: var(--accent-soft)"></div>
            <div class="relative rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elev)]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
              <!-- Window bar -->
              <div class="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                <span class="ml-3 text-[0.72rem] font-mono text-[var(--muted)]">bishworup.ts</span>
              </div>
              <!-- Code -->
              <pre class="px-5 py-5 text-[0.8rem] sm:text-[0.84rem] leading-[1.85] font-mono overflow-x-auto no-scrollbar"><code><span class="tk-kw">export const</span> <span class="tk-var">engineer</span> = {
<template v-for="row in profile" :key="row.k">  <span class="tk-key">{{ row.k }}</span>: <template v-if="Array.isArray(row.v)">[<template v-for="(item, i) in row.v" :key="item"><span class="tk-str">'{{ item }}'</span><template v-if="i < row.v.length - 1">, </template></template>]</template><span v-else-if="typeof row.v === 'boolean'" class="tk-kw">{{ row.v }}</span><span v-else class="tk-str">'{{ row.v }}'</span>,
</template>}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div class="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--border)] opacity-0"
        style="animation: fadeUp 0.7s 0.9s var(--ease) forwards"
      >
        <div v-for="s in stats" :key="s.label" class="p-5 md:p-6 bg-[var(--bg)]/80 backdrop-blur">
          <div class="flex items-baseline gap-1">
            <span class="font-display text-2xl md:text-3xl text-[var(--text)]" :data-count="s.count">{{ s.count.toLocaleString('en-US') }}</span>
            <span v-if="s.suffix" class="font-display text-lg md:text-xl text-[var(--accent)]">{{ s.suffix }}</span>
          </div>
          <div class="mt-1.5 text-[0.72rem] font-mono uppercase tracking-wider text-[var(--muted)]">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const profile: { k: string, v: string | string[] | boolean }[] = [
  { k: 'role', v: 'Software Engineer' },
  { k: 'company', v: 'AppsCode' },
  { k: 'base', v: 'Dhaka, Bangladesh' },
  { k: 'stack', v: ['Vue 3', 'Nuxt', 'TypeScript'] },
  { k: 'shipping', v: 'AppsCode Cloud Platform' },
  { k: 'education', v: 'B.Sc. CSE, GSTU' },
  { k: 'openToWork', v: true },
]

const stats = [
  { count: 2, suffix: 'y+', label: 'Experience' },
  { count: 100, suffix: '+', label: 'PRs at AppsCode' },
  { count: 1500, suffix: '+', label: 'Problems Solved' },
  { count: 1560, suffix: '', label: 'Max CF Rating' },
]

const roles = ['Full-Stack Developer', 'Vue & Nuxt Specialist', 'Problem Solver', 'React Developer']
const displayed = ref('')
let roleIdx = 0, charIdx = 0, deleting = false
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  timer = setTimeout(tick, 1200)
  // Count up once the strip has faded in
  setTimeout(() => {
    document.querySelectorAll<HTMLElement>('#hero [data-count]').forEach(animateCounter)
  }, 2000)
})
onBeforeUnmount(() => clearTimeout(timer))

function tick() {
  const current = roles[roleIdx]!
  if (!deleting) {
    displayed.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) { deleting = true; timer = setTimeout(tick, 2000); return }
  } else {
    displayed.value = current.slice(0, --charIdx)
    if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length }
  }
  timer = setTimeout(tick, deleting ? 40 : 70)
}

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.count!)
  const start = performance.now()
  const step = (now: number) => {
    const t = Math.min((now - start) / 1400, 1)
    el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target).toLocaleString('en-US')
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
</script>

<style scoped>
.tk-kw  { color: var(--accent); }
.tk-var { color: var(--text); }
.tk-key { color: var(--accent-2); }
.tk-str { color: oklch(76% 0.13 150); }
:root[data-theme='light'] .tk-str { color: oklch(52% 0.13 150); }
</style>
