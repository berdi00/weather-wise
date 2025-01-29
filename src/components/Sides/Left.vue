<script setup lang="ts">
import MainInfo from '@components/home/MainInfo.vue';
import HourlyWeather from '@components/Weather/HourlyWeather.vue';
import BottomInfo from '../home/BottomInfo.vue';
</script>

<template>
	<div class="left-container">
		<MainInfo />
		<HourlyWeather />
		<BottomInfo />
	</div>
</template>

<style scoped>
.left-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

@media only screen and (min-width: 700px) {
	.left-container {
		width: 70%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
}
</style>
