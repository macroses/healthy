<script setup lang="ts">
import type {DropdownItem} from "~/types/Elements";

const test: DropdownItem[] = [
  {id: 1, value: 'lol'},
  {id: 2, value: 'kek'},
  {id: 3, value: 'cheburek'},
]
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">
      <UIIcon width="20px" name="heart"/>
    </NuxtLink>
    <NuxtLink to="/home">home</NuxtLink>
    <div class="header__theme">
      <UIDropdown :data="test"/>
    </div>
    <div class="header__account">acc</div>
  </header>
</template>
