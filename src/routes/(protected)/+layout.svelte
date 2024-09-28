<script lang="ts">
	import Sidebar from "@/dashboard/Sidebar.svelte";
	import Nav from "@/dashboard/Nav.svelte";
	import { links } from "@/public";
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<Sidebar {links} />
	<div class="flex flex-col">
		<Nav />
		<slot></slot>
	</div>
</div>
