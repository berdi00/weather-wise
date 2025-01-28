<script setup lang="ts">
import { icons } from '@/constants/icons';
import { currentIndex, formattedDaily } from '@/store/weather';
import Container from '@components/containers/Container.vue';
import HourlyItem from '@components/Weather/HourlyItem.vue';
</script>

<template>
	<Container v-if="formattedDaily.length > 0">
		<p>Today's forecast</p>
		<div class="hourly-container">
			<HourlyItem
				v-for="hourly in formattedDaily[currentIndex]?.hourly"
				:time="hourly.time"
				:icon="icons[hourly.weatherCode as keyof typeof icons]"
				:temp="hourly.temperature"
			/>
		</div>
	</Container>
</template>

<style scoped>
p {
	color: var(--slate-400);
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 20px;
}

.hourly-container {
	display: flex;
	overflow-x: scroll;
	gap: 1rem;
	scroll-behavior: smooth;
}

.hourly-container::-webkit-scrollbar {
	appearance: none;
}
</style>
