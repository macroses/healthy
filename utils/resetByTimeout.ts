import type {Ref} from 'vue'

export const resetByTimeout = (ref: Ref<string>, ms: number) => {
  setTimeout(() => {
    ref.value = ''
  }, ms)
}