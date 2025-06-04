import { Host, h } from "@stencil/core";
import i18n from "./i18n/i18n";
export class GcdsIcon {
    constructor() {
        this.label = undefined;
        this.marginLeft = undefined;
        this.marginRight = undefined;
        this.name = undefined;
        this.size = 'inherit';
    }
    validateName(newValue) {
        const values = [
            'checkmark-circle',
            'chevron-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'close',
            'download',
            'email',
            'exclamation-circle',
            'external',
            'info-circle',
            'phone',
            'search',
            'warning-triangle',
        ];
        if (!values.includes(newValue)) {
            console.error(`${i18n['en'].nameError} | ${i18n['fr'].nameError}`);
        }
    }
    validateSize(newValue) {
        const values = [
            'inherit',
            'text-small',
            'text',
            'h6',
            'h5',
            'h4',
            'h3',
            'h2',
            'h1',
        ];
        if (!values.includes(newValue)) {
            this.size = 'inherit';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateName(this.name);
        this.validateSize(this.size);
    }
    render() {
        const { label, marginLeft, marginRight, name, size } = this;
        return (h(Host, { key: '9e8467eb5092e15bc355d76842f3fd5b295cd1cf' }, h("span", { key: '13576b749ede045265726f613283c318440fbab8', class: `
            gcds-icon gcds-icon-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
          `, role: "img", "aria-label": label ? label : false, "aria-hidden": label ? 'false' : 'true' })));
    }
    static get is() { return "gcds-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-icon.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": "Add icon description."
                },
                "attribute": "label",
                "reflect": false
            },
            "marginLeft": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"25\" | \"50\" | \"75\" | \"100\" | \"125\" | \"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"1250\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Add margin to the left of the icon"
                },
                "attribute": "margin-left",
                "reflect": false
            },
            "marginRight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"25\" | \"50\" | \"75\" | \"100\" | \"125\" | \"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"1250\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Add margin to the right of the icon"
                },
                "attribute": "margin-right",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "| 'checkmark-circle'\n    | 'chevron-down'\n    | 'chevron-left'\n    | 'chevron-right'\n    | 'chevron-up'\n    | 'close'\n    | 'download'\n    | 'email'\n    | 'exclamation-circle'\n    | 'external'\n    | 'info-circle'\n    | 'phone'\n    | 'search'\n    | 'warning-triangle'",
                    "resolved": "\"checkmark-circle\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"close\" | \"download\" | \"email\" | \"exclamation-circle\" | \"external\" | \"info-circle\" | \"phone\" | \"search\" | \"warning-triangle\"",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name of the icon."
                },
                "attribute": "name",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'inherit'\n    | 'text-small'\n    | 'text'\n    | 'h6'\n    | 'h5'\n    | 'h4'\n    | 'h3'\n    | 'h2'\n    | 'h1'",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"inherit\" | \"text\" | \"text-small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the size of the icon."
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'inherit'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "validateName"
            }, {
                "propName": "size",
                "methodName": "validateSize"
            }];
    }
}
//# sourceMappingURL=gcds-icon.js.map
