<template>
  <main class="main">
    <h1 class="visually-hidden">Gallery of art goods</h1>
    <div class="main__container">
      <Gallery></Gallery>
    </div>
  </main>
</template>

<script>
import Gallery from "../gallery/Gallery.vue";

export default {
  name: "Main",
  components: {
    Gallery
  }
}
</script>

