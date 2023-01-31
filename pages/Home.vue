<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <p>its home</p>
  <p>{{ user }}</p>
</template>

<style scoped>

</style>