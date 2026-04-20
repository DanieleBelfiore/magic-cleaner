# Home Magic Cleaner 🫧

![home](/home.png)

Mobile-first PWA that guides you through removing stains from clothes, step by step.

Built with Vue 3 + Vite. No backend, no account, no ads — works offline after first visit.

## Features

- 12 common stains (wine, coffee, oil, blood, grass, ink, makeup, sweat, chocolate, deodorant, mud, tomato)
- Step-by-step tutorial with wait timers (pause/resume)
- Fabric type + stain age selector — contextual notes for delicate fabrics and dried stains
- Filter by category, search by name
- Italian / English
- PWA — installable on iPhone and Android from the browser

## Stack

- [Vue 3](https://vuejs.org/) — Composition API, `<script setup>`
- [Vite 8](https://vite.dev/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) — service worker + web manifest
- Plain CSS (no Tailwind, no UI library)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

To preview the production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.vue               # Root — screen state machine (home → detail → tutorial → done)
├── views/
│   ├── HomeView.vue      # Stain grid + search + tag filter
│   ├── DetailView.vue    # Stain detail, fabric + age selector
│   ├── TutorialView.vue  # Step-by-step tutorial with timers
│   └── DoneView.vue      # Completion screen
├── components/
│   ├── StainCard.vue
│   ├── GlyphIcon.vue     # SVG step icons
│   └── UrgencyDots.vue
├── data/
│   ├── stains.js         # All stain data + i18n strings
│   └── glyphs.js         # SVG icon map + emoji map
└── styles/               # One CSS file per component/view
```

## License

MIT
