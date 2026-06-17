import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { turnstileToken, ...contactData } = body;

  // En desarrollo usar la secret key de prueba de Cloudflare
  const secretKey = import.meta.env.DEV
    ? '1x0000000000000000000000000000000AA'
    : import.meta.env.TURNSTILE_SECRET_KEY;

  // Verificar Turnstile
  const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: secretKey,
      response: turnstileToken,
    }),
  });
  const { success } = await verification.json();
  if (!success) {
    return new Response(JSON.stringify({ error: 'captcha_failed' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const url = `${import.meta.env.PUBLIC_SGA_HOST}/api/v1/public/contact`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': import.meta.env.SGA_API_KEY,
    },
    body: JSON.stringify(contactData),
  });

  const data = await res.json().catch(() => ({}));

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
