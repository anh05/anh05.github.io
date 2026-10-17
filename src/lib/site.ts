/* Author: DA Nguyen */
// Site-wide helpers: navigation, published blog posts, and optional files.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection } from 'astro:content';

/** Published (non-draft) blog posts, newest first. */
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * The "Download PDF" link is shown only when public/cv.pdf exists.
 * Put a privacy-safe CV there (no phone, address or referee details).
 */
export const hasCvPdf = existsSync(join(process.cwd(), 'public', 'cv.pdf'));

export interface NavItem {
  href: string;
  label: string;
}

/** Main navigation; Blog appears only once a published post exists. */
export async function getNav(): Promise<NavItem[]> {
  const nav: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/cv/', label: 'CV' },
    { href: '/publications/', label: 'Publications' },
    { href: '/projects/', label: 'Projects' },
  ];
  if ((await getPublishedPosts()).length > 0) nav.push({ href: '/blog/', label: 'Blog' });
  return nav;
}
