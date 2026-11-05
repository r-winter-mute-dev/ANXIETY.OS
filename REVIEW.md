# Fachliche Prüfliste – ANXIETY.OS

> Diese Datei wird automatisch aus `src/content/` erzeugt (`npm run review`). Nicht von Hand bearbeiten.

**Stand:** 0 von 292 Einträgen freigegeben · 292 Entwurf · 0 Änderung nötig

## So funktioniert die Prüfung

1. Jeder Textbaustein steht in einer JSON-Datei unter `src/content/de/`. Die Datei steht als Überschrift über jeder Tabelle.
2. Zum Freigeben im Baustein `review` ausfüllen: `"status": "approved"`, `"reviewer": "Name, Qualifikation"`, `"date": "JJJJ-MM-TT"`.
3. Für Änderungswünsche: `"status": "changes_requested"` und den Wunsch in `"comment"` eintragen.
4. Die Spalte **Hinweis** enthält Fragen und Begründungen der Entwicklung an die prüfende Person.
5. Solange nicht alles freigegeben ist, zeigt die App das Entwurfs-Banner und `npm run build:release` bricht ab.

## `about.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `about.title` | Über ANXIETY.OS | ⬜ Entwurf |  |  |
| `about.what` | ANXIETY.OS ist ein Entwurf für eine Selbsthilfe-Anwendung bei akuter Angst. Sie orientiert sich an Prinzipien der kognitiven Verhaltenstherapie. | ⬜ Entwurf |  |  |
| `about.draft` | Alle Inhalte sind ein Entwurf und wurden noch nicht von Fachpersonal geprüft. | ⬜ Entwurf |  |  |
| `about.not` | Die App stellt keine Diagnose, behandelt keine Erkrankung und ersetzt keine ärztliche oder psychotherapeutische Hilfe. Ob sie in akuten Situationen hilft, ist bisher nicht untersucht. | ⬜ Entwurf |  |  |
| `about.privacy.title` | Datenschutz | ⬜ Entwurf |  |  |
| `about.privacy` | 1. Keine Registrierung, kein Tracking, keine Cookies, keine Drittanbieter.<br>2. Deine Eingaben in den Übungen bleiben nur im Arbeitsspeicher dieses Browser-Tabs und werden beim Beenden gelöscht.<br>3. Nur wenn du die Darstellung änderst (Schrift, Abstände, Bewegung, Farben), wird diese Auswahl lokal in deinem Browser gespeichert. Sie verlässt dein Gerät nicht.<br>4. Beim Laden der Seite entstehen beim Hosting-Anbieter technische Zugriffsdaten (z. B. IP-Adresse). | ⬜ Entwurf | Letzten Punkt an den tatsächlichen Hoster anpassen, sobald feststeht. |  |
| `about.progress` | Fachlich freigegeben: {approved} von {total} Einträgen. | ⬜ Entwurf |  |  |
| `about.offline` | Nach dem ersten Laden funktioniert die App auch ohne Internet. | ⬜ Entwurf |  |  |
| `about.sources.title` | Fachliche Grundlagen | ⬜ Entwurf |  |  |
| `about.version` | Version {version} | ⬜ Entwurf |  |  |
| `about.license` | Code: MIT-Lizenz. Inhalte: CC BY 4.0 (Namensnennung). Änderungen an den Inhalten müssen kenntlich gemacht werden. | ⬜ Entwurf |  |  |

## `breathing.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `breathing.title` | Sanfte Atemhilfe | ⬜ Entwurf |  |  |
| `breathing.intro` | Ein freiwilliges Angebot. Du musst nichts davon tun. | ⬜ Entwurf | WHO: Entspannungsverfahren nur konditional empfohlen, niedrige Evidenzsicherheit. Daher nicht als erste Option präsentiert. | `who-mhgap-2023` |
| `breathing.rules` | 1. Atme so, wie es für dich angenehm ist – nicht tiefer als sonst.<br>2. Du musst nicht mit dem Kreis mitatmen.<br>3. Wenn dir unwohl wird: hör auf und atme normal weiter. | ⬜ Entwurf | Gestaltungsprinzipien aus Konzept 5.5: keine erzwungenen tiefen Atemzüge, keine Atempausen. |  |
| `breathing.start` | Starten | ⬜ Entwurf |  |  |
| `breathing.stop` | Beenden | ⬜ Entwurf |  |  |
| `breathing.in` | Ein | ⬜ Entwurf |  |  |
| `breathing.out` | Langsam aus | ⬜ Entwurf |  |  |
| `breathing.timing` |  | ⬜ Entwurf | Entwurfsparameter: 4 s ein, 6 s aus, keine Pause. Bitte fachlich prüfen. |  |
| `breathing.after` | Atme jetzt einfach normal weiter. | ⬜ Entwurf |  |  |

## `choose.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `choose.title` | Was ist gerade am stärksten? | ⬜ Entwurf |  |  |
| `choose.thoughts` | Meine Gedanken rasen – ich befürchte etwas Schlimmes | ⬜ Entwurf |  |  |
| `choose.body` | Mein Körper macht mir Angst | ⬜ Entwurf | Führt zu 'Körpersignale verstehen' (Symptome einzeln erklären). Abweichung von Konzept 6.1 (dort: externe Orientierung); Grounding wird am Ende angeboten. |  |
| `choose.breath` | Mein Atem fühlt sich unruhig an | ⬜ Entwurf |  |  |
| `choose.overwhelm` | Alles ist zu viel | ⬜ Entwurf |  |  |
| `choose.hint` | Du kannst danach jederzeit etwas anderes ausprobieren. | ⬜ Entwurf | Zuordnung nach Konzept 6.1: Gedanken → Neubewertung, Körperfokus → Grounding, Atem → Atemhilfe, Überforderung → einfache Handlungsanweisung. Keine diagnostische Ableitung. |  |
| `choose.other` | Alle Übungen anzeigen | ⬜ Entwurf |  |  |
| `choose.all.title` | Welche Übung möchtest du? | ⬜ Entwurf |  |  |
| `choose.ex.reframe` | Gedanken prüfen | ⬜ Entwurf |  |  |
| `choose.ex.grounding` | Im Raum ankommen | ⬜ Entwurf |  |  |
| `choose.ex.breathing` | Sanfte Atemhilfe | ⬜ Entwurf |  |  |
| `choose.ex.simple` | Ein einfacher Schritt | ⬜ Entwurf |  |  |
| `choose.ex.symptoms` | Körpersignale verstehen | ⬜ Entwurf |  |  |

## `emergency.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `emergency.title` | Hol dir jetzt Hilfe | ⬜ Entwurf |  |  |
| `emergency.lead` | Bei Lebensgefahr – oder wenn du unsicher bist – ruf die 112. | ⬜ Entwurf |  |  |
| `emergency.112.label` | 112 – Notruf | ⬜ Entwurf |  |  |
| `emergency.112.desc` | Rettungsdienst. Bei lebensbedrohlichen Beschwerden, z. B. starken Brustschmerzen, schwerer Atemnot, Bewusstseinsstörung oder Suizidgefahr. | ⬜ Entwurf |  | `116117-112` |
| `emergency.116117.label` | 116 117 – Ärztlicher Bereitschaftsdienst | ⬜ Entwurf |  |  |
| `emergency.116117.desc` | Wenn es nicht lebensbedrohlich ist, aber nicht bis zur nächsten Sprechstunde warten kann. Kostenlos, rund um die Uhr. | ⬜ Entwurf |  | `116117-112` |
| `emergency.ts.label` | TelefonSeelsorge | ⬜ Entwurf |  |  |
| `emergency.ts.desc` | Zum Reden in einer Krise. Kostenlos, anonym, rund um die Uhr. | ⬜ Entwurf |  | `telefonseelsorge` |
| `emergency.ts.numbers` | 1. 0800 111 0 111<br>2. 0800 111 0 222<br>3. 116 123 | ⬜ Entwurf | Nummern am 04.11.2026 auf telefonseelsorge.de geprüft. | `telefonseelsorge` |
| `emergency.notalone` | Wenn möglich: Sag einer Person in deiner Nähe Bescheid. | ⬜ Entwurf |  |  |
| `emergency.back` | Zurück | ⬜ Entwurf |  |  |
| `emergency.crisis.title` | Psychiatrische Krisendienste | ⬜ Entwurf |  |  |
| `emergency.crisis.lead` | Krisendienste beraten bei seelischen Notlagen und vermitteln Hilfe vor Ort. Sie sind je nach Bundesland unterschiedlich organisiert. | ⬜ Entwurf |  | `gesundbund-krisen` |
| `emergency.crisis.bayern` | Bayern: 0800 655 3000 – kostenlos, rund um die Uhr, nur aus Bayern erreichbar | ⬜ Entwurf |  | `krisendienste-bayern` |
| `emergency.crisis.berlin` | Berlin: Berliner Krisendienst, 030 390 63 10 (Öffnungszeiten der Standorte auf der Website) | ⬜ Entwurf | Widerspruch: berlin.de nennt 030 390 63 00 als überregionale Nummer, die Seite des Berliner Krisendienstes 030 390 63 10. Übernommen wurde die Angabe des Anbieters. Bitte vor Release erneut prüfen. | `berliner-krisendienst` |
| `emergency.crisis.other` | Andere Regionen: Krisendienste und Sozialpsychiatrische Dienste in deiner Nähe findest du über die Suche der Stiftung Deutsche Depressionshilfe. | ⬜ Entwurf |  | `depressionshilfe-suche`, `gesundbund-krisen` |
| `emergency.crisis.link` | Zur Suche (öffnet eine externe Seite) | ⬜ Entwurf |  |  |

