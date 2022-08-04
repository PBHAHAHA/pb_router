import { RouteRecordRaw } from "vue-router"

export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layout/editor.vue"),
  children: [
    {
      name: "editor-richtext",
      path: "/editor/richtext",
      component: () => import("@/views/editor/richtext.vue"),
    },
    {
      name: "editor-markdown",
      path: "/editor/markdown",
      component: () => import("@/views/editor/markdown.vue"),
    },
  ],
} as RouteRecordRaw
