import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
import autoloadRoutes from "./autoload"
import guard from "./guard"

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes,...autoloadRoutes]
})

guard(router)

export default router
