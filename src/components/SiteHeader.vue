<script setup lang="ts">
/*
  Hi, Sam here.
  I haven't quite decided which parts of this should
  stay as they are, be abstracted out like the
  skip-nav link, or use a slot setup instead.
*/

import SkipNav from './SkipNav.vue';
import ThemeControls from './ThemeControls.vue';
</script>

<template>
  <SkipNav />
  <nav>
    <a class="button" href="https://sam-fraser.ca" rel="noreferrer">Hub</a>
    <RouterLink class="button" to="/">Landing</RouterLink>
    <RouterLink class="button" to="/buttons">Buttons</RouterLink>
    <RouterLink class="button" to="/surfaces">Surfaces</RouterLink>
    <ThemeControls />
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 0.5em;
}
</style>
