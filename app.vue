<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">

</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  display: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: scaleX(0.9);
}
</style>