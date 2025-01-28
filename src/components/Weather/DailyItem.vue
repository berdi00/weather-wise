<script setup lang="ts">
import { currentIndex } from '@/store/weather';

const props = defineProps<{
	date: string;
	icon: string;
	temp: string;
	index: number;
}>();

const selectDay = (index: number) => {
	currentIndex.value = index;
};
</script>

<template>
	<div
		class="daily-item"
		:class="{ current: index === currentIndex }"
		@click="() => selectDay(props.index)"
	>
		<span class="daily-item_date">{{ index === 0 ? 'Today' : date }}</span>
		<div class="daily-item_icon">
			<img class="daily-item" :src="icon + '.avif'" alt="Icon" />
		</div>
		<span class="daily-item_temp">{{ temp }}</span>
	</div>
	<span class="hr" />
</template>

<style scoped>
.daily-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 14px;
	border-radius: 10px;
	cursor: pointer;
	width: 100%;
}
.hr {
	height: 1px;
	width: 100%;
	background-color: var(--slate-700);
}

.daily-item_date {
	color: var(--slate-300);
	font-weight: 500;
	font-size: 12px;
	flex: 1;
}

.current {
	background-color: var(--slate-700);
}

.daily-item_icon {
	flex: 1;
}

img {
	object-fit: contain;
	width: 100%;
	height: 100%;
	scale: 0.5;
}

.daily-item_temp {
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	flex: 1;
	text-align: right;
}

.daily-item:hover {
	background-color: var(--slate-700);
}

@media only screen and (min-width: 700px) {
	.daily-item_date {
		font-size: 14px;
	}
}
</style>
