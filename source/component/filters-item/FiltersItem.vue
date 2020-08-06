<template>
  <li class="filters__item">
    <span class="filters__span">{{item}}</span>
  </li>
</template>

<script>
export default {
  name: "FiltersItem",
  props: [`item`]
}
</script>
