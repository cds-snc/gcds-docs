import { Host, h } from "@stencil/core";
/**
 * A grid column is a single column in a grid layout, allowing for flexible content arrangement.
 *
 * @slot default - Slot for the main content of the grid coloumn.
 */
export class GcdsGridCol {
    constructor() {
        /**
         * Props
         */
        /**
         * Set tag for grid column
         */
        this.tag = 'div';
        /**
         * Optimize grid column size for tablet (768px - 1023px).
         * Tablet grid column sizes are based on a 6 column grid.
         * The tablet size will also be used for desktop, if desktop is undefined.
         */
        this.tablet = 6;
    }
    validateTablet(newValue) {
        const values = [1, 2, 3, 4, 5, 6];
        if (!values.includes(newValue)) {
            this.tablet = 6;
        }
    }
    validateDesktop(newValue) {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        if (this.desktop && !values.includes(newValue)) {
            this.desktop = 12;
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTablet(this.tablet);
        this.validateDesktop(this.desktop);
    }
    render() {
        const { desktop, tablet, tag } = this;
        const Tag = tag;
        function handleColSize() {
            const colSize = {};
            if (tablet) {
                colSize['--gcds-grid-col-tablet'] = tablet;
            }
            if (desktop) {
                colSize['--gcds-grid-col-desktop'] = desktop;
            }
            else if (tablet) {
                colSize['--gcds-grid-col-desktop'] = tablet * 2;
            }
            return colSize;
        }
        return (h(Host, { style: handleColSize() }, h(Tag, { class: "gcds-grid-col" }, h("slot", null))));
    }
    static get is() { return "gcds-grid-col"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-grid-col.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-grid-col.css"]
        };
    }
    static get properties() {
        return {
            "tag": {
                "type": "string",
                "attribute": "tag",
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
                    "text": "Set tag for grid column"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'div'"
            },
            "tablet": {
                "type": "number",
                "attribute": "tablet",
                "mutable": true,
                "complexType": {
                    "original": "1 | 2 | 3 | 4 | 5 | 6",
                    "resolved": "1 | 2 | 3 | 4 | 5 | 6",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optimize grid column size for tablet (768px - 1023px).\nTablet grid column sizes are based on a 6 column grid.\nThe tablet size will also be used for desktop, if desktop is undefined."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "6"
            },
            "desktop": {
                "type": "number",
                "attribute": "desktop",
                "mutable": true,
                "complexType": {
                    "original": "| 1\n    | 2\n    | 3\n    | 4\n    | 5\n    | 6\n    | 7\n    | 8\n    | 9\n    | 10\n    | 11\n    | 12",
                    "resolved": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optimize grid column size for desktop (1024px and above).\nDesktop grid column sizes are based on a 12 column grid."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "tablet",
                "methodName": "validateTablet"
            }, {
                "propName": "desktop",
                "methodName": "validateDesktop"
            }];
    }
}
//# sourceMappingURL=gcds-grid-col.js.map
