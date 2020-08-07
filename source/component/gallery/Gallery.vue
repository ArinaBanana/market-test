<template>
  <section class="main__gallery gallery">
    <GalleryItem v-for="image in images" :image="image"></GalleryItem>
  </section>
</template>

<script>
import GalleryItem from "../gallery-item/GalleryItem.vue";
import mockApi from "../../mock/images";

export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  data: () => ({
    images: [],
  }),
  mounted() {
    mockApi(40).then((response) => {
      this.images = response;
    });
  }
}
</script>
