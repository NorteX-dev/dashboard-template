import { prisma } from "@/server/prisma";
import type { Actions, PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url, locals }) => {
	if (!locals.user) {
		return redirect(302, "/login");
	}
	const page = url.searchParams.get("p");
	return { posts: await prisma.post.findMany({ skip: parseInt(page || "1") * 10, take: 10 }) };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		if (!locals.user) {
			return redirect(302, "/login");
		}

		const data = await request.formData();
		const name = data.get("name") as string;
		const bouncebackFields = { name: name || "" };
		if (!name) {
			return { errors: { name: "Name is required" }, fields: bouncebackFields };
		}
		await prisma.post.create({
			data: {
				body: "This is a post body",
				slug: "this-is-a-post-body",
				title: name,
				userId: locals.user.id
			}
		});

		redirect(302, `/dashboard`);
	}
};
