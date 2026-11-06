<template>
  <div class="mb-14 md:mb-16 flex items-end justify-between flex-wrap gap-6">
    <div class="reveal max-w-3xl">
      <div class="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em]">
        <span class="text-[var(--accent)]">{{ num }}</span>
        <span class="w-8 h-px bg-[var(--accent)]"></span>
        <span class="text-[var(--text-dim)]">{{ eyebrow }}</span>
      </div>
      <h2 class="h2-display">
        <slot name="title">{{ title }}</slot>
      </h2>
      <p v-if="lede" class="lede">{{ lede }}</p>
    </div>
    <div v-if="$slots.aside" class="reveal reveal-delay-2">
      <slot name="aside" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  num: string
  eyebrow: string
  title?: string
  lede?: string
}>()
</script>
