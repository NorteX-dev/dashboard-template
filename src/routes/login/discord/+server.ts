import { redirect, type RequestHandler } from "@sveltejs/kit";
import { generateState } from "arctic";
import { discordAdapter } from "$lib/server/lucia";
import { dev } from "$app/environment";

export const GET: RequestHandler = async ({ cookies }) => {
	const state = generateState();
	const url = await discordAdapter.createAuthorizationURL(state, { scopes: ["identify", "email"] });

	cookies.set("discord_state", state, {
		path: "/",
		secure: !dev,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax"
	});

	redirect(302, url.toString());
};
