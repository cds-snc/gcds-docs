/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface IntrinsicElements {
    // Allow any GCDS web component tag without per-tag maintenance.
    [tagName: `gcds-${string}`]: HTMLAttributes & {
      [attr: string]: unknown;
    };
  }
}
