/* Author: DA Nguyen */
// Small formatting and sorting helpers shared by pages.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2018-10" -> "Oct 2018", "2018" -> "2018". */
export function formatYearMonth(value: string): string {
  const [year, month] = value.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

/** Date range for a role; a missing end means the role is current. */
export function formatRange(start: string, end?: string): string {
  const from = formatYearMonth(start);
  if (!end) return `${from} – present`;
  const to = formatYearMonth(end);
  return from === to ? from : `${from} – ${to}`;
}

/** Sort key for "YYYY" / "YYYY-MM" strings; current roles sort first. */
function key(value: string | undefined, fallback: string): string {
  return (value ?? fallback).padEnd(7, '-00');
}

/**
 * Most recent first: by end date (current roles first), then by start date.
 * Keeps a long role (e.g. the PhD) above shorter roles held during it.
 */
export function byRecency<T extends { data: { start: string; end?: string } }>(a: T, b: T): number {
  return (
    key(b.data.end, '9999').localeCompare(key(a.data.end, '9999')) ||
    key(b.data.start, '').localeCompare(key(a.data.start, ''))
  );
}

/** "Bäck, T. H. W." -> "T. H. W. Bäck". */
export function displayAuthor(author: string): string {
  const [surname, initials] = author.split(',').map((part) => part.trim());
  return initials ? `${initials} ${surname}` : surname;
}

/** Whether an author entry refers to the site owner. */
export function isSelf(author: string): boolean {
  return author.replace(/\s/g, '') === 'Nguyen,D.A.';
}
