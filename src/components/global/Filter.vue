<script setup lang="ts">
import debounce from 'debounce';
const modelValue = defineModel<string>('modelValue')
const onInput = debounce((event: Event) => {
  const target = event.target as HTMLInputElement;
  modelValue.value = target.value;
}, 400);
</script>
<template>
  <div class="search-container">
    <div class="icon">
      <img src="/search.svg" alt="Search Icon" />
    </div>
    <input type="text" :value="modelValue" @input="onInput" placeholder="Search" />
  </div>
</template>
<style lang="sass" scoped>
.search-container
  position: relative
  display: flex
  align-items: center

  .icon
    position: absolute
    left: 10px
    display: flex
    align-items: center
    justify-content: center
    height: 16px
    width: 16px


  input
    padding-left: 30px
    padding-right: 10px
    height: 40px
    border-radius: 10px
    border: 1px solid #ccc
    outline: none

</style>
