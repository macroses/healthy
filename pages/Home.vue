<script setup lang="ts">
const user = useSupabaseUser()

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <p>its home</p>
</template>
