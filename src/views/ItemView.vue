<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue';
</script>
<template>
  <div class="wrap">
    <ProfileCard />
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
