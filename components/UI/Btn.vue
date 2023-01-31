<script lang="ts" setup>
const props = defineProps<{
  withIcon?: boolean,
  onlyIcon?: boolean,
  iconName?: string,
  size: string,
  type: string
}>()
</script>

<template>
  <button :type="type" class="button">
    <UIIcon v-if="withIcon || onlyIcon" :name="iconName" width="16px"/>
    <slot/>
  </button>
</template>
