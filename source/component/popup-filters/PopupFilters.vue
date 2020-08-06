<template>
  <section class="filters hidden">
    <div class="filters__wrapper">
      <div class="filters__container">
        <div class="filters__main-title">Filter</div>
        <button class="filters__button-close button-close">
          <svg class="button-close__icon" width="20" height="20">
            <use xlink:href="img/sprite.svg#close"></use>
          </svg>
        </button>
      </div>

      <section class="filters__price">
        <div class="filters__title">Price ( $ )</div>
        <FiltersList :items="prices"></FiltersList>

        <p class="filters__price-range">0 – $1 000 000</p>

        <Range></Range>
      </section>

      <section class="filters__shape">
        <div class="filters__title">Shape</div>
        <FiltersList :items="shapes"></FiltersList>
      </section>

      <section class="filters__size">
        <div class="filters__title">Size (Width / Height)</div>
        <FiltersList :items="prices"></FiltersList>
        <FiltersList :items="prices"></FiltersList>
      </section>
    </div>

    <button class="filters__button-apply">Apply</button>
  </section>
</template>

<script>
import FiltersList from "../filters-list/FiltersList.vue";
import Range from "../range/Range.vue";

export default {
  name: "PopupFilters",
  components: {
    FiltersList,
    Range
  },
  data: () => ({
    prices: [`0-200`, `200-400`, `400-600`, `More`],
    shapes: [`Circle`, `Square`, `Rectangle`, `Triangle`]
  })
}
</script>
