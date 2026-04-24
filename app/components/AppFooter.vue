<template>
  <footer>
    <span>© 2026 Bishworup Mollik · Built with ❤️ in Bangladesh</span>
    <a href="#hero" class="back-top">
      Back to top
      <div class="back-top-arrow">↑</div>
    </a>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  padding: 2rem 4rem;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem;
  font-size: 0.8rem; color: var(--muted);
}
.back-top {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.8rem; color: var(--muted); transition: color 0.2s;
}
.back-top:hover { color: var(--purple); }
.back-top-arrow {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center; font-size: 0.8rem;
  transition: border-color 0.2s, transform 0.2s;
}
.back-top:hover .back-top-arrow { border-color: var(--purple); transform: translateY(-3px); }
@media (max-width: 768px) { footer { padding: 1.5rem; } }
</style>
