<script setup lang="ts">
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');
const {auth} = useSupabaseAuthClient();
const successRegistrationMessage = ref('')

const userRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Passwords do not match!';
    password.value = '';
    confirmPassword.value = '';
    return;
  }
  try {
    const {error, data} = await auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (data?.user?.identities?.length === 0) {
      errorMsg.value = "This user already exists"
      return
    }

    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    if (error) throw error;
    successRegistrationMessage.value = 'it\'s success'
    setTimeout(() => {
      successRegistrationMessage.value = ''
    }, 3000)
  } catch (error: any) {
    errorMsg.value = error.message;
  }
};
watchEffect(() => {
  if (user.value) {
    useRouter().push('/home')
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
      <span v-if="successRegistrationMessage">{{ successRegistrationMessage }}</span>
      <p>Do you have an account yet?</p>
      <nuxt-link to="/login">Login</nuxt-link>
    </form>
  </section>
</template>
