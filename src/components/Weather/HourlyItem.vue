<script setup lang="ts">
defineProps<{
	time: string;
	icon: string;
	temp: number;
}>();
</script>

<template>
	<div class="hourly-item">
		<span class="hourly-item_time">{{ time }}</span>
		<div class="hourly-item_icon">
			<img :src="icon + '.avif'" alt="Icon" />
		</div>
		<span class="hourly-item-temp">{{ temp }}°</span>
	</div>
	<div class="vertical-divider"></div>
</template>

<style scoped>
.hourly-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.hourly-item_time {
	color: var(--slate-400);
	font-weight: 500;
}

img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.vertical-divider {
	min-height: 100%;
	min-width: 2px;
	background-color: var(--slate-600);
}

.vertical-divider:last-child {
	display: none;
}
.hourly-item-temp {
	color: #fff;
	font-size: 1.6rem;
	font-weight: bold;
}

.hourly-item_icon {
	width: 50px;
	height: 50px;
}
@media only screen and (min-width: 700px) {
	.hourly-item {
		gap: 15px;
	}
}
</style>
