<script setup lang="ts">
import { currentIndex, formattedDaily } from '@/store/weather';
import Container from '../containers/Container.vue';
</script>

<template>
	<Container v-if="formattedDaily[currentIndex]">
		<p>Additional info</p>
		<div class="info-container">
			<div class="row">
				<div class="info-container_precipitaion">
					<div class="sub-row">
						<div class="icon">
							<img src="/wet.avif" alt="Wet icon" />
						</div>
						<span class="info-container_title">Precipitation</span>
					</div>
					<span class="info-container_value"
						>{{ formattedDaily[currentIndex].precipitation }} %</span
					>
				</div>
				<div class="info-container_wind">
					<div class="sub-row">
						<div class="icon">
							<img src="/wind.avif" alt="Windy icon" />
						</div>
						<span class="info-container_title">Wind</span>
					</div>
					<span class="info-container_value"
						>{{ formattedDaily[currentIndex].precipitation }} km/h</span
					>
				</div>
			</div>
			<div class="row">
				<div class="info-container_uv">
					<div class="sub-row">
						<div class="icon">
							<img src="/uv.svg" alt="Uv icon" />
						</div>
						<span class="info-container_title">UV Index</span>
					</div>
					<span class="info-container_value">{{ formattedDaily[currentIndex].precipitation }}</span>
				</div>
			</div>
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
span {
	color: var(--slate-400);
}

.info-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.sub-row {
	display: flex;
	gap: 10px;
	align-items: center;
}

.icon {
	width: 20px;
	height: 20px;
}

img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

.row {
	display: flex;
	justify-content: space-between;
}

.info-container_value {
	margin-left: 30px;
	font-size: 1.3rem;
	color: #fff;
	font-weight: bold;
}
</style>
