/**
 * 此文件 是根据视图文件夹 自动注册路由
 */

import { fileURLToPath } from "url"
import { RouteRecordRaw } from "vue-router"
import { env } from "@/utils"
 
const layouts = import.meta.glob("../../layout/*.vue", { eager: true })
function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, (module as any))
    route.children = getChildrenRoute(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

// 获取子路由
const views = import.meta.glob("../../views/**/*.vue", { eager: true })
function getChildrenRoute(layoutRoute: RouteRecordRaw) {
  // console.log(layoutRoute)
  const childrenRoutes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, (module as any), String(layoutRoute.name))
      childrenRoutes.push(route)
    }
  })
  return childrenRoutes
}

/**
 *
 * @param file name 文件名
 * @param module 模块
 * @param prename 子路由的前缀
 * @returns 路由RouteRecordRaw
 */
function getRouteByModule(
  file: string,
  module: { [key: string]: any },
  prename?: string
) {
  console.log(module.default)
  const name = file.split("/").pop()?.split(".")[0]
  const route = {
    path: prename ? `/${prename}/${name}` : `/${name}`,
    name: prename ? `${prename}-${name}` : name,
    component: module.default,
  } as RouteRecordRaw

  // Object.assign(route, module.default?.route)   是为了单独处理需要自定义路径的路由
  return Object.assign(route, module.default?.route) 
}

export default getRoutes
