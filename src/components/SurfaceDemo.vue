<script setup lang="ts">
/*
  Hi, Sam here.
*/
defineProps<{ color: 'primary' | 'secondary' | 'tertiary' | 'neutral' }>();

const intensities = ['mild', '', 'intense'];
</script>

<template>
  <div
    class="surface"
    :class="[color, intensity]"
    v-for="intensity in intensities"
    :key="intensity"
  >
    <h2>{{ intensity + ' ' }}{{ color }} Header</h2>
    <p>Regular text for {{ intensity + ' ' }}{{ color }} surface</p>
  </div>
</template>

<style scoped>
.surface {
  padding: 1rem;
  text-align: center;
}

h2 {
  margin-bottom: 0.5em;
  text-transform: capitalize;
  color: var(--color-text-emphasis);
}
</style>
