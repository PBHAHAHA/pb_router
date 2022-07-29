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
          <div class="relative mb-1">
            <pb-input
              :class="errors.account && 'error-input'"
              v-model="account"
              placeholder="请输入邮箱或手机号"
            ></pb-input>
            <p class="text-red-500 text-xs absolute -bottom-5 ml-2">
              {{ errors.account }}
            </p>
          </div>
          <div class="relative mb-1">
            <pb-input
              :class="errors.password && 'error-input'"
              type="password"
              v-model="password"
              class="mt-5"
              placeholder="请输入密码"
            ></pb-input>
            <p class="text-red-500 text-xs absolute -bottom-5 ml-2">
              {{ errors.password }}
            </p>
          </div>
        </div>
        <pb-button @click="onSubmit">登录</pb-button>
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
import { reactive } from "vue"
import v from "@/plugins/validate/index"
const { useField, useForm, yup } = v

const { handleSubmit, errors } = useForm({
  initialValues: {
    account: "",
    password: "",
  },
  validationSchema: {
    account: yup.string().required("请输入您的账号").email(),
    password: yup
      .string()
      .required("请输入您的密码")
      .min(6, "密码最少6位，请重新输入"),
  },
})

const { value: account } = useField(
  "account",
  { required: true, email: true },
  { label: "用户名" }
)
const { value: password } = useField(
  "password",
  { required: true },
  { label: "密码" }
)

const onSubmit = handleSubmit((val) => {
  console.log(val)
  var obj = {
    account,
    password,
  }
  alert("登录成功~")
})
</script>
<script lang="ts">
export default {
  route: { path: "/login" },
}
</script>
<style lang="scss" scoped>
div {
  .error-input {
    @apply border-red-500;
  }
}
</style>
