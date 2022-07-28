import { defineConfig, ConfigEnv, loadEnv } from "vite"
import alias from "./vite/alias"
import {parseEnv} from "./vite/util"
import setupPlugins from "./vite/plugins/index"

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias: alias,
    },
  }
}
