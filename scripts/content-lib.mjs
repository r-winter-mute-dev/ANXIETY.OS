// Gemeinsame Logik für Review-Report, Validierung und Release-Sperre.
// Läuft in Node (Skripte) und in Vitest (Tests).
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const CONTENT_DIR = join(ROOT, 'src', 'content', 'de');
export const REFS_FILE = join(ROOT, 'src', 'content', 'references.json');
export const STATUSES = ['draft', 'changes_requested', 'approved'];

export function loadContent() {
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json')).sort();
  const byFile = {};
  for (const f of files) {
    byFile[f] = JSON.parse(readFileSync(join(CONTENT_DIR, f), 'utf8'));
  }
  const refs = JSON.parse(readFileSync(REFS_FILE, 'utf8'));
  return { byFile, refs };
}

/** Liefert eine Liste von Fehlern (leer = gültig). */
export function validate({ byFile, refs }) {
  const errors = [];
  const seen = new Map();
  const checkReview = (where, r) => {
    if (!r || typeof r !== 'object') return errors.push(`${where}: Feld "review" fehlt`);
    if (!STATUSES.includes(r.status)) errors.push(`${where}: ungültiger review.status "${r.status}"`);
    if (r.status === 'approved' && (!r.reviewer || !r.date))
      errors.push(`${where}: "approved" braucht reviewer und date`);
  };
  for (const [file, blocks] of Object.entries(byFile)) {
    for (const [id, b] of Object.entries(blocks)) {
      const where = `${file} › ${id}`;
      if (seen.has(id)) errors.push(`${where}: ID doppelt (auch in ${seen.get(id)})`);
      seen.set(id, file);
      const ok =
        typeof b.text === 'string' ||
        (Array.isArray(b.text) && b.text.length > 0 && b.text.every((x) => typeof x === 'string'));
      if (!ok) errors.push(`${where}: "text" muss String oder nicht-leeres String-Array sein`);
      checkReview(where, b.review);
      for (const r of b.refs ?? []) if (!refs[r]) errors.push(`${where}: unbekannte Quelle "${r}"`);
    }
  }
  for (const [id, r] of Object.entries(refs)) {
    if (!r.citation || !r.url) errors.push(`references › ${id}: citation und url erforderlich`);
    checkReview(`references › ${id}`, r.review);
  }
  return errors;
}

export function reviewStats({ byFile, refs }) {
  const items = [
    ...Object.values(byFile).flatMap((blocks) => Object.values(blocks).map((b) => b.review)),
    ...Object.values(refs).map((r) => r.review),
  ];
  const count = (s) => items.filter((r) => r?.status === s).length;
  return {
    total: items.length,
    approved: count('approved'),
    draft: count('draft'),
    changes_requested: count('changes_requested'),
  };
}
