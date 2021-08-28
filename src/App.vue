<template>
  <div id="nav">
    <main-navigation />
  </div>
  <router-view />
</template>
<script>
import MainNavigation from "./components/MainNavigation.vue";
export default {
  components: {
    MainNavigation,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
