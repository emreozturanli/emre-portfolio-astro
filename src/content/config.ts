import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const travel = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    country: z.string(),
    city: z.string().optional(),
    tags: z.array(z.string()).default([]),
    images: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    techStack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    dateRead: z.coerce.date().optional(),
    rating: z.number().min(1).max(5).optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

const stack = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['frontend', 'backend', 'database', 'devops', 'tools', 'languages']),
    description: z.string().optional(),
    url: z.string().url().optional(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  travel,
  projects,
  books,
  stack,
};
