<script setup lang="ts">
import { icons } from '@/constants/icons';
import { formattedDaily } from '@/store/weather';
import DailyItem from '@components/Weather/DailyItem.vue';
</script>

<template>
	<div v-if="formattedDaily.length > 0" class="margin-top">
		<p>7-DAY FORECAST</p>
		<div class="daily-list">
			<DailyItem
				v-for="(daily, index) in formattedDaily"
				:temp="daily.minTemp + '/' + daily.maxTemp"
				:icon="icons[daily.weatherCode as keyof typeof icons]"
				:date="daily.date"
				:index="index"
			/>
		</div>
	</div>
</template>

<style scoped>
p {
	color: var(--slate-400);
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 20px;
}

.margin-top {
	margin-top: 10px;
}

.daily-list {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

@media only screen and (min-width: 700px) {
	.margin-top {
		margin-top: 40px;
	}
}
</style>
