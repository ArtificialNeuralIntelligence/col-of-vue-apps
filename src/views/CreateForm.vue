<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title:</label>
      <input type="text" name="title" v-model="formsdata.title" required />
      <label for="content">Content:</label>
      <textarea name="content" v-model="formsdata.content" required></textarea>
      <label for="tags">Tags: (hit enter to add a tag)</label>
      <input
        name="tags"
        v-model="formsdata.tag"
        type="text"
        @keydown.enter.prevent="handletag"
        @keydown.space.prevent
      />
      <div class="pill" v-for="tag in formsdata.tags" :key="tag">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import createPost from "../composables/createPost";
export default {
  name: "CreateForm",
  setup() {
    const { formsdata, handleSubmit, handletag } = createPost();
    return { formsdata, handleSubmit, handletag };
  },
};
</script>

<style lang="css" scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
