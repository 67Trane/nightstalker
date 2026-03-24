# Nightstalker

**Nightstalker** ist ein browserbasiertes 2D-Jump-and-Run-Spiel, das ich im Rahmen meiner Ausbildung als Webentwickler entwickelt habe.

Der Spieler steuert einen Ninja durch eine düstere Nachtlandschaft, kämpft gegen Skelett-Gegner und tritt am Ende gegen einen mächtigen Endboss an. Gesammelte Münzen und Molotow-Cocktails helfen dabei, zu überleben.

---

## Features

- **Bewegungssystem** – Laufen, Springen, Fallen mit Gravitationsphysik
- **Kampfsystem** – Gegner durch Draufspringen oder Werfen besiegen
- **Sammelobjekte** – Münzen und Flaschen aufsammeln
- **Endboss** – Bosskampf mit eigenem Healthbar
- **Statusleisten** – Leben, Wurfvorrat und Münzen werden live angezeigt
- **Loading-Screen** – Animierter Ladebildschirm bei langsamer Verbindung
- **Pause & Restart** – Spiel jederzeit pausieren oder neu starten
- **Sound** – Hintergrundmusik und Soundeffekte (stummschaltbar)
- **Mobile Support** – Touch-Steuerung für Smartphones
- **Responsive** – Hinweis zur Geräterotation im Hochformat

---

## Steuerung

| Taste | Aktion |
|---|---|
| `→` / `←` | Laufen |
| `Leertaste` | Springen |
| `F` | Molotow werfen |
| `P` | Pause / Fortsetzen |
| `R` | Neustart |

Auf Mobilgeräten stehen Touch-Buttons auf dem Bildschirm zur Verfügung.

---

## Technologien

- **Vanilla JavaScript** – objektorientiert mit ES6-Klassen
- **HTML Canvas** – für das gesamte Rendering
- **CSS** – Layout und UI
- **Keine Frameworks oder Libraries**

Die Spielarchitektur basiert auf einer Klassenhierarchie (`DrawableObject` → `MoveableObject` → Character, Enemies, …) mit einem zentralen Game-Loop über `requestAnimationFrame` und `setInterval`.

---

## Live spielen

[https://mehmet-deliaci.developerakademie.net/el_pollo_loco/index.html](https://mehmet-deliaci.developerakademie.net/el_pollo_loco/index.html)
