import figmaTokens from "@gcds-core/tokens/build/figma/figma.tokens.json";

// The raw Figma token tree (Tokens.color, Tokens.text, Tokens.bg, ...).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tokens = (figmaTokens as { Tokens: Record<string, any> }).Tokens;

// Localized colour-group labels (ported from 11ty _data/tokentable.js), used
// for the accessible name on colour swatches.
export const colourNames: Record<string, Record<string, string>> = {
  en: {
    grayscale: "Gray",
    blue: "Blue",
    red: "Red",
    green: "Green",
    yellow: "Yellow",
    purple: "Purple",
    black: "Black",
    white: "White",
    blueVivid: "Blue vivid",
    blueMuted: "Blue muted",
  },
  fr: {
    grayscale: "Gris",
    blue: "Bleu",
    red: "Rouge",
    green: "Vert",
    yellow: "Jaune",
    purple: "Violet",
    black: "Noir",
    white: "Blanc",
    blueVivid: "Bleu vif",
    blueMuted: "Bleu doux",
  },
};

type Rgb = { r: number; g: number; b: number };

/** Parse a #RGB or #RRGGBB hex string into 0-255 channels. */
function hexToChannels(hex: string): Rgb {
  let h = hex.replace(/^#/, "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(h, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

/** WCAG 2.x relative luminance for a hex colour. */
function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToChannels(hex);
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/**
 * WCAG contrast ratio between two colours, floored to 2 decimals.
 * Matches the 11ty `contrast` filter (chroma.contrast, Math.floor(x*100)/100).
 */
export function contrast(value: string, background = "#FFF"): number {
  const l1 = relativeLuminance(value);
  const l2 = relativeLuminance(background);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  return Math.floor(ratio * 100) / 100;
}

/** Swatch border colour: the background if it contrasts enough, else black. */
export function swatchBorder(value: string, background = "#FFF"): string {
  return contrast(value, background) > 3 ? background : "black";
}

/** "rgb(r, g, b)" string for a hex value. */
export function hexToRgb(hex: string): string {
  const { r, g, b } = hexToChannels(hex);
  return `rgb(${r}, ${g}, ${b})`;
}

/** camelCase / PascalCase -> kebab-case (11ty `camelToKebab`). */
export function camelToKebab(str: string): string {
  return str
    .replace(/[a-z][A-Z]/g, (m) => `${m[0]}-${m[1].toLowerCase()}`)
    .toLowerCase();
}

/** Insert a dash before a run of capitals and lowercase it (11ty `fixTokenName`). */
export function fixTokenName(value: string): string {
  const capitals = value.replace(/[^A-Z]+/g, "");
  if (!capitals) return value;
  return value.replace(capitals, `-${capitals.toLowerCase()}`);
}

/** Deep-lookup by an array of keys (11ty `dig`). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dig(keys: string[], object: any): any {
  return keys.reduce((acc, key) => (acc == null ? acc : acc[key]), object);
}

/** Wrap a single leaf token so it iterates as one unnamed row (11ty `reformatColourToken`). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reformatColourToken(obj: any): Record<string, any> {
  if (!obj || typeof obj !== "object") return {};
  return { "": obj };
}

/** Find the base colour name (e.g. "blue-500") for a hex value (11ty `colourFromValue`). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function colourFromValue(value: string, colorTokens: Record<string, any>): string {
  let name = "";
  for (const colour of Object.keys(colorTokens)) {
    const group = colorTokens[colour];
    for (const weight of Object.keys(group)) {
      if (group[weight]?.value === value) {
        name = `${colour}-${weight}`;
      }
    }
    if (group?.value === value) {
      name = `${colour.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}-`;
    }
  }
  return name;
}

/**
 * Build the CSS custom-property name for a token, e.g.
 * concatToken "text", itemKey "primary" -> "--gcds-text-primary".
 */
export function tokenCssName(concatToken: string, itemKey: string): string {
  const base = camelToKebab(fixTokenName(concatToken.replace(/\./g, "-")));
  const suffix = itemKey ? `-${camelToKebab(itemKey)}` : "";
  return `--gcds-${base}${suffix}`;
}

/** Round a numeric-with-unit string to 2 decimals, e.g. "2.5625rem" -> "2.56rem". */
function roundUnit(raw: string, unit: string): string {
  return `${Math.round(parseFloat(raw) * 100) / 100}${unit}`;
}

type TypographyValue = {
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
};

/**
 * Format a composite typography token value as the font shorthand-ish string,
 * e.g. "700 2.56rem/117% 'Lato', sans-serif" (matches the 11ty font-value cell).
 */
export function formatTypography(value: TypographyValue): string {
  return `${value.fontWeight} ${roundUnit(value.fontSize, "rem")}/${roundUnit(
    value.lineHeight,
    "%",
  )} ${value.fontFamily}`;
}
