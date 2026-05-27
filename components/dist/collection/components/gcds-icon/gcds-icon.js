import { Host, h } from "@stencil/core";
import i18n from "./i18n/i18n";
/**
 * An icon is a symbol that visually represents an action or idea.
 */
export class GcdsIcon {
    constructor() {
        /**
         * Defines the size of the icon.
         */
        this.size = 'inherit';
    }
    validateName(newValue) {
        const values = [
            'arrow-down',
            'arrow-up',
            'arrow-up-down',
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
            'filter',
            'info-circle',
            'phone',
            'search',
            'sort',
            'tune',
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
        return (h(Host, { key: '447a454486166e31b5d75b782f24d741e8ecf51f' }, h("span", { key: 'a114b9edb1972f636c7116d51afb0c83c481fe9a', class: `
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "marginLeft": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues",
                            "referenceLocation": "SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Add margin to the left of the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin-left"
            },
            "marginRight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SpacingValues",
                    "resolved": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
                    "references": {
                        "SpacingValues": {
                            "location": "import",
                            "path": "../../utils/types/spacing",
                            "id": "src/utils/types/spacing.tsx::SpacingValues",
                            "referenceLocation": "SpacingValues"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Add margin to the right of the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "margin-right"
            },
            "name": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "IconNames",
                    "resolved": "\"arrow-down\" | \"arrow-up\" | \"arrow-up-down\" | \"checkmark-circle\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"close\" | \"download\" | \"email\" | \"exclamation-circle\" | \"external\" | \"filter\" | \"info-circle\" | \"phone\" | \"search\" | \"sort\" | \"tune\" | \"warning-triangle\"",
                    "references": {
                        "IconNames": {
                            "location": "local",
                            "path": "/home/runner/work/gcds-components/gcds-components/packages/web/src/components/gcds-icon/gcds-icon.tsx",
                            "id": "src/components/gcds-icon/gcds-icon.tsx::IconNames"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name of the icon."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
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
