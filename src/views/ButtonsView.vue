<script setup lang="ts">
/*
  Hi, Sam here.
  This page is just meant to showcase different
  button types and how they are styled.
*/
</script>

<template>
  <section class="wrapper">
    <h1>Check Out These Button Styles</h1>
    <h2>Primary Color</h2>
    <div class="buttons">
      <a href="https://google.ca" target="_blank">Plain Link</a>
      <a href="https://google.ca" target="_blank" class="button">Button Link</a>
      <button>Plain Button</button>
      <button class="outlined">Outlined Button</button>
      <button class="solid">Solid Button</button>
    </div>
    <h2>Secondary Color</h2>
    <div class="buttons">
      <a href="https://google.ca" target="_blank" class="secondary">Plain Link</a>
      <a href="https://google.ca" target="_blank" class="secondary button">Button Link</a>
      <button class="secondary">Plain Button</button>
      <button class="secondary outlined">Outlined Button</button>
      <button class="secondary solid">Solid Button</button>
    </div>
    <h2>Tertiary Color</h2>
    <div class="buttons">
      <a href="https://google.ca" target="_blank" class="tertiary">Plain Link</a>
      <a href="https://google.ca" target="_blank" class="tertiary button">Button Link</a>
      <button class="tertiary">Plain Button</button>
      <button class="tertiary outlined">Outlined Button</button>
      <button class="tertiary solid">Solid Button</button>
    </div>
  </section>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 0.5em;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
