<template>
  <div class="home">
    <post-lists />
  </div>
</template>

<script>
import PostLists from "@/components/PostLists.vue";

export default {
  name: "Home",
  components: {
    PostLists,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
