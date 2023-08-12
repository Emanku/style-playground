/*
  Hi, Sam here.  I'm planning on implementing a way
  to dynamically swich layouts on at least one page
  which is what this is for.  Might change it later.
*/

import SingleColumn from './SingleColumn.vue';
import SingleColumnHero from './SingleColumnHero.vue';

export default [
  {
    name: 'Single Column',
    component: SingleColumn
  },
  {
    name: 'Single Column Hero',
    component: SingleColumnHero
  }
];
