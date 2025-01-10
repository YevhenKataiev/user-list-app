<script setup lang="ts">
import type { IUser } from '@/types/user.types';
import { useUserStore } from '@/stores/users';
import { useUser } from '@/composables/useUser';
import { onMounted, ref } from 'vue';
import Loader from '../global/Loader.vue';
import Filter from '../global/Filter.vue';

const userStore = useUserStore();
const { userList, updateUserList } = userStore;
const { getUserList } = useUser();
const { data, loading, fetchData } = getUserList();
const list = ref<IUser[]>(userList);
const search = ref<string>('');
const fetchlist = async () => {
	await fetchData();
	updateUserList(data.value as IUser[]);
	list.value = data.value as IUser[]
};
onMounted(() => { fetchlist() })
</script>
<template>
	<Loader v-if="loading" />
	<div v-else>
		<Filter />
		<pre>{{ list }}</pre>
	</div>

</template>