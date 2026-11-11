FLOATING ISLAND — COMPLETE LAYER PACK

Canvas and alignment
- Every SVG is 1200 × 1800 with viewBox="0 0 1200 1800".
- Transparent background; files share the same origin and can be stacked without transforms.
- Composition focal area is the upper section; the lower region remains open for app text.
- Side margins are kept clear of essential details.

Folder structure
- dark/   six layered SVGs for the dark palette
- light/  six matching SVGs for the light palette
- animation.css  optional motion recipe
- Each theme contains:
  01_insel.svg
  02_stadt.svg
  03_baum.svg
  04_baumlicht.svg
  05_bruecke_buecher.svg
  06_himmel.svg

Suggested z-order, back to front
06_himmel, 01_insel, 02_stadt, 05_bruecke_buecher, 03_baum, 04_baumlicht
The bridge can be moved behind/in front of the city depending on scene staging.

Optimization
- All artwork is native SVG paths and basic vector shapes; no embedded bitmap assets, no fonts.
- Files are compact and share a small set of SVG definitions.
- Load the six files for the selected theme once, cache them for offline use, then animate transforms/opacity independently.
- Keep both themes bundled only if offline theme switching is required; otherwise ship the preferred theme and fetch the other on demand.

Animation
- The tree-light overlay is isolated and intended for a gentle opacity pulse.
- Sky can drift subtly; avoid animating the entire SVG document if only a layer needs movement.
- animation.css is a starting point. Add the matching classes to the rendered layer/group in your app.
- Honor prefers-reduced-motion.

Note
This is a refined vector illustration pass, not a pixel-perfect recreation of a separately supplied reference image. SVG dimensions and layer alignment are consistent across both themes.
