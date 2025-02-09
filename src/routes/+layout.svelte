<script lang="ts">
	import WelcomePopup from '$lib/components/WelcomePopup.svelte';
	import { Award, BookOpen, Home, Info, MessageCircleX, Swords, Users } from 'lucide-svelte';
	import '../app.css';
	let year = new Date().getFullYear();
	let isToastOpen = true; // Controls the visibility of the toast
	// User details
	const userName = 'John Doe'; // Replace with dynamic user data
	const userImage = 'https://randomuser.me/api/portraits/women/50.jpg'; // Replace with dynamic user image
	const userStreak = 5; // Replace with dynamic streak data
	const userLevel = 'Beginner'; // Replace with dynamic level data
	const userRank = 125; // Replace with dynamic rank data
	const earnedGems = 1000; // Replace with dynamic rank data
	const userLeague = 'Explorer'; // Replace with dynamic rank data Explorer, Scholar, Linguist, Polyglot, Master

	// Topics and Levels
	let topics = [
		{
			level: 'Beginner',
			color: 'bg-blue-100',
			items: [
				{ title: 'Greetings', icon: '👋' },
				{ title: 'Numbers', icon: '🔢' },
				{ title: 'Basic Phrases', icon: '💬' },
				{ title: 'Colors', icon: '💬' }
			]
		},
		{
			level: 'Intermediate',
			color: 'bg-purple-100',
			items: [
				{ title: 'Travel Phrases', icon: '✈️' },
				{ title: 'Food & Dining', icon: '🍽️' },
				{ title: 'Daily Conversations', icon: '🗣️' },
				{ title: 'Hobby', icon: '🍽️' },
				{ title: 'Reatil Shop', icon: '🗣️' }
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

	// Toggle Toast
	function toggleToast() {
		isToastOpen = !isToastOpen;
	}
</script>

<!-- Welcome Popup -->
<WelcomePopup />

<div
	class="flex h-screen min-h-screen flex-col bg-[url('/background1.jpg')] bg-repeat text-gray-900"
>
	<!-- ✅ Navbar -->
	<header class="w-full bg-gray-50 px-4 py-4 shadow-md">
		<div class="container mx-auto flex items-center justify-between">
			<!-- Left Corner: App Name -->
			<div class="flex items-center space-x-4">
				<button on:click={toggleToast} class="focus:outline-none">
					<h1 class="animate-word text-4xl font-bold text-gray-800 italic hover:text-purple-600">
						ZzishLingo
					</h1>
				</button>
			</div>

			<!-- Center: Navigation Icons with Tooltips -->
			<div class="container mx-auto flex items-center justify-center space-x-8">
				<!-- Home Icon -->
				<div class="group relative">
					<a
						href="/"
						class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300"
					>
						<Home size={36} class="text-purple-500" />
					</a>
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
						>Tutor</span
					>
				</div>

				<!-- Users Icon -->
				<div class="group relative">
					<a
						href="/friends"
						class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300"
					>
						<Users size={36} class="text-purple-500" />
					</a>
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
						>Friends</span
					>
				</div>

				<!-- Info Icon -->
				<div class="group relative">
					<a
						href="/challenges"
						class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300"
					>
						<Swords size={36} class="text-purple-500" />
					</a>
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
						>Challenges</span
					>
				</div>

				<!-- Resources Icon -->
				<div class="group relative">
					<a
						href="/resources"
						class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300"
					>
						<BookOpen size={36} class="text-purple-500" />
					</a>
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
						>Resources</span
					>
				</div>

				<!-- Contact Icon -->
				<div class="group relative">
					<a
						href="/about"
						class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300"
					>
						<Info size={36} class="text-purple-500" />
					</a>
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
						>About</span
					>
				</div>

				<!-- Award Icon with Toggle Popup -->
				<div class="group relative">
					<button
						on:click={toggleToast}
						class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300"
					>
						<Award size={36} class="text-purple-500" />
					</button>
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
						>{isToastOpen ? 'Close Progress' : 'View Progress'}</span
					>
				</div>
			</div>

			<!-- Right Corner: User Icon -->
			<div class="group relative flex items-center space-x-4">
				<!-- User Name -->
				<h6
					class="h6 w-32 truncate text-gray-800 transition-all duration-300 ease-in-out group-hover:text-purple-600"
				>
					{userName}!
				</h6>

				<!-- User Image -->
				<button on:click={toggleToast} class="group relative focus:outline-none">
					<!-- User Image with hover scale effect and transition -->
					<!-- svelte-ignore a11y_img_redundant_alt -->
					<img
						src={userImage}
						alt="User Image"
						class="h-12 w-16 transform rounded-full border-2 border-blue-500 transition-transform hover:scale-105"
					/>
					<!-- Popup label (like tooltip) -->
					<span
						class="absolute top-18 left-1/2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
					>
						View Profile
					</span>
				</button>
			</div>
		</div>
	</header>

	<!-- ✅ Main Content Area -->
	<main class="container mx-auto flex flex-1 flex-col items-center justify-between gap-4 px-4 py-6">
		<!-- ✅ Main Content: AI Tutor -->
		<div class="flex-1 rounded-lg bg-white p-6 shadow-md">
			<slot />
		</div>
	</main>

	<!-- ✅ Toast (Bottom Bar) -->
	<div
		class="fixed right-0 bottom-0 left-0 bg-gradient-to-r from-purple-200 to-white p-8 text-center text-white shadow-inner transition-transform duration-300 ease-in-out"
		class:translate-y-0={isToastOpen}
		class:translate-y-full={!isToastOpen}
	>
		<div class="grid grid-cols-4 gap-4">
			<!-- 1. Logo and the Company Name -->
			<!-- <div
				class="flex items-center space-x-4 rounded-lg bg-gradient-to-r from-purple-200 to-white p-6"
			>
				<img
					src="/zzishlingo.png"
					alt="App Logo"
					class="h-28 w-28 transform rounded-lg transition-transform hover:scale-105"
				/>
				<div>
					<h1 class="text-3xl font-bold text-gray-800">ZzishLingo</h1>
				</div>
			</div> -->

			<!-- 1. Gems -->
			<div
				class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-6"
			>
				<p class="text-5xl font-semibold text-purple-600">
					{earnedGems} <span class="text-6xl">💎</span>
				</p>
				<p class="text-xs text-gray-500">Hurry up! few more to go.</p>
			</div>

			<!-- 2. Streak -->
			<div
				class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-6"
			>
				<p class="text-5xl font-semibold text-purple-600">
					{userStreak} <span class="text-6xl">🔥</span>
				</p>
				<p class="text-xs text-gray-500">keep up your streak!</p>
			</div>

			<!-- 3. Rank -->
			<div
				class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-6"
			>
				<p class="text-5xl font-semibold text-purple-600">{userRank}</p>
				<!-- <p class="text-3xl font-semibold text-gray-600">{userLevel}</p> -->
				<p class="text-xs text-gray-500">Your rank among other learners!</p>
			</div>

			<!-- 4. Hello User, Message, and Close Icon -->
			<!-- <div
				class="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gradient-to-r from-purple-200 to-white p-6"
			>
				<div class="flex items-center space-x-4">
					<img
						src={userImage}
						alt="User Image"
						class="h-16 w-16 transform rounded-full border-2 border-blue-500 transition-transform hover:scale-105"
					/>
					<div>
						<h1 class="text-2xl font-semibold text-gray-800">Hello, {userName}!</h1>
						<p class="text-sm text-gray-500">Keep up the great work!</p>
					</div>
				</div>
			</div> -->

			<!-- 4. League -->
			<div
				class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-200 to-white p-6"
			>
				<p class="text-4xl font-semibold text-purple-600">
					{userLeague} <span class="text-6xl">🏆</span>
				</p>
				<p class="text-xs text-gray-500">You are competing among friends.</p>
			</div>
		</div>

		<!-- Close Button Outside the Tiles -->
		<div class="absolute top-0 right-0 p-4">
			<button on:click={toggleToast} class="text-xl text-red-500 transition-all hover:text-red-600">
				<MessageCircleX />
			</button>
		</div>
	</div>
</div>

<style>
	.translate-y-full {
		transform: translateY(100%);
	}
	.translate-y-0 {
		transform: translateY(0);
	}
</style>
