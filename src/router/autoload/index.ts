import { env } from "@/utils";
import { RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";
import getRoutes from "./view";

let routes = [] as RouteRecordRaw[]
if(env.VITE_ROUTER_AUTOLOAD) {
    
    routes = getRoutes()
    console.log(routes)
}else{
    routes = autoloadModuleRoutes()
}

export default routes


