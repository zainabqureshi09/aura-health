import { fetch } from '../dist/server/server.js';

export default async function handler(request, response) {
  const res = await fetch(request);
  const body = await res.text();
  
  response.status(res.status);
  for (const [key, value] of res.headers.entries()) {
    response.setHeader(key, value);
  }
  response.send(body);
}
