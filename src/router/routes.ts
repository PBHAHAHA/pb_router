import { RouteRecordRaw } from "vue-router"

const routes = [
  {
    path: "/",
    name: 'Home',
    component: () => import("@/views/home.vue"),
    children: [
      {
        path: "admin",
        component: () => import("@/views/home.vue"),
      },
    ],
  },
] as RouteRecordRaw[]

export default routes
