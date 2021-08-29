<template>
  <div class="project" :class="project.completed ? 'complete' : ''">
    <div class="actions">
      <h3 @click="showDesc = !showDesc">{{ project.title }}</h3>
      - <small>{{ project.projectType }}</small>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span class="material-icons" @click="handledelete(project.id)"
          >delete</span
        >
        <span
          v-if="project.completed"
          class="material-icons"
          @click="handledone(project.id)"
          >cancel</span
        >
        <span v-else class="material-icons" @click="handledone(project.id)"
          >done</span
        >
      </div>
    </div>
    <div class="desc" v-show="showDesc">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  emits: ["handledone", "handledelete"],
  data() {
    return {
      showDesc: false,
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
