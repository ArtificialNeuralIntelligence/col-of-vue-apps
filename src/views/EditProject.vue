<template>
  <div>
    <form @submit.prevent="handleeditsubmit">
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
      <button>Edit Project</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProject",
  props: {
    projects: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  emits: ["handleeditsubmit"],
  data() {
    return {
      title: "",
      description: "",
      selectedTypes: "",
    };
  },
  mounted() {
    const project = this.projects.filter((p) => p.id === Number(this.id));
    this.title = project[0].title;
    this.description = project[0].description;
    this.selectedTypes = project[0].projectType;
  },
  methods: {
    handleeditsubmit() {
      const projectObject = {
        id: Number(this.id),
        title: this.title,
        projectType: this.selectedTypes,
        description: this.description,
        completed: false,
      };
      this.$emit("handleeditsubmit", projectObject);
    },
  },
  computed: {
    getAllProjectTypes() {
      return new Set(this.projects.map((pt) => pt.projectType));
    },
  },
};
</script>

<style lang="scss" scoped></style>
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
