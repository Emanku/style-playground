<script setup lang="ts">
/*
  Hi, Sam here.
*/
import SurfaceDemo from '@/components/SurfaceDemo.vue';
</script>

<template>
  <div class="wrapper">
    <h2>Surfaces Table</h2>
    <div class="surfaces-table">
      <SurfaceDemo color="neutral" />
      <SurfaceDemo color="primary" />
      <SurfaceDemo color="secondary" />
      <SurfaceDemo color="tertiary" />
    </div>
  </div>
</template>

<style scoped>
.surfaces-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
