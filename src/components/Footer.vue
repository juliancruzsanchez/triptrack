<template>
  <div class="actionBar-wrapper">
    <div :class="isOpen ? 'actionBar open' : 'actionBar'" preventScrollBubbling>
      <div class="button">Add Trip</div>
      <div class="button">Tolerance Calculator</div>
      <div class="button">Settings</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    document.querySelector(".actionBar").addEventListener("swiped-up", () => {
      this.$data.isOpen = true;
    });
    document.querySelector(".actionBar").addEventListener("swiped-down", () => {
      this.$data.isOpen = false;
    });
  },
};
</script>

<style lang="scss">
.actionBar {
  --buttonHeight: 44px;
  --spacing: 32px;
  --numberOfButtons: 3;
  --heightWhenOpen: calc(
    (var(--numberOfButtons) * (var(--buttonHeight) + var(--spacing))) +
      var(--spacing)
  );
  height: var(--heightWhenOpen);
  width: 100vw;
  background: linear-gradient(#005bea, #00c6fb);
  bottom: 0;
  border-radius: 22.5px 22.5px 0 0;
  box-shadow: #00000096 0 0 25px;
  text-align: center;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(1fr, var(--numberOfButtons));
  transition: all 0.75s ease-in-out;
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
    pointer-events: none;
    position: fixed;
    overflow: hidden;
    bottom: 0;
    height: var(--heightWhenOpen);
  }
}

.button {
  justify-items: center;
  width: 75%;
  height: var(--buttonHeight);
  background: white;
  line-height: var(--buttonHeight);
  font-size: 20px;
  vertical-align: -webkit-baseline-middle;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: rgb(100 100 100 / 50%) 0px 2px 6px;
}
</style>