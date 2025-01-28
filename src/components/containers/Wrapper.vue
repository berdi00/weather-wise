<script setup lang="ts">
import { loadingWeather } from '@/store/weather';
import Loading from '@components/home/Loading.vue';
</script>

<template>
	<div class="wrapper">
		<Loading v-if="loadingWeather" />
		<slot />
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	max-width: 1440px;
	min-height: 800px;
	margin: auto;
	background-color: var(--deep-navy);
	border-radius: 10px;
	padding-inline: 5px;
}

@media only screen and (min-width: 700px) {
	.wrapper {
		margin-block: 1rem;
		padding-block: 1rem;
		padding-inline: 0.8rem;
	}
}
</style>
