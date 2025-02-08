<script>
	import { Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-4xl text-center">
	<!-- Header Section -->
	<h2 class="text-3xl font-bold text-gray-900">Contact Us</h2>
	<p class="mt-2 text-gray-600">
		We’d love to hear from you! Whether you have questions, suggestions, or feedback, feel free to
		reach out.
	</p>
</div>

<!-- Contact Info Section -->
<div class="mt-8 grid gap-6 md:grid-cols-3">
	<!-- Email -->
	<div class="flex items-center rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
		<Mail class="mr-4 h-10 w-10 text-blue-500" />
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Email</h3>
			<p class="text-gray-600">
				Contact us at <strong>support@languagetutor.com</strong>
			</p>
		</div>
	</div>

	<!-- Phone -->
	<div class="flex items-center rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
		<Phone class="mr-4 h-10 w-10 text-green-500" />
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Phone</h3>
			<p class="text-gray-600">
				Call us at <strong>(123) 456-7890</strong>
			</p>
		</div>
	</div>

	<!-- Address -->
	<div class="flex items-center rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
		<MapPin class="mr-4 h-10 w-10 text-red-500" />
		<div>
			<h3 class="text-lg font-semibold text-gray-800">Address</h3>
			<p class="text-gray-600">118a East Barnet Road, Barnet, EN4 8RE, England</p>
		</div>
	</div>
</div>

<!-- Contact Form Section -->
<div class="mt-16">
	<h3 class="text-2xl font-semibold text-gray-800">Get in Touch</h3>
	<p class="mt-2 text-gray-600">
		Fill out the form below and we’ll get back to you as soon as possible.
	</p>

	<form class="mx-auto mt-8 max-w-2xl space-y-6">
		<!-- Name -->
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
			<input
				id="name"
				type="text"
				required
				class="mt-1 w-full rounded-lg border p-2 text-gray-900"
				placeholder="Your Name"
			/>
		</div>

		<!-- Email -->
		<div>
			<label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
			<input
				id="email"
				type="email"
				required
				class="mt-1 w-full rounded-lg border p-2 text-gray-900"
				placeholder="Your Email"
			/>
		</div>

		<!-- Message -->
		<div>
			<label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
			<textarea
				id="message"
				rows="4"
				required
				class="mt-1 w-full rounded-lg border p-2 text-gray-900"
				placeholder="Write your message here"
			></textarea>
		</div>

		<!-- Submit Button -->
		<div class="flex justify-center">
			<button
				type="submit"
				class="mt-4 w-1/2 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
			>
				Send Message
			</button>
		</div>
	</form>
</div>

<!-- Optional Footer Section -->
<div class="mt-16 text-center">
	<p class="text-lg text-gray-700">
		Need help? Our team is here to assist you. We aim to respond within 24 hours.
	</p>
</div>

<style>
	/* Hover effect for contact info cards */
	.hover\:shadow-xl:hover {
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
	}
</style>
