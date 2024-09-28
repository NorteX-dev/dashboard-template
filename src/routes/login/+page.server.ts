import { lucia } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		redirect(302, "/dashboard");
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get("username");
		const password = formData.get("password");

		let bouncebackFields = {
			username
		};

		const userLoginDto = z.object({
			username: z.string().min(1, { message: "Username is required" }),
			password: z.string().min(1, { message: "Password is required" })
		});
		const dtoParsingResult = userLoginDto.safeParse({ username, password });
		if (!dtoParsingResult.success) {
			let usernameIssue = dtoParsingResult.error.errors.find((e) => e.path[0] === "username");
			let passwordIssue = dtoParsingResult.error.errors.find((e) => e.path[0] === "password");

			return fail(400, {
				errors: {
					username: usernameIssue?.message,
					password: passwordIssue?.message
				},
				fields: bouncebackFields
			});
		}

		const existingUser = await prisma.user.findFirst({
			where: { username: dtoParsingResult.data.username }
		});

		if (!existingUser) {
			return fail(400, {
				errors: {
					username: null,
					password: "Incorrect username or password"
				},
				fields: bouncebackFields
			});
		}

		if (!existingUser.hashedPassword) {
			return fail(400, {
				errors: {
					username: null,
					password: "This account was created using a social login method. Please login using that method."
				},
				fields: bouncebackFields
			});
		}

		// Validate password
		const validPassword = await bcrypt.compare(dtoParsingResult.data.password, existingUser.hashedPassword);

		if (!validPassword) {
			return fail(400, {
				errors: {
					username: null,
					password: "Incorrect username or password"
				},
				fields: bouncebackFields
			});
		}

		// Create session
		const session = await lucia.createSession(existingUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});

		redirect(302, `/dashboard?m=${encodeURIComponent("Logged in!")}`);
	}
};
