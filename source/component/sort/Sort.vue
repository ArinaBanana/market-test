<template>
  <ul class="sort">
    <li v-for="tag in tags" class="sort__item">
      <a class="sort__link" href="#">{{tag}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Sort",
  data: () => ({
    tags: [`Top`, `Painters`, `Design`, `Tags`]
  })
}
</script>
