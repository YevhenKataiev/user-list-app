<script setup lang="ts">
import debounce from 'debounce';
const modelValue = defineModel<string>('modelValue')
const onInput = debounce((event: Event) => {
	const target = event.target as HTMLInputElement;
	modelValue.value = target.value;
}, 400);
</script>
<template>
	<div>
		<input type="text" :value="modelValue" @input="onInput" placeholder="Search" />
	</div>
</template>