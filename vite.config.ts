import { defineConfig, ConfigEnv, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
// import path from 'path'
import alias from "./vite/alias"
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: alias
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  console.log(mode)
  const isBuild = command === 'build'
  const env = loadEnv(mode, '.')
  console.log(env);
  
  return {
    plugins: [vue()],
    resolve: {
      alias: alias,
    },
  }
}
