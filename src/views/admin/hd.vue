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
import { ref } from "vue";
import v from "@/plugins/validate/index";
const {Form,Field} = v
const account = ref("");

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
