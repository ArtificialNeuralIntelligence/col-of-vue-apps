<template>
  <project-card
    v-for="project in projects"
    :key="project.id"
    :project="project"
    @handledone="handledone"
    @handledelete="handledelete"
  >
  </project-card>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectList",
  components: {
    ProjectCard,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  emits: ["handledone", "handledelete"],
  methods: {
    handledone(id) {
      this.$emit("handledone", id);
    },
    handledelete(id) {
      this.$emit("handledelete", id);
    },
  },
};
</script>

<style lang="css" scoped></style>
