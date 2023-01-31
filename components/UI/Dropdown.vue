<script setup lang="ts">
import type {DropdownItem} from "~/types/Elements";
import {clickOutside} from "~/utils/clickOutside";

const props = defineProps<{
  data: DropdownItem[],
  withIcon?: boolean
  iconName?: string
  iconSize?: string
}>()

const activeList = ref(false)
const dropdownValue = ref(null);

clickOutside(dropdownValue, () => activeList.value = false)
</script>

<template>
  <div class="dropdown">
    <div
      class="dropdown__value"
      ref="dropdownValue"
      :class="{active: activeList}"
      @click="activeList = !activeList">
      Chosen value
    </div>
    <div class="dropdown__list-wrap" :class="{active: activeList}">
      <ul class="dropdown__list">
        <li
          class="dropdown__option"
          v-for="item in data"
          :key="item.id">
          <UIIcon v-if="withIcon" :name="iconName" :width="iconSize"/>
          {{ item.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

