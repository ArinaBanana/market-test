<template>
  <section class="main__gallery gallery">
    <GalleryItem v-for="image in images" :image="image"></GalleryItem>
  </section>
</template>

<script>
import GalleryItem from "../gallery-item/GalleryItem.vue";

export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  props: [`images`]
}
</script>
