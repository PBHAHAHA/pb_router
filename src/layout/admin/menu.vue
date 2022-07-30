<template>
  <div>
    <dl v-for="menu in menus" :key="menu.title" @click="menuHandle(menu)">
      <dt>
        <section>
          <i :class="[menu.icon, 'mr-2']"></i>
          <span class="">{{ menu.title }}</span>
        </section>
        <section>
          <i class="fas fa-angle-down"></i>
        </section>
      </dt>
      <dd
        v-show="menu.active"
        v-for="subMenu in menu.children"
        @click="menuHandle(menu, subMenu)"
        :class="{ active: subMenu.active }"
      >
        {{ subMenu.active }}
        {{ subMenu.title }}
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
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
}
</script>

<style lang="scss" scoped>
dl {
  @apply text-white;
  dt {
    @apply py-3 mt-6 flex justify-between cursor-pointer items-center;
  }
  dd {
    @apply text-sm py-3 pl-4 my-2 text-white rounded-sm cursor-pointer hover:bg-orange-400;
    &.active {
      @apply bg-orange-500 hover:bg-orange-400;
    }
  }
}
</style>
