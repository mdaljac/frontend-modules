export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook("render:html", (html, { event }) => {
		// html argument is an object representation of the html template.
	});
});
