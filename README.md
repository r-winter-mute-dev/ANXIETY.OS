# ANXIETY.OS

> **⚠️ ENTWURF: NICHT FACHLICH GEPRÜFT**
> Alle Inhalte sind ein Entwurf und wurden noch nicht von Fachpersonal geprüft. Die Anwendung stellt keine Diagnose, behandelt keine Erkrankung und ersetzt keine ärztliche oder psychotherapeutische Hilfe. Ob sie in akuten Situationen hilft, ist nicht untersucht.
> **Im Notfall: 112.**

Browserbasierte, niedrigschwellige Selbsthilfe bei akuter Angst. Sie orientiert sich an Prinzipien der kognitiven Verhaltenstherapie: Psychoedukation, kognitive Neubewertung, Aufmerksamkeitslenkung und optionale Atemregulation.

**Zweckbestimmung (MVP):** nicht-medizinisches Selbsthilfe- und Psychoedukationsangebot. Formulierungen, die eine Behandlung versprechen oder sich auf die Behandlung einer bestimmten Störung beziehen, sind bewusst vermieden. Eine Einordnung als Medizinprodukt (MDR) ist vor einer Veröffentlichung juristisch zu prüfen.

## Status

| Bereich | Stand |
|---|---|
| Ablauf (Sicherheitsfrage → Skala → Auswahl → Übung → Skala → Abschluss) | ✅ umgesetzt |
| Module: Neubewertung, Grounding (4 Varianten), einfacher Schritt, Atemhilfe, Psychoedukation | ✅ umgesetzt |
| Notfall-Leiste auf jedem Bildschirm, Notrufnummern geprüft am 04.11.2026 | ✅ |
| Offline-Fähigkeit (Service Worker), keine Speicherung, keine Drittanbieter | ✅ |
| Barrierefreiheit (automatisierte WCAG-2.2-AA-Prüfung mit axe) | ✅ ohne Befund |
| **Fachliches Review der Inhalte** | ⬜ **0 von 133 freigegeben**, siehe [REVIEW.md](REVIEW.md) |
| Usability-Test (Konzept Phase I) | ⬜ offen |

## Entwicklung

```bash
npm install
npm run dev          # Entwicklungsserver
npm test             # Unit-Tests (Inhalte, Ablauflogik)
npm run test:e2e     # Build + End-to-End- und Barrierefreiheitstests (Playwright)
npm run check        # Typprüfung
npm run review       # REVIEW.md aus den Inhalten neu erzeugen
npm run build        # Entwicklungs-Build (mit Entwurfs-Banner)
npm run build:release  # bricht ab, solange nicht alles freigegeben ist
```

Stack: Vite, Svelte 5, TypeScript. Die App ist rein statisch: kein Backend, keine Laufzeit-Abhängigkeiten außer Svelte.

## Fachliches Review

Alle sichtbaren Texte liegen getrennt vom Code in `src/content/de/*.json`, die Quellen in `src/content/references.json`. Jeder Baustein hat ein Review-Feld:

```json
"review": { "status": "draft", "reviewer": null, "date": null, "comment": null }
```

- **Freigeben:** `"status": "approved"` mit `reviewer` und `date`
- **Änderung anfordern:** `"status": "changes_requested"` mit `comment`
- Das Feld `note` enthält Fragen und Begründungen der Entwicklung an die prüfende Person.

`REVIEW.md` ist die lesbare Prüfliste und wird mit `npm run review` erzeugt. Ein Test prüft, dass sie aktuell ist.

Absicherung:
1. Das Entwurfs-Banner lässt sich nicht schließen. Es verschwindet erst, wenn **jeder** Baustein und **jede** Quelle freigegeben ist.
2. `npm run build:release` bricht ab, solange etwas ungeprüft ist.
3. Ein Unit-Test schlägt fehl, sobald ein Eintrag als freigegeben markiert wird. So wird der Beginn des Reviews ein bewusster Schritt (Test dann anpassen).

## Struktur

```
src/
  content/de/*.json      Alle Texte (Review-pflichtig)
  content/references.json  Quellen (Review-pflichtig)
  lib/routes.ts          Ablauflogik (rein, getestet)
  lib/nav.svelte.ts      Navigation + Sitzungszustand (nur Arbeitsspeicher)
  lib/content.ts         Zugriff auf Textbausteine
  screens/               Ein Bildschirm pro Phase/Modul
  components/            Screen, Steps, Scale, Banner, Notfall-Leiste, Diagramm
scripts/                 Review-Report, Release-Sperre, Icons
tests/unit, tests/e2e
```

## Datenschutz

- Keine Registrierung, kein Tracking, keine Cookies, kein localStorage. Ein E2E-Test prüft das.
- Keine externen Ressourcen (Systemschriften, keine CDNs). Ein E2E-Test prüft, dass keine fremden Server angefragt werden.
- Content-Security-Policy erlaubt nur die eigene Herkunft; `referrer: no-referrer`; `noindex`.
- Eingaben (z. B. Freitext in der Neubewertung) existieren nur im Arbeitsspeicher und werden beim Beenden verworfen.
- **Offen:** Hosting bei einem EU-Anbieter mit minimalen Zugriffsprotokollen. Der Hinweis in `about.json` muss an den tatsächlichen Hoster angepasst werden. Zusätzliche Header am Hoster setzen: `frame-ancestors 'none'` (per Meta-Tag nicht möglich), `X-Content-Type-Options: nosniff`.

## Bewusste Abweichungen vom Konzept

| Konzept | Umsetzung | Begründung |
|---|---|---|
| 5.1 Sicherheitsprüfung mit Symptomabfrage (30–60 s) | **Eine** Frage mit drei Punkten; „Ja“ und „unsicher“ führen zur Hilfe | Wiederholtes Symptom-Prüfen kann im Clark-Modell als Sicherheitsverhalten wirken; außerdem weniger Hürde in der Akutsituation. Notruf ist zusätzlich jederzeit über die Leiste erreichbar. |
| 5.4 Texteingabe in der Neubewertung | Alles per Antippen; Freitext optional | Konzept 7: „keine verpflichtenden Texteingaben“ |
| 5.5 Atemübung | In „Alle Übungen“ an letzter Stelle | Niedrige Evidenzsicherheit (WHO mhGAP 2023: konditional) |
| – | Bereich „Angst verstehen“ für ruhige Momente | Psychoedukation während akuter Angst nur eingeschränkt aufnehmbar (Konzept 5.2) |

## Nächste Schritte

- [ ] Fachliches Review (REVIEW.md)
- [ ] Hosting festlegen, Datenschutzhinweis und Impressum ergänzen
- [ ] Juristische Prüfung der Zweckbestimmung (MDR)
- [ ] Phase 2: Vorbereitungsmodus, persönlicher Notfallplan, optionales lokales Tagebuch (Opt-in, mit Export/Löschen)
- [ ] Usability-Test (Konzept 10.1)

## Lizenz

CC0 1.0, siehe [LICENSE](LICENSE).
