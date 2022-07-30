import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
import layoutRoutes from "./autoload"
import guard from "./guard"

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes,...layoutRoutes]
})

guard(router)

export default router
