import type { MetadataRoute } from 'next';

const FALLBACK_SITE_URL = 'https://reway.teeldinho.co.za';

const DISALLOWED_QUERY_ROUTES = ['/search', '/filter'] as const;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [...DISALLOWED_QUERY_ROUTES],
      },
    ],
    host: siteUrl,
  };
}
