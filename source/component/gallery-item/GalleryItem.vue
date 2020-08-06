<template>
  <div class="gallery__item">
    <img class="gallery__img" :src="path" alt="Product item">
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: [`path`]
}
</script>
