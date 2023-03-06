<template>
	<div>
		<div class="container">{{ msg }}</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const msg = ref("hello vue");
</script>

<style scoped>
	.container {
		color: skyblue;
	}
</style>
