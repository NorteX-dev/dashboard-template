import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	return redirect(302, "/dashboard");
};
