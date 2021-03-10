<template>
  <div class="actionBar-wrapper">
    <div
      v-if="pagesWithMenu.includes($route.path)"
      :class="$root.$data.modalOpen ? 'actionBar open' : 'actionBar'"
    >
      <div
        v-if="$root.$data.userObject && $root.$data.userObject.isTripping"
        @click="$emit('endTrip')"
        class="button"
      >
        End Trip
      </div>
      <div v-else class="button" @click="$emit('startTrip')">Start Trip</div>
      <div class="button" @click="gotoPage('/tolerance')">
        Tolerance Calculator
      </div>
      <div class="button">Settings</div>
    </div>
    <div v-else class="actionBar">
      <div class="button" @click="$router.go(-1)">Back</div>
      <div class="button"></div>
      <div class="button"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      pagesWithMenu: ["/", "/drugHistory"],
    };
  },
  mounted() {
    const actionBar = $(".actionBar");
    actionBar.addEventListener("swiped-up", () => {
      if (this.$data.pagesWithMenu.includes(this.$route.path)) {
        this.$root.$data.modalOpen = true;
      }
    });
    actionBar.addEventListener("swiped-down", () => {
      if (this.$data.pagesWithMenu.includes(this.$route.path)) {
        this.$root.$data.modalOpen = false;
      }
    });
    actionBar.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false
    );
  },
  methods: {
    gotoPage(path) {
      this.$data.isOpen = false;
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
.actionBar {
  position: fixed;
  height: var(--heightWhenOpen);
  width: 100vw;
  background: var(--action-bar-background);
  bottom: 0;
  border-radius: 22.5px 22.5px 0 0;
  box-shadow: #00000096 0 0 25px;
  text-align: center;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(1fr, var(--numberOfButtons));
  transition: all 0.75s ease;
  padding: var(--spacing) 0;
  grid-gap: var(--spacing);
  overflow: hidden;
  transform: translateY(
    calc(var(--heightWhenOpen) - (var(--buttonHeight) + (var(--spacing) * 2)))
  );
  pointer-events: all;
  &.open {
    transform: translateY(0);
  }
  &-wrapper {
    --buttonHeight: 44px;
    --spacing: 32px;
    --numberOfButtons: 3;
    --heightWhenOpen: calc(
      (var(--numberOfButtons) * (var(--buttonHeight) + var(--spacing))) +
        var(--spacing)
    );
    pointer-events: none;
    position: fixed;
    overflow: hidden;
    bottom: 0;
    height: calc(var(--heightWhenOpen)+ 32px);
  }
}

.button {
  justify-items: center;
  width: 75%;
  height: var(--buttonHeight);
  background: var(--button-background);
  line-height: var(--buttonHeight);
  font-size: 20px;
  vertical-align: -webkit-baseline-middle;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: rgb(100 100 100 / 50%) 0px 2px 6px;
}
</style>