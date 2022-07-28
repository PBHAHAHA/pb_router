import vue from "@vitejs/plugin-vue"
import { Plugin } from "vite"
import setupMockPlugin from "./mock"
/**
 * 
 * @param isBuild 是否是编译环境
 * @param env 环境变量 env 文件  例如： env.VITE_API_URL
 * @returns 
 */
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins:Plugin[] = [vue()]
  plugins.push(setupMockPlugin(isBuild))
  return plugins
}