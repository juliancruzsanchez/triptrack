<template >
  <Card :id="'tripCard_' + itemData.timestamp">
    <div class="tripCard">
      <span>Dosage Taken</span><span>{{ dosageTaken }}ug</span>
      <hr />
      <div>
        <span>Tabs Taken</span><span>{{ itemData.tabsTaken }}</span>
      </div>
      <div>
        <span>Dosage Per Tab</span><span>{{ itemData.ugPerTab }}ug</span>
      </div>

      <hr />
      <span>Trip Duration</span><span>{{ tripDuration }}</span>

      <span @click="showRelativeTime = !showRelativeTime">Trip Start</span
      ><span @click="showRelativeTime = !showRelativeTime">{{
        showRelativeTime ? relativeStartTime : absoluteStartTime
      }}</span>
      <span
        v-if="itemData.endTimestamp"
        @click="showRelativeTime = !showRelativeTime"
        >Trip End</span
      ><span
        v-if="itemData.endTimestamp"
        @click="showRelativeTime = !showRelativeTime"
        >{{ showRelativeTime ? relativeEndTime : absoluteEndTime }}</span
      >
    </div>
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "../Card.vue";
import * as moment from "moment";

export default {
  name: "TripCard",
  props: ["itemData"],
  components: {
    Card,
  },
  data() {
    return {
      showRelativeTime: true,
    };
  },
  mounted() {
    window.moment = moment;
  },
  methods: {},

  computed: {
    dosageTaken: function () {
      return this.$props.itemData.ugPerTab * this.$props.itemData.tabsTaken;
    },
    relativeStartTime: function () {
      return moment(this.$props.itemData.timestamp).format("M/D/YY h:mm a");
    },
    absoluteStartTime: function () {
      return moment(this.$props.itemData.timestamp).fromNow();
    },
    relativeEndTime: function () {
      return moment(this.$props.itemData.endTimestamp).format("M/D/YY h:mm a");
    },

    absoluteEndTime: function () {
      return moment(this.$props.itemData.endTimestamp).fromNow();
    },
    tripDuration: function () {
      let start = moment(this.$props.itemData.timestamp);
      let end = moment(this.$props.itemData.endTimestamp);
      return start.from(end, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.tripCard {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  :nth-child(even) {
    text-align: right;
  }
  span:nth-child(odd) {
    font-weight: 600;
  }
  div {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    span {
      text-align: center !important;
    }
  }
  hr {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    border-color: #f9f9f966;
  }
}
</style>