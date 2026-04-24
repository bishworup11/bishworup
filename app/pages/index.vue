<template>
  <div>
    <!-- Loading -->
    <div id="loading" :class="{ hidden: loaded }">
      <div class="loading-logo">BM.</div>
    </div>

    <AppCursor />
    <AppNav />

    <main>
      <HeroSection />
      <div class="section-divider"></div>
      <AboutSection />
      <div class="section-divider"></div>
      <SkillsSection />
      <div class="section-divider"></div>
      <ProjectsSection />
      <div class="section-divider"></div>
      <ExperienceSection />
      <div class="section-divider"></div>
      <AchievementsSection />
      <div class="section-divider"></div>
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bishworup Mollik – Software Engineer',
  meta: [
    { name: 'description', content: 'Portfolio of Bishworup Mollik, Software Engineer specializing in Vue, React, and full-stack development.' }
  ],
  htmlAttrs: { 'data-theme': 'dark' }
})

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => { loaded.value = true }, 800)

  // Reveal observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.15 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
#loading {
  position: fixed; inset: 0; z-index: 10000;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s var(--ease);
}
#loading.hidden { opacity: 0; pointer-events: none; }
.loading-logo {
  font-family: var(--font-head); font-size: 2rem; font-weight: 700;
  background: linear-gradient(135deg, var(--purple), var(--teal));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  animation: pulse 0.8s ease-in-out infinite alternate;
}
@keyframes pulse { from { opacity: 0.3; } to { opacity: 1; } }
main { padding-top: 70px; }
</style>
