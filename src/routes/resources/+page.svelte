<script>
	import { Book, Globe, GraduationCap, PlayCircle, Smartphone, Users } from 'lucide-svelte';

	const resources = [
		{
			title: 'Books',
			icon: Book,
			description:
				'Explore ZZishLingo language learning books to dive deeper into language concepts.',
			link: '#',
			color: 'bg-purple-500'
		},
		{
			title: 'Websites',
			icon: Globe,
			description: 'Visit the ZZishLingo website for resources, tips, and more.',
			link: '#',
			color: 'bg-blue-500'
		},
		{
			title: 'Apps',
			icon: Smartphone,
			description: 'Download the ZZishLingo app for an interactive learning experience on the go',
			link: '#',
			color: 'bg-green-500'
		},
		{
			title: 'Courses',
			icon: GraduationCap,
			description:
				'Take advantage of ZZishLingo guided courses designed to help you progress quickly.',
			link: '#',
			color: 'bg-yellow-500'
		},
		{
			title: 'Videos & Podcasts',
			icon: PlayCircle,
			description: 'Don’t forget to check out our YouTube channel for engaging lessons and tips.s',
			link: '#',
			color: 'bg-red-500'
		},
		{
			title: 'Language Exchange',
			icon: Users,
			description: 'Get personalized support with one-on-one sessions tailored to your needs.',
			link: '#',
			color: 'bg-indigo-500'
		}
	];
</script>

<div class="flex min-h-screen flex-col items-center bg-gray-100 p-6">
	<!-- Header -->
	<div class="mb-8 max-w-3xl text-center">
		<h2 class="text-3xl font-bold text-gray-900">Language Learning Resources</h2>
		<p class="mt-2 text-gray-600">
			Explore top resources to enhance your language skills. From books to apps, find the perfect
			tools to help you succeed.
		</p>
	</div>

	<!-- Resources Grid -->
	<div class="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
		{#each resources as resource}
			<div
				class="flex transform flex-col items-center rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105"
			>
				<!-- Icon -->
				<div class={`rounded-full p-3 text-white ${resource.color}`}>
					<svelte:component this={resource.icon} class="h-8 w-8" />
				</div>

				<!-- Title -->
				<h3 class="mt-4 text-lg font-semibold text-gray-800">{resource.title}</h3>

				<!-- Description -->
				<p class="mt-2 text-center text-sm text-gray-600">{resource.description}</p>

				<!-- Action Button -->
				<a
					href={resource.link}
					class="mt-4 inline-block rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
				>
					Explore {resource.title}
				</a>
			</div>
		{/each}
	</div>
</div>
