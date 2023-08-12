/*
  Hi, Sam here.
  For now I'm going to try to keep this router
  setup pretty simple.  I'm adding some meta
  data for things like page layout.
*/

import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '@/views/LandingView.vue';
import ButtonsView from '@/views/ButtonsView.vue';
import SingleColumnHero from '@/layouts/SingleColumnHero.vue';
import HeroSinglePageView from '@/views/HeroSinglePageView.vue';
import SurfacesView from '@/views/SurfacesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/hero-single-page',
      name: 'hero-single-page',
      component: HeroSinglePageView,
      meta: { layout: SingleColumnHero }
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: ButtonsView
    },
    {
      path: '/surfaces',
      name: 'surfaces',
      component: SurfacesView
    }
  ]
});

export default router;
