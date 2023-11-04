<template>
	<NuxtImg
		:src="`${$directus.url}assets/${image.filename_disk}`"
		:alt="image.description || image.title"></NuxtImg>
</template>

<script setup>
const props = defineProps({
	image: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
