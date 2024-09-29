<script lang="ts">
	import { enhance } from "$app/forms";
	import * as AlertDialog from "@/components/ui/alert-dialog";
	import { Button } from "@/components/ui/button";
	import type { ActionData } from "./$types";
	import { Input } from "@/components/ui/input";
	import { LoaderCircle } from "lucide-svelte";

	export let data;
	export let form: ActionData;

	let isNewMenuOpen = false;
	let newMenuLoading = false;
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<h1 class="text-lg font-semibold md:text-2xl">Posts</h1>
	</div>
	<div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
		{#if data.posts.length}
			posts
		{:else}
			<div class="flex flex-col items-center gap-1 text-center">
				<h3 class="text-2xl font-bold tracking-tight">There are no posts</h3>
				<p class="text-sm text-muted-foreground">Add an item.</p>
				<Button class="mt-4" on:click={() => (isNewMenuOpen = true)}>Add Post</Button>
				<AlertDialog.Root bind:open={isNewMenuOpen} closeOnOutsideClick={true}>
					<AlertDialog.Trigger />
					<AlertDialog.Content>
						<AlertDialog.Header>
							<AlertDialog.Title>Add Post</AlertDialog.Title>
						</AlertDialog.Header>

						<form
							method="post"
							class="flex flex-col"
							use:enhance={() => {
								newMenuLoading = true;
								return async ({ update }) => {
									newMenuLoading = false;
									update();
								};
							}}
						>
							<fieldset>
								<label for="name" class="mb-1 mt-2 block text-sm">Name</label>
								<div class:*:border-red-400={form?.errors?.name}>
									<Input
										type="text"
										id="name"
										name="name"
										value={form?.fields?.name ?? ""}
										autocomplete="off"
										placeholder="Enter post name"
									/>
								</div>
								{#if form?.errors?.name}
									<p class="mt-2 text-xs text-red-400">
										{form.errors.name}
									</p>
								{/if}
							</fieldset>

							<AlertDialog.Footer class="mt-4">
								<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>

								<Button type="submit" class="flex items-center">
									{#if newMenuLoading}
										<LoaderCircle class="mr-2 size-4 animate-spin" />
									{/if}
									Create
								</Button>
							</AlertDialog.Footer>
						</form>
					</AlertDialog.Content>
				</AlertDialog.Root>
			</div>
		{/if}
	</div>
</main>
