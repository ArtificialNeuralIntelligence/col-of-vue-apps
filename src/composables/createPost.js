import { ref } from "vue";
import { useRouter } from "vue-router";

const createPost = () => {
  const formsdata = ref({ title: "", content: "", tag: "", tags: [] });
  const router = useRouter();
  const handleSubmit = async () => {
    // create the post object
    const p = {
      title: formsdata.value.title,
      body: formsdata.value.content,
      tags: formsdata.value.tags,
    };
    // post the data to api
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(p),
    });

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
