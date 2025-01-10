import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types/user.types'

export const useUserStore = defineStore('users', () => {
  const userList = ref<IUser[]>([])
  const userById = (id: number): IUser => {
    const user = userList.value.find(user => user.id === id)
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }
  const updateUserList = (list: IUser[]): void => {
    userList.value = list;
  }

  return { userList, updateUserList, userById }
})
