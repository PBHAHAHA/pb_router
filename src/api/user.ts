import { http } from "@/plugins/axios"
interface User {
  name: string
  age: number
  avatar: string
}

export function info() {
  return http.request<User>({
    url: "info",
  })
}
interface LoginInterface {
  token: string
}
export function login(data:any) {
  return http.request<LoginInterface>({
    url: "login",
    method: "post",
    data
  })
}
