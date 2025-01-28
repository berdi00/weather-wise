<template>
	<div>
		<slot />
	</div>
</template>

<style scoped>
div {
	padding-block: 4px;
	padding-inline: 1rem;
	border-radius: 10px;
	background-color: var(--primary-dark-blue);
}

@media only screen and (min-width: 700px) {
	div {
		padding-block: 1.5rem;
		padding-inline: 2rem;
		border-radius: 2rem;
	}
}
</style>
