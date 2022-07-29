<template>
  <input class="login-input" @input.native="changeInput" :value="props.modelValue" type="text" placeholder="请输入" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String
})
const emits = defineEmits(['update:modelValue'])
function changeInput(e:Event) {
  emits('update:modelValue',(e.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.login-input {
  @apply border w-full rounded-sm py-2 px-2 outline-none 
            border-gray-200 placeholder:text-xs 
            focus:ring-2 ring-offset-1 ring-orange-400 duration-200 
            focus:border-white;
}
</style>
