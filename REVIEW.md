# Fachliche Prüfliste – ANXIETY.OS

> Diese Datei wird automatisch aus `src/content/` erzeugt (`npm run review`). Nicht von Hand bearbeiten.

**Stand:** 0 von 133 Einträgen freigegeben · 133 Entwurf · 0 Änderung nötig

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
| `about.privacy` | 1. Keine Registrierung, kein Tracking, keine Cookies, keine Drittanbieter.<br>2. Deine Eingaben bleiben nur im Arbeitsspeicher dieses Browser-Tabs und werden beim Beenden gelöscht.<br>3. Beim Laden der Seite entstehen beim Hosting-Anbieter technische Zugriffsdaten (z. B. IP-Adresse). | ⬜ Entwurf | Letzten Punkt an den tatsächlichen Hoster anpassen, sobald feststeht. |  |
| `about.progress` | Fachlich freigegeben: {approved} von {total} Einträgen. | ⬜ Entwurf |  |  |
| `about.offline` | Nach dem ersten Laden funktioniert die App auch ohne Internet. | ⬜ Entwurf |  |  |
| `about.sources.title` | Fachliche Grundlagen | ⬜ Entwurf |  |  |

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
| `choose.body` | Ich bin ganz auf meinen Körper fixiert | ⬜ Entwurf |  |  |
| `choose.breath` | Mein Atem fühlt sich unruhig an | ⬜ Entwurf |  |  |
| `choose.overwhelm` | Alles ist zu viel | ⬜ Entwurf |  |  |
| `choose.hint` | Du kannst danach jederzeit etwas anderes ausprobieren. | ⬜ Entwurf | Zuordnung nach Konzept 6.1: Gedanken → Neubewertung, Körperfokus → Grounding, Atem → Atemhilfe, Überforderung → einfache Handlungsanweisung. Keine diagnostische Ableitung. |  |
| `choose.other` | Alle Übungen anzeigen | ⬜ Entwurf |  |  |
| `choose.all.title` | Welche Übung möchtest du? | ⬜ Entwurf |  |  |
| `choose.ex.reframe` | Gedanken prüfen | ⬜ Entwurf |  |  |
| `choose.ex.grounding` | Im Raum ankommen | ⬜ Entwurf |  |  |
| `choose.ex.breathing` | Sanfte Atemhilfe | ⬜ Entwurf |  |  |
| `choose.ex.simple` | Ein einfacher Schritt | ⬜ Entwurf |  |  |

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
| `emergency.bar` | Notfall – Hilfe rufen | ⬜ Entwurf |  |  |
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
