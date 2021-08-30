import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "../views/ProjectList.vue";
import AddNewProject from "../views/AddNewProject.vue";
import EditProject from "../views/EditProject.vue";
import NotFound from "../views/NotFound.vue";

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
  {
    path: "/edit/:id",
    name: "editproject",
    component: EditProject,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "404error",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
