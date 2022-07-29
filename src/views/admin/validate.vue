<template>
  <form @submit="onSubmit">
    <input label="用户名" type="text" v-model="usernameValue" />
    <p>{{errors.username}}</p>
    <input type="text" v-model="passwordValue" />
    <p>{{ errors.password }}</p>
    <br>
    <button>提交</button>
  </form>
</template>

<script setup lang="ts">
import v from "@/plugins/validate"
import { ref } from "vue";
// defineRule("email", email);
// defineRule("required", required);
const {useForm,yup,useField} = v
// 要注意书写顺序
const { handleSubmit, errors } = useForm({
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: {
    username: yup.string().required().email(),
    password: yup.string().required().min(6,"最少6位"),
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
