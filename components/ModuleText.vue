<template>
	<section>
		<div class="container">
			<div class="richtext" v-html="data.item.content"></div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
