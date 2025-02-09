<script>
	import { Brain, Languages, Mail, MapPin, Phone, Target } from 'lucide-svelte';
</script>

<!-- Main Container -->
<div class="mx-auto max-w-6xl px-6 py-16 md:px-12">
	<!-- Header Section -->
	<div class="text-center">
		<h2 class="text-4xl font-bold text-purple-800">Welcome to ZzishLang - Language Tutor</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
			An interactive platform to help you master new languages through engaging lessons, real-world
			conversations, and AI-powered feedback. Begin your journey today!
		</p>
	</div>

	<!-- Features Section -->
	<div class="mt-16 grid gap-8 md:grid-cols-3">
		<div
			class="flex items-center rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
		>
			<Languages class="mr-6 h-14 w-14 text-blue-500" />
			<div>
				<h3 class="text-xl font-semibold text-gray-400">Multiple Languages</h3>
				<p class="mt-2 text-gray-600">
					Learn from a wide range of languages tailored to different proficiency levels.
				</p>
			</div>
		</div>
		<div
			class="flex items-center rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
		>
			<Brain class="mr-6 h-14 w-14 text-green-500" />
			<div>
				<h3 class="text-xl font-semibold text-gray-400">AI-Powered Learning</h3>
				<p class="mt-2 text-gray-600">
					Receive real-time feedback and personalized lessons that adapt to your learning style.
				</p>
			</div>
		</div>
		<div
			class="flex items-center rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
		>
			<Target class="mr-6 h-14 w-14 text-red-500" />
			<div>
				<h3 class="text-xl font-semibold text-gray-400">Practice with Goals</h3>
				<p class="mt-2 text-gray-600">
					Set daily goals and track your progress to stay motivated on your learning journey.
				</p>
			</div>
		</div>
	</div>

	<!-- Contact Section -->
	<div class="mt-20 text-center">
		<h2 class="text-3xl font-bold text-purple-800">Contact Us</h2>
		<p class="mx-auto mt-4 max-w-xl text-lg text-gray-600">
			We’d love to hear from you! Reach out with questions, suggestions, or feedback.
		</p>
	</div>

	<!-- Contact Info -->
	<div class="mt-12 grid gap-8 md:grid-cols-3">
		<div
			class="flex items-center rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
		>
			<Mail class="mr-6 h-14 w-14 text-blue-500" />
			<div>
				<h3 class="text-xl font-semibold text-gray-500">Email</h3>
				<p class="mt-2 text-gray-600">support@languagetutor.com</p>
			</div>
		</div>
		<div
			class="flex items-center rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
		>
			<Phone class="mr-6 h-14 w-14 text-green-500" />
			<div>
				<h3 class="text-xl font-semibold text-gray-500">Phone</h3>
				<p class="mt-2 text-gray-600">(123) 456-7890</p>
			</div>
		</div>
		<div
			class="flex items-center rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
		>
			<MapPin class="mr-6 h-14 w-14 text-red-500" />
			<div>
				<h3 class="text-xl font-semibold text-gray-500">Address</h3>
				<p class="mt-2 text-gray-600">118a East Barnet Road, Barnet, EN4 8RE, England</p>
			</div>
		</div>
	</div>

	<!-- Contact Form -->
	<div class="mx-auto mt-16 max-w-2xl">
		<h3 class="text-2xl font-semibold text-gray-500">Get in Touch</h3>
		<form class="mt-8 space-y-6">
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
				<input
					id="name"
					type="text"
					required
					class="mt-1 w-full rounded-lg border p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-600"
					placeholder="Your Name"
				/>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
				<input
					id="email"
					type="email"
					required
					class="mt-1 w-full rounded-lg border p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-600"
					placeholder="Your Email"
				/>
			</div>
			<div>
				<label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
				<textarea
					id="message"
					rows="4"
					required
					class="mt-1 w-full rounded-lg border p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-600"
					placeholder="Write your message here"
				></textarea>
			</div>
			<div class="flex justify-center">
				<button
					type="submit"
					class="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-600"
					>Send Message</button
				>
			</div>
		</form>
	</div>
</div>

<style>
	.hover\:shadow-xl:hover {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}
	.focus\:ring-2:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.6);
	}
</style>
