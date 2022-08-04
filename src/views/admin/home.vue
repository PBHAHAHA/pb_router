<template>
  <div class="bg-white p-5 grid md:grid-cols-4 gap-3">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-for="item in cards"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span>{{ item.title }}</span>
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-2xl font-semibold"> {{ item.num }} </span
        ><i :class="[item.icon]" class="text-5xl"></i>
      </section>
    </el-card>
  </div>
  <div class="mt-2 bg-white p-5 grid md:grid-cols-2 gap-3 overflow-hidden">
    <el-card shadow="hover" :body-style="{ padding: '20px' }">
      <template #header>
        <div>用户统计</div>
      </template>
      <div id="main" class="h-72 w-full"></div>
    </el-card>
    <el-card shadow="hover" :body-style="{ padding: '20px' }">
      <template #header>
        <div>文章统计</div>
      </template>
      <div id="main2" class="h-72 w-full"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue"
import { echart1, echart2 } from "./echart"

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

nextTick(() => {
  var myChart1 = echarts.init(document.getElementById("main"))
  myChart1.setOption(echart1)
  var myChart2 = echarts.init(document.getElementById("main2"))
  myChart2.setOption(echart2)
})
</script>

<style scoped></style>
