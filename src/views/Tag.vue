<template>
  <post-lists :posts="refinedPosts" :error="error"></post-lists>
</template>

<script>
import { computed } from "vue";
import PostLists from "@/components/PostLists.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "Tag",
  components: {
    PostLists,
  },
  props: {
    tag: {
      type: String,
    },
  },
  setup(props) {
    // fetch all the post
    const { posts, error, load } = getPosts();
    load();

    // depending on props get a computed property of refined postlists
    const refinedPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(props.tag));
    });
    //
    console.log(refinedPosts);
    return { refinedPosts, error };
  },
};
</script>

<style lang="css" scoped></style>
