<template>
  <div class="p-5 bg-slate-300 h-screen flex justify-center items-center">
    <div
      class="w-[720px]  bg-white -translate-y-30 md:grid grid-cols-2 rounded-md shadow-md"
    >
      <div class="p-6">
        <h6 class="text-center mt-3 text-gray-700 text-lg font-semibold">会员登录</h6>
        <div class="mt-8">
          <input
            class="login-input"
            type="text"
            placeholder="请输入账号或邮箱号"
          />
          <input
            class="login-input mt-5"
            type="text"
            placeholder="请输入密码"
          />
        </div>
        <button class="login-button">登录</button>
        <div class="flex  justify-center mt-5 gap-4">
            <a class="text-xs text-gray-700" href="">网站首页</a>
            <a class="text-xs text-gray-700" href="">会员注册</a>
            <a class="text-xs text-gray-700" href="">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-96 w-full object-cover" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login-input {
  @apply border w-full rounded-sm py-2 px-2 outline-none 
            border-gray-200 placeholder:text-xs 
            focus:ring-2 ring-offset-1 ring-orange-400 duration-200 
            focus:border-white;
}
.login-button {
    @apply bg-orange-500 text-white w-full rounded-sm py-2 mt-5 hover:bg-orange-400 duration-150;
}
</style>
