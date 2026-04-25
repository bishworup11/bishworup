<template>
  <ClientOnly>
    <div
      class="hidden lg:block fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 mix-blend-difference"
      :style="{ left: x + 'px', top: y + 'px', background: '#fff' }"
    ></div>
    <div
      class="hidden lg:block fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-8 h-8 transition-transform duration-200"
      :style="{
        left: tx + 'px',
        top: ty + 'px',
        border: `1px solid var(--border-strong)`,
        opacity: 0.6,
      }"
    ></div>
  </ClientOnly>
</template>

<script setup lang="ts">
const x = ref(0), y = ref(0)
const tx = ref(0), ty = ref(0)

onMounted(() => {
  document.addEventListener('mousemove', e => { x.value = e.clientX; y.value = e.clientY })
  const animate = () => {
    tx.value += (x.value - tx.value) * 0.18
    ty.value += (y.value - ty.value) * 0.18
    requestAnimationFrame(animate)
  }
  animate()
})
</script>
