import { createDirectus } from "@directus/sdk";
import { rest, readItem, readItems } from "@directus/sdk/rest";

export default defineNuxtPlugin((nuxtApp) => {
	// Doing something with nuxtApp
	const runtimeConfig = useRuntimeConfig();
	const directus = createDirectus(runtimeConfig.public.apiBase).with(rest());

	return {
		provide: { directus, readItem, readItems },
	};
});
