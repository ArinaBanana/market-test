<template>
  <section class="main__gallery gallery">
    <GalleryItem v-for="image in images" :image="image"></GalleryItem>
  </section>
</template>

<script>
import {generateImages} from "../../mock/images";
import GalleryItem from "../gallery-item/GalleryItem.vue";

const images = generateImages();

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
