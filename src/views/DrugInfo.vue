<template>
  <div class="home">
    <transition-group name="list" tag="div" class="feed">
      <trip-card
        v-for="trip of drugHistory"
        :itemData="trip"
        :key="trip.timestamp"
        v-on:remove="deleteTrip(trip.timestamp)"
      ></trip-card>
    </transition-group>
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
    deleteTrip(timestamp) {
      var trips = server.database
        .getUserDoc(this.$root.$data.user)
        .collection("trips")
        .where("timestamp", "==", timestamp)
        .where("tripActive", "==", false)
        .get()
        .then((e) => {
          if (e.docs.length == 0) {
            throw new Error("You can't delete an active trip!");
          }
          e.docs.forEach((doc) => {
            doc.ref.delete().then((x) => {
              this.loadTrips();
            });
          });
        })
        .catch((e) => {
          ModernModals.alert(e);
        });
    },
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
