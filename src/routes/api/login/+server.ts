// import { setSession } from '$lib/session';
// import { type RequestHandler } from '@sveltejs/kit';

// export const POST: RequestHandler = async ({ request }) => {
// 	try {
// 		const { username, password } = await request.json();
// 		console.log('Your student is here to learn this', password, 'from you.');
// 		// Simple hardcoded authentication (replace with a real auth system)
// 		if (username === 'user' && password === 'password') {
// 			return new Response(null, {
// 				status: 302,
// 				headers: {
// 					'Set-Cookie': setSession(username),
// 					Location: '/', // Redirect to the main page
// 					'Cache-Control': 'no-store' // Prevent caching
// 				}
// 			});
// 		} else {
// 			return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
// 				status: 401,
// 				headers: {
// 					'Content-Type': 'application/json'
// 				}
// 			});
// 		}
// 	} catch (error) {
// 		console.error('Login API error:', error);
// 		return new Response(JSON.stringify({ error: 'An error occurred. Please try again.' }), {
// 			status: 500,
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		});
// 	}
// };
