# Versioned Docs

This page documents the section-level versioning model used by this Astro docs site.

## Scope

Versioning is enabled for:

- `components`
- `css-shortcuts`
- `tokens`

Version values are package-style semver strings (for example `1.0.0`, `1.1.0`).

## URL model

Latest (clean URL):

- `/en/components/button`
- `/en/css-shortcuts/spacing`
- `/en/tokens/color`

Explicit version:

- `/en/components/1.0.0/button`
- `/en/css-shortcuts/1.0.0/spacing`
- `/en/tokens/1.0.0/color`

French routes use localized section/page slugs (for example `/fr/composants/...`, `/fr/raccourcis-css/...`, `/fr/jetons/...`).

## Source of truth

Version metadata is defined in:

- `src/utils/version-manifest.ts`

The manifest controls:

- versioned sections
- available versions
- latest version
- per-page slugs
- per-version frozen snapshot file paths

## Content storage

Frozen snapshots live under:

- `src/content-versioned/components/<version>/...`
- `src/content-versioned/css-shortcuts/<version>/...`
- `src/content-versioned/tokens/<version>/...`

Do not infer older docs from latest docs at runtime. Each version is explicit.

## Routing and page resolution

Route generation happens in:

- `src/utils/docs-static-paths.ts`

Dynamic page loading happens in:

- `src/pages/[locale]/[...slug].astro`

Both latest and explicit version routes are statically generated from the manifest.

## Version switcher behavior

Switcher UI:

- `src/components/VersionSwitcher.astro`

Shared versioned layout:

- `src/layouts/VersionedDocLayout.astro`

Behavior:

- switch to equivalent page in selected version when available
- if missing in selected version, route to that section's version landing page
- show fallback notice (`?fallback=1`)

## How to add a new version

1. Add the new version to the section in `src/utils/version-manifest.ts`.
2. Add snapshot files under `src/content-versioned/<section>/<new-version>/...`.
3. Ensure each page entry in the manifest has snapshot paths for that version.
4. Build and verify routes:

```bash
npm run build
```

## Notes

- Figma versioning is intentionally out of scope.
- Automated diffs/changelogs are not implemented in this MVP.
