<template >
  <Card :id="'linkCard_' + itemData.id">
    <div class="linkCard">
      <h2>{{ itemData.title }}</h2>
    </div>
  </Card>
</template>

<script>
// @ is an alias to /src
import Card from "../Card.vue";

export default {
  name: "LinkCard",
  props: ["itemData"],
  components: {
    Card,
  },
  mounted() {
    $("#linkCard_" + this.$props.itemData.id).addEventListener("click", (e) => {
      open(this.$props.itemData.href);
    });
  },
};
</script>