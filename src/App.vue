<script setup lang="ts">
/*
  Hi, Sam here.
*/
import type { RouteMeta } from 'vue-router';
import type { Component } from 'vue';
import layouts from './layouts/layouts';

let defaultLayout = layouts[0];

function getLayout(routeMeta: RouteMeta) {
  console.log('Get Layout', routeMeta.layout);
  const layout = routeMeta.layout ? (routeMeta.layout as Component) : defaultLayout.component;
  console.log('Layout', layout);
  return layout;
}
</script>

<template>
  <component :is="getLayout($route.meta)">
    <RouterView />
  </component>
</template>

<style scoped></style>
