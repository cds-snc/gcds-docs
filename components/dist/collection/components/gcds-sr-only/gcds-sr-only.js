import { Host, h } from "@stencil/core";
export class GcdsSrOnly {
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get is() { return "gcds-sr-only"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-sr-only.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-sr-only.css"]
        };
    }
}
//# sourceMappingURL=gcds-sr-only.js.map
