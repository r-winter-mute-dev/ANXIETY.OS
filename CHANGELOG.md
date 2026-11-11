# Changelog

Alle Inhalte sind weiterhin **Entwurf – nicht fachlich geprüft**. Versionsnummern nach [SemVer](https://semver.org/lang/de/); vor 1.0 kann sich alles ändern.

## [Unveröffentlicht]

### Umbau: ein ruhiger Ort
- **Die Reise:** „Komm mit“ führt in vier Stationen zu einem ruhigen Ort (Insel, Brücke aus Glas, stille Stadt, Kristallbaum) und endet bei „Was ist gerade da?“. Inspiriert von einem Text des Projektinhabers, ohne Bilder von Leere und Schrecken.
- **Eigene Grafiken für die Szene:** Insel, Stadt, Kristallbaum, Licht in den Rissen, Brücke mit Büchern und Himmel als einzelne Ebenen des Projektinhabers, je in einer dunklen und einer hellen Fassung. Die Dateien werden zur Build-Zeit eingebunden (`src/assets/scene/`) und laufen offline mit. Das Licht im Baum atmet langsam, Nebelbänder ziehen kaum merklich.
- **Animierte Szene** im Hintergrund: schwebt sanft, Sterne schimmern langsam, Lichter steigen vom Baum auf. Sie rückt mit dem Fortschritt näher, nach einer Übung leuchtet der Baum am wärmsten. Alles langsam, ohne Blinken, abschaltbar über „Bewegung“.
- **Startseite „Hier darfst du sein.“** mit der Frage „Was ist gerade da?“. Sicherheitsfrage, Angst-Skala und Bedarfsauswahl entfallen.
- **Sortieren:** jede Antwort wird anerkannt und bekommt zwei kleine nächste Schritte.
- **Suizidgedanken** als eigene, ruhige Auswahl mit TelefonSeelsorge und 112.
- **Hilfe-Seite** statt Notfall-Leiste: Notfall sichtbar, Reden, Schreiben und regionale Dienste aufklappbar. Erreichbar über einen leisen Link „Hilfe“ oben.
- **Design:** tieferes Dunkel, Mauve statt Teal, leiser violetter Schimmer, weichere Formen, sanftes Einblenden. Entwurfshinweis schmal statt Warnblock.
- Nach jeder Übung ein **kurzer Halt** ohne Skala.

### Neu
- **Schnellzugang auf der Startseite:** Ablenken, Im Raum ankommen, Sanfte Atemhilfe, Körpersignale verstehen und Ein einfacher Schritt direkt nutzbar, ohne Sicherheitsfrage und Einschätzung. Am Ende zurück zur Startseite.
- **Neue Übung „Ablenken“** mit vier Varianten: Rückwärts zählen, ABC-Spiel, Farben suchen, Ein vertrauter Weg. Auch im Ablauf und unter „In Ruhe üben“.

- **Hilfe-Seite: „Wenn Sprechen gerade schwerfällt“:** Notruf-App nora (vorher einrichten), krisenchat für unter 25, TelefonSeelsorge per Mail und Chat.
- **Hilfe-Seite: „Während du wartest“:** kurze Übungen nach einem Anruf, ganz unten.
- **Kurzer Abschluss im Schnellzugang:** keine Skala, aber „Es ist schlimmer geworden“ zeigt den Weg zur Hilfe.
- **„Vorbereitet sein“** unter „Angst verstehen“: Übung aussuchen, App auf den Startbildschirm, nora einrichten, Vertrauensperson vorher informieren.
- Bildschirm bleibt während Übungen an (Wake Lock), Browserleiste passt sich dem hellen Farbschema an.

### Geändert
- Brustschmerz: klarer, wann eine ärztliche Einordnung gilt (Beschwerden wie sonst) und wann trotzdem die 112 (stärker oder anders).
- Übungsnamen überall einheitlich.
- **Lizenz:** Code unter MIT (`LICENSE`), Inhalte, Dokumentation und Grafiken unter CC BY 4.0 (`LICENSE-CONTENT`). Bis 0.2.0 galt CC0 1.0; für diese Fassungen bleibt es dabei.

## [0.2.0] – 2026-11-04

### Neu
- **Körpersignale verstehen** (Akutphase): Signale auswählen, einzeln erklärt, nach jedem Signal die Frage, ob die Angst nachlässt. Brustschmerz immer zuerst mit 112-Hinweis vor der Erklärung. Warnzeichen ohne Krankheitsnamen, nur ein Durchgang pro Attacke.
- Körpersignal **Rauschen oder Druck in den Ohren** (schwache Datenlage, markiert).
- Körpersignale auch im Lernbereich, mit ausführlicheren Hinweisen.
- **Grounding-Varianten** „Wo bin ich?“ (Orientierung) und „Ein Gegenstand“.
- **Psychiatrische Krisendienste** auf der Hilfe-Seite: Bayern, Berlin, Suche für andere Regionen.
- **In Ruhe üben:** alle Übungen aus „Angst verstehen“ heraus, ohne Einschätzung vorher und nachher.
- **Darstellung anpassen:** Schriftgröße, Zeilenabstand, Bewegung, Farben (Catppuccin Mocha und Latte). Einzige lokal gespeicherte Angabe; bei Standardwerten wird nichts gespeichert.
- Hinweis auf neue Versionen, nur auf der Startseite; Updates werden nie während einer Übung aktiviert.
- Versionsnummer unter „Über diese App“.

### Geändert
- Hilfe-Knopf ruhig und neutral statt rot.
- Quelle zu Atmung und Brustschmerz korrigiert: Nardi, Freire & Zin (2009) statt einer falsch zugeordneten Studie.

### Technik
- Dependabot für npm und GitHub Actions.
- CI testet zusätzlich den Build unter dem GitHub-Pages-Unterpfad, inklusive Offline.

## [0.1.0] – 2026-11-04

- Erster Entwurf: Sicherheitsfrage, Angst-Skala, Übungen (Gedanken prüfen, Grounding, einfache Schritte, Atemhilfe), Abschluss, Lernbereich, Notrufnummern, offline-fähig, Prüfliste für das Fachreview.
