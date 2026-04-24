<template>
  <section id="skills">
    <div class="section-tag reveal">Tech Stack</div>
    <h2 class="section-title reveal reveal-delay-1">Skills &amp; Tools</h2>
    <p class="section-sub reveal reveal-delay-2">Languages, frameworks, and tools I work with daily.</p>
    <div class="skills-grid">
      <div v-for="(skill, i) in skills" :key="skill.name"
        class="skill-card reveal"
        :class="`reveal-delay-${(i % 4) + 1}`"
        :style="`--pct:${skill.pct}%; --brand:${skill.color}`">
        <div class="skill-icon" v-html="skill.svg"></div>
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-bar-wrap"><div class="skill-bar"></div></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    name: 'JavaScript', pct: 85, color: '#F7DF1E',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M18.774 24.24c.435.71 1.002 1.232 2.003 1.232 .841 0 1.38-.42 1.38-1.002 0-.695-.553--.942-1.48-1.347l-.508-.218c-1.465-.624-2.44-1.406-2.44-3.059 0-1.523 1.16-2.682 2.972-2.682 1.29 0 2.217.449 2.885 1.624l-1.58.913c-.348-.623-.724-.868-1.305-.868-.594 0-.971.376-.971.868 0 .608.376.855 1.248 1.233l.508.217c1.726.739 2.704 1.494 2.704 3.189 0 1.828-1.436 2.828-3.366 2.828-1.886 0-3.104-.898-3.7-2.076l1.65-.855zM11.44 24.42c.318.565.608.044 1.044 1.044.782 0 1.276-.406 1.276-1.988V17.1h2.002v6.407c0 3.277-1.914 4.77-4.714 4.77-1.829 0-2.943-.943-3.494-2.076l1.886-1.232V24.42z" fill="#000"/>
    </svg>`,
  },
  {
    name: 'TypeScript', pct: 80, color: '#3178C6',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#3178C6"/>
      <path d="M18 13.5h-4V26h-2.5V13.5H7.5V11H18v2.5z" fill="#fff"/>
      <path d="M21.5 21.25c0 .69.563 1.25 1.25 1.25.563 0 1.031-.313 1.219-.813l2.031.688C25.5 23.813 23.938 24.5 22.75 24.5c-2.125 0-3.75-1.5-3.75-3.75S20.625 17 22.75 17c1.188 0 2.75.688 3.25 2.125l-2.031.688c-.188-.5-.656-.813-1.219-.813-.687 0-1.25.563-1.25 1.25z" fill="#fff"/>
    </svg>`,
  },
  {
    name: 'Vue 3', pct: 90, color: '#42B883',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h5.5L16 19.5 24.5 4H30L16 28 2 4z" fill="#42B883"/>
      <path d="M8.5 4h5L16 10.5 18.5 4h5L16 19 8.5 4z" fill="#35495E"/>
    </svg>`,
  },
  {
    name: 'React', pct: 85, color: '#61DAFB',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" stroke-width="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>`,
  },
  {
    name: 'Nuxt', pct: 80, color: '#00DC82',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6 7.2L10 21h7.2l1.6-2.8H12l5.6-9.8L23.8 21H27L17.6 7.2z" fill="#00DC82"/>
      <path d="M10.4 21H5l7.2-12.6L13.8 11l-4.4 7.6H13l-2.6 2.4z" fill="#00DC82" opacity="0.7"/>
    </svg>`,
  },
  {
    name: 'Next.js', pct: 75, color: '#ffffff',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#000"/>
      <path d="M10 21V11h8.5l-8.5 10zM19 11h2v7l-2-2.5V11z" fill="#fff"/>
      <path d="M19 18.5L23.5 24l-1.5 1L17.5 19l1.5-.5z" fill="#fff"/>
    </svg>`,
  },
  {
    name: 'AdonisJS', pct: 80, color: '#5A45FF',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L28 26H4L16 3z" fill="#5A45FF"/>
      <path d="M16 9l7.5 14h-15L16 9z" fill="#fff" opacity="0.15"/>
      <rect x="13.5" y="19" width="5" height="1.5" rx="0.75" fill="#fff"/>
    </svg>`,
  },
  {
    name: 'PostgreSQL', pct: 75, color: '#336791',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="10" rx="9" ry="5" fill="#336791"/>
      <path d="M7 10v12c0 2.76 4.03 5 9 5s9-2.24 9-5V10" stroke="#336791" stroke-width="2" fill="none"/>
      <ellipse cx="16" cy="10" rx="9" ry="5" fill="none" stroke="#fff" stroke-width="1"/>
      <path d="M7 16c0 2.76 4.03 5 9 5s9-2.24 9-5" stroke="#fff" stroke-width="1" fill="none"/>
      <path d="M7 13c0 2.76 4.03 5 9 5s9-2.24 9-5" stroke="#fff" stroke-width="1" fill="none" opacity="0.5"/>
    </svg>`,
  },
  {
    name: 'MySQL', pct: 75, color: '#4479A1',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="9" rx="9" ry="4" fill="#4479A1"/>
      <path d="M7 9v14c0 2.21 4.03 4 9 4s9-1.79 9-4V9" stroke="#4479A1" stroke-width="2" fill="none"/>
      <ellipse cx="16" cy="9" rx="9" ry="4" fill="none" stroke="#fff" stroke-width="1"/>
      <path d="M7 15c0 2.21 4.03 4 9 4s9-1.79 9-4" stroke="#fff" stroke-width="1" fill="none"/>
      <path d="M7 12c0 2.21 4.03 4 9 4s9-1.79 9-4" stroke="#fff" stroke-width="1" fill="none" opacity="0.5"/>
    </svg>`,
  },
  {
    name: 'Git', pct: 90, color: '#F05032',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.54 0l-2.54 2.54 3.22 3.22a2.14 2.14 0 012.71 2.72l3.1 3.1a2.14 2.14 0 11-1.28 1.28l-2.9-2.9v7.62a2.14 2.14 0 11-1.76.06V12.3a2.14 2.14 0 01-1.16-2.8L10.8 6.3 2.53 14.53a1.8 1.8 0 000 2.54l12 12a1.8 1.8 0 002.54 0l12.4-12.4a1.8 1.8 0 000-2.54z" fill="#F05032"/>
    </svg>`,
  },
  {
    name: 'Linux', pct: 70, color: '#FCC624',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3C10.5 3 8 8 8 13c0 3 1 5.5 2.5 7.5L9 24h14l-1.5-3.5C23 18.5 24 16 24 13c0-5-2.5-10-8-10z" fill="#FCC624"/>
      <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"/>
      <path d="M13 17s1 1.5 3 1.5 3-1.5 3-1.5" stroke="#000" stroke-width="1" stroke-linecap="round" fill="none"/>
      <rect x="11" y="24" width="10" height="2.5" rx="1.25" fill="#333"/>
      <rect x="12.5" y="26.5" width="3" height="2" rx="1" fill="#333"/>
      <rect x="16.5" y="26.5" width="3" height="2" rx="1" fill="#333"/>
    </svg>`,
  },
  {
    name: 'Tailwind', pct: 85, color: '#06B6D4',
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C17.653 12.81 19.085 14.4 22 14.4c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C20.347 8.59 18.915 7 16 7zM10 14.4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C11.653 20.21 13.085 21.8 16 21.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C14.347 15.99 12.915 14.4 10 14.4z" fill="#06B6D4"/>
    </svg>`,
  },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    })
  }, { threshold: 0.15 })
  document.querySelectorAll('.skill-card').forEach(el => obs.observe(el))
})
</script>

