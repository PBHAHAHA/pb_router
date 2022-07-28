import { defineConfig, ConfigEnv, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
// import path from 'path'
import alias from "./vite/alias"
import {parseEnv} from "./vite/util"
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: alias
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  // console.log(mode)
  const isBuild = command === 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))
  return {
    plugins: [vue()],
    resolve: {
      alias: alias,
    },
  }
}
