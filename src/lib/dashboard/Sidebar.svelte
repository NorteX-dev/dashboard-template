<script lang="ts">
	import { Bell } from "lucide-svelte";
	import { Button } from "@/components/ui/button";
	import { Badge } from "@/components/ui/badge";
	import * as Card from "@/components/ui/card";
	import { page } from "$app/stores";
	import { iconUrl, title } from "@/public";

	export let links;
</script>

<div class="bg-muted/40 hidden border-r md:block">
	<div class="flex h-full max-h-screen flex-col gap-2">
		<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
			<a href="/dashboard" class="flex items-center gap-2 font-semibold">
				<img src={iconUrl} alt={title} class="size-6 rounded" />
				<span class="">{title}</span>
			</a>
			<!--<Button variant="outline" size="icon" class="ml-auto h-8 w-8">-->
			<!--	<Bell class="h-4 w-4" />-->
			<!--	<span class="sr-only">Toggle notifications</span>-->
			<!--</Button>-->
		</div>
		<div class="flex-1">
			<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
				{#each links as link}
					<a
						href={link.href}
						class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
						class:text-primary={$page.url.pathname === link.href}
						class:bg-muted={$page.url.pathname === link.href}
					>
						<svelte:component this={link.icon} class="h-4 w-4" />
						{link.name}
						{#if link.badge}
							<Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
								{link.badge}
							</Badge>
						{/if}
					</a>
				{/each}
			</nav>
		</div>
		<!--<div class="mt-auto p-4">-->
		<!--	<Card.Root>-->
		<!--		<Card.Header class="p-2 pt-0 md:p-4">-->
		<!--			<Card.Title>Upgrade to Pro</Card.Title>-->
		<!--			<Card.Description>-->
		<!--				Unlock all features and get unlimited access to our support team.-->
		<!--			</Card.Description>-->
		<!--		</Card.Header>-->
		<!--		<Card.Content class="p-2 pt-0 md:p-4 md:pt-0">-->
		<!--			<Button size="sm" class="w-full">Upgrade</Button>-->
		<!--		</Card.Content>-->
		<!--	</Card.Root>-->
		<!--</div>-->
	</div>
</div>
