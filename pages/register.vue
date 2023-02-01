<script setup lang="ts">
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseClient();
const userRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Passwords do not match!';
    password.value = '';
    confirmPassword.value = '';
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
    return;
  }
  try {
    const { error } = await auth.signUp({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  }
};
watchEffect(() => {
  if (user.value) {
    return navigateTo('/');
  }
});
</script>

<template>
  <section>
    <form @submit.prevent="userRegister">
      <h2>Register</h2>
      <div>
        <label for="email">Email</label>
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
          v-model="password"
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div class="relative mb-4">
        <label>Confirm password</label>
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
        />
      </div>
      <button type="submit"> Submit</button>
      <span v-if="errorMsg">{{ errorMsg }}</span>
      <p>Do you have an account yet?</p>
      <nuxt-link to="/login">Login</nuxt-link>
    </form>
  </section>
</template>
