import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const runtime = (locals as any).runtime;

  const debug = {
    hasRuntime: !!runtime,
    hasEnv: !!runtime?.env,
    envKeys: runtime?.env ? Object.keys(runtime.env) : [],
    hasEMAIL: !!runtime?.env?.EMAIL,
    emailBindingType: runtime?.env?.EMAIL ? typeof runtime.env.EMAIL : 'undefined',
    emailBindingKeys: runtime?.env?.EMAIL ? Object.keys(runtime.env.EMAIL) : [],
  };

  return new Response(JSON.stringify(debug, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
