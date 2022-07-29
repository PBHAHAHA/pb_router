import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from "lodash"
export function setupPlugins(app:App){
  autoRegisterComponent(app)
  setupTailwindcss()
}

// 组件全局自动注册
function autoRegisterComponent(app: App) {
  const comps = import.meta.glob('../components/form/*.vue',{ eager: true })
  Object.entries(comps).forEach(([key,value]) => {
    const name = key.split("/").pop()?.split(".").shift() as string
    app.component(_.camelCase(name),(value as any).default) // 同时注册驼峰风格明名的组件
    app.component(name, (value as any).default)
  })
}