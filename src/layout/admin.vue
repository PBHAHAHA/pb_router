<template>
  <div class="admin-wrapper h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-white text-center">
        <i class="text-orange-500 fas fa-robot text-2xl mr-3"></i>
        <span class="text-lg">项目管理器</span>
      </div>
      <div class="left-container">
        <Menu></Menu>
      </div>
    </div>
    <div class="content flex-1 bg-gray-200">
      <nav-bar></nav-bar>
      <history-link></history-link>
      <div class="m-3 p-5 bg-white">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/layout/admin/menu.vue"
import NavBar from "@/layout/admin/navbar.vue"
import HistoryLink from "@/layout/admin/historyLink.vue";
import { ref } from "vue"

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}
const menus = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fab fa-delicious",
    active: true,
    children: [{ title: "404", active: true }, { title: "403" }],
  },
  {
    title: "编辑器",
    icon: "fas fa-keyboard",
    children: [{ title: "markdown编辑器" }, { title: "富文本编辑器" }],
  },
])

function resetMenus() {
  menus.value.forEach((menu) => {
    menu.active = false
    menu.children?.forEach((sub) => {
      sub.active = false
    })
  })
}

function menuHandle(menu: IMenuItem, sub?: IMenuItem) {
  resetMenus()
  menu.active = true
  if (sub) {
    console.log(sub)
    sub.active = true
    console.log(sub)
  }
}
</script>

<style lang="scss" scoped>
.admin-wrapper {
  .left-container {
  }
}
</style>
