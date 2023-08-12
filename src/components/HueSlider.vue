<script setup lang="ts">
/*
  Hi, Sam here.
*/
import { computed, onBeforeMount, ref } from 'vue';

const props = defineProps<{ color: 'primary' | 'secondary' | 'tertiary' }>();

const root = document.querySelector(':root')! as HTMLElement;

const hue = ref(0);

onBeforeMount(() => {
  console.log('Get Hue', props.color);
  hue.value = parseInt(getComputedStyle(root).getPropertyValue(`--palette-${props.color}-hue`));
});

const hueColor = computed(() => {
  return { backgroundColor: `hsl(${hue.value}, 50%, 50%)` };
});

function updateColor() {
  console.log('Update Hue', props.color);
  root.style.setProperty(`--palette-${props.color}-hue`, hue.value.toString());
}
</script>

<template>
  <div class="hue-slider">
    <div class="name">{{ color }}</div>
    <div class="color-preview" :style="hueColor"></div>
    <input type="range" min="0" max="360" v-model="hue" @change="updateColor" />
    <input type="number" min="0" max="360" v-model="hue" @change="updateColor" />
  </div>
</template>

<style scoped>
.hue-slider {
  margin-bottom: 0.5rem;
  display: grid;
  gap: 0.2rem;
  grid-template-columns: repeat(3, min-content);
}
.name {
  grid-column: span 3;
  text-transform: capitalize;
}
.color-preview {
  width: 1em;
  height: 1em;
}
</style>
