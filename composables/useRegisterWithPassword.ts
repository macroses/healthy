import {QueryStatus} from "~/types/Elements";

export const useRegisterWithPassword = () => {
  const status = ref(QueryStatus.done)
  const errorMsg = ref('')
  const successMsg = ''

  const regUser = async (email: string, password: string, confirmPassword: string) => {

    const { auth } = useSupabaseAuthClient()

    if (password !== confirmPassword) {
      errorMsg.value = 'Passwords do not match!';
      setTimeout(() => {
        errorMsg.value = '';
      }, 3000);
      return;
    }

    try {
      status.value = QueryStatus.loading
      const { error, data } = await auth.signUp({
        email: email,
        password: password,
      });

      if(data?.user?.identities?.length === 0){
        errorMsg.value = "This user already exists"
        setTimeout(() => {
          errorMsg.value = '';
        }, 3000);
      }

      status.value = QueryStatus.done

      if (error) throw error;
    }
    catch (e: any) {
      errorMsg.value = e.message
      setTimeout(() => {
        errorMsg.value = '';
      }, 3000);
    }
  }

  return { regUser, status, errorMsg, successMsg }
}