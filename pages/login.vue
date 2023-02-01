<script setup lang="ts">
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseAuthClient();
const userLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
    if (error) throw error;
  } catch (error: any) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};
watchEffect(() => {
  if (user.value) {
    return navigateTo('/home');
  }
});
</script>

<template>

  <form @submit.prevent="userLogin">
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
    <NuxtLink to="/register">Register</NuxtLink>
    <p>{{ user }}</p>
  </form>

</template>

