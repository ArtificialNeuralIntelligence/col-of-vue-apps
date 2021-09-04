// import { addDoc, collection } from "@firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db, timestamp } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const createPost = () => {
  const formsdata = ref({ title: "", content: "", tag: "", tags: [] });
  const router = useRouter();
  const handleSubmit = async () => {
    // post the data to api
    const p = {
      title: formsdata.value.title,
      body: formsdata.value.content,
      tags: formsdata.value.tags,
      createdAt: timestamp,
    };
    await addDoc(collection(db, "posts"), p);

    //re route to home
    router.push({ name: "Home" });
  };
  const handletag = () => {
    // check if tag exist in tags
    if (!formsdata.value.tags.includes(formsdata.value.tag)) {
      // clear spaces
      let t = formsdata.value.tag.replace(/\s/g, "");
      // push to tags
      formsdata.value.tags.push(t);
    }
    formsdata.value.tag = "";
    // clear tag field regadless exist or not
  };
  return { formsdata, handleSubmit, handletag };
};

export default createPost;
