<script>
	import { languages } from '$lib/data/languages';
	import { topics } from '$lib/data/topics';
	import { Send } from 'lucide-svelte';
	import { fade, slide } from 'svelte/transition';

	let userInput = '';
	let model = '';
	/**
	 * @type {string | any[]}
	 */
	let conversation = [];
	/**
	 * @type {string | null}
	 */
	let selectedLanguage = 'en'; // Default language
	let isLoading = false;
	let errorMessage = '';
	let timeoutError = false;
	let showAchievementPopup = false; // Control achievement popup visibility

	/**
	 * @type {string | null}
	 */
	let selectedTopic = null; // Default topic

	/**
	 * @param {string | null} language
	 */
	function selectLanguage(language) {
		selectedLanguage = language;
	}

	/**
	 * @param {string | null} topic
	 */
	function selectTopic(topic) {
		selectedTopic = topic;

		userInput = `Teach me vocabulary related to ${selectedTopic}.`;
	}

	function findLLM() {
		if (selectedTopic != null) {
			model = '/api/vocabulary';
		} else {
			model = '/api/translator';
		}
	}

	async function sendMessage() {
		if (!userInput.trim()) return;

		isLoading = true;
		errorMessage = '';
		timeoutError = false;

		findLLM();

		// Set a timeout for 60 seconds
		const timeout = setTimeout(() => {
			timeoutError = true;
			errorMessage = 'Your teacher is busy. Please come back again.';
			isLoading = false;
		}, 60000);

		try {
			const response = await fetch(`${model}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					message: userInput,
					targetLanguage: selectedLanguage,
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
			<img src="/ZzishLingo_animated.gif" alt="Achievement GIF" class="mx-auto h-32 w-32" />
			<h2 class="mt-4 text-2xl font-bold text-gray-800">Achievement Unlocked!</h2>
			<p class="text-gray-600">You've sent 3 messages. Keep it up!</p>
		</div>
	</div>
{/if}

<!-- Top Bar -->
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<!-- Language Selection -->
	<div class="mx-auto mb-6 max-w-6xl overflow-x-auto pb-2">
		<div class="flex space-x-4 overflow-x-auto">
			{#each languages as language}
				<button
					on:click={() => selectLanguage(language.value)}
					class={`flex transform items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out sm:px-5 sm:py-3 sm:text-base ${
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
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="h-96 space-y-4 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner sm:h-120 sm:p-6"
	>
		{#if isLoading}
			<div class="text-center text-gray-500 italic">Your tutor is typing...</div>
		{/if}

		{#if !isLoading && conversation.length == 0}
			<div class="text-left text-gray-500 italic">Select your tutor from the options above :</div>
			<div class="text-left text-gray-500 italic">
				1.Translation Assistance – Send text to your tutor for translation.
			</div>
			<div class="text-left text-gray-500 italic">
				2.Vocabulary Learning – Choose a topic to expand your vocabulary.
			</div>
			<div class="text-left text-gray-500 italic">
				3.Grammar Correction – Get your grammar reviewed and corrected by your tutor.
			</div>
		{/if}

		{#each conversation as msg}
			<div
				transition:fade
				class={`max-w-[75%] rounded-lg p-3 shadow-lg sm:p-4 ${
					msg.role === 'user'
						? 'ml-auto self-end bg-teal-400 text-white'
						: 'self-start bg-indigo-400 text-white'
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
			lang="en"
			placeholder="Talk to your tutor..."
			class="flex-1 rounded-lg border-2 border-gray-300 px-3 py-2 shadow-md focus:ring-2 focus:ring-purple-500 focus:outline-none sm:px-4 sm:py-3"
			disabled={isLoading}
		/>
		<button
			on:click={sendMessage}
			class="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-700 to-orange-300 px-4 py-2 text-white shadow-lg transition-all hover:bg-purple-600 disabled:bg-purple-300 sm:gap-3 sm:px-5 sm:py-3"
			disabled={isLoading}
		>
			{#if isLoading}
				<span>Sending...</span>
			{:else}
				<Send class="h-4 w-4 sm:h-5 sm:w-5" />
				<span>Send</span>
			{/if}
		</button>
	</div>
</div>

<!-- Bottom Section: Topics to Discuss with Tutor -->
<div
	class="via-white-600 mx-auto mt-8 flex max-w-7xl flex-col justify-end rounded-lg bg-gradient-to-r from-purple-400 to-gray-400 p-6 px-4 sm:px-6 lg:px-8"
>
	<h4 class="mb-4 text-xl font-bold text-white sm:mb-8 sm:text-2xl">Learn Vocabulary</h4>
	<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
		{#each topics as topic}
			<button
				on:click={() => selectTopic(topic.value)}
				aria-label={`Discuss ${topic.value}`}
				class={`group relative flex items-center justify-center rounded-lg p-2 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none sm:p-3 ${
					selectedTopic === topic.value
						? 'border border-purple-300/20 bg-purple-600/80 text-white shadow-lg backdrop-blur-sm'
						: `${topic.bgColor} ${topic.borderColor} hover:${topic.hoverBgColor} hover:${topic.hoverBorderColor} text-gray-800 shadow-lg backdrop-blur-sm`
				}`}
			>
				<svelte:component this={topic.icon} size={20} class="mr-2 text-gray-400 sm:mr-4" />
				<span
					class={`text-right text-xs font-semibold sm:text-sm ${
						selectedTopic === topic.value ? 'text-gray-200' : 'text-purple-600'
					}`}
				>
					{topic.value}
				</span>
			</button>
		{/each}
	</div>
</div>

<!-- Footer Section -->
<footer class="rounded-lg bg-gradient-to-r from-stone-600 to-slate-600 py-6 text-center text-white">
	<p class="text-sm">© 2025 zzishlang. All rights reserved.</p>
</footer>
