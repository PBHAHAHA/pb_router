<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-center items-center relative group cursor-pointer">
      <span class="text-sm text-gray-600 mr-2">纸人特工</span>
      <img
        src="/images/avatar.jpg"
        class="w-8 h-8 rounded-full object-cover"
        alt=""
      />
      <section
        class="group-hover:block hidden rounded-sm absolute -bottom-24 bg-white shadow-sm px-3 whitespace-nowrap"
      >
        <div class="flex items-center border-b py-3">
          <a class="fas fa-ad"></a>
          <span class="text-sm text-gray-600 ml-3">网站首页</span>
        </div>
        <div class="flex items-center py-3">
          <a class="fas fa-gear"></a>
          <span class="text-sm text-gray-600 ml-3">网站设置</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
