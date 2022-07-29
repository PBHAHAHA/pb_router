<template>
  <button class="login-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login-button {
  @apply bg-orange-500 text-white w-full rounded-sm py-2 mt-5 hover:bg-orange-400 duration-150;
}
</style>
