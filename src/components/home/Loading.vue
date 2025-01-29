<template>
	<div class="loading-container">
		<div class="loading-spinner">Loading...</div>
	</div>
</template>

<style scoped>
.loading-spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
	color: #fff;
}

@keyframes spin {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
</style>
