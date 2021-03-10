<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view class="pageView" />
    </transition>
    <Footer v-on:startTrip="startTrip" v-on:endTrip="endTrip"></Footer>
    <add-trip-modal></add-trip-modal>
    <div class="overlay" @click="$root.$data.modalOpen = false"></div>
  </div>
</template>

<style lang="scss">
@import "./assets/global.scss";
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AddTripModal from "@/components/modals/AddTripModal.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    AddTripModal,
  },
  mounted() {
    $$("div").addEventListener("contextmenu", (e) => e.preventDefault());
  },
  data() {
    return {};
  },
  watch: {
    "$root.$data.modalOpen": function (a, b) {
      console.log(a, b);
      if (a) {
        $(".overlay").style.opacity = "1";
        $(".overlay").style.transform = "translateY(-100vh)";
      } else {
        $(".overlay").style.opacity = "0";
        setTimeout(() => {
          $(".overlay").style.transform = "translateY(0)";
        }, 750);
      }
    },
  },
  methods: {
    startTrip() {
      this.$root.startTrip();
    },
    endTrip() {
      this.$root.endTrip();
    },
  },
};
</script>