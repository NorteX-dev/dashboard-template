import { Home } from "lucide-svelte";

export let iconUrl = "/favicon.png";
export let title = "Dashboard";

export let links = [
	{ name: "Dashboard", href: "/dashboard", icon: Home },
	{ name: "Posts", href: "/dashboard/posts", icon: Home, badge: "6" },
	{ name: "New Post", href: "/dashboard/posts/new", icon: Home },
	{ name: "Edit Post", href: "/dashboard/posts/[id]", icon: Home }
];
export type PageLink = (typeof links)[number];
