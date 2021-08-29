<template>
  <project-card
    v-for="project in projects"
    :key="project.id"
    :project="project"
    @handledone="handledone"
  >
  </project-card>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import axios from "axios";
export default {
  name: "ProjectList",
  components: {
    ProjectCard,
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
  },
};
</script>

<style lang="css" scoped></style>
