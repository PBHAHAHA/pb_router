import _ from "lodash"
export function parseEnv(env: Record<string, any>){
  const envs = _.cloneDeep(env)
  Object.entries(env).forEach(([key,value]) => {
    if(value === 'true' || value === 'false'){
      envs[key] = (value === 'true') ? true : false
    }
    //  判断是否全是数字
    if(/^\d+$/.test(value)) {
      envs[key] = parseInt(value)
    }
  })
  return envs
  // Object.CustomElementRegistry(env).forEach([KeyboardEvent,value]) => {
  //   console.log(env)
  //   // const envs = _
  //   if(value === 'true'){

  //   }
  // }
}