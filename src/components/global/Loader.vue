<script setup lang="ts">
</script>
<template>
	<div class="loader-wrapper">
		<div class="spinner">
		</div>
	</div>
</template>
<style scoped>
.loader-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
}

.spinner {
	width: 50px;
	height: 50px;
	border: 5px solid #f3f3f3;
	/* Light gray */
	border-top: 5px solid #3498db;
	/* Blue */
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>