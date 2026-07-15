/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface IntrinsicElements {
    // Allow any GCDS web component tag without per-tag maintenance.
    [tagName: `gcds-${string}`]: HTMLAttributes & {
      [attr: string]: unknown;
    };
    // Local custom element defined in VersionSwitcher.astro.
    "version-switcher-control": HTMLAttributes & {
      [attr: string]: unknown;
    };
  }
}
