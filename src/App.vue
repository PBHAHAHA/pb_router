<script setup lang="ts">
import { env } from "./types/helper";
console.log(env.VITE_API_URL);
</script>

<template>
  <ul class="bg-slate-50">
    <li>首页</li>
    <li>商品</li>
    <li>评价</li>
  </ul>
  <router-view />
</template>

<style scoped></style>
