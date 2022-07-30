<template>
  <div class="grid grid-flow-col gap-3">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-for="item in cards"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span>{{ item.title }}</span>
          <el-tag type="danger" size="mini" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-2xl font-semibold"> {{ item.num }} </span
        ><i :class="[item.icon]" class="text-5xl"></i>
      </section>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface ICardItem {
  title: string
  icon: string
  num: number
  date?: "年" | "月" | "周"
}
const cards = ref<ICardItem[]>([
  {
    title: "Vue",
    icon: "fab fa-vuejs text-[#4fc08d]",
    num: 10,
  },
  {
    title: "React",
    icon: "fab fa-react text-[#61dafb]",
    num: 2,
  },
  {
    title: "Node.js",
    icon: "fab fa-node-js text-[#43853d]",
    num: 4,
  },
  {
    title: "CSS",
    icon: "fab fa-css3-alt text-[#bd2d30]",
    num: 13,
  },
  {
    title: "HTML5",
    icon: "fab fa-css3-alt text-[#bd2d30]",
    num: 13,
  },
])
</script>

<style scoped></style>
