<template>
  <filter-nav
    @filterChange="currentfilter = $event"
    :current="currentfilter"
  ></filter-nav>
  <project-card
    v-for="project in filteredProjects"
    :key="project.id"
    :project="project"
    @handledone="handledone"
    @handledelete="handledelete"
  >
  </project-card>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import FilterNav from "@/components/FilterNav.vue";
export default {
  name: "ProjectList",
  components: {
    ProjectCard,
    FilterNav,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  emits: ["handledone", "handledelete"],
  data() {
    return {
      currentfilter: "all",
    };
  },
  methods: {
    handledone(id) {
      this.$emit("handledone", id);
    },
    handledelete(id) {
      this.$emit("handledelete", id);
    },
  },
  computed: {
    filteredProjects() {
      if (this.currentfilter === "ongoing") {
        return this.projects.filter((p) => !p.completed);
      } else if (this.currentfilter === "completed") {
        return this.projects.filter((p) => p.completed);
      } else {
        return this.projects;
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
