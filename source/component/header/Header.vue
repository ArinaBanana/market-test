<template>
  <header class="header">
    <section class="header__logo logo">
      <img class="logo__img" src="img/logo/Logo-light.webp" alt="Market IBuy art">
    </section>

    <section class="header__sort">
      <ul class="sort">
        <li class="sort__item">
          <a class="sort__link" href="#">Top</a>
        </li>
        <li class="sort__item">
          <a class="sort__link" href="#">Painters</a>
        </li>
        <li class="sort__item">
          <a class="sort__link" href="#">Design</a>
        </li>
        <li class="sort__item">
          <a class="sort__link" href="#">Tags</a>
        </li>
      </ul>
    </section>

    <div class="header__container">
      <section class="header__search search">
        <svg class="search__icon" width="15" height="15">
          <use xlink:href="img/sprite.svg#shape"></use>
        </svg>
        <input class="search__input" type="search" id="field-search" placeholder="Search">
        <label class="visually-hidden" for="field-search">Search:</label>
      </section>
      <button class="header__button button-filters">
        <svg class="button-filters__icon" width="20" height="20">
          <use xlink:href="img/sprite.svg#mixer"></use>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>
