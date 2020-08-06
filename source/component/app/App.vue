<template>
    <div class="wrapper">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <PopupFilters></PopupFilters>
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
  }
}
</script>
