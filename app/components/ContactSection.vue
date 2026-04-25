<template>
  <section id="contact" class="relative">
    <div class="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div class="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden reveal">
        <!-- Backdrop glow -->
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-70 pointer-events-none" style="background: var(--accent-glow)"></div>
        <div class="absolute inset-0 opacity-[0.35] grid-lines [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_20%,transparent_80%)] pointer-events-none"></div>

        <div class="relative text-center px-6 sm:px-10 py-20 md:py-24">
          <span class="eyebrow !mb-4 justify-center">Contact</span>
          <h2 class="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-[var(--text)]">
            Let's build something<br />
            <span class="gradient-text">worth shipping.</span>
          </h2>
          <p class="mt-6 text-[var(--text-dim)] text-[1.05rem] max-w-lg mx-auto">
            Open to new opportunities and collaborations. The fastest way to reach me is email.
          </p>

          <!-- Email -->
          <a href="mailto:bishworupmollik@gmail.com"
             class="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--border-strong)] bg-[var(--bg)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--accent)]"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            <span class="font-mono text-[0.92rem] text-[var(--text)]">bishworupmollik@gmail.com</span>
            <svg class="text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          <!-- Socials -->
          <div class="mt-10 flex flex-wrap items-center justify-center gap-2">
            <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener"
               class="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] transition-all">
              <span class="w-4 h-4 flex items-center justify-center text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors" v-html="s.svg"></span>
              <span class="text-[0.82rem] font-medium text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors">{{ s.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com/bishworup11', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.1.82-.26.82-.58 0-.28-.01-1.23-.02-2.24-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bishworup-mollik/', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>` },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/bishworup11', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="10" width="4" height="12" rx="1"/><rect x="10" y="6" width="4" height="16" rx="1"/><rect x="18" y="2" width="4" height="20" rx="1"/></svg>` },
  { label: 'LeetCode', href: 'https://leetcode.com/bishworup11', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2.5 5.8 10.2a4.6 4.6 0 0 0 0 6.5l4.3 4.3a4.6 4.6 0 0 0 6.5 0l1.7-1.7-1.8-1.8-1.7 1.8a2 2 0 0 1-2.9 0l-4.3-4.4a2 2 0 0 1 0-2.9l7.7-7.7a2 2 0 0 1 2.9 0l4.3 4.4a2 2 0 0 1 0 2.9l-1.7 1.7 1.8 1.8 1.7-1.8a4.6 4.6 0 0 0 0-6.4l-4.3-4.4a4.6 4.6 0 0 0-6.5 0z M9.8 13.5h12.4v2.6H9.8z"/></svg>` },
]
</script>
