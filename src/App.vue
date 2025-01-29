<script setup lang="ts">
import Left from '@components/Sides/Left.vue';
import Right from '@components/Sides/Right.vue';
import Wrapper from '@components/containers/Wrapper.vue';
</script>

<template>
	<Wrapper>
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

@media only screen and (min-width: 700px) {
	.container {
		display: flex;
	}
}
</style>
