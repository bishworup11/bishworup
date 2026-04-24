<template>
  <div class="cv-page">
    <!-- Toolbar -->
    <div class="toolbar">
      <NuxtLink to="/" class="back-link">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>
        Back to Portfolio
      </NuxtLink>
      <button class="download-btn" @click="print">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download PDF
      </button>
    </div>

    <!-- Paper -->
    <div class="paper">
      <!-- Header -->
      <div class="cv-header">
        <div class="cv-name">Bishworup Mollik</div>
        <div class="cv-contacts">
          <span><a href="mailto:bishworup11ai@gmail.com">bishworup11ai@gmail.com</a></span>
          <span class="cv-sep">·</span>
          <span>+880 1771 106071</span>
          <span class="cv-sep">·</span>
          <span>Sunamganj, Sylhet, Bangladesh</span>
        </div>
        <div class="cv-socials">
          <span><a href="https://github.com/bishworup11" target="_blank" rel="noopener">GitHub</a></span>
          <span class="cv-sep">·</span>
          <span><a href="https://www.linkedin.com/in/bishworup-mollik/" target="_blank" rel="noopener">LinkedIn</a></span>
          <span class="cv-sep">·</span>
          <span><a href="https://codeforces.com/profile/bishworup11" target="_blank" rel="noopener">Codeforces</a></span>
          <span class="cv-sep">·</span>
          <span><a href="https://leetcode.com/bishworup11" target="_blank" rel="noopener">LeetCode</a></span>
        </div>
      </div>

      <hr class="rule-thick" /><hr class="rule-thin" />

      <!-- Summary -->
      <p class="cv-summary">
        Passionate software engineer and competitive programmer with a strong foundation in full-stack web development. Specializing in Vue&nbsp;3, React, and modern JavaScript ecosystems. Currently building scalable, production-grade products at AppsCode, Dhaka. Active competitive programmer with 1500+ problems solved across Codeforces (Specialist, max rating 1560), LeetCode, GeeksforGeeks, and Beecrowd.
      </p>

      <!-- Education -->
      <div class="cv-section">
        <div class="cv-section-title">Education</div>
        <hr class="rule-thick" />
        <div v-for="edu in education" :key="edu.degree" class="cv-entry">
          <div>
            <div class="cv-entry-title">{{ edu.degree }}</div>
            <div class="cv-entry-sub">{{ edu.school }}</div>
          </div>
          <div class="cv-entry-date">{{ edu.date }}</div>
        </div>
      </div>

      <!-- Experience -->
      <div class="cv-section">
        <div class="cv-section-title">Work Experience</div>
        <hr class="rule-thick" />
        <div v-for="job in experience" :key="job.title" class="cv-entry-group">
          <div class="cv-entry">
            <div>
              <div class="cv-entry-title">{{ job.title }}</div>
              <div class="cv-entry-sub">{{ job.loc }}</div>
            </div>
            <div class="cv-entry-date">{{ job.date }}</div>
          </div>
          <ul class="cv-list">
            <li v-for="b in job.bullets" :key="b" v-html="b"></li>
          </ul>
        </div>
      </div>

      <!-- Skills -->
      <div class="cv-section">
        <div class="cv-section-title">Technical Skills</div>
        <hr class="rule-thick" />
        <table class="skills-table">
          <tr v-for="s in skills" :key="s.label">
            <td>{{ s.label }}</td><td>{{ s.value }}</td>
          </tr>
        </table>
      </div>

      <!-- Projects -->
      <div class="cv-section">
        <div class="cv-section-title">Projects</div>
        <hr class="rule-thick" />
        <div v-for="p in projects" :key="p.title" class="cv-entry-group">
          <div class="cv-entry" style="margin-top:0.55rem;">
            <div class="cv-entry-title">{{ p.title }}</div>
            <div class="cv-entry-date" style="font-style:italic;color:#555;">{{ p.stack }}</div>
          </div>
          <ul class="cv-list">
            <li>{{ p.desc }}</li>
          </ul>
        </div>
      </div>

      <!-- Achievements -->
      <div class="cv-section">
        <div class="cv-section-title">Achievements</div>
        <hr class="rule-thick" />
        <ul class="cv-list" style="margin-top:0.45rem;">
          <li v-for="a in achievements" :key="a" v-html="a"></li>
        </ul>
      </div>

      <!-- Problem Solving -->
      <div class="cv-section">
        <div class="cv-section-title">Problem Solving</div>
        <hr class="rule-thick" />
        <p style="font-size:0.88rem;color:#222;margin-top:0.45rem;margin-bottom:0.4rem;">
          Solved <strong>1500+</strong> problems across multiple online judges.
        </p>
        <table class="solve-table">
          <tr v-for="s in solving" :key="s.platform">
            <td><a :href="s.url" target="_blank" rel="noopener">{{ s.platform }}</a></td>
            <td>{{ s.detail }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bishworup Mollik – CV',
  htmlAttrs: { 'data-theme': 'light' }
})

