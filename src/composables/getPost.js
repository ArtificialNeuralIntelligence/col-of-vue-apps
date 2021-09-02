import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      //Simulate delay
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      const resp = await fetch(`http://localhost:3000/posts/${id}`);
      if (!resp.ok) {
        throw Error("data not found");
      }
      post.value = await resp.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
