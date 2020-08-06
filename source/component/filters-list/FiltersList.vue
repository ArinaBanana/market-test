<template>
  <ul class="filters__list">
    <FiltersItem v-for="item in items" :item="item"></FiltersItem>
  </ul>
</template>

<script>
import FiltersItem from "../filters-item/FiltersItem.vue";

export default {
  name: "FiltersList",
  components: {
    FiltersItem
  },
  props: [`items`]
}
</script>
