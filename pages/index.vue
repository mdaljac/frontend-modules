<template>
	<div class="space-y-[15vmin] mb-24">
		<template v-for="(mod, i) in page.modules" :key="`${mod.collection}-${i}`">
			<template v-if="mod.collection === 'module_hero'"
				><ModuleHero :data="mod"
			/></template>
			<template v-if="mod.collection === 'module_text'"
				><ModuleText :data="mod"
			/></template>
			<template v-if="mod.collection === 'module_image_text'"
				><ModuleImageText :data="mod"
			/></template>
			<template v-if="mod.collection === 'module_image'"
				><ModuleImage :data="mod"
			/></template>
		</template>

		<section>
			<div class="container">
				<div class="lg:w-3/5 lg:mx-auto">
					<Swiper v-bind="swiperOptions">
						<SwiperSlide
							v-for="testimonial in testimonials"
							:key="testimonial.id">
							<div class="flex items-center gap-x-4">
								<AppImage
									:image="testimonial.image"
									class="w-14 h-14 lg:w-20 lg:h-20" />
								<span class="text-lg font-semibold">{{
									testimonial.company
								}}</span>
							</div>
							<div
								class="relative border-l border-black/20 ml-3 lg:ml-10 mt-6 pl-8 lg:pl-14">
								<span class="text-xl font-semibold">{{
									testimonial.name
								}}</span>
								<blockquote class="lg:text-lg italic">
									{{ testimonial.text }}
								</blockquote>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
const { $directus, $readItem, $readItems } = useNuxtApp();

const { data: page } = await useAsyncData("page", () => {
	return $directus.request(
		$readItem("pages", "homepage", {
			fields: [
				"*",
				{
					modules: [
						"collection",
						{
							item: [
								"*",
								{
									media: ["*"],
									button: ["*"],
									image: ["*"],
									video: ["*"],
								},
							],
						},
					],
				},
			],
		}),
	);
});

const { data: testimonials } = await useAsyncData("testimonials", () => {
	return $directus.request(
		$readItems("testimonial", { fields: ["*", { image: ["*"] }] }),
	);
});

useSeoMeta({
	title: page.value.title,
	description: page.value.description,
});

const swiperOptions = {
	modules: [SwiperAutoplay, SwiperEffectFade, SwiperPagination],
	loop: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	speed: 1000,
	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
	pagination: {
		enabled: true,
		type: "progressbar",
	},
};
</script>

<style lang="postcss" scoped></style>
