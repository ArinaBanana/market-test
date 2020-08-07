<template>
    <div class="wrapper">
      <Header @clickFilters="openPopupFilters"></Header>
      <Main></Main>
      <Footer></Footer>

      <transition name="leave">
        <PopupFilters @clickCloseButton="closePopupFilters" v-if="isPopupVisible"></PopupFilters>
      </transition>
    </div>
</template>

<script>
import Header from "../header/Header.vue";
import Main from "../main/Main.vue";
import Footer from "../footer/Footer.vue";
import PopupFilters from "../popup-filters/PopupFilters.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    PopupFilters
  },
  data: () => ({
    isPopupVisible: false,
  }),
  methods: {
    openPopupFilters() {
      this.isPopupVisible = true;
    },

    closePopupFilters() {
      this.isPopupVisible = false;
    }
  }
}
</script>
