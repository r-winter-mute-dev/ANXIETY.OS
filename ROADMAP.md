# Roadmap und offene Punkte

Was in ANXIETY.OS noch fehlt, was als Nächstes kommt und was noch entschieden werden muss.

| Zeichen | Bedeutung |
| :---: | --- |
| 🔴 | **Muss vor jeder öffentlichen Empfehlung erledigt sein** |
| 🟡 | Wichtig, gehört in die nächste Version |
| ⚪ | Später oder optional |

**Stand:** Das MVP ist als Entwurf nutzbar ([zur App](https://r-winter-mute-dev.github.io/ANXIETY.OS/)). Fachlich geprüft ist davon noch nichts.

---

## Nächste Schritte

Die sinnvolle Reihenfolge:

1. **Fachperson finden** und das Review starten (siehe [REVIEW.md](REVIEW.md))
2. **Offene Fachfragen klären**, idealerweise im selben Gespräch (siehe [unten](#offene-entscheidungen))
3. **Konzeptlücken schließen**, die die Fachperson für nötig hält
4. **Juristische Prüfung** der Zweckbestimmung
5. **Hosting, Impressum, Datenschutzerklärung**
6. **Usability-Test** mit wenigen Testpersonen
7. Erst danach: Release-Build und öffentliche Empfehlung

---

## 🔴 Vor einer Veröffentlichung

### Fachlich

- [ ] 🔴 **Review aller 133 Einträge** (124 Textbausteine, 9 Quellen) durch eine Fachperson aus Psychotherapie oder Psychiatrie
- [ ] 🔴 **Krisenpfad bei Suizidgedanken prüfen lassen.** Bisher zeigt die App nur 112 und die TelefonSeelsorge. Reicht das, oder braucht es mehr, etwa regionale Krisendienste oder einen eigenen, ruhigeren Bildschirm?
- [ ] 🔴 **Sicherheitsfrage am Anfang fachlich bestätigen:** Auswahl der drei Punkte, Wortlaut und die Entscheidung, nur eine Frage statt einer Symptomliste zu stellen
- [ ] 🔴 **Körpersignale in der Akutphase fachlich bewerten:** Hilft die Erklärung während einer Attacke, oder wirkt sie wie Rückversicherung? Wortlaut der Warnzeichen prüfen (bewusst ohne Krankheitsnamen). Für diesen Einsatz gibt es keine Studien.
- [ ] 🔴 **Bewusste Abweichungen vom Konzept bestätigen** (Tabelle in der [README](README.md#bewusste-entscheidungen))

### Rechtlich

- [ ] 🔴 **Einschätzung, ob die App unter die Medizinprodukte-Verordnung (MDR) fällt.** Ausschlaggebend ist die Zweckbestimmung. Je nach Ergebnis müssen Texte angepasst werden oder ein Zulassungsweg ist nötig.
- [ ] 🔴 **Impressum** ergänzen
- [ ] 🔴 **Datenschutzerklärung** ergänzen, passend zum tatsächlichen Hoster
- [ ] 🔴 **Haftungshinweis** juristisch prüfen lassen

### Technik und Betrieb

- [ ] 🔴 **Hoster in der EU** mit möglichst wenig Zugriffsprotokollen auswählen. GitHub Pages ist nur für die Testphase gedacht.
- [ ] 🔴 **Sicherheits-Header am Hoster setzen:** `frame-ancestors 'none'` und `X-Content-Type-Options: nosniff`. Auf GitHub Pages ist das nicht möglich.
- [ ] 🔴 Hinweis zu Zugriffsdaten in `about.json` an den neuen Hoster anpassen
- [ ] 🔴 **Tests auf echten Geräten:** iPhone (Safari, auch als installierte App), Android (Chrome), ältere und langsame Geräte
- [ ] 🔴 **Manueller Screenreader-Test** mit VoiceOver und TalkBack. Die automatische Prüfung mit axe findet nur einen Teil der Probleme.

### Evaluation (Konzept Abschnitt 10.1)

- [ ] 🔴 **Usability-Test** mit einer kleinen Gruppe Erwachsener: Verständlichkeit, Bedienbarkeit unter Belastung, Dauer, Abbrüche, wahrgenommene Sicherheit, Verständlichkeit der Notfallhinweise
- [ ] 🔴 Ergebnisse dokumentieren und einarbeiten

---

## 🟡 Lücken zum Konzept

Diese Punkte stehen im Konzept, sind aber noch nicht oder nur teilweise umgesetzt.

| Konzept | Was fehlt | Notiz |
| --- | --- | --- |
| 5.1 Sicherheitsprüfung | **Frage, ob man sich gerade an einem sicheren Ort befindet** | Bewusst weggelassen, um die Hürde klein zu halten. Mit der Fachperson entscheiden. |
| 6 Phase 2 | **Eigene Phase „Situative Orientierung“** | Teilweise durch die Angst-Skala abgedeckt. Mögliche Ergänzung: „Wo bist du gerade? Bist du allein?“ |
| 5.3 Grounding | **Variante „Orientierung“:** Wo bin ich, welcher Tag ist heute, was ist um mich herum | Würde gut zu Derealisation passen |
| 5.3 Grounding | **Variante „Neutraler Gegenstand“:** einen Gegenstand ausführlich beschreiben | Steckt teilweise in „Umgebung“ |
| 2.1 / 5.2 Psychoedukation | **Erklärung zu Derealisation und Depersonalisation** | Oft besonders beängstigend. Wichtig, dass es erklärt wird, ohne Symptome als harmlos abzutun. |
| 5.5 / 5.2 Psychoedukation | **Erklärung zu Hyperventilation:** Schwindel, Kribbeln, Benommenheit | Im Konzept erwähnt, in der App fehlt sie bisher |

---

## 🟡 Neue Funktionen

### Vorbereitung in ruhigen Momenten

- [ ] 🟡 **Vorbereitungsmodus:** jede Übung in Ruhe ausprobieren, ohne den Akut-Ablauf. Geübte Strategien sind in der Krise leichter abrufbar.
- [ ] ⚪ **Interozeptive Übungen** (Körperempfindungen gezielt auslösen, wie bei Invirto): nur in ruhigen Momenten und nur mit therapeutischer Begleitung. Invirto weist selbst darauf hin, dass diese Übungen starke Anspannung auslösen können.
- [ ] 🟡 **Persönlicher Notfallplan:** eigene Sätze, die helfen, eine Lieblingsübung, eine Vertrauensperson mit Telefonnummer. Er erscheint im Akut-Ablauf als Erstes.
  - Erste Funktion, die etwas speichert: nur lokal, nur nach ausdrücklicher Zustimmung, jederzeit löschbar
  - Datenschutz-Test erweitern: ohne Zustimmung darf weiterhin nichts gespeichert werden

### Anpassbarkeit

- [ ] 🟡 **Einstellungen** wie bei 0 to Hero: Schriftgröße, Zeilenabstand, Bewegung an oder aus
- [ ] ⚪ **Helles Farbschema** (Catppuccin Latte) für Tageslicht
- [ ] ⚪ **Optionale Vibration** als Taktgeber für die Atemhilfe, für alle, die nicht auf den Bildschirm schauen wollen
- [ ] ⚪ **Optionales Vorlesen** der Anweisungen. Das Konzept verlangt „keine überraschenden akustischen Reize“, also nur auf ausdrücklichen Wunsch.

### Mehr Menschen erreichen

- [ ] ⚪ **Leichte Sprache**
- [ ] ⚪ **Englisch**, danach weitere Sprachen. Die Textbausteine sind dafür schon getrennt vom Code.
- [ ] ⚪ **Notrufnummern für Österreich und die Schweiz.** Bisher stimmen die Nummern nur für Deutschland.

### Tagebuch

- [ ] ⚪ **Freiwilliges Tagebuch:** Datum, Angst vorher und nachher, gewählte Übung. Nur auf dem Gerät, mit Export und Löschen.
- [ ] ⚪ Daraus vielleicht später eine einfache Übersicht für Gespräche mit der eigenen Therapeutin oder dem eigenen Therapeuten

---

## 🟡 Technik und Qualität

- [ ] 🟡 Offline-Test in der CI auch für den Unterpfad `/ANXIETY.OS/` laufen lassen, nicht nur lokal
- [ ] 🟡 Hinweis in der App, wenn eine neue Version verfügbar ist
- [ ] 🟡 Automatische Updates der Abhängigkeiten (Dependabot)
- [ ] 🟡 **Lesbarkeit der Texte prüfen:** kurze Sätze, einheitliches Du, keine Fachbegriffe ohne Erklärung
- [ ] 🟡 Versionsnummern und `CHANGELOG.md` einführen, sobald das Review beginnt
- [ ] 🟡 Den Test „nichts ist freigegeben“ anpassen, sobald das Review beginnt. Er schlägt dann absichtlich fehl.
- [ ] ⚪ Eigene Domain

---

## ⚪ Spätere Evaluation (Konzept 10.2 und 10.3)

Erst sinnvoll, wenn Review und Usability-Test abgeschlossen sind.

- [ ] ⚪ **Pilotstudie:** Angst vorher und nachher, System Usability Scale (SUS), Abbruchquote, Akzeptanz
  - Braucht eine eigene Studienversion mit freiwilliger, informierter Einwilligung. Die normale App sammelt weiterhin nichts.
  - Ethikvotum und Registrierung vorab
- [ ] ⚪ **Kontrollierte Studie (RCT)**, um zu prüfen, ob die App überhaupt wirkt. Dabei sind spontanes Abklingen, Erwartungseffekte und Regression zur Mitte zu berücksichtigen.

---

## Offene Entscheidungen

Fragen, die vor dem Review oder währenddessen geklärt werden sollten.

| Frage | Wer entscheidet | Stand |
| --- | --- | --- |
| Atemhilfe: Sind 4 Sekunden ein und 6 Sekunden aus, ohne Pause, angemessen? | Fachperson | offen |
| Grounding „Kontaktpunkte“: Für Menschen mit starkem Körperfokus geeignet, oder lieber nicht als Standard? | Fachperson | offen |
| Ist der ruhige Hilfe-Knopf noch auffindbar genug? | Fachperson und Usability-Test | offen |
| Soll „Alles ist zu viel“ direkt eine Übung starten, statt erst vier Sätze zu zeigen? | Fachperson und Usability-Test | offen |
| Zielgruppe nur Erwachsene: Braucht es dafür einen Hinweis oder eine Abfrage? | Fachperson und Recht | offen |
| Nachfrage „weniger / gleich / stärker“ nach jedem Körpersignal: hilfreich oder lenkt sie den Fokus zu stark auf die Angst? | Fachperson und Usability-Test | offen |
| Brustschmerz-Hinweis: Roter Rahmen und 112-Knopf vor der Erklärung angemessen, oder zu alarmierend? | Fachperson | offen |
| Projektfarbe Teal oder Mauve wie bei den anderen Projekten? | Projektinhaber | offen |
