<template>
  <div class="card">
    <div class="card-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  box-sizing: border-box;
  border-radius: 22.5px;
  min-height: 145px;
  background: #f2f2f2;
  box-shadow: #64646480 0 2px 4px;
  &-inner {
    padding: 10px;
    text-align: left;
    height: 100%;
  }
}
</style>