<template>
  <main @scroll="handleScroll" class="main">
    <h1 class="visually-hidden">Gallery of art goods</h1>
    <div class="main__container">
      <Gallery :images="images"></Gallery>
      <div class="loading loading__text" v-if="showBottomSpinner">Loading...</div>
      <div class="loading loading__spinner" v-if="isLoading"></div>
    </div>
  </main>
</template>

<script>
import Gallery from "../gallery/Gallery.vue";
import {debounce} from "../../utils/func";
import mockApi from "../../mock/images";

const QUANTITY_IMAGES = 40;

export default {
  name: "Main",
  components: {
    Gallery
  },

  data: () => ({
    isLoading: false,
    images: [],
  }),

  mounted() {
    this.loadMore()
  },

  computed: {
    showBottomSpinner() {
      return Boolean(this.images.length) || this.isLoading;
    }
  },

  methods: {
    loadMore() {
      this.isLoading = true;

      return mockApi(QUANTITY_IMAGES).then((response) => {
        this.isLoading = false;
        this.images = this.images.concat(response)
      })
    },
    handleScroll: debounce(function (event) {

      if (this.isLoading) {
        return;
      }

      const scrollTop = event.target.scrollTop;
      const containerClientHeight = event.target.clientHeight;
      const listClientHeight = event.target.scrollHeight;

      const restPart = listClientHeight - (containerClientHeight + scrollTop);

      if (restPart < 100) {
        this.loadMore();
      }
    }, 100)
  }
}
</script>

