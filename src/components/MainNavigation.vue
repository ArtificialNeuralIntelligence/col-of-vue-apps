<template>
  <div class="main-nav">
    <router-link :to="{ name: 'projectlist' }">Project List</router-link>
    <router-link :to="{ name: 'addnewproject' }">Add New Project</router-link>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
};
</script>

<style lang="css" scoped>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-exact-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>
