<template>
  <nav id="nav" :class="{ scrolled }">
    <NuxtLink to="/" class="nav-logo">BM.</NuxtLink>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>
      <NuxtLink to="/cv" class="cv-link">View CV</NuxtLink>
      <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">{{ isDark ? '🌙' : '☀️' }}</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'dark'
  isDark.value = saved === 'dark'
  document.documentElement.setAttribute('data-theme', saved)

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 80
  })
})

function toggleTheme() {
  isDark.value = !isDark.value
  const next = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}
</script>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 4rem;
  backdrop-filter: blur(20px) saturate(1.5);
  background: oklch(from var(--bg) l c h / 0.7);
  border-bottom: 1px solid var(--border);
  transition: padding 0.3s var(--ease);
}
nav.scrolled { padding: 0.75rem 4rem; }
.nav-logo {
  font-family: var(--font-head);
  font-weight: 700; font-size: 1.2rem;
  background: linear-gradient(135deg, var(--purple), var(--teal));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.nav-links { display: flex; gap: 2rem; align-items: center; }
.nav-links a {
  font-size: 0.875rem; font-weight: 500; color: var(--muted);
  transition: color 0.2s; letter-spacing: 0.02em;
}
.nav-links a:hover { color: var(--text); }
.cv-link {
  padding: 0.45rem 1rem;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.8rem !important; font-weight: 600 !important;
  background: var(--surface);
  color: var(--text) !important;
  transition: border-color 0.2s, background 0.2s;
}
.cv-link:hover { border-color: var(--purple); }
.theme-toggle {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border); background: var(--surface);
  font-size: 1rem; cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}
.theme-toggle:hover { background: var(--bg3); transform: rotate(20deg); }
@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  nav.scrolled { padding: 0.75rem 1.5rem; }
  .nav-links { display: none; }
}
</style>
