<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import '../app.css';

	let year = new Date().getFullYear();
	let isRightSidebarOpen = true;

	// Topics and Levels
	let topics = [
		{
			level: 'Beginner',
			color: 'bg-blue-100',
			items: [
				{ title: 'Greetings', icon: '👋' },
				{ title: 'Numbers', icon: '🔢' },
				{ title: 'Basic Phrases', icon: '💬' }
			]
		},
		{
			level: 'Intermediate',
			color: 'bg-purple-100',
			items: [
				{ title: 'Travel Phrases', icon: '✈️' },
				{ title: 'Food & Dining', icon: '🍽️' },
				{ title: 'Daily Conversations', icon: '🗣️' }
			]
		},
		{
			level: 'Advanced',
			color: 'bg-green-100',
			items: [
				{ title: 'Business Language', icon: '💼' },
				{ title: 'Idioms & Expressions', icon: '📚' },
				{ title: 'Debate & Discussion', icon: '🎤' }
			]
		}
	];

	// Collapsible Sidebar
	function toggleRightSidebar() {
		isRightSidebarOpen = !isRightSidebarOpen;
	}
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900">
	<!-- ✅ Navbar -->
	<header class="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-md">
		<div class="container mx-auto flex items-center justify-between">
			<div class="flex items-center space-x-2">
				<!-- Logo -->
				<!-- "https://www.dropbox.com/scl/fi/f7ia1xe32z36gni5ib13k/ZzishLingo.png?rlkey=h2rzkrxor1gdyjpipwk1pklv2&st=zqhb24m5&dl=0" -->

				<img src="/zzishlingo.png" alt="ZzishLingo Logo" class="h-8 w-8 rounded-full" />
				<h1 class="text-lg font-bold">ZzishLingo</h1>
			</div>
			<nav class="space-x-4">
				<a href="/" class="text-white hover:underline">Tutor</a>
				<a href="/resources" class="text-white hover:underline">Resources</a>
				<a href="/contact" class="text-white hover:underline">Contact</a>
				<a href="/about" class="text-white hover:underline">About</a>
			</nav>
		</div>
	</header>

	<!-- ✅ Main Content Area -->
	<main class="container mx-auto flex flex-1 flex-col gap-4 px-4 py-8 md:flex-row">
		<!-- ✅ Main Content: AI Tutor -->
		<div class="flex-1 rounded-lg bg-white p-6 shadow-md">
			<slot />
		</div>

		<!-- ✅ Right Sidebar: Topics and Levels -->
		<aside
			class={`transition-all duration-300 ${
				isRightSidebarOpen ? 'w-full md:w-1/4' : 'w-16'
			} rounded-lg bg-white p-4 shadow-md`}
		>
			<div class="flex items-center justify-between">
				<h2 class="mb-4 text-lg font-semibold">Topics & Levels</h2>
				<button on:click={toggleRightSidebar} class="text-gray-600 hover:text-blue-600">
					{#if isRightSidebarOpen}
						<ChevronRight class="h-5 w-5" />
					{:else}
						<ChevronLeft class="h-5 w-5" />
					{/if}
				</button>
			</div>
			{#if isRightSidebarOpen}
				<div class="space-y-4">
					{#each topics as topic}
						<div>
							<h3 class="mb-2 text-lg font-medium">{topic.level}</h3>
							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
								{#each topic.items as item}
									<div
										class="flex items-center rounded-lg p-4 transition-all hover:shadow-md {topic.color}"
									>
										<span class="mr-3 text-2xl">{item.icon}</span>
										<span class="text-sm font-medium text-gray-700">{item.title}</span>
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</aside>
	</main>

	<!-- ✅ Footer -->
	<footer
		class="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-center text-white shadow-inner"
	>
		© {year} ZzishLingo. All rights reserved.
	</footer>
</div>
