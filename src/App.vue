<script setup lang="ts">
import SearchInput from '@components/Location/SearchInput.vue';
import Left from '@components/Sides/Left.vue';
import Right from '@components/Sides/Right.vue';
import Wrapper from '@components/containers/Wrapper.vue';
</script>

<template>
	<Wrapper>
		<SearchInput class="search-mobile" />
		<div class="container">
			<Left />
			<Right />
		</div>
	</Wrapper>
</template>

<style scoped>
.container {
	gap: 2rem;
}

.search-mobile {
	position: sticky;
	top: 5px;
	left: 0;
	padding-inline: 3px;
	padding-block: 3px;
}
@media only screen and (min-width: 700px) {
	.container {
		display: flex;
	}

	.search-mobile {
		display: none;
	}
}
</style>
