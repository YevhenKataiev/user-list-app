import { ref } from "vue";
import type { IUser } from "@/types/user.types";

export const useUser = () => {
	const apiUrl = import.meta.env.VITE_API_URL;
	const getUserList = () => {
		const data = ref(null)
		const error = ref(null)

		fetch(apiUrl)
			.then((res) => res.json())
			.then((json) => (data.value = json))
			.catch((err) => (error.value = err))

		return { data, error }
	}
	return { getUserList }
};