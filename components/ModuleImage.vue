<template>
	<section>
		<AppImage :image="data.item.image" class="w-full" />
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
