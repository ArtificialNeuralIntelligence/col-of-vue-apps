<template>
  <div>
    <form @submit.prevent="handlesubmit">
      <label for="title">Title:</label>
      <input type="text" name="title" v-model="title" required />
      <label for="projectType">Project Type:</label>
      <select name="projectType" id="" v-model="selectedTypes">
        <option
          v-for="projectType in getAllProjectTypes"
          :key="projectType"
          :value="projectType"
        >
          {{ projectType }}
        </option>
      </select>
      <label for="description">Description:</label>
      <textarea name="description" id="" v-model="description"></textarea>
      <button>Add Project</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewProject",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  emits: ["handlesubmit"],
  data() {
    return {
      projectTypes: [],
      title: "",
      description: "",
      selectedTypes: "",
    };
  },
  methods: {
    handlesubmit() {
      // create the project obj
      const projectObject = {
        id: this.projects[this.projects.length - 1].id + 1,
        title: this.title,
        projectType: this.selectedTypes,
        description: this.description,
        completed: false,
      };
      this.$emit("handlesubmit", projectObject);
    },
  },
  computed: {
    getAllProjectTypes() {
      return new Set(this.projects.map((pt) => pt.projectType));
    },
  },
};
</script>

<style lang="css" scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: flex;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
select {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
</style>
