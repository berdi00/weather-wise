<script setup lang="ts">
import { location, searchValue } from '@/store/location';
import type { TLocation } from '@/types/location';

defineProps<{
	locations: TLocation[];
}>();

const emit = defineEmits(['update:val']);

const selectLocation = (loc: TLocation) => {
	emit('update:val', true);
	location.value = loc;
	searchValue.value = loc.name;
};
</script>

<template>
	<ul class="dropdown">
		<li class="dropdown-item" v-for="loc in locations" @click="() => selectLocation(loc)">
			{{ loc.name }}, {{ loc.country }}
		</li>
	</ul>
</template>

<style scoped>
.dropdown {
	list-style-type: none;
	border-radius: 4px;
	background-color: var(--primary-dark-blue);
	width: 100%;
	height: auto;
	padding: 0;
	margin: 0;
	margin-top: 1px;
	color: #fff;
	padding-inline: 4px;
	padding-block: 6px;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 2;
}

.dropdown-item {
	cursor: pointer;
	padding: 10px;
	border-radius: 6px;
}

.dropdown-item:last-child {
	border-bottom: none;
}

.dropdown-item:hover {
	background-color: #888;
}
</style>
