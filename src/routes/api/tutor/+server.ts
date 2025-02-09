export async function POST({ request }) {
	try {
		const { message, language, topic } = await request.json();
		let prompt = '';

		// Construct the prompt based on the topic
		if (topic != null && topic === 'General') {
			prompt = `Translate my prompts into ${language} language and provide an English pronunciation if necessary. Prompt is ${message}.`;
		} else {
			prompt = `Give me some phrases related to ${topic} in ${language} language.`;
		}

		const apiKey = import.meta.env.VITE_HUGGING_FACE_API_KEY; // Use environment variable
		const model = 'EleutherAI/gpt-neo-2.7B'; // Model to use
		const url = `https://api-inference.huggingface.co/models/${model}`;

		console.log('Your student is here to learn', language, 'from you.');

		// Send the prompt to the Hugging Face API
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
					temperature: 0.5 // Control creativity (lower = more focused)
				}
			})
		});

		console.log('Sending prompt to Hugging Face API:', prompt);

		const data = await response.json();

		// Log the full response for debugging
		console.log('API Response:', JSON.stringify(data, null, 2));

		// Extract the generated text from the API response
		let cleanedResponse = '';
		if (Array.isArray(data) && data.length > 0) {
			// Remove the prompt from the generated text
			cleanedResponse = data[0].generated_text.replace(prompt, '').trim();
		} else {
			throw new Error('Invalid response format from Hugging Face API');
		}

		// Return the cleaned response to the frontend
		return new Response(JSON.stringify({ reply: cleanedResponse }), {
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
