# Design System — Tokens & Component Inventory

## Token pipeline

Source of truth: `specs/design/tokens/*.json` (W3C DTCG format).

```
specs/design/tokens/*.json
        │
        ▼  pnpm design:build  (@app/design-tokens)
        ├── apps/web/app/assets/css/tokens.generated.css
        ├── packages/ui/src/tokens.generated.css          (Storybook)
        ├── apps/web/app/design-tokens.generated.ts
        ├── packages/ui/src/design-tokens.generated.ts    (Storybook)
        └── packages/ui_flutter/lib/src/theme/tokens.g.dart
```

All generated files are committed — never edit them by hand. Run
`pnpm design:build` after changing any token JSON.

## Extracting tokens from design files

1. Export the Figma / Penpot tokens plugin output as JSON.
2. Map each token to the correct file:
   - `color.json` — semantic colour roles (brand, surface, border, text, status)
   - `typography.json` — font families, weights, sizes, tracking, leading, text roles
   - `spacing.json` — spacing scale (4 px grid)
   - `radius.json` — border-radius scale
   - `shadow.json` — box-shadow presets (light + dark variants)
   - `motion.json` — duration, easing, lift, z-index
   - `opacity.json` — opacity presets
3. All values use the DTCG `{ "$value": ..., "$type": ... }` shape.
   Themeable tokens use `{ "light": {...}, "dark": {...} }`.
4. Run `pnpm design:build` and commit the generated artefacts.

## Component inventory

| Category     | Component      | Vue (`@app/ui`) | Flutter (`app_ui`) |
| ------------ | -------------- | --------------- | ------------------ |
| _(add rows)_ | _(add rows)_   | —               | —                  |

> The `pnpm design:audit` script cross-checks this table against the actual
> component folders. Run it before shipping new components.
