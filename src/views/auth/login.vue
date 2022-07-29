<template>
  <div class="p-5 bg-slate-300 h-screen flex justify-center items-center">
    <div
      class="w-[720px] bg-white -translate-y-30 md:grid grid-cols-2 rounded-md shadow-md"
    >
      <div class="p-6">
        <h6 class="text-center mt-3 text-gray-700 text-lg font-semibold">
          会员登录
        </h6>
        <div class="mt-8">
          <pb-input v-model="form.account" placeholder="请输入邮箱或手机号"></pb-input>
          <pb-input v-model="form.password" class="mt-5" placeholder="请输入密码"></pb-input>
        </div>
        <pb-button>登录</pb-button>
        <div class="flex justify-center mt-5 gap-4">
          <pb-link>网站首页</pb-link>
          <pb-link>会员注册</pb-link>
          <pb-link>找回密码</pb-link>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-96 w-full object-cover" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive<{account: number | string, password: string}>({
  account: "",
  password: "",
});
</script>

<style lang="scss" scoped></style>
