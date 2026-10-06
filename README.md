# Good Living Productions website

A statically generated Astro site deployed to Cloudflare Workers static assets.

## Structure

- `src/content/` — Markdown content for pages, artists, team members, releases, and services.
- `src/content.config.ts` — schemas that validate every content collection.
- `src/pages/` — URL routes and page-specific presentation.
- `src/components/` and `src/layouts/` — shared site navigation, footer, page shell, and metadata.
- `src/data/site.mjs` — the single source for the canonical URL, site description, contact email, and navigation. Astro’s config imports the same file.
- `src/styles/` — global design tokens and styles; page-specific styles stay with their page routes.
- `public/` — static images and other files copied into the build.

Services and lesson areas are defined once under `src/content/services/`. The Contact page links to a generated detail page for each service, while the Education page displays their lesson areas, so the site does not maintain duplicate service lists. Each service page uses its Markdown entry for SEO metadata and introductory copy.

## Commands

- `npm run dev` — start the local site.
- `npm run check` — check Astro and TypeScript diagnostics.
- `npm run build` — type-check and generate `dist/`.
- `npm run preview` — preview the generated site.
- `npm run deploy` — build and deploy with Wrangler.

The shared layout creates canonical, Open Graph, Twitter, and Organization/WebSite structured metadata. The sitemap and `robots.txt` are generated from the configured URL and built routes.
