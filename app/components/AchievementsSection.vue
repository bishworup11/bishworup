<template>
  <section id="achievements">
    <div class="section-tag reveal">Recognition</div>
    <h2 class="section-title reveal reveal-delay-1">Achievements</h2>
    <p class="section-sub reveal reveal-delay-2">Competitive programming and beyond.</p>

    <div class="achievements-grid">
      <div v-for="(a, i) in achievements" :key="a.title"
        class="ach-card reveal"
        :class="`reveal-delay-${i + 1}`">
        <div class="ach-icon">{{ a.icon }}</div>
        <div>
          <div class="ach-title">{{ a.title }}</div>
          <div class="ach-sub">{{ a.sub }}</div>
        </div>
      </div>
    </div>

    <div class="solving-grid">
      <div v-for="(s, i) in solving" :key="s.platform"
        class="solve-card reveal"
        :class="`reveal-delay-${i + 1}`">
        <div>
          <div class="solve-num">{{ s.count }}</div>
          <div class="solve-platform">{{ s.platform }}</div>
          <div class="solve-handle">{{ s.handle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievements = [
  { icon: '🏆', title: 'ICPC 2022 – Ranked 102nd', sub: 'ICPC Green University of Bangladesh\nTeam: BSMRSTU_pushback' },
  { icon: '🥉', title: 'ICPC 2023 – Ranked 120th', sub: 'ICPC BUBT\nTeam: BSMRSTU_Megatron' },
  { icon: '💡', title: 'Hackathon – Ranked 24th', sub: 'Inter-University Hackathon 2024\nTeam: BSMRSTU_Perfect_Number' },
  { icon: '⭐', title: 'Codeforces Specialist', sub: 'Max rating 1560 · 800+ problems solved\nHandle: bishworup11' },
]
const solving = [
  { count: '800+', platform: 'Codeforces', handle: 'bishworup11 · Specialist' },
  { count: '100+', platform: 'LeetCode', handle: 'bishworup11' },
  { count: '150+', platform: 'GeeksforGeeks', handle: 'bishworupmollik' },
  { count: '90+', platform: 'Beecrowd', handle: 'bishworup11' },
]
</script>

<style scoped>
#achievements { padding: 7rem 4rem; max-width: 1200px; margin: 0 auto; }
.achievements-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem;
}
.ach-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem;
  display: flex; gap: 1rem; align-items: flex-start;
  transition: border-color 0.2s, transform 0.2s;
}
.ach-card:hover { border-color: var(--teal); transform: translateY(-3px); }
.ach-icon { font-size: 1.75rem; flex-shrink: 0; }
.ach-title { font-family: var(--font-head); font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem; }
.ach-sub { font-size: 0.8rem; color: var(--muted); line-height: 1.5; white-space: pre-line; }
.solving-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin-top: 2.5rem;
}
.solve-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.25rem 1.5rem;
  display: flex; align-items: center; gap: 1rem;
  transition: border-color 0.2s;
}
.solve-card:hover { border-color: var(--blue); }
.solve-num { font-family: var(--font-head); font-size: 1.5rem; font-weight: 700; color: var(--purple); }
.solve-platform { font-size: 0.8rem; color: var(--muted); }
.solve-handle { font-family: var(--font-mono); font-size: 0.75rem; color: var(--teal); }
@media (max-width: 768px) { #achievements { padding: 4rem 1.5rem; } }
</style>
