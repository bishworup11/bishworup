<template>
  <section id="experience">
    <div class="section-tag reveal">Career</div>
    <h2 class="section-title reveal reveal-delay-1">Experience &amp; Education</h2>
    <p class="section-sub reveal reveal-delay-2">Where I've worked and studied.</p>
    <div class="exp-grid">
      <div>
        <h3 class="col-heading reveal">Work</h3>
        <div class="timeline reveal">
          <div v-for="job in work" :key="job.role" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">{{ job.date }}</div>
            <div class="timeline-role">{{ job.role }}</div>
            <div class="timeline-company">{{ job.company }}</div>
            <div class="timeline-loc">📍 {{ job.loc }}</div>
            <div class="timeline-tech">
              <span v-for="t in job.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="col-heading reveal">Education</h3>
        <div class="timeline reveal">
          <div v-for="edu in education" :key="edu.role" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">{{ edu.date }}</div>
            <div class="timeline-role">{{ edu.role }}</div>
            <div class="timeline-company">{{ edu.company }}</div>
            <div class="timeline-loc">📍 {{ edu.loc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const work = [
  { date: '02/2025 – Present', role: 'Software Engineer', company: 'AppsCode', loc: 'Dhaka, Bangladesh', tags: ['Vue', 'Pinia', 'Nuxt', 'Next.js', 'ConnectRPC'] },
  { date: '09/2024 – 01/2025', role: 'Junior Software Engineer', company: 'AppifyLab', loc: 'Sylhet, Bangladesh', tags: ['React', 'Redux', 'Next.js', 'AdonisJS', 'MySQL'] },
]
const education = [
  { date: '01/2019 – 04/2024', role: 'B.Sc. in Computer Science', company: 'BSMRSTU', loc: 'Gopalganj, Bangladesh' },
  { date: '08/2016 – 08/2018', role: 'Higher Secondary Certificate (HSC)', company: 'MC College, Sylhet', loc: 'Sylhet, Bangladesh' },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.2 })
  document.querySelectorAll('.timeline').forEach(el => obs.observe(el))
})
</script>

<style scoped>
#experience { padding: 7rem 4rem; max-width: 1200px; margin: 0 auto; }
.exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 1rem; }
.col-heading {
  font-family: var(--font-mono); font-size: 0.75rem; color: var(--teal);
  letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 2rem;
}
.timeline { position: relative; padding-left: 2rem; }
.timeline::before {
  content: ''; position: absolute; left: 0; top: 8px; bottom: 8px;
  width: 2px; background: var(--border);
  transform-origin: top; transform: scaleY(0);
  transition: transform 1.5s var(--ease);
}
.timeline.visible::before { transform: scaleY(1); }
.timeline-item { position: relative; margin-bottom: 3rem; }
.timeline-dot {
  position: absolute; left: -2.4rem; top: 0.35rem;
  width: 12px; height: 12px; border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--teal));
  box-shadow: 0 0 0 4px var(--bg), 0 0 0 6px var(--purple);
  transition: box-shadow 0.3s;
}
.timeline-item:hover .timeline-dot { box-shadow: 0 0 0 4px var(--bg), 0 0 0 8px var(--purple), 0 0 20px var(--purple); }
.timeline-date { font-family: var(--font-mono); font-size: 0.75rem; color: var(--teal); margin-bottom: 0.35rem; }
.timeline-role { font-family: var(--font-head); font-size: 1.1rem; font-weight: 600; }
.timeline-company { color: var(--purple); font-weight: 500; font-size: 0.95rem; }
.timeline-loc { font-size: 0.8rem; color: var(--muted); margin-bottom: 0.5rem; }
.timeline-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.75rem; }
@media (max-width: 768px) { #experience { padding: 4rem 1.5rem; } .exp-grid { grid-template-columns: 1fr; gap: 2rem; } }
</style>
