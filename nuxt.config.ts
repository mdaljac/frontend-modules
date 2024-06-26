// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/device",
		"@nuxt/image",
		"@hypernym/nuxt-gsap",
		"nuxt-swiper",
	],
	tailwindcss: {
		cssPath: "~/assets/css/main.css",
	},
	runtimeConfig: {
		apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
		public: {
			apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
		},
	},
});
