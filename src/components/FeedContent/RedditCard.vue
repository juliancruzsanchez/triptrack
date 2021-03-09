<template>
  <Card>
    <div class="redditPost">
      <h1>{{ itemData.title }}/</h1>
      <h1>{{ itemData.author }}/</h1>

      <img class="redditPost-image" />
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";

export default {
  name: "SpotifyPlaylistCard",
  components: {
    Card,
  },
  props: ["itemData"],
};
</script>

<style lang="scss">
</style>