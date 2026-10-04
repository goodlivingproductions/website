import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artists = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/artists',
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/team',
  }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    geniusUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const releases = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/releases',
  }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    releaseDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    goodLivingTeam: z.array(z.object({
      name: z.string(),
      roles: z.array(z.string()),
    })).default([]),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/pages',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  artists,
  team,
  releases,
  pages,
};
