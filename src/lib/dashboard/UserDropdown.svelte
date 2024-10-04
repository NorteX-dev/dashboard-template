<script>
	import { Button } from "@/components/ui/button";
	import { CircleUser } from "lucide-svelte";
	import * as DropdownMenu from "@/components/ui/dropdown-menu";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
			<CircleUser class="h-5 w-5" />
			<span class="sr-only">Toggle user menu</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Label>My Account</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Item href="/dashboard/profile">Profile</DropdownMenu.Item>
		<DropdownMenu.Item href="/dashboard/settings">Settings</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item href="/logout">Logout</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
