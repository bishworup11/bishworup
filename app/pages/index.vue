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
const { siteUrl } = useRuntimeConfig().public
const title = 'Bishworup Mollik — Software Engineer | Vue, Nuxt, Full-Stack'
const description = 'Software Engineer at AppsCode specializing in Vue 3, Nuxt, and full-stack JavaScript. ICPC regionalist, Codeforces Specialist, 1500+ problems solved.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: siteUrl,
  ogType: 'website',
  ogImage: `${siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/og-image.png`,
})

useHead({
  htmlAttrs: { 'data-theme': 'dark' },
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Bishworup Mollik',
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      jobTitle: 'Software Engineer',
      email: 'mailto:bishworupmollik@gmail.com',
      worksFor: { '@type': 'Organization', name: 'AppsCode' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sunamganj',
        addressRegion: 'Sylhet',
        addressCountry: 'BD',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Bangabandhu Sheikh Mujibur Rahman Science and Technology University',
      },
      knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Node.js', 'Pinia', 'React', 'Next.js', 'Tailwind CSS', 'Competitive Programming'],
      sameAs: [
        'https://github.com/bishworup11',
        'https://www.linkedin.com/in/bishworup-mollik/',
        'https://codeforces.com/profile/bishworup11',
        'https://leetcode.com/bishworup11',
      ],
    }),
  }],
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
