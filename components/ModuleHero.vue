<template>
	<section
		class="w-full h-[80vh] bg-black text-white flex items-center relative">
		<template v-if="data.item.media?.type.includes('image')">
			<figure
				class="absolute top-0 left-0 w-full h-full after:bg-black/50 after:absolute after:w-full after:h-full after:top-0 after:left-0">
				<AppImage
					:image="data.item.media"
					class="w-full h-full object-cover object-center" />
			</figure>
		</template>
		<template v-else-if="data.item.media?.type.includes('video')">
			<div
				class="absolute top-0 left-0 w-full h-full after:bg-black/50 after:absolute after:w-full after:h-full after:top-0 after:left-0">
				<video
					class="w-full h-full"
					:src="`${$directus.url}assets/${data.item.media.filename_disk}`"
					autoplay
					muted
					loop></video>
			</div>
		</template>
		<div class="container relative space-y-4">
			<h1 class="heading leading-none">{{ data.item.title }}</h1>
			<p>{{ data.item.short_text }}</p>
			<template v-if="data.item.has_button">
				<nuxt-link
					class="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black inline-block"
					:target="data.item.button.url.includes('https') ? '_blank' : ''"
					:to="
						data.item.button.url.includes('https')
							? data.item.button.url
							: `/${data.item.button.url}`
					">
					<button>
						{{ data.item.button.label }}
					</button>
				</nuxt-link>
			</template>
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