## `end.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `end.title` | Kurzer Abschluss | ⬜ Entwurf |  |  |
| `end.compare` | Vorher: {pre} · Jetzt: {post} | ⬜ Entwurf |  |  |
| `end.neutral` | Egal, wie sich die Zahl verändert hat: Du hast aktiv etwas getan. | ⬜ Entwurf | Keine Wirksamkeitsaussage aus Vorher/Nachher (Konzept 10.2). |  |
| `end.higher` | Wenn die Angst stärker geworden ist oder du dir Sorgen machst, hol dir Unterstützung. | ⬜ Entwurf |  |  |
| `end.again` | Andere Übung ausprobieren | ⬜ Entwurf |  |  |
| `end.finish` | Beenden | ⬜ Entwurf |  |  |
| `end.followup` | Wenn Angstattacken öfter vorkommen, sprich mit deiner Hausarztpraxis oder einer psychotherapeutischen Praxis. | ⬜ Entwurf |  | `s3-angst-2021` |
| `end.cleared` | Deine Eingaben wurden nicht gespeichert und sind jetzt gelöscht. | ⬜ Entwurf |  |  |

## `grounding.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `grounding.title` | Im Raum ankommen | ⬜ Entwurf |  |  |
| `grounding.intro` | Lenk deine Aufmerksamkeit nach außen. Du musst nichts erzwingen. | ⬜ Entwurf |  |  |
| `grounding.choose` | Was möchtest du ausprobieren? | ⬜ Entwurf |  |  |
| `grounding.room.label` | Umgebung | ⬜ Entwurf |  |  |
| `grounding.room.steps` | 1. Schau dich langsam um. Such dir einen Gegenstand aus.<br>2. Beschreib ihn leise oder in Gedanken: Farbe, Form, Material.<br>3. Such dir einen zweiten Gegenstand. Was ist anders an ihm?<br>4. Finde drei Dinge in einer bestimmten Farbe, zum Beispiel Blau. | ⬜ Entwurf |  |  |
| `grounding.contact.label` | Kontaktpunkte | ⬜ Entwurf |  |  |
| `grounding.contact.steps` | 1. Spür deine Füße auf dem Boden. Drück sie leicht hinein.<br>2. Spür, wo dein Körper aufliegt: Stuhl, Sofa, Wand.<br>3. Leg die Hände auf deine Oberschenkel oder einen Tisch. Wie fühlt sich die Oberfläche an?<br>4. Bemerk die Temperatur der Luft auf deiner Haut. | ⬜ Entwurf | Prüfen: Kontaktpunkte lenken teils auf den Körper. Für Personen mit starkem Körperfokus evtl. ungeeignet – ggf. nicht als Standard anbieten. |  |
| `grounding.sound.label` | Geräusche | ⬜ Entwurf |  |  |
| `grounding.sound.steps` | 1. Hör hin: Welches Geräusch ist am lautesten?<br>2. Welches ist am leisesten?<br>3. Gibt es ein Geräusch, das du erst jetzt bemerkst? | ⬜ Entwurf |  |  |
| `grounding.54321.label` | 5-4-3-2-1 | ⬜ Entwurf |  |  |
| `grounding.54321.badge` | Verbreitete Übung, nicht speziell für Panikattacken geprüft | ⬜ Entwurf | Konzept 5.3: darf nicht als validierte Behandlung dargestellt werden. |  |
| `grounding.54321.steps` | 1. Nenne 5 Dinge, die du siehst.<br>2. Nenne 4 Dinge, die du fühlen kannst.<br>3. Nenne 3 Dinge, die du hörst.<br>4. Nenne 2 Dinge, die du riechst – oder die du magst.<br>5. Nenne 1 Sache, die du schmeckst – oder bemerk einen Atemzug. | ⬜ Entwurf |  |  |
| `grounding.done` | Du hast die Übung abgeschlossen. | ⬜ Entwurf |  |  |
| `grounding.orient.label` | Wo bin ich? | ⬜ Entwurf |  |  |
| `grounding.orient.steps` | 1. Sag dir leise, wo du gerade bist. Zum Beispiel: Ich sitze in meiner Küche.<br>2. Welcher Tag ist heute? Welche Tageszeit ungefähr?<br>3. Nenne drei Dinge, die dir zeigen, wo du bist: ein Möbelstück, ein Fenster, eine Tür.<br>4. Sag dir: Ich bin hier, und es ist jetzt. | ⬜ Entwurf | Konzept 5.3: Orientierung anhand konkreter Umgebungsmerkmale. Passt besonders bei Unwirklichkeitsgefühl (Derealisation); bitte prüfen. |  |
| `grounding.object.label` | Ein Gegenstand | ⬜ Entwurf |  |  |
| `grounding.object.steps` | 1. Nimm einen Gegenstand in die Hand oder schau dir einen genau an.<br>2. Welche Farbe hat er? Gibt es mehrere Farbtöne?<br>3. Wie fühlt er sich an: glatt, rau, warm, kalt?<br>4. Wie schwer ist er? Hat er einen Geruch?<br>5. Beschreib ihn so, als müsstest du ihn jemandem erklären, der ihn nie gesehen hat. | ⬜ Entwurf | Konzept 5.3: Beschreibung neutraler Gegenstände. |  |

