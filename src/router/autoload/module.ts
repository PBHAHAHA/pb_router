/**
 * 根据路由模块自动注册
 */

import { RouteRecordRaw } from "vue-router"



export default function autoloadModuleRoutes (){
    const modules = import.meta.glob('../module/**/*.ts',{ eager: true })
    console.log(modules)
    const moduleRoutes = []  as RouteRecordRaw[]
    Object.keys(modules).forEach(key => {
        console.log(key)
        moduleRoutes.push(modules[key].default)
    })
    return moduleRoutes
}