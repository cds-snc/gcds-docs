# GC Design System Docs (Astro)

This package contains the Astro-based documentation site under `docs/`.

## Project structure

```text
/docs
├── public/
│   ├── assets/gcds/                # Synced GCDS runtime assets (copied from node_modules)
│   └── favicon.svg
├── scripts/
│   └── copy-gcds-assets.mjs        # Prebuild/predev asset sync
├── src/
│   ├── assets/                     # Images used by pages/components
│   ├── components/
│   │   ├── Breadcrumbs.astro
│   │   ├── Header.astro
│   │   ├── Nav.astro
│   │   └── HelpUs/
│   │       └── HelpUs.astro
│   ├── content-pages/              # Route content (localized page modules)
│   │   ├── en/
│   │   └── fr/
│   ├── i18n/
│   │   ├── config.ts               # Locale + route slug config
│   │   └── messages/
│   │       └── help-us.ts          # Centralized HelpUs translations
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── [locale]/[...slug].astro # Dynamic static route entry (getStaticPaths)
│   ├── scripts/                    # Browser behavior modules used by Astro components
│   │   ├── code-preview.js
│   │   ├── tabs.js
│   │   └── html.js
│   ├── styles/
│   │   ├── global.css              # Single CSS entrypoint
│   │   ├── base/
│   │   ├── layout/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utilities/
│   └── utils/
│       ├── docs-static-paths.ts    # Route manifest + nav data
│       ├── breadcrumbs.ts          # Breadcrumb path + label utilities
│       └── i18n.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Ownership boundaries

- **Routing**: `src/pages/[locale]/[...slug].astro` + `src/utils/docs-static-paths.ts`
- **Localized copy**: `src/i18n/messages/*`
- **Layout shell**: `src/layouts/BaseLayout.astro`
- **Navigation/Breadcrumbs**: `src/components/Nav.astro`, `src/components/Breadcrumbs.astro`, `src/utils/breadcrumbs.ts`
- **Global styles**: `src/styles/global.css` (imports modular CSS files)
- **Client-side behavior**: `src/scripts/*` imported by components

## Commands

Run from `docs/`:

```bash
npm install
npm run dev
npm run build
npm run preview
```

To serve built output manually (production-like static host):

```bash
python3 -m http.server --directory dist 8080
```
