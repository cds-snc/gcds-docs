import { Component, Element, Host, Prop, h } from '@stencil/core';
export class GcdsGrid {
  constructor() {
    /**
     * Grid props
     */
    /**
     * Defines grid container size
     */
    this.gridContainer = 'fluid';
    /**
     * Defines element as grid or inline-grid container
     */
    this.gridDisplay = 'grid';
    /**
     * Set tag for grid container
     */
    this.gridTag = 'div';
  }
  render() {
    const { alignContent, alignItems, gap, gridContainer, gridDisplay, gridTag, gridTemplateColumns, gridTemplateColumnsDesktop, gridTemplateColumnsTablet, justifyContent, justifyItems, placeContent, placeItems } = this;
    const Tag = gridTag;
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
    return (h(Host, null,
      h(Tag, { class: `
            gcds-grid
            ${alignContent ? `align-content-${alignContent}` : ''}
            ${alignItems ? `align-items-${alignItems}` : ''}
            ${gap ? `gap-${gap}` : ''}
            ${gridContainer ? `container-${gridContainer}` : ''}
            ${gridDisplay ? `display-${gridDisplay}` : ''}
            ${justifyContent ? `justify-content-${justifyContent}` : ''}
            ${justifyItems ? `justify-items-${justifyItems}` : ''}
            ${placeContent ? `place-content-${placeContent}` : ''}
            ${placeItems ? `place-items-${placeItems}` : ''}
          `, style: handleGridTemplateColumns() },
        h("slot", null))));
  }
  static get is() { return "gcds-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gcds-grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gcds-grid.css"]
  }; }
  static get properties() { return {
    "gridContainer": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'fluid' | 'lg' | 'md' | 'sm' | 'xs'",
        "resolved": "\"fluid\" | \"lg\" | \"md\" | \"sm\" | \"xs\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Defines grid container size"
      },
      "attribute": "grid-container",
      "reflect": false,
      "defaultValue": "'fluid'"
    },
    "gridDisplay": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'grid' | 'inline-grid'",
        "resolved": "\"grid\" | \"inline-grid\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Defines element as grid or inline-grid container"
      },
      "attribute": "grid-display",
      "reflect": false,
      "defaultValue": "'grid'"
    },
    "gridTag": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set tag for grid container"
      },
      "attribute": "grid-tag",
      "reflect": false,
      "defaultValue": "'div'"
    },
    "gridTemplateColumns": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Defines the columns of the grid\nOption to set different layouts for desktop | tablet | default"
      },
      "attribute": "grid-template-columns",
      "reflect": false
    },
    "gridTemplateColumnsTablet": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "grid-template-columns-tablet",
      "reflect": false
    },
    "gridTemplateColumnsDesktop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "grid-template-columns-desktop",
      "reflect": false
    },
    "gap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000'",
        "resolved": "\"spacing-100\" | \"spacing-1000\" | \"spacing-200\" | \"spacing-300\" | \"spacing-400\" | \"spacing-50\" | \"spacing-500\" | \"spacing-600\" | \"spacing-700\" | \"spacing-800\" | \"spacing-900\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Shorthand for column-gap + row-gap\nSpecifies the width of the gutters between columns and rows"
      },
      "attribute": "gap",
      "reflect": false
    },
    "alignContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If total grid size is less than the size of its grid container,\nthis property aligns the grid along the block (column) axis"
      },
      "attribute": "align-content",
      "reflect": false
    },
    "justifyContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If total grid size is less than the size of its grid container,\nthis property aligns the grid along the inline (row) axis"
      },
      "attribute": "justify-content",
      "reflect": false
    },
    "placeContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets both the align-content + justify-content properties"
      },
      "attribute": "place-content",
      "reflect": false
    },
    "alignItems": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'baseline' | 'center' | 'end' | 'start' | 'stretch'",
        "resolved": "\"baseline\" | \"center\" | \"end\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Aligns grid items along the block (column) axis"
      },
      "attribute": "align-items",
      "reflect": false
    },
    "justifyItems": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'center' | 'end' | 'start' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Aligns grid items along the inline (row) axis"
      },
      "attribute": "justify-items",
      "reflect": false
    },
    "placeItems": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'center' | 'end' | 'start' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Sets both the align-items + justify-items properties"
      },
      "attribute": "place-items",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
