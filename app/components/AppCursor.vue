<template>
  <ClientOnly>
    <div id="cursor" :style="{ left: x + 'px', top: y + 'px' }"></div>
    <div id="cursor-trail" :style="{ left: tx + 'px', top: ty + 'px' }"></div>
  </ClientOnly>
</template>

<script setup lang="ts">
const x = ref(0), y = ref(0)
const tx = ref(0), ty = ref(0)

onMounted(() => {
  document.addEventListener('mousemove', e => {
    x.value = e.clientX
    y.value = e.clientY
  })
  function animateTrail() {
    tx.value += (x.value - tx.value) * 0.12
    ty.value += (y.value - ty.value) * 0.12
    requestAnimationFrame(animateTrail)
  }
  animateTrail()
})
</script>

<style scoped>
#cursor, #cursor-trail {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease, opacity 0.3s ease;
}
#cursor {
  width: 12px; height: 12px;
  background: var(--purple);
  mix-blend-mode: screen;
}
#cursor-trail {
  width: 36px; height: 36px;
  border: 1.5px solid var(--purple);
  opacity: 0.5;
}
</style>
