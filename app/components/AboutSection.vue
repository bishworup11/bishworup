<template>
  <section id="about">
    <div class="about-avatar reveal">
      <div class="avatar-ring"></div>
      <div class="avatar-placeholder">
        <div class="avatar-initials">BM</div>
        <div class="avatar-label">profile photo</div>
      </div>
    </div>
    <div>
      <div class="section-tag reveal">About me</div>
      <h2 class="section-title reveal reveal-delay-1">Passionate builder,<br/>problem solver.</h2>
      <p class="about-text reveal reveal-delay-2">
        I'm a Software Engineer from Bangladesh with a B.Sc. in Computer Science from BSMRSTU. I love turning complex problems into elegant, performant solutions — whether that's a slick frontend interface or a robust backend system.
      </p>
      <p class="about-text reveal reveal-delay-3" style="margin-top:1rem;">
        Beyond work, I'm an active competitive programmer with 1500+ problems solved across Codeforces (Specialist, max rating 1560), LeetCode, and GeeksforGeeks.
      </p>
      <div class="about-stats reveal reveal-delay-4">
        <div class="stat-card">
          <div class="stat-num" data-count="1500">0</div>
          <div class="stat-label">Problems Solved</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" data-count="1560">0</div>
          <div class="stat-label">Max CF Rating</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" data-count="2">0</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" data-count="4">0</div>
          <div class="stat-label">Projects Shipped</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target as HTMLElement)
        counterObs.unobserve(e.target)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el))
})

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.count!)
  const dur = 1500
  const start = performance.now()
  function step(now: number) {
    const t = Math.min((now - start) / dur, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = Math.round(eased * target).toLocaleString() + (target >= 100 ? '+' : '')
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
</script>

<style scoped>
#about {
  padding: 7rem 4rem; max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
}
.about-avatar {
  aspect-ratio: 1; border-radius: 24px;
  background: var(--bg3); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; position: relative;
  transition: transform 0.3s var(--ease), box-shadow 0.3s;
}
.about-avatar:hover { transform: perspective(800px) rotateX(5deg) rotateY(-5deg); box-shadow: 20px 20px 60px oklch(65% 0.22 285 / 0.2); }
.avatar-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 1rem;
  background: linear-gradient(135deg, var(--bg3), var(--bg2));
}
.avatar-initials {
  font-family: var(--font-head); font-size: 5rem; font-weight: 700;
  background: linear-gradient(135deg, var(--purple), var(--teal));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.avatar-label { font-size: 0.75rem; color: var(--muted); font-family: var(--font-mono); }
.avatar-ring {
  position: absolute; inset: -2px; border-radius: 26px;
  background: linear-gradient(135deg, var(--purple), var(--blue), var(--teal));
  z-index: -1; opacity: 0.4;
}
.about-text { color: var(--muted); line-height: 1.8; font-size: 1rem; }
.about-stats {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.5rem;
}
.stat-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.25rem;
  transition: border-color 0.2s, background 0.2s;
}
.stat-card:hover { border-color: var(--purple); background: var(--purple-glow); }
.stat-num {
  font-family: var(--font-head); font-size: 2rem; font-weight: 700;
  background: linear-gradient(135deg, var(--purple), var(--teal));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.stat-label { font-size: 0.8rem; color: var(--muted); margin-top: 0.25rem; }
@media (max-width: 768px) { #about { grid-template-columns: 1fr; gap: 2.5rem; padding: 4rem 1.5rem; } }
</style>
