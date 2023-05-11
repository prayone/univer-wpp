import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
  {
    path: "/lx_znd",
    name: "lx_znd",
    component: () => import("../views/lx_znd.vue"),
  },
   {
    path: "/lx_znd",
    name: "lx_znd",
    component: () => import("../views/lx_znd.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
