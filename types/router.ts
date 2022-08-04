import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        notAuth?: boolean 
        show?: boolean //路由是否在菜单中显示
        title?: string //菜单的标题
        icon: string
    }
}