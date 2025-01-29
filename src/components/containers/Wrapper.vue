<script setup lang="ts">
import { errorWeather, loadingWeather } from '@/store/weather';
import Loading from '@components/home/Loading.vue';
import ErrorResponse from '../home/ErrorResponse.vue';
import { errorSearch } from '@/store/location';
import SearchInput from '../Location/SearchInput.vue';
</script>

<template>
	<div class="wrapper">
		<SearchInput class="search" />
		<Loading v-if="loadingWeather" />
		<ErrorResponse v-else-if="errorSearch || errorWeather" />
		<slot v-else />
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

.search {
	position: sticky;
	top: 5px;
	left: 0;
	padding-inline: 3px;
	padding-block: 3px;
}

@media only screen and (min-width: 700px) {
	.wrapper {
		margin-block: 1rem;
		padding-block: 1rem;
		padding-inline: 0.8rem;
	}

	.search {
		display: block;
		width: 70%;
	}
}
</style>
