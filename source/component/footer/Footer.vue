<template>
  <footer class="footer">
    <section class="footer__user-navigation">
      <ul class="user-navigation">
        <li class="user-navigation__item">
          <a class="user-navigation__link" href="#">
            <svg class="user-navigation__icon" width="30" height="30">
              <use xlink:href="img/sprite.svg#home-dark"></use>
            </svg>
            <span class="user-navigation__text">Feed</span>
          </a>
        </li>
        <li class="user-navigation__item">
          <a class="user-navigation__link" href="#">
            <svg class="user-navigation__icon" width="30" height="30">
              <use xlink:href="img/sprite.svg#menu-dark"></use>
            </svg>
            <span class="user-navigation__text">Gallery</span>
          </a>
        </li>
        <li class="user-navigation__item">
          <a class="user-navigation__link" href="#">
            <svg class="user-navigation__icon" width="30" height="30">
              <use xlink:href="img/sprite.svg#add-dark"></use>
            </svg>
            <span class="user-navigation__text">Deals</span>
          </a>
        </li>
        <li class="user-navigation__item">
          <a class="user-navigation__link" href="#">
            <svg class="user-navigation__icon" width="30" height="30">
              <use xlink:href="img/sprite.svg#chat-dark"></use>
            </svg>
            <span class="user-navigation__text">Notify</span>
          </a>
        </li>
        <li class="user-navigation__item">
          <a class="user-navigation__link" href="#">
            <svg class="user-navigation__icon" width="30" height="30">
              <use xlink:href="img/sprite.svg#user-dark"></use>
            </svg>
            <span class="user-navigation__text">Profile</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>
