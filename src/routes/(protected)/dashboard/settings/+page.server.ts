import { prisma } from "@/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({}) => {
	let settings = await prisma.settings.findFirst();
	if (!settings) {
		settings = await prisma.settings.create({ data: {} });
	}
	return { settings };
};
