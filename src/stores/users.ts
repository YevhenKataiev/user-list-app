import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types/user.types'

export const useUserStore = defineStore('users', () => {
  const userList = ref<IUser[]>([])
  const userById = (id: number): IUser | undefined => {
    return userList.value.find(user => user.id === id);
  }
  const updateUserList = (list: IUser[]): void => {
    userList.value = list;
  }

  return { userList, updateUserList, userById }
})
