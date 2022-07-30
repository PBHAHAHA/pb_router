<template>
  <div class="admin-wrapper h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-gray-200">
        <i class="fas fa-robot text-2xl"></i>
        <span class="text-md">纸人科技</span>
      </div>
      <div class="left-container">
        <dl class="text-gray-300 text-md">
          <dt class="text-md mt-6">
            <i class="fab fa-delicious mr-2"></i>
            <span class="text-lg">错误页面</span>
          </dt>
          <dd class="py-3 pl-4 my-2 bg-orange-500 text-white rounded-sm cursor-pointer">404 错误</dd>
          <dd class="py-3 pl-4 my-2 hover:bg-orange-400 duration-300">403 错误</dd>
        </dl>
      </div>
    </div>
    <div class="content flex-1 bg-gray-200">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