## `learn.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `learn.title` | Angst verstehen | ⬜ Entwurf |  |  |
| `learn.intro` | Kurze Erklärungen – am besten in ruhigeren Momenten lesen. | ⬜ Entwurf |  |  |
| `learn.function.title` | Angst ist eine Schutzreaktion | ⬜ Entwurf |  |  |
| `learn.function.text` | Nimmt das Gehirn eine Gefahr wahr, bereitet sich der Körper auf Handeln vor: Das Herz schlägt schneller, die Atmung wird schneller, Muskeln spannen sich an. Das ist anstrengend und kann sehr unangenehm sein. | ⬜ Entwurf |  |  |
| `learn.cycle.title` | Der Angstkreislauf | ⬜ Entwurf |  |  |
| `learn.cycle.text` | Eine Körperempfindung wird bemerkt und als gefährlich gedeutet. Die Angst steigt, der Körper reagiert stärker – und das wirkt wie eine Bestätigung der Befürchtung. | ⬜ Entwurf |  | `clark1986` |
| `learn.cycle.steps` | 1. Körperempfindung<br>2. Deutung als Gefahr<br>3. Angst steigt<br>4. Körper reagiert stärker | ⬜ Entwurf |  | `clark1986` |
| `learn.cycle.loop` | wirkt wie Bestätigung | ⬜ Entwurf |  |  |
| `learn.feeling.title` | Gefühl ist nicht gleich Gefahr | ⬜ Entwurf |  |  |
| `learn.feeling.text` | Wie bedrohlich sich etwas anfühlt und wie gefährlich es tatsächlich ist, kann auseinanderfallen. Neue oder ungewohnte Beschwerden sollten trotzdem ärztlich abgeklärt werden. | ⬜ Entwurf | Konzept 2.2: keine pauschale Einordnung von Symptomen als harmlos. |  |
| `learn.avoid.title` | Vermeidung und Sicherheitsverhalten | ⬜ Entwurf |  |  |
| `learn.avoid.text` | Situationen zu meiden oder sich ständig abzusichern bringt kurzfristig Erleichterung. Langfristig kann es die Angst aufrechterhalten, weil man nicht erlebt, dass die Befürchtung ausbleibt. | ⬜ Entwurf |  | `clark1986` |
| `learn.help.title` | Hilfe finden | ⬜ Entwurf |  |  |
| `learn.help.text` | Bei wiederkehrenden Panikattacken gilt Psychotherapie, insbesondere kognitive Verhaltenstherapie, als gut untersuchte Behandlung. Termine in psychotherapeutischen Praxen vermittelt unter anderem der Terminservice der 116 117. | ⬜ Entwurf |  | `s3-angst-2021`, `nice-cg113`, `kbv-116117` |
| `learn.symptoms.link` | Körpersignale einzeln erklärt | ⬜ Entwurf |  |  |
| `learn.practice.title` | In Ruhe üben | ⬜ Entwurf |  |  |
| `learn.practice.text` | Übungen gelingen in einer akuten Situation leichter, wenn man sie vorher in Ruhe ausprobiert hat. Hier gibt es keine Einschätzung vorher und nachher. | ⬜ Entwurf | Begründung: Übung in angstfreien Phasen erleichtert die Anwendung unter Stress (Konzept 5.1 / Psychoedukation). Bitte Formulierung und Beleg prüfen. |  |
| `learn.practice.grounding` | Im Hier und Jetzt ankommen | ⬜ Entwurf |  |  |
| `learn.practice.breathing` | Ruhig atmen | ⬜ Entwurf |  |  |
| `learn.practice.reframe` | Gedanken prüfen | ⬜ Entwurf |  |  |
| `learn.practice.simple` | Ganz einfache Schritte | ⬜ Entwurf |  |  |
| `learn.practice.done` | Gut gemacht. Du kannst die Übung jederzeit wiederholen. | ⬜ Entwurf |  |  |

## `rating.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `rating.pre.title` | Wie stark ist deine Angst gerade? | ⬜ Entwurf |  |  |
| `rating.post.title` | Und wie stark ist sie jetzt? | ⬜ Entwurf |  |  |
| `rating.low` | 0 = keine Angst | ⬜ Entwurf |  |  |
| `rating.high` | 10 = stärkste vorstellbare | ⬜ Entwurf |  |  |
| `rating.hint` | Eine grobe Einschätzung reicht. Es gibt keine falsche Antwort. | ⬜ Entwurf | Skala 0–10 entspricht dem Messparameter aus Konzept 10.2 (subjektive Angstintensität). |  |

## `reframe.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `reframe.title` | Gedanken prüfen | ⬜ Entwurf |  |  |
| `reframe.intro` | Gedanken sind keine Tatsachen. Wir schauen uns deinen Gedanken kurz genauer an. | ⬜ Entwurf |  | `clark1986` |
| `reframe.thought.title` | Welcher Gedanke ist gerade am lautesten? | ⬜ Entwurf |  |  |
| `reframe.thought.options` | 1. Ich verliere gleich die Kontrolle.<br>2. Mit meinem Körper stimmt etwas Schlimmes nicht.<br>3. Ich werde ohnmächtig.<br>4. Ich drehe durch.<br>5. Das hört nie auf.<br>6. Alle merken, dass mit mir etwas nicht stimmt. | ⬜ Entwurf | Typische katastrophisierende Gedanken in Anlehnung an das Clark-Modell. Bitte Auswahl und Wortlaut prüfen. | `clark1986` |
| `reframe.thought.own` | Ein anderer Gedanke | ⬜ Entwurf |  |  |
| `reframe.thought.placeholder` | Mein Gedanke … | ⬜ Entwurf |  |  |
| `reframe.emotion.title` | Welches Gefühl gehört dazu? | ⬜ Entwurf |  |  |
| `reframe.emotion.options` | 1. Angst<br>2. Panik<br>3. Sorge<br>4. Anspannung<br>5. Scham<br>6. Hilflosigkeit | ⬜ Entwurf |  |  |
| `reframe.intensity.title` | Wie stark ist dieses Gefühl? (optional) | ⬜ Entwurf |  |  |
| `reframe.questions` | 1. Was genau befürchte ich, dass passiert?<br>2. Was spricht dafür?<br>3. Was spricht dagegen? Zum Beispiel: Hatte ich diesen Gedanken schon einmal? Was ist damals tatsächlich passiert?<br>4. Welche anderen Erklärungen sind möglich? Zum Beispiel: Könnte das, was ich spüre, auch zu einer starken Angstreaktion passen? | ⬜ Entwurf | Strukturierte Fragen aus Konzept 5.4. Frage 4 darf Körpersymptome nicht pauschal als harmlos darstellen – bitte Formulierung prüfen. |  |
| `reframe.questions.hint` | Du musst nichts aufschreiben. Nachdenken reicht. | ⬜ Entwurf |  |  |
| `reframe.alt.title` | Welche Sicht passt gerade besser? | ⬜ Entwurf |  |  |
| `reframe.alt.options` | 1. Ich nehme gerade eine starke Angstreaktion wahr. Das Gefühl ist sehr intensiv, aber es beweist nicht, dass meine Befürchtung eintritt.<br>2. Das ist ein Gedanke. Ein Gedanke ist noch kein Ereignis.<br>3. Ich muss das Gefühl nicht wegmachen. Ich kann es da sein lassen und trotzdem den nächsten Schritt tun. | ⬜ Entwurf | Ausgewogene statt positive Umformulierung (Konzept 5.4). Option 1 wörtlich aus dem Konzept. |  |
| `reframe.alt.own` | Eigene Formulierung | ⬜ Entwurf |  |  |
| `reframe.summary.title` | Deine Einordnung | ⬜ Entwurf |  |  |
| `reframe.summary.thought` | Dein Gedanke | ⬜ Entwurf |  |  |
| `reframe.summary.alt` | Eine ausgewogenere Sicht | ⬜ Entwurf |  |  |
| `reframe.summary.note` | Diese Sicht muss sich nicht sofort richtig anfühlen. | ⬜ Entwurf |  |  |

## `safety.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `safety.title` | Kurz vorab: Trifft etwas davon gerade zu? | ⬜ Entwurf |  |  |
| `safety.items` | 1. Die Beschwerden sind neu oder deutlich anders als bei früheren Angstzuständen.<br>2. Starke Brustschmerzen, schwere Atemnot, oder du hast das Gefühl, das Bewusstsein zu verlieren.<br>3. Du hast Gedanken, dir das Leben zu nehmen oder dir etwas anzutun. | ⬜ Entwurf | Bewusst nur eine Frage statt Symptom-Checkliste (wiederholtes Symptom-Prüfen kann als Sicherheitsverhalten wirken). Punkt 2 orientiert sich an den 112-Fällen auf 116117.de. Bitte prüfen: Auswahl, Wortlaut, ob 'unsicher' korrekt zum Hilfe-Bildschirm führt. | `116117-112` |
| `safety.yes` | Ja, etwas davon – oder ich bin unsicher | ⬜ Entwurf |  |  |
| `safety.no` | Nein, nichts davon | ⬜ Entwurf |  |  |
| `safety.hint` | Diese Frage ersetzt keine ärztliche Einschätzung. | ⬜ Entwurf |  |  |

