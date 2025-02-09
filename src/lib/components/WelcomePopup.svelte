<script lang="ts">
	// Replace with your logo path

	let isOpen = true;

	function closePopup() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
		<div class="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
			<img src="/zzishlang.png" alt="zzishlang Logo" class="mx-auto mb-4 h-16 w-16 rounded-full" />
			<h2 class="mb-4 text-2xl font-bold">Welcome to ZzishLang!</h2>
			<p class="mb-6 text-gray-700">
				Start your language learning journey with us. Explore, learn, and grow!
			</p>
			<button
				on:click={closePopup}
				class="rounded-lg bg-blue-500 px-6 py-2 text-white transition-all hover:bg-blue-600"
			>
				Get Started
			</button>
		</div>
	</div>
{/if}
