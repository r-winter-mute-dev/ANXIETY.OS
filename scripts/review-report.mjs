// Erzeugt REVIEW.md: die Prüfliste für das Fachpersonal.
// Aufruf: npm run review
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadContent, validate, reviewStats } from './content-lib.mjs';

const ICON = { draft: '⬜ Entwurf', changes_requested: '🟧 Änderung nötig', approved: '✅ Freigegeben' };

export function renderReport(data) {
  const s = reviewStats(data);
  const esc = (x) => String(x).replace(/\|/g, '\\|').replace(/\n/g, ' ');
  const fmt = (t) => (Array.isArray(t) ? t.map((x, i) => `${i + 1}. ${esc(x)}`).join('<br>') : esc(t));
  const out = [];
  out.push('# Fachliche Prüfliste – ANXIETY.OS');
  out.push('');
  out.push('> Diese Datei wird automatisch aus `src/content/` erzeugt (`npm run review`). Nicht von Hand bearbeiten.');
  out.push('');
  out.push(`**Stand:** ${s.approved} von ${s.total} Einträgen freigegeben · ${s.draft} Entwurf · ${s.changes_requested} Änderung nötig`);
  out.push('');
  out.push('## So funktioniert die Prüfung');
  out.push('');
  out.push('1. Jeder Textbaustein steht in einer JSON-Datei unter `src/content/de/`. Die Datei steht als Überschrift über jeder Tabelle.');
  out.push('2. Zum Freigeben im Baustein `review` ausfüllen: `"status": "approved"`, `"reviewer": "Name, Qualifikation"`, `"date": "JJJJ-MM-TT"`.');
  out.push('3. Für Änderungswünsche: `"status": "changes_requested"` und den Wunsch in `"comment"` eintragen.');
  out.push('4. Die Spalte **Hinweis** enthält Fragen und Begründungen der Entwicklung an die prüfende Person.');
  out.push('5. Solange nicht alles freigegeben ist, zeigt die App das Entwurfs-Banner und `npm run build:release` bricht ab.');
  out.push('');
  for (const [file, blocks] of Object.entries(data.byFile)) {
    out.push(`## \`${file}\``);
    out.push('');
    out.push('| ID | Text | Status | Hinweis | Quellen |');
    out.push('|---|---|---|---|---|');
    for (const [id, b] of Object.entries(blocks)) {
      const st = ICON[b.review.status] + (b.review.comment ? `<br>💬 ${esc(b.review.comment)}` : '');
      out.push(`| \`${id}\` | ${fmt(b.text)} | ${st} | ${esc(b.note ?? '')} | ${(b.refs ?? []).map((r) => `\`${r}\``).join(', ')} |`);
    }
    out.push('');
  }
  out.push('## Quellen (`src/content/references.json`)');
  out.push('');
  out.push('| ID | Zitation | Link | Link geprüft | Status |');
  out.push('|---|---|---|---|---|');
  for (const [id, r] of Object.entries(data.refs)) {
    out.push(`| \`${id}\` | ${esc(r.citation)} | ${r.url} | ${r.checked ?? '–'} | ${ICON[r.review.status]} |`);
  }
  out.push('');
  return out.join('\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const data = loadContent();
  const errors = validate(data);
  if (errors.length) {
    console.error('Inhalte ungültig:\n' + errors.map((e) => '  - ' + e).join('\n'));
    process.exit(1);
  }
  writeFileSync(join(ROOT, 'REVIEW.md'), renderReport(data));
  const s = reviewStats(data);
  console.log(`REVIEW.md geschrieben – ${s.approved}/${s.total} freigegeben.`);
}
