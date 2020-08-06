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
        <ul class="filters__list">
          <li class="filters__item">
            <span class="filters__span">0-200</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">200-400</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">400-600</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">More</span>
          </li>
        </ul>

        <p class="filters__price-range">0 – $1 000 000</p>

        <div class="filters__range range">
          <div class="range__runner range__runner--left"></div>
          <div class="range__toggle"></div>
          <div class="range__runner range__runner--right"></div>
        </div>
      </section>

      <section class="filters__shape">
        <div class="filters__title">Shape</div>

        <ul class="filters__list">
          <li class="filters__item">
            <span class="filters__span">Circle</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">Square</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">Rectangle</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">Triangle</span>
          </li>
        </ul>
      </section>

      <section class="filters__size">
        <div class="filters__title">Size (Width / Height)</div>

        <ul class="filters__list">
          <li class="filters__item">
            <span class="filters__span">0-200</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">200-400</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">400-600</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">More</span>
          </li>
        </ul>

        <ul class="filters__list">
          <li class="filters__item">
            <span class="filters__span">0-200</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">200-400</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">400-600</span>
          </li>
          <li class="filters__item">
            <span class="filters__span">More</span>
          </li>
        </ul>
      </section>
    </div>

    <button class="filters__button-apply">Apply</button>
  </section>
</template>

<script>
export default {
  name: "PopupFilters"
}
</script>
