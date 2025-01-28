<script setup lang="ts">
import DailyWeather from '../Weather/DailyWeather.vue';
</script>

<template>
	<div class="right-container">
		<DailyWeather />
	</div>
</template>

<style scoped>
@media only screen and (min-width: 700px) {
	.right-container {
		width: 30%;
	}
}
</style>
