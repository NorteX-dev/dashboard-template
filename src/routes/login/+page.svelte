<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";
	import { Input } from "@/components/ui/input";
	import { Button } from "@/components/ui/button";

	export let form: ActionData;
</script>

<div class="absolute left-1/2 top-1/2 min-w-[400px] -translate-x-1/2 -translate-y-1/2">
	<h1 class="mb-4 text-center text-3xl font-bold">Welcome back!</h1>

	<Button href="/login/discord" class="block text-center" variant="secondary">Log in using Discord</Button>

	<p class="mt-4 text-center text-xs font-bold uppercase text-slate-400">or</p>

	<form method="post" class="flex flex-col" use:enhance>
		<label for="username" class="mb-1 mt-2 block text-sm">Username</label>
		<div class:*:border-red-400={form?.errors?.username}>
			<Input type="text" id="username" name="username" value={form?.fields?.username ?? ""} />
		</div>
		{#if form?.errors?.username}
			<p class="mt-2 text-xs text-red-400">
				{form.errors.username}
			</p>
		{/if}

		<label for="password" class="mb-1 mt-2 block text-sm">Password</label>
		<div class:*:border-red-400={form?.errors?.password}>
			<Input type="password" id="password" name="password" />
		</div>
		{#if form?.errors?.password}
			<p class="mt-2 text-xs text-red-400">
				{form.errors.password}
			</p>
		{/if}

		<Button type="submit" class="mt-4">Log in</Button>
	</form>
</div>
