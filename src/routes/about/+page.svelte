<script>
	import { Brain, Languages, Target } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-3xl text-center">
	<h2 class="text-3xl font-bold text-gray-900">About Language Tutor</h2>
	<p class="mt-2 text-gray-600">
		Language Tutor is an interactive platform designed to help learners master new languages through
		engaging lessons, real-world conversations, and AI-powered feedback.
	</p>
</div>

<!-- ✅ Features Section -->
<div class="mt-8 grid gap-6 md:grid-cols-3">
	<!-- Feature 1 -->
	<div class="flex items-center rounded-lg bg-white p-6 shadow-md">
		<Languages class="mr-4 h-10 w-10 text-blue-500" />
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Multiple Languages</h3>
			<p class="text-gray-600">
				Learn from a wide range of languages, tailored to different proficiency levels.
			</p>
		</div>
	</div>

	<!-- Feature 2 -->
	<div class="flex items-center rounded-lg bg-white p-6 shadow-md">
		<Brain class="mr-4 h-10 w-10 text-green-500" />
		<div>
			<h3 class="text-lg font-semibold text-gray-800">AI-Powered Learning</h3>
			<p class="text-gray-600">
				Receive real-time feedback and personalized lessons to improve faster.
			</p>
		</div>
	</div>

	<!-- Feature 3 -->
	<div class="flex items-center rounded-lg bg-white p-6 shadow-md">
		<Target class="mr-4 h-10 w-10 text-red-500" />
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Practice with Goals</h3>
			<p class="text-gray-600">
				Set daily goals and track your progress to stay motivated on your journey.
			</p>
		</div>
	</div>
</div>
