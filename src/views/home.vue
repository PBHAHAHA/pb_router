<template>
  <div
    class=" h-screen w-screen bg-gray-200 flex flex-col justify-center items-center"
  >
    <img
      src="/images/avatar.jpg"
      class="-mt-72 w-56 h-56 object-cover rounded-full border-8 border-white mb-5"
    />
    <router-link class="pb-button" :to="{ name: 'admin-home' }"
      >后台管理</router-link
    >
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts"></script>
<style scoped></style>
