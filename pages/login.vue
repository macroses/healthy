<script setup lang="ts">
const user = useSupabaseUser();
const email = ref('');
const password = ref('');

const { loginUser, status, errorMsg } = useLoginWithPassword()

const handleSubmit = () => {
  loginUser(email.value, password.value)
  email.value = ''
  password.value = ''
}

watchEffect(() => {
  if (user.value) {
    return navigateTo('/home');
  }
});
</script>

<template>

  <form @submit.prevent="handleSubmit">
    <h2>Login</h2>
    <div>
      <label>Email</label>
      <input
        v-model="email"
        type="email"
        id="email"
        name="email"
        required
      />
    </div>
    <div>
      <label>Password</label>
      <input
        id="password"
        v-model="password"
        name="password"
        type="password"
        required
      />
    </div>
    <button type="submit">Submit</button>
    <span v-if="errorMsg">{{ errorMsg }}</span>
    <p>You don't have an account yet?</p>
    <NuxtLink to="/">Register</NuxtLink>
  </form>
</template>

