import { ref } from "vue";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //Simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve();
      //   }, 2000);
      // });
      const snaps = await getDocs(
        query(collection(db, "posts"), orderBy("createdAt", "desc"))
      );
      posts.value = snaps.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
