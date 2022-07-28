<script setup lang="ts">
import { env } from "./types/helper"
import * as userApi from "@/api/user"
async function a (){
  const response = await userApi.login()
  console.log(response.data)
}
a()
</script>

<template>
  <router-view />
</template>

<style scoped></style>
