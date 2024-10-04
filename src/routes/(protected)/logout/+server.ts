import { lucia } from "@/server/lucia";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals, cookies }) => {
	if (!locals.session) {
		return redirect(302, "/login");
	}

	await lucia.invalidateSession(locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: ".",
		...sessionCookie.attributes
	});

	redirect(302, "/login");
};
