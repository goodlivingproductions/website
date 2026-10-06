import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('The site URL must be configured to generate robots.txt.');
  const sitemapUrl = new URL('sitemap-index.xml', site);
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`;
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
