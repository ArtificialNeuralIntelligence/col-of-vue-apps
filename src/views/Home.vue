<template>
  <div class="home">
    <h1>Home</h1>
    <div class="layout">
      <post-lists :posts="posts" :error="error" />
      <tag-cloud :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostLists from "@/components/PostLists.vue";
import TagCloud from "@/components/TagCloud.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: {
    PostLists,
    TagCloud,
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
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
