export async function POST({ request }) {
	try {
		const { message, language } = await request.json();

		//	const prompt = `Translate the following text to ${language}. ${message}`;
		const prompt = `Translate my prompts into ${language} and provide an English pronounciation if necessary. Prompt is ${message}`;

		const apiKey = import.meta.env.VITE_HUGGING_FACE_API_KEY; // Use environment variable
		const model = 'EleutherAI/gpt-neo-2.7B'; // Try switching to 'gpt2' if this fails or 'EleutherAI/gpt-neo-2.7B' or 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5'
		const url = `https://api-inference.huggingface.co/models/${model}`;

		console.log('Your student is here to learn', language, 'from you.');

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				inputs: prompt,
				parameters: {
					max_length: 100, // Limit response length
					temperature: 0.7 // Control creativity (lower = more focused)
				}
			})
		});

		console.log('Sending prompt to Hugging Face API:', prompt);

		const data = await response.json();

		// Log the full response for debugging
		console.log('API Response:', JSON.stringify(data, null, 2));

		// Hugging Face returns an array of responses
		if (Array.isArray(data) && data.length > 0) {
			// Return a valid Response object
			return new Response(JSON.stringify({ reply: data[0].generated_text }), {
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} else {
			// Return an error response if the API response is invalid
			return new Response(
				JSON.stringify({ error: 'Invalid response format from Hugging Face API' }),
				{
					status: 500,
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
		}
	} catch (error) {
		console.error('Error in POST function:', error);

		// Return an error response if something goes wrong
		return new Response(
			JSON.stringify({ error: 'An error occurred while processing your request' }),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
}
