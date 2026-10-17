/* Author: DA Nguyen */
// Content collections. Each collection is a single YAML file in src/content/
// (except the blog, which uses one Markdown file per post). The schemas below
// validate every entry at build time.
import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** "YYYY" or "YYYY-MM". */
const yearMonth = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM');

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    location: z.string(),
    start: yearMonth,
    /** Omit for a current position. */
    end: yearMonth.optional(),
    /** Optional note shown after the dates, e.g. "part-time". */
    note: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    start: yearMonth,
    end: yearMonth.optional(),
    thesis: z.string().optional(),
    details: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: file('src/content/publications.yaml'),
  schema: z.object({
    type: z.enum(['thesis', 'journal', 'conference']),
    title: z.string(),
    /** Authors in "Surname, Initials" form, in publication order. */
    authors: z.array(z.string()).min(1),
    year: z.number().int(),
    /** Journal, proceedings or institution. */
    venue: z.string(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    publisher: z.string().optional(),
    status: z.enum(['published', 'in-review']).default('published'),
    doi: z.string().regex(/^10\.\d{4,9}\/\S+$/, 'DOI without https://doi.org/ prefix').optional(),
    code: z.url().optional(),
    package: z.url().optional(),
    /** Show on the home page. */
    selected: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    repo: z.url(),
    package: z.url().optional(),
    publication: reference('publications').optional(),
    /** Show on the home page. */
    featured: z.boolean().default(false),
    /** Lower numbers are listed first. */
    order: z.number().int().default(100),
  }),
});

const teaching = defineCollection({
  loader: file('src/content/teaching.yaml'),
  schema: z.object({
    role: z.string(),
    course: z.string().optional(),
    institution: z.string(),
    location: z.string(),
    start: yearMonth,
    end: yearMonth.optional(),
    details: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  // Files starting with "_" (such as _template.md) are ignored.
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { experience, education, publications, projects, teaching, blog };
