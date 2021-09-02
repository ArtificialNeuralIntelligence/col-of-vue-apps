<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-if="!t.length">
      <spinner></spinner>
    </div>
    <div v-else>
      <div v-for="tag in t" :key="tag">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          #{{ tag }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import { ref, watchEffect } from "vue";
import getTags from "../composables/getTags";
export default {
  name: "TagCloud",
  components: {
    Spinner,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const t = ref([]);
    watchEffect(() => {
      if (props.posts.length) {
        const { tags } = getTags(props.posts);
        t.value = tags.value;
      }
    });
    return { t };
  },
};
</script>

<style lang="css" scoped>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
