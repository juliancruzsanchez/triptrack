<template>
  <div id="app">
    <Header></Header>
    <router-view class="pageView" />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "./assets/global.scss";
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>