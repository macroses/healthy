import {QueryStatus} from "~/types/Elements";
import {resetByTimeout} from "~/utils/resetByTimeout";

export const useLoginWithPassword = () => {
  const status = ref(QueryStatus.done)
  const errorMsg = ref('')

  const loginUser = async (email: string, password: string) => {
    const { auth } = useSupabaseAuthClient()

    try {
      status.value = QueryStatus.loading

      const { error } = await auth.signInWithPassword({
        email: email,
        password: password,
      });

      status.value = QueryStatus.done

      if (error) throw error;
    }
    catch (e: any) {
      errorMsg.value = e.message
      resetByTimeout(errorMsg, 3000)
    }
  }

  return { loginUser, status, errorMsg }
}