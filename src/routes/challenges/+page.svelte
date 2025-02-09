<script>
	import { Book, BookOpen, CheckCircle, Flame, MessageSquare, Mic } from 'lucide-svelte';

	// Mock data for challenges
	const dailyChallenges = [
		{
			title: 'Learn 5 New Words',
			description: 'Expand your vocabulary by learning 5 new words today.',
			progress: 40,
			icon: BookOpen
		},
		{
			title: 'Practice Grammar',
			description: 'Complete 3 grammar exercises to improve your skills.',
			progress: 60,
			icon: Book
		},
		{
			title: 'Have a Conversation',
			description: 'Practice speaking with a tutor or friend for 10 minutes.',
			progress: 80,
			icon: MessageSquare
		}
	];

	const monthlyChallenges = [
		{
			title: '30-Day Vocabulary Challenge',
			description: 'Learn 150 new words in 30 days.',
			progress: 50,
			icon: BookOpen
		},
		{
			title: 'Grammar Mastery Challenge',
			description: 'Complete 50 grammar exercises this month.',
			progress: 30,
			icon: Book
		},
		{
			title: 'Conversation Practice Challenge',
			description: 'Have 20 conversations in your target language.',
			progress: 70,
			icon: MessageSquare
		}
	];

	const streakChallenge = {
		title: 'Keeping Your Streak',
		description: 'Maintain a daily learning streak for 30 days.',
		progress: 90,
		icon: Flame
	};

	const checkYourGrammarChallenge = {
		title: 'Check Your Grammar',
		description: 'Take a grammar quiz to assess your skills.',
		progress: 0,
		icon: Book
	};

	const checkYourWordsChallenge = {
		title: 'Check Your Words',
		description: 'Test your vocabulary knowledge with a quick quiz.',
		progress: 0,
		icon: CheckCircle
	};

	const checkYourConversationChallenge = {
		title: 'Check Your Conversation',
		description: 'Evaluate your speaking skills with a mock conversation.',
		progress: 0,
		icon: Mic
	};
</script>

<!-- Challenges Page -->
<div class="mx-auto max-w-7xl px-4 py-8">
	<h1 class="mb-8 text-center text-3xl font-bold text-purple-800">Challenges</h1>

	<!-- Daily Challenges Section -->
	<section class="mb-12">
		<h2 class="mb-6 text-center text-2xl font-semibold text-purple-300">Daily Challenges</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each dailyChallenges as challenge}
				<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
					<div class="mb-4 flex items-center space-x-4">
						<div class="rounded-full bg-blue-100 p-3">
							<svelte:component this={challenge.icon} class="h-6 w-6 text-blue-500" />
						</div>
						<h3 class="text-lg font-semibold text-gray-500">{challenge.title}</h3>
					</div>
					<p class="mb-4 text-sm text-gray-600">{challenge.description}</p>
					<div class="h-2 rounded-full bg-gray-200">
						<div class="h-2 rounded-full bg-blue-500" style={`width: ${challenge.progress}%`}></div>
					</div>
					<p class="mt-2 text-xs text-gray-600">{challenge.progress}% completed</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Monthly Challenges Section -->
	<section class="mb-12">
		<h2 class="mb-6 text-center text-2xl font-semibold text-purple-300">Monthly Challenges</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each monthlyChallenges as challenge}
				<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
					<div class="mb-4 flex items-center space-x-4">
						<div class="rounded-full bg-green-100 p-3">
							<svelte:component this={challenge.icon} class="h-6 w-6 text-green-500" />
						</div>
						<h3 class="text-lg font-semibold text-gray-500">{challenge.title}</h3>
					</div>
					<p class="mb-4 text-sm text-gray-600">{challenge.description}</p>
					<div class="h-2 rounded-full bg-gray-200">
						<div
							class="h-2 rounded-full bg-green-500"
							style={`width: ${challenge.progress}%`}
						></div>
					</div>
					<p class="mt-2 text-xs text-gray-600">{challenge.progress}% completed</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Keeping Your Streak Challenge Section -->
	<section class="mb-12">
		<h2 class="mb-6 text-center text-2xl font-semibold text-purple-300">Keeping Your Streak</h2>
		<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
			<div class="mb-4 flex items-center space-x-4">
				<div class="rounded-full bg-purple-100 p-3">
					<svelte:component this={streakChallenge.icon} class="h-6 w-6 text-purple-500" />
				</div>
				<h3 class="text-lg font-semibold text-gray-500">{streakChallenge.title}</h3>
			</div>
			<p class="mb-4 text-sm text-gray-600">{streakChallenge.description}</p>
			<div class="h-2 rounded-full bg-gray-200">
				<div
					class="h-2 rounded-full bg-purple-500"
					style={`width: ${streakChallenge.progress}%`}
				></div>
			</div>
			<p class="mt-2 text-xs text-gray-600">{streakChallenge.progress}% completed</p>
		</div>
	</section>

	<!-- Check Your Grammar Section -->
	<section class="mb-12">
		<h2 class="mb-6 text-center text-2xl font-semibold text-purple-300">Check Your Grammar</h2>
		<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
			<div class="mb-4 flex items-center space-x-4">
				<div class="rounded-full bg-blue-100 p-3">
					<svelte:component this={checkYourGrammarChallenge.icon} class="h-6 w-6 text-blue-500" />
				</div>
				<h3 class="text-lg font-semibold text-gray-500">{checkYourGrammarChallenge.title}</h3>
			</div>
			<p class="mb-4 text-sm text-gray-600">{checkYourGrammarChallenge.description}</p>
			<button class="rounded-lg bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600">
				Start Quiz
			</button>
		</div>
	</section>

	<!-- Check Your Words Section -->
	<section class="mb-12">
		<h2 class="mb-6 text-center text-2xl font-semibold text-purple-300">Check Your Words</h2>
		<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
			<div class="mb-4 flex items-center space-x-4">
				<div class="rounded-full bg-green-100 p-3">
					<svelte:component this={checkYourWordsChallenge.icon} class="h-6 w-6 text-green-500" />
				</div>
				<h3 class="text-lg font-semibold text-gray-500">{checkYourWordsChallenge.title}</h3>
			</div>
			<p class="mb-4 text-sm text-gray-600">{checkYourWordsChallenge.description}</p>
			<button
				class="rounded-lg bg-green-500 px-4 py-2 text-white transition-all hover:bg-green-600"
			>
				Start Quiz
			</button>
		</div>
	</section>

	<!-- Check Your Conversation Section -->
	<section class="mb-12">
		<h2 class="mb-6 text-center text-2xl font-semibold text-purple-300">Check Your Conversation</h2>
		<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
			<div class="mb-4 flex items-center space-x-4">
				<div class="rounded-full bg-purple-100 p-3">
					<svelte:component
						this={checkYourConversationChallenge.icon}
						class="h-6 w-6 text-purple-500"
					/>
				</div>
				<h3 class="text-lg font-semibold text-gray-500">{checkYourConversationChallenge.title}</h3>
			</div>
			<p class="mb-4 text-sm text-gray-600">{checkYourConversationChallenge.description}</p>
			<button
				class="rounded-lg bg-purple-500 px-4 py-2 text-white transition-all hover:bg-purple-600"
			>
				Start Conversation
			</button>
		</div>
	</section>
</div>
