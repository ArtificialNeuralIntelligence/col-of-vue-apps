import { doc, deleteDoc } from "@firebase/firestore";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";

const deletePost = (id) => {
  const router = useRouter();
  const handleDelete = async () => {
    // connect to firestore to delete the post
    await deleteDoc(doc(db, "posts", id));
    // await deleteDoc(collection(db, "posts"), id);
    // re route to home
    router.push({ name: "Home" });
  };
  return { handleDelete };
};
export default deletePost;