## `settings.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `settings.title` | Darstellung | ⬜ Entwurf |  |  |
| `settings.lead` | Passe Schrift, Abstände, Bewegung und Farben an. Diese Auswahl wird nur auf diesem Gerät gespeichert, damit sie beim nächsten Öffnen gleich da ist. | ⬜ Entwurf |  |  |
| `settings.font` | Schriftgröße | ⬜ Entwurf |  |  |
| `settings.font.m` | Normal | ⬜ Entwurf |  |  |
| `settings.font.l` | Groß | ⬜ Entwurf |  |  |
| `settings.font.xl` | Sehr groß | ⬜ Entwurf |  |  |
| `settings.spacing` | Zeilenabstand | ⬜ Entwurf |  |  |
| `settings.spacing.normal` | Normal | ⬜ Entwurf |  |  |
| `settings.spacing.wide` | Weit | ⬜ Entwurf |  |  |
| `settings.motion` | Bewegung | ⬜ Entwurf |  |  |
| `settings.motion.system` | Wie im Gerät eingestellt | ⬜ Entwurf |  |  |
| `settings.motion.reduce` | Möglichst wenig Bewegung | ⬜ Entwurf |  |  |
| `settings.theme` | Farben | ⬜ Entwurf |  |  |
| `settings.theme.system` | Wie im Gerät eingestellt | ⬜ Entwurf |  |  |
| `settings.theme.mocha` | Dunkel | ⬜ Entwurf |  |  |
| `settings.theme.latte` | Hell | ⬜ Entwurf |  |  |
| `settings.reset` | Zurücksetzen und nichts speichern | ⬜ Entwurf |  |  |
| `settings.stored` | Gespeichert wird nur diese Darstellungsauswahl, keine Angaben zu dir oder deiner Angst. Mit „Zurücksetzen“ wird sie gelöscht. | ⬜ Entwurf |  |  |

## `simple.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `simple.steps` | 1. Du musst gerade nichts lösen.<br>2. Stell beide Füße auf den Boden. Spür, dass er dich trägt.<br>3. Das Gefühl ist gerade sehr stark. Gefühle verändern sich mit der Zeit – auch dieses.<br>4. Wenn du magst, probier eine Übung aus. Wenn nicht, ist das auch in Ordnung. | ⬜ Entwurf | Für den Fall 'Alles ist zu viel': möglichst wenig Text, eine Aussage pro Bildschirm. Satz 3 bitte prüfen (keine Aussage über Dauer). |  |

## `start.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `start.title` | Was brauchst du gerade? | ⬜ Entwurf |  |  |
| `start.acute` | Ich habe gerade starke Angst | ⬜ Entwurf |  |  |
| `start.learn` | Angst verstehen | ⬜ Entwurf |  |  |
| `start.learn.sub` | Für ruhigere Momente | ⬜ Entwurf |  |  |
| `start.about` | Über diese App und ihre Grenzen | ⬜ Entwurf |  |  |
| `start.note` | Alles hier ist freiwillig. Du kannst jederzeit aufhören. | ⬜ Entwurf |  |  |
| `start.settings` | Darstellung anpassen | ⬜ Entwurf |  |  |
| `start.update` | Eine neue Version ist verfügbar. | ⬜ Entwurf |  |  |
| `start.update.button` | Jetzt aktualisieren | ⬜ Entwurf |  |  |

