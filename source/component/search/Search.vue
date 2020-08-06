<template>
  <section class="header__search search">
    <svg class="search__icon" width="15" height="15">
      <use xlink:href="img/sprite.svg#shape"></use>
    </svg>
    <input class="search__input" type="search" id="field-search" placeholder="Search">
    <label class="visually-hidden" for="field-search">Search:</label>
  </section>
</template>

<script>
export default {
  name: "Search"
}
</script>
