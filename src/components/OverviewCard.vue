<template>
  <Card>
    <div class="overview">
      <span>Last Used</span><span>{{ lastUsedDate }}</span>
      <span>Last Dose Taken</span><span>{{ lastDose }}</span>
      <span>Tab Type</span><span>{{ lastTabType }}</span>
    </div>
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "./Card.vue";

export default {
  name: "OverviewCard",
  components: {
    Card,
  },
  props: ["lastUsedDate", "lastDose", "lastLabType"],
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