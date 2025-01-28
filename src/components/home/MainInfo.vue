<script setup lang="ts">
import { icons } from '@/constants/icons';
import { location } from '@/store/location';
import { currentIndex, formattedDaily } from '@/store/weather';
</script>

<template>
	<div class="main-info" v-if="formattedDaily.length > 0">
		<div class="col">
			<span class="main-info_location">{{ location?.name }}</span>
			<span class="main-info_temperature">
				{{ formattedDaily[currentIndex]?.minTemp }}° {{ formattedDaily[currentIndex]?.maxTemp }}°
			</span>
		</div>

		<div class="icon">
			<img
				:src="icons[formattedDaily[currentIndex].weatherCode as keyof typeof icons] + '.avif'"
				alt=""
			/>
		</div>
	</div>
</template>

<style scoped>
.main-info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding-inline: 2rem;
	padding-block: 1rem;
	align-items: center;
}

.col {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.col > span {
	color: #fff;
	display: block;
}

.main-info_location {
	font-size: 2rem;
	font-weight: bolder;
}
.main-info_temperature {
	font-size: 2rem;
	font-weight: bold;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media only screen and (min-width) {
	.col {
		gap: 3rem;
	}
	.main-info_location {
		font-size: 3rem;
	}
	.main-info_temperature {
		font-size: 4rem;
	}
	.icon {
		width: 150px;
		height: 150px;
	}
}
</style>
