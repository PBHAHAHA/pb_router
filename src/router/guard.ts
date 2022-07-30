import { RouteLocationNormalized, Router } from "vue-router"
import {storage} from "@/utils"
import { IData } from "@/utils/storage"

// 白名单
const whiteArr = ['auth-hd','404']

class Guard {
  constructor(private router: Router) {}
  public bootstrap() {
    this.router.beforeEach((to, from) => {
        const tokenData = storage.get("token") as IData | null
        if(this.isLogin(to, tokenData)) {
            return {name: 'auth-login'}
        }
    })
  }

  private isLogin(to: RouteLocationNormalized,tokenData: IData | null){
    console.log("token-------",tokenData)
    return Boolean(!tokenData?.data && to.name !== 'auth-login' && !to.meta.notAuth)
  }
  
}

export default (router: Router) => new Guard(router).bootstrap()
