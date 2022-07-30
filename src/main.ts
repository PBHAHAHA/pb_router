import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import { setupPlugins } from "./plugins"
import "@/styles/global.scss"

function bootstrap() {
  const app = createApp(App)
  setupPlugins(app)
  app.use(router)
  app.mount("#app")
}
bootstrap()
