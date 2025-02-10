import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { message, targetLanguage, topic } = await request.json();
	const apiKey = import.meta.env.VITE_HUGGING_FACE_API_KEY; // Use environment variable
	const MAX_RETRIES = 3; // Maximum number of retries
	const RETRY_DELAY = 5000; // Delay between retries in milliseconds

	console.log('You are at Translator Model');
	console.log('message', message, 'topic', topic);

	let retries = 0;

	while (retries < MAX_RETRIES) {
		try {
			const response = await fetch(
				'https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-en-fr',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${apiKey}`
					},
					body: JSON.stringify({
						inputs: message // Input text to translate
					})
				}
			);

			const data = await response.json();

			// Log the API response for debugging
			console.log('API Response:', data);

			// Check if the model is loading
			if (data.error && data.error.includes('is currently loading')) {
				retries++;
				console.log(
					`Model is loading. Retrying in ${RETRY_DELAY / 1000} seconds... (Attempt ${retries} of ${MAX_RETRIES})`
				);
				await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
				continue;
			}

			if (!response.ok) {
				throw new Error(
					`Failed to fetch translation from Hugging Face API: ${data.error || response.statusText}`
				);
			}

			const translatedText = data[0]?.translation_text;
			console.log('API Response translatedText:', data);

			if (!translatedText) {
				throw new Error('No translation found in the response.');
			}

			return json({ translatedText });
		} catch (error) {
			retries++;
			console.error(`Attempt ${retries} failed:`, error);

			if (retries === MAX_RETRIES) {
				return new Response(
					JSON.stringify({
						error: 'An error occurred while processing your request',
						details: error
					}),
					{
						status: 500,
						headers: {
							'Content-Type': 'application/json'
						}
					}
				);
			}
		}
	}
}
