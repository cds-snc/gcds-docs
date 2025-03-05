import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gcds-container2.js';

const I18N = {
  en: {
    gapDesktopError: 'gcds-grid: Invalid spacing value for gap-desktop.',
    gapTabletError: 'gcds-grid: Invalid spacing value for gap-tablet.',
  },
  fr: {
    gapDesktopError: "gcds-grid: Valeur d'espacement invalide pour gap-desktop.",
    gapTabletError: "gcds-grid: Valeur d'espacement invalide pour gap-tablet.",
  },
};

const gcdsGridCss = "@layer reset, default, display, align, justify, place, equalHeight, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid{box-sizing:border-box;margin:0;padding:0}}@layer default{:host .gcds-grid{gap:var(--gcds-grid-gap);grid-template-columns:var(--gcds-grid-columns,1fr)}}@layer display{:host .gcds-grid.display-grid-with-cols{display:grid;grid-template-columns:1fr}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}}@layer align{:host .gcds-grid.align-content-center{align-content:center}:host .gcds-grid.align-content-end{align-content:end}:host .gcds-grid.align-content-space-around{align-content:space-around}:host .gcds-grid.align-content-space-between{align-content:space-between}:host .gcds-grid.align-content-space-evenly{align-content:space-evenly}:host .gcds-grid.align-content-start{align-content:start}:host .gcds-grid.align-content-stretch{align-content:stretch}:host .gcds-grid.align-items-baseline{align-items:baseline}:host .gcds-grid.align-items-center{align-items:center}:host .gcds-grid.align-items-end{align-items:end}:host .gcds-grid.align-items-start{align-items:start}:host .gcds-grid.align-items-stretch{align-items:stretch}}@layer justify{:host .gcds-grid.justify-content-center{justify-content:center}:host .gcds-grid.justify-content-end{justify-content:end}:host .gcds-grid.justify-content-space-around{justify-content:space-around}:host .gcds-grid.justify-content-space-between{justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{justify-content:space-evenly}:host .gcds-grid.justify-content-start{justify-content:start}:host .gcds-grid.justify-content-stretch{justify-content:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}}@layer place{:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}}@layer equalHeight{:host .gcds-grid.equal-row-height{align-items:stretch;grid-auto-rows:1fr}}@layer tablet{@media screen and (width >= 48em){:host .gcds-grid{gap:var(--gcds-grid-gap-tablet,var(--gcds-grid-gap));grid-template-columns:var(\n        --gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-tablet),minmax(0,1fr))}}}@layer desktop{@media screen and (width >= 64em){:host .gcds-grid{gap:var(--gcds-grid-gap-desktop,var(--gcds-grid-gap-tablet,var(--gcds-grid-gap)));grid-template-columns:var(\n        --gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-desktop),minmax(0,1fr))}}}";
const GcdsGridStyle0 = gcdsGridCss;