## `symptoms.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `symptoms.title` | Körpersignale verstehen | ⬜ Entwurf |  |  |
| `symptoms.select.title` | Was spürst du gerade? | ⬜ Entwurf |  |  |
| `symptoms.select.hint` | Wähle alles, was passt. Wir gehen es dann einzeln durch. | ⬜ Entwurf |  |  |
| `symptoms.select.go` | Erklär es mir | ⬜ Entwurf |  |  |
| `symptoms.intro` | Was du spürst, ist echt. Du bildest es dir nicht ein. Dein Körper ist gerade im Alarmmodus, und jedes dieser Signale hat eine Erklärung. | ⬜ Entwurf | Kernbotschaft: Symptome validieren (echt, nicht eingebildet) und gleichzeitig entkatastrophisieren. Keine Aussage 'harmlos' (Konzept 2.2). | `clark1986`, `tunnell2024` |
| `symptoms.more` | Genauer erklärt | ⬜ Entwurf |  |  |
| `symptoms.less` | Weniger anzeigen | ⬜ Entwurf |  |  |
| `symptoms.what` | Was im Körper passiert | ⬜ Entwurf |  |  |
| `symptoms.why` | Warum es sich so bedrohlich anfühlt | ⬜ Entwurf |  |  |
| `symptoms.check` | Wann du Hilfe holen solltest | ⬜ Entwurf |  |  |
| `symptoms.progress` | Signal {n} von {total} | ⬜ Entwurf |  |  |
| `symptoms.ask.title` | Und deine Angst – wie ist sie jetzt? | ⬜ Entwurf | Wunsch des Projektinhabers: nach jedem Symptom kurz nachfragen. Bitte fachlich prüfen, ob die Frage den Fokus zu stark auf das Angstniveau lenkt. |  |
| `symptoms.ask.less` | Etwas weniger | ⬜ Entwurf |  |  |
| `symptoms.ask.same` | Ungefähr gleich | ⬜ Entwurf |  |  |
| `symptoms.ask.more` | Stärker | ⬜ Entwurf |  |  |
| `symptoms.ask.more.title` | Das kann passieren | ⬜ Entwurf |  |  |
| `symptoms.ask.more.text` | Wenn man genau auf den Körper achtet, wird die Angst manchmal erst einmal stärker. Du kannst weitermachen, deine Aufmerksamkeit nach außen lenken oder dir Hilfe holen. | ⬜ Entwurf | Bei 'stärker' wird kein Weiterbohren erzwungen; Ausweg über Grounding (Aufmerksamkeit nach außen) oder Hilfe. |  |
| `symptoms.ask.more.continue` | Weiter mit dem nächsten Signal | ⬜ Entwurf |  |  |
| `symptoms.ask.more.finish` | Weiter | ⬜ Entwurf |  |  |
| `symptoms.ask.more.ground` | Aufmerksamkeit nach außen lenken | ⬜ Entwurf |  |  |
| `symptoms.done.title` | Du hast deine Körpersignale eingeordnet | ⬜ Entwurf |  |  |
| `symptoms.done.text` | Sie sind echt, und sie haben eine Erklärung. Sie können eine Weile bleiben, auch wenn du sie verstehst. | ⬜ Entwurf |  |  |
| `symptoms.done.next` | Weiter | ⬜ Entwurf |  |  |
| `symptoms.done.ground` | Noch eine Übung: Im Raum ankommen | ⬜ Entwurf |  |  |
| `symptoms.learn.lead` | Was bei Angst im Körper passiert – Signal für Signal. | ⬜ Entwurf |  |  |
| `symptoms.alarm.title` | Das Alarmsystem | ⬜ Entwurf |  |  |
| `symptoms.alarm.text` | Nimmt das Gehirn eine Gefahr wahr, schütten Nerven und Nebennieren Adrenalin und Noradrenalin aus. Das Herz schlägt schneller, die Muskeln werden stärker durchblutet und spannen sich an, die Haut wird schlechter durchblutet, Schweißdrüsen werden aktiv, die Atmung beschleunigt sich. Der Körper macht sich bereit für Flucht oder Kampf – auch dann, wenn es nichts gibt, wovor man fliehen müsste. | ⬜ Entwurf |  | `davis2008`, `schlereth2009` |
| `symptoms.peak.title` | Eine Welle mit Höhepunkt | ⬜ Entwurf |  |  |
| `symptoms.peak.text` | Eine Panikattacke erreicht ihren Höhepunkt typischerweise innerhalb weniger Minuten. | ⬜ Entwurf | Bewusst keine Aussage zur Gesamtdauer, da diese stark variiert. | `tunnell2024` |
| `symptoms.blue.title` | Wie aus heiterem Himmel? | ⬜ Entwurf |  |  |
| `symptoms.blue.text` | Viele Attacken fühlen sich an, als kämen sie aus dem Nichts. In einer Messstudie zeigten sich aber schon bis zu 47 Minuten vorher Veränderungen bei Atmung und Herzschlag, die die Betroffenen nicht bemerkt hatten. Der Körper hat also einen Vorlauf – die Attacke ist kein zufälliger Ausfall. | ⬜ Entwurf | Kleine Stichprobe: 43 Patient:innen, 13 aufgezeichnete Attacken. Befund als vorläufig behandeln. | `meuret2011` |
| `symptoms.checking.title` | Ein Hinweis zum Nachschauen | ⬜ Entwurf |  |  |
| `symptoms.checking.text` | Diese Erklärungen sind zum Verstehen da. Wer in jeder Attacke immer wieder prüft, ob ein Symptom gefährlich ist, kann die Angst auf Dauer eher verstärken. Wenn dir das bekannt vorkommt, sprich es in einer Therapie an. | ⬜ Entwurf | Rückversicherung als Sicherheitsverhalten. Bitte prüfen, ob Hinweis so angemessen ist. | `clark1986`, `salkovskis1991`, `schenkel2021` |
| `symptoms.order` | 1. brust<br>2. atem<br>3. schwindel<br>4. kribbeln<br>5. herz<br>6. zittern<br>7. schwitzen<br>8. bauch<br>9. ohren<br>10. unwirklich | ⬜ Entwurf | Technische Reihenfolge (Schlüssel). Brustschmerz bewusst zuerst. Nur die Reihenfolge prüfen. |  |
| `symptoms.brust.label` | Druck oder Schmerz in der Brust | ⬜ Entwurf |  |  |
| `symptoms.brust.short` | Brustschmerz gehört zu den häufigsten Beschwerden bei Panikattacken. Schnelles Atmen kann selbst Druck und Schmerz in der Brust auslösen. | ⬜ Entwurf | Immer an erster Stelle, 112-Hinweis vor der Erklärung. Fleet 1996: 44 % der Panik-Patient:innen mit Brustschmerz in der Notaufnahme hatten eine dokumentierte KHK. | `tunnell2024`, `nardi2009`, `fleet1996`, `116117-112` |
| `symptoms.brust.what` | Brustschmerz gehört zu den häufigsten körperlichen Symptomen von Panikattacken. Schnelles, flaches Atmen kann selbst Brustschmerzen auslösen. | ⬜ Entwurf |  | `tunnell2024`, `nardi2009`, `fleet1996`, `116117-112` |
| `symptoms.brust.why` | Brustschmerz ist auch ein Warnzeichen für Herzerkrankungen. Deshalb ist die Angst davor verständlich – und deshalb ist dieser Punkt anders als die anderen. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.brust.check` | Bei starken Brustschmerzen oder wenn das für dich neu ist: ruf die 112, auch wenn du Panikattacken kennst. Angst und Herzerkrankung können gleichzeitig vorkommen – unterscheiden kann das nur eine Untersuchung. Wenn eine Ärztin oder ein Arzt deine Beschwerden schon als Teil der Angst eingeordnet hat, darfst du dich an diese Einordnung halten. | ⬜ Entwurf | Vollständiger Text nur unter 'Genauer erklärt' und im Lernbereich. Bitte prüfen, ob der Satz zu Herzerkrankung in der Akutphase eher beruhigt oder beunruhigt. | `fleet1996`, `116117-112` |
| `symptoms.atem.label` | Atemnot, zu wenig Luft | ⬜ Entwurf |  |  |
| `symptoms.atem.short` | Bei Angst atmen viele schneller oder tiefer, als der Körper gerade braucht – oft ohne es zu merken. Das Gefühl, nicht genug Luft zu bekommen, kann dabei trotzdem sehr stark sein. Du musst nicht extra tief einatmen. | ⬜ Entwurf | Theorie des Erstickungs-Fehlalarms (Klein) ist nicht gesichert und als 'diskutiert' formuliert. | `tunnell2024`, `kyriakoulis2023`, `nardi2009`, `116117-112`, `freire2009` |
| `symptoms.atem.what` | Die genaue Ursache ist nicht geklärt. Zwei Erklärungen werden diskutiert: Viele Menschen atmen bei Angst schneller oder tiefer, als der Körper braucht (Hyperventilation). Oder ein empfindliches inneres Erstickungs-Alarmsystem schlägt an, obwohl genug Sauerstoff da ist. | ⬜ Entwurf |  | `tunnell2024`, `kyriakoulis2023`, `nardi2009`, `116117-112`, `freire2009` |
| `symptoms.atem.why` | Atemnot gehört zu den beängstigendsten Gefühlen überhaupt. Wer glaubt zu ersticken, versucht oft, noch mehr Luft zu holen – das kann die Beschwerden verstärken. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.atem.check` | Schwere Atemnot: 112. Asthma und andere Lungenerkrankungen können ähnliche Beschwerden machen. Ist die Atemnot neu oder anders als sonst, lass sie ärztlich abklären. | ⬜ Entwurf |  | `116117-112` |
| `symptoms.schwindel.label` | Schwindel, Benommenheit | ⬜ Entwurf |  |  |
| `symptoms.schwindel.short` | Schnelles Atmen senkt den CO₂-Gehalt im Blut. Dann ziehen sich Blutgefäße im Gehirn leicht zusammen – das fühlt sich an wie Schwindel oder Leere im Kopf. Bei Panik steigt der Blutdruck eher an; tatsächlich ohnmächtig werden Menschen dabei selten. | ⬜ Entwurf | Hinweis: Bei Hyperventilation wurde in Messungen echter Attacken nicht immer ein CO₂-Abfall gefunden; Mechanismus erklärt Symptome teilweise. | `kyriakoulis2023`, `tunnell2024`, `ritz2010`, `schlaganfall-hilfe` |
| `symptoms.schwindel.what` | Schnelles Atmen senkt den CO₂-Gehalt im Blut, und Blutgefäße im Gehirn ziehen sich leicht zusammen. Das kann Schwindel, Benommenheit und ein Gefühl von Leere im Kopf auslösen. Ohnmacht entsteht dagegen meist durch einen Abfall des Blutdrucks. Bei Panik steigen Herzschlag und Blutdruck eher an. Viele Menschen mit Panik kennen das Gefühl, gleich umzukippen – tatsächlich ohnmächtig werden sie selten. Eine Ausnahme ist die Angst vor Blut, Spritzen oder Verletzungen: Dort kann der Blutdruck nach einem ersten Anstieg absinken, und Ohnmacht kommt häufiger vor. | ⬜ Entwurf |  | `kyriakoulis2023`, `tunnell2024`, `ritz2010`, `schlaganfall-hilfe` |
| `symptoms.schwindel.why` | Schwindel fühlt sich an wie Kontrollverlust. Die Angst, gleich umzufallen, verstärkt dann die Anspannung. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.schwindel.check` | Kommt plötzlich etwas dazu – eine Körperseite wird schwach, ein Mundwinkel hängt, du kannst nicht richtig sprechen oder sehen: sofort 112. Ärztlich abklären lassen, wenn Schwindel auch ohne Angst auftritt oder du tatsächlich ohnmächtig wirst. | ⬜ Entwurf | Formulierung nach Safety-Netting-Prinzipien: konkrete Zeichen + konkrete Handlung, keine Krankheitsnamen in der Akutphase, Abgrenzung über 'zusätzlich' bzw. 'neu/anders als sonst'. Krankheitsname nur im Lernbereich (checknote). Bitte fachlich prüfen. | `schlaganfall-hilfe` |
| `symptoms.kribbeln.label` | Kribbeln oder Taubheit | ⬜ Entwurf |  |  |
| `symptoms.kribbeln.short` | Wenn durch schnelles Atmen CO₂ im Blut fehlt, werden Nerven reizbarer. Das zeigt sich oft als Kribbeln oder Taubheit in Händen, Füßen oder um den Mund. | ⬜ Entwurf |  | `kyriakoulis2023`, `tunnell2024`, `schlaganfall-hilfe` |
| `symptoms.kribbeln.what` | Schnelles Atmen senkt den CO₂-Gehalt im Blut, das Blut wird leicht basisch. Nerven werden dadurch reizbarer. Das kann Kribbeln, Taubheit oder steife Finger auslösen, typischerweise in Händen, Füßen und um den Mund. | ⬜ Entwurf |  | `kyriakoulis2023`, `tunnell2024`, `schlaganfall-hilfe` |
| `symptoms.kribbeln.why` | Kribbeln und Taubheit erinnern an Schlaganfall oder Nervenerkrankungen. Das macht sie besonders beängstigend. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.kribbeln.check` | Betrifft es plötzlich nur eine Körperseite, wird ein Arm oder Bein schwach, hängt ein Mundwinkel oder fällt das Sprechen schwer: sofort 112, auch wenn es wieder weggeht. | ⬜ Entwurf | Formulierung nach Safety-Netting-Prinzipien: konkrete Zeichen + konkrete Handlung, keine Krankheitsnamen in der Akutphase, Abgrenzung über 'zusätzlich' bzw. 'neu/anders als sonst'. Krankheitsname nur im Lernbereich (checknote). Bitte fachlich prüfen. | `schlaganfall-hilfe` |
| `symptoms.herz.label` | Herzrasen oder Herzklopfen | ⬜ Entwurf |  |  |
| `symptoms.herz.short` | Bei Angst schüttet dein Körper Adrenalin aus. Es lässt dein Herz schneller und kräftiger schlagen, damit die Muskeln mehr Blut bekommen – dein Körper macht sich bereit zum Weglaufen. | ⬜ Entwurf | Studien mit kleinen Stichproben (Taylor 1986: 33 Attacken; Shear 1987: 23 Patient:innen). | `davis2008`, `taylor1986`, `shear1987`, `clark1986`, `116117-112` |
| `symptoms.herz.what` | Adrenalin lässt das Herz schneller und kräftiger schlagen. In Langzeit-EKG-Messungen während Panikattacken zeigte sich meist ein beschleunigter, regelmäßiger Herzschlag. Wenn es dabei stolperte, waren das meist einzelne Extraschläge. | ⬜ Entwurf |  | `davis2008`, `taylor1986`, `shear1987`, `clark1986`, `116117-112` |
| `symptoms.herz.why` | Bei Angst achtet man stärker auf den eigenen Herzschlag. Ein kräftiges Klopfen wird dann schnell als Zeichen für einen Herzinfarkt gedeutet – und diese Angst treibt das Herz weiter an. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.herz.check` | Ärztlich abklären lassen, wenn Herzrasen für dich neu ist oder sich anders anfühlt als sonst. Bei Ohnmacht oder starken Brustschmerzen: 112. | ⬜ Entwurf |  | `116117-112` |
| `symptoms.zittern.label` | Zittern, weiche Knie | ⬜ Entwurf |  |  |
| `symptoms.zittern.short` | Jeder Mensch hat ein feines, unsichtbares Muskelzittern. Adrenalin verstärkt es direkt in den Muskeln – deshalb zittern Hände und Knie bei Angst. Das ist ein Zeichen für Alarm, nicht für Schwäche. | ⬜ Entwurf | Muskelanspannung als Bewegungsbereitschaft: Trainingswissen, bitte prüfen. | `davis2008`, `baker2012` |
| `symptoms.zittern.what` | Jeder Mensch hat ein feines, normalerweise nicht sichtbares Zittern der Muskeln. Adrenalin verstärkt es über Rezeptoren in den Muskeln selbst. Deshalb zittern Hände und Knie bei Angst sichtbar. Gleichzeitig spannen sich Muskeln an, um für Bewegung bereit zu sein. | ⬜ Entwurf |  | `davis2008`, `baker2012` |
| `symptoms.zittern.why` | Sichtbares Zittern fühlt sich an, als würde der Körper versagen. Tatsächlich zeigt es, dass er gerade auf Hochtouren läuft. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.zittern.check` | Ärztlich abklären lassen, wenn du auch ohne Angst oder Aufregung zitterst. | ⬜ Entwurf |  |  |
| `symptoms.schwitzen.label` | Schwitzen, Hitze oder Kälte | ⬜ Entwurf |  |  |
| `symptoms.schwitzen.short` | Bei Stress aktiviert dein Nervensystem die Schweißdrüsen, vor allem an Händen, Füßen, Gesicht und Achseln. Gleichzeitig wird die Haut schlechter durchblutet – deshalb können die Hände kalt sein, während du schwitzt. | ⬜ Entwurf |  | `sweating2013`, `schlereth2009`, `fischer2021` |
| `symptoms.schwitzen.what` | Bei Stress aktiviert das Nervensystem Schweißdrüsen vor allem an Handflächen, Fußsohlen, Gesicht und Achseln. Gleichzeitig ziehen sich Blutgefäße in der Haut zusammen. Deshalb können sich Hitze, Schwitzen und kalte Hände gleichzeitig zeigen. | ⬜ Entwurf |  | `sweating2013`, `schlereth2009`, `fischer2021` |
| `symptoms.schwitzen.why` | Schwitzen und Erröten sind von außen sichtbar. Viele fürchten, dass andere es merken – das verstärkt die Anspannung zusätzlich. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.schwitzen.check` | Ärztlich abklären lassen, wenn du ohne Anlass stark schwitzt, etwa nachts oder mit Fieber. | ⬜ Entwurf |  |  |
| `symptoms.bauch.label` | Übelkeit, Bauchgrummeln | ⬜ Entwurf |  |  |
| `symptoms.bauch.short` | Gehirn und Darm sind eng verbunden, und Angst wirkt sich direkt auf den Bauch aus. Übelkeit bei einer Panikattacke erreicht meist innerhalb von Minuten ihren Höhepunkt. | ⬜ Entwurf | 'Gehirn und Darm eng verbunden' bewusst allgemein; Mechanismus laut Review ungeklärt. | `tunnell2024`, `116117-112` |
| `symptoms.bauch.what` | Wie genau Angst Magen-Darm-Beschwerden auslöst, ist noch nicht vollständig geklärt. Diskutiert wird die enge Verbindung zwischen Gehirn und Darm. Bei Panik kommen Übelkeit und Bauchbeschwerden meist plötzlich, erreichen innerhalb von Minuten ihren Höhepunkt und hängen nicht vom Essen ab. | ⬜ Entwurf |  | `tunnell2024`, `116117-112` |
| `symptoms.bauch.why` | Übelkeit weckt die Angst, sich übergeben zu müssen, besonders unterwegs oder unter Menschen. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.bauch.check` | Bei starken oder anhaltenden Bauchschmerzen ärztlich abklären lassen, außerhalb der Sprechzeiten über die 116 117. | ⬜ Entwurf |  | `116117-112` |
| `symptoms.unwirklich.label` | Alles wirkt unwirklich | ⬜ Entwurf |  |  |
| `symptoms.unwirklich.short` | Wenn alles unwirklich oder fern wirkt, nennen Fachleute das Derealisation oder Depersonalisation. Das ist bei Panikattacken häufig. Du merkst, dass sich nur dein Gefühl verändert hat, nicht die Welt. | ⬜ Entwurf | Häufigkeit in Studien sehr unterschiedlich (7,8–82,6 %, je nach Stichprobe). Aussage 'du merkst, dass sich nur das Gefühl verändert hat' beruht auf der Definition (erhaltene Realitätsprüfung). | `mendoza2011`, `french2022`, `sierra2011` |
| `symptoms.unwirklich.what` | Bei Derealisation wirkt die Umgebung unwirklich, wie hinter Glas. Bei Depersonalisation fühlt man sich von sich selbst getrennt. Beides kommt bei Panikattacken häufig vor und tritt kurzzeitig auch bei vielen Menschen ohne Angststörung auf, etwa bei starkem Stress oder Müdigkeit. Als Erklärung wird diskutiert, dass das Gehirn bei Überlastung die gefühlsmäßige Verarbeitung herunterregelt. Wichtig: Wer das erlebt, weiß dabei, dass sich nur das Gefühl verändert hat, nicht die Welt. | ⬜ Entwurf |  | `mendoza2011`, `french2022`, `sierra2011` |
| `symptoms.unwirklich.why` | Weil es so fremd ist, deuten viele es als Zeichen, verrückt zu werden. Diese Deutung verstärkt die Angst – und mehr Angst verstärkt das Gefühl der Unwirklichkeit. | ⬜ Entwurf |  | `french2022` |
| `symptoms.unwirklich.check` | Hält das Gefühl auch ohne Angst über längere Zeit an oder tritt es nach Drogen oder Medikamenten auf, sprich mit einer Ärztin, einem Arzt oder einer psychotherapeutischen Praxis. | ⬜ Entwurf |  |  |
| `symptoms.brust.alert` | Bei starken Brustschmerzen oder wenn das für dich neu ist: ruf die 112, auch wenn du Panikattacken kennst. | ⬜ Entwurf | Kurzfassung des Warnhinweises für die Akutkarte; vollständiger Text in symptoms.brust.check (unter 'Genauer erklärt'). | `116117-112`, `fleet1996` |
| `symptoms.schwindel.checknote` | Diese Zeichen können auf einen Schlaganfall hinweisen. Sie unterscheiden sich von angstbedingten Beschwerden dadurch, dass sie meist nur eine Körperseite betreffen und mit Ausfällen wie Lähmung oder Sprachstörung einhergehen. | ⬜ Entwurf | Nur im Lernbereich sichtbar, nicht in der Akutkarte. | `schlaganfall-hilfe` |
| `symptoms.kribbeln.checknote` | Diese Zeichen können auf einen Schlaganfall hinweisen. Sie unterscheiden sich von angstbedingten Beschwerden dadurch, dass sie meist nur eine Körperseite betreffen und mit Ausfällen wie Lähmung oder Sprachstörung einhergehen. | ⬜ Entwurf | Nur im Lernbereich sichtbar, nicht in der Akutkarte. | `schlaganfall-hilfe` |
| `symptoms.calmfirst.title` | Am besten vorher lesen | ⬜ Entwurf |  |  |
| `symptoms.calmfirst.text` | Erklärungen zu Körpersignalen wirken am besten, wenn man sie in einem ruhigen Moment schon einmal gelesen hat. In einer Attacke erinnern sie dann an etwas Bekanntes. | ⬜ Entwurf | Belege für Psychoeducation stammen aus Anwendung in ruhigem Zustand; für Anwendung während einer Attacke gibt es keine Studien. | `norr2017`, `gallagher2013` |
| `symptoms.ohren.label` | Rauschen oder Druck in den Ohren | ⬜ Entwurf |  |  |
| `symptoms.ohren.short` | Ohrensausen oder Rauschen kann bei Angst auftreten, besonders wenn man schnell atmet. Wenn die Angst nachlässt, wird es oft leiser. | ⬜ Entwurf | Schwache Datenlage: Ohrensausen ist in einem Review als Folge akuter Hyperventilation genannt; Studien zu Ohrgeräuschen während Panikattacken fehlen. Satz 2 ist Trainingswissen und bitte zu prüfen. | `nardi2009`, `invirto-ifu` |
| `symptoms.ohren.what` | Schnelles Atmen kann neben Schwindel und Kribbeln auch Ohrensausen auslösen. Außerdem achtet man bei Angst stärker auf Körpergeräusche, die sonst untergehen – auch auf den eigenen Puls im Ohr. Für Ohrgeräusche während einer Panikattacke gibt es bisher kaum Studien. | ⬜ Entwurf | 'Stärkere Aufmerksamkeit auf Körpergeräusche' in Anlehnung an erhöhte Interozeption bei Angst; bitte prüfen. | `nardi2009`, `tunnell2024` |
| `symptoms.ohren.why` | Ein plötzliches Geräusch im Ohr wirkt fremd und schwer einzuordnen. Viele fürchten, dass etwas im Kopf nicht stimmt. | ⬜ Entwurf |  | `clark1986` |
| `symptoms.ohren.check` | Ärztlich abklären lassen, wenn du plötzlich auf einem Ohr schlechter hörst, starker Drehschwindel dazukommt oder das Ohrgeräusch auch ohne Angst bleibt. | ⬜ Entwurf | Trainingswissen (Hörsturz, Morbus Menière als Differenzialdiagnose). Fachquelle (HNO-Leitlinie) ergänzen. |  |

