import {QueryStatus} from "~/types/Elements";
import {SupabaseClient} from "@supabase/supabase-js";

export const useMagicLink = (supabase: SupabaseClient) => {
  const message = ref('')
  const queryStatus = ref(QueryStatus.done)
  const err = ref('')

  const addUser = async (email: string) => {
    try {

      queryStatus.value = QueryStatus.loading
      const {error} = await supabase.auth.signInWithOtp({email: email})
      queryStatus.value = QueryStatus.done

      if (error) {
        throw error
      }
      message.value = 'Check your email for the login link!'
      return message

    } catch (error: any) {
      err.value = error.error_description || error.message
    } finally {
      queryStatus.value = QueryStatus.done
    }
  }

  return {addUser, queryStatus, err, message}
}