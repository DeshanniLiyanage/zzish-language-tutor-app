import { getLabelByValue } from '$lib/data/languages';

export async function POST({ request }) {
	const MAX_RETRIES = 3; // Maximum number of retries
	const RETRY_DELAY = 5000; // Delay between retries in milliseconds
	console.log('You are at Vocabulary Model');

	try {
		// Extract input data from the request
		const { message, targetLanguage, topic } = await request.json();
		const apiKey = import.meta.env.VITE_HUGGING_FACE_API_KEY; // Use environment variable
		const model = 'google/gemma-7b'; // to converse in different topics
		console.log('language ', targetLanguage, 'message', message, 'topic', topic);
		let language = getLabelByValue(targetLanguage);
		let prompt = `Write a list of 20  ${topic} related vocabulary words in ${language} language `;

		const url = `https://api-inference.huggingface.co/models/${model}`;
		console.log(
			'Your student is here to learn vocabulary related to',
			topic,
			'in',
			language,
			' language from you.'
		);

		let retries = 0;
		let response;
		let data;

		while (retries < MAX_RETRIES) {
			// Send the prompt to the Hugging Face API
			response = await fetch(url, {
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

			data = await response.json();

			// Log the full response for debugging
			console.log('API Response:', JSON.stringify(data, null, 2));

			// Check if the model is loading
			if (data.error && data.error.includes('is currently loading')) {
				retries++;
				console.log(
					`Model is loading. Retrying in ${RETRY_DELAY / 1000} seconds... (Attempt ${retries} of ${MAX_RETRIES})`
				);
				await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
			} else {
				break;
			}
		}

		// If the model is still loading after retries, throw an error
		if (retries === MAX_RETRIES && data.error && data.error.includes('is currently loading')) {
			throw new Error('Model is still loading after maximum retries');
		}

		// Extract the generated text from the API response
		let cleanedResponse = '';
		if (Array.isArray(data) && data.length > 0) {
			// Remove the prompt from the generated text
			cleanedResponse = data[0].generated_text.replace(prompt, '').trim();
		} else if (data.generated_text) {
			// Handle cases where the response is not an array but contains generated_text
			cleanedResponse = data.generated_text.replace(prompt, '').trim();
		} else if (data[0]?.translation_text) {
			// Handle translation response from facebook/m2m100_418M
			cleanedResponse = data[0].translation_text;
		} else {
			throw new Error('Invalid response format from Hugging Face API');
		}

		let rearrangedresponse = '';
		if (cleanedResponse) {
			rearrangedresponse = removeStepPattern(cleanedResponse);
			rearrangedresponse = formatText(rearrangedresponse);
		}
		// Return the cleaned response to the frontend
		return new Response(JSON.stringify({ reply: rearrangedresponse }), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
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

function formatText(text: string) {
	// Remove HTML tags using a regular expression
	let strippedText = text.replace(/<[^>]+>()/g, '');

	// Split the text into sentences based on punctuation
	let sentences = strippedText.split(/[.!?]/);

	// Filter out any empty strings from the array
	sentences = sentences.filter((sentence) => sentence.trim() !== '');

	// Join the sentences with a newline character
	let formattedText = sentences.join('\n');

	return formattedText;
}

function removeStepPattern(answer: string) {
	// Regex to match 'Step X/Y' format (where X and Y are numbers)
	const pattern = /\bStep \d+\/\d+\b/g;

	// Replace the pattern with an empty string
	return answer.replace(pattern, '').trim();
}

// export async function POST({ request }) {
// 	const MAX_RETRIES = 3; // Maximum number of retries
// 	const RETRY_DELAY = 5000; // Delay between retries in milliseconds

// 	try {
// 		const TRANSLATION = 'facebook/m2m100_418M'; // for translations
// 		const CHAT = 'google/gemma-7b'; // to converse in different topics
// 		const GRAMMAR = 'grammarly/coedit-large'; // to learn grammar

// 		const { message, language, topic } = await request.json();
// 		const apiKey = import.meta.env.VITE_HUGGING_FACE_API_KEY; // Use environment variable

// 		let prompt = '';
// 		let model = '';

// 		// Construct the prompt based on the topic & assign a model
// 		if (topic != null && topic === 'General') {
// 			prompt = `Translate my prompts into ${language} language and provide an English pronunciation if necessary. Prompt is ${message}.`;
// 			model = TRANSLATION;
// 		} else {
// 			prompt = `Give me some phrases related to ${topic} in ${language} language.`;
// 			model = CHAT;
// 		}

// 		const url = `https://api-inference.huggingface.co/models/${model}`;
// 		console.log('Your student is here to learn', language, 'from you.');

// 		let retries = 0;
// 		let response;
// 		let data;

// 		while (retries < MAX_RETRIES) {
// 			// Send the prompt to the Hugging Face API
// 			response = await fetch(url, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 					Authorization: `Bearer ${apiKey}`
// 				},
// 				body: JSON.stringify({
// 					inputs: prompt,
// 					parameters: {
// 						max_length: 100, // Limit response length
// 						temperature: 0.7 // Control creativity (lower = more focused)
// 					}
// 				})
// 			});

// 			console.log('Sending prompt to Hugging Face API:', prompt);

// 			data = await response.json();

// 			// Log the full response for debugging
// 			console.log('API Response:', JSON.stringify(data, null, 2));

// 			// Check if the model is loading
// 			if (data.error && data.error.includes('is currently loading')) {
// 				retries++;
// 				console.log(
// 					`Model is loading. Retrying in ${RETRY_DELAY / 1000} seconds... (Attempt ${retries} of ${MAX_RETRIES})`
// 				);
// 				await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
// 			} else {
// 				break;
// 			}
// 		}

// 		// If the model is still loading after retries, throw an error
// 		if (retries === MAX_RETRIES && data.error && data.error.includes('is currently loading')) {
// 			throw new Error('Model is still loading after maximum retries');
// 		}

// 		// Extract the generated text from the API response
// 		let cleanedResponse = '';
// 		if (Array.isArray(data) && data.length > 0) {
// 			// Remove the prompt from the generated text
// 			cleanedResponse = data[0].generated_text.replace(prompt, '').trim();
// 		} else if (data.generated_text) {
// 			// Handle cases where the response is not an array but contains generated_text
// 			cleanedResponse = data.generated_text.replace(prompt, '').trim();
// 		} else {
// 			throw new Error('Invalid response format from Hugging Face API');
// 		}

// 		// Return the cleaned response to the frontend
// 		return new Response(JSON.stringify({ reply: cleanedResponse }), {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		});
// 	} catch (error) {
// 		console.error('Error in POST function:', error);

// 		// Return an error response if something goes wrong
// 		return new Response(
// 			JSON.stringify({ error: 'An error occurred while processing your request' }),
// 			{
// 				status: 500,
// 				headers: {
// 					'Content-Type': 'application/json'
// 				}
// 			}
// 		);
// 	}
//}

// possible prompt generator
function generatePrompt(language: string, userMessage: string, level = 'beginner') {
	return `
	  You are an expert language tutor specializing in teaching ${language}. Your goal is to help me learn ${language} in a fun, engaging, and effective way. Follow these guidelines:
  
	  1. **Role**: Act as a friendly and patient language tutor. Use simple and clear language suitable for a ${level} learner.
  
	  2. **Context**: I am a student eager to learn ${language}. Teach me vocabulary, grammar, pronunciation, and cultural nuances.
  
	  3. **Interaction Style**:
		 - Respond to my questions or prompts in ${language} and provide an English translation if necessary.
		 - Correct my mistakes gently and explain the correct usage.
		 - Provide examples and practice exercises.
		 - Use a conversational tone to keep the interaction engaging.
  
	  4. **Output Format**:
		 - Always respond in ${language} first, followed by the English translation in parentheses.
		 - If I make a mistake, politely correct me and explain the rule.
		 - Include cultural tips or fun facts about ${language} when relevant.
  
	  5. **Example Interaction**:
		 - Me: How do I say "Hello" in ${language}?
		 - You: In ${language}, "Hello" is "Bonjour" (Hello). It's a common greeting used in both formal and informal situations. In France, it's also polite to say "Bonjour" when entering a shop.
  
	  Now, let's start! Teach me ${language} based on my questions or prompts.
  
	  Me: ${userMessage}
	  You:
	`;
}
