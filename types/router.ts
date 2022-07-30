import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        notAuth?: boolean 
    }
}