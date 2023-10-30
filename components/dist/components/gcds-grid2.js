import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gcds-container2.js';

const gcdsGridCss = ":host .gcds-grid{grid-template-columns:var(--gcds-grid-columns,1fr);margin:0;padding:0}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}:host .gcds-grid.gap-0{gap:var(--gcds-grid-gap-0)}:host .gcds-grid.gap-50{gap:var(--gcds-grid-gap-50)}:host .gcds-grid.gap-100{gap:var(--gcds-grid-gap-100)}:host .gcds-grid.gap-150{gap:var(--gcds-grid-gap-150)}:host .gcds-grid.gap-200{gap:var(--gcds-grid-gap-200)}:host .gcds-grid.gap-250{gap:var(--gcds-grid-gap-250)}:host .gcds-grid.gap-300{gap:var(--gcds-grid-gap-300)}:host .gcds-grid.gap-400{gap:var(--gcds-grid-gap-400)}:host .gcds-grid.gap-450{gap:var(--gcds-grid-gap-450)}:host .gcds-grid.gap-500{gap:var(--gcds-grid-gap-500)}:host .gcds-grid.gap-550{gap:var(--gcds-grid-gap-550)}:host .gcds-grid.gap-600{gap:var(--gcds-grid-gap-600)}:host .gcds-grid.gap-700{gap:var(--gcds-grid-gap-700)}:host .gcds-grid.gap-800{gap:var(--gcds-grid-gap-800)}:host .gcds-grid.gap-900{gap:var(--gcds-grid-gap-900)}:host .gcds-grid.gap-1000{gap:var(--gcds-grid-gap-1000)}:host .gcds-grid.align-content-center{-ms-flex-line-pack:center;align-content:center}:host .gcds-grid.align-content-end{-ms-flex-line-pack:end;align-content:end}:host .gcds-grid.align-content-space-around{-ms-flex-line-pack:distribute;align-content:space-around}:host .gcds-grid.align-content-space-between{-ms-flex-line-pack:justify;align-content:space-between}:host .gcds-grid.align-content-space-evenly{-ms-flex-line-pack:space-evenly;align-content:space-evenly}:host .gcds-grid.align-content-start{-ms-flex-line-pack:start;align-content:start}:host .gcds-grid.align-content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}:host .gcds-grid.justify-content-center{-ms-flex-pack:center;justify-content:center}:host .gcds-grid.justify-content-end{-ms-flex-pack:end;justify-content:end}:host .gcds-grid.justify-content-space-around{-ms-flex-pack:distribute;justify-content:space-around}:host .gcds-grid.justify-content-space-between{-ms-flex-pack:justify;justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}:host .gcds-grid.justify-content-start{-ms-flex-pack:start;justify-content:start}:host .gcds-grid.justify-content-stretch{-ms-flex-pack:stretch;justify-content:stretch}:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.align-items-baseline{-ms-flex-align:baseline;align-items:baseline}:host .gcds-grid.align-items-center{-ms-flex-align:center;align-items:center}:host .gcds-grid.align-items-end{-ms-flex-align:end;align-items:end}:host .gcds-grid.align-items-start{-ms-flex-align:start;align-items:start}:host .gcds-grid.align-items-stretch{-ms-flex-align:stretch;align-items:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}@media screen and (min-width:48em){:host .gcds-grid{grid-template-columns:var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))}}@media screen and (min-width:64em){:host .gcds-grid{grid-template-columns:var(--gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)))}}";

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
    this.gap = undefined;
    this.tag = 'div';
    this.alignContent = undefined;
    this.justifyContent = undefined;
    this.placeContent = undefined;
    this.alignItems = undefined;
    this.justifyItems = undefined;
    this.placeItems = undefined;
  }
  render() {
    const { alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, centered, display, gap, justifyContent, justifyItems, placeContent, placeItems, tag, } = this;
    const Tag = tag;
    const classNames = `
      gcds-grid
      ${alignContent ? `align-content-${alignContent}` : ''}
      ${alignItems ? `align-items-${alignItems}` : ''}
      ${gap ? `gap-${gap}` : ''}
      ${display ? `display-${display}` : ''}
      ${justifyContent ? `justify-content-${justifyContent}` : ''}
      ${justifyItems ? `justify-items-${justifyItems}` : ''}
      ${placeContent ? `place-content-${placeContent}` : ''}
      ${placeItems ? `place-items-${placeItems}` : ''}
    `;
    // Set CSS variables in style attribute based on passed column properties
    function handleColumns() {
      const responsiveColumns = {};
      if (columnsDesktop) {
        responsiveColumns['--gcds-grid-columns-desktop'] = columnsDesktop;
      }
      if (columnsTablet) {
        responsiveColumns['--gcds-grid-columns-tablet'] = columnsTablet;
      }
      if (columns) {
        responsiveColumns['--gcds-grid-columns'] = columns;
      }
      return responsiveColumns;
    }
    return (h(Host, null, container ? (h("gcds-container", { size: container, centered: centered }, h(Tag, { class: classNames, style: handleColumns() }, h("slot", null)))) : (h(Tag, { class: classNames, style: handleColumns() }, h("slot", null)))));
  }
  get el() { return this; }
  static get style() { return gcdsGridCss; }
}, [1, "gcds-grid", {
    "columns": [1],
    "columnsTablet": [1, "columns-tablet"],
    "columnsDesktop": [1, "columns-desktop"],
    "container": [1],
    "centered": [4],
    "display": [1],
    "gap": [1],
    "tag": [1],
    "alignContent": [1, "align-content"],
    "justifyContent": [1, "justify-content"],
    "placeContent": [1, "place-content"],
    "alignItems": [1, "align-items"],
    "justifyItems": [1, "justify-items"],
    "placeItems": [1, "place-items"]
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