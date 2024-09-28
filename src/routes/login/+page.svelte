<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px]">
	<h1 class="mb-4 text-center text-3xl font-bold">Welcome back!</h1>

	<a href="/login/discord">
		<p class="mb-6 mt-4 w-full rounded bg-gray-800 px-6 py-2 text-center text-sm font-medium text-white">Log in using Discord</p>
	</a>

	<p class="text-center text-xs font-bold uppercase text-gray-400">or</p>

	<form method="post" class="mt-2 flex flex-col" use:enhance>
		<label for="username" class="mb-2 block text-sm">Username</label>
		<div class="relative">
			<input
				type="text"
				id="username"
				name="username"
				class="mb-2 block w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-gray-400 placeholder-gray-500"
				value={form?.fields?.username ?? ""}
			/>
		</div>
		{#if form?.errors?.username}
			<p class="mb-2 text-xs text-red-400">
				{form.errors.username}
			</p>
		{/if}

		<label for="password" class="mb-2 block text-sm">Password</label>
		<div class="relative">
			<input
				type="password"
				id="password"
				name="password"
				class="mb-2 block w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-gray-400 placeholder-gray-500"
			/>
		</div>
		{#if form?.errors?.password}
			<p class="mb-2 text-xs text-red-400">
				{form.errors.password}
			</p>
		{/if}

		<button class="mt-4 w-full rounded bg-blue-500 px-6 py-2 text-sm font-medium text-white" type="submit"> Log in </button>
	</form>

</div>