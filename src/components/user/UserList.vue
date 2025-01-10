<script setup lang="ts">
import type { IUser } from '@/types/user.types';
import { useUserStore } from '@/stores/users';
import { useUser } from '@/composables/useUser';
import { computed, onMounted, ref } from 'vue';
import Loader from '../global/Loader.vue';
import Filter from '../global/Filter.vue';
import UserCard from './UserCard.vue';

const userStore = useUserStore();
const { userList, updateUserList } = userStore;
const { getUserList } = useUser();
const { data, loading, fetchData } = getUserList();
const list = ref<IUser[]>(userList);
const filteredList = computed(() => list.value.filter(user => user.name.toLowerCase().includes(search.value)))
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
    <Filter v-model="search" />
    <div class="container">
      <UserCard v-for="user in filteredList" :key="user.id" :user="user" />
    </div>
  </div>

</template>
<style lang="sass" scoped>
.container
	display: grid
	grid-template-columns: 1fr
	gap: 1rem


@media (min-width: 480px)
	.container
		grid-template-columns: 1fr 1fr

</style>
