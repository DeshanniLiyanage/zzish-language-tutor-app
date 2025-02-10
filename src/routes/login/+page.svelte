<script lang="ts">
	import { goto } from '$app/navigation';

	let username: string = '';
	let password: string = '';
	let errorMessage: string = '';

	function navigateToPage() {
		if (!username || !password) {
			errorMessage = 'Please enter both username and password.';
			return;
		}
		goto('/');
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-6 text-2xl font-bold">Login</h1>
		{#if errorMessage}
			<div class="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
				{errorMessage}
			</div>
		{/if}
		<div class="space-y-4">
			<input
				bind:value={username}
				type="text"
				placeholder="Username"
				class="w-full rounded-lg border p-2"
			/>
			<input
				bind:value={password}
				type="password"
				placeholder="Password"
				class="w-full rounded-lg border p-2"
			/>
			<button
				on:click={navigateToPage}
				class="w-full rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
			>
				Login
			</button>
		</div>
	</div>
</div>
