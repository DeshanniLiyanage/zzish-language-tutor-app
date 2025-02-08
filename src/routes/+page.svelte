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
		{ value: 'French', label: 'French', flag: '🇫🇷' },
		{ value: 'German', label: 'German', flag: '🇩🇪' },
		{ value: 'Spanish', label: 'Spanish', flag: '🇪🇸' },
		{ value: 'Italian', label: 'Italian', flag: '🇮🇹' }
	];

	/**
	 * @param {string} language
	 */
	function selectLanguage(language) {
		selectedLanguage = language;
	}

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
			conversation = [
				...conversation,
				{ role: 'user', content: userInput },
				{ role: 'tutor', content: data.reply }
			];
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

<div class="mx-auto max-w-4xl text-center">
	<!-- Language Slider -->
	<div class="mb-4 overflow-x-auto pb-2 whitespace-nowrap">
		<div class="flex justify-center space-x-3">
			{#each languages as language}
				<button
					on:click={() => selectLanguage(language.value)}
					class={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium shadow-md transition-all ${
						selectedLanguage === language.value
							? 'bg-blue-600 text-white'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
					}`}
				>
					<span class="text-lg">{language.flag}</span>
					<span>{language.label}</span>
				</button>
			{/each}
		</div>
	</div>
</div>
<div class="mt-16">
	<!-- Chat Conversation -->
	<div class="h-72 space-y-4 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner">
		{#each conversation as msg}
			<div
				class={`max-w-[75%] rounded-lg p-3 shadow-md ${
					msg.role === 'user'
						? 'ml-auto self-end bg-blue-500 text-white'
						: 'self-start bg-green-500 text-white'
				}`}
			>
				<strong>{msg.role === 'user' ? 'You:' : 'Tutor:'}</strong>
				{msg.content}
			</div>
		{/each}

		{#if isLoading}
			<div class="text-center text-gray-500 italic">Typing...</div>
		{/if}
	</div>

	<!-- Error Message -->
	{#if errorMessage}
		<div class="mt-4 rounded-lg bg-red-100 p-4 text-center font-medium text-red-700">
			{errorMessage}
		</div>
	{/if}

	<!-- Input Area -->
	<div class="mt-4 flex items-center space-x-3">
		<input
			bind:value={userInput}
			type="text"
			placeholder="Type your message..."
			class="flex-1 rounded-full border px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
			disabled={isLoading}
		/>
		<button
			on:click={sendMessage}
			class="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-white shadow-md transition-all hover:bg-blue-600 disabled:bg-blue-300"
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
