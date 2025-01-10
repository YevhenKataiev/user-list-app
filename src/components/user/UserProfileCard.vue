<script setup lang="ts">
import type { IUser } from '@/types/user.types';
import { computed, onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/users';
import { useUser } from '@/composables/useUser';
import { useRoute } from 'vue-router';
import Loader from '../global/Loader.vue';
const route = useRoute();
const userStore = useUserStore();
const { userById } = userStore;
const { getUserById } = useUser();
const { data, loading, fetchData } = getUserById(Number(route.params.id));
const user = ref<IUser | undefined>(userById(Number(route.params.id)));
const fetchUser = async () => {
  await fetchData();
  user.value = data.value as IUser;
};
const main = computed(() => {
  return {
    name: user.value?.name,
    username: user.value?.username,
    email: user.value?.email,
    phone: user.value?.phone,
    website: user.value?.website,
  }
})
const adress = computed(() => {
  return {
    street: user.value?.address.street,
    suite: user.value?.address.suite,
    city: user.value?.address.city,
    zipcode: user.value?.address.zipcode
  }
})
const company = computed(() => {
  return {
    name: user.value?.company.name,
    bs: user.value?.company.bs,
    catchPhrase: user.value?.company.catchPhrase,
  }
})
onMounted(() => {
  if (!user.value) fetchUser()
})
</script>
<template>
  <div class="wrap">
    <RouterLink to="/" class="back">
      Back
    </RouterLink>
    <Loader v-if="loading" />
    <div v-else class="card">
      <div class="part">
        <div class="photo">
          <img src="/user.svg" alt="Photo" />
        </div>
        <div>
          <div v-for="( value, key) in main" :key="key" class="data-columns">
            <div class="bold">{{ key }} :</div>
            <div>{{ value }}</div>
          </div>
        </div>
      </div>
      <div class="part">
        <div>
          <div class="bold">Address :</div>
          <div v-for="( value, key) in adress" :key="key" class="data-columns">
            <div class="bold">{{ key }} :</div>
            <div>{{ value }}</div>
          </div>
        </div>
        <div>
          <div class="bold">Company :</div>
          <div v-for="( value, key) in company" :key="key" class="data-columns">
            <div class="bold">{{ key }} :</div>
            <div>{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="sass" scoped>
.bold
  font-weight: bold
.wrap
  display: block
  width: 80%
  margin: 0 auto

  .back
    display: block
    width: 64px
    height: 40px
    margin-bottom: 2rem

  .card
    .data-columns
      display: grid
      grid-template-columns:1fr 1fr

      div
        margin-top: 1rem

    .part
      display: flex
      width: 100%
      justify-content: space-evenly
      margin-bottom: 2rem

    .part > div
      width: 320px
      .photo
        width: 320px
        height: 320px
        border: 1px solid
        border-radius: 10px
        display: flex
        justify-content: center
        align-items: center

        img
          height:160px
          width: 160px

</style>
