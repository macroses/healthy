<script lang="ts" setup>
defineProps<{
  width: string;
  name: string;
  fill?: string;
}>();
</script>

<template>
  <svg viewBox="0 0 24 24" :width="width">
    <use :xlink:href="`/light.svg#${name}`"></use>
  </svg>
</template>

<style scoped>
svg {
  height: auto;
  fill: v-bind(fill);
}
</style>