import server from '../dist/server/server.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  try {
    console.log('Request URL:', request.url);
    if (!server || typeof server.fetch !== 'function') {
      throw new Error('Server fetch function not found');
    }
    const response = await server.fetch(request, {}, {});
    return response;
  } catch (error) {
    console.error('SSR Error:', error);
    return new Response(
      JSON.stringify({
        error: 'SSR_FETCH_FAILED',
        message: error.message,
        stack: error.stack,
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
