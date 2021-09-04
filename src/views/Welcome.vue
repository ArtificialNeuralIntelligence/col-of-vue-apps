<template>
  <div>Welcome page</div>
  <login-register></login-register>
</template>

<script>
import LoginRegister from "@/components/LoginRegister.vue";
export default {
  name: "Welcome",
  components: {
    LoginRegister,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
