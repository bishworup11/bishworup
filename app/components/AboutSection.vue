<template>
  <section id="about" class="relative">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <SectionHeading
        num="03"
        eyebrow="About"
        title="A focused builder who values clarity and craft."
      />

      <div class="grid lg:grid-cols-12 gap-x-16 gap-y-14">
        <!-- Story -->
        <div class="lg:col-span-5 reveal reveal-delay-1">
          <div class="lg:sticky lg:top-28 space-y-10">
            <div class="space-y-4 text-[var(--text-dim)] leading-relaxed text-[1.02rem]">
              <p>
                I'm a frontend-focused software engineer from Bangladesh. I build web applications in
                <span class="text-[var(--text)] font-medium">Vue 3, Nuxt, and TypeScript</span>, and I'm happiest when a
                complicated product turns into an interface people find simple to use.
              </p>
              <p>
                At <span class="text-[var(--text)] font-medium">AppsCode</span> I work on the console for its cloud platform,
                where a large app has to keep a consistent feel as it grows.
              </p>
              <p>
                Outside work I do competitive programming. It taught me to care about correctness, think about edge cases
                early, and keep abstractions small.
              </p>
            </div>

            <!-- Principles -->
            <div>
              <h3 class="mb-4 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-[var(--muted)]">How I work</h3>
              <ol class="space-y-3">
                <li v-for="(p, i) in principles" :key="p.title" class="flex gap-4">
                  <span class="font-mono text-[0.75rem] text-[var(--accent)] pt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
                  <div>
                    <div class="font-head font-semibold text-[0.98rem] text-[var(--text)]">{{ p.title }}</div>
                    <p class="text-[0.86rem] text-[var(--text-dim)] leading-relaxed">{{ p.desc }}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Toolkit -->
        <div class="lg:col-span-7 reveal reveal-delay-2">
          <div class="card p-6 sm:p-8">
            <div class="flex items-baseline justify-between gap-4 mb-8">
              <h3 class="font-head font-semibold text-lg text-[var(--text)]">Toolkit</h3>
              <span class="text-[0.7rem] font-mono uppercase tracking-wider text-[var(--muted)]">Used in production &amp; side projects</span>
            </div>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const principles = [
  { title: 'Predictable state', desc: 'Data flows one way and lives in one place, so behaviour is easy to reason about.' },
  { title: 'Typed end to end', desc: 'Typed API clients and schemas catch mistakes before they reach users.' },
  { title: 'Reusable components', desc: 'Small, shared building blocks keep a growing product consistent.' },
  { title: 'Edge cases first', desc: 'Empty, loading, and error states get designed, not patched in later.' },
]
</script>
