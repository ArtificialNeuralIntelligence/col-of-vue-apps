import { doc, getDoc } from "@firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      //Simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve();
      //   }, 2000);
      // });

      const docRef = doc(db, "posts", id);
      if (!docRef) {
        throw new Error("data not found");
      }
      const snaps = await getDoc(docRef);
      post.value = { ...snaps.data(), id: snaps.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
