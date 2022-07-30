<template>
  <div class="text-sm m-3 grid grid-flow-col gap-3 justify-start">
    <a
      class="bg-white rounded-sm py-2 px-3 text-gray-600"
      v-for="item in links"
    >
      {{ item.title }}
      <i class="fas fa-times ml-1"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const links = ref<{ title: string }[]>([
  { title: "编辑器" },
  { title: "订单列表" },
  { title: "用户管理" },
  { title: "销售总额" },
])
</script>

<style scoped></style>
