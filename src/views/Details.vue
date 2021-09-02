<template>
  <div v-if="error">
    <!-- check for errors -->
    {{ error }}
  </div>
  <div v-else>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>

    <div v-else>
      <spinner />
      <!-- unless fetch the data show spinners -->
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import getPost from "../composables/getPost";
export default {
  name: "Details",
  props: {
    id: {
      type: String,
    },
  },
  components: {
    Spinner,
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style lang="css" scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
