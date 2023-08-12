<script setup lang="ts">
/*
  Hi, Sam here.
  This is an example of how these styles might
  look on a single-page marketing site
*/
</script>

<template>
  <section class="hero">
    <div class="wrapper">
      <h1 class="title large-text">My Style Playground</h1>
      <p>Take a look at this page that mimics a single-page site</p>
      <p>Here we've got a Hero section meant for a full-screen image</p>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Some Simple Text</h2>
      <div>
        <p>This page has been set up so each section will alternate colours.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ligula metus. Ut et
          nisl vitae nisl hendrerit consequat. Nulla nec consequat est, vitae varius metus.
          Phasellus eu tortor at lacus pellentesque commodo sit amet nec massa. Cras egestas nibh
          nibh, feugiat efficitur ligula placerat sed. Morbi ac libero in lacus imperdiet
          sollicitudin. Fusce gravida erat lorem, ut consequat felis molestie eget. Etiam malesuada
          ante sed ipsum dictum, eu iaculis dolor faucibus. Sed tempor sem eleifend efficitur
          fringilla. Nulla hendrerit tortor ac congue scelerisque. Nulla sit amet augue sit amet
          nibh suscipit rhoncus sit amet sed metus. Duis fermentum sem vitae viverra cursus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vestibulum aliquet sapien sit amet quam sodales bibendum eu id ex. In congue, purus sed
          commodo fermentum, ante lacus dignissim nisi, vitae blandit turpis eros at nisi. Praesent
          ullamcorper tristique velit ut aliquam.
        </p>
        <p>
          Suspendisse ante nunc, convallis in consequat a, vehicula auctor ante. Vestibulum at lorem
          eget nunc condimentum dictum at efficitur libero. Sed sollicitudin nisi arcu, sed faucibus
          augue cursus quis. Sed vel hendrerit velit, id aliquet elit. Integer suscipit consectetur
          arcu, ut faucibus leo maximus at. Donec bibendum, ipsum sed elementum ornare, nisi neque
          aliquet ligula, vitae pharetra dui mi nec purus. Nam ac interdum ante. Nulla eu neque
          sagittis, aliquam odio a, condimentum urna. Nulla porta in nunc ut vestibulum. Nam
          tristique, turpis ac laoreet vestibulum, lectus dui fermentum sapien, id posuere enim odio
          id diam. Mauris eget pulvinar tellus. Cras lobortis fermentum lacinia. Proin interdum
          pretium lacus eu tempus. Integer quam erat, rhoncus sit amet ex et, mollis tempor nulla.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  place-items: center;
  text-align: center;
}

section {
  padding-block: 3rem;
}

p,
h1,
h2 {
  margin-bottom: 1em;
}

section:nth-child(even) {
  background-color: var(--color-surface-variant);
  color: var(--color-on-surface-variant);
}
</style>
