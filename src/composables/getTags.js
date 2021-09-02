import { ref } from "vue";

const getTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  // loop through each post and get a non duplicated set
  posts.forEach((post) => {
    post.tags.forEach((t) => tagSet.add(t));
  });
  // return as an arrat
  tags.value = [...tagSet];

  return { tags };
};

export default getTags;
