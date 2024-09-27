import { Host, h } from "@stencil/core";
export class GcdsHeading {
    constructor() {
        this.tag = undefined;
        this.characterLimit = true;
        this.marginTop = undefined;
        this.marginBottom = '400';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        if (!values.includes(newValue)) {
            console.error('Not a valid tag.');
        }
    }
    validateMarginTop(newValue) {
        const values = [
            '0',
            '50',
            '100',
            '150',
            '200',
            '250',
            '300',
            '400',
            '450',
            '500',
            '550',
            '600',
            '700',
            '800',
            '900',
            '1000',
        ];
        if (!this.marginTop || (this.marginTop && !values.includes(newValue))) {
            if (this.tag !== 'h1') {
                this.marginTop = '500';
            }
            else {
                this.marginTop = '0';
            }
        }
    }
    validateMarginBottom(newValue) {
        const values = [
            '0',
            '50',
            '100',
            '150',
            '200',
            '250',
            '300',
            '400',
            '450',
            '500',
            '550',
            '600',
            '700',
            '800',
            '900',
            '1000',
        ];
        if (this.marginBottom && !values.includes(newValue)) {
            this.marginBottom = '400';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
        this.validateMarginTop(this.marginTop);
        this.validateMarginBottom(this.marginBottom);
    }
    render() {
        const { characterLimit, marginTop, marginBottom, tag } = this;
        const Tag = tag;
        return (h(Host, { key: '0416b329bd8fe577775bdce03ffc95a62582722d' }, h(Tag, { key: '5e0af26dad00a8d0568ba0af150694187ad86e79', class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", { key: '9f01a4e2a648ead351e6e6860262df0f182827cd' }))));
    }
    static get is() { return "gcds-heading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-heading.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-heading.css"]
        };
    }
    static get properties() {
        return {
            "tag": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the appropriate HTML tag for the selected level."
                },
                "attribute": "tag",
                "reflect": false
            },
            "characterLimit": {
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
                    "text": "Sets the line length to a maximum amount of characters per line for\neach heading level, ensuring a comfortable, accessible reading length."
                },
                "attribute": "character-limit",
                "reflect": false,
                "defaultValue": "true"
            },
            "marginTop": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds margin above the heading. The default margin-top for h1 is set to 0,\nwhile for h2 to h6 headings, it's 500."
                },
                "attribute": "margin-top",
                "reflect": false
            },
            "marginBottom": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| '0'\n    | '50'\n    | '100'\n    | '150'\n    | '200'\n    | '250'\n    | '300'\n    | '400'\n    | '450'\n    | '500'\n    | '550'\n    | '600'\n    | '700'\n    | '800'\n    | '900'\n    | '1000'",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"150\" | \"200\" | \"250\" | \"300\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"700\" | \"800\" | \"900\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Adds margin below the heading. The default margin-botttom is 400."
                },
                "attribute": "margin-bottom",
                "reflect": false,
                "defaultValue": "'400'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "tag",
                "methodName": "validateTag"
            }, {
                "propName": "marginTop",
                "methodName": "validateMarginTop"
            }, {
                "propName": "marginBottom",
                "methodName": "validateMarginBottom"
            }];
    }
}
//# sourceMappingURL=gcds-heading.js.map
