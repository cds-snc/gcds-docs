import { Host, h } from "@stencil/core";
export class GcdsGridCol {
    constructor() {
        this.tag = 'div';
        this.tablet = 6;
        this.desktop = undefined;
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
                "attribute": "tag",
                "reflect": false,
                "defaultValue": "'div'"
            },
            "tablet": {
                "type": "number",
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
                "attribute": "tablet",
                "reflect": false,
                "defaultValue": "6"
            },
            "desktop": {
                "type": "number",
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
                "attribute": "desktop",
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
