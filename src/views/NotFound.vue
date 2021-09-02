<template>
  <div>
    <h1>The page you are looking for doesn't exist</h1>
    <button @click="goHome">Go to home</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "NotFound",
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push({ name: "Home" });
    };
    return { goHome };
  },
};
</script>

<style lang="scss" scoped></style>
