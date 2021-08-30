<template>
  <div id="nav">
    <main-navigation />
  </div>
  <router-view
    :projects="projects"
    @handledone="handledone"
    @handledelete="handledelete"
    @handlesubmit="handlesubmit"
    @handleeditsubmit="handleeditsubmit"
  />
</template>
<script>
import axios from "axios";
import MainNavigation from "./components/MainNavigation.vue";
export default {
  components: {
    MainNavigation,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/projects")
      .then((res) => (this.projects = res.data))
      .catch((err) => console.log(err));
  },
  methods: {
    handledone(id) {
      const project = this.projects.filter((p) => p.id === id);
      project[0].completed = !project[0].completed;
      axios
        .patch(`http://localhost:3000/projects/${id}`, {
          completed: project[0].completed,
        })
        .catch((err) => console.log(err));
    },
    handledelete(id) {
      // delete from this.projects
      this.projects = this.projects.filter((p) => p.id !== id);
      // apply on db.json
      axios
        .delete(`http://localhost:3000/projects/${id}`)
        .catch((err) => console.log(err));
    },
    handlesubmit(projectObject) {
      // push new project to root project list array
      this.projects.push(projectObject);
      // add the project on db.json
      axios
        .post("http://localhost:3000/projects", projectObject)
        .catch((err) => console.log(err));
      // re route to project list
      this.$router.push({ name: "projectlist" });
    },
    handleeditsubmit(projectObject) {
      // get desired item index from the array
      const itemindex = this.projects.findIndex(
        (p) => p.id === projectObject.id
      );
      // replace the object with new object in proper index
      this.projects[itemindex] = projectObject;
      // push to db.json
      axios
        .patch(`http://localhost:3000/projects/${projectObject.id}`, {
          ...projectObject,
        })
        .catch((err) => console.log(err));
      // re route to project list
      this.$router.push({ name: "projectlist" });
    },
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
