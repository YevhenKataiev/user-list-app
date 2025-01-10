import { ref } from "vue";
import type { IUser } from "@/types/user.types";

export const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const getUserList = () => {
    const data = ref<IUser[]>([])
    const error = ref()
    const loading = ref(false)
    const fetchData = async () => {
      loading.value = true
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        data.value = await response.json()
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    }
    return { data, error, loading, fetchData }
  }
  const getUserById = (id: number) => {
    const data = ref<IUser>()
    const error = ref()
    const loading = ref(false)
    const fetchData = async () => {
      loading.value = true
      try {
        const response = await fetch(`${apiUrl}/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        data.value = await response.json()
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    }
    return { data, error, loading, fetchData }
  }
  return { getUserList, getUserById }
};
