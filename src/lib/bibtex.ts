/* Author: DA Nguyen */
// Builds a BibTeX entry from a publication's data.
import type { CollectionEntry } from 'astro:content';

type Publication = CollectionEntry<'publications'>;

/** Escape characters that BibTeX treats specially and keep capitalisation. */
function tex(value: string): string {
  return value
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([&%$#_])/g, '\\$1')
    .replace(/–/g, '--');
}

export function toBibtex(pub: Publication): string {
  const d = pub.data;
  const fields: [string, string | undefined][] = [
    ['author', d.authors.join(' and ')],
    ['title', `{${d.title}}`],
  ];

  let kind: string;
  if (d.type === 'thesis') {
    kind = 'phdthesis';
    fields.push(['school', d.venue]);
  } else if (d.status === 'in-review') {
    kind = 'unpublished';
    fields.push(['note', 'Manuscript in review']);
  } else if (d.type === 'journal') {
    kind = 'article';
    fields.push(['journal', d.venue], ['volume', d.volume], ['pages', d.pages]);
  } else {
    kind = 'inproceedings';
    fields.push(['booktitle', d.venue], ['pages', d.pages]);
  }

  fields.push(['year', String(d.year)], ['publisher', d.publisher], ['doi', d.doi]);
  if (d.code) fields.push(['url', d.code]);

  const body = fields
    .filter((field): field is [string, string] => Boolean(field[1]))
    .map(([name, value]) => `  ${name} = {${name === 'url' || name === 'doi' ? value : tex(value)}}`)
    .join(',\n');

  return `@${kind}{${pub.id},\n${body}\n}`;
}
