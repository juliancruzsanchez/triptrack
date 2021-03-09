<template>
  <div class="pageView center-div">
    <div class="tolerancePage">
      <label class="center-text" for="lastDose">Last Dose:</label
      ><input name="lastDose" v-model="$data.lastDose" />
      <label class="center-text" for="lastDose">Desired Dose:</label>
      <input v-model="$data.desiredDose" />
      <label class="center-text" for="lastDose">Days Since Last Dose:</label>

      <input v-model="$data.days" />
      <span class="center-text" id="requiredDose">{{
        `Dose Required: ${
          this.requiredDose == "Infinity" ? 0 : this.requiredDose || 0
        }ug`
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tolerancePage {
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 10px;
}

.center-text {
  --height: 48px;
}
label {
  color: var(--text-color);
  font-weight: 500;
}
#requiredDose {
  grid-column-start: 1;
  grid-column-end: 3;
}

.pageView {
  height: 100vh;
}
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