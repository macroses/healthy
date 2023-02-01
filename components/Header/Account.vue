<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const router = useRouter()

const userLogout = async () => {
  await client.auth.signOut()
  user.value = null
  navigateTo('/login')
}

const isMenuActive = ref(false)
const userAvatar = ref(null)
const toggleMenu = () => isMenuActive.value = !isMenuActive.value

clickOutside(userAvatar, () => isMenuActive.value = false)
</script>

<template>
  <div class="header__account" v-if="user">
    <div
      ref="userAvatar"
      @click="toggleMenu"
      class="header__account-avatar">
      {{ user.email[0] }}
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
