<script setup lang="ts">
/*
  Hi, Sam here.
*/
import HueSlider from '@/components/HueSlider.vue';
function toggleControls() {
  console.log('Toggle Controls');
}
</script>

<template>
  <div class="theme-controls">
    <button class="primary solid" @click="toggleControls">Theme</button>
    <div class="controls surface mild">
      <h2>Theme Controls</h2>
      <HueSlider color="primary" />
      <HueSlider color="secondary" />
      <HueSlider color="tertiary" />
    </div>
  </div>
</template>

<style scoped>
.theme-controls {
  margin-left: auto;
  position: relative;
}
.controls {
  position: absolute;
  right: 0rem;
  top: calc(100% + 1px);
  margin-top: 0.5rem;
  padding: 0.5rem;
  white-space: nowrap;
}
</style>
