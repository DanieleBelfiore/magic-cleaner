# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server (Vite)
npm run build        # production build — ignore the tsc prefix, project is plain JS
npm run preview      # preview production build
node_modules/.bin/vite build   # direct build if npm script fails
```

No test suite. No linter.

## Architecture

**Home Magic Cleaner** — mobile-first Vue 3 SPA guiding users through stain removal step by step. No router. Screen state is a plain `ref` in `App.vue`, persisted to `localStorage`.

### Screen state machine (`src/App.vue`)

```
home → detail → tutorial → done → home
```

`screen` ref: `{ name: 'home' | 'detail' | 'tutorial' | 'done', stainId?: string }`. Each screen is a separate view rendered with `v-if`. `lang` (`'it'` | `'en'`) is a root ref passed as prop to every view.

### Data (`src/data/`)

- **`stains.js`** — `STAINS` array (12 stains), `TAGS` (per-lang category lists), `I18N` (all UI strings keyed by lang). Each stain: `id`, `color`, `urgency` (1–3), `windowMin`, `it`/`en` `{ name, tag }`, `steps.it`/`steps.en` array. Each step: `icon` (key into `GLYPHS`), `title`, `body`, optional `wait` (minutes), `tip`, `warn`/`warnText`.
- **`glyphs.js`** — `GLYPHS` (SVG strings for tutorial step icons) and `STAIN_ICONS` (emoji map keyed by stain id, used in `StainCard`).

### CSS

No Tailwind. One CSS file per component/view in `src/styles/`, imported via `import '../styles/foo.css'` in `<script setup>`. Classes prefixed with the component root (`.home .lang-toggle`, `.detail .cta-btn`, etc.) since styles are global, not scoped.

Global tokens in `src/assets/main.css`: `--accent`, `--paper`, `--ink`, `--bg`, font vars (`--serif`, `--sans`, `--mono`).

Desktop (≥600px): body gets a subtle cross-hatch pattern, app card floats centered with shadow + `border-radius` — see `src/styles/app.css`.

### PWA

`vite-plugin-pwa` in `vite.config.js` generates service worker at build time. Manifest (name, icons, theme) configured inline. Icons from `/public/favicon/`. Two npm `overrides` in `package.json`: peer dep fix for Vite 8, and `serialize-javascript >=7.0.5` security patch.

### Constraints

- Vue 3 Composition API + `<script setup>` only — no Options API
- Plain JS throughout (`.js` files) — ignore scaffolded `tsconfig.json`, `src/counter.ts`, `src/main.ts`, `src/style.css` (Vite scaffold leftovers, unused)
- No Tailwind — plain CSS only
- Icon sizing in `StainCard` uses CSS container queries (`60cqi`) — requires `container-type: inline-size` on `.swatch`
