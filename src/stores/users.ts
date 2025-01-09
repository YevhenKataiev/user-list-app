import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types/user.types'

export const useCounterStore = defineStore('users', () => {
  const userList = ref<IUser[]>([])
  function updateUserList(list: IUser[]) {
    userList.value = list;
  }

  return { userList, updateUserList }
})
