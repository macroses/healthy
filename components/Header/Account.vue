<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const userLogout = async () => {
  await client.auth.signOut();
  user.value = null
};

const isMenuActive = ref(false)

const toggleMenu = () => isMenuActive.value = !isMenuActive.value

watchEffect(() => {
  if (!user.value) return navigateTo('/login');
})
</script>

<template>
  <div class="header__account">
    <div
      @click="toggleMenu"
      class="header__account-avatar">
      {{ user.email[0].toUpperCase() }}
    </div>
    <div class="header__account-menu" :class="{active: isMenuActive}">
      <ul class="header__account-list">
        <li class="header__account-item">
          <button @click="userLogout">
            logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.header__account {
  position: relative;
}

.header__account-menu {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows var(--t-primary);
}

.header__account-list {
  min-height: 0;
  transition: visibility 1s;
}

.header__account-menu.active {
  grid-template-rows: 1fr;
}

</style>