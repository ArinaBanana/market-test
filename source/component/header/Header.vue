<template>
  <header class="header">
    <section class="header__logo logo">
      <img class="logo__img" src="img/logo/Logo-light.webp" alt="Market IBuy art">
    </section>

    <section class="header__sort">
      <Sort></Sort>
    </section>

    <div class="header__container">
      <Search></Search>

      <button class="header__button button-filters">
        <svg class="button-filters__icon" width="20" height="20">
          <use xlink:href="img/sprite.svg#mixer"></use>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import Sort from "../sort/Sort.vue";
import Search from "../search/Search.vue";

export default {
  name: "Header",
  components: {
    Sort,
    Search
  }
}
</script>
