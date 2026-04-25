<template>
  <footer class="border-t border-[var(--border)]">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3 text-[0.82rem] text-[var(--muted)]">
        <div class="w-6 h-6 rounded-md bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-[var(--bg)] text-[0.6rem] font-bold">BM</div>
        <span>© {{ year }} Bishworup Mollik</span>
        <span class="w-1 h-1 rounded-full bg-[var(--border-strong)]"></span>
        <span class="font-mono">Built with Nuxt</span>
      </div>

      <a href="#hero" class="group inline-flex items-center gap-2 text-[0.82rem] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">
        Back to top
        <div class="w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-soft)] group-hover:-translate-y-0.5 transition-all">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
        </div>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
