<template>
  <div v-if="error">
    <!-- check for errors -->
    {{ error }}
  </div>
  <div v-else>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleDelete">Delete this post</button>
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
import deletePost from "../composables/deletePost";
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
    const { handleDelete } = deletePost(props.id);
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error, handleDelete };
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
button {
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
</style>
