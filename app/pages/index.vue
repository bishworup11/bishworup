<template>
  <div class="relative">
    <!-- Loading screen -->
    <ClientOnly>
      <Transition
        enter-active-class="transition-opacity duration-700"
        leave-active-class="transition-opacity duration-700"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="!loaded" class="fixed inset-0 z-[10000] flex items-center justify-center" style="background: var(--bg)">
          <div class="flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-[var(--bg)] font-bold tracking-tight" style="animation: pulse 0.9s ease-in-out infinite alternate">
              BM
            </div>
            <div class="text-[0.7rem] font-mono uppercase tracking-[0.3em] text-[var(--muted)]">Loading</div>
          </div>
        </div>
      </Transition>
    </ClientOnly>

    <AppCursor />
    <AppNav />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bishworup Mollik — Software Engineer',
  meta: [{ name: 'description', content: 'Software Engineer specializing in Vue, Nuxt, and full-stack JavaScript. Currently building at AppsCode.' }],
  htmlAttrs: { 'data-theme': 'dark' },
})

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => { loaded.value = true }, 700)

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>
