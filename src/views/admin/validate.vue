<template>
  <form @submit="onSubmit">
    <input type="text" v-model="usernameValue" />
    <p>{{errors.username}}</p>
    <input type="text" v-model="passwordValue" />
    <p>{{ errors.password }}</p>
    <br>
    <button>提交</button>
  </form>
</template>

<script setup lang="ts">
import {
  Form,
  defineRule,
  useField,
  useForm,
} from "vee-validate";
import { required, min, max, confirmed, email } from "@vee-validate/rules";
import * as yup from "yup"
import { ref } from "vue";
// defineRule("email", email);
// defineRule("required", required);

// 要注意书写顺序
const { handleSubmit, errors } = useForm({
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: {
    username: yup.string().required('用户名不能为空').email('邮箱格式不正确'),
    password: yup.string().required('密码不能为空').min(6,"最少"),
  },
});
const { value: usernameValue } = useField(
  "username",
  { required: true, email: true },
  { label: "用户名" }
);
const { value: passwordValue } = useField(
  "password",
  { required: true },
  { label: "密码" }
);

const onSubmit = handleSubmit((val) => {
  alert("成功");
});
</script>

<style lang="scss" scoped>
input {
  border: 1px solid #ccc;
}
</style>
