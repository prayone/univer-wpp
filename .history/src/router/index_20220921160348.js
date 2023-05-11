import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/free",
    name: "free",
    component: () => import("../views/free.vue"),
  },
  {
    path: "/henan",
    name: "henan",
    component: () => import("../views/henan.vue"),
  },
  {
    path: "/beikao",
    name: "beikao",
    component: () => import("../views/beikao.vue"),
  },
  {
    path: "/polytwo",
    name: "polytwo",
    component: () => import("../views/polytwo.vue"),
  },
  {
    path: "/polyfree",
    name: "polyfree",
    component: () => import("../views/polyfree.vue"),
  },
  {
    path: "/polythree",
    name: "polythree",
    component: () => import("../views/polythree.vue"),
  },
  {
    path: "/polyfree_book",
    name: "polyfree_book",
    component: () => import("../views/polyfree_book.vue"),
  },
  {
    path: "/reviewfree",
    name: "reviewfree",
    component: () => import("../views/reviewfree.vue"),
  },
  {
    path: "/vip",
    name: "vip",
    component: () => import("../views/vip.vue"),
  },
  {
    path: "/viptwo",
    name: "viptwo",
    component: () => import("../views/viptwo.vue"),
  },

  {
    path: "/allgrad",
    name: "allgrad",
    component: () => import("../views/allgrade/index.vue"),
  },
  {
    path: "/allgrad",
    name: "allgrad",
    component: () => import("../views/allgrade/index.vue"),
  },
  {
    path: "/popularize_law",
    name: "popularize_law",
    component: () => import("../views/popularize_law/index.vue"),
  },
  {
    path: "/gk_lh",
    name: "gk_lh",
    component: () => import("../views/gk_lh/index.vue"),
  },

  {
    path: "/zy_jz",
    name: "zy_jz",
    title: "志愿讲座",
    component: () => import("../views/zy_jz/index.vue"),
  },
  //think_quality
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
