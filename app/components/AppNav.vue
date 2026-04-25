<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 border-b transition-all duration-300"
    :class="[
      scrolled
        ? 'py-3 border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl'
        : 'py-5 border-transparent bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-[var(--bg)] font-bold text-sm tracking-tight">
          BM
        </div>
        <span class="hidden sm:inline font-head font-medium text-sm tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
          Bishworup Mollik
        </span>
      </NuxtLink>

      <!-- Links -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in navLinks" :key="link.href" :href="link.href"
          class="px-3.5 py-2 text-[0.82rem] font-medium text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
        >
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
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const isDark = ref(true)

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'dark'
  isDark.value = saved === 'dark'
  document.documentElement.setAttribute('data-theme', saved)
  const onScroll = () => { scrolled.value = window.scrollY > 40 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

function toggleTheme() {
  isDark.value = !isDark.value
  const next = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}
</script>
