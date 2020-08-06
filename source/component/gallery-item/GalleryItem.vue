<template>
  <div class="gallery__item">
    <img class="gallery__img" src="https://picsum.photos/200/200.webp" alt="Product item">
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: [`path`]
}
</script>
