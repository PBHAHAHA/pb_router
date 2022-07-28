import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        success: true,
        data: {
          name: 'vben',
          age: 18,
          avatar: "http://123"
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        success: true,
        data: {
          token: Random.string(10)
        }
      }
    },
  }
] as MockMethod[]