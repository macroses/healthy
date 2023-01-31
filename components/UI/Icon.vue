<script lang="ts" setup>
const props = defineProps<{
  width: string;
  name: string;
  fill?: string;
}>();
</script>

<template>
  <svg viewBox="0 0 24 24" :width="width" :style="{ fill: fill }">
    <use :xlink:href="`/light.svg#${name}`"></use>
  </svg>
</template>

<style scoped>
svg {
  height: auto;
//fill: var(--color-icon);
}
</style>