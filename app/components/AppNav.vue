<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 border-b transition-all duration-300"
    :class="[
      scrolled || open
        ? 'py-3 border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl'
        : 'py-5 border-transparent bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-2.5">
        <AppLogo :size="36" :delay="1.6" />
        <span class="hidden sm:inline font-head font-medium text-sm tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
          Bishworup Mollik
        </span>
      </NuxtLink>

      <!-- Links -->
      <div class="hidden md:flex items-center gap-1 p-1 rounded-full border border-[var(--border)] bg-[var(--bg)]/40 backdrop-blur">
        <a
          v-for="link in navLinks" :key="link.id" :href="`#${link.id}`"
          class="relative px-3 lg:px-3.5 py-1.5 rounded-full text-[0.8rem] font-medium transition-colors"
          :class="active === link.id
            ? 'text-[var(--text)] bg-[var(--surface-hover)]'
            : 'text-[var(--text-dim)] hover:text-[var(--text)]'"
        >
          <span class="hidden lg:inline font-mono text-[0.65rem] mr-1" :class="active === link.id ? 'text-[var(--accent)]' : 'text-[var(--muted)]'">{{ link.num }}</span>
          {{ link.label }}
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <NuxtLink
          to="/cv"
          class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[0.82rem] font-medium rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
        >
          Resume
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </NuxtLink>
        <button
          class="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] transition-all"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <svg v-if="isDark" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </button>
        <button
          class="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          :aria-expanded="open"
          @click="open = !open"
        >
          <svg v-if="!open" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="md:hidden max-w-7xl mx-auto px-6 sm:px-10 pt-4 pb-2">
        <a
          v-for="link in navLinks" :key="link.id" :href="`#${link.id}`"
          class="flex items-baseline gap-4 py-3 border-b border-[var(--border)] last:border-b-0"
          @click="open = false"
        >
          <span class="font-mono text-[0.72rem] text-[var(--accent)]">{{ link.num }}</span>
          <span class="font-head text-lg" :class="active === link.id ? 'text-[var(--text)]' : 'text-[var(--text-dim)]'">{{ link.label }}</span>
        </a>
        <NuxtLink to="/cv" class="sm:hidden mt-3 btn btn-ghost w-full justify-center" @click="open = false">Resume</NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const isDark = ref(true)
const open = ref(false)
const active = ref('')

const navLinks = [
  { id: 'experience', num: '01', label: 'Experience' },
  { id: 'projects', num: '02', label: 'Projects' },
  { id: 'about', num: '03', label: 'About' },
  { id: 'background', num: '04', label: 'Background' },
  { id: 'contact', num: '05', label: 'Contact' },
]

let spy: IntersectionObserver | undefined
const onScroll = () => { scrolled.value = window.scrollY > 40 }

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'dark'
  isDark.value = saved === 'dark'
  document.documentElement.setAttribute('data-theme', saved)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Highlight whichever section crosses the middle band of the viewport
  spy = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) active.value = e.target.id })
  }, { rootMargin: '-45% 0px -50% 0px' })
  ;['hero', ...navLinks.map(l => l.id)].forEach(id => {
    const el = document.getElementById(id)
    if (el) spy!.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  spy?.disconnect()
})

function toggleTheme() {
  isDark.value = !isDark.value
  const next = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}
</script>
