<template>
  <post-lists :posts="refinedPosts" :error="error"></post-lists>
  <tag-cloud :posts="posts"></tag-cloud>
</template>

<script>
import { computed } from "vue";
import PostLists from "@/components/PostLists.vue";
import getPosts from "../composables/getPosts";
import TagCloud from "@/components/TagCloud.vue";
import { db } from "../firebase/config";

export default {
  name: "Tag",
  components: {
    PostLists,
    TagCloud,
  },
  props: {
    tag: {
      type: String,
    },
  },
  setup(props) {
    // fetch all the post
    const { posts, error, load } = getPosts();
    load(db);

    // depending on props get a computed property of refined postlists
    const refinedPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(props.tag));
    });
    return { refinedPosts, error, posts };
  },
};
</script>

<style lang="css" scoped></style>
