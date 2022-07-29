<template>
  <Form @submit="onSubmit">
    <Field
      #default="{ field, errorMessage }"
      name="account"
      label="账号"
      :rules="{ required: true, email: true }"
      :validate-on-input="true"
    >
      <input type="text" v-bind="field" v-model="account" />
      <br />
      {{ errorMessage }}
    </Field>
    <!-- <ErrorMessage name="account"></ErrorMessage> -->
    <button>提交</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, min, max, confirmed, email } from "@vee-validate/rules";
import { ref } from "vue";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import { defineRules } from "@/plugins/validate/index";
const account = ref("");

defineRules()
// defineRule("email", email);
// defineRule("required", required);
// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// })
const emailRule = (value: string) => {
  console.log(/@/.test(value));
  return /@/.test(value) ? true : "邮箱格式错误";
};
function onSubmit(val: any) {
  console.log(val);
}
</script>

<style lang="scss" scoped>
div input {
  // @apply border w-full rounded-sm py-2 px-2 outline-none
  //           border-gray-200 placeholder:text-xs
  //           focus:ring-2 ring-offset-1 ring-orange-400 duration-200
  //           focus:border-white;
}
</style>
