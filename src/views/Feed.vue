<template>
  <div class="home">
    <transition-group name="list" tag="div" class="feed">
      <div v-for="feed in feedContent" :key="feed.id">
        <spotify-playlist-card
          v-if="feed.contentType == 'spotify'"
          :itemData="feed"
        ></spotify-playlist-card>
        <link-card
          v-else-if="feed.contentType == 'link'"
          :itemData="feed"
        ></link-card>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import OverviewCard from "@/components/OverviewCard.vue";
import Header from "@/components/Header.vue";
import SpotifyPlaylistCard from "../components/FeedContent/SpotifyPlaylistCard.vue";
import LinkCard from "../components/FeedContent/LinkCard.vue";
import * as server from "../utilities/database";
export default {
  name: "Feed",
  data() {
    return {
      feedContent: [],
    };
  },
  components: {
    Card,
    OverviewCard,
    Header,
    SpotifyPlaylistCard,
    LinkCard,
  },
  mounted() {
    server.default.database
      .db()
      .collection("feedContent")
      // .where("state", "==", "CA")
      .onSnapshot((querySnapshot) => {
        var feedContent = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          feedContent.push(data);
        });
        this.$data.feedContent = feedContent;
      });
  },
};
</script>