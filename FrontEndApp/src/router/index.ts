import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Test from "~/view/Test.vue";
import Layout from "~/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("~/view/home/Home.vue"),
        meta: { title: "首页" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
