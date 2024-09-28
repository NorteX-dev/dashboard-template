<script>
	import { Search } from "lucide-svelte";
	import { Input } from "@/components/ui/input";
	import MobileSidebar from "@/dashboard/MobileSidebar.svelte";
	import UserDropdown from "@/dashboard/UserDropdown.svelte";
</script>

<header class="bg-muted/40 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
	<MobileSidebar />
	<div class="w-full flex-1">
		<form>
			<div class="relative">
				<Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
				<Input
					type="search"
					placeholder="Search products..."
					class="bg-background w-full appearance-none pl-8 shadow-none md:w-2/3 lg:w-1/3"
				/>
			</div>
		</form>
	</div>
	<UserDropdown />
</header>
