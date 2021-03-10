<template>
  <div class="home">
    <div class="feed">
      <trip-card
        v-for="trip of drugHistory"
        :itemData="trip"
        :key="trip.timestamp"
      ></trip-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as _server from "../utilities/database";
import TripCard from "../components/FeedContent/TripCard.vue";
const server = _server.default;
export default {
  name: "Home",
  components: {
    TripCard,
  },
  data() {
    return {
      drugHistory: [],
    };
  },
  mounted() {
    if (this.$root.$data.user) {
      this.loadTrips();
    }
  },
  watch: {
    "$root.$data.user": function () {
      this.loadTrips();
    },
  },
  methods: {
    loadTrips() {
      server.database.watchTrips(this.$root.$data.user, (trips) => {
        this.$data.drugHistory = [];

        for (let trip of trips) {
          this.$data.drugHistory.push(trip.data());
        }
      });
    },
  },
};
</script>
