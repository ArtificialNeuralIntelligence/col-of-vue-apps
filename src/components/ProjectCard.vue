<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDesc = !showDesc">Project title</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span class="material-icons">delete</span>
        <span class="material-icons">done</span>
      </div>
    </div>
    <div class="desc" v-show="showDesc">
      <p>Project description</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      showDesc: false,
    };
  },
};
</script>

<style lang="css" scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
.complete {
  border-left: 4px solid #42b983;
}
h3 {
  cursor: pointer;
}
small {
  font-size: 0.7em;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
