<template>
  <section id="projects">
    <div class="section-tag reveal">Work</div>
    <h2 class="section-title reveal reveal-delay-1">Featured Projects</h2>
    <p class="section-sub reveal reveal-delay-2">Things I've built that I'm proud of.</p>
    <div class="projects-grid">
      <div v-for="(p, i) in projects" :key="p.title"
        class="project-card reveal"
        :class="`reveal-delay-${i + 1}`">
        <div class="project-thumb" :style="{ background: p.bg }">
          <div class="project-thumb-inner">
            <div class="project-thumb-icon">{{ p.icon }}</div>
            <span>{{ p.thumbLabel }}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-title">{{ p.title }}</div>
          <div class="project-desc">{{ p.desc }}</div>
          <div class="project-tags">
            <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
          </div>
          <div class="project-links">
            <a :href="p.github" target="_blank" rel="noopener" class="project-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Social Media Platform',
    thumbLabel: 'Social Media App',
    icon: '📱',
    bg: 'linear-gradient(135deg,#1a0a2e,#0a1a2e)',
    desc: 'Full-stack social networking app with real-time feed, user authentication, and responsive UI. Built with React on the frontend and AdonisJS REST API on the backend.',
    tags: ['React', 'Redux Toolkit', 'AdonisJS', 'MySQL', 'Lucid ORM'],
    github: 'https://github.com/bishworup11',
  },
  {
    title: 'React Authorization',
    thumbLabel: 'Auth System',
    icon: '🔐',
    bg: 'linear-gradient(135deg,#0a2e1a,#0a2e2a)',
    desc: 'A clean, production-ready authorization system with role-based access control, JWT token handling, and integration with a dummy API for rapid prototyping.',
    tags: ['React', 'Tailwind CSS', 'JWT', 'Dummy API'],
    github: 'https://github.com/bishworup11',
  },
  {
    title: 'Blood Donation Management',
    thumbLabel: 'Management System',
    icon: '🩸',
    bg: 'linear-gradient(135deg,#2e1a0a,#1a0a0a)',
    desc: 'Desktop application for managing blood donation records, donor registration, and hospital requests. Features a full GUI built with Java Swing and MySQL persistence.',
    tags: ['Java', 'Java Swing', 'MySQL', 'XAMPP'],
    github: 'https://github.com/bishworup11',
  },
  {
    title: 'Duck Hunting',
    thumbLabel: '2D Game · C / IGraphics',
    icon: '🦆',
    bg: 'linear-gradient(135deg,#0a1a2e,#1a2e0a)',
    desc: 'Classic 2D duck hunting game built in C using the IGraphics library. Features animated sprites, collision detection, scoring, and multiple difficulty levels.',
    tags: ['C', 'IGraphics', 'Visual Studio'],
    github: 'https://github.com/bishworup11',
  },
]
</script>

<style scoped>
#projects { padding: 7rem 4rem; max-width: 1200px; margin: 0 auto; }
.projects-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem;
}
.project-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); overflow: hidden;
  transition: transform 0.25s var(--ease), border-color 0.2s, box-shadow 0.25s;
  display: flex; flex-direction: column;
}
.project-card:hover { transform: translateY(-6px); border-color: var(--blue); box-shadow: 0 20px 50px var(--blue-glow); }
.project-thumb {
  height: 180px; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted);
}
.project-thumb-inner {
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 0.5rem; width: 100%; height: 100%;
  transition: transform 0.4s var(--ease);
}
.project-card:hover .project-thumb-inner { transform: scale(1.05); }
.project-thumb-icon { font-size: 3rem; opacity: 0.5; }
.project-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.project-title { font-family: var(--font-head); font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
.project-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-bottom: 1rem; flex: 1; }
.project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem; }
.project-links { display: flex; gap: 0.75rem; }
.project-link {
  font-size: 0.8rem; font-weight: 500; display: flex; align-items: center; gap: 0.35rem;
  color: var(--muted); transition: color 0.2s;
}
.project-link:hover { color: var(--purple); }
@media (max-width: 768px) { #projects { padding: 4rem 1.5rem; } }
</style>
