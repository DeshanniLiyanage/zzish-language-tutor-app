<script>
	import { languages } from '$lib/data/languages';
	import { topics } from '$lib/data/topics';
	import { Send } from 'lucide-svelte';
	import { fade, slide } from 'svelte/transition';

	let userInput = '';
	/**
	 * @type {string | any[]}
	 */
	let conversation = [];
	let selectedLanguage = 'French'; // Default language
	let isLoading = false;
	let errorMessage = '';
	let timeoutError = false;
	let showAchievementPopup = false; // Control achievement popup visibility

	let selectedTopic = 'General'; // Default topic

	// Challenges data
	const challenges = [
		{
			title: '30-Day Vocabulary Challenge',
			description: 'Learn 5 new words every day for 30 days.',
			progress: 60
		},
		{
			title: 'Grammar Mastery Challenge',
			description: 'Complete 20 grammar exercises in a week.',
			progress: 40
		},
		{
			title: 'Conversation Practice Challenge',
			description: 'Have 10 conversations in your target language.',
			progress: 80
		}
	];

	/**
	 * @param {string} language
	 */
	function selectLanguage(language) {
		selectedLanguage = language;
	}

	/**
	 * @param {string} topic
	 */
	function selectTopic(topic) {
		selectedTopic = topic;
		userInput = `Your tutor is going to help you with ${selectedTopic} ..please Send`;
	}

	async function sendMessage() {
		if (!userInput.trim()) return;

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
				body: JSON.stringify({
					message: userInput,
					language: selectedLanguage,
					topic: selectedTopic
				})
			});

			clearTimeout(timeout); // Clear timeout if response received

			if (!response.ok) {
				throw new Error('Failed to fetch response from the tutor.');
			}

			const data = await response.json();
			conversation = [
				...conversation,
				{ role: 'user', content: userInput },
				{ role: 'tutor', content: data.reply }
			];

			// Show achievement popup after every 3 messages
			if (conversation.length % 3 === 0) {
				showAchievementPopup = true;
				setTimeout(() => (showAchievementPopup = false), 3000); // Hide after 3 seconds
			}
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

<!-- Achievement Popup -->
{#if showAchievementPopup}
	<div
		transition:fade
		class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
	>
		<div transition:slide class="rounded-lg bg-white p-8 text-center shadow-lg">
			<img
				src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
				alt="Achievement GIF"
				class="mx-auto h-32 w-32"
			/>
			<h2 class="mt-4 text-2xl font-bold text-gray-800">Achievement Unlocked!</h2>
			<p class="text-gray-600">You've sent 3 messages. Keep it up!</p>
		</div>
	</div>
{/if}

<!-- Top Bar -->
<div class="mx-auto max-w-7xl px-4">
	<!-- Language Selection -->
	<div class="mx-auto mb-6 max-w-6xl overflow-x-auto pb-2">
		<div class="justify-left flex space-x-4 overflow-x-auto">
			{#each languages as language}
				<button
					on:click={() => selectLanguage(language.value)}
					class={`text-m flex transform items-center space-x-2 rounded-lg px-5 py-3 font-medium transition-all duration-300 ease-in-out ${
						selectedLanguage === language.value
							? 'scale-105 bg-purple-600 text-white shadow-xl'
							: 'bg-gray-200 text-gray-800 hover:scale-105 hover:bg-gray-300'
					}`}
				>
					<span class="text-lg">{language.flag}</span>
					<span>{language.label}</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- Chat Conversation -->
<div class="mx-auto max-w-7xl px-4">
	<div class="h-115 space-y-4 overflow-y-auto rounded-lg bg-gray-50 p-6 shadow-inner">
		{#if isLoading}
			<div class="text-center text-gray-500 italic">Your tutor is typing...</div>
		{:else}
			<div class="text-center text-gray-500 italic">
				Please select a tutor from above and type what you want to learn today..
			</div>
			<div class="text-center text-gray-500 italic">
				Select a topic from below, so your tutor can give you helpful phrases..
			</div>
		{/if}

		{#each conversation as msg}
			<div
				transition:fade
				class={`max-w-[75%] rounded-lg p-4 shadow-lg ${
					msg.role === 'user'
						? 'ml-auto self-end bg-blue-500 text-white'
						: 'self-start bg-green-500 text-white'
				}`}
			>
				<strong>{msg.role === 'user' ? 'You:' : 'Tutor:'}</strong>
				<p>{msg.content}</p>
			</div>
		{/each}
	</div>

	<!-- Error Message -->
	{#if errorMessage}
		<div class="mt-4 rounded-lg bg-red-100 p-4 text-center font-medium text-red-700">
			{errorMessage}
		</div>
	{/if}

	<!-- Input Area -->
	<div class="mt-4 flex items-center space-x-4">
		<input
			bind:value={userInput}
			type="text"
			placeholder="Talk to your tutor..."
			class="flex-1 rounded-lg border-2 border-gray-300 px-4 py-3 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
			disabled={isLoading}
		/>
		<button
			on:click={sendMessage}
			class="flex items-center gap-3 rounded-full bg-blue-500 px-5 py-3 text-white shadow-lg transition-all hover:bg-blue-600 disabled:bg-blue-300"
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

<!-- Bottom Section: Topics to Discuss with Tutor -->
<div class="mx-auto mt-8 max-w-7xl px-4">
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-6">
		{#each topics as topic}
			<button
				on:click={() => selectTopic(topic.value)}
				aria-label={`Discuss ${topic.value}`}
				class={`group relative flex items-center justify-center rounded-lg p-3 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none ${
					selectedTopic === topic.value
						? 'border border-purple-300/20 bg-purple-600/80 text-white shadow-lg backdrop-blur-sm'
						: `${topic.bgColor} ${topic.borderColor} hover:${topic.hoverBgColor} hover:${topic.hoverBorderColor} text-gray-800 shadow-lg backdrop-blur-sm`
				}`}
			>
				<svelte:component this={topic.icon} size={24} class="mr-4 text-gray-400" />
				<span
					class={`text-right text-sm font-semibold ${
						selectedTopic === topic.value ? 'text-gray-200' : 'text-purple-600'
					}`}
				>
					{topic.value}</span
				>
			</button>
		{/each}
	</div>
</div>
