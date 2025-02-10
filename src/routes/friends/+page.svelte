<!-- ✅ Connect with Friends Page -->
<section class="min-h-screen bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<!-- Page Header -->
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-semibold text-purple-800">Connect with Friends</h2>
			<p class="mt-2 text-lg text-gray-600">
				Expand your language learning experience by connecting with friends. Share progress, tips,
				and support each other.
			</p>
		</div>

		<!-- Search Bar -->
		<div class="mb-8 flex justify-center">
			<input
				type="text"
				id="search-friends"
				class="w-full max-w-md rounded-lg border-2 border-gray-300 p-3 text-lg focus:border-purple-500 focus:outline-none"
				placeholder="Search for friends by name or username"
			/>
		</div>

		<!-- Friends You Might Know Section -->
		<div class="mb-8">
			<h3 class="text-2xl font-semibold text-purple-500">Friends You Might Know</h3>
			<p class="mb-4 text-gray-600">Based on your interests and language preferences</p>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				<!-- Friend Card 1 -->
				<div
					class="flex items-center justify-between rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
				>
					<div class="flex items-center space-x-4">
						<img
							src="https://randomuser.me/api/portraits/men/10.jpg"
							alt="Friend Avatar"
							class="h-14 w-14 rounded-full"
						/>
						<div>
							<h4 class="text-xl font-semibold text-gray-800">John Doe</h4>
							<p class="text-sm text-gray-600">Japanese, Spanish</p>
							<p class="text-sm text-gray-600">🔥 15-day streak | 🏆 Gold League | 📊 Rank #42</p>
						</div>
					</div>
					<button class="rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
						>Add Friend</button
					>
				</div>

				<!-- Friend Card 2 -->
				<div
					class="flex items-center justify-between rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
				>
					<div class="flex items-center space-x-4">
						<img
							src="https://randomuser.me/api/portraits/women/12.jpg"
							alt="Friend Avatar"
							class="h-14 w-14 rounded-full"
						/>
						<div>
							<h4 class="text-xl font-semibold text-gray-800">Jane Smith</h4>
							<p class="text-sm text-gray-600">French, German</p>
							<p class="text-sm text-gray-600">
								🔥 22-day streak | 🏆 Platinum League | 📊 Rank #15
							</p>
						</div>
					</div>
					<button class="rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
						>Add Friend</button
					>
				</div>
			</div>
		</div>

		<!-- Your Friends Section -->
		<div>
			<h3 class="text-2xl font-semibold text-purple-500">Your Friends</h3>
			<p class="mb-4 text-gray-600">These are your current friends on ZzishLang</p>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				<!-- Friend Card 1 -->
				<div
					class="flex items-center justify-between rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
				>
					<div class="flex items-center space-x-4">
						<img
							src="https://randomuser.me/api/portraits/men/14.jpg"
							alt="Friend Avatar"
							class="h-14 w-14 rounded-full"
						/>
						<div>
							<h4 class="text-xl font-semibold text-gray-800">Michael Lee</h4>
							<p class="text-sm text-gray-600">English, Portuguese</p>
							<p class="text-sm text-gray-600">🔥 30-day streak | 🏆 Diamond League | 📊 Rank #5</p>
						</div>
					</div>
					<button class="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
						>Remove Friend</button
					>
				</div>

				<!-- Friend Card 2 -->
				<div
					class="flex items-center justify-between rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
				>
					<div class="flex items-center space-x-4">
						<img
							src="https://randomuser.me/api/portraits/women/5.jpg"
							alt="Friend Avatar"
							class="h-14 w-14 rounded-full"
						/>
						<div>
							<h4 class="text-xl font-semibold text-gray-800">Emily Nguyen</h4>
							<p class="text-sm text-gray-600">Vietnamese, Italian</p>
							<p class="text-sm text-gray-600">🔥 18-day streak | 🏆 Silver League | 📊 Rank #63</p>
						</div>
					</div>
					<button class="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
						>Remove Friend</button
					>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer Section -->
<footer class="rounded-lg bg-gradient-to-r from-stone-600 to-slate-600 py-6 text-center text-white">
	<p class="text-sm">© 2025 ZzishLang. All rights reserved.</p>
</footer>
