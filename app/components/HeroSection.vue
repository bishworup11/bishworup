<template>
  <section id="hero">
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="geo geo-1"></div>
      <div class="geo geo-2"></div>
      <div class="geo geo-3"></div>
    </div>
    <div class="hero-inner">
      <div class="hero-greeting">// Hello, world →</div>
      <h1 class="hero-name">
        <span class="grad-text">Bishworup</span><br />Mollik
      </h1>
      <div class="hero-role">
        <span class="typewriter-prefix">I build </span>
        <span id="typewriter">{{ displayed }}</span>
        <span class="cursor-blink"></span>
      </div>
      <p class="hero-bio">
        Software Engineer specializing in modern web applications with Vue, React, and full-stack JavaScript. Currently building at AppsCode, Dhaka.
      </p>
      <div class="hero-ctas">
        <a href="#projects" class="btn-primary">View Projects</a>
        <NuxtLink to="/cv" class="btn-outline">Download CV</NuxtLink>
      </div>
    </div>
    <div class="hero-scroll"><div class="scroll-line"></div>Scroll to explore</div>
  </section>
</template>

<script setup lang="ts">
const roles = ['scalable web apps.', 'performant UIs.', 'clean backends.', 'elegant solutions.', 'with Vue & React.']
const displayed = ref('')
let roleIdx = 0, charIdx = 0, deleting = false

onMounted(() => {
  setTimeout(tick, 1200)
})

function tick() {
  const current = roles[roleIdx]
  if (!deleting) {
    displayed.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) {
      deleting = true
      setTimeout(tick, 1800)
      return
    }
  } else {
    displayed.value = current.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      roleIdx = (roleIdx + 1) % roles.length
    }
  }
  setTimeout(tick, deleting ? 45 : 80)
}
</script>

<style scoped>
#hero {
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: center;
  padding: 0 4rem;
  position: relative; overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
.orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px);
  animation: drift 12s ease-in-out infinite alternate;
}
.orb-1 { width: 500px; height: 500px; background: var(--purple-glow); top: -100px; right: -100px; }
.orb-2 { width: 400px; height: 400px; background: var(--blue-glow); bottom: -80px; left: -80px; animation-delay: -4s; }
.orb-3 { width: 300px; height: 300px; background: oklch(65% 0.22 190 / 0.15); top: 40%; left: 40%; animation-delay: -8s; }
@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.1); }
}
.geo {
  position: absolute; opacity: 0.06;
  border: 1px solid var(--text);
  animation: spin 25s linear infinite;
}
.geo-1 { width: 200px; height: 200px; top: 15%; right: 15%; border-radius: 30%; }
.geo-2 { width: 120px; height: 120px; top: 60%; right: 25%; border-radius: 10%; transform: rotate(45deg); animation-direction: reverse; animation-duration: 18s; }
.geo-3 { width: 80px; height: 80px; top: 25%; left: 15%; border-radius: 50%; animation-duration: 30s; }
@keyframes spin { to { transform: rotate(360deg); } }

.hero-inner { position: relative; z-index: 1; max-width: 900px; }
.hero-greeting {
  font-family: var(--font-mono); font-size: 0.9rem; color: var(--teal); margin-bottom: 1rem;
  opacity: 0; animation: fadeUp 0.7s 0.2s var(--ease) forwards;
}
.hero-name {
  font-family: var(--font-head); font-size: clamp(3rem, 8vw, 6rem); font-weight: 700; line-height: 1; margin-bottom: 0.5rem;
  opacity: 0; animation: fadeUp 0.7s 0.4s var(--ease) forwards;
}
.grad-text {
  background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 50%, var(--teal) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-role {
  font-family: var(--font-head); font-size: clamp(1.2rem, 3vw, 2rem); font-weight: 400; color: var(--muted);
  margin-bottom: 1.5rem; min-height: 2.5rem;
  opacity: 0; animation: fadeUp 0.7s 0.6s var(--ease) forwards;
}
.typewriter-prefix { color: var(--text); font-weight: 500; }
#typewriter { color: var(--purple); }
.cursor-blink {
  display: inline-block; width: 3px; height: 1.2em; background: var(--purple);
  margin-left: 2px; vertical-align: middle; animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
.hero-bio {
  font-size: 1.05rem; color: var(--muted); max-width: 540px; line-height: 1.7; margin-bottom: 2.5rem;
  opacity: 0; animation: fadeUp 0.7s 0.8s var(--ease) forwards;
}
.hero-ctas {
  display: flex; gap: 1rem; flex-wrap: wrap;
  opacity: 0; animation: fadeUp 0.7s 1s var(--ease) forwards;
}
.btn-primary {
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, var(--purple), var(--blue));
  border-radius: 100px; font-weight: 600; font-size: 0.9rem; color: #fff;
  position: relative; overflow: hidden;
  transition: transform 0.2s var(--ease), box-shadow 0.2s;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px var(--purple-glow); }
.btn-outline {
  padding: 0.85rem 2rem; border: 1px solid var(--border); border-radius: 100px;
  font-weight: 500; font-size: 0.9rem; background: var(--surface);
  backdrop-filter: blur(10px);
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}
.btn-outline:hover { border-color: var(--purple); background: var(--purple-glow); transform: translateY(-2px); }
.hero-scroll {
  position: absolute; bottom: 2.5rem; left: 4rem;
  display: flex; align-items: center; gap: 0.75rem;
  font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted);
  opacity: 0; animation: fadeUp 0.7s 1.4s var(--ease) forwards;
}
.scroll-line {
  width: 40px; height: 1px; background: var(--muted);
  transform-origin: left; animation: scrollLine 2s 1.8s ease-out forwards; transform: scaleX(0);
}
@keyframes scrollLine { to { transform: scaleX(1); } }
@media (max-width: 768px) { #hero { padding: 0 1.5rem; } .hero-scroll { left: 1.5rem; } }
</style>
