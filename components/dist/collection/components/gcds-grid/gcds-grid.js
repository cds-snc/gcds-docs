import { Host, h } from "@stencil/core";
import i18n from "./i18n/i18n";
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
export class GcdsGrid {
    constructor() {
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
            console.error(`${i18n['en'].gapTabletError} | ${i18n['fr'].gapTabletError}`);
        }
    }
    validateGapDesktop(newValue) {
        const values = GridGapArray;
        if (newValue != undefined && !values.includes(newValue)) {
            this.gapDesktop = undefined;
            console.error(`${i18n['en'].gapDesktopError} | ${i18n['fr'].gapDesktopError}`);
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
                    "text": "Defines the default number of grid columns for all viewports if columns-tablet\nand columns-desktop are not defined. Option to set different layouts for\ndesktop with columns-desktop and for tablet with columns-tablet."
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
                    "text": "Provides option to set a different number of grid columns for tablet screens.\nIf columns-desktop is not defined, columns-tablet will be used to define the\nnumber of columns for desktop as well."
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
                    "text": "Provides option to set a different number of grid columns for desktop screens."
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
            "gap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "GridGapValues",
                    "resolved": "\"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\"",
                    "references": {
                        "GridGapValues": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-grid/gcds-grid.tsx",
                            "id": "src/components/gcds-grid/gcds-grid.tsx::GridGapValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the horizontal and vertical spacing between items in\na grid container for all viewports if gap-tablet and gap-desktop\nare not defined. Option to set different spacing for desktop\nwith gap-desktop and for tablet with gap-tablet."
                },
                "attribute": "gap",
                "reflect": false,
                "defaultValue": "'300'"
            },
            "gapTablet": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "GridGapValues",
                    "resolved": "\"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\"",
                    "references": {
                        "GridGapValues": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-grid/gcds-grid.tsx",
                            "id": "src/components/gcds-grid/gcds-grid.tsx::GridGapValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Provides option to set horizontal and vertical spacing between items in a\ngrid container for tablet screens. If gap-desktop is not defined, gap-tablet\nwill be used to define the spacing for desktop screens as well."
                },
                "attribute": "gap-tablet",
                "reflect": false
            },
            "gapDesktop": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "GridGapValues",
                    "resolved": "\"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\"",
                    "references": {
                        "GridGapValues": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-grid/gcds-grid.tsx",
                            "id": "src/components/gcds-grid/gcds-grid.tsx::GridGapValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Provides option to set horizontal and vertical spacing between items\nin a grid container for desktop screens."
                },
                "attribute": "gap-desktop",
                "reflect": false
            },
            "tag": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| 'article'\n    | 'aside'\n    | 'div'\n    | 'dl'\n    | 'main'\n    | 'nav'\n    | 'ol'\n    | 'section'\n    | 'ul'",
                    "resolved": "\"article\" | \"aside\" | \"div\" | \"dl\" | \"main\" | \"nav\" | \"ol\" | \"section\" | \"ul\"",
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
    static get watchers() {
        return [{
                "propName": "gap",
                "methodName": "validateGap"
            }, {
                "propName": "gapTablet",
                "methodName": "validateGapTablet"
            }, {
                "propName": "gapDesktop",
                "methodName": "validateGapDesktop"
            }, {
                "propName": "tag",
                "methodName": "validateTag"
            }];
    }
}
//# sourceMappingURL=gcds-grid.js.map
