<script>
	import { Send } from 'lucide-svelte';
	let userInput = '';
	/**
	 * @type {any[]}
	 */
	let conversation = [];
	let selectedLanguage = 'French'; // Default language
	let isLoading = false;
	let errorMessage = '';
	let timeoutError = false;

	const languages = [
		{ value: 'German', label: 'German' },
		{ value: 'French', label: 'French' },
		{ value: 'Spanish', label: 'Spanish' },
		{ value: 'Italian', label: 'Italian' }
	];

	async function sendMessage() {
		if (!userInput.trim()) return; // Prevent empty messages

		isLoading = true;
		errorMessage = '';
		timeoutError = false;

		// Set a timeout for 60 seconds
		const timeout = setTimeout(() => {
			timeoutError = true;
			errorMessage = 'Your teacher is busy. Please come back again.';
			isLoading = false;
		}, 60000);

		try {
			const response = await fetch('/api/tutor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ message: userInput, language: selectedLanguage })
			});

			clearTimeout(timeout); // Clear the timeout if the response is received

			if (!response.ok) {
				throw new Error('Failed to fetch response from the tutor.');
			}

			const data = await response.json();
			conversation.push({ role: 'user', content: userInput });
			conversation.push({ role: 'tutor', content: data.reply });
		} catch (error) {
			if (!timeoutError) {
				errorMessage = 'An error occurred. Please try again.';
			}
			console.error(error);
		} finally {
			isLoading = false;
			userInput = '';
		}
	}
</script>

<div class="min-h-screen bg-gray-100 p-8">
	<div class="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
		<div class="logo-cloud grid-cols-1 gap-0.5 xl:grid-cols-2 2xl:grid-cols-4">
			<a href="/elements/logo-clouds" class="logo-item">HR Solutions</a>
			<a href="/elements/logo-clouds" class="logo-item">Acme Theaters</a>
			<a href="/elements/logo-clouds" class="logo-item">Cruisin' Cuisine</a>
			<a href="/elements/logo-clouds" class="logo-item">Arcane Security</a>
			<a href="/elements/logo-clouds" class="logo-item">Stark Industries</a>
			<a href="/elements/logo-clouds" class="logo-item">Gekko & Co.</a>
			<a href="/elements/logo-clouds" class="logo-item">Acme Corp.</a>
			<a href="/elements/logo-clouds" class="logo-item">Wonka Inc.</a>
		</div>
		<h1 class="mb-4 text-2xl font-bold">AI Language Tutor - Main</h1>
		<div class="mb-4">
			<label for="language" class="block text-sm font-medium text-gray-700"
				>Language to Learn:</label
			>
			<select bind:value={selectedLanguage} id="language" class="mt-1 w-full rounded-lg border p-2">
				{#each languages as language}
					<option value={language.value}>{language.label}</option>
				{/each}
			</select>
		</div>
		<div class="space-y-4">
			{#each conversation as msg}
				<div class="rounded-lg p-4 {msg.role === 'user' ? 'bg-blue-100' : 'bg-green-100'}">
					<strong>{msg.role === 'user' ? 'You:' : 'Tutor:'}</strong>
					{msg.content}
				</div>
			{/each}
		</div>
		{#if errorMessage}
			<div class="mt-4 rounded-lg bg-red-100 p-4 text-red-700">
				{errorMessage}
			</div>
		{/if}
		<div class="mt-6 flex space-x-4">
			<input
				bind:value={userInput}
				type="text"
				placeholder="Type your message..."
				class="flex-1 rounded-lg border p-2"
				disabled={isLoading}
			/>
			<button
				on:click={sendMessage}
				class="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
				disabled={isLoading}
			>
				{#if isLoading}
					<span>Sending...</span>
				{:else}
					<Send class="h-5 w-5" />
					<span>Send</span>
				{/if}
			</button>
		</div>
	</div>
</div>
