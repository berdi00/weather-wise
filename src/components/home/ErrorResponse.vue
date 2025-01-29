<script setup lang="ts">
import { errorSearch } from '@/store/location';
import { errorWeather } from '@/store/weather';
</script>

<template>
	<p>{{ errorSearch || errorWeather }}</p>
</template>

<style scoped>
p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: red;
}
</style>