## `ui.json`

| ID | Text | Status | Hinweis | Quellen |
|---|---|---|---|---|
| `app.name` | ANXIETY.OS | ⬜ Entwurf |  |  |
| `draft.banner` | ENTWURF – NICHT FACHLICH GEPRÜFT | ⬜ Entwurf |  |  |
| `draft.sub` | Kein Ersatz für ärztliche oder psychotherapeutische Hilfe. | ⬜ Entwurf |  |  |
| `nav.back` | Zurück | ⬜ Entwurf |  |  |
| `nav.exit` | Beenden | ⬜ Entwurf |  |  |
| `nav.next` | Weiter | ⬜ Entwurf |  |  |
| `nav.skip` | Überspringen | ⬜ Entwurf |  |  |
| `nav.done` | Fertig | ⬜ Entwurf |  |  |
| `emergency.bar` | Hilfe & Notrufnummern | ⬜ Entwurf | Bewusst neutral gestaltet (keine rote Fläche, dezente Größe), um bei bestehender Angst keine zusätzliche Alarmwirkung zu erzeugen. Bitte prüfen: Ist der Zugang so noch ausreichend auffindbar? |  |
| `input.private` | Wird nicht gespeichert. | ⬜ Entwurf |  |  |
| `a11y.step` | Schritt {n} von {total} | ⬜ Entwurf |  |  |
| `a11y.scale` | Skala von 0 bis 10 | ⬜ Entwurf |  |  |
| `a11y.emergency` | Notfall | ⬜ Entwurf |  |  |

