import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Lucia } from "lucia";
import { prisma } from "$lib/server/prisma";
import { dev } from "$app/environment";
import { Discord } from "arctic";
import { DISCORD_OAUTH2_CLIENT_ID, DISCORD_OAUTH2_CLIENT_SECRET } from "$env/static/private";
import { PUBLIC_URL } from "$env/static/public";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const discordAdapter = new Discord(
	DISCORD_OAUTH2_CLIENT_ID,
	DISCORD_OAUTH2_CLIENT_SECRET,
	(dev ? "http://localhost:5173" : PUBLIC_URL) + "/login/discord/callback"
);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
			email: attributes.email,
			admin: attributes.admin
		};
	}
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
	email: string;
	admin: boolean;
}
