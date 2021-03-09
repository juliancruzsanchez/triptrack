<template>
  <div
    class="header"
    v-if="$route.name == 'Feed' || $route.name == 'Drug History'"
  >
    <div
      @click="$router.replace('/')"
      :class="`header-item ${$route.name == 'Feed' ? 'active' : null}`"
    >
      <h3><span>Feed</span></h3>
    </div>
    <div
      @click="$router.replace('/drugHistory')"
      :class="`header-item ${$route.name == 'Drug History' ? 'active' : null}`"
    >
      <h3><span>Drug History</span></h3>
    </div>
  </div>
  <div class="header" v-else>
    <div class="header-item active">
      <h3>
        <span>{{ $router.currentRoute.name }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".header").addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false
    );
  },
};
</script>

<style lang="scss">
.header {
  transition: background 0.75s ease;
  position: fixed;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  padding: var(--notchSize) var(--headerPadding) var(--headerPadding)
    var(--headerPadding);
  width: 100vw;
  box-shadow: #00000096 0 0 25px;
  z-index: 1000;
  border-radius: 0 0 22.5px 22.5px;
  background: var(--header-background);

  &-item {
    text-align: center;
    h3::before {
      content: "";
      height: 45px;
      display: block;
      top: 0;
      position: relative;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      transition: opacity 0.5s ease;
      opacity: 0;
      transform: translateY(45px);
      border-radius: 45px;
      background: var(--header-button-active-background);
      box-shadow: var(--header-button-active-shadow);
    }

    &:only-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    height: 45px;
    h3 {
      line-height: 45px;
      margin-top: -45px;
      span {
        z-index: 1;
      }
    }
    &.active h3::before {
      opacity: 1;
    }
  }
}
</style>