function print() { window.print() }

const education = [
  { degree: 'B.Sc. in Computer Science and Engineering', school: 'Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj', date: 'Jan 2019 – Apr 2024' },
  { degree: 'Higher Secondary Certificate (HSC)', school: 'MC College, Sylhet', date: 'Aug 2016 – Aug 2018' },
]

const experience = [
  {
    title: 'Software Engineer – AppsCode',
    loc: 'Dhaka, Bangladesh',
    date: 'Feb 2025 – Present',
    bullets: [
      'Building production web applications with <strong>Vue 3, Pinia, Nuxt,</strong> and <strong>ConnectRPC</strong>',
      'Developing Next.js integrations and maintaining cross-platform UI consistency at scale',
    ],
  },
  {
    title: 'Junior Software Engineer – AppifyLab',
    loc: 'Sylhet, Bangladesh',
    date: 'Sep 2024 – Jan 2025',
    bullets: [
      'Developed full-stack features with <strong>React, Redux Toolkit, Next.js,</strong> and <strong>AdonisJS</strong>',
      'Designed and maintained relational database schemas using <strong>MySQL</strong> and <strong>Lucid ORM</strong>',
    ],
  },
]

const skills = [
  { label: 'Languages', value: 'C, C++, Java, JavaScript, TypeScript, Python, HTML, CSS' },
  { label: 'Frameworks', value: 'Vue 3, Nuxt, Pinia, ConnectRPC, React, Next.js, Redux, AdonisJS, Lucid ORM, Tailwind CSS, Java Swing' },
  { label: 'Databases', value: 'MySQL, PostgreSQL' },
  { label: 'Tools', value: 'Git, GitHub, Linux, Postman, LaTeX' },
]

const projects = [
  { title: 'Social Media Platform', stack: 'React · Redux · AdonisJS · MySQL', desc: 'Full-stack social networking application with real-time feed, user authentication, and responsive UI' },
  { title: 'React Authorization System', stack: 'React · Tailwind CSS', desc: 'Role-based access control with JWT token handling and Dummy API integration for rapid prototyping' },
  { title: 'Blood Donation Management System', stack: 'Java · Swing · MySQL', desc: 'Desktop GUI application for donor registration, blood stock management, and hospital request tracking' },
  { title: 'Duck Hunting', stack: 'C · IGraphics', desc: '2D arcade game featuring animated sprites, collision detection, scoring system, and difficulty scaling' },
]

const achievements = [
  'Ranked <strong>102nd</strong> at ICPC Asia Dhaka Regional 2022, Green University of Bangladesh – Team: <em>BSMRSTU_pushback</em>',
  'Ranked <strong>120th</strong> at ICPC Asia Dhaka Regional 2023, BUBT – Team: <em>BSMRSTU_Megatron</em>',
  'Ranked <strong>24th</strong> at Inter-University Hackathon 2024 – Team: <em>BSMRSTU_Perfect_Number</em>',
]

const solving = [
  { platform: 'Codeforces', url: 'https://codeforces.com/profile/bishworup11', detail: 'bishworup11 · Max Rating 1560 (Specialist) · 800+ problems solved' },
  { platform: 'LeetCode', url: 'https://leetcode.com/bishworup11', detail: 'bishworup11 · 100+ problems solved' },
  { platform: 'GeeksforGeeks', url: 'https://auth.geeksforgeeks.org/user/bishworupmollik', detail: 'bishworupmollik · 150+ problems solved' },
  { platform: 'Beecrowd', url: 'https://judge.beecrowd.com', detail: 'bishworup11 · 90+ problems solved' },
]
</script>

