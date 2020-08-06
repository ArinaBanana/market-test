<template>
  <section class="main__gallery gallery">
    <GalleryItem v-for="image in images" :path="image"></GalleryItem>
  </section>
</template>

<script>
import {images} from "../../mock/images";
import GalleryItem from "../gallery-item/GalleryItem.vue";

export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  data: () => ({
    images,
  })
}
</script>
