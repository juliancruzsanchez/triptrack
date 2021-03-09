<template>
  <Card>
    <div class="spotifyPlaylist">
      <img class="spotifyPlaylist-albumArt" />
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";

import * as spotify from "@/utilities/spotifyArt.js";
window.spotify = spotify;
export default {
  name: "SpotifyPlaylistCard",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.spotifyPlaylist {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>