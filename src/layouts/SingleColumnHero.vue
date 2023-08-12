<script setup lang="ts">
/*
  Hi, Sam here.
  This layout is similar to the normal single-column
  one but it is intented to have a first section with
  a 'hero' class that is the full height of the viewport.
  I intend on tweaking this later to ensure this
  functionality.
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-surface);
}
</style>
