<template>
  <div class="home">
    <post-lists :posts="posts" :error="error" />
  </div>
</template>

<script>
import PostLists from "@/components/PostLists.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: {
    PostLists,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
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
