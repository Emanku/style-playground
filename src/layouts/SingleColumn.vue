<script setup lang="ts">
/*
  Hi, Sam here.
  This layout is for a single-column,
  full-width section page that is simple and very
  easy for responsive design.
*/

import SiteHeader from '@/components/SiteHeader.vue';
</script>

<template>
  <header>
    <SiteHeader />
  </header>
  <main id="main-content">
    <slot></slot>
  </main>
</template>

<style scoped>
header {
  padding: 0.5rem;
  border-bottom-color: var(--color-outline);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
</style>
