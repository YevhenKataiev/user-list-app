<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="sass" scoped>
.v-enter-active, .v-leave-active
  transition: opacity 0.5s ease

.v-enter-from, .v-leave-to
  opacity: 0
</style>
