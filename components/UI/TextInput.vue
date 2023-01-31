<script setup lang="ts">
const props = defineProps<{
  inputType: string
  placeholder?: string
}>()
</script>

<template>
  <input
    :placeholder="placeholder"
    class="input-text"
    :type="inputType">
</template>
