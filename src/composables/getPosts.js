import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //Simulate delay
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      const resp = await fetch("http://localhost:3000/posts");
      if (!resp.ok) {
        throw Error("data not found");
      }
      posts.value = await resp.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
