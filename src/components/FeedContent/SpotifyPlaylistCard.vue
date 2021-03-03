<template>
  <Card>
    <div class="spotifyPlaylist"></div>
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