<style scoped>
.cv-page {
  font-family: var(--font-serif);
  background: #c8c8c0;
  min-height: 100vh;
  padding: 2rem 1rem 4rem;
  display: flex; flex-direction: column; align-items: center;
}

.toolbar {
  width: 100%; max-width: 780px;
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;
}
.back-link {
  color: rgba(0,0,0,0.55); font-size: 0.8rem; text-decoration: none;
  display: flex; align-items: center; gap: 0.35rem;
  font-family: var(--font-mono); transition: color 0.2s;
}
.back-link:hover { color: #111; }
.download-btn {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 1.2rem; background: #1a1a1a; color: #fff;
  border-radius: 3px; font-size: 0.78rem; font-weight: 500; cursor: pointer;
  font-family: var(--font-mono); letter-spacing: 0.03em; transition: background 0.2s;
}
.download-btn:hover { background: #333; }

.paper {
  width: 100%; max-width: 780px;
  background: #fafaf8;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.12);
  padding: 3.5rem 4rem 4rem;
  color: #111; line-height: 1.45;
}

.cv-header { text-align: center; margin-bottom: 0.1rem; }
.cv-name {
  font-size: 1.95rem; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: #000; margin-bottom: 0.5rem; font-variant: small-caps;
}
.cv-contacts {
  font-size: 0.88rem; color: #333;
  display: flex; justify-content: center; flex-wrap: wrap; gap: 0 1.2rem; margin-bottom: 0.4rem;
}
.cv-contacts a { color: #1a3a6e; text-decoration: none; }
.cv-contacts a:hover { text-decoration: underline; }
.cv-socials {
  font-size: 0.85rem; color: #333;
  display: flex; justify-content: center; gap: 0 1.2rem; flex-wrap: wrap;
}
.cv-socials a { color: #1a3a6e; text-decoration: none; }
.cv-socials a:hover { text-decoration: underline; }
.cv-sep { color: #999; }

.rule-thick { border: none; border-top: 1.5px solid #000; margin: 0.55rem 0 0; }
.rule-thin { border: none; border-top: 0.5px solid #000; margin: 0.2rem 0 0.8rem; }

.cv-summary {
  font-size: 0.9rem; color: #222; line-height: 1.65; font-style: italic;
  text-align: justify; margin: 1rem 0 0; hyphens: auto;
}

.cv-section { margin-top: 0.9rem; }
.cv-section-title {
  font-size: 1rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.1em; color: #000; font-variant: small-caps; margin-bottom: 0;
}

.cv-entry-group { margin-bottom: 0.3rem; }
.cv-entry {
  display: flex; justify-content: space-between; align-items: baseline;
  gap: 1rem; margin-bottom: 0.15rem; margin-top: 0.55rem;
}
.cv-entry-title { font-size: 0.92rem; font-weight: 600; color: #000; }
.cv-entry-sub { font-size: 0.85rem; color: #444; font-style: italic; margin-top: 0.05rem; }
.cv-entry-date { font-size: 0.82rem; color: #333; white-space: nowrap; flex-shrink: 0; }

.cv-list { list-style: none; padding: 0; margin-top: 0.25rem; }
.cv-list li {
  position: relative; padding-left: 1.1rem;
  font-size: 0.88rem; color: #222; line-height: 1.6; margin-bottom: 0.15rem;
  text-align: justify; hyphens: auto;
}
.cv-list li::before { content: '–'; position: absolute; left: 0; color: #555; }

.skills-table { width: 100%; font-size: 0.88rem; border-collapse: collapse; margin-top: 0.4rem; color: #222; }
.skills-table td { padding: 0.18rem 0; vertical-align: top; }
.skills-table td:first-child { font-weight: 600; width: 110px; color: #000; white-space: nowrap; }

.solve-table { width: 100%; font-size: 0.88rem; margin-top: 0.4rem; border-collapse: collapse; }
.solve-table td { padding: 0.18rem 0; vertical-align: top; color: #222; }
.solve-table td:first-child { width: 130px; font-weight: 600; color: #000; }
.solve-table a { color: #1a3a6e; text-decoration: none; }
.solve-table a:hover { text-decoration: underline; }

@media print {
  .cv-page { background: #fff; padding: 0; }
  .toolbar { display: none; }
  .paper { box-shadow: none; max-width: 100%; padding: 2cm 2.2cm; }
}
</style>