## Quellen (`src/content/references.json`)

| ID | Zitation | Link | Link geprüft | Status |
|---|---|---|---|---|
| `clark1986` | Clark, D. M. (1986). A cognitive approach to panic. Behaviour Research and Therapy, 24(4), 461–470. | https://doi.org/10.1016/0005-7967(86)90011-2 | 2026-11-04 | ⬜ Entwurf |
| `who-mhgap-2023` | World Health Organization (2023). Mental Health Gap Action Programme (mhGAP) guideline for mental, neurological and substance use disorders (3rd ed.). | https://www.who.int/publications/i/item/9789240084278 | 2026-11-04 | ⬜ Entwurf |
| `who-selfhelp-2026` | World Health Organization (2026). Psychological self-help interventions: delivering self-help for individuals, featuring Step-by-Step and Doing What Matters in Times of Stress. | https://www.who.int/publications/i/item/9789240120785 | 2026-11-04 | ⬜ Entwurf |
| `nice-cg113` | NICE (2011, zuletzt aktualisiert 2019). Generalised anxiety disorder and panic disorder in adults: management (CG113). | https://www.nice.org.uk/guidance/cg113 | 2026-11-04 | ⬜ Entwurf |
| `guth2023` | Guth, M., Wiebe, A., Philipsen, A. (2023). Digitale Gesundheitsanwendungen mit psychotherapeutischem Fokus. Der Nervenarzt, 94(3), 250–261. | https://doi.org/10.1007/s00115-023-01446-y | 2026-11-04 | ⬜ Entwurf |
| `s3-angst-2021` | Bandelow, B. et al. (2021). The German Guidelines for the treatment of anxiety disorders: first revision. Eur Arch Psychiatry Clin Neurosci. | https://pmc.ncbi.nlm.nih.gov/articles/PMC8490968/ | 2026-11-04 | ⬜ Entwurf |
| `116117-112` | Kassenärztliche Bundesvereinigung: 116117 oder 112? (116117.de) | https://www.116117.de/de/aerztlicher-bereitschaftsdienst.php | 2026-11-04 | ⬜ Entwurf |
| `kbv-116117` | Kassenärztliche Bundesvereinigung: Der Patientenservice 116117. | https://www.kbv.de/positionen/dossiers/notfallversorgung/patientenservice-116117 | 2026-11-04 | ⬜ Entwurf |
| `telefonseelsorge` | TelefonSeelsorge Deutschland e. V. | https://www.telefonseelsorge.de/telefon/ | 2026-11-04 | ⬜ Entwurf |
| `tunnell2024` | Tunnell, N. C., Corner, S. E., Roque, A. D., Kroll, J. L., Ritz, T., Meuret, A. E. (2024). Biobehavioral approach to distinguishing panic symptoms from medical illness. Frontiers in Psychiatry, 15. [Narratives Review] | https://doi.org/10.3389/fpsyt.2024.1296569 | 2026-11-04 | ⬜ Entwurf |
| `kyriakoulis2023` | Kyriakoulis, P., Kyrios, M. (2023). Biological and cognitive theories explaining panic disorder: A narrative review. Frontiers in Psychiatry, 14, 957515. [Narratives Review] | https://doi.org/10.3389/fpsyt.2023.957515 | 2026-11-04 | ⬜ Entwurf |
| `freire2009` | Sardinha, A., Freire, R. C. R., Zin, W. A., Nardi, A. E. (2009). Respiratory manifestations of panic disorder: causes, consequences and therapeutic implications. Jornal Brasileiro de Pneumologia, 35(7), 698–708. | https://doi.org/10.1590/S1806-37132009000700012 | 2026-11-04 | ⬜ Entwurf |
| `ritz2010` | Ritz, T., Meuret, A. E., Ayala, E. S. (2010). The psychophysiology of blood-injection-injury phobia: Looking beyond the diphasic response paradigm. International Journal of Psychophysiology, 78(1), 50–67. | https://doi.org/10.1016/j.ijpsycho.2010.05.007 | 2026-11-04 | ⬜ Entwurf |
| `taylor1986` | Taylor, C. B. et al. (1986). Ambulatory heart rate changes in patients with panic attacks. American Journal of Psychiatry, 143(4), 478–482. | https://doi.org/10.1176/ajp.143.4.478 | 2026-11-04 | ⬜ Entwurf |
| `shear1987` | Shear, M. K. et al. (1987). Cardiac rate and rhythm in panic patients. American Journal of Psychiatry, 144(5), 633–637. | https://doi.org/10.1176/ajp.144.5.633 | 2026-11-04 | ⬜ Entwurf |
| `fleet1996` | Fleet, R. P. et al. (1996). Panic disorder in emergency department chest pain patients: prevalence, comorbidity, suicidal ideation, and physician recognition. PubMed 8873507. | https://pubmed.ncbi.nlm.nih.gov/8873507/ | 2026-11-04 | ⬜ Entwurf |
| `meuret2011` | Meuret, A. E. et al. (2011). Do unexpected panic attacks occur spontaneously? Biological Psychiatry. PubMed 21783179. | https://pubmed.ncbi.nlm.nih.gov/21783179/ | 2026-11-04 | ⬜ Entwurf |
| `mendoza2011` | Mendoza, L. et al. (2011). Depersonalization and personality in panic disorder. Comprehensive Psychiatry, 52(4), 413–419. | https://doi.org/10.1016/j.comppsych.2010.09.002 | 2026-11-04 | ⬜ Entwurf |
| `french2022` | French, N. J., Eberle, J. W., Teachman, B. A. (2022). Anxiety sensitivity, distress intolerance, and negative interpretation bias strengthen the relationship between trait anxiety and depersonalization. Anxiety, Stress, & Coping, 35(4), 395–408. | https://doi.org/10.1080/10615806.2021.1977797 | 2026-11-04 | ⬜ Entwurf |
| `sierra2011` | Sierra, M. et al. (2012). Depersonalization disorder and anxiety: A special relationship? Psychiatry Research. [Link geprüft, bibliografische Details bitte verifizieren] | https://www.sciencedirect.com/science/article/abs/pii/S0165178111008018 | 2026-11-04 | ⬜ Entwurf |
| `sweating2013` | Psychological sweating: a systematic review focused on aetiology and cutaneous response (2013). Skin Pharmacology and Physiology, 26(2), 92–100. [Systematisches Review] | https://doi.org/10.1159/000346930 | 2026-11-04 | ⬜ Entwurf |
| `fischer2021` | Fischer, S., Haas, F., Strahler, J. (2021). A systematic review of thermosensation and thermoregulation in anxiety disorders. Frontiers in Physiology, 12, 784943. [Systematisches Review] | https://doi.org/10.3389/fphys.2021.784943 | 2026-11-04 | ⬜ Entwurf |
| `schlereth2009` | Schlereth, T., Dieterich, M., Birklein, F. (2009). Hyperhidrosis – causes and treatment of enhanced sweating. Deutsches Ärzteblatt International, 106(3), 32–37. | https://doi.org/10.3238/arztebl.2009.0032 | 2026-11-04 | ⬜ Entwurf |
| `davis2008` | The rush to adrenaline: drugs in sport acting on the β-adrenergic system (2008). British Journal of Pharmacology. [Review; Autor:innen bitte verifizieren] | https://pmc.ncbi.nlm.nih.gov/articles/PMC2439523/ | 2026-11-04 | ⬜ Entwurf |
| `baker2012` | Beta-adrenergic modulation of tremor and corticomuscular coherence in humans (2012). PLoS ONE. [Autor:innen bitte verifizieren] | https://pmc.ncbi.nlm.nih.gov/articles/PMC3502512/ | 2026-11-04 | ⬜ Entwurf |
| `schlaganfall-hilfe` | Stiftung Deutsche Schlaganfall-Hilfe: Schlaganfall-Symptome und FAST-Test. [Fachquelle] | https://www.schlaganfall-hilfe.de/de/verstehen-vermeiden/schlaganfall-erkennen/fast-test | 2026-11-04 | ⬜ Entwurf |
| `norr2017` | Norr, A. M. et al. (2017). Is computerized psychoeducation sufficient to reduce anxiety sensitivity in an at-risk sample?: A randomized trial. Journal of Affective Disorders. [RCT, N = 54, nicht-klinische Stichprobe] | https://doi.org/10.1016/j.jad.2017.01.032 | 2026-11-04 | ⬜ Entwurf |
| `gallagher2013` | Mechanisms of change in cognitive behavioral therapy for panic disorder: The unique effects of self-efficacy and anxiety sensitivity (2013). [Autor:innen bitte verifizieren] | https://pmc.ncbi.nlm.nih.gov/articles/PMC3866809/ | 2026-11-04 | ⬜ Entwurf |
| `schenkel2021` | Schenkel, S. K., Jungmann, S. M., Gropalis, M., Witthöft, M. (2021). Conceptualizations of cyberchondria and relations to the anxiety spectrum: Systematic review and meta-analysis. Journal of Medical Internet Research, 23(11), e27835. | https://doi.org/10.2196/27835 | 2026-11-04 | ⬜ Entwurf |
| `jones2019` | Jones, D. et al. (2019). Safety netting for primary care: evidence from a literature review. British Journal of General Practice, 69, e70–e79. | https://doi.org/10.3399/bjgp18X700193 | 2026-11-04 | ⬜ Entwurf |
| `salkovskis1991` | Salkovskis, P. M. (1991). The importance of behaviour in the maintenance of anxiety and panic: A cognitive account. Behavioural Psychotherapy, 19, 6–19. | https://www.cambridge.org/core/journals/behavioural-and-cognitive-psychotherapy/article/abs/importance-of-behaviour-in-the-maintenance-of-anxiety-and-panic-a-cognitive-account/B3BAA0EFEF179C99BBCA5F983B05A534 | 2026-11-04 | ⬜ Entwurf |
| `nardi2009` | Nardi, A. E., Freire, R. C., Zin, W. A. (2009). Panic disorder and control of breathing. Respiratory Physiology & Neurobiology, 167(1), 133–143. [Review] | https://www.sciencedirect.com/science/article/abs/pii/S1569904808001997 | 2026-11-04 | ⬜ Entwurf |
| `invirto-ifu` | Sympatient GmbH: Invirto – Die Therapie gegen Angst, Gebrauchsanweisung. [Primärquelle, kein Peer-Review] | https://eifu.invirto.de/anxiety/therapy/de | 2026-11-04 | ⬜ Entwurf |
| `krisendienste-bayern` | Krisendienste Bayern (Bayerischer Bezirketag). [Primärquelle] | https://krisendienste.bayern/faq-fragen-und-antworten/ | 2026-11-04 | ⬜ Entwurf |
| `berliner-krisendienst` | Berliner Krisendienst: Die Standorte und ihre Telefonnummern. [Primärquelle] | https://www.berliner-krisendienst.de/ich-brauche-hilfe/ | 2026-11-04 | ⬜ Entwurf |
| `depressionshilfe-suche` | Stiftung Deutsche Depressionshilfe und Suizidprävention: Beratungsstellen und Krisendienste (Suche). | https://www.deutsche-depressionshilfe.de/depression-infos-und-hilfe/wo-finde-ich-hilfe/krisendienste-und-beratungsstellen | 2026-11-04 | ⬜ Entwurf |
| `gesundbund-krisen` | gesund.bund.de (Bundesministerium für Gesundheit): Anlaufstellen bei psychischen Krisen. | https://gesund.bund.de/wege-im-gesundheitswesen/erwachsenenleben/notfaelle/psychische-krisen | 2026-11-04 | ⬜ Entwurf |
