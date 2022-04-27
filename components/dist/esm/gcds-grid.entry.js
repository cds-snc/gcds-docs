import { r as registerInstance, h, H as Host, g as getElement } from './index-8d185c1e.js';

const gcdsGridCss = ":host .gcds-grid{margin:0;padding:0}:host .gcds-grid[class*='container']{width:var(--gcds-container-500)}:host .gcds-grid.container-lg{max-width:var(--gcds-container-400)}:host .gcds-grid.container-md{max-width:var(--gcds-container-300)}:host .gcds-grid.container-sm{max-width:var(--gcds-container-200)}:host .gcds-grid.container-xs{max-width:var(--gcds-container-100)}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}:host .gcds-grid.gap-spacing-50{gap:var(--gcds-spacing-50)}:host .gcds-grid.gap-spacing-100{gap:var(--gcds-spacing-100)}:host .gcds-grid.gap-spacing-200{gap:var(--gcds-spacing-200)}:host .gcds-grid.gap-spacing-300{gap:var(--gcds-spacing-300)}:host .gcds-grid.gap-spacing-400{gap:var(--gcds-spacing-400)}:host .gcds-grid.gap-spacing-500{gap:var(--gcds-spacing-500)}:host .gcds-grid.gap-spacing-600{gap:var(--gcds-spacing-600)}:host .gcds-grid.gap-spacing-700{gap:var(--gcds-spacing-700)}:host .gcds-grid.gap-spacing-800{gap:var(--gcds-spacing-800)}:host .gcds-grid.gap-spacing-900{gap:var(--gcds-spacing-900)}:host .gcds-grid.gap-spacing-1000{gap:var(--gcds-spacing-1000)}:host .gcds-grid.align-content-center{align-content:center}:host .gcds-grid.align-content-end{align-content:end}:host .gcds-grid.align-content-space-around{align-content:space-around}:host .gcds-grid.align-content-space-between{align-content:space-between}:host .gcds-grid.align-content-space-evenly{align-content:space-evenly}:host .gcds-grid.align-content-start{align-content:start}:host .gcds-grid.align-content-stretch{align-content:stretch}:host .gcds-grid.justify-content-center{justify-content:center}:host .gcds-grid.justify-content-end{justify-content:end}:host .gcds-grid.justify-content-space-around{justify-content:space-around}:host .gcds-grid.justify-content-space-between{justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{justify-content:space-evenly}:host .gcds-grid.justify-content-start{justify-content:start}:host .gcds-grid.justify-content-stretch{justify-content:stretch}:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.align-items-baseline{align-items:baseline}:host .gcds-grid.align-items-center{align-items:center}:host .gcds-grid.align-items-end{align-items:end}:host .gcds-grid.align-items-start{align-items:start}:host .gcds-grid.align-items-stretch{align-items:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}";

let GcdsGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Grid props
     */
    /**
     * Defines element as grid or inline-grid container
     */
    this.display = 'grid';
    /**
     * Defines grid container size
     */
    this.container = 'fluid';
    /**
     * Set tag for grid container
     */
    this.tag = 'div';
  }
  render() {
    const { alignContent, alignItems, container, display, gap, gridTemplateColumns, gridTemplateColumnsDesktop, gridTemplateColumnsTablet, justifyContent, justifyItems, placeContent, placeItems, tag } = this;
    const CustomTag = tag;
    // Set gridTemplateColumns based on screen size
    const mediaQueryDesktop = window.matchMedia('(min-width: 991px)');
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
    function handleGridTemplateColumns() {
      if (gridTemplateColumnsDesktop && mediaQueryDesktop.matches) {
        return { gridTemplateColumns: gridTemplateColumnsDesktop };
      }
      else if (gridTemplateColumnsTablet && mediaQueryTablet.matches) {
        return { gridTemplateColumns: gridTemplateColumnsTablet };
      }
      else {
        return { gridTemplateColumns: gridTemplateColumns };
      }
    }
    return (h(Host, null, h(CustomTag, { class: `
            gcds-grid
            ${alignContent ? `align-content-${alignContent}` : ''}
            ${alignItems ? `align-items-${alignItems}` : ''}
            ${container ? `container-${container}` : ''}
            ${display ? `display-${display}` : ''}
            ${gap ? `gap-${gap}` : ''}
            ${justifyContent ? `justify-content-${justifyContent}` : ''}
            ${justifyItems ? `justify-items-${justifyItems}` : ''}
            ${placeContent ? `place-content-${placeContent}` : ''}
            ${placeItems ? `place-items-${placeItems}` : ''}
          `, style: handleGridTemplateColumns() }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
GcdsGrid.style = gcdsGridCss;

export { GcdsGrid as gcds_grid };
