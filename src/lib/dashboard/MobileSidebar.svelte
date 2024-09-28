<script>
	import { Button } from "@/components/ui/button";
	import { Badge } from "@/components/ui/badge";
	import { links } from "@/public";
	import { Menu } from "lucide-svelte";
	import { page } from "$app/stores";
	import * as Sheet from "@/components/ui/sheet";
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
			<Menu class="h-5 w-5" />
			<span class="sr-only">Toggle navigation menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="flex flex-col">
		<nav class="mt-4 grid gap-2 text-lg font-medium">
			{#each links as link}
				<a
					href={link.href}
					class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
					class:bg-muted={$page.url.pathname === link.href}
					class:text-white={$page.url.pathname === link.href}
				>
					<svelte:component this={link.icon} class="h-5 w-5" />
					{link.name}
					{#if link.badge}
						<Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
							{link.badge}
						</Badge>
					{/if}
				</a>
			{/each}
		</nav>
	</Sheet.Content>
</Sheet.Root>
