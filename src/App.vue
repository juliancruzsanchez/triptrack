<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view class="pageView" />
    </transition>
    <Footer v-on:startTrip="startTrip" v-on:endTrip="endTrip"></Footer>
    <add-trip-modal></add-trip-modal>
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
  data() {
    return {};
  },
  methods: {
    startTrip() {
      _firebase.startTrip();
    },
    endTrip() {
      _firebase.endTrip();
    },
  },
};
</script>