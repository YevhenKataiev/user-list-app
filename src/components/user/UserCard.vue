<script setup lang="ts">
import type { IUser } from '@/types/user.types';
const props = defineProps<{ user: IUser }>();
</script>
<template>
  <RouterLink :to="user.id.toString()">
    <div class="card">
      <div class="img-wrap">
        <img src="/user.svg" alt="user icon" />
      </div>
      <div class="text-col">
        <div>
          {{ user.name }}
        </div>
        <div>
          {{ user.email }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style lang="sass" scoped>
.card
  border: 2px solid
  border-radius: 10px
  padding: 1em
  display: grid
  grid-template-columns: 1fr 1fr

  .text-col
    display: flex
    flex-direction: column
    justify-content: space-evenly

  .img-wrap
    height:4em
    width: 4em
    border: 1px solid
    border-radius: 10px
    display: flex
    justify-content: center
    align-items: center

    img
      height:2em
      width: 2em
</style>
