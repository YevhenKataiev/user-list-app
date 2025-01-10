<script setup lang="ts">
import UserProfileCard from '@/components/user/UserProfileCard.vue';
</script>
<template>
  <div class="wrap">
    <UserProfileCard />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
