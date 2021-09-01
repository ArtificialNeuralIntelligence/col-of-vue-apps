<template>
  <div>
    <h1>The page you are looking for doesn't exist</h1>
    <button @click="goHome">Go to home</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  setup() {
    const goHome = () => {
      this.$router.push({ name: "Home" });
    };
    return { goHome };
  },
};
</script>

<style lang="scss" scoped></style>
