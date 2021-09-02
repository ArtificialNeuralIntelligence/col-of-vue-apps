<template>
  <div v-if="error">
    <!-- check for errors -->
    {{ error }}
  </div>
  <div v-else>
    <div class="post-list" v-if="posts.length">
      <single-post v-for="post in posts" :key="post.id" :post="post" />
      <!-- show post in loop -->
    </div>
    <div v-else>
      <spinner />
      <!-- unless fetch the data show spinners -->
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import Spinner from "@/components/Spinner.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "PostLists",
  components: {
    SinglePost,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style lang="scss" scoped></style>
