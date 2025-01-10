<script setup lang="ts">
import type { IUser } from '@/types/user.types';
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/users';
import { useUser } from '@/composables/useUser';
import { useRoute } from 'vue-router';
const route = useRoute();
const userStore = useUserStore();
const { userById } = userStore;
const { getUserById } = useUser();
const { data, loading, fetchData } = getUserById(Number(route.params.id));
const user = ref<IUser | undefined>(userById(Number(route.params.id)))
const fetchUser = async () => {
  await fetchData();
  user.value = data.value as IUser
};
onMounted(() => {
  if (!user.value) fetchUser()
})
</script>
<template>
  <Loader v-if="loading" />
  <div v-else>
    {{ user }}
  </div>
</template>
