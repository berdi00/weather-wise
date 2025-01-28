<script setup lang="ts">
import SearchInput from '@components/Location/SearchInput.vue';
import MainInfo from '@components/home/MainInfo.vue';
import HourlyWeather from '@components/Weather/HourlyWeather.vue';
import BottomInfo from '../home/BottomInfo.vue';
</script>

<template>
	<div class="left-container">
		<SearchInput class="search-desktop" />
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
.search-desktop {
	display: none;
}
@media only screen and (min-width: 700px) {
	.left-container {
		width: 70%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.search-desktop {
		display: block;
	}
}
</style>
