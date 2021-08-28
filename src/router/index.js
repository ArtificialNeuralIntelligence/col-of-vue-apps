import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "../views/ProjectList.vue";
import AddNewProject from "../views/AddNewProject.vue";

const routes = [
  {
    path: "/",
    name: "projectlist",
    component: ProjectList,
  },
  {
    path: "/addnew",
    name: "addnewproject",
    component: AddNewProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
