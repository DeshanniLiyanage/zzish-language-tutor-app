<script lang="ts">
	import WelcomePopup from '$lib/components/WelcomePopup.svelte';
	import { Award, BookOpen, CircleX, Home, Info, Swords, Users } from 'lucide-svelte';
	import '../app.css';

	let year = new Date().getFullYear();
	let isToastOpen = false; // Controls the visibility of the toast
	// User details
	const userName = 'Sheldon Cooper'; // Replace with dynamic user data
	const userImage = 'https://randomuser.me/api/portraits/men/60.jpg'; // Replace with dynamic user image
	const userStreak = 5; // Replace with dynamic streak data
	const userRank = 125; // Replace with dynamic rank data
	const earnedGems = 1000; // Replace with dynamic rank data
	const userLeague = 'Explorer'; // Replace with dynamic rank data Explorer, Scholar, Linguist, Polyglot, Master

	// Toggle Toast
	function toggleToast() {
		isToastOpen = !isToastOpen;
	}

	function opacity(arg0: HTMLDivElement): __sveltets_2_SvelteTransitionReturnType {
		throw new Error('Function not implemented.');
	}
</script>

<!-- Welcome Popup -->
<WelcomePopup />

<div class="flex flex-col bg-gradient-to-r from-purple-300 to-gray-300 text-gray-900">
	<!-- Navbar -->
	<header class="w-full bg-gray-50 px-4 py-4 shadow-md">
		<div
			class="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
		>
			<!-- Left Corner: App Name -->
			<div class="flex items-center space-x-4">
				<a href="/about" class="btn">
					<h1
						class="animate-word text-2xl font-bold text-purple-900 italic hover:text-purple-600 md:text-4xl"
					>
						ZzishLang
					</h1>
				</a>
			</div>

			<!-- Center: Navigation Icons with Tooltips -->
			<div class="flex flex-wrap justify-center space-x-4 md:space-x-8">
				<!-- Home Icon -->
				<div class="group relative">
					<a
						href="/"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 md:h-16 md:w-16"
					>
						<Home size={48} class="text-purple-500" />
					</a>
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
						>Tutor</span
					>
				</div>

				<!-- Users Icon -->
				<div class="group relative">
					<a
						href="/friends"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 md:h-16 md:w-16"
					>
						<Users size={48} class="text-purple-500" />
					</a>
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
						>Friends</span
					>
				</div>

				<!-- Info Icon -->
				<div class="group relative">
					<a
						href="/challenges"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 md:h-16 md:w-16"
					>
						<Swords size={48} class="text-purple-500" />
					</a>
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
						>Challenges</span
					>
				</div>

				<!-- Resources Icon -->
				<div class="group relative">
					<a
						href="/resources"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 md:h-16 md:w-16"
					>
						<BookOpen size={48} class="text-purple-500" />
					</a>
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
						>Resources</span
					>
				</div>

				<!-- Contact Icon -->
				<div class="group relative">
					<a
						href="/about"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 md:h-16 md:w-16"
					>
						<Info size={48} class="text-purple-500" />
					</a>
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
						>About</span
					>
				</div>

				<!-- Award Icon with Toggle Popup -->
				<div class="group relative">
					<button
						on:click={toggleToast}
						class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 md:h-16 md:w-16"
					>
						<Award size={48} class="text-purple-500" />
					</button>
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
						>{isToastOpen ? 'Close Progress' : 'View Progress'}</span
					>
				</div>
			</div>

			<!-- Right Corner: User Icon -->
			<div class="group relative flex items-center space-x-4">
				<!-- User Image -->
				<button on:click={toggleToast} class="group relative focus:outline-none">
					<!-- User Image with hover scale effect and transition -->
					<!-- svelte-ignore a11y_img_redundant_alt -->
					<img
						src={userImage}
						alt="User Image"
						class="h-10 w-10 transform rounded-full border-2 border-purple-500 transition-transform hover:scale-105 md:h-12 md:w-12"
					/>
					<!-- Popup label (like tooltip) -->
					<span
						class="absolute top-14 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:top-18"
					>
						View Profile
					</span>
				</button>
				<!-- User Name -->
				<h6
					class="h6 truncate text-purple-900 transition-all duration-300 ease-in-out group-hover:text-purple-600"
				>
					<p>
						<span class="block text-3xl font-bold">Hello!</span>
						<span class="block text-xl">{userName}!</span>
					</p>
					<!-- Hello! \n {userName}! -->
				</h6>
			</div>
		</div>
	</header>

	<!-- Main Content Area -->
	<main class="container mx-auto flex flex-1 flex-col items-center justify-between gap-4 px-4 py-6">
		<!-- Main Content: AI Tutor -->
		<div class="w-full rounded-lg bg-white p-6 shadow-md md:w-3/4">
			<slot />
		</div>
	</main>

	<!-- Toast (Bottom Bar) -->
	<div
		class="fixed inset-0 flex items-center justify-center p-6"
		class:opacity-0={!isToastOpen}
		class:opacity-100={isToastOpen}
		class:pointer-events-none={!isToastOpen}
		transition:opacity
	>
		<div
			class="w-full max-w-6xl rounded-lg bg-purple-800 p-4 text-center text-white shadow-inner transition-transform duration-300 ease-in-out md:p-8"
			class:translate-y-0={isToastOpen}
			class:translate-y-full={!isToastOpen}
		>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<!-- 1. Gems -->
				<div
					class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-4 md:p-6"
				>
					<p class="text-3xl font-semibold text-purple-600 md:text-5xl">
						{earnedGems} <span class="text-4xl md:text-6xl">💎</span>
					</p>
					<p class="text-xs text-gray-500">Hurry up! few more to go.</p>
				</div>

				<!-- 2. Streak -->
				<div
					class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-4 md:p-6"
				>
					<p class="text-3xl font-semibold text-purple-600 md:text-5xl">
						{userStreak} <span class="text-4xl md:text-6xl">🔥</span>
					</p>
					<p class="text-xs text-gray-500">keep up your streak!</p>
				</div>

				<!-- 3. Rank -->
				<div
					class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-4 md:p-6"
				>
					<p class="text-3xl font-semibold text-purple-600 md:text-5xl">{userRank}</p>
					<p class="text-xs text-gray-500">Your rank among other learners!</p>
				</div>

				<!-- 4. League -->
				<div
					class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-4 md:p-6"
				>
					<p class="text-2xl font-semibold text-purple-600 md:text-4xl">
						{userLeague} <span class="text-3xl md:text-5xl">🏆</span>
					</p>
					<p class="text-xs text-gray-500">You are competing among friends.</p>
				</div>
			</div>

			<!-- Close Button Outside the Tiles -->
			<div class="absolute top-0 right-0 p-2 md:p-4">
				<button
					on:click={toggleToast}
					class="text-xl text-red-500 transition-all hover:text-red-600"
				>
					<CircleX class="text-purple-600" />
				</button>
			</div>
		</div>
	</div>
</div>
<!-- Image Button Positioned at the Bottom Right -->
<div class="fixed right-8 bottom-8 z-50 lg:right-12 lg:bottom-12">
	<button on:click={toggleToast} class="relative">
		<img
			src="zzishlang.jpg"
			alt="Open Toast"
			class="h-16 w-16 cursor-pointer rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 sm:h-20 sm:w-20"
		/>
	</button>
</div>

<style>
	.translate-y-full {
		transform: translateY(100%);
	}
	.translate-y-0 {
		transform: translateY(0);
	}
</style>
