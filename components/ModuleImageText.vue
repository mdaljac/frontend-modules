<template>
	<section>
		<div class="container">
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-y-[10vmin] lg:gap-x-[10vmin] lg:items-center">
				<div v-html="data.item.text" class="richtext"></div>
				<figure :class="{ 'order-first': data.item.image_position === 'left' }">
					<AppImage :image="data.item.image" class="w-full" />
				</figure>
			</div>
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
