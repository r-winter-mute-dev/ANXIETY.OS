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

1. **Fachperson finden** und das Review starten (siehe [REVIEW.md](REVIEW.md)), dazu eine Kardiologin oder einen Kardiologen für die Körpersignale
2. **Offene Fachfragen klären**, idealerweise im selben Gespräch (siehe [unten](#offene-entscheidungen))
3. **Konzeptlücken schließen**, die die Fachperson für nötig hält
4. **Juristische Prüfung** der Zweckbestimmung
5. **Hosting, Impressum, Datenschutzerklärung**
6. **Usability-Test** mit wenigen Testpersonen
7. Erst danach: Release-Build und öffentliche Empfehlung

---

## 🔴 Vor einer Veröffentlichung

### Fachlich

- [ ] 🔴 **Review aller 291 Einträge** (Textbausteine und Quellen, siehe [REVIEW.md](REVIEW.md)) durch eine Fachperson aus Psychotherapie oder Psychiatrie
- [ ] 🔴 **Krisenpfad bei Suizidgedanken prüfen lassen.** Die App zeigt 112, TelefonSeelsorge, die Krisendienste Bayern und Berlin sowie eine Suche für andere Regionen. Reicht das, oder braucht es einen eigenen, ruhigeren Bildschirm? Berlin: Widerspruch bei der überregionalen Nummer (030 390 63 10 laut Anbieter, 030 390 63 00 laut berlin.de) klären.
- [ ] 🔴 **Sicherheitsfrage am Anfang fachlich bestätigen:** Auswahl der drei Punkte, Wortlaut und die Entscheidung, nur eine Frage statt einer Symptomliste zu stellen
- [ ] 🔴 **Körpersignale in der Akutphase fachlich bewerten:** Hilft die Erklärung während einer Attacke, oder wirkt sie wie Rückversicherung? Wortlaut der Warnzeichen prüfen (bewusst ohne Krankheitsnamen). Für diesen Einsatz gibt es keine Studien.
- [ ] 🔴 **Schnellzugang und Ablenkung fachlich bewerten:** Ist es vertretbar, Sicherheitsfrage und Einschätzung zu überspringen? Fördert Ablenkung in der Attacke Sicherheitsverhalten? Die Studien dazu stammen aus der Expositionstherapie (Podină et al. 2013), nicht aus Panikattacken.
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
| 5.3 Grounding | ✅ **Variante „Orientierung“** („Wo bin ich?“) umgesetzt | Passt zu Derealisation; Review offen |
| 5.3 Grounding | ✅ **Variante „Neutraler Gegenstand“** („Ein Gegenstand“) umgesetzt | Review offen |
| 2.1 / 5.2 Psychoedukation | ~~Erklärung zu Derealisation und Depersonalisation~~ | ✅ Umgesetzt in „Körpersignale verstehen“ |
| 5.5 / 5.2 Psychoedukation | ~~Erklärung zu Hyperventilation~~ | ✅ Umgesetzt bei Schwindel, Kribbeln und Atemnot |

---

## 🔴 Menschen mit Herzerkrankung

Viele Menschen entwickeln nach einem Herzereignis eine Angststörung. Psychotherapie hilft ihnen nachweislich, digitale Programme wie Invirto schließen sie aber aus. ANXIETY.OS hat keine ärztliche Abklärung vorab, deshalb werden auch Menschen mit Herzerkrankung die App nutzen. Für sie greifen allgemeine Regeln („passt zu Angst“) schlechter.

**Datenlage (Stand 04.11.2026):**

| Befund | Quelle |
| --- | --- |
| Diagnostizierte Angststörungen nach Herzinfarkt: etwa 12 % (95 %-KI 6–22 %, 7 Studien) | [Hao et al. 2025, Meta-Analyse](https://pubmed.ncbi.nlm.nih.gov/40142595/) |
| Angstsymptome nach Herzinfarkt: 5,5–58 % je nach Messung; verbunden mit schlechterer Prognose (Zusammenhang, keine Ursache) | [Meta-Analyse, 16 Studien](https://pmc.ncbi.nlm.nih.gov/articles/PMC8207975/) |
| Mit implantiertem Defibrillator: bis zu 38 % mit Angststörung, am stärksten abhängig von Schocks | [Review](https://www.sciencedirect.com/science/article/abs/pii/S0025619611615103) |
| Psychologische Interventionen senken Angst bei KHK und Herzinsuffizienz moderat (SMD −0,57; moderate Evidenzsicherheit, hohe Heterogenität) | [Cochrane 2024](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013508.pub3/full) |
| Auf den Defibrillator zugeschnittene KVT wirkt besser als übliche Versorgung (RCT, N = 193) | [Irvine et al. 2011](https://pubmed.ncbi.nlm.nih.gov/21321256) |
| Unbegleitete Selbsthilfe-Apps für diese Gruppe | nicht untersucht |

**Aufgaben:**

- [ ] 🔴 **Kardiologisches Review** der Körpersignale und Warnzeichen, zusätzlich zum psychotherapeutischen Review
- [ ] 🔴 **Grundsatzentscheidung mit Fachperson und Recht:** Wie spricht die App Menschen mit bekannter Herzerkrankung an, ohne sie auszuschließen und ohne falsch zu beruhigen?
- [ ] 🟡 **Persönlicher Herz-Notfallplan** im Vorbereitungsmodus, in Ruhe ausgefüllt und mit der Kardiologin oder dem Kardiologen abgesprochen: „Bei welchen Beschwerden rufe ich die 112, welche kenne ich als Angst?“ In der Attacke zeigt die App diese persönlichen Grenzen statt allgemeiner. Speicherung nur lokal und nur nach Zustimmung.
- [ ] 🟡 **Zusatzsatz bei Brustschmerz und Herzrasen** für Herzpatient:innen: „Halte dich an das, was du mit deiner Ärztin oder deinem Arzt besprochen hast.“ Die 112 bleibt für alle an erster Stelle.
- [ ] 🟡 **Hinweis auf Psychokardiologie** als spezialisierte Anlaufstelle (Quellen und Anlaufstellen noch recherchieren)
- [ ] 🔴 **Keine symptomauslösenden Übungen** (interozeptiv) für diese Gruppe ohne kardiologische Freigabe

---

## 🟡 Neue Funktionen

### Vorbereitung in ruhigen Momenten

- [x] 🟡 **Vorbereitungsmodus:** jede Übung in Ruhe ausprobieren, ohne den Akut-Ablauf. Geübte Strategien sind in der Krise leichter abrufbar.
- [ ] ⚪ **Interozeptive Übungen** (Körperempfindungen gezielt auslösen, wie bei Invirto): nur in ruhigen Momenten und nur mit therapeutischer Begleitung. Invirto weist selbst darauf hin, dass diese Übungen starke Anspannung auslösen können.
- [ ] 🟡 **Persönlicher Notfallplan:** eigene Sätze, die helfen, eine Lieblingsübung, eine Vertrauensperson mit Telefonnummer. Er erscheint im Akut-Ablauf als Erstes.
  - Erste Funktion, die etwas speichert: nur lokal, nur nach ausdrücklicher Zustimmung, jederzeit löschbar
  - Datenschutz-Test erweitern: ohne Zustimmung darf weiterhin nichts gespeichert werden

### Anpassbarkeit

- [x] 🟡 **Einstellungen** wie bei 0 to Hero: Schriftgröße, Zeilenabstand, Bewegung an oder aus
- [x] ⚪ **Helles Farbschema** (Catppuccin Latte) für Tageslicht
- [ ] ⚪ **Optionale Vibration** als Taktgeber für die Atemhilfe, für alle, die nicht auf den Bildschirm schauen wollen
- [ ] ⚪ **Optionales Vorlesen** der Anweisungen. Das Konzept verlangt „keine überraschenden akustischen Reize“, also nur auf ausdrücklichen Wunsch.

### Mehr Menschen erreichen

- [x] 🟡 **Körpersignal „Rauschen oder Druck in den Ohren“** ergänzt. Datenlage schwach: nur als Folge schnellen Atmens in einem Review genannt (Nardi et al. 2009), keine Studien zu Ohrgeräuschen während Panikattacken. In der Prüfliste markiert.
- [x] 🟡 **Psychiatrische Krisendienste** ergänzen. Es gibt keine bundesweite Nummer, sie sind regional organisiert; Lösung ohne Standortabfrage finden, Nummern einzeln prüfen

- [ ] ⚪ **Leichte Sprache**
- [ ] ⚪ **Englisch**, danach weitere Sprachen. Die Textbausteine sind dafür schon getrennt vom Code.
- [ ] ⚪ **Notrufnummern für Österreich und die Schweiz.** Bisher stimmen die Nummern nur für Deutschland.

### Tagebuch

- [ ] ⚪ **Freiwilliges Tagebuch:** Datum, Angst vorher und nachher, gewählte Übung. Nur auf dem Gerät, mit Export und Löschen.
- [ ] ⚪ Daraus vielleicht später eine einfache Übersicht für Gespräche mit der eigenen Therapeutin oder dem eigenen Therapeuten

---

## 🟡 Technik und Qualität

- [x] 🟡 Offline-Test in der CI auch für den Unterpfad `/ANXIETY.OS/` laufen lassen, nicht nur lokal
- [x] 🟡 Hinweis in der App, wenn eine neue Version verfügbar ist
- [x] 🟡 Automatische Updates der Abhängigkeiten (Dependabot)
- [ ] 🟡 **Lesbarkeit der Texte prüfen:** kurze Sätze, einheitliches Du, keine Fachbegriffe ohne Erklärung
- [x] 🟡 Versionsnummern und `CHANGELOG.md` eingeführt (Version steht unter „Über diese App“)
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
| Formulierung für Menschen mit Herzerkrankung: eigener Pfad, Zusatzhinweis oder persönlicher Notfallplan? | Fachperson, Kardiologie, Recht | offen |
| Projektfarbe Teal oder Mauve wie bei den anderen Projekten? | Projektinhaber | offen |
