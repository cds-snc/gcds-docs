import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig, logError } from "../../utils/utils";
import i18n from "./i18n/i18n";
/**
 * A card is a box containing structured, actionable content on a single topic.
 *
 * @slot title - Slot for the card title. Accepts rich text, so markup such as
 * `<abbr>`, `<em>` or an icon can be used where the card-title prop cannot. Falls back to
 * the card-title prop, which is mirrored into the light DOM so the title text stays
 * readable by DOM-text extraction tools.
 * @slot default - Slot for the card description. Accepts rich text and overwrites the
 * description prop if used. The description prop is mirrored into this slot for the same
 * DOM-text reason when nothing is slotted.
 */
export class GcdsCard {
    constructor() {
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
        /**
         * Whether the consumer supplied their own title or description through a slot.
         * Captured once, before any mirror node is added, so that the mirrors this
         * component writes into the light DOM can never be mistaken for author content.
         */
        this.hasSlottedTitle = false;
        this.hasSlottedDescription = false;
    }
    validateCardTitle() {
        if ((!this.cardTitle || this.cardTitle.trim() == '') && !this.el.querySelector('[slot="title"]')) {
            this.errors.push('cardTitle');
        }
        else if (this.errors.includes('cardTitle')) {
            this.errors.splice(this.errors.indexOf('cardTitle'), 1);
        }
    }
    validateHref() {
        if (!this.href || this.href.trim() == '') {
            this.errors.push('href');
        }
        else if (this.errors.includes('href')) {
            this.errors.splice(this.errors.indexOf('href'), 1);
        }
    }
    validateBadge() {
        if (this.badge && this.badge.length > 20) {
            console.error(`${i18n['en'].badgeError} | ${i18n['fr'].badgeError}`);
            this.errors.push('badge');
        }
        else if (this.errors.includes('badge')) {
            this.errors.splice(this.errors.indexOf('badge'), 1);
        }
    }
    /*
     * Observe lang attribute change
     */
    updateLang() {
        const observer = new MutationObserver(mutations => {
            if (mutations[0].oldValue != this.el.lang) {
                this.lang = this.el.lang;
            }
        });
        observer.observe(this.el, observerConfig);
    }
    /*
     * Validate required properties
     */
    validateRequiredProps() {
        this.validateCardTitle();
        this.validateHref();
        if (this.errors.includes('href') || this.errors.includes('cardTitle')) {
            return false;
        }
        return true;
    }
    /*
     * Author content assigned to one slot, ignoring this component's own mirrors.
     *
     * Checking `innerHTML` is not sufficient once `title` is a public slot: a card
     * that slots only a title would read as having a slotted description too, and
     * the description prop would be silently dropped.
     */
    hasSlottedContent(slotName) {
        return Array.from(this.el.childNodes).some(node => {
            var _a;
            // Numeric node types — Stencil's mock-doc does not expose the Node constants.
            if (node.nodeType === 3) {
                return !slotName && !!((_a = node.textContent) === null || _a === void 0 ? void 0 : _a.trim());
            }
            if (node.nodeType !== 1) {
                return false;
            }
            const child = node;
            if (child.hasAttribute('data-gcds-text-mirror')) {
                return false;
            }
            const assigned = child.getAttribute('slot');
            return slotName ? assigned === slotName : !assigned;
        });
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateBadge();
        // Must be read before syncTextMirrors() adds anything to the light DOM.
        this.hasSlottedTitle = this.hasSlottedContent('title');
        this.hasSlottedDescription = this.hasSlottedContent();
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-card', this.errors, ['badge']);
        }
        this.syncTextMirrors();
    }
    componentWillUpdate() {
        this.syncTextMirrors();
    }
    /*
     * A card that fails validation renders nothing, so it must not leave mirror
     * text behind in the light DOM for textContent to pick up.
     */
    get shouldMirrorText() {
        return !this.errors.includes('href') && !this.errors.includes('cardTitle');
    }
    /*
     * Mirror attribute-provided text into the light DOM.
     *
     * card-title and description are rendered through named slots, so without a
     * light DOM node to fill them the text only ever exists inside the shadow root.
     * textContent does not pierce a shadow root, which makes the card invisible to
     * DOM-text extraction — including the browser-native read-aloud features on
     * Android and iOS, which stop at the first unreadable card. The ARIA tree is
     * unaffected either way, so screen readers behave the same before and after.
     */
    syncTextMirrors() {
        const active = this.shouldMirrorText;
        // Only mirror a prop when the consumer has not slotted their own content,
        // otherwise the card would render the author's markup and the prop text.
        this.upsertTextMirror('title', active && !this.hasSlottedTitle ? this.cardTitle : undefined);
        this.upsertTextMirror(undefined, active && !this.hasSlottedDescription ? this.description : undefined);
    }
    upsertTextMirror(slot, value) {
        const doc = this.el.ownerDocument;
        if (!doc) {
            return;
        }
        // Direct children only, and without :scope — Stencil's mock-doc selector
        // engine does not support that pseudo-class.
        const existing = Array.from(this.el.children).find(child => (slot ? child.getAttribute('slot') === slot : !child.getAttribute('slot')) &&
            child.hasAttribute('data-gcds-text-mirror'));
        if (!value) {
            existing === null || existing === void 0 ? void 0 : existing.remove();
            return;
        }
        if (existing) {
            if (existing.textContent !== value) {
                existing.textContent = value;
            }
            return;
        }
        const mirror = doc.createElement('span');
        if (slot) {
            mirror.setAttribute('slot', slot);
        }
        mirror.setAttribute('data-gcds-text-mirror', '');
        mirror.textContent = value;
        this.el.appendChild(mirror);
    }
    get renderDescription() {
        if (this.hasSlottedDescription) {
            return (h("div", { class: "gcds-card__description" }, h("slot", null)));
        }
        else if (this.description) {
            return (h("div", { class: "gcds-card__description" }, h("gcds-text", { "margin-bottom": "0" }, h("slot", null, this.description))));
        }
        else {
            return null;
        }
    }
    render() {
        const { cardTitle, cardTitleTag, href, badge, imgSrc, imgAlt, rel, target, renderDescription, lang, errors, } = this;
        const Element = cardTitleTag;
        const taggedAttr = {};
        if (badge) {
            taggedAttr['aria-describedby'] = 'gcds-badge';
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: 'f3c393ab31a6e837066e86752a550b421d1a832f' }, h("div", { key: 'af6b6bcf27020ca76234d0952ab590c3cb757aa6', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: '0579c1b43388a52db59023fe0185283917d4a42e', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: '50e83131805a091372d307eb09025978c4d18ac8' }, h("gcds-sr-only", { key: 'f768a327fece65782141499d981ec587710a3346', tag: "span" }, i18n[lang].tagged), badge))), imgSrc && (h("img", { key: '03937e6671769a5a25cb7181dd2acbafa6d1e2ff', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, h("slot", { name: "title" }, cardTitle)))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title", rel: rel, target: target }, taggedAttr), h("slot", { name: "title" }, cardTitle))), renderDescription)));
        }
    }
    static get is() { return "gcds-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gcds-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gcds-card.css"]
        };
    }
    static get properties() {
        return {
            "cardTitle": {
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
                    "text": "The card title attribute specifies the title that appears on the card"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "card-title"
            },
            "href": {
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
                    "text": "The href attribute specifies the URL of the page the link goes to"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "href"
            },
            "cardTitleTag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'h3' | 'h4' | 'h5' | 'h6'",
                    "resolved": "\"h3\" | \"h4\" | \"h5\" | \"h6\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The card title tag property specifies the HTML heading element for the title.\nThis property does not modify the font size. It is used to assign the heading level\nin order to maintain heading hierarchy and accessibility for assistive technologies."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "card-title-tag"
            },
            "description": {
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
                    "text": "The description attribute specifies the body of text that appears on the card"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "description"
            },
            "badge": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "badge"
            },
            "imgSrc": {
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
                    "text": "The img src attribute specifies the path to the image"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "img-src"
            },
            "imgAlt": {
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
                    "text": "The img alt attribute specifies the alt text for the image provided, if none, image will be decorative"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "img-alt"
            },
            "rel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The rel attribute specifies the relationship between the current document and the linked document"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rel"
            },
            "target": {
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
                    "text": "The target attribute specifies where to open the linked document"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "target"
            }
        };
    }
    static get states() {
        return {
            "lang": {},
            "errors": {}
        };
    }
    static get events() {
        return [{
                "method": "gcdsFocus",
                "name": "gcdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the card has focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsBlur",
                "name": "gcdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the card loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "gcdsClick",
                "name": "gcdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the card has been clicked. Contains the href in the event detail."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "cardTitle",
                "methodName": "validateCardTitle"
            }, {
                "propName": "href",
                "methodName": "validateHref"
            }, {
                "propName": "badge",
                "methodName": "validateBadge"
            }];
    }
}
