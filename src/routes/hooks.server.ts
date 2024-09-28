import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = {
		demo: true
	};
	return resolve(event);
};
