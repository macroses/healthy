<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const userLogout = async () => {
  await client.auth.signOut();
  user.value = null
};

watchEffect(() => {
  if (!user.value) {
    return navigateTo('/login');
  }
});

</script>

<template>
  <section v-if="user">
    <p>{{ user.email }}</p>
    <button @click="userLogout">
      logout
    </button>
  </section>
</template>

