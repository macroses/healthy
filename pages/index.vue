<script setup lang="ts">
import {useRegisterWithPassword} from "~/composables/useRegisterWithPassword";
import {QueryStatus} from "~/types/Elements";

const user = useSupabaseUser()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const { regUser, status, errorMsg, successMsg } = useRegisterWithPassword()

watchEffect(() => {
  if (user.value) {
    return navigateTo('/home');
  }
});

const handleSubmit = () => {
  regUser(email.value, password.value, confirmPassword.value)
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>

<template>
  <section>
    <form @submit.prevent="handleSubmit">
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
      <button type="submit">
        {{ status === QueryStatus.loading ? 'Loading...': 'Submit' }}
      </button>
      <span v-if="errorMsg">{{ errorMsg }}</span>
      <p v-if="successMsg">{{ successMsg }}</p>
      <p>Do you have an account yet?</p>
      <NuxtLink to="/login">Login</NuxtLink>
    </form>
  </section>
</template>

