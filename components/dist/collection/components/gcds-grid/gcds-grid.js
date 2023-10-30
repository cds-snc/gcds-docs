import { Host, h } from "@stencil/core";
export class GcdsGrid {
  constructor() {
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
  static get is() { return "gcds-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-grid.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-grid.css"]
    };
  }
  static get properties() {
    return {
      "columns": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the columns of the grid\nOption to set different layouts for desktop | tablet | default (includes mobile)"
        },
        "attribute": "columns",
        "reflect": false
      },
      "columnsTablet": {
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
        "attribute": "columns-tablet",
        "reflect": false
      },
      "columnsDesktop": {
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
        "attribute": "columns-desktop",
        "reflect": false
      },
      "container": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
          "resolved": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines grid container size"
        },
        "attribute": "container",
        "reflect": false
      },
      "centered": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines if grid container is centered or not"
        },
        "attribute": "centered",
        "reflect": false,
        "defaultValue": "false"
      },
      "display": {
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
        "attribute": "display",
        "reflect": false,
        "defaultValue": "'grid'"
      },
      "gap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
          "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
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
      "tag": {
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
          "text": "Set tag for grid container"
        },
        "attribute": "tag",
        "reflect": false,
        "defaultValue": "'div'"
      },
      "alignContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'center'\n    | 'end'\n    | 'space-around'\n    | 'space-between'\n    | 'space-evenly'\n    | 'start'\n    | 'stretch'",
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
          "original": "| 'center'\n    | 'end'\n    | 'space-around'\n    | 'space-between'\n    | 'space-evenly'\n    | 'start'\n    | 'stretch'",
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
          "original": "| 'center'\n    | 'end'\n    | 'space-around'\n    | 'space-between'\n    | 'space-evenly'\n    | 'start'\n    | 'stretch'",
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
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=gcds-grid.js.map
