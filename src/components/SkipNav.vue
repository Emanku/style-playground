<script setup lang="ts">
/*
  Hi, Sam here.
*/
</script>

<template>
  <a class="button filled" href="#main-content">Skip to Content</a>
</template>

<style scoped>
a {
  position: absolute;
  top: 0;
  padding-top: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition-property: transform;
  transition-duration: 260ms;
  text-decoration: none;
}

a:not(:focus) {
  transform: translateY(-110%);
}
</style>