const GridGapArray = [
    '150',
    '175',
    '200',
    '225',
    '250',
    '300',
    '350',
    '400',
    '450',
    '500',
    '550',
    '600',
    '650',
    '700',
    '750',
    '800',
];
const GcdsGrid = /*@__PURE__*/ proxyCustomElement(class GcdsGrid extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.columns = undefined;
        this.columnsTablet = undefined;
        this.columnsDesktop = undefined;
        this.container = undefined;
        this.centered = false;
        this.display = 'grid';
        this.equalRowHeight = false;
        this.gap = '300';
        this.gapTablet = undefined;
        this.gapDesktop = undefined;
        this.tag = 'div';
        this.alignContent = undefined;
        this.justifyContent = undefined;
        this.placeContent = undefined;
        this.alignItems = undefined;
        this.justifyItems = undefined;
        this.placeItems = undefined;
    }
    validateGap(newValue) {
        const values = GridGapArray;
        if (!values.includes(newValue)) {
            this.gap = '300';
        }
    }
    validateGapTablet(newValue) {
        const values = GridGapArray;
        if (newValue != undefined && !values.includes(newValue)) {
            this.gapTablet = undefined;
            console.error(`${I18N['en'].gapTabletError} | ${I18N['fr'].gapTabletError}`);
        }
    }
    validateGapDesktop(newValue) {
        const values = GridGapArray;
        if (newValue != undefined && !values.includes(newValue)) {
            this.gapDesktop = undefined;
            console.error(`${I18N['en'].gapDesktopError} | ${I18N['fr'].gapDesktopError}`);
        }
    }
    validateTag(newValue) {
        const values = [
            'article',
            'aside',
            'div',
            'dl',
            'main',
            'nav',
            'ol',
            'section',
            'ul',
        ];
        if (!values.includes(newValue)) {
            this.tag = 'div';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
        this.validateGap(this.gap);
        this.validateGapTablet(this.gapTablet);
        this.validateGapDesktop(this.gapDesktop);
    }
    render() {
        const { alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, centered, display, equalRowHeight, gap, gapTablet, gapDesktop, justifyContent, justifyItems, placeContent, placeItems, tag, } = this;
        const Tag = tag;
        const classNames = `
      gcds-grid
      ${alignContent ? `align-content-${alignContent}` : ''}
      ${alignItems ? `align-items-${alignItems}` : ''}
      ${(columns || columnsTablet || columnsDesktop) === undefined
            ? `display-grid-with-cols`
            : `display-${display}`}
      ${equalRowHeight ? 'equal-row-height' : ''}
      ${justifyContent ? `justify-content-${justifyContent}` : ''}
      ${justifyItems ? `justify-items-${justifyItems}` : ''}
      ${placeContent ? `place-content-${placeContent}` : ''}
      ${placeItems ? `place-items-${placeItems}` : ''}
    `;
        // Set CSS variables in style attribute based on passed column + gap properties
        function handleGridStyles() {
            const gridStyles = {};
            const setGridProperty = (value, property, suffix = '') => {
                const gapValue = `var(--gcds-grid-gap-${value})`;
                const tokenValue = property === 'gap' ? gapValue : value;
                if (value) {
                    gridStyles[`--gcds-grid-${property}${suffix}`] = tokenValue;
                }
            };
            // Handle columns
            setGridProperty(columns, 'columns');
            setGridProperty(columnsTablet, 'columns', '-tablet');
            setGridProperty(columnsDesktop, 'columns', '-desktop');
            // Handle gap
            setGridProperty(gap, 'gap');
            setGridProperty(gapTablet, 'gap', '-tablet');
            setGridProperty(gapDesktop, 'gap', '-desktop');
            return gridStyles;
        }
        return (h(Host, null, container ? (h("gcds-container", { size: container, centered: centered }, h(Tag, { class: classNames, style: handleGridStyles() }, h("slot", null)))) : (h(Tag, { class: classNames, style: handleGridStyles() }, h("slot", null)))));
    }
    get el() { return this; }
    static get watchers() { return {
        "gap": ["validateGap"],
        "gapTablet": ["validateGapTablet"],
        "gapDesktop": ["validateGapDesktop"],
        "tag": ["validateTag"]
    }; }
    static get style() { return GcdsGridStyle0; }
}, [1, "gcds-grid", {
        "columns": [1],
        "columnsTablet": [1, "columns-tablet"],
        "columnsDesktop": [1, "columns-desktop"],
        "container": [1],
        "centered": [4],
        "display": [1],
        "equalRowHeight": [4, "equal-row-height"],
        "gap": [1],
        "gapTablet": [1, "gap-tablet"],
        "gapDesktop": [1, "gap-desktop"],
        "tag": [1025],
        "alignContent": [1, "align-content"],
        "justifyContent": [1, "justify-content"],
        "placeContent": [1, "place-content"],
        "alignItems": [1, "align-items"],
        "justifyItems": [1, "justify-items"],
        "placeItems": [1, "place-items"]
    }, undefined, {
        "gap": ["validateGap"],
        "gapTablet": ["validateGapTablet"],
        "gapDesktop": ["validateGapDesktop"],
        "tag": ["validateTag"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-grid", "gcds-container"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-grid":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsGrid);
            }
            break;
        case "gcds-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GcdsGrid as G, defineCustomElement as d };

//# sourceMappingURL=gcds-grid2.js.map