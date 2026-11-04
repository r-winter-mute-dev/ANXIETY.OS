// Zugriff auf die Textbausteine. Alle Texte der App kommen aus src/content/ –
// nie direkt im Code, damit sie vollständig fachlich geprüft werden können.

export type ReviewStatus = 'draft' | 'changes_requested' | 'approved';
export interface Review {
  status: ReviewStatus;
  reviewer: string | null;
  date: string | null;
  comment: string | null;
}
export interface Block {
  text: string | string[];
  review: Review;
  note?: string;
  refs?: string[];
  tel?: string | string[];
  [extra: string]: unknown;
}
export interface Reference {
  citation: string;
  url: string;
  checked: string | null;
  review: Review;
}

const modules = import.meta.glob<Record<string, Block>>('../content/de/*.json', {
  eager: true,
  import: 'default',
});
import refsJson from '../content/references.json';

export const blocks: Record<string, Block> = Object.assign({}, ...Object.values(modules));
export const references = refsJson as Record<string, Reference>;

export function block(id: string): Block {
  const b = blocks[id];
  if (!b) throw new Error(`Textbaustein fehlt: ${id}`);
  return b;
}

/** Einzelner Text. */
export function t(id: string, vars?: Record<string, string | number>): string {
  const x = block(id).text;
  if (typeof x !== 'string') throw new Error(`Textbaustein ${id} ist eine Liste – list() verwenden`);
  return vars ? x.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : x;
}

/** Liste von Texten. */
export function list(id: string): string[] {
  const x = block(id).text;
  if (!Array.isArray(x)) throw new Error(`Textbaustein ${id} ist keine Liste – t() verwenden`);
  return x;
}

const allReviews = [
  ...Object.values(blocks).map((b) => b.review),
  ...Object.values(references).map((r) => r.review),
];
export const reviewProgress = {
  total: allReviews.length,
  approved: allReviews.filter((r) => r.status === 'approved').length,
};
/** Entwurf, solange nicht jeder Baustein und jede Quelle freigegeben ist. */
export const isDraft = reviewProgress.approved < reviewProgress.total;
