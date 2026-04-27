import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const url = `${import.meta.env.PUBLIC_SGA_HOST}/api/v1/public/courses-schedule`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': import.meta.env.SGA_API_KEY,
    },
  });

  const data = await res.json().catch(() => ({}));

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