<style scoped>
#skills { padding: 7rem 4rem; max-width: 1200px; margin: 0 auto; }
.skills-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 1rem;
}
.skill-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem 1rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
  text-align: center;
  transition: transform 0.25s var(--ease), border-color 0.2s, box-shadow 0.25s;
}
.skill-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand, var(--purple));
  box-shadow: 0 16px 40px color-mix(in srgb, var(--brand, var(--purple)) 30%, transparent);
}
.skill-icon {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  filter: grayscale(0.25) brightness(0.9);
  transition: filter 0.25s, transform 0.25s;
}
.skill-icon :deep(svg) { width: 44px; height: 44px; }
.skill-card:hover .skill-icon { filter: grayscale(0) brightness(1); transform: scale(1.1); }
.skill-name { font-size: 0.8rem; font-weight: 500; color: var(--muted); }
.skill-bar-wrap { width: 100%; height: 3px; background: var(--border); border-radius: 2px; overflow: hidden; }
.skill-bar {
  height: 100%; border-radius: 2px;
  background: linear-gradient(90deg, var(--brand, var(--purple)), var(--teal));
  width: 0; transition: width 1.2s var(--ease);
}
.skill-card.visible .skill-bar { width: var(--pct); }
@media (max-width: 768px) { #skills { padding: 4rem 1.5rem; } }
</style>
