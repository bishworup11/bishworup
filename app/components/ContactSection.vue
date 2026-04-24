<template>
  <section id="contact">
    <div class="section-tag reveal">Get in touch</div>
    <h2 class="section-title reveal reveal-delay-1">Let's build something<br/>together.</h2>
    <p class="contact-sub reveal reveal-delay-2">Open to new opportunities, collaborations, or just a good conversation about code and problem solving.</p>
    <a href="mailto:bishworup11ai@gmail.com" class="contact-email reveal reveal-delay-3">bishworup11ai@gmail.com</a>
    <div class="socials reveal reveal-delay-4">
      <a href="https://github.com/bishworup11" target="_blank" rel="noopener" class="social-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/bishworup-mollik/" target="_blank" rel="noopener" class="social-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a href="mailto:bishworup11ai@gmail.com" class="social-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
        Email
      </a>
    </div>
  </section>
</template>

<style scoped>
#contact { padding: 7rem 4rem; max-width: 1200px; margin: 0 auto; text-align: center; }
.contact-sub { color: var(--muted); margin: 0 auto 2.5rem; max-width: 480px; }
.contact-email {
  font-family: var(--font-head); font-size: clamp(1.2rem, 3vw, 1.8rem); font-weight: 600;
  background: linear-gradient(135deg, var(--purple), var(--teal));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 2rem; display: block; transition: opacity 0.2s;
}
.contact-email:hover { opacity: 0.8; }
.socials { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.social-btn {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 100px; font-size: 0.875rem; font-weight: 500;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}
.social-btn:hover { border-color: var(--purple); background: var(--purple-glow); transform: translateY(-3px); }
@media (max-width: 768px) { #contact { padding: 4rem 1.5rem; } }
</style>
