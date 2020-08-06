<template>
  <div class="gallery__item">
    <img class="gallery__img" :src="image.path" :key="image.id" alt="Product item">
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: [`image`]
}
</script>
