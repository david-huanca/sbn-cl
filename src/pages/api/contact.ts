import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const res = await fetch(import.meta.env.PUBLIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': import.meta.env.PUBLIC_API_KEY,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
