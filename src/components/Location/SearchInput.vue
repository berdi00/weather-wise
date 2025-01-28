<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from '@components/Location/Dropdown.vue';
import { searchValue, locations } from '@/store/location';
const hide = ref(false);
</script>

<template>
	<div class="search_container">
		<input type="text" placeholder="Berlin" v-model="searchValue" @focus="hide = false" />
		<div style="position: relative">
			<Dropdown v-if="locations && !hide" :locations="locations" v-model:val="hide" />
		</div>
	</div>
</template>

<style scoped>
.search_container {
	width: 100%;
}
.search_container > input {
	outline: none;
	border: none;
	width: 100%;
	padding-block: 12px;
	padding-inline: 10px;
	border-radius: 14px;
	font-size: 16px;
	transition: box-shadow 0.3s ease;
	background-color: var(--primary-dark-blue);
	color: var(--slate-400);
}
</style>
