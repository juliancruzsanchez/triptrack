<template>
  <Card>
    <div class="linkCard"></div>
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "../Card.vue";

export default {
  name: "LinkCard",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.overview {
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr 1fr;
  &:nth-child(odd) {
    font-weight: 600;
  }
}
</style>