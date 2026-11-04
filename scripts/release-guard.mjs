// Release-Sperre: bricht ab, solange nicht alle Inhalte und Quellen fachlich freigegeben sind.
// Aufruf: npm run build:release
import { loadContent, validate, reviewStats } from './content-lib.mjs';

const data = loadContent();
const errors = validate(data);
if (errors.length) {
  console.error('✖ Inhalte ungültig:\n' + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
const s = reviewStats(data);
if (s.approved !== s.total) {
  console.error(
    `✖ Release gesperrt: ${s.total - s.approved} von ${s.total} Einträgen sind nicht fachlich freigegeben.\n` +
      '  Siehe REVIEW.md. Für Entwicklungs-Builds: npm run build',
  );
  process.exit(1);
}
console.log(`✔ Alle ${s.total} Einträge freigegeben.`);
