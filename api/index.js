import server from '../dist/server/server.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  try {
    return await server.fetch(request);
  } catch (error) {
    console.error('SSR Fetch Error:', error);
    return new Response(error.message || 'Internal Server Error', { status: 500 });
  }
}
