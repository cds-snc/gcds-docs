import { Host, h } from "@stencil/core";
export class GcdsGrid {
    constructor() {
        this.columns = undefined;
        this.columnsTablet = undefined;
        this.columnsDesktop = undefined;
        this.container = undefined;
        this.centered = false;
        this.display = 'grid';
        this.equalRowHeight = false;
        this.tag = 'div';
        this.alignContent = undefined;
        this.justifyContent = undefined;
        this.placeContent = undefined;
        this.alignItems = undefined;
        this.justifyItems = undefined;
        this.placeItems = undefined;
    }
    render() {
        const { alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, centered, display, equalRowHeight, justifyContent, justifyItems, placeContent, placeItems, tag, } = this;
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
        // Set CSS variables in style attribute based on passed column properties
        function handleColumns() {
            const responsiveColumns = {};
            if (columns) {
                responsiveColumns['--gcds-grid-columns'] = columns;
            }
            if (columnsTablet) {
                responsiveColumns['--gcds-grid-columns-tablet'] = columnsTablet;
            }
            if (columnsDesktop) {
                responsiveColumns['--gcds-grid-columns-desktop'] = columnsDesktop;
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
                "required": false,
                "optional": true,
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
            "equalRowHeight": {
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
                    "text": "Sets all grid items to have an equal height,\nbased on the tallest item."
                },
                "attribute": "equal-row-height",
                "reflect": false,
                "defaultValue": "false"
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
                    "original": "ContentValues",
                    "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
                    "references": {
                        "ContentValues": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-grid/gcds-grid.tsx",
                            "id": "src/components/gcds-grid/gcds-grid.tsx::ContentValues"
                        }
                    }
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
                    "original": "ContentValues",
                    "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
                    "references": {
                        "ContentValues": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-grid/gcds-grid.tsx",
                            "id": "src/components/gcds-grid/gcds-grid.tsx::ContentValues"
                        }
                    }
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
                    "original": "ContentValues",
                    "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
                    "references": {
                        "ContentValues": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-grid/gcds-grid.tsx",
                            "id": "src/components/gcds-grid/gcds-grid.tsx::ContentValues"
                        }
                    }
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
