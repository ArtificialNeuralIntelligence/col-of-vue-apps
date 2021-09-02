import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Details from "../views/Details.vue";
import CreateForm from "../views/CreateForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchALL(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/post/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: CreateForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
