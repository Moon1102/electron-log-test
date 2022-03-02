import { createRouter, createWebHashHistory } from "vue-router";
import Page1 from "../view/page1/Page1.vue";

const routes = [
  {
    path: "/page1",
    component: Page1,
    meta: {
      id: "page1",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
