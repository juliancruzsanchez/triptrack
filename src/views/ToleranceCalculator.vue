<template>
  <div>
    <label for="lastDose">Last Dose:</label
    ><input name="lastDose" v-model="$data.lastDose" />
    <input v-model="$data.desiredDose" />
    <input v-model="$data.days" />
    <span>{{ this.requiredDose }}</span>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { toleranceCalculators } from "../utilities/toleranceCalculators";

export default {
  name: "ToleranceCalculator",
  data() {
    return {
      lastDose: 0,
      desiredDose: 0,
      days: 0,
      isLSD: true,
    };
  },
  computed: {
    requiredDose() {
      return toleranceCalculators.psychedelics(
        Number(this.$data.lastDose),
        Number(this.$data.desiredDose),
        Number(this.$data.days),
        true
      );
    },
  },
};
</script>