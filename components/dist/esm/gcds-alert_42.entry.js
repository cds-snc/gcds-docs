import { r as registerInstance, c as createEvent, h, a as Host, g as getElement, F as Fragment } from './index-04fcdc9c.js';

const inheritAttributes = (el, shadowElement, attributes = []) => {
    let attributeObject = {};
    // Check for any aria attributes
    for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i];
        if (attr.name.includes('aria-')) {
            attributeObject[attr.name] = attr.value;
        }
    }
    // Check for attributes defined by component
    attributes.forEach(attr => {
        if (el.hasAttribute(attr) ||
            (shadowElement && shadowElement.hasAttribute(attr))) {
            const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
            if (value !== null) {
                attributeObject[attr] =
                    el.getAttribute(attr) || shadowElement.getAttribute(attr);
            }
            el.removeAttribute(attr);
        }
    });
    return attributeObject;
};
const assignLanguage = (el) => {
    var _a;
    let lang = '';
    if (!el.getAttribute('lang')) {
        const closestLangAttribute = (_a = closestElement('[lang]', el)) === null || _a === void 0 ? void 0 : _a.getAttribute('lang');
        if (closestLangAttribute == 'en' || !closestLangAttribute) {
            lang = 'en';
        }
        else {
            lang = 'fr';
        }
    }
    else if (el.getAttribute('lang') == 'en') {
        lang = 'en';
    }
    else {
        lang = 'fr';
    }
    return lang;
};
// Allows use of closest() function across shadow boundaries
const closestElement = (selector, el) => {
    if (el) {
        return ((el &&
            el != document &&
            typeof window != 'undefined' &&
            el != window &&
            el.closest(selector)) ||
            closestElement(selector, el.getRootNode().host));
    }
    return null;
};
const observerConfig = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['lang'],
};
// For validation - check if element has a checked checkbox/radio sibling
const elementGroupCheck = name => {
    let hasCheck = false;
    const element = document.querySelectorAll(`input[name=${name}]`);
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            hasCheck = true;
        }
    }
    return !hasCheck;
};
// Emit event with logic to cancel HTML events
// Returns false if event has been prevented
const emitEvent = (e, customEvent, value) => {
    const event = customEvent.emit(value);
    // Was the custom or native event interrupted
    if (event.defaultPrevented || e.defaultPrevented) {
        // Stop native HTML event in shadow-dom
        e.preventDefault();
        return false;
    }
    return true;
};
/* Log validation error for required properties in components
 * @param name - name of the component i.e. <gcds-*>
 * @param errorArr - array of attributes with errors
 * @param optionalAttrsArrToRemove - array of optional attributes with errors to be removed from this error message
 */
const logError = (name, errorArr, optionalAttrsArrToRemove) => {
    let engMsg = 'Render error, please check required properties.';
    let frMsg = 'Erreur de rendu, veuillez vérifier les propriétés requises.';
    let errors = [...errorArr];
    // remove any potential optional attributes from errors array
    if (optionalAttrsArrToRemove && optionalAttrsArrToRemove.length > 0) {
        for (const optionalAttr of optionalAttrsArrToRemove) {
            if (errors.includes(optionalAttr)) {
                errors.splice(errors.indexOf(optionalAttr), 1);
            }
        }
    }
    console.error(`${name}: ${engMsg} (${errors}) | ${name}: ${frMsg} (${errors})`);
};
/* Check for valid date
 * @param dateString - the date to check
 */
const isValidDate = (dateString, forceFormat) => {
    // Define regex pattern to match YYYY-MM-DD format
    let fullregex = /^\d{4}-\d{2}-\d{2}$/;
    let compactregex = /^\d{4}-\d{2}$/;
    let format = '';
    // Check if the format matches the regex
    if (fullregex.test(dateString)) {
        format = 'full';
    }
    else if (compactregex.test(dateString)) {
        format = 'compact';
    }
    else {
        return false;
    }
    if (forceFormat && format != forceFormat) {
        return false;
    }
    // Parse the date string into a Date object
    const formattedDate = `${dateString}${format === 'compact' ? '-15' : ''}`;
    // Check if the date is valid
    const [year, month, day] = formattedDate.split('-').map(Number);
    const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
    const thirtyDays = [4, 6, 9, 11];
    if (month < 1 || month > 12) {
        return false;
    }
    else if (thirtyDays.includes(month) && (day < 1 || day > 30)) {
        return false;
    }
    else if (thirtyOneDays.includes(month) && (day < 1 || day > 31)) {
        return false;
    }
    else if (!isLeapYear(year) && month === 2 && (day < 1 || day > 28)) {
        return false;
    }
    else if (isLeapYear(year) && month === 2 && (day < 1 || day > 29)) {
        return false;
    }
    return true;
};
function isLeapYear(y) {
    return !(y & 3 || (!(y % 25) && y & 15));
}

const I18N$q = {
  en: {
    label: {
      danger: 'This is a critical alert.',
      info: 'This is an info alert.',
      success: 'This is a success alert.',
      warning: 'This is a warning alert.',
    },
    closeBtn: 'Close alert.',
  },
  fr: {
    label: {
      danger: "Ceci est une alerte d'effacement.",
      info: "Ceci est une alerte d'information.",
      success: 'Ceci est une alerte de succès.',
      warning: "Ceci est une alerte d'avertissement.",
    },
    closeBtn: "Fermer l'alerte.",
  },
};

const gcdsAlertCss = "@layer reset, default, fixed, role, wide, compact, hover, focus;@layer reset{:host{display:block}:host .gcds-alert{box-sizing:border-box;text-align:left}:host .gcds-alert .alert__close-btn{box-sizing:border-box;cursor:pointer;padding:0}:host .gcds-alert slot{display:initial}}@layer default{:host .gcds-alert{border-inline-start:var(--gcds-alert-border-width) solid transparent;color:var(--gcds-alert-text);container:component alert/inline-size;font:var(--gcds-alert-font);padding:var(--gcds-alert-padding)}:host .gcds-alert .alert__content{flex:1 1 auto}:host .gcds-alert .alert__content .alert__heading{font:var(--gcds-alert-content-heading-font);margin:var(--gcds-alert-content-heading-margin)}:host .gcds-alert .alert__content ::slotted(*){margin-block-start:0}:host .gcds-alert .alert__content ::slotted(:last-child){margin-block-end:0}:host .gcds-alert .alert__content ::slotted(:not(:last-child)){margin-block-end:var(--gcds-alert-content-slotted-margin)}:host .gcds-alert .alert__content ::slotted(ol),:host .gcds-alert .alert__content ::slotted(ul){margin-inline-start:var(--gcds-alert-content-slotted-list-margin);padding:0}:host .gcds-alert .alert__close-btn{background-color:var(--gcds-alert-button-default-background);border:var(--gcds-alert-button-border-width) solid transparent;border-radius:var(--gcds-alert-button-border-radius);color:var(--gcds-alert-button-default-text);margin:var(--gcds-alert-button-margin);transition:all .15s ease-in-out}:host .gcds-alert .alert__close-btn gcds-icon{align-items:center;display:flex;height:var(--gcds-alert-button-icon-width-and-height);justify-content:center;padding:var(--gcds-alert-button-icon-padding);width:var(--gcds-alert-button-icon-width-and-height)}}@layer fixed{:host .gcds-alert.alert--is-fixed{border:0;position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-alert.alert--role-danger{background-color:var(--gcds-alert-danger-background);border-color:var(--gcds-alert-danger-icon);color:var(--gcds-alert-danger-text)}:host .gcds-alert.alert--role-danger .alert__icon{color:var(--gcds-alert-danger-icon)}:host .gcds-alert.alert--role-info{background-color:var(--gcds-alert-info-background);border-color:var(--gcds-alert-info-icon);color:var(--gcds-alert-info-text)}:host .gcds-alert.alert--role-info .alert__icon{color:var(--gcds-alert-info-icon)}:host .gcds-alert.alert--role-success{background-color:var(--gcds-alert-success-background);border-color:var(--gcds-alert-success-icon);color:var(--gcds-alert-success-text)}:host .gcds-alert.alert--role-success .alert__icon{color:var(--gcds-alert-success-icon)}:host .gcds-alert.alert--role-warning{background-color:var(--gcds-alert-warning-background);border-color:var(--gcds-alert-warning-icon);color:var(--gcds-alert-warning-text)}:host .gcds-alert.alert--role-warning .alert__icon{color:var(--gcds-alert-warning-icon)}}@layer wide{@container alert (width >= 36em){:host .gcds-alert .alert__container{align-items:flex-start;display:flex}}}@layer compact{@container alert (width < 36em){:host .gcds-alert .alert__icon{margin:var(--gcds-alert-icon-mobile-margin)}:host .gcds-alert .alert__heading{margin:var(--gcds-alert-content-heading-mobile-margin)}:host .gcds-alert .alert__close-btn{margin:var(--gcds-alert-button-mobile-margin)}}}@layer hover{:is(:host .gcds-alert .alert__close-btn:active,:host .gcds-alert .alert__close-btn:hover){border-color:currentColor}}@layer focus{:host .gcds-alert .alert__close-btn:focus{background-color:var(--gcds-alert-button-focus-background);border-color:var(--gcds-alert-button-focus-background);box-shadow:0 0 0 var(--gcds-alert-button-border-width) var(--gcds-alert-button-focus-text);color:var(--gcds-alert-button-focus-text);outline:var(--gcds-alert-button-outline-width) solid var(--gcds-alert-button-focus-background);outline-offset:var(--gcds-alert-button-border-width)}}";
const GcdsAlertStyle0 = gcdsAlertCss;

const GcdsAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsDismiss = createEvent(this, "gcdsDismiss", 7);
        this.alertRole = 'info';
        this.container = 'full';
        this.heading = undefined;
        this.hideCloseBtn = false;
        this.hideRoleIcon = false;
        this.isFixed = false;
        this.isOpen = true;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang, } = this;
        return (h(Host, { key: 'f0856a42192ff33a6157989152da33915175b3a7' }, isOpen ? (h("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`, role: "alert", "aria-label": alertRole === 'danger'
                ? I18N$q[lang].label.danger
                : alertRole === 'info'
                    ? I18N$q[lang].label.info
                    : alertRole === 'success'
                        ? I18N$q[lang].label.success
                        : alertRole === 'warning'
                            ? I18N$q[lang].label.warning
                            : null }, h("gcds-container", { size: isFixed ? container : 'full', centered: true }, h("div", { class: "alert__container" }, !hideRoleIcon && (h("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", "margin-right": "175", name: alertRole === 'danger'
                ? 'exclamation-circle'
                : alertRole === 'info'
                    ? 'info-circle'
                    : alertRole === 'success'
                        ? 'checkmark-circle'
                        : alertRole === 'warning'
                            ? 'warning-triangle'
                            : null })), h("div", { class: "alert__content" }, h("p", { class: "alert__heading" }, h("strong", null, heading)), h("slot", null)), !hideCloseBtn && (h("button", { class: "alert__close-btn", onClick: e => {
                const event = emitEvent(e, this.gcdsDismiss);
                if (event) {
                    this.isOpen = false;
                }
            }, "aria-label": I18N$q[lang].closeBtn }, h("gcds-icon", { "aria-hidden": "true", name: "close", size: "text" }))))))) : null));
    }
    get el() { return getElement(this); }
};
GcdsAlert.style = GcdsAlertStyle0;

const I18N$p = {
  en: {
    label: 'Breadcrumb',
    link: 'https://www.canada.ca/en.html',
  },
  fr: {
    label: 'Chemin de navigation',
    link: 'https://www.canada.ca/fr.html',
  },
};

const gcdsBreadcrumbsCss = "@layer reset, default;@layer reset{:host{display:block}:host .gcds-breadcrumbs ol{list-style:none;overflow-x:hidden}}@layer default{:host .gcds-breadcrumbs ol{margin:var(--gcds-breadcrumbs-margin);padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child):before{display:none}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}}";
const GcdsBreadcrumbsStyle0 = gcdsBreadcrumbsCss;

const GcdsBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hideCanadaLink = false;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { hideCanadaLink, lang } = this;
        return (h(Host, { key: 'b491e1522dfdc3320619a47f4de098ba18948fc2' }, h("nav", { key: '448a711e139c76385faa9dc68a9fc848b8756fae', "aria-label": I18N$p[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: 'a2a2793c7ffc1ffe313d97be01d038d6367994fc', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: I18N$p[lang].link }, "Canada.ca")) : null, h("slot", { key: 'cecaeb514adb99fc32d0edc9692290832292a853' })))));
    }
    get el() { return getElement(this); }
};
GcdsBreadcrumbs.style = GcdsBreadcrumbsStyle0;

const gcdsBreadcrumbsItemCss = "@layer reset, default, hover, focus;@layer reset{:host(.gcds-breadcrumbs-item){display:inline-block}:host(.gcds-breadcrumbs-item) gcds-link::part(link){display:inline-block;white-space:normal}:host(.gcds-breadcrumbs-item) slot{display:block}}@layer default{:host(.gcds-breadcrumbs-item){margin:var(--gcds-breadcrumbs-item-margin)!important}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"12\" viewBox=\"0 0 8 14\"><path fill=\"26374a\" d=\"M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0z\"/></svg>');display:inline-block;margin:var(--gcds-breadcrumbs-item-arrow-margin);width:.375rem}:host(.gcds-breadcrumbs-item) gcds-link::part(link){font:var(--gcds-breadcrumbs-item-font)}}";
const GcdsBreadcrumbsItemStyle0 = gcdsBreadcrumbsItemCss;

const GcdsBreadcrumbsItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
    }
    render() {
        const { href } = this;
        return (h(Host, { key: '3da5881b7eba6bede5ffaf1e9640b99152332478', role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { key: '91361ed032a6ddfe13cef12783df531c1178c2b4', size: "regular", href: href }, h("slot", { key: '5053ab0d54759ef4080731fe78976a3d648be17c' }))));
    }
    get el() { return getElement(this); }
};
GcdsBreadcrumbsItem.style = GcdsBreadcrumbsItemStyle0;

const I18N$o = {
  en: {
    label: 'Opens in a new tab.',
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet.",
  },
};

const gcdsButtonCss = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{display:inline-block;text-align:center;width:var(--gcds-button-width);text-wrap:balance;border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);font:var(--gcds-button-font-desktop);padding:var(--gcds-button-padding);transition:all .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-button{font:var(--gcds-button-font-mobile)}}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-start{background-color:var(--gcds-button-start-default-background);color:var(--gcds-button-start-default-text);font:var(--gcds-button-start-font-desktop);padding:var(--gcds-button-start-padding)}@media only screen and (width < 48em){:host .gcds-button.button--role-start{font:var(--gcds-button-start-font-mobile)}}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}}@layer disabled{:host .gcds-button[aria-disabled=true]{cursor:not-allowed;opacity:var(--gcds-button-shared-disabled-opacity);pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-start{background-color:var(--gcds-button-start-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";
const GcdsButtonStyle0 = gcdsButtonCss;

const GcdsButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.handleClick = (e) => {
            // Check button type, only emit value if type is "submit"
            const emitValue = this.type === 'submit' ? this.value : undefined;
            const event = emitEvent(e, this.gcdsClick, emitValue);
            if (event) {
                if (!this.disabled && this.type != 'button' && this.type != 'link') {
                    // Attach button to form
                    const form = this.el.closest('form');
                    if (form) {
                        e.preventDefault();
                        const formButton = document.createElement('button');
                        formButton.type = this.type;
                        if (this.name) {
                            formButton.name = this.name;
                        }
                        if (this.value) {
                            formButton.value = this.value;
                        }
                        formButton.style.display = 'none';
                        form.appendChild(formButton);
                        formButton.click();
                        formButton.remove();
                    }
                }
                // Has any inherited attributes changed on click
                this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
            }
        };
        this.type = 'button';
        this.buttonRole = 'primary';
        this.size = 'regular';
        this.buttonId = undefined;
        this.name = undefined;
        this.disabled = undefined;
        this.value = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.target = undefined;
        this.download = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateType(newValue) {
        const values = ['submit', 'reset', 'button', 'link'];
        if (!values.includes(newValue)) {
            this.type = 'button';
        }
    }
    validateButtonRole(newValue) {
        const values = ['start', 'primary', 'secondary', 'danger'];
        if (!values.includes(newValue)) {
            this.buttonRole = 'primary';
        }
        else if (newValue === 'start' && this.size === 'small') {
            this.size = 'regular';
        }
    }
    validateSize(newValue) {
        const values = ['regular', 'small'];
        if (!values.includes(newValue) || this.buttonRole === 'start') {
            this.size = 'regular';
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
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateType(this.type);
        this.validateButtonRole(this.buttonRole);
        this.validateSize(this.size);
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { type, buttonRole, size, buttonId, disabled, lang, name, href, rel, target, download, value, inheritedAttributes, } = this;
        const Tag = type != 'link' ? 'button' : 'a';
        const attrs = Tag === 'button'
            ? {
                type: type,
                ariaDisabled: disabled,
                name,
                value,
            }
            : {
                href,
                rel,
                target,
                download,
            };
        return (h(Host, { key: 'e9202b1e4d820aa2e87d18f11488382be7966e47' }, h(Tag, Object.assign({ key: 'c6e31af06c5103d15b75b88517e326b749f3908b' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => !disabled && this.handleClick(e), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { key: 'c30f8d29a50b34baa98a7f97fe06ee1e296339d0' }), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external", label: I18N$o[lang].label, "margin-left": "150" })) : null)));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"]
    }; }
};
GcdsButton.style = GcdsButtonStyle0;

const I18N$n = {
  en: {
    tagged: 'Tagged:',
    badgeError: 'gcds-card: The badge attribute has a character limit of 20 characters.',
  },
  fr: {
    tagged: 'Baliser :',
    badgeError: 'gcds-card: L\'attribut badge a une limite de caractères de 20 caractères.',
  },
};

const gcdsCardCss = "@layer reset, default, link, hover, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);box-shadow:var(--gcds-card-box-shadow);color:var(--gcds-card-color);display:block;height:100%;max-width:var(--gcds-card-max-width);overflow:hidden;padding:var(--gcds-card-padding);position:relative}:host .gcds-card .gcds-badge{background-color:var(--gcds-card-badge-background-color);left:0;padding:var(--gcds-card-badge-padding);position:absolute;top:0;text-wrap:nowrap}@media only screen and (width < 48em){:host .gcds-card .gcds-badge{padding:var(--gcds-card-badge-mobile-padding)}}:host .gcds-card .gcds-card__image{margin:var(--gcds-card-image-margin);width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-desktop);width:fit-content}@media only screen and (width < 48em){:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-mobile)}}:host .gcds-card .gcds-card__title:has(+.gcds-card__description){margin:var(--gcds-card-title-margin)}:host .gcds-card .gcds-card__description{--gcds-text-size-body-desktop:var(--gcds-card-description-font-desktop)}@media only screen and (width < 48em){:host .gcds-card .gcds-card__description{font:var(--gcds-card-description-font-mobile)}}}@layer link{:host .gcds-card gcds-link::part(link):after{bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}}@layer hover{@media (hover:hover){:host .gcds-card:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}@layer focus{:host .gcds-card:has(:focus-within){box-shadow:var(--gcds-card-focus-box-shadow);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset)}:host gcds-link::part(link):focus{background-color:var(--gcds-card-focus-link-background-color);border:var(--gcds-card-focus-link-border);box-shadow:var(--gcds-card-focus-link-box-shadow);color:var(--gcds-card-focus-link-color);outline:var(--gcds-card-focus-link-outline);text-decoration:underline currentColor var(--gcds-card-focus-link-text-decoration-thickness)}}";
const GcdsCardStyle0 = gcdsCardCss;

const GcdsCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.cardTitle = undefined;
        this.href = undefined;
        this.cardTitleTag = 'a';
        this.description = undefined;
        this.badge = undefined;
        this.imgSrc = undefined;
        this.imgAlt = undefined;
        this.lang = undefined;
        this.errors = [];
    }
    validateCardTitle() {
        if (!this.cardTitle || this.cardTitle.trim() == '') {
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
            console.error(`${I18N$n['en'].badgeError} | ${I18N$n['fr'].badgeError}`);
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateBadge();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-card', this.errors, ['badge']);
        }
    }
    get renderDescription() {
        if (this.el.innerHTML.trim() != '') {
            return h("div", { class: "gcds-card__description" }, h("slot", null));
        }
        else if (this.description) {
            return h("div", { class: "gcds-card__description" }, h("gcds-text", { "margin-bottom": '0' }, this.description));
        }
        else {
            return null;
        }
    }
    render() {
        const { cardTitle, cardTitleTag, href, badge, imgSrc, imgAlt, renderDescription, lang, errors, } = this;
        const Element = cardTitleTag;
        const taggedAttr = {};
        if (badge) {
            taggedAttr['aria-describedby'] = 'gcds-badge';
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '1ca25f4b643e43fbfd1c44acc397921f30f32d8f' }, h("div", { key: 'ceb107cae158eaee0c3c545cd7f17b104742ac6a', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: '2fdbe2d8fb6ee0526cc81a4a27bd43d8a4c05353', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: '4f3abc137cc4825a59a50f992b97a2f9b2d2cfa4' }, h("gcds-sr-only", { key: 'fe5592bd351ceb2017acb1822ccf39efb292abb7' }, I18N$n[lang].tagged), badge))), imgSrc && (h("img", { key: 'c3b94f98e9900ad8b5acc82dc8f1db56ae38496e', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), renderDescription)));
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "cardTitle": ["validateCardTitle"],
        "href": ["validateHref"],
        "badge": ["validateBadge"]
    }; }
};
GcdsCard.style = GcdsCardStyle0;

const defaultValidator = {
    validate: (_x) => true,
};
function combineValidators(v1, v2) {
    let combined;
    combined = {
        validate: (x) => {
            const res1 = v1.validate(x);
            const res2 = v2.validate(x);
            if (!res1) {
                combined.errorMessage = v1.errorMessage;
            }
            else if (!res2) {
                combined.errorMessage = v2.errorMessage;
            }
            return res1 && res2;
        },
    };
    return combined;
}
function requiredValidator(element, type, subtype) {
    if (element.required) {
        switch (type) {
            // Components all validate the "value" property
            case 'input':
                switch (subtype) {
                    case 'email':
                        if (element.validator) {
                            element.validator.unshift('requiredEmailField');
                        }
                        else {
                            element.validator = ['requiredEmailField'];
                        }
                        break;
                    default:
                        if (element.validator) {
                            element.validator.unshift('requiredField');
                        }
                        else {
                            element.validator = ['requiredField'];
                        }
                        break;
                }
                break;
            case 'select':
                if (element.validator) {
                    element.validator.unshift('requiredSelectField');
                }
                else {
                    element.validator = ['requiredSelectField'];
                }
                break;
            case 'textarea':
                if (element.validator) {
                    element.validator.unshift('requiredField');
                }
                else {
                    element.validator = ['requiredField'];
                }
                break;
            case 'file':
                if (element.validator) {
                    element.validator.unshift('requiredFileInput');
                }
                else {
                    element.validator = ['requiredFileInput'];
                }
                break;
            case 'checkbox':
                if (element.validator) {
                    element.validator.unshift('requiredCheck');
                }
                else {
                    element.validator = ['requiredCheck'];
                }
                break;
            case 'fieldset':
                if (element.validator) {
                    element.validator.unshift('requiredFieldset');
                }
                else {
                    element.validator = ['requiredFieldset'];
                }
                break;
            case 'date-input':
                if (element.validator) {
                    element.validator.unshift('requiredDateInput');
                }
                else {
                    element.validator = ['requiredDateInput'];
                }
                break;
        }
    }
}
/*
Example of parameter validator

export function getLengthValidator(min: number, max: number): Validator<string> {
    // Create errorMessage object
    let errorMessage = {};
    if (min && max) {
        errorMessage["en"] = `You must enter between ${min} and ${max} characters`;
        errorMessage["fr"] = `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
        errorMessage["en"] = `You must enter at least ${min} characters`;
        errorMessage["fr"] = `French You must enter at least ${min} characters`;
    } else if (max) {
        errorMessage["en"] = `You must enter less than ${max} characters`;
        errorMessage["fr"] = `French You must enter less than ${max} characters`;
    }
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            }
            return true;
        },
        errorMessage
    };
}
*/

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const requiredField = {
    validate: (value) => value != null && value.trim() != '',
    errorMessage: {
        en: 'Enter information to continue.',
        fr: 'Saisissez des renseignements pour continuer.',
    },
};
const requiredEmailField = {
    validate: (value) => value != null &&
        value.trim() != '' &&
        (value.toLowerCase().match(emailPattern) ? true : false),
    errorMessage: {
        en: 'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
        fr: 'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
    },
};
const requiredFileInput = {
    validate: (value) => value.length > 0,
    errorMessage: {
        en: 'You must upload a file to continue.',
        fr: 'Vous devez téléverser un fichier pour continuer.',
    },
};
const requiredSelectField = {
    validate: (value) => value != null && value.trim() != '',
    errorMessage: {
        en: 'Choose an option to continue.',
        fr: 'Choisissez une option pour continuer.',
    },
};
/*
 * Date input validators
 */
const dateInputErrorMessage = {
    en: {
        all: 'Enter the date.',
        missingmonth: 'Select the month.',
        missingyear: 'Enter the year.',
        missingday: 'Enter the day.',
        missingmonthday: 'Select the month and enter the day.',
        missingmonthyear: 'Select the month and enter the year.',
        missingdayyear: 'Enter the day and year.',
        invalidyearlength: 'Year must be 4 digits.',
        invalidyear: 'Enter a valid year.',
        invalidday: 'Enter a valid day.',
    },
    fr: {
        all: 'Saisissez la date.',
        missingmonth: 'Sélectionnez un mois.',
        missingyear: "Saisissez l'année.",
        missingday: 'Saisissez le jour.',
        missingmonthday: 'Saisissez le jour et sélectionnez un mois.',
        missingmonthyear: "Sélectionnez un mois et saisissez l'année.",
        missingdayyear: "Saisissez le jour et l'année.",
        invalidyearlength: "L'année doit inclure 4 chiffres.",
        invalidyear: 'Entrez une année valide.',
        invalidday: 'Saisissez un jour valide.',
    },
};
const requiredDateInput = {
    validate: (date) => {
        if (isValidDate(date)) {
            return { valid: true };
        }
        let splitDate = date.split('-');
        let dateObject = {
            day: splitDate[2],
            month: splitDate[1],
            year: splitDate[0],
        };
        let format = splitDate.length === 3 ? 'full' : 'compact';
        const error = getDateInputError(dateObject, format);
        return error;
    },
    errorMessage: dateInputErrorMessage,
};
const getDateInputError = (dateValues, format) => {
    const { day, month, year } = dateValues;
    let errorResponse = {
        valid: false,
        errors: {
            day: false,
            month: false,
            year: false,
        },
        reason: {
            en: '',
            fr: '',
        },
    };
    // No values set
    if (!day && !month && !year) {
        errorResponse.errors.day = true;
        errorResponse.errors.month = true;
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.all;
        errorResponse.reason.fr = dateInputErrorMessage.fr.all;
        // No day set
    }
    else if (!day && month && year) {
        errorResponse.errors.day = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingday;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingday;
        // No month set
    }
    else if ((day && !month && year) ||
        (!day && !month && year && format === 'compact')) {
        errorResponse.errors.month = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingmonth;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonth;
        // No year set
    }
    else if ((day && month && !year) ||
        (!day && month && !year && format === 'compact')) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingyear;
        // No day and month set
    }
    else if (!day && !month && year) {
        errorResponse.errors.day = true;
        errorResponse.errors.month = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingmonthday;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthday;
        // No day and year set
    }
    else if (!day && month && !year) {
        errorResponse.errors.day = true;
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingdayyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingdayyear;
        // No month and year set
    }
    else if (day && !month && !year) {
        errorResponse.errors.year = true;
        errorResponse.errors.month = true;
        errorResponse.reason.en = dateInputErrorMessage.en.missingmonthyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthyear;
        // Year is formatted incorrectly
    }
    else if (year.length != 4) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.invalidyearlength;
        errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyearlength;
        // Year format
    }
    else if (year < 0 || year > 9999) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = dateInputErrorMessage.en.invalidyear;
        errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyear;
        // Invalid day
    }
    else {
        errorResponse.errors.day = true;
        errorResponse.reason.en = dateInputErrorMessage.en.invalidday;
        errorResponse.reason.fr = dateInputErrorMessage.fr.invalidday;
    }
    return errorResponse;
};

const requiredCheck = {
    validate: (value) => value,
    errorMessage: {
        en: 'You must check the box to continue.',
        fr: 'Vous devez cocher la case pour continuer.',
    },
};

const requiredFieldset = {
    validate: (id) => {
        const el = document.querySelector(`[fieldset-id=${id}]`);
        const elChildren = el.children;
        const isValid = validateFieldsetElements(el, elChildren);
        return !isValid.includes(false);
    },
    errorMessage: {
        en: 'Choose an option to continue.',
        fr: 'Choisissez une option pour continuer.',
    },
};
function validateFieldsetElements(element, nodeList) {
    let isValid = [];
    for (let i = 0; i < nodeList.length; i++) {
        switch (nodeList[i].nodeName) {
            case 'GCDS-FIELDSET': {
                const validFieldsetChildren = validateFieldsetElements(nodeList[i], nodeList[i].children);
                isValid = isValid.concat(validFieldsetChildren);
                break;
            }
            case 'GCDS-CHECKBOX': {
                // Checkboxes can share name property
                const inputName = nodeList[i].getAttribute('name');
                // Find all inputs with shared name
                const sameNameInputs = element.querySelectorAll(`[name=${inputName}]`);
                let childGroupValid = false;
                // Check if there is more than one input with this name
                if (sameNameInputs.length > 1) {
                    // Validate as group
                    for (let c = 0; c < sameNameInputs.length; c++) {
                        if (sameNameInputs[c].hasAttribute('checked')) {
                            childGroupValid = true;
                        }
                    }
                    isValid.push(childGroupValid);
                }
                else {
                    // Validate as single input
                    isValid.push(nodeList[i].hasAttribute('checked') ? true : false);
                }
                break;
            }
            case 'GCDS-RADIO-GROUP': {
                const inputName = nodeList[i].getAttribute('name');
                // Find all inputs with shared name
                const sameNameInputs = element.querySelector(`[name=${inputName}]`);
                const shadowInputs = sameNameInputs.shadowRoot.querySelectorAll('input');
                let childGroupValid = false;
                for (let r = 0; r < shadowInputs.length; r++) {
                    if (shadowInputs[r].checked) {
                        childGroupValid = true;
                    }
                }
                isValid.push(childGroupValid);
                break;
            }
        }
    }
    return isValid;
}

var ValidatorsName;
(function (ValidatorsName) {
    ValidatorsName["requiredField"] = "requiredField";
    ValidatorsName["requiredEmailField"] = "requiredEmailField";
    ValidatorsName["requiredCheck"] = "requiredCheck";
    ValidatorsName["requiredFieldset"] = "requiredFieldset";
    ValidatorsName["requiredFileInput"] = "requiredFileInput";
    ValidatorsName["requiredSelectField"] = "requiredSelectField";
    ValidatorsName["requiredDateInput"] = "requiredDateInput";
})(ValidatorsName || (ValidatorsName = {}));
function getValidator(list) {
    return (list || [])
        .map(v => {
        if (typeof v === 'string') {
            return validatorFactory(v);
        }
        else if (v && v.name) {
            v = v;
            return validatorFactory(v.name);
        }
        else {
            return v;
        }
    })
        .reduce(combineValidators, defaultValidator);
}
function validatorFactory(name, options) {
    switch (name) {
        case ValidatorsName.requiredField:
            return requiredField;
        case ValidatorsName.requiredEmailField:
            return requiredEmailField;
        case ValidatorsName.requiredSelectField:
            return requiredSelectField;
        case ValidatorsName.requiredCheck:
            return requiredCheck;
        case ValidatorsName.requiredFieldset:
            return requiredFieldset;
        case ValidatorsName.requiredDateInput:
            return requiredDateInput;
        case ValidatorsName.requiredFileInput:
            return requiredFileInput;
        default:
            return defaultValidator;
    }
}

const gcdsCheckboxCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-checkbox{padding:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before{box-sizing:border-box;content:\"\";cursor:pointer}}@layer default{:host .gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin)!important;max-width:var(--gcds-checkbox-max-width);min-height:calc(var(--gcds-checkbox-input-height-and-width) - var(--gcds-checkbox-padding));padding:var(--gcds-checkbox-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-checkbox :is(gcds-label,gcds-hint,gcds-error-message){padding:var(--gcds-checkbox-label-padding)!important}:host .gcds-checkbox gcds-hint::part(hint){margin:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{position:absolute}:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{height:var(--gcds-checkbox-input-height-and-width);left:0;top:0;width:var(--gcds-checkbox-input-height-and-width)}:host .gcds-checkbox input{opacity:0}:host .gcds-checkbox gcds-label{width:fit-content}:host .gcds-checkbox gcds-label:before{border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-checkbox gcds-label:after{border:var(--gcds-checkbox-check-border-width) solid;border-block-start:0!important;border-inline-start:0!important;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);transition:opacity .2s ease-in-out;width:var(--gcds-checkbox-check-width)}:host .gcds-checkbox input:checked+gcds-label:after{opacity:1}}@layer disabled{:host .gcds-checkbox.gcds-checkbox--disabled{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label:after,:host .gcds-checkbox.gcds-checkbox--disabled gcds-label:before{cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor}:host .gcds-checkbox.gcds-checkbox--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label:before{border-color:var(--gcds-checkbox-danger-border)}:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label:after{color:var(--gcds-checkbox-danger-border)}}@layer focus{:host .gcds-checkbox:focus-within{color:var(--gcds-checkbox-focus-color)}:host .gcds-checkbox:focus-within input:focus+gcds-label:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);outline:var(--gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}}";
const GcdsCheckboxStyle0 = gcdsCheckboxCss;

const GcdsCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.onChange = e => {
            this.checked = !this.checked;
            this.internals.setFormValue(e.target.value, 'checked');
            if (!this.checked) {
                this.internals.setFormValue(null, 'checked');
            }
            const changeEvt = new e.constructor(e.type, e);
            this.el.dispatchEvent(changeEvt);
            this.gcdsChange.emit(this.checked);
        };
        this.checkboxId = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = undefined;
        this.disabled = undefined;
        this.value = undefined;
        this.checked = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.parentError = undefined;
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
    }
    validateDisabledCheckbox() {
        if (this.required) {
            this.disabled = false;
        }
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else if (!this.hasError && this.errorMessage) {
            this.hasError = true;
        }
        else if (this.errorMessage == '') {
            this.hasError = false;
        }
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsGroupError(e) {
        if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
            this.hasError = true;
            this.parentError = e.detail;
        }
        else if (!elementGroupCheck(this.name)) {
            this.hasError = false;
            this.parentError = '';
        }
    }
    gcdsGroupErrorClear(e) {
        if (e.srcElement.contains(this.el) && this.hasError) {
            this.hasError = false;
            this.parentError = '';
        }
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Call any active validators
     */
    async validate() {
        if (!this._validator.validate(this.checked) &&
            this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.checkboxId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.checkboxId}` });
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError && this.validateOn != 'other') {
                e.preventDefault();
            }
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.checked != this.initialState) {
            this.checked = this.initialState;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.checked = state;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledCheckbox();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'checkbox');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.internals.setFormValue(this.checked ? this.value : null);
        this.initialState = this.checked ? this.checked : null;
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { lang, checkboxId, label, name, required, disabled, value, checked, hint, errorMessage, hasError, parentError, inheritedAttributes, } = this;
        const attrsInput = Object.assign({ name,
            disabled,
            required,
            value,
            checked }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage || parentError) {
            const hintID = hint ? `hint-${checkboxId} ` : '';
            const errorID = errorMessage ? `error-message-${checkboxId} ` : '';
            const parentErrorID = parentError ? `parent-error-${checkboxId} ` : '';
            attrsInput['aria-describedby'] = `${hintID}${errorID}${parentErrorID}${attrsInput['aria-describedby']
                ? `${attrsInput['aria-describedby']}`
                : ''}`;
        }
        if (hasError) {
            attrsInput['aria-invalid'] = 'true';
        }
        return (h(Host, { key: 'd33ae5e2f2adeecdbfb572561d4e62d762a3af02' }, h("div", { key: '3a39d170c5a14b657f57cd9ff6c2cd0379d0353f', class: `gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}` }, h("input", Object.assign({ key: '930020ba3646ecfea94aae1a4b014f60668eae37', id: checkboxId, type: "checkbox" }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onChange: e => this.onChange(e), onClick: e => emitEvent(e, this.gcdsClick), ref: element => (this.shadowElement = element) })), h("gcds-label", Object.assign({ key: '3fc18cb30532e327c2b34b8bced1d7e8b8eb4e89' }, attrsLabel, { "label-for": checkboxId, lang: lang })), hint ? h("gcds-hint", { "hint-id": checkboxId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: checkboxId }, errorMessage)) : null, parentError ? (h("span", { id: `parent-error-${checkboxId}`, hidden: true }, parentError)) : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["validateDisabledCheckbox"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
};
GcdsCheckbox.style = GcdsCheckboxStyle0;

const gcdsContainerCss = "@layer reset, default, border, centered, main, margin, padding, size;@layer reset{:host{display:block}:host .gcds-container{box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container slot{display:initial}}@layer default{:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}}@layer border{:host .gcds-container.container-border{border:var(--gcds-container-border)}}@layer centered{:host .gcds-container.container-centered{margin-inline:auto!important}}@layer main{:host .gcds-container.container-main:not(.size-full){width:90%}}@layer margin{:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-25{margin:var(--gcds-container-spacing-25)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-75{margin:var(--gcds-container-spacing-75)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-125{margin:var(--gcds-container-spacing-125)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-175{margin:var(--gcds-container-spacing-175)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-225{margin:var(--gcds-container-spacing-225)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-350{margin:var(--gcds-container-spacing-350)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-650{margin:var(--gcds-container-spacing-650)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-750{margin:var(--gcds-container-spacing-750)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-850{margin:var(--gcds-container-spacing-850)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-950{margin:var(--gcds-container-spacing-950)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}:host .gcds-container.m-1050{margin:var(--gcds-container-spacing-1050)}:host .gcds-container.m-1100{margin:var(--gcds-container-spacing-1100)}:host .gcds-container.m-1150{margin:var(--gcds-container-spacing-1150)}:host .gcds-container.m-1200{margin:var(--gcds-container-spacing-1200)}:host .gcds-container.m-1250{margin:var(--gcds-container-spacing-1250)}}@layer padding{:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-25{padding:var(--gcds-container-spacing-25)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-75{padding:var(--gcds-container-spacing-75)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-125{padding:var(--gcds-container-spacing-125)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-175{padding:var(--gcds-container-spacing-175)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-225{padding:var(--gcds-container-spacing-225)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-350{padding:var(--gcds-container-spacing-350)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-650{padding:var(--gcds-container-spacing-650)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-750{padding:var(--gcds-container-spacing-750)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-850{padding:var(--gcds-container-spacing-850)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-950{padding:var(--gcds-container-spacing-950)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}:host .gcds-container.p-1050{padding:var(--gcds-container-spacing-1050)}:host .gcds-container.p-1100{padding:var(--gcds-container-spacing-1100)}:host .gcds-container.p-1150{padding:var(--gcds-container-spacing-1150)}:host .gcds-container.p-1200{padding:var(--gcds-container-spacing-1200)}:host .gcds-container.p-1250{padding:var(--gcds-container-spacing-1250)}}@layer size{:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}}";
const GcdsContainerStyle0 = gcdsContainerCss;

const GcdsContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.border = false;
        this.centered = false;
        this.mainContainer = false;
        this.margin = undefined;
        this.padding = undefined;
        this.size = 'full';
        this.tag = 'div';
    }
    render() {
        const { border, centered, mainContainer, margin, padding, size, tag } = this;
        const Tag = tag;
        return (h(Host, { key: '1a0d300e83cc191fccd62309d50acf2651fcf0de' }, h(Tag, { key: '57ebd74a5c1ffce5d67f85cac933bf108f36b450', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: '8ad3d9262e75693298a9a567aac2b9731c5ad96d' }))));
    }
    get el() { return getElement(this); }
};
GcdsContainer.style = GcdsContainerStyle0;

const I18N$m = {
  en: {
    year: 'Year',
    month: 'Month',
    day: 'Day',
    selectmonth: 'Select a month',
    months: {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    },
    valueError:
      'gcds-date-input:  Value attribute contains an invalid date format. Expected format: ',
    valueFormatfull: 'YYYY-MM-DD',
    valueFormatcompact: 'YYYY-MM',
    required: ' (required)',
  },
  fr: {
    year: 'Année',
    month: 'Mois',
    day: 'Jour',
    selectmonth: 'Sélectionnez un mois',
    months: {
      '01': 'janvier',
      '02': 'février',
      '03': 'mars',
      '04': 'avril',
      '05': 'mai',
      '06': 'juin',
      '07': 'juillet',
      '08': 'août',
      '09': 'septembre',
      '10': 'octobre',
      '11': 'novembre',
      '12': 'décembre',
    },
    valueError:
      'gcds-date-input:  Value attribute contains an invalid date format. Expected format: ',
    valueFormatfull: 'YYYY-MM-DD',
    valueFormatcompact: 'YYYY-MM',
    required: ' (obligatoire)',
  },
};

const gcdsDateInputCss = "@layer reset, default, hint, error;@layer reset{:host{display:block}:host .gcds-date-input__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-date-input__fieldset legend{padding:0}}@layer default{:host .gcds-date-input__fieldset legend{color:var(--gcds-date-input-fieldset-text);font:var(--gcds-date-input-fieldset-font-desktop)}:host .gcds-date-input__fieldset legend .legend__required{font:var(--gcds-date-input-fieldset-required-font-desktop);margin:var(--gcds-date-input-fieldset-required-margin)!important;vertical-align:middle}@media only screen and (width < 48em){:host .gcds-date-input__fieldset legend{font:var(--gcds-date-input-fieldset-font-mobile)}:host .gcds-date-input__fieldset legend .legend__required{font:var(--gcds-date-input-fieldset-required-font-mobile)}}:host .gcds-date-input__day,:host .gcds-date-input__month,:host .gcds-date-input__year{display:inline-block;margin-inline-end:var(--gcds-date-input-margin);--gcds-label-font-desktop:var(--gcds-date-input-label-font-desktop);--gcds-label-font-mobile:var(--gcds-date-input-label-font-mobile )}}@layer hint{:host gcds-hint{margin:var(--gcds-date-input-fieldset-hint-margin)}}@layer error{:host gcds-input.gcds-date-input--error::part(input),:host gcds-select.gcds-date-input--error::part(select){border-color:var(--gcds-date-input-danger-border)}}";
const GcdsDateInputStyle0 = gcdsDateInputCss;

const GcdsDateInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
        };
        /*
         * Handle input event to update state
         */
        this.handleInput = (e, type) => {
            const val = e.target && e.target.value;
            if (type === 'year') {
                this.yearValue = val;
            }
            else if (type === 'month') {
                this.monthValue = val;
            }
            else if (type === 'day') {
                this.dayValue = val;
            }
            this.setValue();
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
        };
        this.name = undefined;
        this.legend = undefined;
        this.format = undefined;
        this.value = undefined;
        this.required = false;
        this.hint = undefined;
        this.errorMessage = undefined;
        this.disabled = false;
        this.validator = undefined;
        this.validateOn = undefined;
        this.monthValue = '';
        this.dayValue = '';
        this.yearValue = '';
        this.hasError = {
            day: false,
            month: false,
            year: false,
        };
        this.errors = [];
        this.lang = undefined;
    }
    validateName() {
        if (!this.name) {
            this.errors.push('name');
        }
        else if (this.errors.includes('name')) {
            this.errors.splice(this.errors.indexOf('name'), 1);
        }
    }
    validateLegend() {
        if (!this.legend) {
            this.errors.push('legend');
        }
        else if (this.errors.includes('legend')) {
            this.errors.splice(this.errors.indexOf('legend'), 1);
        }
    }
    validateFormat() {
        if (!this.format || (this.format != 'full' && this.format != 'compact')) {
            this.errors.push('format');
        }
        else if (this.errors.includes('format')) {
            this.errors.splice(this.errors.indexOf('format'), 1);
        }
    }
    validateValue() {
        if (this.value && !isValidDate(this.value)) {
            this.errors.push('value');
            this.value = '';
            console.error(`${I18N$m['en'].valueError}${I18N$m['en'][`valueFormat${this.format}`]} | ${I18N$m['fr'].valueError}${I18N$m['fr'][`valueFormat${this.format}`]}`);
        }
        else if (this.errors.includes('value')) {
            this.errors.splice(this.errors.indexOf('value'), 1);
        }
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    /**
     * Call any active validators
     */
    async validate() {
        const validationResult = this._validator.validate(this.format === 'full'
            ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
            : `${this.yearValue}-${this.monthValue}`);
        if (!validationResult.valid) {
            this.errorMessage = validationResult.reason[this.lang];
            this.hasError = Object.assign({}, validationResult.errors);
            this.gcdsError.emit({
                message: `${this.legend} - ${this.errorMessage}`,
                errors: validationResult.errors,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit();
            this.hasError = {
                day: false,
                month: false,
                year: false,
            };
        }
    }
    /*
     * Event listeners
     */
    async submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            for (const key in this.hasError) {
                if (this.hasError[key] && this.validateOn != 'other') {
                    e.preventDefault();
                }
            }
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
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
    /**
     * Logic to combine all input values together based on format
     */
    setValue() {
        const { yearValue, monthValue, format } = this;
        let { dayValue } = this;
        // Logic to make sure the day input is registered correctly
        if (dayValue && dayValue.length === 1 && dayValue != '0') {
            dayValue = '0' + dayValue;
            this.dayValue = dayValue;
        }
        else if (dayValue && dayValue.length == 3 && dayValue[0] === '0') {
            dayValue = dayValue.substring(1);
            this.dayValue = dayValue;
        }
        // All form elements have something entered
        if (yearValue && monthValue && dayValue && format == 'full') {
            // Is the combined value a valid date
            if (isValidDate(`${yearValue}-${monthValue}-${dayValue}`, format)) {
                this.value = `${yearValue}-${monthValue}-${dayValue}`;
                this.internals.setFormValue(this.value);
            }
            else {
                this.value = null;
                this.internals.setFormValue(null);
                return false;
            }
        }
        else if (yearValue && monthValue && format == 'compact') {
            // Is the combined value a valid date
            if (isValidDate(`${yearValue}-${monthValue}`, format)) {
                this.value = `${yearValue}-${monthValue}`;
                this.internals.setFormValue(this.value);
            }
            else {
                this.value = null;
                this.internals.setFormValue(null);
                return false;
            }
        }
        else {
            this.value = null;
            this.internals.setFormValue(null);
            return false;
        }
        return true;
    }
    /**
     * Split value into parts depending on format
     */
    splitFormValue() {
        if (this.value && isValidDate(this.value, this.format)) {
            if (this.format == 'compact') {
                const splitValue = this.value.split('-');
                this.yearValue = splitValue[0];
                this.monthValue = splitValue[1];
            }
            else {
                const splitValue = this.value.split('-');
                this.yearValue = splitValue[0];
                this.monthValue = splitValue[1];
                this.dayValue = splitValue[2];
            }
        }
    }
    validateRequiredProps() {
        this.validateName();
        this.validateLegend();
        this.validateFormat();
        if (this.errors.includes('name') ||
            this.errors.includes('legend') ||
            this.errors.includes('format')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'date-input');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-input', this.errors);
        }
        this.validateValue();
        if (this.value && isValidDate(this.value)) {
            this.splitFormValue();
            this.setValue();
            this.initialValue = this.value;
        }
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { legend, name, format, required, hint, errorMessage, disabled, lang, hasError, } = this;
        const requiredAttr = {};
        if (required) {
            requiredAttr['aria-required'] = 'true';
        }
        const fieldsetAttrs = {
            'tabindex': '-1',
            'aria-labelledby': 'date-input-legend',
        };
        if (hint) {
            const hintID = this.hint ? `date-input-hint ` : '';
            fieldsetAttrs['aria-labelledby'] =
                `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
        }
        // Array of months 01 - 12
        const options = Array.from({ length: 12 }, (_, i) => i + 1 < 10 ? `0${i + 1}` : `${i + 1}`);
        const month = (h("gcds-select", Object.assign({ key: '5cc53dab20a5ca7a94293cb58f5857309e30d7c9', label: I18N$m[lang].month, selectId: "month", name: "month", defaultValue: I18N$m[lang].selectmonth, disabled: disabled, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), value: this.monthValue, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage }), options.map(option => (h("option", { key: option, value: option }, I18N$m[lang]['months'][option])))));
        const year = (h("gcds-input", Object.assign({ key: '554b66c992c6dd93a4edf9972f7da65253313aa0', name: "year", label: I18N$m[lang].year, inputId: "year", type: "number", size: 4, disabled: disabled, value: this.yearValue, onInput: e => this.handleInput(e, 'year'), onChange: e => this.handleInput(e, 'year'), class: `gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['year'].toString(), "aria-description": hasError['year'] && errorMessage })));
        const day = (h("gcds-input", Object.assign({ key: 'dae9c6e8ba45b3ace7bfb212cf33b3394d512ef7', name: "day", label: I18N$m[lang].day, inputId: "day", type: "number", size: 2, disabled: disabled, value: this.dayValue, onInput: e => this.handleInput(e, 'day'), onChange: e => this.handleInput(e, 'day'), class: `gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['day'].toString(), "aria-description": hasError['day'] && errorMessage })));
        return (h(Host, { key: 'd9388aa00239180b8f9a657cd188748c2d1babce', name: name, onBlur: () => this.onBlur() }, this.validateRequiredProps() && (h("fieldset", Object.assign({ key: '1004ff844a1231495b95d598d9880ac03284464a', class: "gcds-date-input__fieldset" }, fieldsetAttrs), h("legend", { key: '0fea4a4db52510952d1911773a4f0d45b8af0b89', id: "date-input-legend" }, legend, required ? (h("span", { class: "legend__required" }, I18N$m[lang].required)) : null), hint ? (h("gcds-hint", { id: "date-input-hint", "hint-id": "date-input" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "date-input-error", messageId: "date-input" }, errorMessage))) : null, format == 'compact'
            ? [month, year]
            : lang == 'en'
                ? [month, day, year]
                : [day, month, year]))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "format": ["validateFormat"],
        "value": ["validateValue"],
        "validator": ["validateValidator"]
    }; }
};
GcdsDateInput.style = GcdsDateInputStyle0;

const I18N$l = {
  en: {
    date: 'Date modified:',
    version: 'Version ',
  },
  fr: {
    date: 'Date de modification :',
    version: 'Version ',
  },
};

const gcdsDateModifiedCss = "@layer reset, default;@layer reset{:host{display:block}:host dl{margin:0}:host slot{display:initial}}@layer default{:host .gcds-date-modified{margin:var(--gcds-date-modified-margin)}:host .gcds-date-modified :is(dt,gcds-text,dd){display:inline}:host .gcds-date-modified dd{margin:var(--gcds-date-modified-description-margin)}:host .gcds-date-modified gcds-text::part(text){font:var(--gcds-date-modified-font)}}";
const GcdsDateModifiedStyle0 = gcdsDateModifiedCss;

const GcdsDateModified = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'date';
        this.errors = [];
        this.lang = undefined;
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
    validateChildren() {
        if (this.el.innerHTML.trim() == '') {
            this.errors.push('children');
        }
        else if (this.errors.includes('children')) {
            this.errors.splice(this.errors.indexOf('children'), 1);
        }
    }
    validateRequiredProps() {
        this.validateChildren();
        if (this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-modified', this.errors);
        }
    }
    render() {
        const { lang, type } = this;
        return (h(Host, { key: 'f63e29a192d3a4d658ca78335b064e84e4143c5b' }, this.validateRequiredProps() && (h("dl", { key: '934f13de2562460ebb81b01b19a969c5fca4604c', class: "gcds-date-modified" }, h("dt", { key: '71a5ff2bdcf6c6d7aaf857d459b7c465d13a7ab3' }, h("gcds-text", { key: 'b8ad0f896154c73fff49eb8e5f7aabc82a8fb6f0', display: "inline", "margin-bottom": "0" }, type === 'version' ? I18N$l[lang].version : I18N$l[lang].date)), h("dd", { key: '8624f50eb70cdfd7a448c6e5755235c729fa00f2' }, h("gcds-text", { key: '97c82c7759ea15d85f92dd19ebd40c24d010df13', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))))));
    }
    get el() { return getElement(this); }
};
GcdsDateModified.style = GcdsDateModifiedStyle0;

const gcdsDetailsCss = "@layer reset, default, hover, focus, print;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font-desktop);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n        --gcds-details-default-decoration-thickness\n      );text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-details .details__summary{font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{display:none}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding);position:relative}:host .gcds-details .details__panel:before{background-color:var(--gcds-details-panel-border-color);content:\"\";display:block;height:100%;left:0;position:absolute;top:0;width:var(--gcds-details-panel-border-width)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin:0 0 var(--gcds-details-panel-slotted-margin)!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(\n          --gcds-details-panel-slotted-margin\n        )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-mobile)}}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}@layer print{@media print{:host .gcds-details .details__summary{color:var(--gcds-details-print-summary-text);font-weight:var(--gcds-details-print-summary-font-weight);text-decoration:none}:host .gcds-details .details__summary:before{transform:rotate(90deg)}:host .gcds-details .details__panel{border-left:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);display:block}}}";
const GcdsDetailsStyle0 = gcdsDetailsCss;

const GcdsDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.detailsTitle = undefined;
        this.open = false;
    }
    /**
     * Methods
     */
    /*
     * Toggle details open or closed
     */
    async toggle() {
        this.open = !this.open;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, { key: '17839f99ea3d7d6f190a7bc5df72d1e056e09b3c' }, h("div", { key: '5ebfa6b8c4b0317728ebb114a0dac1b3574ceda8', class: "gcds-details" }, h("button", { key: '3e02dfd0ca368a4758a79edbf2b125e721427ce3', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("div", { key: 'a12601d1dcad1cff247c32a59aeacdbe14100c6f', id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, h("slot", { key: '11209ad4acd9a6f6d678e1fb7047b070339779b2' })))));
    }
    get el() { return getElement(this); }
};
GcdsDetails.style = GcdsDetailsStyle0;

const gcdsErrorMessageCss = "@layer reset, default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message gcds-icon,:host .error-message::part(text){color:var(--gcds-error-message-text-color)}}";
const GcdsErrorMessageStyle0 = gcdsErrorMessageCss;

const GcdsErrorMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.messageId = undefined;
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: '3f2e26f31e50359a0e1726d5f714dd678005cf01', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'a8a20a16968e9a4578466f4fbeafb727077d7424', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '0ec129fc4a98c7232c2fd9a6fbbfa936f9ce471a', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: 'bcb3dd9ed9b3e4d31979abeb6a2772c7073a7918' }, h("slot", { key: 'f5b40163bd642d274789295c3b9cd84d27e157dd' })))));
    }
    get el() { return getElement(this); }
};
GcdsErrorMessage.style = GcdsErrorMessageStyle0;

const I18N$k = {
  en: {
    heading: 'There was a problem',
    subheading: 'Errors were found on this page:',
  },
  fr: {
    heading: 'Un problème est survenu',
    subheading: 'Des erreurs ont été trouvées sur cette page :',
  },
};

const gcdsErrorSummaryCss = "@layer reset, default, compact;@layer reset{:host{display:block}}@layer default{:host{container:component summary/inline-size}:host .gcds-error-summary{border:var(--gcds-error-summary-border-width) solid var(--gcds-error-summary-border-color);color:var(--gcds-error-summary-text);display:none;margin:var(--gcds-error-summary-margin);padding:var(--gcds-error-summary-padding);transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out}:host .gcds-error-summary.gcds-show{display:block}:host .gcds-error-summary .summary__errorlist{margin:var(--gcds-error-summary-list-margin);padding:0}:host .gcds-error-summary .summary__errorlist .summary__listitem{max-width:var(--gcds-error-summary-max-width)}:host .gcds-error-summary .summary__errorlist .summary__listitem:not(:last-child){padding:var(--gcds-error-summary-list-item-padding)}:host .gcds-error-summary .summary__errorlist .summary__listitem gcds-link::part(link):not(:focus){color:var(--gcds-error-summary-link-color)}}@layer compact{@container summary (width < 24em){:host .gcds-error-summary{padding:var(--gcds-error-summary-mobile-padding)}}}";
const GcdsErrorSummaryStyle0 = gcdsErrorSummaryCss;

const GcdsErrorSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.errorLinksObject = {};
        this.heading = undefined;
        this.listen = true;
        this.errorLinks = undefined;
        this.lang = undefined;
        this.errorQueue = {};
        this.hasSubmitted = false;
    }
    listenChanged() {
        if (this.errorLinks) {
            this.listen = false;
        }
    }
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    errorLinksChanged(newErrorLinks) {
        if (typeof newErrorLinks == 'string') {
            this.errorLinks = JSON.parse(newErrorLinks);
        }
        else if (typeof newErrorLinks == 'object') {
            this.errorLinks = newErrorLinks;
        }
        this.errorQueue = this.errorLinks;
        // Turn off listen if error-links is being used
        if (this.listen) {
            this.listen = false;
        }
    }
    errorListener(e) {
        if (this.listen && e.target.closest('form') == this.el.closest('form')) {
            this.errorLinksObject[e.detail.message] = e.target;
        }
    }
    validListener(e) {
        if (this.listen && e.target.closest('form') == this.el.closest('form')) {
            for (const [key, value] of Object.entries(this.errorLinksObject)) {
                if (value == e.target) {
                    delete this.errorLinksObject[key];
                }
            }
            if (this.errorQueue) {
                const sortedErrorList = this.sortErrors();
                this.errorQueue = Object.assign({}, sortedErrorList);
            }
        }
    }
    submitListener(e) {
        if (this.listen && e.target.closest('form') == this.el.closest('form')) {
            this.hasSubmitted = true;
            // Time out to collect gcdsError events before rendering
            setTimeout(() => {
                const sortedErrorList = this.sortErrors();
                this.errorQueue = Object.assign({}, sortedErrorList);
                // Time out to let list render
                setTimeout(() => {
                    this.shadowElement.focus();
                }, 50);
            }, 100);
        }
    }
    /*
     * Sort error object based on the order form compoennts appear in the form
     */
    sortErrors() {
        const sortable = Object.entries(this.errorLinksObject).map(([key, value]) => [
            key,
            value,
            value.getBoundingClientRect().y,
        ]);
        sortable.sort(function (a, b) {
            return a[2] - b[2];
        });
        const objSorted = {};
        sortable.forEach(function (item) {
            objSorted[item[0]] = item[1];
        });
        return objSorted;
    }
    /*
     * Focus element on error link click with label visible
     */
    focusElement(id) {
        var _a;
        const element = document.querySelector(id);
        let target = `[for=${id.replace('#', '')}]`;
        (_a = element.closest('form').querySelector(target)) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        element.focus();
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.listenChanged();
        // Format error-links string / object
        if (this.errorLinks && typeof this.errorLinks == 'string') {
            this.errorQueue = Object.assign({}, JSON.parse(this.errorLinks));
        }
        else if (this.errorLinks && typeof this.errorLinks == 'object') {
            this.errorQueue = Object.assign({}, this.errorLinks);
        }
    }
    render() {
        const { heading, errorQueue, lang, hasSubmitted, errorLinks } = this;
        return (h(Host, { key: 'dd90e9455ea1a422d5f4559c62df271259923249' }, h("div", { key: 'bb61b6d2eea84aead7d06e0355b464bf2e2281bb', role: "alert", tabindex: "-1", ref: element => (this.shadowElement = element), class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0
                ? 'gcds-show'
                : ''}` }, h("gcds-heading", { key: '170edbb97c73a0928aaa571f33eee36b72fee740', tag: "h2", "margin-top": "0", "margin-bottom": "225" }, heading !== null && heading !== void 0 ? heading : I18N$k[lang].heading), h("ol", { key: 'ce1c06b5047c8a1632a955c3cb5d7ed833a7284b', class: "summary__errorlist" }, (hasSubmitted || errorLinks) &&
            Object.keys(errorQueue).length > 0 &&
            Object.keys(errorQueue).map(key => {
                return (h("li", { class: "summary__listitem" }, h("gcds-link", { size: "regular", href: errorLinks ? key : '#', onClick: e => {
                        e.preventDefault();
                        errorLinks
                            ? this.focusElement(key)
                            : errorQueue[key].focus();
                    } }, errorLinks ? errorQueue[key] : key)));
            })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "listen": ["listenChanged"],
        "errorLinks": ["errorLinksChanged"]
    }; }
};
GcdsErrorSummary.style = GcdsErrorSummaryStyle0;

const I18N$j = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsFieldsetCss = "@layer reset, default, disabled;@layer reset{:host{display:block}:host .gcds-fieldset{border:0;min-inline-size:auto;padding:0}:host legend{padding:0}:host slot{display:block;margin:0}}@layer default{.gcds-fieldset{color:var(--gcds-fieldset-default-text)}.gcds-fieldset legend{font:var(--gcds-fieldset-font-desktop);margin:var(--gcds-fieldset-legend-margin)!important}@media only screen and (width < 48em){.gcds-fieldset legend{font:var(--gcds-fieldset-font-mobile)}}.gcds-fieldset legend .legend__required{font:var(--gcds-fieldset-legend-required-font-desktop);margin:var(--gcds-fieldset-legend-required-margin)!important;vertical-align:middle}@media only screen and (width < 48em){.gcds-fieldset legend .legend__required{font:var(--gcds-fieldset-legend-required-font-mobile)}}}@layer disabled{:host .gcds-fieldset:disabled{color:var(--gcds-fieldset-disabled-text)}:host .gcds-fieldset:disabled gcds-hint{--gcds-hint-text:currentColor}}";
const GcdsFieldsetStyle0 = gcdsFieldsetCss;

const GcdsFieldset = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsGroupError = createEvent(this, "gcdsGroupError", 7);
        this.gcdsGroupErrorClear = createEvent(this, "gcdsGroupErrorClear", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        this.isDateInput = false;
        this._validator = defaultValidator;
        this.fieldsetId = undefined;
        this.legend = undefined;
        this.required = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.disabled = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.hasError = undefined;
        this.lang = undefined;
        this.inheritedAttributes = {};
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else if (!this.hasError && this.errorMessage) {
            this.hasError = true;
        }
        else if (this.errorMessage == '') {
            this.hasError = false;
        }
    }
    validateDisabledFieldset() {
        if (this.required) {
            this.disabled = false;
        }
        if (this.disabled == true) {
            for (let i = 0; i < this.el.children.length; i++) {
                this.el.children[i].setAttribute('disabled', '');
            }
        }
    }
    handleDisabledChange(newValue, _oldValue) {
        if (_oldValue && newValue != _oldValue) {
            for (let i = 0; i < this.el.children.length; i++) {
                this.el.children[i].removeAttribute('disabled');
            }
        }
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    /**
     * Call any active validators
     */
    async validate() {
        if (!this._validator.validate(this.fieldsetId) &&
            this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsGroupError.emit(this.errorMessage);
            this.gcdsError.emit({
                id: `#${this.fieldsetId}`,
                message: `${this.legend} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsGroupErrorClear.emit();
            this.gcdsValid.emit({ id: `#${this.fieldsetId}` });
        }
    }
    blurValidate() {
        if (this.validator &&
            this.validateOn == 'blur' &&
            !this.el.matches(':focus-within')) {
            this.validate();
        }
    }
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsParentGroupError(e) {
        if (e.srcElement == this.el &&
            validateFieldsetElements(this.el, this.el.children).includes(false)) {
            this.hasError = true;
        }
    }
    gcdsParentGroupErrorClear(e) {
        if (e.srcElement == this.el && this.hasError) {
            this.hasError = false;
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError) {
                e.preventDefault();
            }
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledFieldset();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        if (this.el.getAttribute('data-date')) {
            this.isDateInput = true;
        }
        else {
            requiredValidator(this.el, 'fieldset');
        }
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { lang, fieldsetId, legend, required, errorMessage, hasError, hint, disabled, inheritedAttributes, } = this;
        const fieldsetAttrs = Object.assign({ disabled }, inheritedAttributes);
        if (errorMessage) {
            fieldsetAttrs['aria-describedby'] = `error-message-${fieldsetId} ${fieldsetAttrs['aria-describedby']
                ? ` ${fieldsetAttrs['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: '28b6b012db193345b89688a3a49c23f46304c285' }, h("fieldset", Object.assign({ key: 'f540690d1a3f4f5cc430b581aa0ad4acd37c0df5', class: `gcds-fieldset ${hasError ? 'gcds-fieldset--error' : ''}`, id: fieldsetId }, fieldsetAttrs, { "aria-labelledby": hint
                ? `legend-${fieldsetId} hint-${fieldsetId}`
                : `legend-${fieldsetId}`, tabindex: "-1", ref: element => (this.shadowElement = element) }), h("legend", { key: 'b95da10304c515c19ad7610b10bc1ec6671b9918', id: `legend-${fieldsetId}` }, legend, required ? (h("span", { class: "legend__required" }, "(", I18N$j[lang].required, ")")) : null), hint ? h("gcds-hint", { "hint-id": fieldsetId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: fieldsetId }, errorMessage)) : null, h("slot", { key: '4b72b0dec46d47075fa3edd6c693e24fa146dd7f' }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "errorMessage": ["validateErrorMessage"],
        "disabled": ["validateDisabledFieldset", "handleDisabledChange"],
        "validator": ["validateValidator"]
    }; }
};
GcdsFieldset.style = GcdsFieldsetStyle0;

const I18N$i = {
  en: {
    button: {
      remove: 'Remove',
      upload: 'Choose file',
    },
    summary: {
      selected: 'Currently selected:',
      unselected: 'No file currently selected.',
    },
    removeFile: 'Remove file',
    droppedError:
      'One or more of the dropped files is unable to be uploaded. Accepted file types:',
  },
  fr: {
    button: {
      remove: 'Supprimer',
      upload: 'Choisir un fichier',
    },
    summary: {
      selected: 'Actuellement sélectionné:',
      unselected: 'Aucun fichier actuellement sélectionné.',
    },
    removeFile: 'Supprimer le fichier',
    droppedError:
      'Un ou plusieurs fichiers déposés ne peuvent pas être téléversés. Types de fichiers acceptés :',
  },
};

const gcdsFileUploaderCss = "@layer reset, default, input, files, disabled, error, focus, active;@layer reset{:host{display:block}:host .gcds-file-uploader-wrapper{border:0;margin:0;padding:0}:host .gcds-file-uploader-wrapper button{cursor:pointer;font:inherit;outline:0}}@layer default{:host .gcds-file-uploader-wrapper{align-items:flex-start;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font);max-width:90%;transition:color .15s ease-in-out}:host .gcds-file-uploader-wrapper button{border-radius:var(--gcds-file-uploader-file-button-border-radius);transition:all .15s ease-in-out}}@layer input{:host .gcds-file-uploader-wrapper .file-uploader__input{display:inline-block;position:relative}:host .gcds-file-uploader-wrapper .file-uploader__input button{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);color:var(--gcds-file-uploader-button-text);font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-button-margin);padding:var(--gcds-file-uploader-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__input input{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}:host .gcds-file-uploader-wrapper .file-uploader__input input::-webkit-file-upload-button{cursor:pointer}:host .gcds-file-uploader-wrapper .file-uploader__input #file-uploader__summary{height:0;margin:0;overflow:hidden;visibility:hidden}}@layer files{:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);display:flex;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:not(:last-of-type){border-block-end:0}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:last-of-type{margin:var(--gcds-file-uploader-button-margin)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text{overflow:auto}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text::part(text){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button{align-items:center;background:transparent;border:0;color:var(--gcds-file-uploader-file-button-default-text);display:flex;font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-file-button-margin);padding:var(--gcds-file-uploader-file-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus) span{overflow:visible;text-decoration:underline var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(\n          --gcds-file-uploader-file-button-underline-offset\n        )}}@layer disabled{:host .gcds-file-uploader-wrapper.gcds-disabled{color:var(--gcds-file-uploader-disabled-text)}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled :is(.file-uploader__input,.file-uploader__uploaded-file){pointer-events:none}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file button{color:inherit}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button{background-color:var(--gcds-file-uploader-disabled-background);border-color:currentColor}}@layer error{:host .gcds-file-uploader-wrapper.gcds-error .file-uploader__uploaded-file{border-color:var(--gcds-file-uploader-file-danger-border-color)}}@layer hover{@media (hover:hover){:host .gcds-file-uploader-wrapper .file-uploader__input:not(:focus-within):hover button{background-color:var(--gcds-file-uploader-hover-button-background)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover{color:var(--gcds-file-uploader-file-button-hover-text)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover span{text-decoration-thickness:var(\n            --gcds-file-uploader-file-button-hover-decoration-thickness\n          )}}}@layer focus{:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__input:focus-within button,:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file button:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset)}}@layer active{:host .gcds-file-uploader-wrapper .file-uploader__input:has(input:active) button{background-color:var(--gcds-file-uploader-active-button-background);border-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}}";
const GcdsFileUploaderStyle0 = gcdsFileUploaderCss;

const GcdsFileUploader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsRemoveFile = createEvent(this, "gcdsRemoveFile", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            const filesContainer = [];
            const files = Array.from(e.target.files);
            this.files = e.target.files;
            files.map(file => {
                filesContainer.push(file['name']);
            });
            this.addFilesToFormData(files);
            this.value = [...filesContainer];
            // Validate since the input loses focus when dialog opens
            if (this.validateOn == 'blur') {
                setTimeout(() => {
                    this.validate();
                }, 100);
            }
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.removeFile = e => {
            e.preventDefault();
            const fileName = e.target.closest('.file-uploader__uploaded-file')
                .childNodes[0].textContent;
            const filesContainer = this.value;
            const file = filesContainer.indexOf(fileName);
            if (file > -1) {
                filesContainer.splice(file, 1);
                // Add additional logic to remove file from input
                const dt = new DataTransfer();
                for (let f = 0; f < this.shadowElement.files.length; f++) {
                    if (this.shadowElement.files[f].name != fileName) {
                        dt.items.add(this.shadowElement.files[f]);
                    }
                }
                this.shadowElement.files = dt.files;
                this.files = dt.files;
                this.addFilesToFormData(Array.from(this.shadowElement.files));
            }
            this.value = [...filesContainer];
            this.gcdsRemoveFile.emit(this.value);
        };
        /*
         * Set form data for internals
         */
        this.addFilesToFormData = files => {
            const formData = new FormData();
            if (files.length > 0) {
                files.forEach(file => {
                    formData.append(this.name, file, file.name);
                });
            }
            this.internals.setFormValue(formData);
        };
        this.uploaderId = undefined;
        this.name = undefined;
        this.label = undefined;
        this.required = false;
        this.disabled = false;
        this.value = [];
        this.accept = undefined;
        this.multiple = undefined;
        this.files = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.hasError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateDisabledSelect() {
        if (this.required) {
            this.disabled = false;
        }
    }
    watchFiles() {
        const filesContainer = [];
        const files = Array.from(this.files);
        files.map(file => {
            filesContainer.push(file['name']);
        });
        this.addFilesToFormData(files);
        this.value = [...filesContainer];
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else if (!this.hasError && this.errorMessage) {
            this.hasError = true;
        }
        else if (this.errorMessage == '') {
            this.hasError = false;
        }
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Call any active validators
     */
    async validate() {
        if (!this._validator.validate(this.shadowElement.files) &&
            this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.uploaderId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.uploaderId}` });
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError && this.validateOn != 'other') {
                e.preventDefault();
            }
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        this.internals.setFormValue('');
        this.value = [];
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
    }
    /*
     * Handle drop event on file uploader
     */
    handleDrop(e) {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles && droppedFiles.length > 0) {
            const dt = new DataTransfer();
            for (const file of droppedFiles) {
                dt.items.add(file);
            }
            if (dt.files.length > 0) {
                this.shadowElement.files = dt.files;
                this.files = dt.files;
            }
        }
        // Focus file input after drop
        this.shadowElement.focus();
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledSelect();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'file');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, name, required, uploaderId, value, inheritedAttributes, } = this;
        const attrsInput = Object.assign(Object.assign({ accept,
            disabled,
            multiple,
            name,
            required,
            value }, inheritedAttributes), { 'aria-describedby': `${inheritedAttributes['aria-describedby']
                ? `${inheritedAttributes['aria-describedby']} `
                : ''}file-uploader__summary` });
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${uploaderId} ` : '';
            const errorID = errorMessage ? `error-message-${uploaderId} ` : '';
            attrsInput['aria-describedby'] =
                `${hintID}${errorID}${attrsInput['aria-describedby']}`;
        }
        return (h(Host, { key: '6c6ef66be8b55a3e93259e4af231de9378daba82' }, h("div", { key: '47a19eac7f53045d0c84af8c20676d348ca84e58', class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: 'fda321ac14063357dfb0d64aadfd38855d11eb4f' }, attrsLabel, { "label-for": uploaderId, lang: lang })), hint ? h("gcds-hint", { "hint-id": uploaderId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: uploaderId }, errorMessage)) : null, h("div", { key: 'd4245f187a168c4ba1751a8f920bad15471d6794', class: `file-uploader__input ${value.length > 0 ? 'uploaded-files' : ''}`, onDrop: e => this.handleDrop(e), onDragOver: e => e.preventDefault() }, h("button", { key: 'cbac48bf5f013b527f01601964512b89420aed23', type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N$i[lang].button.upload), h("input", Object.assign({ key: 'd1360f3157fb3fa2e249bb37017259cf66789975', type: "file", id: uploaderId }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) })), value.length > 0 ? (h("gcds-sr-only", { id: "file-uploader__summary" }, h("span", null, I18N$i[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))) : (h("gcds-sr-only", { id: "file-uploader__summary" }, I18N$i[lang].summary.unselected))), value.length > 0
            ? value.map(file => (h("div", { class: "file-uploader__uploaded-file", "aria-label": `${I18N$i[lang].removeFile} ${file}.` }, h("gcds-text", { "margin-bottom": "0" }, file), h("button", { onClick: e => this.removeFile(e) }, h("span", null, I18N$i[lang].button.remove), h("gcds-icon", { name: "close", size: "text", "margin-left": "150" })))))
            : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["validateDisabledSelect"],
        "files": ["watchFiles"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
};
GcdsFileUploader.style = GcdsFileUploaderStyle0;

const I18N$h = {
  en: {
    gov: {
      heading: 'Government of Canada',
      menu: {
        contacts: {
          text: 'All contacts',
          link: 'https://www.canada.ca/en/contact.html',
        },
        dept: {
          text: 'Departments and agencies',
          link: 'https://www.canada.ca/en/government/dept.html',
        },
        about: {
          text: 'About government',
          link: 'https://www.canada.ca/en/government/system.html',
        },
      },
    },
    themes: {
      heading: 'Themes and topics',
      menu: {
        jobs: {
          text: 'Jobs',
          link: 'https://www.canada.ca/en/services/jobs.html',
        },
        immigration: {
          text: 'Immigration and citizenship',
          link: 'https://www.canada.ca/en/services/immigration-citizenship.html',
        },
        travel: {
          text: 'Travel and tourism',
          link: 'https://travel.gc.ca/',
        },
        business: {
          text: 'Business',
          link: 'https://www.canada.ca/en/services/business.html',
        },
        benefits: {
          text: 'Benefits',
          link: 'https://www.canada.ca/en/services/benefits.html',
        },
        health: {
          text: 'Health',
          link: 'https://www.canada.ca/en/services/health.html',
        },
        taxes: {
          text: 'Taxes',
          link: 'https://www.canada.ca/en/services/taxes.html',
        },
        enviro: {
          text: 'Environment and natural resources',
          link: 'https://www.canada.ca/en/services/environment.html',
        },
        defence: {
          text: 'National security and defence',
          link: 'https://www.canada.ca/en/services/defence.html',
        },
        culture: {
          text: 'Culture, history and sport',
          link: 'https://www.canada.ca/en/services/culture.html',
        },
        policing: {
          text: 'Policing, justice and emergencies',
          link: 'https://www.canada.ca/en/services/policing.html',
        },
        transport: {
          text: 'Transport and infrastructure',
          link: 'https://www.canada.ca/en/services/transport.html',
        },
        world: {
          text: 'Canada and the world',
          link: 'https://international.gc.ca/world-monde/index.aspx?lang=eng',
        },
        finance: {
          text: 'Money and finance',
          link: 'https://www.canada.ca/en/services/finance.html',
        },
        science: {
          text: 'Science and innovation',
          link: 'https://www.canada.ca/en/services/science.html',
        },
        indigenous: {
          text: 'Indigenous Peoples',
          link: 'https://www.canada.ca/en/services/indigenous-peoples.html',
        },
        veterans: {
          text: 'Veterans and military',
          link: 'https://www.canada.ca/en/services/veterans.html',
        },
        youth: {
          text: 'Youth',
          link: 'https://www.canada.ca/en/services/youth.html',
        },
      },
    },
    site: {
      heading: 'Government of Canada Corporate',
      menu: {
        social: {
          text: 'Social media',
          link: 'https://www.canada.ca/en/social.html',
        },
        mobile: {
          text: 'Mobile applications',
          link: 'https://www.canada.ca/en/mobile.html',
        },
        about: {
          text: 'About Canada.ca',
          link: 'https://www.canada.ca/en/government/about.html',
        },
        terms: {
          text: 'Terms and conditions',
          link: 'https://www.canada.ca/en/transparency/terms.html',
        },
        privacy: {
          text: 'Privacy',
          link: 'https://www.canada.ca/en/transparency/privacy.html',
        },
      },
    },
    about: 'About this site',
    topofpage: 'Top of page',
  },
  fr: {
    gov: {
      heading: 'Gouvernement du Canada',
      menu: {
        contacts: {
          text: 'Toutes les coordonnées',
          link: 'https://www.canada.ca/fr/contact.html',
        },
        dept: {
          text: 'Ministères et organismes',
          link: 'https://www.canada.ca/fr/gouvernement/min.html',
        },
        about: {
          text: 'À propos du gouvernement',
          link: 'https://www.canada.ca/fr/gouvernement/systeme.html',
        },
      },
    },
    themes: {
      heading: 'Thèmes et sujets',
      menu: {
        jobs: {
          text: 'Emplois',
          link: 'https://www.canada.ca/fr/services/emplois.html',
        },
        immigration: {
          text: 'Immigration et citoyenneté',
          link: 'https://www.canada.ca/fr/services/immigration-citoyennete.html',
        },
        travel: {
          text: 'Voyage et tourisme',
          link: 'https://voyage.gc.ca/',
        },
        business: {
          text: 'Entreprises',
          link: 'https://www.canada.ca/fr/services/entreprises.html',
        },
        benefits: {
          text: 'Prestations',
          link: 'https://www.canada.ca/fr/services/prestations.html',
        },
        health: {
          text: 'Santé',
          link: 'https://www.canada.ca/fr/services/sante.html',
        },
        taxes: {
          text: 'Impôts',
          link: 'https://www.canada.ca/fr/services/impots.html',
        },
        enviro: {
          text: 'Environnement et ressources naturelles',
          link: 'https://www.canada.ca/fr/services/environnement.html',
        },
        defence: {
          text: 'Sécurité nationale et défense',
          link: 'https://www.canada.ca/fr/services/defense.html',
        },
        culture: {
          text: 'Culture, histoire et sport',
          link: 'https://www.canada.ca/fr/services/culture.html',
        },
        policing: {
          text: 'Services de police, justice et urgences',
          link: 'https://www.canada.ca/fr/services/police.html',
        },
        transport: {
          text: 'Transport et infrastructure',
          link: 'https://www.canada.ca/fr/services/transport.html',
        },
        world: {
          text: ' Le Canada et le monde',
          link: 'https://www.international.gc.ca/world-monde/index.aspx?lang=fra',
        },
        finance: {
          text: 'Argent et finance',
          link: 'https://www.canada.ca/fr/services/finance.html',
        },
        science: {
          text: 'Science et innovation',
          link: 'https://www.canada.ca/fr/services/science.html',
        },
        indigenous: {
          text: 'Autochtones',
          link: 'https://www.canada.ca/fr/services/autochtones.html',
        },
        veterans: {
          text: 'Vétérans et militaires',
          link: 'https://www.canada.ca/fr/services/veterans.html',
        },
        youth: {
          text: 'Jeunesse',
          link: 'https://www.canada.ca/fr/services/jeunesse.html',
        },
      },
    },
    site: {
      heading: 'Organisation du gouvernement du Canada',
      menu: {
        social: {
          text: 'Médias sociaux',
          link: 'https://www.canada.ca/fr/sociaux.html',
        },
        mobile: {
          text: 'Applications mobiles',
          link: 'https://www.canada.ca/fr/mobile.html',
        },
        about: {
          text: 'À propos de Canada.ca',
          link: 'https://www.canada.ca/fr/gouvernement/a-propos.html',
        },
        terms: {
          text: 'Avis',
          link: 'https://www.canada.ca/fr/transparence/avis.html',
        },
        privacy: {
          text: 'Confidentialité',
          link: 'https://www.canada.ca/fr/transparence/confidentialite.html',
        },
      },
    },
    about: 'À propos de ce site',
    topofpage: 'Haut de la page',
  },
};

const gcdsFooterCss = "@layer reset, default, contextual, main, sub, compact, medium, wide;@layer reset{:host{display:block}:host ul{list-style-type:none;margin:0;padding:0}:host slot{display:initial}:host gcds-link::part(link):not(:hover){text-decoration:none}:host .gcds-footer__sub ul li{display:block}}@layer default{:host{font:var(--gcds-footer-font)}:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-desktop)}:host .gcds-footer__header,:host .sub__header,:host .themenav__header{clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host [class$=__container]{justify-content:space-between;margin:var(--gcds-footer-container-margin);max-width:var(--gcds-footer-container-width);width:90%}:host nav{position:relative}:host [class$=__list]{display:grid;grid-template-columns:1fr;list-style:none;padding:var(--gcds-footer-list-padding);grid-gap:var(--gcds-footer-grid-gap)}:host [class$=__list] li gcds-link::part(link){color:var(--gcds-footer-main-text)}:host h3{font:var( --gcds-footer-font-heading);margin:var(--gcds-footer-heading-margin)}:host gcds-link::part(link){font:var(--gcds-footer-font)}}@layer contextual{:host .gcds-footer__contextual{background-color:var(--gcds-footer-contextual-background);color:var(--gcds-footer-contextual-text);container:component contextual/inline-size;margin-block-end:-1px}}@layer main{:host .gcds-footer__main{background-color:var(--gcds-footer-main-background);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAC9CAMAAAAwXXHOAAAAe1BMVEUAAAAYJjgbKDogIDkcOTkgMDgoKEMdJzgdKDcAAAAgKTkfLj4gKDgfKjgeJjgeKjgcKDgfJzhAQEAfKzceKDgdKDcdKjcAVVUhN0MeKDceKzcAAFUdKjgcKzkeLTwaMzMdKjcfKTYZJjIcKzkaKDgcKDgYKjgbKTgYKDjo9/gwAAAAKXRSTlMASTkoCSATe/8BUCHNSWXct1sEU+D9nQMXeIoD8zYiCsN1PST/bZK221OBjhQAAA8qSURBVHgB7NVVAUNRDAWwPr5jZp5/jwMR/Us0HAgAAAAAAAAAAAAAAAAAAAAgS1U3TRt/XdNHEqiGUurReBIxLUOQSNBm88VytRa0ZIK22Zbd/iBo2Vzn8XS+hKCRqDpdr7e4PyKe11ckger9Zdc+bGULYSAMj2uZMab/Bl/mJoWXLiuvNV8HiH/PYgSGMIdmFvhjZg7NHJoZEcRtZmQEbjOj5NDMoZlDM3No1kxIidvMUlowuy2lgtltS9qE2WUlTwN2H7fGTQMkrBtqYGhBWDMhjRs7KcKaSWnc2BkOrZ8lSRujpALWMjQOW1PCmil9F8PWtNCQbzekHLamgvUSmhda9DsLWOqHmramgHUMbU+bbxLWypLGjZ3V7wraSj/FsPmm0JCHTimHzTc7YI2E5oWWjRfk0Na00AKNWOqXcmgX2ZLuj50OzUoHh/14Em1Y5NaRgSGq26HTUm/UrBubTZhDe8CiAheZQ1uPuBk0hxaPGKPNobHZciz4PjSmv2gXWOmDTQ8DduMa4KOYFFqiBQsdVXvQ3lTPZwJ+xL1IxJzbdO53w42RPUJbQACsKXsTzU6cDm3pbEec/dl4fvn+xGmMZIPQCj9D45TQlo6EgVnKDjuyfjQ/KLTSsWAAI7PLXyeCI/46480scE6cRAs+o+ln7lwDQstz1nwzDSR6cGh7EYilIV+01KtoFJpDk3bVloZ80ZZeJcBEEw7teP7QikDp1QJi+bl+Ep/NoXHrVQFZvt8Ih/a5vrJ3J8iJK0EQQCvPkplVdf8T/rBFB61vYYStMWCTMYA2b82j1Qti2A5rSuMFLcKMOwZVvQGtKhnPGmpAG0HkayIK94Vm5AY0w4xnDVSRmpNRr4moRNw3/m2nTqtZmlPsF7QXtKNjbcWvXide0A5NvqBthDIfAFq5ytnv988OrbSV+vPQKh4AGoLjH+u5obG1lWbcP68ajXFOqn9dE+31/kf/ROvhBe3VSKsXtB9oor0aaUjJeEE7LmhtpxF/ON5TqTv8gnZ7hdZlzcn4u2G9oP2TPmdXGkEtsV1/u9+JXZ/mWd0vaHuTGn8Ps7WEoy38Z2MT16u0Ur2g3dbpBJylke7uPz2+wUKA14bS2Gq+oO0MtJ0/DQ1CICj5WtE5vpoXtHb/dWi5QCMyLoeWlIwb8oJWTI048o9DY5FEIGB+7kwy/ym0mtK/ABrCtE7mgv23oUEIMBCQr54K/Hqb0A3QGAyfCy7/MDRGpDygZQTvCq0M1/vdnaBhvfJtaDGgYSz+VWhkyeEIBGHyvtAQEXBEsO4DzeuVY6CNRfxlaJKIBVqAKdwVGge0uBO05LzygnZYqKJjQAsLsRVCOro3AD4gtMJ5mfUNsBehOf5koIwFmhnmJWjQiOOo2I8Hje0YCTe/DvYitPqr0IpFNqIcKf1xaFDOvxIOaAnkq0abBRmdURfLAVLa6d8OzXOFk/KrjfYPhq8a/Rk0RAR/O7RUcyyzlS9ox0Jrd7sq+97QAMAJAPeBVhMESv2CdiC0ZmZUhSvqX0LjuF/CLnyA5rekfaeZAc6vNEjNx4BGgPF0sWOEASnDiHIgwxL+GTSP+yUp1aVTJxZoxTu0WHP+jXBEZ+AAaBLj6QLEEhphyZGMdLACljfn1iFVZta3oPEtu6ClluAODYmah8L8GNAs5RPXaBTYSkZFlCOKkSpCvNDrtOsb0Fpvae6AVlriO0BLTtBya84udgRHQmNLxXi2ZK4Ko4K5QLNHk3z71ImI/DY07YDGPvqKIe+/Sgdz8xUbFnFcG42xI6xeGhLxXGHVqjAc9glajuuh7gvtH1xtm/t7nZwaRrVFsWIz4M3QiJuGOhlPFai5LoxEvN/YDO+p0bhoI/GFSx25vJBRUuEKtGZ8P+Q7NB8AjWGpHdysNG+GBt801Il4qiw9y3PrgWySCZICKUn5CbQ0gx0Rkb2cWjjcxhL6tM7zIyLQo7jYCL6v1SVoR5YtHChGHQDNWZIqt4AUbm6juX4ztJSWko+l0LIqz3fVkvoTaNKAVpISgI33JN5CuPiezOWxEJERqSUZkIPaBc3x/djVatfuNtrlcTRfbjuyfTO0auzDv8RPd1V6BevcrbLfln2qypFS7YHm1s50MokeazxD6/bn0PK4WbY6YHjDl9uOVt06qc7eY4edlqRMM54oXJ7rikCDzYjigLbwIwufQatgB7P19VTmkPQ5tIrvp3Z/ugprOo4tqbgJrRng5VnSwUsgUHpPvmUNzbv+PmRw+TriCWfRmyyHvehaoC3mkOHiJ9Aa7Codk21oR/YGsH+sBJokbI30pE5BJDcnr0a84wLi2qMfVcSpyZHJZ/wM3yKLEfYZ2gKPkb4IbeRnoMk2D/qDi/ug5apOiiksnWK2Pw71fnYBcb1FkjDblHe/TipsxBNCay+eEmdoyIhwBhv3hzaCoz5L1vtq+5oLynFJjz8Ua/MytI3OgPe1DWZoT/kGtAo2Y7kb0FjvdwwXfwZafXz3Rh4KzRpR3QStPpxv2RegjV3YD21Ibvx6aFhwOeMMLZLLJpZ/CFqeUroUHPURn43boXnjzLmk/OEE50+hcQVtsM1fD62rGRGJGZodSyWHRkzJ46Ft5Xhobp2T+9tom52B1Bx/8MxPoeWAtjqi+cuhjZIqztCQY9o9ay62flZoqSnNPdD8BWi+XqO5sYKWV/88cgWNzwUNGilOb+UoTxMpaIPKGGHpSaGxt2wcX6NRb8m9n4+GStZ2NevyWMx2eK6S8zmheSF1AjbA1fu9iu7yVAsOaOXM0V7PsdynhXTXer9G1JnLv/pBaNYqxX3Q3N09+uZ7oGHUmPvG0WY97VVSg1OWHP20n+jtdYU2iqtrnn7D22qNP5k9QcsAhlaM5Qpw6TDUej9XzwsjOCZi0EvRWWN1PC5uM13O+jo0AhG1H+0MDXMt4vRWZ0Bd57QkMLu6q97u+lNo0TtGfEoyW3Pq2Wq0ZLVXb+PrHA651NoMdGFZ0QwN9kmHPJbrtGBUrfdvVABYlNcYY1mqgtTyWEt5EhGIwJehoVS31WhTrxMzp1ZXdXW3Pg0itSMgydbllAe0D2k+WY3GcMdiiOOSpIhJHoSIHKfXGdrN2YZ2+lYZUWN1PC7Q/C1orJJMUqs49kCDSzdnQDsgnbwATc8HLTNIogTAdqr9FljJt8gRHLPCzwctv9TcS30nRumTJOq20cXe2sHngobwtTNBV5VGjoCWPiUljT5BZfZYPf/QApyAAR8KrXk0tP0pBkvfzvNBU6XtUgIArSLeYtl2tmoN8bmGN3gBWtwPmiPC+ka6+qmgYfmrfRquFdafokNhtN2I1BTDQOlH0tXVN0IDpmXdAVqxr1RF0MWYLTWtOY1pPQP9dNBwGVpjQIvwsXhqvCyvJgNRRdB7odFlg2P5SGiVWVlVWedfvqpWt7dk9Mbez6E1OXaXlAHNqeDsOOoZT50DGtfQYgx7XIZWrrHY6ezTQvWy0/OG+ZAgu4KLdBCWigBLTYA5VsdHWFfc0BkYw3Ek0tIx0Exa8scZejPI6ZaSTqOrydUeXoEWu6FpBzQ8HrS8Bg2XqvriAKj2fN2cW0pGcN7QY0F9GhbGVOy5PL01X/af16DBhZjDjUbZMdAi1tDyvGOEY/uAFqv8KLTsR4NGtBwR7P4/tMrlqOIlaOftOb6jV9eqcWzI88IZGr8HjU6J6w2gtSfNGCHSV6FVVUk9ZexYZ1TmvbHrMrQVpXRJ5dScct4Cza0HnIJaoKljA9rAw3ECAQ6DNmagAEsFAKUGgByry49kFkmvoY2qC4kATSCQ2h/O3wY/2uvcbopUWntT1VegSfEwQc8TtD5DqwGtlsPW/6cM90DLz6GNfGt4g1qSJ7BZX/lWbkkwgjSJa52BVme936RyjW2n28hYHijKdRXakeNozAeC5p6bVyz5/1clun2SlhHuAe37NZoyO6uzDoFmWrcn17PjRUqS19DM1hKAHj0nywEta2pGje0aWfaryK5lf34JWldfh0YsRW1yHk94OGfKpbybA9pYOk+3N5ai91sOqNEYDjqgkXOvEzBLSp78NNBmJlMSGOdY30luVouFNbSoM3FIDAjB99uypgq6GRaDGsGynBGZERY9gyFWv3yyB+qmNdK0KnLynqwBeRpHQypP7VVj6ZO47wmNxLSSvWoWW8qPl7+WihHBvjBrUnbeCs1LG80Ra2g5/c/GOdWdFVEIYzl4ftXWhp6sL0KrU4HcBo1SZakjLHwCbbMLO4LI5aFWfcsMqsf7wmscOJ6yAS2yJJDQW8oEy6U7QqNV2JqX8ekE4o8X9KeEsxJrM9+Axv9/g7wGTUozgsSWMyGsnSkjIgitU7wIjVvQ3nIztMK8jZHjIcPb0HL113VwQMvWhcR9gpREbjR1x1Pqc42GiJUOS833e9tuzfnJGm1Qy9R2TGp3ENxwSeKWU+eoYSwE9kLTRWiTm+Jn0LQUMEsPBW38QpUkQdRoBEg9RnUcLOP0LC8Z9Rwk5Tu0ZeuqF7Yk8ZaUjLfUacHnDedD1EACxg3QDOvgmOnSxyQHNJ0PSNuSnUpb6dSyNvbWqmeZ9qlpUTWOmtPchLZx3DVoejRoWjLXzfW+XEMSAlKaE7ScoBVT6mF2eiUflK6q6vGgestpe1f1MW8E25cB7YeyDW1kExoHND8uNGjEYalBBi3J5ocxJsmrrkOTqM1e54PEAX07noc3Nh2XS4cFN0IbIeF6NGj+2C0zF0j8WGr48KldpTnfhVakpSRTByeD+nZyo42mJtQMH+d5xK7boY08ADQmyLkrsD1NzPpkXPRwaOsuXEAHx5n/ClpANQoSpI4OXNeg8RGhwWPYiUB//taLi9BqQOsngXZI0t6G1oTukanqfzho41ezndrOdWgsJf8eNKm8eep8qsQPhLFtaO/oJhkRXCrFdETwAjTAvwza/k7sCxozsaeAMlIX0mmjRs8rgjo0/x6aXol/HLoOuYLiHAd9NDRSAuH/2rtXI4tiIAaidizSfPKPcGvBpQ9ZrA+ZBLqGykg5YeXXpsdv7a4Rlv9nSSC0K527jgKhadw1TgCh6buSY0BodWtuSe0cENr9xlvbOSA0+V/XHceA0DROA6HptNNAaJoqh4HQ1E4CoamqZ9c5IDTVrMNAaBrHgdDuOg+E1s4DoWmcBkJTrdNAaGrngdDaT4DQ9jc/AULzM8Af2qL98u71t1EAAAAASUVORK5CYII=);background-position:100% 100%;background-repeat:no-repeat;color:var(--gcds-footer-main-text);container:component main/inline-size}:host .gcds-footer__main nav:first-of-type:after{border-block-end:var(--gcds-footer-main-nav-first-after-border-width) solid var(--gcds-footer-main-nav-first-after-border-color);content:\"\";display:block;margin:var(--gcds-footer-grid-gap) 0;width:var(--gcds-footer-main-nav-first-after-width)}:host .gcds-footer__main nav.main__themenav .themenav__list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(18,1fr)}}@layer sub{:host .gcds-footer__sub{background-color:var(--gcds-footer-sub-background);container:component sub/inline-size}:host .gcds-footer__sub .sub__container{display:grid;grid-gap:var(--gcds-footer-grid-gap);grid-template-areas:\"list wordmark\";grid-template-columns:3fr 1fr}:host .gcds-footer__sub .sub__container nav{align-items:center;display:flex;grid-area:list}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:flex;grid-area:wordmark}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{align-self:end;margin:var(--gcds-footer-sub-signature-margin);max-height:var(--gcds-footer-sub-signature-max-height);min-width:var(--gcds-footer-sub-signature-min-width);width:var(--gcds-footer-sub-signature-width)}}@layer compact{@media only screen and (width < 45em){:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-mobile)}}@container sub (width <= 30em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{max-height:var(--gcds-footer-sub-signature-sm-max-height);width:var(--gcds-footer-sub-signature-sm-width)}}}@layer medium{@container contextual (width >= 45em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr}}@container main (width >= 45em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(9,1fr)}}@container sub (width < 60.2em){:host .gcds-footer__sub .sub__container{display:block}:host .gcds-footer__sub .sub__container ul li{margin:0 0 var(--gcds-footer-grid-gap)}}}@layer wide{@container contextual (width >= 60.2em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr 1fr}}@container main (width >= 60.2em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(6,1fr)}}@container sub (width >= 60.2em){:host .gcds-footer__sub .sub__container ul li{display:inline-block;margin-block-end:0}:host .gcds-footer__sub .sub__container ul li:first-of-type:before{content:\"\";margin:0}:host .gcds-footer__sub .sub__container ul li:before{content:\"\\2022\";display:inline;margin:var(--gcds-footer-sub-listitem-before-margin)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:inline-block}}}";
const GcdsFooterStyle0 = gcdsFooterCss;

const GcdsFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.display = 'compact';
        this.wordmarkVariant = undefined;
        this.contextualHeading = undefined;
        this.contextualLinks = undefined;
        this.subLinks = undefined;
        this.lang = undefined;
    }
    /**
     * Convert contextual links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    contextualLinksChanged(newContextualLinks) {
        if (typeof newContextualLinks == 'string') {
            this.contextualLinksObject = JSON.parse(newContextualLinks);
        }
        else if (typeof newContextualLinks == 'object') {
            this.contextualLinksObject = newContextualLinks;
        }
    }
    /**
     * Convert sub links prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    subLinksChanged(newSubLinks) {
        if (typeof newSubLinks == 'string') {
            this.subLinksObject = JSON.parse(newSubLinks);
        }
        else if (typeof newSubLinks == 'object') {
            this.subLinksObject = newSubLinks;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        if (this.contextualLinks && typeof this.contextualLinks == 'string') {
            this.contextualLinksObject = JSON.parse(this.contextualLinks);
        }
        else if (this.contextualLinks &&
            typeof this.contextualLinks == 'object') {
            this.contextualLinksObject = this.contextualLinks;
        }
        if (this.subLinks && typeof this.subLinks == 'string') {
            this.subLinksObject = JSON.parse(this.subLinks);
        }
        else if (this.subLinks && typeof this.subLinks == 'object') {
            this.subLinksObject = this.subLinks;
        }
    }
    get renderSignature() {
        const signVariant = this.wordmarkVariant ? this.wordmarkVariant : 'colour';
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "wordmark" });
        }
        else {
            return (h("div", { class: "sub__wordmark" }, h("gcds-signature", { type: "wordmark", variant: signVariant, lang: this.lang })));
        }
    }
    render() {
        const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature, } = this;
        const govNav = I18N$h[lang].gov.menu;
        const themeNav = I18N$h[lang].themes.menu;
        const siteNav = I18N$h[lang].site.menu;
        let contextualLinkCount = 0;
        let subLinkCount = 0;
        return (h(Host, { key: '80705536aaa53acb16c95fbadbedf2ba8c2b44aa', role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { key: '40b4f1f47f89230a7570b8a2ede87eea289f9769', tag: "h2" }, I18N$h[lang].about), contextualLinksObject && contextualHeading && (h("div", { key: 'd068b2e3d3ea29ab9dd0f45e9065a920b6cea387', class: "gcds-footer__contextual" }, h("div", { key: '4a4b92b90a82bfd938555d009fbdc869145d23ce', class: "contextual__container" }, h("nav", { key: 'cad548536170a273339c72fcf2d99d007c5c9a93', "aria-labelledby": "contextual__heading" }, h("h3", { key: '072647a4600ae33264bd19ffa7ee82fc1affa3cb', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { key: '60d5f1368912a10b3e00528ee2f9a04d1aa7aa00', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N$h[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N$h[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { key: 'f7e8acd7c6fe841e938510189fdf641ca9c22fe4', class: "gcds-footer__sub" }, h("div", { key: 'f9823441ebec110b002d0e08806e79ae745c3110', class: "sub__container" }, h("nav", { key: '12d8f65435c6435ac713fbd14d2659fcd013ba17', "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { key: 'db80c42c3402e9d8cbfbc145e756bdcf0e7029c2', tag: "h3", id: "sub__heading" }, I18N$h[lang].site.heading), h("ul", { key: 'a78aef708a0aa3eb030e7e83961bbe32175c7302' }, subLinks
            ? Object.keys(subLinksObject).map(key => {
                if (subLinkCount < 5) {
                    subLinkCount++;
                    return (h("li", null, h("gcds-link", { size: "small", href: subLinksObject[key] }, key)));
                }
            })
            : Object.keys(siteNav).map(value => {
                return (h("li", null, h("gcds-link", { size: "small", href: siteNav[value].link }, siteNav[value].text)));
            }))), renderSignature))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "contextualLinks": ["contextualLinksChanged"],
        "subLinks": ["subLinksChanged"]
    }; }
};
GcdsFooter.style = GcdsFooterStyle0;

const I18N$g = {
  en: {
    gapDesktopError: 'gcds-grid: Invalid spacing value for gap-desktop.',
    gapTabletError: 'gcds-grid: Invalid spacing value for gap-tablet.',
  },
  fr: {
    gapDesktopError: "gcds-grid: Valeur d'espacement invalide pour gap-desktop.",
    gapTabletError: "gcds-grid: Valeur d'espacement invalide pour gap-tablet.",
  },
};

const gcdsGridCss = "@layer reset, default, display, align, justify, place, equalHeight, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid{box-sizing:border-box;margin:0;padding:0}}@layer default{:host .gcds-grid{gap:var(--gcds-grid-gap);grid-template-columns:var(--gcds-grid-columns,1fr)}}@layer display{:host .gcds-grid.display-grid-with-cols{display:grid;grid-template-columns:1fr}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}}@layer align{:host .gcds-grid.align-content-center{align-content:center}:host .gcds-grid.align-content-end{align-content:end}:host .gcds-grid.align-content-space-around{align-content:space-around}:host .gcds-grid.align-content-space-between{align-content:space-between}:host .gcds-grid.align-content-space-evenly{align-content:space-evenly}:host .gcds-grid.align-content-start{align-content:start}:host .gcds-grid.align-content-stretch{align-content:stretch}:host .gcds-grid.align-items-baseline{align-items:baseline}:host .gcds-grid.align-items-center{align-items:center}:host .gcds-grid.align-items-end{align-items:end}:host .gcds-grid.align-items-start{align-items:start}:host .gcds-grid.align-items-stretch{align-items:stretch}}@layer justify{:host .gcds-grid.justify-content-center{justify-content:center}:host .gcds-grid.justify-content-end{justify-content:end}:host .gcds-grid.justify-content-space-around{justify-content:space-around}:host .gcds-grid.justify-content-space-between{justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{justify-content:space-evenly}:host .gcds-grid.justify-content-start{justify-content:start}:host .gcds-grid.justify-content-stretch{justify-content:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}}@layer place{:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}}@layer equalHeight{:host .gcds-grid.equal-row-height{align-items:stretch;grid-auto-rows:1fr}}@layer tablet{@media screen and (width >= 48em){:host .gcds-grid{gap:var(--gcds-grid-gap-tablet,var(--gcds-grid-gap));grid-template-columns:var(\n        --gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-tablet),minmax(0,1fr))}}}@layer desktop{@media screen and (width >= 64em){:host .gcds-grid{gap:var(--gcds-grid-gap-desktop,var(--gcds-grid-gap-tablet,var(--gcds-grid-gap)));grid-template-columns:var(\n        --gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-desktop),minmax(0,1fr))}}}";
const GcdsGridStyle0 = gcdsGridCss;

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
const GcdsGrid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            console.error(`${I18N$g['en'].gapTabletError} | ${I18N$g['fr'].gapTabletError}`);
        }
    }
    validateGapDesktop(newValue) {
        const values = GridGapArray;
        if (newValue != undefined && !values.includes(newValue)) {
            this.gapDesktop = undefined;
            console.error(`${I18N$g['en'].gapDesktopError} | ${I18N$g['fr'].gapDesktopError}`);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "gap": ["validateGap"],
        "gapTablet": ["validateGapTablet"],
        "gapDesktop": ["validateGapDesktop"],
        "tag": ["validateTag"]
    }; }
};
GcdsGrid.style = GcdsGridStyle0;

const gcdsGridColCss = "@layer reset, default, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid-col{box-sizing:border-box;display:block;margin:0;padding:0}}@layer default{:host{grid-column:span var(--gcds-grid-columns-default-base) /span var(--gcds-grid-columns-default-base)}:host .gcds-grid-col{height:100%;width:100%}}@layer tablet{@media screen and (width >= 48em){:host{grid-column:span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet)) /span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet))}}}@layer desktop{@media screen and (width >= 64em){:host{grid-column:span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop)) /span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop))}}}";
const GcdsGridColStyle0 = gcdsGridColCss;

const GcdsGridCol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "tablet": ["validateTablet"],
        "desktop": ["validateDesktop"]
    }; }
};
GcdsGridCol.style = GcdsGridColStyle0;

const I18N$f = {
  en: {
    skip: 'Skip to main content',
    skipLabel: 'Skip to',
  },
  fr: {
    skip: 'Passer au contenu principal',
    skipLabel: 'Passer au',
  },
};

const gcdsHeaderCss = "@layer reset, default, brand, menu, wide;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host{margin:var(--gcds-header-margin)!important}:host .gcds-header__container{justify-content:space-between;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__skip-to-nav{margin-inline:auto;position:absolute;text-align:center;top:var(--gcds-header-skiptonav-top);width:100%}:host .gcds-header__skip-to-nav gcds-link{left:0;position:absolute;top:0;width:inherit;z-index:3}:host .gcds-header__skip-to-nav gcds-link:not(:focus){height:0;overflow:hidden;width:0;clip:rect(0,0,0,0)}}@layer brand{:host .gcds-header__brand{border-block-end:var(--gcds-header-brand-border-width) solid var(--gcds-header-brand-border-color);container:component brand/inline-size;padding:var(--gcds-header-brand-padding)}:host .gcds-header__brand .brand__container{display:grid;grid-gap:var(--gcds-header-brand-grid-gap);grid-template-areas:\"signature toggle\" \"search search\";grid-template-columns:1fr .1fr;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__brand .brand__container.container--simple{grid-template-areas:\"signature toggle\"}:host .gcds-header__brand .brand__container :is(.brand__toggle,slot[name=toggle]){grid-area:toggle;text-align:right}:host .gcds-header__brand .brand__container :is(.brand__signature,slot[name=signature]){align-content:center;grid-area:signature}:host .gcds-header__brand .brand__container .brand__search{display:block;grid-area:search;max-width:100%}}@layer menu{:host{--gcds-nav-group-mobile-trigger-margin:var(--gcds-header-menu-top-nav-mobile-trigger-margin)}}@layer wide{@container brand (width >= 51em){:host .gcds-header__brand .brand__container{grid-template-areas:\"toggle toggle\" \"signature search\";grid-template-columns:1fr 1fr}:host .gcds-header__brand .brand__container .brand__search,:host .gcds-header__brand .brand__container slot[name=search]{margin-inline-start:auto;width:fit-content}}}";
const GcdsHeaderStyle0 = gcdsHeaderCss;

const GcdsHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.langHref = undefined;
        this.signatureVariant = undefined;
        this.signatureHasLink = true;
        this.skipToHref = undefined;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    get renderSkipToNav() {
        if (this.el.querySelector('[slot="skip-to-nav"]')) {
            return h("slot", { name: "skip-to-nav" });
        }
        else if (this.skipToHref) {
            return (h("nav", { class: "gcds-header__skip-to-nav", "aria-label": I18N$f[this.lang].skipLabel }, h("gcds-link", { href: this.skipToHref }, I18N$f[this.lang].skip)));
        }
        else {
            return;
        }
    }
    get renderToggle() {
        if (this.el.querySelector('[slot="toggle"]')) {
            return h("slot", { name: "toggle" });
        }
        else if (this.langHref) {
            return (h("section", { class: "brand__toggle" }, h("gcds-lang-toggle", { lang: this.lang, href: this.langHref })));
        }
        else {
            return;
        }
    }
    get renderSignature() {
        const signVariant = this.signatureVariant
            ? this.signatureVariant
            : 'colour';
        if (this.el.querySelector('[slot="signature"]')) {
            return h("slot", { name: "signature" });
        }
        else {
            return (h("div", { class: "brand__signature" }, h("gcds-signature", { type: "signature", variant: signVariant, "has-link": this.signatureHasLink, lang: this.lang })));
        }
    }
    get renderSearch() {
        if (this.el.querySelector('[slot="search"]')) {
            return (h("div", { class: "brand__search" }, h("slot", { name: "search" })));
        }
        else {
            return;
        }
    }
    get hasSearch() {
        return !!this.el.querySelector('[slot="search"]');
    }
    get hasBanner() {
        return !!this.el.querySelector('[slot="banner"]');
    }
    get hasBreadcrumb() {
        return !!this.el.querySelector('[slot="breadcrumb"]');
    }
    render() {
        const { renderSkipToNav, renderToggle, renderSignature, renderSearch, hasSearch, hasBanner, hasBreadcrumb, } = this;
        return (h(Host, { key: '6efd0f4e2348ee9cf535345da9b29fa09e02bced', role: "banner" }, renderSkipToNav, hasBanner ? h("slot", { name: "banner" }) : null, h("div", { key: '3e3a968e58e1e43c1495947549b0699b205075c5', class: "gcds-header__brand" }, h("div", { key: 'fcede179bafd3b6d2a2825e38db8f6c067e4f413', class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), h("slot", { key: 'd282b219be7cd92f9acd02b53fa68a89a87ea1b4', name: "menu" }), hasBreadcrumb ? (h("div", { class: "gcds-header__container" }, h("slot", { name: "breadcrumb" }))) : null));
    }
    get el() { return getElement(this); }
};
GcdsHeader.style = GcdsHeaderStyle0;

// Helper function to generate SpacingArray dynamically
function generateSpacingArray() {
    const values = [];
    for (let i = 0; i <= 1250; i += 25) {
        values.push(i.toString());
    }
    return values;
}
const SpacingArray = generateSpacingArray();

const gcdsHeadingCss = "@layer reset, default, limit, margin;@layer reset{:host{color:var(--gcds-heading-default-text);display:block}:host :is(h1,h2,h3,h4,h5,h6){box-sizing:border-box;margin:0}:host slot{display:initial}}@layer default{:host :is(h1,h2,h3,h4,h5,h6){text-wrap:balance}:host h1.gcds-heading{font:var(--gcds-heading-h1-desktop)}@media only screen and (width < 48em){:host h1.gcds-heading{font:var(--gcds-heading-h1-mobile)}}:host h1.gcds-heading:after{background-color:var(--gcds-heading-h1-border-background);content:\"\";display:block;height:var(--gcds-heading-h1-border-height);margin-block-start:var(--gcds-heading-h1-border-margin);width:var(--gcds-heading-h1-border-width)}:host h2.gcds-heading{font:var(--gcds-heading-h2-desktop)}@media only screen and (width < 48em){:host h2.gcds-heading{font:var(--gcds-heading-h2-mobile)}}:host h3.gcds-heading{font:var(--gcds-heading-h3-desktop)}@media only screen and (width < 48em){:host h3.gcds-heading{font:var(--gcds-heading-h3-mobile)}}:host h4.gcds-heading{font:var(--gcds-heading-h4-desktop)}@media only screen and (width < 48em){:host h4.gcds-heading{font:var(--gcds-heading-h4-mobile)}}:host h5.gcds-heading{font:var(--gcds-heading-h5-desktop)}@media only screen and (width < 48em){:host h5.gcds-heading{font:var(--gcds-heading-h5-mobile)}}:host h6.gcds-heading{font:var(--gcds-heading-h6-desktop)}@media only screen and (width < 48em){:host h6.gcds-heading{font:var(--gcds-heading-h6-mobile)}}}@layer limit{:host h1.limit{max-width:var(--gcds-heading-character-limit-h1)}:host h2.limit{max-width:var(--gcds-heading-character-limit-h2)}:host h3.limit{max-width:var(--gcds-heading-character-limit-h3)}:host h4.limit{max-width:var(--gcds-heading-character-limit-h4)}:host h5.limit{max-width:var(--gcds-heading-character-limit-h5)}:host h6.limit{max-width:var(--gcds-heading-character-limit-h6)}}@layer margin{:host :is(h1,h2,h3,h4,h5,h6).mt-0{margin-block-start:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mt-25{margin-block-start:var(--gcds-heading-spacing-25)}:host :is(h1,h2,h3,h4,h5,h6).mt-50{margin-block-start:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mt-75{margin-block-start:var(--gcds-heading-spacing-75)}:host :is(h1,h2,h3,h4,h5,h6).mt-100{margin-block-start:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mt-125{margin-block-start:var(--gcds-heading-spacing-125)}:host :is(h1,h2,h3,h4,h5,h6).mt-150{margin-block-start:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mt-175{margin-block-start:var(--gcds-heading-spacing-175)}:host :is(h1,h2,h3,h4,h5,h6).mt-200{margin-block-start:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mt-225{margin-block-start:var(--gcds-heading-spacing-225)}:host :is(h1,h2,h3,h4,h5,h6).mt-250{margin-block-start:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mt-300{margin-block-start:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mt-350{margin-block-start:var(--gcds-heading-spacing-350)}:host :is(h1,h2,h3,h4,h5,h6).mt-400{margin-block-start:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mt-450{margin-block-start:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mt-500{margin-block-start:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mt-550{margin-block-start:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mt-600{margin-block-start:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mt-650{margin-block-start:var(--gcds-heading-spacing-650)}:host :is(h1,h2,h3,h4,h5,h6).mt-700{margin-block-start:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mt-750{margin-block-start:var(--gcds-heading-spacing-750)}:host :is(h1,h2,h3,h4,h5,h6).mt-800{margin-block-start:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mt-850{margin-block-start:var(--gcds-heading-spacing-850)}:host :is(h1,h2,h3,h4,h5,h6).mt-900{margin-block-start:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mt-950{margin-block-start:var(--gcds-heading-spacing-950)}:host :is(h1,h2,h3,h4,h5,h6).mt-1000{margin-block-start:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mt-1050{margin-block-start:var(--gcds-heading-spacing-1050)}:host :is(h1,h2,h3,h4,h5,h6).mt-1100{margin-block-start:var(--gcds-heading-spacing-1100)}:host :is(h1,h2,h3,h4,h5,h6).mt-1150{margin-block-start:var(--gcds-heading-spacing-1150)}:host :is(h1,h2,h3,h4,h5,h6).mt-1200{margin-block-start:var(--gcds-heading-spacing-1200)}:host :is(h1,h2,h3,h4,h5,h6).mt-1250{margin-block-start:var(--gcds-heading-spacing-1250)}:host :is(h1,h2,h3,h4,h5,h6).mb-0{margin-block-end:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mb-25{margin-block-end:var(--gcds-heading-spacing-25)}:host :is(h1,h2,h3,h4,h5,h6).mb-50{margin-block-end:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mb-75{margin-block-end:var(--gcds-heading-spacing-75)}:host :is(h1,h2,h3,h4,h5,h6).mb-100{margin-block-end:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mb-125{margin-block-end:var(--gcds-heading-spacing-125)}:host :is(h1,h2,h3,h4,h5,h6).mb-150{margin-block-end:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mb-175{margin-block-end:var(--gcds-heading-spacing-175)}:host :is(h1,h2,h3,h4,h5,h6).mb-200{margin-block-end:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mb-225{margin-block-end:var(--gcds-heading-spacing-225)}:host :is(h1,h2,h3,h4,h5,h6).mb-250{margin-block-end:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mb-300{margin-block-end:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mb-350{margin-block-end:var(--gcds-heading-spacing-350)}:host :is(h1,h2,h3,h4,h5,h6).mb-400{margin-block-end:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mb-450{margin-block-end:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mb-500{margin-block-end:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mb-550{margin-block-end:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mb-600{margin-block-end:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mb-650{margin-block-end:var(--gcds-heading-spacing-650)}:host :is(h1,h2,h3,h4,h5,h6).mb-700{margin-block-end:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mb-750{margin-block-end:var(--gcds-heading-spacing-750)}:host :is(h1,h2,h3,h4,h5,h6).mb-800{margin-block-end:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mb-850{margin-block-end:var(--gcds-heading-spacing-850)}:host :is(h1,h2,h3,h4,h5,h6).mb-900{margin-block-end:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mb-950{margin-block-end:var(--gcds-heading-spacing-950)}:host :is(h1,h2,h3,h4,h5,h6).mb-1000{margin-block-end:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mb-1050{margin-block-end:var(--gcds-heading-spacing-1050)}:host :is(h1,h2,h3,h4,h5,h6).mb-1100{margin-block-end:var(--gcds-heading-spacing-1100)}:host :is(h1,h2,h3,h4,h5,h6).mb-1150{margin-block-end:var(--gcds-heading-spacing-1150)}:host :is(h1,h2,h3,h4,h5,h6).mb-1200{margin-block-end:var(--gcds-heading-spacing-1200)}:host :is(h1,h2,h3,h4,h5,h6).mb-1250{margin-block-end:var(--gcds-heading-spacing-1250)}}";
const GcdsHeadingStyle0 = gcdsHeadingCss;

const GcdsHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tag = undefined;
        this.characterLimit = true;
        this.marginTop = undefined;
        this.marginBottom = '300';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        if (!values.includes(newValue)) {
            console.error('Not a valid tag.');
        }
    }
    validateMarginTop(newValue) {
        if (!this.marginTop ||
            (this.marginTop && !SpacingArray.includes(newValue))) {
            this.marginTop = this.tag === 'h1' ? '0' : '600';
        }
    }
    validateMarginBottom(newValue) {
        if (this.marginBottom &&
            !SpacingArray.includes(newValue)) {
            this.marginBottom = '300';
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
        return (h(Host, { key: 'b2f8e7fc2e0137c303657c7b6ead41f1911ed975' }, h(Tag, { key: '136f5f9083247a238aeeb58c72e3fb5e862956c3', class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", { key: '881ac6dfd723d6352b8eb95937b1e340f38d26e1' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "tag": ["validateTag"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"]
    }; }
};
GcdsHeading.style = GcdsHeadingStyle0;

const gcdsHintCss = "@layer reset, default;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-hint,:host gcds-text::part(text){color:var(--gcds-hint-text)}:host .gcds-hint{margin:var(--gcds-hint-margin)}}";
const GcdsHintStyle0 = gcdsHintCss;

const GcdsHint = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hintId = undefined;
    }
    render() {
        const { hintId } = this;
        return (h(Host, { key: '8e9af18f71f043062a78de179236357539afe979', id: `hint-${hintId}` }, h("gcds-text", { key: 'bac3fc4edbbb00b2191989bc155636aa0ab6c68c', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '1fdb52992e56952156704305469a85e30b2bb398' }))));
    }
    get el() { return getElement(this); }
};
GcdsHint.style = GcdsHintStyle0;

const I18N$e = {
  en: {
    nameError: 'gcds-icon: Invalid name.',
  },
  fr: {
    nameError: 'gcds-icon: Nom invalide.',
  },
};

const gcdsIconCss = "@layer reset, default, names, margin, size;\n@layer reset {\n  :host {\n    display: inline-block;\n  }\n  :host :host .gcds-icon {\n    font-size: inherit;\n    line-height: inherit;\n    color: inherit;\n  }\n}\n@layer default {\n  :host .gcds-icon {\n    font-family: var(--gcds-icon-font-family) !important;\n    speak: never;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n@layer names {\n  :host .gcds-icon-checkmark-circle:before {\n    content: \"\\e908\";\n  }\n  :host .gcds-icon-chevron-down:before {\n    content: \"\\e900\";\n  }\n  :host .gcds-icon-chevron-left:before {\n    content: \"\\e901\";\n  }\n  :host .gcds-icon-chevron-right:before {\n    content: \"\\e902\";\n  }\n  :host .gcds-icon-chevron-up:before {\n    content: \"\\e903\";\n  }\n  :host .gcds-icon-close:before {\n    content: \"\\e90b\";\n  }\n  :host .gcds-icon-download:before {\n    content: \"\\e906\";\n  }\n  :host .gcds-icon-email:before {\n    content: \"\\e905\";\n  }\n  :host .gcds-icon-exclamation-circle:before {\n    content: \"\\e909\";\n  }\n  :host .gcds-icon-external:before {\n    content: \"\\e904\";\n  }\n  :host .gcds-icon-info-circle:before {\n    content: \"\\e90a\";\n  }\n  :host .gcds-icon-phone:before {\n    content: \"\\e90c\";\n  }\n  :host .gcds-icon-search:before {\n    content: \"\\e907\";\n  }\n  :host .gcds-icon-warning-triangle:before {\n    content: \"\\e90d\";\n  }\n}\n@layer margin {\n  :host .gcds-icon {\n    /* Margin left */\n    /* Margin right */\n  }\n  :host .gcds-icon.ml-0 {\n    margin-inline-start: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.ml-25 {\n    margin-inline-start: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.ml-50 {\n    margin-inline-start: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.ml-75 {\n    margin-inline-start: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.ml-100 {\n    margin-inline-start: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.ml-125 {\n    margin-inline-start: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.ml-150 {\n    margin-inline-start: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.ml-175 {\n    margin-inline-start: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.ml-200 {\n    margin-inline-start: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.ml-225 {\n    margin-inline-start: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.ml-250 {\n    margin-inline-start: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.ml-300 {\n    margin-inline-start: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.ml-350 {\n    margin-inline-start: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.ml-400 {\n    margin-inline-start: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.ml-450 {\n    margin-inline-start: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.ml-500 {\n    margin-inline-start: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.ml-550 {\n    margin-inline-start: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.ml-600 {\n    margin-inline-start: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.ml-650 {\n    margin-inline-start: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.ml-700 {\n    margin-inline-start: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.ml-750 {\n    margin-inline-start: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.ml-800 {\n    margin-inline-start: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.ml-850 {\n    margin-inline-start: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.ml-900 {\n    margin-inline-start: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.ml-950 {\n    margin-inline-start: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.ml-1000 {\n    margin-inline-start: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.ml-1050 {\n    margin-inline-start: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.ml-1100 {\n    margin-inline-start: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.ml-1150 {\n    margin-inline-start: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.ml-1200 {\n    margin-inline-start: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.ml-1250 {\n    margin-inline-start: var(--gcds-icon-margin-1250);\n  }\n  :host .gcds-icon.mr-0 {\n    margin-inline-end: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.mr-25 {\n    margin-inline-end: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.mr-50 {\n    margin-inline-end: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.mr-75 {\n    margin-inline-end: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.mr-100 {\n    margin-inline-end: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.mr-125 {\n    margin-inline-end: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.mr-150 {\n    margin-inline-end: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.mr-175 {\n    margin-inline-end: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.mr-200 {\n    margin-inline-end: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.mr-225 {\n    margin-inline-end: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.mr-250 {\n    margin-inline-end: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.mr-300 {\n    margin-inline-end: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.mr-350 {\n    margin-inline-end: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.mr-400 {\n    margin-inline-end: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.mr-450 {\n    margin-inline-end: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.mr-500 {\n    margin-inline-end: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.mr-550 {\n    margin-inline-end: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.mr-600 {\n    margin-inline-end: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.mr-650 {\n    margin-inline-end: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.mr-700 {\n    margin-inline-end: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.mr-750 {\n    margin-inline-end: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.mr-800 {\n    margin-inline-end: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.mr-850 {\n    margin-inline-end: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.mr-900 {\n    margin-inline-end: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.mr-950 {\n    margin-inline-end: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.mr-1000 {\n    margin-inline-end: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.mr-1050 {\n    margin-inline-end: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.mr-1100 {\n    margin-inline-end: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.mr-1150 {\n    margin-inline-end: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.mr-1200 {\n    margin-inline-end: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.mr-1250 {\n    margin-inline-end: var(--gcds-icon-margin-1250);\n  }\n}\n@layer size {\n  :host .gcds-icon.size-text-small {\n    font-size: var(--gcds-icon-font-size-text-small);\n    line-height: var(--gcds-icon-line-height-text-small);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text-small {\n      font-size: var(--gcds-icon-font-size-text-small-mobile);\n      line-height: var(--gcds-icon-line-height-text-small-mobile);\n    }\n  }\n  :host .gcds-icon.size-text {\n    font-size: var(--gcds-icon-font-size-text);\n    line-height: var(--gcds-icon-line-height-text);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text {\n      font-size: var(--gcds-icon-font-size-text-mobile);\n      line-height: var(--gcds-icon-line-height-text-mobile);\n    }\n  }\n  :host .gcds-icon.size-h6 {\n    font-size: var(--gcds-icon-font-size-h6);\n    line-height: var(--gcds-icon-line-height-h6);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h6 {\n      font-size: var(--gcds-icon-font-size-h6-mobile);\n      line-height: var(--gcds-icon-line-height-h6-mobile);\n    }\n  }\n  :host .gcds-icon.size-h5 {\n    font-size: var(--gcds-icon-font-size-h5);\n    line-height: var(--gcds-icon-line-height-h5);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h5 {\n      font-size: var(--gcds-icon-font-size-h5-mobile);\n      line-height: var(--gcds-icon-line-height-h5-mobile);\n    }\n  }\n  :host .gcds-icon.size-h4 {\n    font-size: var(--gcds-icon-font-size-h4);\n    line-height: var(--gcds-icon-line-height-h4);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h4 {\n      font-size: var(--gcds-icon-font-size-h4-mobile);\n      line-height: var(--gcds-icon-line-height-h4-mobile);\n    }\n  }\n  :host .gcds-icon.size-h3 {\n    font-size: var(--gcds-icon-font-size-h3);\n    line-height: var(--gcds-icon-line-height-h3);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h3 {\n      font-size: var(--gcds-icon-font-size-h3-mobile);\n      line-height: var(--gcds-icon-line-height-h3-mobile);\n    }\n  }\n  :host .gcds-icon.size-h2 {\n    font-size: var(--gcds-icon-font-size-h2);\n    line-height: var(--gcds-icon-line-height-h2);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h2 {\n      font-size: var(--gcds-icon-font-size-h2-mobile);\n      line-height: var(--gcds-icon-line-height-h2-mobile);\n    }\n  }\n  :host .gcds-icon.size-h1 {\n    font-size: var(--gcds-icon-font-size-h1);\n    line-height: var(--gcds-icon-line-height-h1);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h1 {\n      font-size: var(--gcds-icon-font-size-h1-mobile);\n      line-height: var(--gcds-icon-line-height-h1-mobile);\n    }\n  }\n}";
const GcdsIconStyle0 = gcdsIconCss;

const GcdsIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            console.error(`${I18N$e['en'].nameError} | ${I18N$e['fr'].nameError}`);
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
        return (h(Host, { key: 'c1007874d5124b1b6a922176716182ddf1d2856f' }, h("span", { key: '6d1934a3ae40303b9246820187f25bb3eec65648', class: `
            gcds-icon gcds-icon-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
          `, role: "img", "aria-label": label ? label : false, "aria-hidden": label ? 'false' : 'true' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["validateName"],
        "size": ["validateSize"]
    }; }
};
GcdsIcon.style = GcdsIconStyle0;

const gcdsInputCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-input-wrapper{border:0;margin:0;padding:0}:host .gcds-input-wrapper input{box-sizing:border-box}}@layer default{:host .gcds-input-wrapper{color:var(--gcds-input-default-text);font:var(--gcds-input-font);max-width:75ch;transition:color .15s ease-in-out;width:100%}:host .gcds-input-wrapper input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);color:var(--gcds-input-default-text);display:block;font:inherit!important;height:auto;margin:var(--gcds-input-margin)!important;max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}:host .gcds-input-wrapper input[type=number]{-moz-appearance:textfield}:host .gcds-input-wrapper input[type=number]::-webkit-inner-spin-button,:host .gcds-input-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}}@layer disabled{:host .gcds-input-wrapper.gcds-disabled{color:var(--gcds-input-disabled-text)}:host .gcds-input-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-input-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-input-wrapper.gcds-disabled input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-input-wrapper input.gcds-error:not(:focus){border-color:var(--gcds-input-danger-border)}}@layer focus{:host .gcds-input-wrapper:focus-within input:focus{border-color:var(--gcds-input-focus-border);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-border);outline-offset:var(--gcds-input-border-width)}}";
const GcdsInputStyle0 = gcdsInputCss;

const GcdsInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null);
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.disabled = false;
        this.errorMessage = undefined;
        this.hideLabel = false;
        this.hint = undefined;
        this.inputId = undefined;
        this.name = undefined;
        this.label = undefined;
        this.required = false;
        this.size = undefined;
        this.type = 'text';
        this.value = undefined;
        this.autocomplete = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
    }
    validateDisabledInput() {
        if (this.required) {
            this.disabled = false;
        }
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else if (!this.hasError && this.errorMessage) {
            this.hasError = true;
        }
        else if (this.errorMessage == '') {
            this.hasError = false;
        }
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Watch HTML attributes to inherit changes
     */
    ariaInvalidWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
    }
    /**
     * Call any active validators
     */
    async validate() {
        if (!this._validator.validate(this.value) && this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.inputId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.inputId}` });
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError && this.validateOn != 'other') {
                e.preventDefault();
            }
        }
    }
    keyDownListener(e) {
        if (e.target == this.el && e.key === 'Enter') {
            const formButton = document.createElement('button');
            formButton.type = 'submit';
            formButton.style.display = 'none';
            this.el.closest('form').appendChild(formButton);
            formButton.click();
            formButton.remove();
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledInput();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang, } = this;
        // Use max-width to keep field responsive
        const style = {
            maxWidth: `calc(${size * 2}ch + 1.5rem)`,
        };
        const attrsInput = Object.assign({ disabled,
            required,
            type,
            value,
            autocomplete }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${inputId} ` : '';
            const errorID = errorMessage ? `error-message-${inputId} ` : '';
            attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']
                ? ` ${attrsInput['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: '936d0032ed3ab7ec2d9553d3b185c048e4fa9336' }, h("div", { key: 'e979cb26ba6873bce3a353212a587cea8f33c62d', class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '02f0d017dad57cb1b2b0f98e2cb1a6bee28254bf' }, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId }, errorMessage)) : null, h("input", Object.assign({ key: 'd8b48105699a51a349748be5af8fd0e57a781599' }, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', size: size, style: size ? style : null, part: "input", ref: element => (this.shadowElement = element) })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["validateDisabledInput"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "aria-invalid": ["ariaInvalidWatcher"],
        "aria-description": ["ariaDescriptiondWatcher"]
    }; }
};
GcdsInput.style = GcdsInputStyle0;

const I18N$d = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsLabelCss = "@layer reset, default;@layer reset{.sc-gcds-label-h{display:block}}@layer default{.sc-gcds-label-h .gcds-label{color:var(--gcds-label-text);cursor:pointer;display:block;font:var(--gcds-label-font-desktop);margin:var(--gcds-label-margin)!important;max-width:100%}@media only screen and (width < 48em){.sc-gcds-label-h .gcds-label{font:var(--gcds-label-font-mobile)}}.sc-gcds-label-h .gcds-label.label--hidden{height:0;margin:0;opacity:0;overflow:hidden;width:0}.sc-gcds-label-h .gcds-label .label--required{font-weight:var(--gcds-label-required-font-weight);margin:var(--gcds-label-required-margin)!important}}";
const GcdsLabelStyle0 = gcdsLabelCss;

const GcdsLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = (ev) => {
            if (ev.srcElement.tagName == 'GCDS-LABEL') {
                this.clickEl();
            }
        };
        this.hideLabel = undefined;
        this.label = undefined;
        this.labelFor = undefined;
        this.required = undefined;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    /**
     * Click label if host element is clicked
     */
    clickEl() {
        if (this.focusEl) {
            this.focusEl.click();
        }
    }
    render() {
        const { hideLabel, labelFor, label, required, lang } = this;
        return (h(Host, { key: '2f4fe7a9d0a0fcea5019edc8158adae424074428', id: `label-for-${labelFor}`, onClick: this.onClick }, h("label", { key: '721461d1eb5818ff6b28f06bb314e27a5c0eb0c5', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}`, ref: focusEl => (this.focusEl = focusEl) }, h("span", { key: '0564e25540c9a5ec81fbbba77c72e2892d5ccc51' }, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", I18N$d[lang].required, ")")) : null)));
    }
    get el() { return getElement(this); }
};
GcdsLabel.style = GcdsLabelStyle0;

const I18N$c = {
  en: {
    abbreviation: 'fr',
    heading: 'Language selection',
    language: 'Français',
  },
  fr: {
    abbreviation: 'en',
    heading: 'Sélection de la langue',
    language: 'English',
  },
};

const gcdsLangToggleCss = "@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host .gcds-lang-toggle h2{margin:0;overflow:hidden;position:absolute;width:0}}@layer default{:host .gcds-lang-toggle gcds-link::part(link){display:inline-block;padding:var(--gcds-lang-toggle-padding)}:host .gcds-lang-toggle span{display:none}:host .gcds-lang-toggle abbr{text-decoration:none;text-transform:uppercase}}@layer desktop{@media screen and (width >= 48em){:host .gcds-lang-toggle gcds-link::part(link){font:var(--gcds-lang-toggle-font-desktop);padding-inline:0!important}:host .gcds-lang-toggle span{display:initial}:host .gcds-lang-toggle abbr{display:none}}}@layer mobile{@media screen and (width < 48em){:host .gcds-lang-toggle gcds-link::part(link){font:var(--gcds-lang-toggle-font-mobile)}}}";
const GcdsLangToggleStyle0 = gcdsLangToggleCss;

const GcdsLangToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { lang, href } = this;
        return (h(Host, { key: '05fc4f7ec61276b9e15ccb9fe75f257049bf3577' }, h("div", { key: 'dc156971e988f7c4024ad760777e27f65c30b533', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: 'dae3c2e582bbe214f9ec8422bacc3f6bb5f61dfe', id: "lang-toggle__heading", tag: "h2" }, I18N$c[lang].heading), h("gcds-link", { key: '6bf0e599cace009ab90efce6a355389b3374e8a7', size: "regular", href: href, lang: I18N$c[lang].abbreviation }, h("span", { key: 'cba5121aac09ac07fabc7c409653d83126f1da9d' }, I18N$c[lang].language), h("abbr", { key: 'bf8fc9ac514ed5c243c52d63be1cef06cb024b9e', title: I18N$c[lang].language }, I18N$c[lang].abbreviation)))));
    }
    get el() { return getElement(this); }
};
GcdsLangToggle.style = GcdsLangToggleStyle0;

const I18N$b = {
  en: {
    external: ' (Opens destination in a new tab.)',
    phone: ' (Attempts to open a phone app.)',
    download: ' (Attempts to download a file to the device.)',
    email: ' (Opens new message in email program.)',
  },
  fr: {
    external: " (Ouvre l'emplacement dans un nouvel onglet.)",
    phone: " (Tente d'ouvrir une application de téléphonie.)",
    download: " (Tente de télécharger un fichier sur l'appareil.)",
    email: ' (Ouvre un nouveau message dans le logiciel de messagerie.)',
  },
};

const gcdsLinkCss = "@layer reset, default, display, size, variant, hover, visited, focus;@layer reset{:host{display:inline}:host slot{display:initial}}@layer default{:host .gcds-link{color:var(--gcds-link-default);cursor:pointer;text-decoration-color:currentColor;text-decoration-style:solid;text-decoration-thickness:var(--gcds-link-decoration-thickness);text-underline-offset:var(--gcds-link-underline-offset);transition:all .35s}}@layer display{:host .gcds-link.d-block{display:block}}@layer size{:host .gcds-link.link--small{font:var(--gcds-link-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--small{font:var(--gcds-link-font-small-mobile)}}:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-mobile)}}:host .gcds-link.link--inherit{font:inherit}}@layer variant{:host .gcds-link.variant-light{color:var(--gcds-link-light)}}@layer hover{@media (hover:hover){:host .gcds-link:hover{text-decoration-thickness:var(--gcds-link-hover-decoration-thickness)}:host .gcds-link:hover:not(.variant-light){color:var(--gcds-link-hover)}}}@layer visited{:host .gcds-link:not(.variant-light):visited{color:var(--gcds-link-visited)}}@layer focus{:host .gcds-link:focus{background-color:var(--gcds-link-focus-background);border-radius:var(--gcds-link-focus-border-radius);box-shadow:var(--gcds-link-focus-box-shadow);color:var(--gcds-link-focus-text);outline:var(--gcds-link-focus-outline-width) solid var(--gcds-link-focus-background);outline-offset:var(--gcds-link-focus-outline-offset);text-decoration:none}}";
const GcdsLinkStyle0 = gcdsLinkCss;

const GcdsLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.variant = 'default';
        this.size = 'inherit';
        this.display = 'inline';
        this.href = undefined;
        this.rel = undefined;
        this.target = '_self';
        this.external = false;
        this.download = undefined;
        this.type = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateVariant(newValue) {
        const values = ['default', 'light'];
        if (!values.includes(newValue)) {
            this.variant = 'default';
        }
    }
    validateSize(newValue) {
        const values = ['regular', 'small', 'inherit'];
        if (!values.includes(newValue)) {
            this.size = 'inherit';
        }
    }
    validateDisplay(newValue) {
        const values = ['block', 'inline'];
        if (!values.includes(newValue)) {
            this.display = 'inline';
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
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateVariant(this.variant);
        this.validateSize(this.size);
        this.validateDisplay(this.display);
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'referrerpolicy',
        ]);
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { size, lang, display, href, rel, target, external, download, type, inheritedAttributes, variant, } = this;
        const attrs = {
            href,
            rel,
            target,
            download,
            type,
        };
        const isExternal = target === '_blank' || external;
        return (h(Host, { key: '361b0eae9c009484a60cae6ab0c7dfc91f9bddec' }, h("a", Object.assign({ key: 'a1fb3f918373cc7e9374a0ee378005a1356274d2', role: "link", tabIndex: 0 }, attrs, { class: `gcds-link link--${size} ${display != 'inline' ? `d-${display}` : ''} ${variant != 'default' ? `variant-${variant}` : ''}`, ref: element => (this.shadowElement = element), target: isExternal ? '_blank' : target, rel: isExternal ? 'noopener noreferrer' : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href) }), h("slot", { key: '883dc938a4fe2c5ad27dc5bdc4276717c5b7c15f' }), target === '_blank' || external ? (h("gcds-icon", { name: "external", label: I18N$b[lang].external, "margin-left": "75" })) : download !== undefined ? (h("gcds-icon", { name: "download", label: I18N$b[lang].download, "margin-left": "75" })) : href && href.toLowerCase().startsWith('mailto:') ? (h("gcds-icon", { name: "email", label: I18N$b[lang].email, "margin-left": "75" })) : (href &&
            href.toLowerCase().startsWith('tel:') && (h("gcds-icon", { name: "phone", label: I18N$b[lang].phone, "margin-left": "75" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "variant": ["validateVariant"],
        "size": ["validateSize"],
        "display": ["validateDisplay"]
    }; }
};
GcdsLink.style = GcdsLinkStyle0;

const gcdsNavGroupCss = "@layer reset, defaults, sideNav, topNav, mobileNav, desktop, mobile, hover, focus;@layer reset{:host *{box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{align-self:flex-end;display:flex;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{align-items:center;background:transparent;border:0;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:flex;font:var(--gcds-nav-group-trigger-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}:host ul{list-style:none}}@layer sideNav{:host .gcds-trigger--expandable{font-weight:var(--gcds-nav-group-side-nav-trigger-font-weight);margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}}@layer topNav{:host .gcds-trigger--dropdown{border-block-end:var(--gcds-nav-group-top-nav-trigger-border-width) solid transparent;margin-inline-start:var(\n      --gcds-nav-group-top-nav-trigger-margin-inline-start\n    );padding:var(--gcds-nav-group-top-nav-trigger-padding);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration-color:transparent;text-underline-offset:var(\n      --gcds-nav-group-top-nav-trigger-underline-offset\n    );transition:all .25s ease-in-out}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(\n        --gcds-nav-group-top-nav-trigger-expanded-background-color\n      )}:host .gcds-trigger--dropdown gcds-icon{margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);order:2}}@layer mobileNav{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);flex-direction:row-reverse;justify-content:center;margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}:host([open].gcds-mobile-nav){background-color:var(--gcds-nav-group-mobile-background);height:100vh;left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding)!important;position:fixed;top:0;width:100%;z-index:100}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}:host .gcds-nav--expandable{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}:host(.gcds-mobile-nav)>.gcds-nav--expandable{display:block;padding:0}:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}:host(.gcds-mobile-nav-topnav)>.gcds-nav--expandable{display:flex}}@media only screen and (width >= 64em) and (width < 96em){:host .gcds-nav--dropdown{right:0}}}@layer mobile{@media only screen and (width < 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}:host([open]:not(.gcds-mobile-nav)) .gcds-nav-group__list{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}@media only screen and (48em < width < 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{align-self:flex-start;width:auto}}}@layer hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(\n          --gcds-nav-group-top-nav-trigger-hover-decoration-thickness\n        )}:host .gcds-trigger--expandable:hover{background-color:var(\n          --gcds-nav-group-side-nav-trigger-hover-background\n        )}}}@layer focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}";
const GcdsNavGroupStyle0 = gcdsNavGroupCss;

const GcdsNavGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.closeTrigger = undefined;
        this.menuLabel = undefined;
        this.openTrigger = undefined;
        this.open = false;
        this.lang = undefined;
        this.navStyle = undefined;
        this.navPosiiton = undefined;
    }
    // Close dropdowns on focusout when on desktop screen size
    async focusOutListener(e) {
        if ((e.target === this.el || this.el.contains(e.target)) &&
            !this.el.contains(e.relatedTarget) &&
            this.navStyle === 'dropdown' &&
            this.open &&
            window.innerWidth >= 1024) {
            setTimeout(() => this.toggleNav(), 200);
        }
    }
    /**
     * Focus button element
     */
    async focusTrigger() {
        this.triggerElement.focus();
    }
    /**
     * Toggle the nav open or closed
     */
    async toggleNav() {
        this.open = !this.open;
        // Close any child nav-groups
        for (let i = 0; i < this.el.children.length; i++) {
            if (this.el.children[i].nodeName == 'GCDS-NAV-GROUP' &&
                this.el.children[i].hasAttribute('open')) {
                this.el.children[i].toggleNav();
            }
        }
        // Dropdown exception - Close child dropdown nav-groups if opened in mobile menu
        if (this.el.classList.contains('gcds-mobile-nav-topnav')) {
            const topnav = closestElement('gcds-top-nav', this.el);
            const childNavGroups = topnav.querySelectorAll('gcds-nav-group');
            childNavGroups.forEach(navGroup => {
                if (navGroup.hasAttribute('open')) {
                    navGroup.toggleNav();
                }
            });
        }
        // Remove ability to scroll page when mobile menu is open
        if (this.el.classList.contains('gcds-mobile-nav')) {
            if (this.open) {
                this.navPosiiton = window.scrollY;
                document.body.style.position = 'fixed';
            }
            else {
                document.body.style.removeProperty('position');
                window.scrollTo(0, this.navPosiiton);
            }
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
            this.navStyle = 'dropdown';
            if (this.open) {
                this.open = false;
            }
        }
        else {
            this.navStyle = 'expandable';
        }
        if (this.el.parentNode.nodeName == 'GCDS-NAV-GROUP' &&
            !this.el.parentNode.classList.contains('gcds-mobile-nav') &&
            this.el.closest('gcds-top-nav')) {
            this.el.remove();
        }
    }
    render() {
        const { closeTrigger, menuLabel, open, openTrigger } = this;
        return (h(Host, { key: 'a8ccd5b9fe3fc863f028659e07c3b8daf1490bf6', role: "listitem", open: open }, h("button", { key: '4ff6bd558a2b8e380130754fc1fc1cb4efc133cb', "aria-haspopup": "true", tabIndex: 0, "aria-expanded": open.toString(), ref: element => (this.triggerElement = element), class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggleNav();
                }
            } }, h("gcds-icon", { key: '64bb2e9c579c7f28b9a52764b54e42ea4ac4cd23', name: open ? 'chevron-up' : 'chevron-down' }), closeTrigger && open ? closeTrigger : openTrigger), h("ul", { key: 'b8de299b4d122f1251e5822a2a1056d8f63ab583', "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, h("slot", { key: '67a8a53ac07bb72994f218101f3c45d5c58d34bc' }))));
    }
    get el() { return getElement(this); }
};
GcdsNavGroup.style = GcdsNavGroupStyle0;

const gcdsNavLinkCss = "@layer reset, default, variants, hover, active, focus;@layer reset{:host .gcds-nav-link{box-sizing:border-box}:host .gcds-nav-link slot{display:initial}}@layer default{:host .gcds-nav-link{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:flex;font:var(--gcds-nav-link-font);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(--gcds-nav-link-default-decoration-thickness);text-underline-offset:var(--gcds-nav-link-default-underline-offset);transition:all .25s ease-in-out}@media only screen and (width < 64em){:host .gcds-nav-link{min-width:50%}}@media only screen and (width > 48em){:host .gcds-nav-link{max-width:var(--gcds-nav-link-default-max-width)}}:host .gcds-nav-link[aria-current=page]{pointer-events:none;text-decoration:none}}@layer variants{@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link{border-block-end:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:var(--gcds-nav-link-top-nav-margin);padding:var(--gcds-nav-link-top-nav-padding)}:host>.gcds-nav-link--topnav.gcds-nav-link:not(:hover){text-decoration-color:transparent}:host([slot=home])>.gcds-nav-link{font:var(--gcds-nav-link-top-nav-home-font);padding:var(--gcds-nav-link-top-nav-home-padding)}}:host>.gcds-nav-link--sidenav.gcds-nav-link{padding:var(--gcds-nav-link-side-nav-padding)}}@layer hover{@media (hover:hover){:host .gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text);text-decoration-thickness:var(\n        --gcds-nav-link-hover-decoration-thickness\n      )}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover,:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text)}:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{background-color:var(--gcds-nav-link-side-nav-hover-background)}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover{background-color:var(--gcds-nav-link-top-nav-hover-background)}}}@layer active{:host .gcds-nav-link[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text);font-weight:var(--gcds-nav-link-active-font-weight)}@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link[aria-current=page]{background-color:transparent;border-block-end-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-top-nav-text);font:var(--gcds-nav-link-font)}}}@layer focus{:host .gcds-nav-link:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);box-shadow:var(--gcds-nav-link-focus-box-shadow);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}";
const GcdsNavLinkStyle0 = gcdsNavLinkCss;

const GcdsNavLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.href = undefined;
        this.current = undefined;
        this.lang = undefined;
        this.navStyle = undefined;
    }
    /**
     * Focus the link element
     */
    async focusLink() {
        this.linkElement.focus();
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        if (this.el.closest('gcds-top-nav')) {
            if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
                this.navStyle = 'topnav';
            }
            else {
                this.navStyle = 'dropdown';
            }
        }
        else {
            this.navStyle = 'sidenav';
        }
    }
    render() {
        const { current, href } = this;
        const linkAttrs = {};
        if (current) {
            linkAttrs['aria-current'] = 'page';
        }
        return (h(Host, { key: '32ea4108ff71d895c105a9d0faca30969c9f5e79', role: "listitem" }, h("a", Object.assign({ key: 'e3833e2000d7d835f22706381ba8bbaf0b827c81', class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href: href }, linkAttrs, { tabIndex: 0, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href), ref: element => (this.linkElement = element) }), h("slot", { key: '916d4530c67fcf93f3ac8e7efed557be07df4541' }))));
    }
    get el() { return getElement(this); }
};
GcdsNavLink.style = GcdsNavLinkStyle0;

const I18N$a = {
  en: {
    success: 'Success: ',
    info: 'Information: ',
    warning: 'Warning: ',
    danger: 'Danger: '
  },
  fr: {
    success: 'Succès : ',
    info: 'Information : ',
    warning: 'Avertissement : ',
    danger: 'Danger : '
  },
};

const gcdsNoticeCss = "@layer reset, default, type;@layer reset{:host{display:block}:host .gcds-notice{box-sizing:border-box;text-align:left}:host .gcds-notice slot{display:initial}}@layer default{:host .gcds-notice{color:var(--gcds-notice-text);display:grid;gap:var(--gcds-notice-icon-gap);grid-template-columns:var(--gcds-notice-icon-width) auto}:host .gcds-notice .notice__heading{--gcds-heading-h2-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h2-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h4-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h4-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h5-desktop:var(\n        --gcds-notice-content-heading-font-desktop\n      );--gcds-heading-h5-mobile:var(--gcds-notice-content-heading-font-mobile);margin-block-start:var(--gcds-notice-content-heading-margin-block-start-desktop)}@media only screen and (width < 48em){:host .gcds-notice .notice__heading{margin-block-start:var(--gcds-notice-content-heading-margin-block-start-mobile)}}:host .gcds-notice .notice__icon{margin:var(--gcds-notice-icon-margin)}:host .gcds-notice .notice__icon:before{background-color:currentColor;content:\"\";display:block;height:var(--gcds-notice-icon-before-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice .notice__icon:after{background-color:currentColor;content:\"\";display:block;height:var(--gcds-notice-icon-after-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-desktop);margin-block-start:0}@media only screen and (width < 48em){:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-mobile)}}:host .gcds-notice ::slotted(:last-child){margin-block-end:0}:host .gcds-notice ::slotted(:not(:last-child)){margin-block-end:var(--gcds-notice-content-slotted-margin)}:host .gcds-notice ::slotted(ol),:host .gcds-notice ::slotted(ul){margin-inline-start:var(--gcds-notice-content-slotted-list-margin);padding:0}}@layer type{:host .gcds-notice.notice--type-danger .notice__icon{color:var(--gcds-notice-danger-text)}:host .gcds-notice.notice--type-info .notice__icon{color:var(--gcds-notice-info-text)}:host .gcds-notice.notice--type-success .notice__icon{color:var(--gcds-notice-success-text)}:host .gcds-notice.notice--type-warning .notice__icon{color:var(--gcds-notice-warning-text)}}";
const GcdsNoticeStyle0 = gcdsNoticeCss;

const GcdsNotice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = undefined;
        this.noticeTitle = undefined;
        this.noticeTitleTag = undefined;
        this.errors = [];
        this.lang = undefined;
    }
    validateType() {
        if (!this.type) {
            this.errors.push('type');
        }
        else if (this.errors.includes('type')) {
            this.errors.splice(this.errors.indexOf('type'), 1);
        }
    }
    validateNoticeTitle() {
        if (!this.noticeTitle || this.noticeTitle === '') {
            this.errors.push('noticeTitle');
        }
        else if (this.errors.includes('noticeTitle')) {
            this.errors.splice(this.errors.indexOf('noticeTitle'), 1);
        }
    }
    validateNoticeTitleTag() {
        if (!this.noticeTitleTag ||
            !['h2', 'h3', 'h4', 'h5'].includes(this.noticeTitleTag)) {
            this.errors.push('noticeTitleTag');
        }
        else if (this.errors.includes('noticeTitleTag')) {
            this.errors.splice(this.errors.indexOf('noticeTitleTag'), 1);
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
    validateChildren() {
        if (this.el.innerHTML.trim() == '') {
            this.errors.push('children');
        }
        else if (this.errors.includes('children')) {
            this.errors.splice(this.errors.indexOf('children'), 1);
        }
    }
    validateRequiredProps() {
        this.validateNoticeTitle();
        this.validateType();
        this.validateNoticeTitleTag();
        this.validateChildren();
        if (this.errors.includes('type') ||
            this.errors.includes('noticeTitle') ||
            this.errors.includes('noticeTitleTag') ||
            this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-notice', this.errors);
        }
    }
    render() {
        const { type, noticeTitle, noticeTitleTag } = this;
        const iconTypes = {
            danger: 'exclamation-circle',
            info: 'info-circle',
            success: 'checkmark-circle',
            warning: 'warning-triangle',
        };
        return (h(Host, { key: '7d04d0e19067c8a1f0f6bef1ba21f9bb6e05b379' }, this.validateRequiredProps() && (h("section", { key: '92300518f0f6a084603043451272705d18f32b10', class: `gcds-notice notice--type-${type}` }, h("gcds-icon", { key: 'd08a464788d4ab04e25aaefd883510b178580b3e', class: "notice__icon", size: "h4", name: iconTypes[type] }), h("div", { key: 'beb615aef718ad429868df2dfca31d997b08f862' }, h("gcds-heading", { key: '139221a5b81115d19700a0e3fef7bbb1386d2497', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: 'cec841b35332c0f7cf4cd68a7c9a6a387c87165b', tag: "span" }, I18N$a[this.lang][type]), noticeTitle), h("slot", { key: 'e24597dad7914e2c0cf3ad53f4aee87994a6d72f' }))))));
    }
    get el() { return getElement(this); }
};
GcdsNotice.style = GcdsNoticeStyle0;

const I18N$9 = {
  en: {
    next: 'Next',
    previous: 'Previous',
    previousMobile: 'Prev',
    nextPage: 'Next page',
    previousPage: 'Previous page',
    pageNumber: 'Page {#}',
    pageNumberOf: 'Page {#} of {total} of {label}',
  },
  fr: {
    next: 'Suivante',
    previous: 'Précédent',
    previousMobile: 'Préc.',
    nextPage: 'Page suivante',
    previousPage: 'Page précédente',
    pageNumber: 'Page {#}',
    pageNumberOf: 'Page {#} sur {total} des {label}',
  },
};

/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(url, page, end) {
    let fragment = '';
    let qs = '';
    let count = 0;
    for (const key in url.queryStrings) {
        let queryKey = key;
        let queryValue = url.queryStrings[key];
        if (key.includes('::')) {
            const incrementer = key.split('::')[1];
            const regExp = /\{\{([^)]+)\}\}/;
            const matches = regExp.exec(url.queryStrings[key]);
            // Offeset numbers
            if (incrementer == 'offset') {
                let pageNumber = page;
                if (end == 'next') {
                    ++pageNumber;
                }
                else if (end == 'previous') {
                    --pageNumber;
                }
                queryValue = matches
                    ? url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber - 1) * Number(matches[1])}`)
                    : (pageNumber - 1) * url.queryStrings[key];
                queryKey = queryKey.replace('::offset', '');
            }
            // Match page number
            if (incrementer == 'match') {
                let pageNumber = page;
                if (end == 'next') {
                    ++pageNumber;
                }
                else if (end == 'previous') {
                    --pageNumber;
                }
                queryValue = matches
                    ? url.queryStrings[key].replace(`{{${matches[1]}}}`, `${pageNumber * Number(matches[1])}`)
                    : pageNumber * url.queryStrings[key];
                queryKey = queryKey.replace('::match', '');
            }
        }
        if (count == 0) {
            qs += `?${queryKey}=${queryValue}`;
        }
        else {
            qs += `&${queryKey}=${queryValue}`;
        }
        ++count;
    }
    if (url.fragment) {
        fragment = `#${url.fragment}`;
    }
    const href = `${qs}${fragment}`;
    return href;
}
/**
 * Function to constuct classes to help with mobile sizing
 */
function constructClasses(page, current, total) {
    if (total <= 5) {
        return '';
    }
    else if (current == 1 || current == total) {
        if (current - page == 4 || current - page == -4) {
            return 'gcds-pagination-list-breakpoint-xxs';
        }
        else if (current - page == 5 || current - page == -5) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page > 5 || current - page < -5) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
    else if (current == 2 || current == total - 1) {
        if (current - page == 3 || current - page == -3) {
            return 'gcds-pagination-list-breakpoint-xxs';
        }
        else if (current - page == 4 || current - page == -4) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page > 4 || current - page < -4) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
    else if (current > 2 && current < total - 1 && total < 10 && current == 5) {
        if (current - page == 2 || current - page == -2) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page >= 3 || current - page <= -3) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
    else if (current > 2 && current < total - 1) {
        if (current - page == 2 || current - page == -2) {
            return 'gcds-pagination-list-breakpoint-xxs';
        }
        else if (current - page == 3 || current - page == -3) {
            return 'gcds-pagination-list-breakpoint-xs';
        }
        else if (current - page > 3 || current - page < -3) {
            return 'gcds-pagination-list-breakpoint-sm';
        }
    }
}

const gcdsPaginationCss = "@layer reset, default, list, simple, wide, compact, hover, active, focus;@layer reset{:host{display:block}:host .gcds-pagination ul{list-style:none;padding:0}}@layer default{:host .gcds-pagination{container:component pagination/inline-size}:host .gcds-pagination li{margin:var(--gcds-pagination-listitem-margin)}:host .gcds-pagination li a{border-radius:var(--gcds-pagination-border-radius);color:var(--gcds-pagination-default-text);font:var(--gcds-pagination-font)}}@layer list{:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext){display:flex;flex-direction:row;margin:0 auto;width:fit-content}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{align-items:center;display:flex;height:3rem;justify-content:center;min-width:3rem}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile{height:auto;min-width:auto;padding:var(--gcds-pagination-list-end-button-padding);text-decoration:none;width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile span{text-decoration:underline}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-list-mobile-ellipses{display:none}:host .gcds-pagination .gcds-pagination-list-mobile-prevnext{display:flex;margin:var(--gcds-pagination-mobile-list-prevnext-margin)}}@layer simple{:host .gcds-pagination-simple{display:flex;flex-direction:column;justify-content:space-between}:host .gcds-pagination-simple li{display:inline-block;justify-content:space-between;margin:var(--gcds-pagination-simple-listitem-margin);width:fit-content}:host .gcds-pagination-simple li a{display:grid;padding:var(--gcds-pagination-simple-padding)}:host .gcds-pagination-simple li a>gcds-icon{grid-area:icon}:host .gcds-pagination-simple li a>.gcds-pagination-simple-text{grid-area:text;margin:var(--gcds-pagination-simple-listitem-text-margin)}:host .gcds-pagination-simple li a>span{font-weight:var(--gcds-pagination-simple-label-font-weight);grid-area:label}:host .gcds-pagination-simple .gcds-pagination-simple-next a,:host .gcds-pagination-simple .gcds-pagination-simple-previous a{text-decoration:none}:host .gcds-pagination-simple .gcds-pagination-simple-next a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-next a span,:host .gcds-pagination-simple .gcds-pagination-simple-previous a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-previous a span{text-decoration:underline}:host .gcds-pagination-simple .gcds-pagination-simple-previous a{grid-template-areas:\"icon text\" \"icon label\";grid-template-columns:.25fr 1fr}:host .gcds-pagination-simple .gcds-pagination-simple-next a{grid-template-areas:\"text icon\" \"label icon\";grid-template-columns:1fr .25fr}}@layer wide{@container pagination (width > 44em){:host .gcds-pagination-list-mobile-prevnext{display:none}}@container pagination (width > 20em){:host .gcds-pagination-simple{flex-direction:row}:host .gcds-pagination-simple .gcds-pagination-simple-next{margin-left:auto}}}@layer compact{@container pagination (width <= 44em){:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a{border:var(--gcds-pagination-border-width) solid}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{min-width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li:has(>a.gcds-pagination-end-button){margin:0}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li .gcds-pagination-end-button{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:block}}@container pagination (width <= 30em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-sm{display:none}}@container pagination (width <= 27.5em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xs{display:none}}@container pagination (width <= 25em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xxs{display:none}}@container pagination (width <= 19em){:host .gcds-pagination-list li{margin:var(--gcds-pagination-mobile-list-item-margin)}}}@layer hover{@media (hover:hover){:host .gcds-pagination ul li a:hover{background:var(--gcds-pagination-hover-background);color:var(--gcds-pagination-hover-text)}}}@layer active{:host .gcds-pagination ul li a:active:not(:focus),:host .gcds-pagination ul li a[aria-current*=page]:not(:focus){background:var(--gcds-pagination-active-background);border-color:var(--gcds-pagination-active-background);color:var(--gcds-pagination-active-text);text-decoration:none}}@layer focus{:host .gcds-pagination ul li a:focus{background-color:var(--gcds-pagination-focus-background);border-color:var(--gcds-pagination-focus-background);box-shadow:var(--gcds-pagination-focus-box-shadow);color:var(--gcds-pagination-focus-text);outline:var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);outline-offset:var(--gcds-pagination-border-width);text-decoration:none}}";
const GcdsPaginationStyle0 = gcdsPaginationCss;

const GcdsPagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsClick = createEvent(this, "gcdsClick", 7);
        this.listitems = [];
        this.mobilePrevNext = [];
        this.display = 'list';
        this.label = undefined;
        this.previousHref = undefined;
        this.previousLabel = undefined;
        this.nextHref = undefined;
        this.nextLabel = undefined;
        this.totalPages = undefined;
        this.currentPage = undefined;
        this.url = undefined;
        this.currentStep = undefined;
        this.lang = undefined;
    }
    watchCurrentPage(newValue) {
        this.currentStep = newValue;
    }
    /**
     * Convert url prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    urlChanged(newUrl) {
        if (typeof newUrl == 'string') {
            this.urlObject = JSON.parse(newUrl);
        }
        else if (typeof newUrl == 'object') {
            this.urlObject = newUrl;
        }
    }
    watchLang() {
        if (this.display == 'list') {
            this.configureListPagination();
        }
    }
    /**
     * Function to constuct <li> and <a> tags for display="list" pagination
     */
    configurePaginationStep(page, end, mobile) {
        const href = this.urlObject
            ? constructHref(this.urlObject, page, end)
            : 'javascript:void(0)';
        const linkAttrs = {
            'href': href,
            'tabindex': 0,
            'aria-label': !end
                ? I18N$9[this.lang].pageNumberOf
                    .replace('{#}', page)
                    .replace('{total}', this.totalPages)
                    .replace('{label}', this.label)
                : end == 'next'
                    ? `${I18N$9[this.lang].nextPage}: ${I18N$9[this.lang].pageNumberOf
                        .replace('{#}', ++page)
                        .replace('{total}', this.totalPages)
                        .replace('{label}', this.label)}`
                    : `${I18N$9[this.lang].previousPage}: ${I18N$9[this.lang].pageNumberOf
                        .replace('{#}', --page)
                        .replace('{total}', this.totalPages)
                        .replace('{label}', this.label)}`,
            'onBlur': () => this.gcdsBlur.emit(),
            'onFocus': () => this.gcdsFocus.emit(),
            'onClick': e => emitEvent(e, this.gcdsClick, { page: page, href }),
        };
        if (page == this.currentPage && !end) {
            linkAttrs['aria-current'] = 'page';
        }
        if (end) {
            return (h("li", null, end === 'next' ? (h("a", Object.assign({}, linkAttrs, { class: !mobile
                    ? 'gcds-pagination-end-button'
                    : 'gcds-pagination-end-button-mobile' }), h("span", null, I18N$9[this.lang].next), h("gcds-icon", { "margin-left": "150", name: "chevron-right" }))) : (h("a", Object.assign({}, linkAttrs, { class: !mobile
                    ? 'gcds-pagination-end-button'
                    : 'gcds-pagination-end-button-mobile' }), h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), h("span", null, mobile
                ? I18N$9[this.lang].previousMobile
                : I18N$9[this.lang].previous)))));
        }
        else {
            return (h("li", { class: page != 1 && page != this.totalPages
                    ? constructClasses(page, this.currentPage, this.totalPages)
                    : '' }, h("a", Object.assign({}, linkAttrs), page)));
        }
    }
    /**
     * Function to render the right steps for display="list" pagination
     */
    configureListPagination() {
        this.listitems = [];
        this.mobilePrevNext = [];
        if (this.currentPage != 1) {
            this.listitems.push(this.configurePaginationStep(this.currentPage, 'previous'));
            this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'previous', true));
        }
        // Flags to see if ellipses already rendered
        let previousEllipses = false;
        let nextEllipses = false;
        for (let i = 1; i <= this.totalPages; i++) {
            // Left side mobile ellipses
            if (i == 2 &&
                this.currentPage < 6 &&
                this.currentPage > 3 &&
                this.totalPages > 9) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
            else if (i == 2 &&
                this.totalPages < 10 &&
                this.totalPages > 5 &&
                this.currentPage > 3) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
            if (i == this.currentPage ||
                i == 1 ||
                i == this.totalPages ||
                (i >= this.currentPage - 2 && i <= this.currentPage + 2) ||
                this.totalPages < 10) {
                this.listitems.push(this.configurePaginationStep(i));
            }
            else if ((this.currentPage <= 5 && i <= 7) ||
                (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6)) {
                this.listitems.push(this.configurePaginationStep(i));
            }
            else if ((this.currentPage == 5 && i == 2) ||
                (this.currentPage == this.totalPages - 4 && i == this.totalPages - 1)) {
                this.listitems.push(this.configurePaginationStep(i));
            }
            else if (!previousEllipses && i < this.currentPage - 2) {
                this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
                previousEllipses = true;
            }
            else if (!nextEllipses &&
                i > this.currentPage + 2 &&
                i < this.totalPages) {
                this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
                nextEllipses = true;
            }
            // Right side mobile ellipses
            if (i == this.totalPages - 1 &&
                this.currentPage > this.totalPages - 5 &&
                this.currentPage < this.totalPages - 2 &&
                this.totalPages > 9) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
            else if (i == this.totalPages - 1 &&
                this.totalPages < 10 &&
                this.totalPages > 5 &&
                this.currentPage < this.totalPages - 2) {
                this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
            }
        }
        if (this.currentPage != this.totalPages) {
            this.listitems.push(this.configurePaginationStep(this.currentPage, 'next'));
            this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'next', true));
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        if (this.url && typeof this.url == 'string') {
            this.urlObject = JSON.parse(this.url);
        }
        else if (this.url && typeof this.url == 'object') {
            this.urlObject = this.url;
        }
        if (this.display == 'list') {
            this.configureListPagination();
        }
    }
    componentDidUpdate() {
        if (this.display == 'list') {
            this.configureListPagination();
        }
    }
    render() {
        const { display, label, previousHref, previousLabel, nextHref, nextLabel, lang, } = this;
        return (h(Host, { key: '22c05e05afac84bc16a15e90c3bf28f419e271da', role: "navigation", "aria-label": label }, h("div", { key: '7c1ffe39ba076b547f87fdfa52bcd89fb33dd619', class: "gcds-pagination" }, display === 'list' ? (h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))) : (h("ul", { class: "gcds-pagination-simple" }, previousHref && (h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, tabindex: 0, "aria-label": `${I18N$9[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, previousHref) }, h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N$9[lang].previous), h("span", null, previousLabel)))), nextHref && (h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, tabindex: 0, "aria-label": `${I18N$9[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, nextHref) }, h("div", { class: "gcds-pagination-simple-text" }, I18N$9[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "150", name: "chevron-right" })))))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "currentPage": ["watchCurrentPage"],
        "url": ["urlChanged"],
        "lang": ["watchLang"]
    }; }
};
GcdsPagination.style = GcdsPaginationStyle0;

const I18N$8 = {
  en: {
    label: 'Banner',
  },
  fr: {
    label: 'Bannière',
  },
};

const gcdsPhaseBannerCss = "@layer reset, default, fixed, role, wide, compact;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-phase-banner{container:component banner/inline-size;font:var(--gcds-phase-banner-font);line-height:var(--gcds-phase-banner-line-height)}:host .gcds-phase-banner .banner__content{padding:var(--gcds-phase-banner-padding)}:host .gcds-phase-banner .banner__icon{display:flex;margin:0}:host .gcds-phase-banner .banner__icon.icon--left{margin-inline-end:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon.icon--right{margin-inline-start:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon ::slotted(img),:host .gcds-phase-banner .banner__icon ::slotted(svg){max-height:var(--gcds-phase-banner-icon-max-height)}:host .gcds-phase-banner .banner__details{align-items:baseline;display:flex;flex-wrap:wrap}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(gcds-button){flex:0 0 auto}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(small),:host .gcds-phase-banner .banner__details ::slotted(span){font-size:80%!important}:host .gcds-phase-banner .banner__details ::slotted(p){font:var(--gcds-phase-banner-font);margin:0}:host .gcds-phase-banner .banner__details ::slotted(a){color:inherit}:host .gcds-phase-banner .banner__details ::slotted(gcds-button){margin:var(--gcds-phase-banner-details-cta-margin);transform:scale(90%)}}@layer fixed{:host .gcds-phase-banner.banner-is-fixed{position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-phase-banner.banner--role-primary{background-color:var(--gcds-phase-banner-primary-background);color:var(--gcds-phase-banner-primary-text)}:host .gcds-phase-banner.banner--role-secondary{background-color:var(--gcds-phase-banner-secondary-background);color:var(--gcds-phase-banner-secondary-text)}}@layer wide{@container banner (width >= 36em){:host .gcds-phase-banner .banner__content{display:flex}}}@layer compact{@container banner (width < 36em){:host .gcds-phase-banner .banner__content .banner__icon{display:none}}}";
const GcdsPhaseBannerStyle0 = gcdsPhaseBannerCss;

const GcdsPhaseBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bannerRole = 'primary';
        this.container = 'xl';
        this.isFixed = undefined;
        this.lang = undefined;
    }
    /**
     * Events
     */
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { bannerRole, container, isFixed, lang } = this;
        return (h(Host, { key: '01721695ba82d2faad63aabf1308ab32a2277576' }, h("div", { key: '8f863517645dfd61949cc28d8fe4e4bfdb471734', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N$8[lang].label }, h("gcds-container", { key: 'e09458246e2769bff036529d6ea7cdd12c4c78f0', size: container, centered: true }, h("div", { key: 'c52e8231ee66f8e68c85ca6d0dc98eb7343e94d9', class: "banner__content" }, h("figure", { key: '0360d88ce03c0ed816f700930bf2d7647cad3d87', class: "banner__icon icon--left" }, h("slot", { key: 'c59ff70d5fba77c3cb060674c3d61b5f427b3eb0', name: "banner-icon-left" })), h("div", { key: '89b3f4e118778f91983b3114fb134679d9b5be4d', class: "banner__details" }, h("slot", { key: 'dd5cc8315c49b2b10564ea9240f336ac9d0e79c9', name: "banner-text" }), h("slot", { key: '6d1f17700cc66416b93f2c80a6e4d6da3f4d5602', name: "banner-cta" })), h("figure", { key: '9596f293b8bed55c2738504f98b4827f21ce40ea', class: "banner__icon icon--right" }, h("slot", { key: '0355ed216936f151188a800fe50ebc4443ecccb6', name: "banner-icon-right" })))))));
    }
    get el() { return getElement(this); }
};
GcdsPhaseBanner.style = GcdsPhaseBannerStyle0;

const gcdsRadioGroupCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-radio{border:0;padding:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before{box-sizing:border-box;content:\"\";cursor:pointer}}@layer default{:host .gcds-radio{color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin)!important;max-width:var(--gcds-radio-max-width);min-height:calc(var(--gcds-radio-input-height-and-width) - var(--gcds-radio-padding));padding:var(--gcds-radio-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-radio :is(gcds-label,gcds-hint){padding:var(--gcds-radio-label-padding)!important}:host .gcds-radio gcds-hint::part(hint){margin:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before,:host .gcds-radio input{position:absolute}:host .gcds-radio gcds-label:before,:host .gcds-radio input{height:var(--gcds-radio-input-height-and-width);left:0;top:0;width:var(--gcds-radio-input-height-and-width)}:host .gcds-radio input{opacity:0}:host .gcds-radio gcds-label{width:fit-content}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before{border-radius:var(--gcds-radio-border-radius)}:host .gcds-radio gcds-label:before{border:var(--gcds-radio-input-border-width) solid;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-radio gcds-label:after{background-color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);transition:opacity .2s ease-in-out;width:var(--gcds-radio-check-height-and-width)}:host .gcds-radio input:checked+gcds-label:after{opacity:1}}@layer disabled{:host .gcds-radio.gcds-radio--disabled{color:var(--gcds-radio-disabled-text)}:host .gcds-radio.gcds-radio--disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-radio.gcds-radio--disabled gcds-label:after,:host .gcds-radio.gcds-radio--disabled gcds-label:before{cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border)}:host .gcds-radio.gcds-radio--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label:before{border-color:var(--gcds-radio-danger-border)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label:after{background-color:var(--gcds-radio-danger-border)}}@layer focus{:host .gcds-radio:focus-within{color:var(--gcds-radio-focus-color)}:host .gcds-radio:focus-within input:focus+gcds-label:before{background:var(--gcds-radio-focus-background);box-shadow:var(--gcds-radio-focus-box-shadow);outline:var(--gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}:host .gcds-radio:focus-within input:focus+gcds-label:after{background-color:currentcolor}}";
const GcdsRadioGroupStyle0 = gcdsRadioGroupCss;

const GcdsRadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.onBlur = () => {
            this.gcdsBlur.emit();
        };
        this.onChange = e => {
            this.gcdsChange.emit(e.target.value);
            this.internals.setFormValue(e.target.value, 'checked');
            const changeEvt = new e.constructor(e.type, e);
            this.el.dispatchEvent(changeEvt);
        };
        this.options = undefined;
        this.name = undefined;
        this.hasError = undefined;
        this.parentError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
    }
    validateOptions() {
        if (typeof this.options == 'object') {
            this.optionObject = this.options;
        }
        else if (typeof this.options == 'string') {
            this.optionObject = JSON.parse(this.options);
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateOptions();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.optionObject &&
            this.optionObject.map(radio => {
                if (radio.checked) {
                    this.internals.setFormValue(radio.value, 'checked');
                }
            });
    }
    /**
     * Event listener for gcds-fieldset errors
     */
    gcdsGroupError(e) {
        if (e.srcElement.contains(this.el)) {
            this.hasError = true;
            this.parentError = e.detail;
        }
    }
    gcdsGroupErrorClear(e) {
        if (e.srcElement.contains(this.el) && this.hasError) {
            this.hasError = false;
            this.parentError = '';
        }
    }
    render() {
        const { lang, name, hasError, parentError, inheritedAttributes } = this;
        return (h(Host, { key: '1b1197d92fe73076a39aed5beb6659ebca4d6dea' }, this.optionObject &&
            this.optionObject.map(radio => {
                const attrsInput = Object.assign({ name, disabled: radio.disabled, required: radio.required, value: radio.value, checked: radio.checked }, inheritedAttributes);
                if (radio.hint || parentError) {
                    const hintID = radio.hint ? `hint-${radio.id} ` : '';
                    const errorID = parentError ? `parent-error ` : '';
                    attrsInput['aria-describedby'] = `${hintID}${errorID}${attrsInput['aria-describedby']
                        ? `${attrsInput['aria-describedby']}`
                        : ''}`;
                }
                if (hasError) {
                    attrsInput['aria-invalid'] = 'true';
                }
                return (h("div", { class: `gcds-radio ${radio.disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, h("input", Object.assign({ id: radio.id, type: "radio" }, attrsInput, { onChange: e => this.onChange(e), onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), ref: element => (this.shadowElement = element) })), h("gcds-label", { label: radio.label, "label-for": radio.id, lang: lang }), radio.hint ? (h("gcds-hint", { "hint-id": radio.id }, radio.hint)) : null));
            }), parentError && (h("span", { key: 'b60d8d247b2f194432e70a23e1b65fab31ef2f6e', id: `parent-error`, hidden: true }, parentError))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "options": ["validateOptions"]
    }; }
};
GcdsRadioGroup.style = GcdsRadioGroupStyle0;

const I18N$7 = {
  en: {
    search: 'Search',
    searchLabel: 'Search {$}',
  },
  fr: {
    search: 'Recherche',
    searchLabel: 'Rechercher dans {$}',
  },
};

const gcdsSearchCss = "@layer reset, default, focus;@layer reset{:host{display:block}:host .gcds-search input{background-image:none;box-sizing:border-box}:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer default{:host .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}:host .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}:host .gcds-search input{background-color:var(--gcds-search-default-background);border:var(--gcds-search-border-width) solid var(--gcds-search-border-color);border-radius:0;border-right:0 solid transparent;box-sizing:border-box;color:var(--gcds-search-default-text);font:var(--gcds-search-font);max-height:var(--gcds-search-max-height);padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}:host .gcds-search input::placeholder{color:var(--gcds-search-placeholder)}:host .gcds-search gcds-button{--gcds-button-mobile-margin:0}:host .gcds-search gcds-button::part(button){border-radius:0;height:var(--gcds-search-button-width-height);padding:0;width:var(--gcds-search-button-width-height)}}@layer focus{:host .gcds-search input:focus{border-color:var(--gcds-search-focus-border-color);border-width:var(--gcds-search-focus-border-width);box-shadow:var(--gcds-search-focus-box-shadow);margin:var(--gcds-search-focus-margin);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-border-color);outline-offset:var(--gcds-search-border-width);z-index:30}:host .gcds-search ::part(button):focus{box-shadow:var(--gcds-search-focus-box-shadow)}}";
const GcdsSearchStyle0 = gcdsSearchCss;

const GcdsSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsSubmit = createEvent(this, "gcdsSubmit", 7);
        this.handleInput = (e, customEvent) => {
            const input = e.target;
            this.value = input.value;
            customEvent.emit(this.value);
        };
        this.placeholder = 'Canada.ca';
        this.action = '/sr/srb.html';
        this.method = 'get';
        this.name = 'q';
        this.searchId = 'search';
        this.value = undefined;
        this.suggested = undefined;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
    }
    render() {
        const { placeholder, action, method, name, value, lang, searchId, suggested, } = this;
        const labelText = `${I18N$7[lang].searchLabel.replace('{$}', placeholder)}`;
        const attrsInput = {
            name,
            placeholder: labelText,
        };
        const formAction = action === '/sr/srb.html'
            ? `https://www.canada.ca/${lang}/sr/srb.html`
            : action;
        return (h(Host, { key: '128049f5dd1902ece7e9a1e6c03754b5e3bc057d' }, h("div", { key: '79e0c575a737a8d9bc1495bbaea533a788c6e22e', class: "gcds-search" }, h("gcds-sr-only", { key: 'fa01d2aa8e4f923e1b1fb7146747444af5754ab6', tag: "h2" }, I18N$7[lang].search), h("form", { key: '6b418484503577b004402be2558d303a07596bc1', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: '3110b02d5a162d12d3390cc90278eb63df15ab4d', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: 'be068ed5ce558a501843468015034de96b198eb6', type: "search", id: searchId, list: "search-list", size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggested && (h("datalist", { key: '9907ea35d301fa4bd6c8cd433a87aa1e9cdd1465', id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: '34305968de8f5cf777dba3509f2f2d996ea9d4d2', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '34c25e5c62a8088142988ab3697ec1dd2f8fed90', name: "search", label: I18N$7[lang].search, size: "h3" }))))));
    }
    get el() { return getElement(this); }
};
GcdsSearch.style = GcdsSearchStyle0;

const gcdsSelectCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-select-wrapper{border:0;margin:0;padding:0}:host .gcds-select-wrapper select{box-sizing:border-box}:host .gcds-select-wrapper slot{display:initial}}@layer default{:host .gcds-select-wrapper{color:var(--gcds-select-default-text);font:var(--gcds-select-font);max-width:75ch;transition:color .15s ease-in-out}:host .gcds-select-wrapper select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url(\"data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>\");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin)!important;max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding)!important;transition:all .15s ease-in-out}}@layer disabled{:host .gcds-select-wrapper.gcds-disabled{color:var(--gcds-select-disabled-text)}:host .gcds-select-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-select-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-select-wrapper.gcds-disabled select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-select-wrapper.gcds-error:not(:focus-within) select{border-color:var(--gcds-select-danger-border)}}@layer focus{:host .gcds-select-wrapper:focus-within select:focus{border-color:var(--gcds-select-focus-border);box-shadow:var(--gcds-select-focus-box-shadow);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-border);outline-offset:var(--gcds-select-border-width)}}";
const GcdsSelectStyle0 = gcdsSelectCss;

const GcdsSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val);
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.onBlur = () => {
            if (this.validateOn === 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.selectId = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = false;
        this.disabled = false;
        this.defaultValue = undefined;
        this.value = undefined;
        this.errorMessage = undefined;
        this.hint = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.hasError = undefined;
        this.inheritedAttributes = {};
        this.lang = undefined;
        this.options = undefined;
    }
    validateDisabledSelect() {
        if (this.required) {
            this.disabled = false;
        }
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else if (!this.hasError && this.errorMessage) {
            this.hasError = true;
        }
        else if (this.errorMessage == '') {
            this.hasError = false;
        }
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Watch HTML attribute aria-invalid to inherit changes
     */
    ariaInvalidWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    /**
     * Call any active validators
     */
    async validate() {
        if (!this._validator.validate(this.value) && this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.selectId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.selectId}` });
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError && this.validateOn != 'other') {
                e.preventDefault();
            }
        }
    }
    /**
     * Check if an option is selected or value matches an option's value
     */
    checkValueOrSelected(option) {
        const value = option.getAttribute('value');
        if (this.value === value) {
            option.setAttribute('selected', 'true');
            this.internals.setFormValue(value);
            this.initialValue = this.value;
        }
        if (option.hasAttribute('selected')) {
            this.value = value;
            this.initialValue = this.value ? this.value : null;
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
    }
    /*
     * Observe passed options and update if change
     */
    observeOptions() {
        const config = {
            attributes: false,
            childList: true,
            characterData: true,
            subtree: true,
        };
        const observer = new MutationObserver(() => {
            this.options = Array.from(this.el.children);
            // Reset value to null to prevent unwanted selection
            this.value = null;
        });
        observer.observe(this.el, config);
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledSelect();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'select');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        if (this.el.children) {
            this.options = Array.from(this.el.children);
            this.options.forEach(option => {
                if (option.nodeName === 'OPTION') {
                    this.checkValueOrSelected(option);
                }
                else if (option.nodeName === 'OPTGROUP') {
                    const subOptions = Array.from(option.children);
                    subOptions.map(sub => {
                        this.checkValueOrSelected(sub);
                    });
                }
            });
        }
    }
    async componentDidLoad() {
        this.observeOptions();
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError, name, options, } = this;
        const attrsSelect = Object.assign({ name,
            disabled,
            required,
            value }, inheritedAttributes);
        const attrsLabel = {
            label,
            required,
        };
        if (hint || errorMessage) {
            const hintID = hint ? `hint-${selectId} ` : '';
            const errorID = errorMessage ? `error-message-${selectId} ` : '';
            attrsSelect['aria-describedby'] = `${hintID}${errorID}${attrsSelect['aria-describedby']
                ? `${attrsSelect['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: '74ef0ae2dccf89696939fd4d5017b82cf33508a4' }, h("div", { key: '4eaf410a7cff00a1f4c135a1e3c02bfb5324ac22', class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '1272b6fd271a88e88d02f294039d9a1001450be8' }, attrsLabel, { "label-for": selectId, lang: lang })), hint ? h("gcds-hint", { "hint-id": selectId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: selectId }, errorMessage)) : null, h("select", Object.assign({ key: '5419b9d5efac15aa706637e240b11d5fdbbbcc59' }, attrsSelect, { id: selectId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', part: "select", ref: element => (this.shadowElement = element) }), defaultValue ? (h("option", { value: "", disabled: true, selected: true }, defaultValue)) : null, options.map(opt => {
            if (opt.nodeName === 'OPTION') {
                const selected = opt.hasAttribute('selected')
                    ? { selected: true }
                    : null;
                return (h("option", Object.assign({ value: opt.getAttribute('value') }, selected), opt.innerHTML));
            }
            else if (opt.nodeName === 'OPTGROUP') {
                const optGroupChildren = Array.from(opt.children).map(sub => {
                    const selected = sub.hasAttribute('selected')
                        ? { selected: true }
                        : null;
                    return (h("option", Object.assign({ value: sub.getAttribute('value') }, selected), sub.innerHTML));
                });
                return (h("optgroup", { label: opt.getAttribute('label') }, optGroupChildren));
            }
        })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["validateDisabledSelect"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "aria-invalid": ["ariaInvalidWatcher"],
        "aria-description": ["ariaDescriptiondWatcher"]
    }; }
};
GcdsSelect.style = GcdsSelectStyle0;

/**
 * Handle event for keyboard control of nav
 * @param {Event} event
 * @param {Element} nav
 * @param {any[]} queue
 */
async function handleKeyDownNav(event, nav, queue) {
    const key = event.key;
    const currentIndex = queue.indexOf(document.activeElement == nav
        ? document.activeElement.shadowRoot.activeElement
        : document.activeElement);
    const activeElement = queue[currentIndex];
    switch (key) {
        // Down arrow
        case 'ArrowDown':
            event.preventDefault();
            // If on last item, jump to first item
            if (currentIndex + 1 > queue.length - 1) {
                await focusNavItem(0, queue);
                // Jump to next item
            }
            else {
                await focusNavItem(currentIndex + 1, queue);
            }
            break;
        // Up arrow
        case 'ArrowUp':
            event.preventDefault();
            // If on first item, jump to last item
            if (currentIndex - 1 < 0) {
                await focusNavItem(queue.length - 1, queue);
                // Jump to previous item
            }
            else {
                await focusNavItem(currentIndex - 1, queue);
            }
            break;
        // Right arrow
        case 'ArrowRight':
            event.preventDefault();
            if (activeElement.nodeName == 'GCDS-NAV-GROUP' &&
                !activeElement.hasAttribute('open')) {
                await toggleNavGroup(activeElement, nav);
            }
            break;
        // Left arrow || ESC
        case 'ArrowLeft':
        case 'Escape':
            event.preventDefault();
            // Currently focusing a gcds-nav-group
            if (activeElement.nodeName == 'GCDS-NAV-GROUP' &&
                activeElement.hasAttribute('open')) {
                await toggleNavGroup(activeElement, nav);
                // Currently focus within a gcds-nav-group
            }
            else if (activeElement.parentNode.nodeName == 'GCDS-NAV-GROUP') {
                await toggleNavGroup(activeElement.parentNode, nav);
            }
            else if (activeElement.parentNode == nav &&
                (await activeElement.parentNode.getNavSize()) == 'mobile') {
                await toggleNavGroup(queue[queue.length - 1], nav);
            }
            break;
        // Tab - special logic on mobile screen size
        case 'Tab':
            if ((await nav.getNavSize()) == 'mobile') {
                // shift + tab
                if (event.shiftKey) {
                    if (currentIndex == queue.length - 1 &&
                        activeElement.hasAttribute('open')) {
                        event.preventDefault();
                        await focusNavItem(queue.length - 2, queue);
                    }
                }
                else {
                    // tab
                    if (currentIndex == queue.length - 2) {
                        event.preventDefault();
                        await focusNavItem(queue.length - 1, queue);
                    }
                }
            }
            break;
        // ENTER || SPACEBAR
        case 'Enter':
        case ' ':
            if (activeElement.nodeName == 'GCDS-NAV-GROUP') {
                event.preventDefault();
                await toggleNavGroup(activeElement, nav);
            }
            break;
    }
}
/**
 * Focus nav element
 * @param {Number} index
 * @param {any[]} queue
 */
async function focusNavItem(index, queue) {
    if (queue[index].nodeName == 'GCDS-NAV-LINK') {
        queue[index].focusLink();
    }
    else if (queue[index].nodeName == 'GCDS-NAV-GROUP') {
        queue[index].focusTrigger();
    }
}
/**
 *
 * @param {Element} group
 * @param {Element} nav
 */
async function toggleNavGroup(group, nav) {
    const navGroup = group;
    // Close nav group
    if (navGroup.hasAttribute('open')) {
        await navGroup.toggleNav();
        navGroup.focusTrigger();
        nav.updateNavItemQueue(nav);
        // Open nav group
    }
    else {
        await navGroup.toggleNav();
        setTimeout(async () => {
            await focusNavItem(0, document.activeElement == nav ? nav.children : navGroup.children);
        }, 10);
        nav.updateNavItemQueue(nav);
    }
}
/**
 * Return array of child elements of passed element
 * @param {Element} el
 * @return {any[]} indexedItems
 */
async function getNavItems(el) {
    const indexedItems = Array.from(el.children);
    indexedItems.forEach(async (item) => {
        if (item.nodeName == 'GCDS-NAV-GROUP' &&
            item.open) {
            const groupChildren = await getNavItems(item);
            indexedItems.splice(indexedItems.indexOf(item) + 1, 0, ...groupChildren);
        }
    });
    return indexedItems;
}

const I18N$6 = {
  en: {
    closeTrigger: 'Close',
    menuLabel: 'Menu',
    navLabel:
      ' - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.',
  },
  fr: {
    closeTrigger: 'Fermer',
    menuLabel: 'Menu',
    navLabel:
      " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.",
  },
};

const gcdsSideNavCss = "@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}}@layer default{:host{width:100%}:host .gcds-side-nav__heading{font:var(--gcds-side-nav-heading-font);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-side-nav{max-width:var(--gcds-side-nav-max-width)}}}@layer mobile{@media only screen and (width < 64em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}";
const GcdsSideNavStyle0 = gcdsSideNavCss;

const GcdsSideNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.lang = undefined;
        this.navItems = [];
        this.navSize = undefined;
    }
    async focusInListener(e) {
        if (this.el.contains(e.target) && !this.navSize) {
            const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
            const nav = this.el;
            const mobileTrigger = this.mobile;
            if (mediaQuery.matches) {
                this.navSize = 'desktop';
            }
            else {
                this.navSize = 'mobile';
            }
            await this.updateNavItemQueue(this.el);
            mediaQuery.addEventListener('change', async function (e) {
                if (e.matches) {
                    nav.updateNavSize('desktop');
                    await nav.updateNavItemQueue(nav);
                    if (mobileTrigger.hasAttribute('open')) {
                        mobileTrigger.toggleNav();
                    }
                }
                else {
                    nav.updateNavSize('mobile');
                    await nav.updateNavItemQueue(nav);
                }
            });
        }
    }
    async focusOutListener(e) {
        if (!this.el.contains(e.relatedTarget)) {
            if (this.navSize == 'mobile') {
                if (this.mobile.hasAttribute('open')) {
                    await this.mobile.toggleNav();
                }
            }
        }
    }
    async keyDownListener(e) {
        if (this.el.contains(document.activeElement)) {
            handleKeyDownNav(e, this.el, this.navItems);
        }
    }
    async gcdsClickListener(e) {
        if (this.el.contains(e.target)) {
            // Update tab queue when clicking mobile menu
            if (e.target == this.el && this.navSize == 'mobile') {
                await this.updateNavItemQueue(e.target);
                // Update tab queue when clicking dropdown
            }
            else if (e.target.nodeName == 'GCDS-NAV-GROUP' &&
                !e.target.hasAttribute('open')) {
                await this.updateNavItemQueue(this.el);
            }
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
     * Get current navSize state
     */
    async getNavSize() {
        return this.navSize;
    }
    /*
     * Pass new window size: desktop or mobile
     */
    async updateNavSize(size) {
        this.navSize = size;
    }
    /*
     * Update item queue for keyboard navigation based on passed element
     */
    async updateNavItemQueue(el, includeElement) {
        if (includeElement) {
            const childElements = await getNavItems(el);
            this.navItems = [el, ...childElements];
        }
        else {
            this.navItems = await getNavItems(el);
        }
        if (this.navSize == 'mobile') {
            this.navItems = [...this.navItems, this.mobile];
        }
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { label, lang } = this;
        return (h(Host, { key: '344cf111e760b2b61b35b0a6cd571dde4b397135' }, h("nav", { key: '0775d15419006ceb206061d351fe54067cb5af6d', "aria-label": `${label}${I18N$6[lang].navLabel}`, class: "gcds-side-nav" }, h("h2", { key: '33710c507459d5a1ccf49831c68dc854b8e076bd', class: "gcds-side-nav__heading" }, label), h("ul", { key: '82ebb89be44aab8c201d82670239e0641cca8d18' }, h("gcds-nav-group", { key: 'a633c17d34ccd0ca08f2413e95f74f815e277abb', menuLabel: I18N$6[lang].menuLabel, closeTrigger: I18N$6[lang].closeTrigger, openTrigger: I18N$6[lang].menuLabel, class: "gcds-mobile-nav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: 'bd8c03e0b14ff32556b23ed89779ffb4d69553f2' }))))));
    }
    get el() { return getElement(this); }
};
GcdsSideNav.style = GcdsSideNavStyle0;

const I18N$5 = {
  en: {
    link: 'https://canada.ca/en.html',
    gc: 'Government of Canada',
  },
  fr: {
    link: 'https://canada.ca/fr.html',
    gc: 'Gouvernement du Canada',
  },
};

const SignatureEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-title">
	<title id="signature-en-title">Government of Canada / Gouvernement du Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(526,0)" />
</svg>
`;

const SignatureFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-title">
	<title id="signature-fr-title">Gouvernement du Canada / Government of Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(575,0)" />
</svg>
`;

const WordmarkEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-en-title">
	<title id="wordmark-en-title">Symbol of the Government of Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;

const WordmarkFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-fr-title">
	<title id="wordmark-fr-title">Symbole du Gouvernement du Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;

const gcdsSignatureCss = "@layer reset, default, type.signature, type.wordmark, variant.colour, variant.white, desktop;@layer reset{:host{display:block;width:fit-content}}@layer default{:host .gcds-signature{display:flex}:host svg{display:block;max-width:100%}:host svg .fip_flag{fill:var(--gcds-signature-color-flag)}}@layer type.signature{:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height)}}@layer type.wordmark{:host([type=wordmark]) svg{height:var(--gcds-signature-wordmark-height);width:auto}}@layer variant.colour{:host(:not([variant=white])) svg .fip_text{fill:var(--gcds-signature-color-text)}}@layer variant.white{:host([variant=white]) svg :is(.fip_text){fill:var(--gcds-signature-white-default)}}@layer desktop{@media screen and (width >= 64em){:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height-desktop)}}}";
const GcdsSignatureStyle0 = gcdsSignatureCss;

const GcdsSignature = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'signature';
        this.variant = 'colour';
        this.hasLink = false;
        this.lang = undefined;
    }
    validateType(newValue) {
        if (newValue != 'signature' && newValue != 'wordmark') {
            this.type = 'signature';
        }
    }
    validateVariant(newValue) {
        if (newValue != 'colour' && newValue != 'white') {
            this.variant = 'colour';
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    get selectSVG() {
        switch (this.type) {
            case 'wordmark':
                if (this.lang == 'en') {
                    return WordmarkEn;
                }
                else {
                    return WordmarkFr;
                }
            case 'signature':
            default:
                if (this.lang == 'en') {
                    return SignatureEn;
                }
                else {
                    return SignatureFr;
                }
        }
    }
    get svgLabel() {
        let altText = '';
        if (this.lang === 'en') {
            altText = (h(Fragment, null, I18N$5['en'].gc, " / ", h("span", { lang: "fr" }, I18N$5['fr'].gc)));
        }
        else {
            altText = (h(Fragment, null, I18N$5['fr'].gc, " / ", h("span", { lang: "en" }, I18N$5['en'].gc)));
        }
        return (h("gcds-sr-only", { tag: "span", id: "signature-title" }, altText));
    }
    render() {
        const { type, hasLink, lang, selectSVG, svgLabel } = this;
        const sigAttrs = {
            class: 'gcds-signature',
        };
        const Tag = hasLink ? 'a' : 'div';
        if (Tag === 'a') {
            sigAttrs['href'] = I18N$5[lang].link;
        }
        return (h(Host, { key: '47d75f32629a27d13f1026f00a584a9f8b580f05' }, type === 'signature' ? (h(Tag, Object.assign({}, sigAttrs), h("div", { innerHTML: selectSVG }), svgLabel)) : (h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["validateType"],
        "variant": ["validateVariant"]
    }; }
};
GcdsSignature.style = GcdsSignatureStyle0;

const gcdsSrOnlyCss = "@layer reset, default;@layer reset{:host slot{display:initial}}@layer default{:host{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}";
const GcdsSrOnlyStyle0 = gcdsSrOnlyCss;

const GcdsSrOnly = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tag = 'p';
    }
    validateTag(newValue) {
        const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
        if (!values.includes(newValue)) {
            this.tag = 'p';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTag(this.tag);
    }
    render() {
        const Tag = this.tag;
        return (h(Host, { key: 'ca9a1ff72b50c391ac0ce0e4eb8242221aa43820' }, h(Tag, { key: '7e66d8786d82a9f48bd18a029e26d4a16fe825e6' }, h("slot", { key: '16009321706450caf62862686f82ee7158db97f5' }))));
    }
    static get watchers() { return {
        "tag": ["validateTag"]
    }; }
};
GcdsSrOnly.style = GcdsSrOnlyStyle0;

const I18N$4 = {
  en: {
    step: 'Step',
    of: 'of',
  },
  fr: {
    step: 'Étape',
    of: 'sur',
  },
};

const gcdsStepperCss = "@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-stepper .gcds-stepper__steps{display:block;font:var(--gcds-stepper-font-desktop);margin:var(--gcds-stepper-margin-desktop)}@media only screen and (width < 48em){:host .gcds-stepper .gcds-stepper__steps{font:var(--gcds-stepper-font-mobile);margin:var(--gcds-stepper-margin-mobile)}}}";
const GcdsStepperStyle0 = gcdsStepperCss;

const GcdsStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.currentStep = undefined;
        this.totalSteps = undefined;
        this.tag = 'h2';
        this.errors = [];
        this.lang = undefined;
    }
    validateCurrentStep() {
        if (this.currentStep <= 0 ||
            isNaN(this.currentStep) ||
            this.currentStep > this.totalSteps) {
            this.errors.push('currentStep');
        }
        else if (this.errors.includes('currentStep')) {
            this.errors.splice(this.errors.indexOf('currentStep'), 1);
        }
    }
    validateTotalSteps() {
        if (this.totalSteps <= 0 ||
            isNaN(this.totalSteps) ||
            this.totalSteps < this.currentStep) {
            this.errors.push('totalSteps');
        }
        else if (this.errors.includes('totalSteps')) {
            this.errors.splice(this.errors.indexOf('totalSteps'), 1);
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
    validateChildren() {
        if (this.el.innerHTML.trim() == '') {
            this.errors.push('children');
        }
        else if (this.errors.includes('children')) {
            this.errors.splice(this.errors.indexOf('children'), 1);
        }
    }
    validateRequiredProps() {
        this.validateCurrentStep();
        this.validateTotalSteps();
        this.validateChildren();
        if (this.errors.includes('totalSteps') ||
            this.errors.includes('currentStep') ||
            this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        let valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-stepper', this.errors);
        }
    }
    render() {
        const { currentStep, lang, totalSteps, tag } = this;
        return (h(Host, { key: '237512cb8b5d8a3e516d8f832fc01ff6bb592d29' }, this.validateRequiredProps() && (h("gcds-heading", { key: '4280179cd8b0edc2d0abcf32d286d467b1d80c56', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, h("span", { key: 'dbf96a764e6ebd0131d5b3bd61197dddd359c493', class: "gcds-stepper__steps" }, `${I18N$4[lang].step} ${currentStep} ${I18N$4[lang].of} ${totalSteps}`, h("gcds-sr-only", { key: 'e28f042579d393ffb0fd3c2ad70761d3112e9ab0' }, " : ")), h("slot", { key: 'e9557a09c6120174b16a184956e96b95efc695f1' })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "currentStep": ["validateCurrentStep"],
        "totalSteps": ["validateTotalSteps"]
    }; }
};
GcdsStepper.style = GcdsStepperStyle0;

const gcdsTextCss = "@layer reset, default, display, limit, margin, role, size, style, weight;@layer reset{:host{color:var(--gcds-text-role-primary);display:block}:host .gcds-text{box-sizing:border-box;display:inherit;margin:0}:host .gcds-text slot{display:initial}}@layer default{:host .gcds-text{font:var(--gcds-text-size-body-desktop)}@media only screen and (width < 48em){:host .gcds-text{font:var(--gcds-text-size-body-mobile)}}}@layer display{:host.d-block{display:block}:host.d-flex{display:flex}:host.d-inline{display:inline}:host.d-inline-block{display:inline-block}:host.d-inline-flex{display:inline-flex}:host.d-none{display:none}}@layer limit{:host .gcds-text.limit{max-width:var(--gcds-text-character-limit)}}@layer margin{:host .gcds-text.mt-0{margin-block-start:var(--gcds-text-spacing-0)}:host .gcds-text.mt-25{margin-block-start:var(--gcds-text-spacing-25)}:host .gcds-text.mt-50{margin-block-start:var(--gcds-text-spacing-50)}:host .gcds-text.mt-75{margin-block-start:var(--gcds-text-spacing-75)}:host .gcds-text.mt-100{margin-block-start:var(--gcds-text-spacing-100)}:host .gcds-text.mt-125{margin-block-start:var(--gcds-text-spacing-125)}:host .gcds-text.mt-150{margin-block-start:var(--gcds-text-spacing-150)}:host .gcds-text.mt-175{margin-block-start:var(--gcds-text-spacing-175)}:host .gcds-text.mt-200{margin-block-start:var(--gcds-text-spacing-200)}:host .gcds-text.mt-225{margin-block-start:var(--gcds-text-spacing-225)}:host .gcds-text.mt-250{margin-block-start:var(--gcds-text-spacing-250)}:host .gcds-text.mt-300{margin-block-start:var(--gcds-text-spacing-300)}:host .gcds-text.mt-350{margin-block-start:var(--gcds-text-spacing-350)}:host .gcds-text.mt-400{margin-block-start:var(--gcds-text-spacing-400)}:host .gcds-text.mt-450{margin-block-start:var(--gcds-text-spacing-450)}:host .gcds-text.mt-500{margin-block-start:var(--gcds-text-spacing-500)}:host .gcds-text.mt-550{margin-block-start:var(--gcds-text-spacing-550)}:host .gcds-text.mt-600{margin-block-start:var(--gcds-text-spacing-600)}:host .gcds-text.mt-650{margin-block-start:var(--gcds-text-spacing-650)}:host .gcds-text.mt-700{margin-block-start:var(--gcds-text-spacing-700)}:host .gcds-text.mt-750{margin-block-start:var(--gcds-text-spacing-750)}:host .gcds-text.mt-800{margin-block-start:var(--gcds-text-spacing-800)}:host .gcds-text.mt-850{margin-block-start:var(--gcds-text-spacing-850)}:host .gcds-text.mt-900{margin-block-start:var(--gcds-text-spacing-900)}:host .gcds-text.mt-950{margin-block-start:var(--gcds-text-spacing-950)}:host .gcds-text.mt-1000{margin-block-start:var(--gcds-text-spacing-1000)}:host .gcds-text.mt-1050{margin-block-start:var(--gcds-text-spacing-1050)}:host .gcds-text.mt-1100{margin-block-start:var(--gcds-text-spacing-1100)}:host .gcds-text.mt-1150{margin-block-start:var(--gcds-text-spacing-1150)}:host .gcds-text.mt-1200{margin-block-start:var(--gcds-text-spacing-1200)}:host .gcds-text.mt-1250{margin-block-start:var(--gcds-text-spacing-1250)}:host .gcds-text.mb-0{margin-block-end:var(--gcds-text-spacing-0)}:host .gcds-text.mb-25{margin-block-end:var(--gcds-text-spacing-25)}:host .gcds-text.mb-50{margin-block-end:var(--gcds-text-spacing-50)}:host .gcds-text.mb-75{margin-block-end:var(--gcds-text-spacing-75)}:host .gcds-text.mb-100{margin-block-end:var(--gcds-text-spacing-100)}:host .gcds-text.mb-125{margin-block-end:var(--gcds-text-spacing-125)}:host .gcds-text.mb-150{margin-block-end:var(--gcds-text-spacing-150)}:host .gcds-text.mb-175{margin-block-end:var(--gcds-text-spacing-175)}:host .gcds-text.mb-200{margin-block-end:var(--gcds-text-spacing-200)}:host .gcds-text.mb-225{margin-block-end:var(--gcds-text-spacing-225)}:host .gcds-text.mb-250{margin-block-end:var(--gcds-text-spacing-250)}:host .gcds-text.mb-300{margin-block-end:var(--gcds-text-spacing-300)}:host .gcds-text.mb-350{margin-block-end:var(--gcds-text-spacing-350)}:host .gcds-text.mb-400{margin-block-end:var(--gcds-text-spacing-400)}:host .gcds-text.mb-450{margin-block-end:var(--gcds-text-spacing-450)}:host .gcds-text.mb-500{margin-block-end:var(--gcds-text-spacing-500)}:host .gcds-text.mb-550{margin-block-end:var(--gcds-text-spacing-550)}:host .gcds-text.mb-600{margin-block-end:var(--gcds-text-spacing-600)}:host .gcds-text.mb-650{margin-block-end:var(--gcds-text-spacing-650)}:host .gcds-text.mb-700{margin-block-end:var(--gcds-text-spacing-700)}:host .gcds-text.mb-750{margin-block-end:var(--gcds-text-spacing-750)}:host .gcds-text.mb-800{margin-block-end:var(--gcds-text-spacing-800)}:host .gcds-text.mb-850{margin-block-end:var(--gcds-text-spacing-850)}:host .gcds-text.mb-900{margin-block-end:var(--gcds-text-spacing-900)}:host .gcds-text.mb-950{margin-block-end:var(--gcds-text-spacing-950)}:host .gcds-text.mb-1000{margin-block-end:var(--gcds-text-spacing-1000)}:host .gcds-text.mb-1050{margin-block-end:var(--gcds-text-spacing-1050)}:host .gcds-text.mb-1100{margin-block-end:var(--gcds-text-spacing-1100)}:host .gcds-text.mb-1150{margin-block-end:var(--gcds-text-spacing-1150)}:host .gcds-text.mb-1200{margin-block-end:var(--gcds-text-spacing-1200)}:host .gcds-text.mb-1250{margin-block-end:var(--gcds-text-spacing-1250)}}@layer variants.role{:host .gcds-text.role-primary{color:var(--gcds-text-role-primary)}:host .gcds-text.role-secondary{color:var(--gcds-text-role-secondary)}:host .gcds-text.role-light{color:var(--gcds-text-role-light)}}@layer variants.size{:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-desktop)}@media only screen and (width < 48em){:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-mobile)}}}@layer variants.style{:host .gcds-text ::slotted(em){font-style:italic}}@layer variants.weight{:host .gcds-text ::slotted(strong){font-weight:var(--gcds-text-weight-bold)}}";
const GcdsTextStyle0 = gcdsTextCss;

const GcdsText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textRole = 'primary';
        this.characterLimit = true;
        this.display = 'block';
        this.marginTop = '0';
        this.marginBottom = '300';
        this.size = 'body';
    }
    validateTextRole(newValue) {
        const values = ['light', 'primary', 'secondary'];
        if (!values.includes(newValue)) {
            this.textRole = 'primary';
        }
    }
    validateDisplay(newValue) {
        const values = [
            'block',
            'flex',
            'inline',
            'inline-block',
            'inline-flex',
            'none',
        ];
        if (!values.includes(newValue)) {
            this.display = 'block';
        }
    }
    validateMarginTop(newValue) {
        if (!SpacingArray.includes(newValue)) {
            this.marginTop = '0';
        }
    }
    validateMarginBottom(newValue) {
        if (!SpacingArray.includes(newValue)) {
            this.marginBottom = '300';
        }
    }
    validateSize(newValue) {
        const values = ['body', 'small'];
        if (!values.includes(newValue)) {
            this.size = 'body';
        }
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateTextRole(this.textRole);
        this.validateDisplay(this.display);
        this.validateMarginTop(this.marginTop);
        this.validateMarginBottom(this.marginBottom);
        this.validateSize(this.size);
    }
    render() {
        const { characterLimit, display, marginTop, marginBottom, size, textRole } = this;
        return (h(Host, { key: '9ca2919ce7535ecfdab92646c22df7a677f97465', class: `${display != 'block' ? `d-${display}` : ''}` }, h("p", { key: 'a2852d6e38530bac597e2a9b3156a3e1d61f4199', class: `
            gcds-text
            ${textRole ? `role-${textRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
            ${size === 'small' ? `size-small` : ''}
          `, part: "text" }, size === 'small' ? (h("small", null, h("slot", null))) : (h("slot", null)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "textRole": ["validateTextRole"],
        "display": ["validateDisplay"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"],
        "size": ["validateSize"]
    }; }
};
GcdsText.style = GcdsTextStyle0;

const I18N$3 = {
  en: {
    characters: {
      allowed: 'characters allowed',
      left: 'characters left',
    },
  },
  fr: {
    characters: {
      allowed: 'caractères maximum',
      left: 'caractères restants',
    },
  },
};

const gcdsTextareaCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-textarea-wrapper{border:0;margin:0;padding:0}:host .gcds-textarea-wrapper textarea{box-sizing:border-box}}@layer default{:host .gcds-textarea-wrapper{color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font);max-width:75ch;transition:color .15s ease-in-out;width:100%}:host .gcds-textarea-wrapper textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin)!important;max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}}@layer disabled{:host .gcds-textarea-wrapper.gcds-disabled{color:var(--gcds-textarea-disabled-text)}:host .gcds-textarea-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-textarea-wrapper .error-message-container{display:block}:host .gcds-textarea-wrapper textarea.gcds-error:not(:focus){border-color:var(--gcds-textarea-danger-border)}}@layer focus{:host .gcds-textarea-wrapper:focus-within textarea:focus{border-color:var(--gcds-textarea-focus-border);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-border);outline-offset:var(--gcds-textarea-border-width)}}";
const GcdsTextareaStyle0 = gcdsTextareaCss;

const GcdsTextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus", 7);
        this.gcdsBlur = createEvent(this, "gcdsBlur", 7);
        this.gcdsChange = createEvent(this, "gcdsChange", 7);
        this.gcdsInput = createEvent(this, "gcdsInput", 7);
        this.gcdsError = createEvent(this, "gcdsError", 7);
        this.gcdsValid = createEvent(this, "gcdsValid", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null);
            this.shadowElement.value = val;
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
        this.characterCount = undefined;
        this.cols = undefined;
        this.disabled = false;
        this.errorMessage = undefined;
        this.hideLabel = false;
        this.hint = undefined;
        this.label = undefined;
        this.name = undefined;
        this.required = false;
        this.rows = 5;
        this.textareaId = undefined;
        this.value = undefined;
        this.validator = undefined;
        this.validateOn = undefined;
        this.inheritedAttributes = {};
        this.hasError = undefined;
        this.lang = undefined;
    }
    validateDisabledTextarea() {
        if (this.required) {
            this.disabled = false;
        }
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else if (!this.hasError && this.errorMessage) {
            this.hasError = true;
        }
        else if (this.errorMessage == '') {
            this.hasError = false;
        }
    }
    /**
     * Set value on internal textarea to allow proper resets
     */
    watchValue(val) {
        this.shadowElement.value = val;
    }
    validateValidator() {
        if (this.validator && !this.validateOn) {
            this.validateOn = 'blur';
        }
    }
    validateHasError() {
        if (this.disabled) {
            this.hasError = false;
        }
    }
    /**
     * Call any active validators
     */
    async validate() {
        if (!this._validator.validate(this.value) && this._validator.errorMessage) {
            this.errorMessage = this._validator.errorMessage[this.lang];
            this.gcdsError.emit({
                id: `#${this.textareaId}`,
                message: `${this.label} - ${this.errorMessage}`,
            });
        }
        else {
            this.errorMessage = '';
            this.gcdsValid.emit({ id: `#${this.textareaId}` });
        }
    }
    submitListener(e) {
        if (e.target == this.el.closest('form')) {
            if (this.validateOn && this.validateOn != 'other') {
                this.validate();
            }
            if (this.hasError && this.validateOn != 'other') {
                e.preventDefault();
            }
        }
    }
    /*
     * Form internal functions
     */
    formResetCallback() {
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue);
            this.value = this.initialValue;
            this.shadowElement.value = this.initialValue;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledTextarea();
        this.validateHasError();
        this.validateErrorMessage();
        this.validateValidator();
        // Assign required validator if needed
        requiredValidator(this.el, 'textarea');
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentWillUpdate() {
        if (this.validator) {
            this._validator = getValidator(this.validator);
        }
    }
    render() {
        const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name, } = this;
        // Use max-width instead of cols attribute to keep field responsive
        const style = {
            maxWidth: `${cols * 1.5}ch`,
        };
        const attrsLabel = {
            label,
            required,
        };
        const attrsTextarea = Object.assign({ name,
            disabled,
            required,
            rows }, inheritedAttributes);
        if (hint || errorMessage || characterCount) {
            const hintID = hint ? `hint-${textareaId} ` : '';
            const errorID = errorMessage ? `error-message-${textareaId} ` : '';
            const countID = characterCount ? `textarea__count-${textareaId} ` : '';
            attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
                ? `${attrsTextarea['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: 'e5cdb0e03c5505718d0f4bd243d9116930de61f3' }, h("div", { key: 'c3a8586573b71afc009a19a354d75830173118c9', class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '085d50affa19245829eee1b852db40f7fb0d4ad3' }, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: textareaId }, errorMessage)) : null, h("textarea", Object.assign({ key: '0dcdc6ee22ef0bc7a5c6c722723c61b55cf701f1' }, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), characterCount ? (h("gcds-text", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined
            ? `${characterCount} ${I18N$3[lang].characters.allowed}`
            : `${characterCount - value.length} ${I18N$3[lang].characters.left}`)) : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["validateDisabledTextarea"],
        "errorMessage": ["validateErrorMessage"],
        "value": ["watchValue"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"]
    }; }
};
GcdsTextarea.style = GcdsTextareaStyle0;

const I18N$2 = {
  en: {
    closeTrigger: 'Close',
    menuLabel: 'Menu',
    navLabel:
      ' - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.',
  },
  fr: {
    closeTrigger: 'Fermer',
    menuLabel: 'Menu',
    navLabel:
      " - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.",
  },
};

const gcdsTopNavCss = "@layer reset, default, desktop;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}:host ul{padding:0}}@layer default{:host .gcds-top-nav .gcds-top-nav__container{display:flex;flex-direction:column;margin-inline:auto;max-width:var(--gcds-top-nav-max-width);width:90%}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-top-nav{background-color:var(--gcds-top-nav-background)}:host .gcds-top-nav .gcds-top-nav__container{align-items:flex-end;flex-direction:row}:host .gcds-top-nav .nav-container__list{align-items:flex-end;display:flex;width:fit-content}:host .gcds-top-nav .nav-container__list.nav-list--right{margin-inline-start:auto}:host .gcds-top-nav .nav-container__list.nav-list--center{margin-inline:auto}}}";
const GcdsTopNavStyle0 = gcdsTopNavCss;

const GcdsTopNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.alignment = 'left';
        this.lang = undefined;
        this.navItems = [];
        this.navSize = undefined;
    }
    async focusInListener(e) {
        if (this.el.contains(e.target) && !this.navSize) {
            const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
            const nav = this.el;
            const mobileTrigger = this.mobile;
            if (mediaQuery.matches) {
                this.navSize = 'desktop';
            }
            else {
                this.navSize = 'mobile';
            }
            await this.updateNavItemQueue(this.el);
            mediaQuery.addEventListener('change', async function (e) {
                if (e.matches) {
                    nav.updateNavSize('desktop');
                    await nav.updateNavItemQueue(nav);
                    if (mobileTrigger.hasAttribute('open')) {
                        mobileTrigger.toggleNav();
                        const childNavGroups = nav.querySelectorAll('gcds-nav-group');
                        childNavGroups.forEach(navGroup => {
                            if (navGroup.hasAttribute('open')) {
                                navGroup.toggleNav();
                            }
                        });
                    }
                }
                else {
                    nav.updateNavSize('mobile');
                    const childNavGroups = nav.querySelectorAll('gcds-nav-group');
                    childNavGroups.forEach(navGroup => {
                        if (navGroup.hasAttribute('open')) {
                            navGroup.toggleNav();
                        }
                    });
                    await nav.updateNavItemQueue(nav);
                }
            });
        }
    }
    async focusOutListener(e) {
        if (!this.el.contains(e.relatedTarget)) {
            if (this.navSize == 'mobile') {
                if (this.mobile.hasAttribute('open')) {
                    await this.mobile.toggleNav();
                }
            }
        }
    }
    async keyDownListener(e) {
        if (this.el.contains(document.activeElement)) {
            handleKeyDownNav(e, this.el, this.navItems);
        }
    }
    async gcdsClickListener(e) {
        if (this.el.contains(e.target)) {
            // Update tab queue when clicking mobile menu
            if (e.target == this.el && this.navSize == 'mobile') {
                await this.updateNavItemQueue(e.target);
                // Update tab queue when clicking dropdown
            }
            else if (e.target.nodeName == 'GCDS-NAV-GROUP' &&
                !e.target.hasAttribute('open')) {
                await this.updateNavItemQueue(e.target, true);
                e.target.focusTrigger();
            }
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
     * Get current navSize state
     */
    async getNavSize() {
        return this.navSize;
    }
    /*
     * Pass new window size: desktop or mobile
     */
    async updateNavSize(size) {
        this.navSize = size;
    }
    /*
     * Update item queue for keyboard navigation based on passed element
     */
    async updateNavItemQueue(el, includeElement) {
        if (includeElement) {
            const childElements = await getNavItems(el);
            this.navItems = [el, ...childElements];
        }
        else {
            this.navItems = await getNavItems(el);
        }
        if (el == this.el && this.navSize == 'mobile') {
            this.navItems = [...this.navItems, this.mobile];
        }
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { label, alignment, lang } = this;
        return (h(Host, { key: '0b90b2ecfef9712330322dce2a65b6a360606520' }, h("div", { key: 'a8b05cb72ce2dfb6867e35fdbe39bf115d3c8673', class: "gcds-top-nav" }, h("nav", { key: '0d9282ce0348d037609ee36c0d83cada54b0f246', "aria-label": `${label}${I18N$2[lang].navLabel}` }, h("ul", { key: 'ec9aa9c60a2c28d7c80765f0c35429f1e936180c', class: "gcds-top-nav__container" }, h("gcds-nav-group", { key: '42ab733e63bfe7fb3f2fb7b5f588a6ee60f0a653', menuLabel: I18N$2[lang].menuLabel, closeTrigger: I18N$2[lang].closeTrigger, openTrigger: I18N$2[lang].menuLabel, class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: 'a3b4cbd6baba0493fefd154e41350f71c6eec57e', name: "home" }), h("li", { key: 'b82de02939f23e7e3a67cfb974f3cd292ccdb81b', class: `nav-container__list nav-list--${alignment}` }, h("ul", { key: 'da9cf11b43568b2143c0e70af1c3f92b75e13660', class: `nav-container__list nav-list--${alignment}` }, h("slot", { key: '0f98892f2e8c0c8d39055f301f5a0774ad68d63e' })))))))));
    }
    get el() { return getElement(this); }
};
GcdsTopNav.style = GcdsTopNavStyle0;

const I18N$1 = {
  en: {
    buttonLabel:
      'Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it.',
    menuLabelFull: 'Main menu',
    menuLabelHidden: 'Main ',
    menuToggle: 'Menu',
  },
  fr: {
    buttonLabel:
      "Appuyez sur la barre d'espacement pour ouvrir ou sur la touche d'échappement pour fermer le menu. Utilisez les flèches haut et bas pour choisir un élément de sous-menu. Appuyez sur la touche Entrée ou sur la flèche vers la droite pour le développer, ou sur la flèche vers la gauche ou la touche Échap pour le réduire. Utilisez les flèches haut et bas pour choisir un élément de ce niveau et la touche Entrée pour y accéder.",
    menuLabelFull: 'Menu principal',
    menuLabelHidden: ' principal',
    menuToggle: 'Menu',
  },
};

const snapshots = {
  en: '<li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="false" href="#">Jobs and the workplace</a><ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs.html">Jobs<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/opportunities.html">Find a job</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/training.html">Training</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/hire.html">Hiring and managing employees</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/start-business">Starting a business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/workplace.html">Workplace standards</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/pensions.html">Pensions and retirement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei.html">Employment Insurance benefits and leave</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-jobs-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html">View your Records of Employment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/services/sin.html">Apply for a Social Insurance Number (SIN)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html">Hire a temporary foreign worker</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html">Immigrate as a skilled worker</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit" aria-expanded="false" href="#">Immigration and citizenship</a><ul id="gc-mnu-cit" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration<span class="hidden-xs hidden-sm">and citizenship</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html">My application</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html">Visit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html">Immigrate</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html">Work</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html">Study</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html">Citizenship</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html">New immigrants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians.html">Canadians</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees.html">Refugees and asylum</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/immigration-citizenship/enforcement-violations.html">Enforcement and violations</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-cit-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html">Sign in or create an account to apply online</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html">Check your application status</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html">Check application processing times</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides.html">Find an application form</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/english/information/fees/index.asp">Pay your fees</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/english/visit/visas.asp">Find out if you need an eTA or a visa to visit Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/english/helpcentre/index-featured-can.asp">Have questions? Find answers in the Help Centre</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel" aria-expanded="false" href="#">Travel and tourism</a><ul id="gc-mnu-travel" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/">Travel<span class="hidden-xs hidden-sm">and tourism</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling/advisories">Travel advice and advisories</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travel-covid">COVID-19: Travel, testing and borders</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html?outside">Visit Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling">Travel outside Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/air">Air travel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/returning">Return to Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html">Canadian passports and travel documents</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/canadian-tourism">Canadian attractions, events and experiences</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/assistance">Assistance outside Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/stay-connected">Stay connected</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-travel-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/assistance/emergency-assistance">Emergency assistance abroad</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cic.gc.ca/english/visit/visas.asp">Find out if you need a visa to travel to Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html">Apply for an eTA</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/services/travel-voyage/prog/nexus/menu-eng.html">Apply for NEXUS</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling/registration">Register as a Canadian abroad</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/travelling/documents/travel-insurance">Travel insurance</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz" aria-expanded="false" href="#">Business and industry</a><ul id="gc-mnu-biz" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business.html">Business<span class="hidden-xs hidden-sm">and industry</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/start.html">Starting a business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/grants.html">Business grants and financing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/taxes.html">Business taxes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/federal-corporations.html">Federal corporations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/hire.html">Hiring and managing employees</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/trade.html">International trade and investment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/permits.html">Permits, licences and regulations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/doing-business.html">Doing business with government</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/innovation.html">R&D and innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/research.html">Research and business intelligence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/ip.html">Intellectual property and copyright</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/maintaingrowimprovebusiness.html">Maintaining your business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/protecting.html">Protecting your business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/bankruptcy.html">Insolvency for business</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-biz-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpSrch.html?locale=en_CA">Find a corporation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/prog/manif/portal-portail-eng.html">Report your imported goods</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/cipo/trademark-search/srch?null=&lang=eng">Search for trademarks</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2018/html/tblmod-1-eng.html">Review custom tariffs for importing goods</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.ic.gc.ca/opic-cipo/cpd/eng/introduction.html">Find a patent</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/comm-eng.html">Import and export from Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ic.gc.ca/eic/site/cd-dgc.nsf/eng/h_cs03922.html">Name a business</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/hm.html?locale=en_CA">Make changes to your corporation (Online Filing Centre)</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny" aria-expanded="false" href="#">Benefits</a><ul id="gc-mnu-benny" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits.html">Benefits<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei.html">Employment Insurance benefits and leave</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/family.html">Family and caregiving benefits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/publicpensions.html">Public pensions</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/education.html">Student aid and education planning</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/housing.html">Housing benefits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/disability.html">Disability benefits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.canada.ca/en/services/benefits/audience.html">Benefits by audience</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/calendar.html">Benefits payment dates</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://benefitsfinder.services.gc.ca/hm?GoCTemplateCulture=en-CA">Benefits finder</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/notify-government-death.html">Notify the government of a death</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-benny-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit.html">Apply for Employment Insurance</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html">Apply for student loans and grants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/government/sign-in-online-account.html">Sign in to a Government of Canada online account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-eng.html">Sign up for direct deposit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/benefits/ei/ei-internet-reporting.html">Submit your EI report</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cra-arc.gc.ca/bnfts/clcltr/cfbc-eng.html">Child and family benefits calculators</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health" aria-expanded="false" href="#">Health</a><ul id="gc-mnu-health" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health.html">Health<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/food-nutrition.html">Food and nutrition</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/public-health/services/diseases.html">Diseases and conditions</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/public-health/topics/immunization-vaccines.html">Vaccines and immunization</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/drug-health-products.html">Drug and health products</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/product-safety.html">Product safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/health-risks-safety.html">Health risks and safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/healthy-living.html">Healthy living</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/aboriginal-health.html">Indigenous health</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/health-system-services.html">Health system and services</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/health/science-research-data.html">Science, research and data</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-health-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/industry-licensees-applicants/licensed-cultivators-processors-sellers.html">Licensed cultivators, processors and seller of cannabis</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://healthycanadians.gc.ca/recall-alert-rappel-avis/index-eng.php">Food and product recalls and safety alerts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/health-canada/services/canada-food-guides.html">Canada\'s food guide</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes" aria-expanded="false" href="#">Taxes</a><ul id="gc-mnu-taxes" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes.html">Taxes<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/income-tax.html">Income tax</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">GST/HST</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html">Payroll</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/business-number.html">Business number</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/savings-and-pension-plans.html">Savings and pension plans</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/child-and-family-benefits.html">Tax credits and benefits for individuals</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/excise-taxes-duties-and-levies.html">Excise taxes, duties, and levies</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes/charities.html">Charities and giving</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-taxes-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html">My Account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html">My Business Account</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html">Represent a Client</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/gst-hst-netfile.html">File a GST/HST return (NETFILE)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/make-a-payment-canada-revenue-agency.html">Make a payment to the Canada Revenue Agency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/benefit-payment-dates.html">Find the next benefit payment date</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro" aria-expanded="false" href="#">Environment and natural resources</a><ul id="gc-mnu-enviro" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment.html">Environment<span class="hidden-xs hidden-sm">and natural resources</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/weather.html">Weather, climate and hazards</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/energy.html">Energy</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/natural-resources.html">Natural resources</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://agriculture.canada.ca/en/agriculture-and-environment">Agriculture and the environment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/fisheries.html">Fisheries</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/wildlife-plants-species.html">Wildlife, plants and species</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/pollution-waste-management.html">Pollution and waste management</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/environment/conservation.html">Environmental conservation and protection</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-enviro-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://weather.gc.ca/canada_e.html">Local weather forecast</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.nrcan.gc.ca/energy/efficiency/transportation/20996">Fuel-efficient vehicles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.nrcan.gc.ca/homes">Home energy efficiency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html">Species at risk</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/environment-climate-change/services/seasonal-weather-hazards.html">Prepare for severe weather</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence" aria-expanded="false" href="#">National security and defence</a><ul id="gc-mnu-defence" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence.html"><span class="hidden-xs hidden-sm">National security and defence</span><span class="visible-xs-inline visible-sm-inline">Defence: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/nationalsecurity.html">National security</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/caf.html">Canadian Armed Forces</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/defence-equipment-purchases-upgrades.html">Defence equipment purchases and upgrades</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/transportation-security.html">Transportation security</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/securingborder.html">Securing the border</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/cybersecurity.html">Cyber security</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/jobs.html">Jobs in national security and defence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/government/publicservice/benefitsmilitary.html">Services and benefits for the military</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-defence-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://forces.ca/en/careers/">Jobs in the Canadian Armed Forces</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/insignia-flags/ranks/rank-appointment-insignia.html">Military ranks</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/defence/caf/equipment.html">Defence equipment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx">Current list of terrorist entities</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/department-national-defence/services/cadets-junior-canadian-rangers/cadets/join-us.html">Join the Cadet Program</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://dgpaapp.forces.gc.ca/en/canada-defence-policy/index.asp">Canada\'s Defence policy</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture" aria-expanded="false" href="#">Culture, history and sport</a><ul id="gc-mnu-culture" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture.html">Culture<span class="hidden-xs hidden-sm">, history and sport</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/canadian-heritage/services/funding.html">Funding - Culture, history and sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/events-celebrations-commemorations.html">Events, celebrations and commemorations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-attractions.html">Cultural landmarks and attractions</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/canadian-identity-society.html">Canadian identity and society</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/sport.html">Sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/history-heritage.html">History and heritage</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/arts-media.html">Arts and media</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-youth-programs.html">Cultural youth programs</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-trade-investment.html">Cultural trade and investment</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-culture-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.veterans.gc.ca/eng/remembrance/memorials/canadian-virtual-war-memorial">Visit the Canadian Virtual War Memorial</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/canadian-identity-society/anthems-symbols.html">Anthems and symbols of Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://crtc.gc.ca/eng/8045/d2018.htm">Find a CRTC decision</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://library-archives.canada.ca/eng/collection/research-help/genealogy-family-history/pages/genealogy-family-history.aspx">Research your family history</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.bac-lac.gc.ca/eng/census/Pages/census.aspx">Search census records</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/culture/cultural-attractions/attractions-canada-capital.html">Landmarks and attractions in Canada\'s capital</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing" aria-expanded="false" href="#">Policing, justice and emergencies</a><ul id="gc-mnu-policing" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing.html">Policing<span class="hidden-xs hidden-sm">, justice and emergencies</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/police/index.html">Policing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/justice.html">Justice</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/emergencies.html">Emergencies</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/corrections.html">Corrections</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/parole.html">Parole, record suspension, expungement and clemency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/victims.html">Victims of crime</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-policing-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/cfp-pcaf/online_en-ligne/index-eng.htm">Apply/Renew a firearms licence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/en/criminal-record-checks">Get a criminal records check</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/parole-board/services/record-suspensions/official-pbc-application-guide-and-forms.html">Apply for a criminal record suspension</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.getprepared.gc.ca/cnt/hzd/drng-en.aspx">What to do during an emergency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/police/community-safety-policing/impaired-driving.html">Know the law on impaired driving</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/policing/police/help-solve-crime.html">Help solve a crime</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans" aria-expanded="false" href="#">Transport and infrastructure</a><ul id="gc-mnu-trans" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/transport.html">Transport<span class="hidden-xs hidden-sm">and infrastructure</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/aviation.html">Aviation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/marine.html">Marine transportation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/road.html">Road transportation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/rail.html">Rail transportation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/dangerous-goods.html">Dangerous goods</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/infrastructure.html">Infrastructure</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-trans-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/transport/zero-emission-vehicles.html">Zero-emission vehicles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/aviation/drone-safety.html">Drone safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://tc.canada.ca/en/aviation/aviation-security/what-not-bring-plane">What you can\'t bring on an airplane</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/eng/marinesafety/oep-vesselreg-menu-728.htm">Register your vessel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/en/services/road/child-car-seat-safety.html">Child car seat safety</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/eng/tdg/clear-tofc-211.htm">Transporting dangerous goods - Regulations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/eng/acts-regulations/regulations-sor96-433.htm">Canadian Aviation Regulations</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld" aria-expanded="false" href="#">Canada and the world</a><ul id="gc-mnu-canworld" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world<span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/offices-bureaux/index.aspx?lang=eng">International offices and emergency contacts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/study_work_travel-etude_travail_voyage/index.aspx?lang=eng">Study, work and travel worldwide</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/country-pays/index.aspx?lang=eng">Information by countries and territories</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/stories-histoires/index.aspx?lang=eng">Stories</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/international_relations-relations_internationales/index.aspx?lang=eng">International relations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/index.aspx?lang=eng">Global issues and international assistance</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/funding-financement/index.aspx?lang=eng">Funding for international initiatives</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/trade.html">International trade and investment</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-canworld-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/scholarships-bourses/non_can/index.aspx?lang=eng">Find a Canadian scholarship as an international student</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.treaty-accord.gc.ca/index.aspx?Lang=eng">International treaties signed by Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/index.aspx?lang=eng">Find international study or research opportunities in Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://travel.gc.ca/assistance/embassies-consulates">Contact an embassy or consulate</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/protocol-protocole/reps.aspx?lang=eng">Contact a foreign representative in Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=eng">Authenticate a document</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money" aria-expanded="false" href="#">Money and finances</a><ul id="gc-mnu-money" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance.html"><span class="hidden-xs hidden-sm">Money and finances</span><span class="visible-xs-inline visible-sm-inline">Finance: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/manage.html">Managing your money</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/debt.html">Debt and borrowing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/savings.html">Savings and investments</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/educationfunding.html">Education funding</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/pensions.html">Pensions and retirement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/fraud.html">Protection from frauds and scams</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/tools.html">Financial tools and calculators</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/financial-consumer-agency/services/financial-literacy-programs.html">Financial literacy programs</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/consumer-affairs.html">Consumer affairs</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/finance/bankruptcy.html">Insolvency</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/government/system/finances.html">Government finances</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/grants.html">Business grants and financing</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/permits/federallyregulatedindustrysectors/financialservicesregulation.html">Financial and money services regulation</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-money-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/bsf-osb/ins/login.html?lang=eng">Find a bankruptcy or insolvency record</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/jobs/education/student-financial-aid/student-loan.html">Student loans</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-eng.html">Set up direct deposit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html">Mortgages</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html">Credit report and scores</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://itools-ioutils.fcac-acfc.gc.ca/BP-PB/budget-planner">Make a budget</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html">Rates and contribution limits</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science" aria-expanded="false" href="#">Science and innovation</a><ul id="gc-mnu-science" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science.html">Science<span class="hidden-xs hidden-sm">and innovation</span><span class="visible-xs-inline visible-sm-inline">: home</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/researchfunding.html">Research funding and awards</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/sciencesubjects.html">Science subjects</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/open-data.html">Open data, statistics and archives</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/institutes.html">Research institutes and facilities</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/innovation.html">R&D and innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/business/ip.html">Intellectual property and copyright</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/scientistsdirectory.html">Directory of scientists and research professionals</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/en/services/science/educationalresources.html">Science education resources</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science-sub" aria-expanded="true">Most requested</a><ul id="gc-mnu-science-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/codes-canada-publications">National building codes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/web-clock/">Official times across Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/research-development/products-services/software-applications/sun-calculator/">Check sunrise and sunset times</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://nrc.canada.ca/en/support-technology-innovation/financial-support-technology-innovation-through-nrc-irap">Grants for technological innovation (IRAP)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://science-libraries.canada.ca/eng/home/">Federal Science Library</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://asc-csa.gc.ca/eng/astronomy/auroramax/hd-480.asp">Live view of northern lights cam</a></li></ul></li></ul></li>',
  fr: '<li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="false" href="#">Emplois et milieu de travail</a><ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois.html">Emplois<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/opportunites.html">Trouver un emploi</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/formation.html">Formation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/gestion-entreprise">Embauche et gestion de personnel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/demarrage-entreprise">Démarrage d\'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/milieu-travail.html">Normes en milieu de travail</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/pensions.html">Pensions et retraite</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae.html">Prestations d\'assurance-emploi et congés</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-jobs-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-jobs-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/emploi-developpement-social/programmes/assurance-emploi/ae-liste/assurance-emploi-re/acceder-re.html">Voir vos Relevés d’emploi</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/emploi-developpement-social/services/numero-assurance-sociale.html">Demander un numéro d’assurance-sociale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/emploi-developpement-social/services/travailleurs-etrangers.html">Embaucher un travailleur étranger temporaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express.html">Immigrer en tant que travailleur qualifié</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit" aria-expanded="false" href="#">Immigration et citoyenneté</a><ul id="gc-mnu-cit" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/immigration-citoyennete.html">Immigration<span class="hidden-xs hidden-sm">et citoyenneté</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande.html">Ma demande</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/visiter-canada.html">Visiter</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada.html">Immigrer</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/travailler-canada.html">Travailler</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html">Étudier</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/citoyennete-canadienne.html">Citoyenneté</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/nouveaux-immigrants.html">Nouveaux immigrants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/canadiens.html">Canadiens</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/refugies.html">Réfugiés et octroi de l’asile</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/immigration-citoyennete/application-loi-infractions.html">Application de la loi et infractions</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-cit-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/compte.html">Se connecter ou créer un compte pour présenter une demande en ligne</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-etat.html">Vérifier l’état de sa demande</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/information/delais/index.asp">Vérifier les délais de traitement des demandes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/formulaires-demande-guides.html">Trouver un formulaire de demande</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/information/frais/index.asp">Payer les frais</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/visiter/visas.asp">Déterminer si vous avez besoin d’une AVE ou d’un visa pour visiter le Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.cic.gc.ca/francais/centre-aide/index-en-vedette-can.asp">Trouver réponse à ses questions dans le Centre d’aide</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel" aria-expanded="false" href="#">Voyage et tourisme</a><ul id="gc-mnu-travel" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/">Voyage<span class="hidden-xs hidden-sm">et tourisme</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager/avertissements">Conseils aux voyageurs et avertissements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyage-covid">COVID-19 : voyage, dépistage et frontières</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/visiter-canada.html?outside">Visiter le Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager">Voyager à l’étranger</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/avion">Voyager en avion</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/retour">Retour au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/passeports-canadiens.html">Passeports et documents de voyage canadiens</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/tourisme-canadien">Attraits touristiques, événements et expériences au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/assistance">Assistance à l’extérieur du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/restez-branches">Restez branchés</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-travel-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/assistance/assistance-d-urgence">Assistance d\'urgence à l\'étranger</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cic.gc.ca/francais/visiter/visas.asp">Vérifiez si vous avez besoin d’un visa pour voyager au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/visiter-canada/ave.html">Présentez une demande d’Autorisation de voyage électronique (AVE)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/services/travel-voyage/prog/nexus/menu-fra.html">Adhérez à NEXUS</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager/inscription">Inscrivez-vous comme Canadien à l’étranger</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/voyager/documents/assurance-voyage">Assurance voyage</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz" aria-expanded="false" href="#">Entreprises et industrie</a><ul id="gc-mnu-biz" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises.html">Entreprises<span class="hidden-xs hidden-sm">et industrie</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/lancer.html">Démarrage d\'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/subventions.html">Subventions et financement pour les entreprises</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/impots.html">Taxes et impôt des entreprises</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/societes-de-regime-federal.html">Sociétés de régime fédéral</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/engager.html">Embauche et gestion de personnel</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/commerce.html">Commerce international et investissements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/permis.html">Permis, licences et règlements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/faire-affaire.html">Faire affaire avec le gouvernement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/innovation.html">Recherche-développement et innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/recherche.html">Recherche et renseignements d\'affaires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/pi.html">Propriété intellectuelle et droit d\'auteur</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/maintenirfairecroitreameliorerentreprise.html">Administration de votre entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/proteger.html">Protection de votre entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/faillites.html">Insolvabilité pour les entreprises</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-biz-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html?lang=fra">Trouver une société</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/prog/manif/portal-portail-fra.html">Déclarer vos produits importés</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/opic/recherche-marques/srch?null=&lang=fre">Chercher des marques de commerce</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2018/html/tblmod-1-fra.html">Réviser les tarifs des douanes pour l’importation de produits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/opic-cipo/cpd/fra/introduction.html">Trouver un brevet</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.cbsa-asfc.gc.ca/comm-fra.html">Importer et exporter à partir du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ic.gc.ca/eic/site/cd-dgc.nsf/fra/h_cs03922.html">Trouver un nom pour votre compagnie</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://ised-isde.canada.ca/cc/lgcy/hm.html?locale=fr_CA">Apporter des changements à votre société (Centre de dépôt en ligne)</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny" aria-expanded="false" href="#">Prestations</a><ul id="gc-mnu-benny" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations.html">Prestations<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae.html">Prestations d&#39;assurance-emploi et cong&eacute;s</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/famille.html">Prestations pour les familles et les proches aidants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/pensionspubliques.html">Pensions publiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/etudes.html">Aide financière aux étudiants et planification des études</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/logement.html">Prestations relatives au logement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/handicap.html">Prestations d’invalidité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.canada.ca/fr/services/prestations/clientele.html">Prestations par clientèle</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/calendrier.html">Dates de paiement des prestations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://benefitsfinder.services.gc.ca/hm?GoCTemplateCulture=fr-CA&cl=true">Chercheur de prestations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/aviser-gouvernement-deces.html">Aviser le gouvernement d’un décès</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-benny-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae/assurance-emploi-reguliere.html">Présenter une demande d’assurance-emploi</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/education/aide-etudiants/bourses-prets.html">Faire une demande de bourses et de prêts d’études</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/gouvernement/ouvrir-session-dossier-compte-en-ligne.html">Ouvrir une session pour un compte en ligne du gouvernement du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-fra.html">Inscrivez-vous au dépôt direct</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/calculateur-prestations-enfants-familles.html">Calculateur de prestations pour enfants et familles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/prestations/ae/assurance-emploi-declaration-internet.html">Soumettre une déclaration d’assurance-emploi</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health" aria-expanded="false" href="#">Santé</a><ul id="gc-mnu-health" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante.html">Santé<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/aliments-et-nutrition.html">Aliments et nutrition</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-publique/services/maladies.html">Maladies et affections</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-publique/sujets/immunisation-et-vaccins.html">Vaccins et immunisation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/medicaments-et-produits-sante.html">Médicaments et produits de santé</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/securite-produits.html">Sécurité des produits</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/securite-et-risque-pour-sante.html">Sécurité et risque pour la santé</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/vie-saine.html">Vie saine</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/sante-autochtones.html">Santé des Autochtones</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/systeme-et-services-sante.html">Système et services de santé</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/sante/science-recherche-et-donnees.html">Science, recherche et données</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-health-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-health-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-canada/services/drogues-medicaments/cannabis/titulaires-licences-demandeurs-industrie/cultivateurs-transformateurs-vendeurs-autorises.html">Cultivateurs, transformateurs et vendeurs de cannabis qui détiennent une licence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.canadiensensante.gc.ca/recall-alert-rappel-avis/index-fra.php">Rappels d\'aliments et de produits et alertes de sécurité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/sante-canada/services/guides-alimentaires-canada.html">Guide alimentaire du Canada</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes" aria-expanded="false" href="#">Impôts</a><ul id="gc-mnu-taxes" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots.html">Impôts<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/impot-sur-le-revenu.html">Impôt sur le revenu</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises.html">TPS/TVH</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/retenues-paie.html">Retenues sur la paie</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/numero-dentreprise.html">Numéro d\'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/regimes-depargne-et-de-pension.html">Régimes d’épargne et de pension</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/prestations-pour-enfants-et-familles.html">Crédits d’impôt et prestations pour les particuliers</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/taxes-daccise-droits-et-prelevements.html">Taxes d’accise, droits et prélèvements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots/bienfaisance.html">Organismes de bienfaisance et dons</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-taxes-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-numeriques-particuliers/dossier-particuliers.html">Mon dossier</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-numeriques-entreprises/dossier-entreprise.html">Mon dossier d\'entreprise</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/representer-client.html">Représenter un client</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-numeriques-entreprises/impotnet-tps-tvh.html">Transmettre une déclaration de TPS/TVH (IMPÔTNET)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/faire-paiement-a-agence-revenu-canada.html">Faire un paiement à l\'Agence du revenu du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/dates-versement-prestations.html">Trouver la date du prochain versement des prestations</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro" aria-expanded="false" href="#">Environnement et ressources naturelles</a><ul id="gc-mnu-enviro" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement.html">Environnement<span class="hidden-xs hidden-sm">et ressources naturelles</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/meteo.html">Météo, climat et catastrophes naturelles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/energie.html">Énergie</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/ressources-naturelles.html">Ressources naturelles</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://agriculture.canada.ca/fr/agriculture-environnement">Agriculture et environnement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/peches.html">Pêches</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/faune-flore-especes.html">Faune, flore et espèces</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/pollution-gestion-dechets.html">Pollution et gestion des déchets</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/environnement/conservation.html">Conservation et protection de l\'environnement</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-enviro-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://meteo.gc.ca/canada_f.html">Prévisions météo locales</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.rncan.gc.ca/energie/efficacite/transports/20997">Véhicules écoénergétiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.rncan.gc.ca/maisons">Efficacité énergétique des maisons</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/environnement-changement-climatique/services/registre-public-especes-peril.html">Espèces en péril</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/environnement-changement-climatique/services/meteo-saisonniere-dangereuse.html">Préparation aux conditions météorologiques dangereuses</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence" aria-expanded="false" href="#">Sécurité nationale et défense</a><ul id="gc-mnu-defence" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense.html"><span class="hidden-xs hidden-sm">Sécurité nationale et défense</span><span class="visible-xs-inline visible-sm-inline">Défense : accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/securitenationale.html">Sécurité nationale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/fac.html">Forces armées canadiennes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/achat-mise-a-niveau-equipement-defense.html">Achat et mise à niveau d’équipement de la Défense</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/surete-transports.html">Sûreté des transports</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/securiserfrontiere.html">Sécuriser la frontière</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/cybersecurite.html">Cybersécurité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/emplois.html">Emplois en sécurité nationale et en défense</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/gouvernement/fonctionpublique/avantagesmilitaires.html">Services et avantages sociaux du personnel militaire</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-defence-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://forces.ca/fr/carrieres/">Emplois dans les Forces armées canadiennes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/ministere-defense-nationale/services/histoire-militaire/histoire-patrimoine/insignes-drapeaux/grades/insignes-grade-fonction.html">Grades militaires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/defense/fac/equipement.html">Équipement de la Défense</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/ministere-defense-nationale/services/cadets-rangers-juniors-canadiens/cadets/rejoignez-nous.html">Joignez-vous aux cadets</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://dgpaapp.forces.gc.ca/fr/politique-defense-canada/index.asp">Politique de défense du Canada</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture" aria-expanded="false" href="#">Culture, histoire et sport</a><ul id="gc-mnu-culture" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture.html">Culture<span class="hidden-xs hidden-sm">, histoire et sport</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/patrimoine-canadien/services/financement.html">Financement - Culture, histoire et sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/evenements-celebrations-commemorations.html">Événements, célébrations et commémorations</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/attraits-culturels.html">Lieux et attraits culturels</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/identite-canadienne-societe.html">Identité canadienne et société</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/sport.html">Sport</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/histoire-patrimoine.html">Histoire et patrimoine</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/arts-media.html">Arts et média</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/programmes-culturels-jeunes.html">Programmes culturels pour les jeunes</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/commerce-investissement-culturels.html">Commerce et investissement culturels</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-culture-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.veterans.gc.ca/fra/remembrance/memorials/canadian-virtual-war-memorial">Visitez le Mémorial virtuel de guerre du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/identite-canadienne-societe/hymnes-symboles.html">Hymnes et symboles du Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://crtc.gc.ca/fra/8045/d2018.htm">Trouvez une décision du CRTC</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://bibliotheque-archives.canada.ca/fra/collection/aide-recherche/genealogie-histoire-famille/Pages/genealogie-histoire-famille.aspx">Faites des recherches sur votre histoire familiale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.bac-lac.gc.ca/fra/recensements/Pages/recensements.aspx">Cherchez des documents de recensement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/culture/attraits-culturels/attraits-capitale-canada.html">Lieux et attraits dans la capitale du Canada</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing" aria-expanded="false" href="#">Services de police, justice et urgences</a><ul id="gc-mnu-policing" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police.html">Services de police<span class="hidden-xs hidden-sm">, justice et urgences</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/servicespolice.html">Services de police</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/justice.html">Justice</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/urgences.html">Urgences</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/correctionnels.html">Services correctionnels</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/liberationconditionnelle.html">Libération conditionnelle, suspension du casier, radiation et clémence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/victimes.html">Victimes d\'actes criminels</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-policing-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/cfp-pcaf/online_en-ligne/index-fra.htm">Demander ou renouveler un permis d\'arme à feu</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.rcmp-grc.gc.ca/fr/verification-casier-judiciaire">Obtenir une attestation de vérification de casier judiciaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/commission-liberations-conditionnelles/services/suspension-du-casier/guide-et-formulaires-de-demande.html">Demander la suspension d’un casier judiciaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.preparez-vous.gc.ca/cnt/hzd/drng-fr.aspx">Que faire durant une urgence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/servicespolice/securite-communautaire-police/conduite-facultes-affaiblies.html">Connaissez la loi sur la conduite avec facultés affaiblies</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/police/servicespolice/aider-resoudre-un-crime.html">Aidez à résoudre un crime</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans" aria-expanded="false" href="#">Transport et infrastructure</a><ul id="gc-mnu-trans" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/transport.html">Transport<span class="hidden-xs hidden-sm">et infrastructure</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/aviation.html">Aviation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/maritime.html">Transport maritime</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/routier.html">Transport routier</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/ferroviaire.html">Transport ferroviaire</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/marchandises-dangereuses.html">Marchandises dangereuses</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/infrastructures.html">Infrastructure</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-trans-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/transport/vehicules-zero-emission.html">Véhicules zéro émission</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/aviation/securite-drones.html">Sécurité des drones</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/surete-transports/aerienne/articles-interdits-bord-avion.html">Articles interdits à bord d’un avion</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fra/securitemaritime/epe-immabatiments-menu-728.htm">Immatriculer votre bâtiment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/services/routier/securite-sieges-auto-enfants.html">Sécurité des sièges d\'auto pour enfants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fra/tmd/clair-tdesm-211.htm">Transporter des marchandises dangereuses - Règlements</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://www.tc.gc.ca/fr/transports-canada/organisation/lois-reglements/reglements/sor-96-433.html">Règlement de l’aviation canadien</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld" aria-expanded="false" href="#">Canada et le monde</a><ul id="gc-mnu-canworld" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/index.aspx?lang=fra">Le Canada et le monde<span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/offices-bureaux/index.aspx?lang=fra">Bureaux internationaux et contacts d’urgence</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/study_work_travel-etude_travail_voyage/index.aspx?lang=fra">Étude, travail et voyage partout dans le monde</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/country-pays/index.aspx?lang=fra">Information par pays et territoires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/stories-histoires/index.aspx?lang=fra">Histoires</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/international_relations-relations_internationales/index.aspx?lang=fra">Relations internationales</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/index.aspx?lang=fra">Enjeux mondiaux et aide internationale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/world-monde/funding-financement/index.aspx?lang=fra">Financement d’initiatives internationales</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/commerce.html">Commerce international et investissement</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-canworld-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/scholarships-bourses/non_can/index.aspx?lang=fra">Trouver une bourse d’études canadienne en tant qu’étudiant international</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://treaty-accord.gc.ca/index.aspx?Lang=fra">Traités internationaux signés par le Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.educanada.ca/index.aspx?lang=fra">Trouver des occasions d’étude ou de recherche au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://voyage.gc.ca/assistance/ambassades-consulats">Communiquer avec une ambassade ou un consulat</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/protocol-protocole/reps.aspx?lang=fra">Communiquer avec un représentant étranger au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=fra">Authentifier un document</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money" aria-expanded="false" href="#">Argent et finances</a><ul id="gc-mnu-money" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance.html"><span class="hidden-xs hidden-sm">Argent et finances</span><span class="visible-xs-inline visible-sm-inline">Finances : accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/gerer.html">Gérer votre argent</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/dettes.html">Dettes et emprunts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/epargne.html">Épargne et investissement</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/financementetudes.html">Financement des études</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/pensions.html">Pensions et retraite</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/fraude.html">Protection contre la fraude et les escroqueries</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/outils.html">Calculatrices et outils financiers</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/programmes-litteratie-financiere.html">Programmes de littératie financière</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/questions-consommation.html">Questions de consommation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/finance/faillite.html">Insolvabilité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/impots.html">Impôts</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/gouvernement/systeme/finances.html">Finances publiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/subventions.html">Subventions et financement pour les entreprises</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/permis/secteursindustriereglementationfederale/regleservicesfinanciers.html">Réglementation des services financiers et monétaires</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-money-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-money-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.ic.gc.ca/app/scr/bsf-osb/ins/connexion.html?lang=fra">Trouver un dossier de faillite ou d’insolvabilité</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/emplois/education/aide-financiere-etudiants/pret-etudiants.html">Prêts étudiants</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-fra.html">Inscrivez-vous au dépôt direct</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques.html">Obtenir des renseignements sur les hypothèques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/dossier-pointage-credit.html">Dossiers et cotes de crédit</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://itools-ioutils.fcac-acfc.gc.ca/BP-PB/planificateur-budgetaire">Faire un budget</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/agence-revenu/services/impot/administrateurs-regimes-enregistres/fesp/plafonds-cd-reer-rpdb-celi-mgap.html">Taux et limites de contribution</a></li></ul></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science" aria-expanded="false" href="#">Science et innovation</a><ul id="gc-mnu-science" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science.html">Science<span class="hidden-xs hidden-sm">et innovation</span><span class="visible-xs-inline visible-sm-inline">: accueil</span></a></li><li role="separator"></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/financementrecherche.html">Financement, subventions et prix pour la recherche</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/themesscientifiques.html">Thèmes scientifiques</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/donnees-ouvertes.html">Données ouvertes, statistiques et archives</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/instituts.html">Instituts et établissements de recherches</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/innovation.html">R-D et innovation</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/entreprises/pi.html">Propriété intellectuelle et droit d\'auteur</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/repertoirescientifiques.html">Répertoire des scientifiques et des professionnels de la recherche</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://www.canada.ca/fr/services/science/ressourcespedagogiques.html">Ressources pédagogiques scientifiques</a></li><li role="separator" aria-orientation="vertical"></li><li role="presentation"><a data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1" aria-haspopup="true" aria-controls="gc-mnu-science-sub" aria-expanded="true">En demande</a><ul id="gc-mnu-science-sub" role="menu" aria-orientation="vertical"><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/certifications-evaluations-normes/codes-canada/publications-codes-canada">Code national du bâtiment</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/horloge-web/">Heures officielles au Canada</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/recherche-developpement/produits-services/logiciels-applications/calculatrice-soleil/">Trouver les heures de levers et de couchers du soleil</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://cnrc.canada.ca/fr/soutien-linnovation-technologique/soutien-financier-linnovation-technologique-pari-cnrc">Bourses pour l’innovation technologique (PARI)</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="https://science-libraries.canada.ca/fra/accueil/">Bibliothèque scientifique fédérale</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="http://asc-csa.gc.ca/fra/astronomie/auroramax/hd-480.asp">Aurores boréales en direct</a></li></ul></li></ul></li>',
};

const gcdsTopicMenuCss = "@layer reset, default, mobile, xsMobile, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}}@layer default{:host .gcds-topic-menu__heading,:host .gcds-topic-menu__main{display:inherit;height:0;margin:0;overflow:hidden;width:0}:host .visible-sm-inline{display:none}:host .gcds-topic-menu{font:var(--gcds-topic-menu-font);margin-inline:auto;max-width:var(--gcds-topic-menu-max-width);position:relative;width:90%}:host .gcds-topic-menu button[aria-haspopup=true]{background-color:var(--gcds-topic-menu-button-background);border:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-button-border);color:var(--gcds-topic-menu-button-text);cursor:pointer;font:var(--gcds-topic-menu-button-font);margin-inline-start:0;padding:var(--gcds-topic-menu-button-padding);text-transform:uppercase}:host .gcds-topic-menu button[aria-haspopup=true].gcds-topic-menu--home{background-color:var(--gcds-topic-menu-button-home-background);border-color:var(--gcds-topic-menu-button-home-border-color);color:var(--gcds-topic-menu-button-home-text)}:host .gcds-topic-menu button[aria-haspopup=true]:hover,:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]{background-color:var(--gcds-topic-menu-button-expanded-background);border-color:var(--gcds-topic-menu-button-expanded-border-color);color:var(--gcds-topic-menu-button-expanded-text)}:host .gcds-topic-menu [aria-haspopup=true][aria-expanded=false]+[role=menu]{display:none}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu]{z-index:9991}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu] [role=menuitem]{position:relative;z-index:9991}:host .gcds-topic-menu [aria-haspopup=true][aria-expanded=true]+[role=menu]{z-index:9990}:host .gcds-topic-menu [role=menu]{background-color:var(--gcds-topic-menu-topiclist-background);color:var(--gcds-topic-menu-themelist-text);list-style:none;margin:0;padding:0;position:absolute;width:var(--gcds-topic-menu-themelist-width)}:host .gcds-topic-menu [role=menu][data-top-menu]{-webkit-box-shadow:var(--gcds-topic-menu-topiclist-box-shadow);box-shadow:var(--gcds-topic-menu-topiclist-box-shadow)}:host .gcds-topic-menu [role=menu]>li{border-inline-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-themelist-item-border)}:host .gcds-topic-menu [role=menu]>li:first-child{border-block-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-themelist-item-border)}:host .gcds-topic-menu [role=menu] [role=menu]{border-block-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-topiclist-border);color:var(--gcds-topic-menu-topiclist-text);left:var(--gcds-topic-menu-topiclist-left);margin-block-end:var(--gcds-topic-menu-topiclist-margin-block-end);min-height:var(--gcds-topic-menu-topiclist-min-height);padding:var(--gcds-topic-menu-topiclist-padding);top:0;width:var(--gcds-topic-menu-topiclist-width)}:host .gcds-topic-menu [role=menu] [role=menu] li{border:0;width:45%}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]{border-block-end:0;border-inline-end:0;color:var(--gcds-topic-menu-topiclist-menuitem-text);padding:var(--gcds-topic-menu-topiclist-menuitem-padding);text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup=true],:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup=true]:hover{color:var(--gcds-topic-menu-topiclist-menuitem-popup-text);font:var(--gcds-topic-menu-topiclist-menuitem-popup-font);text-decoration:none}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]:hover{color:var(--gcds-topic-menu-topiclist-menuitem-hover-text);text-decoration-thickness:var(\n                    --gcds-topic-menu-topiclist-menuitem-hover-text-decoration-thickness\n                  )}}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child{margin-block-end:var(\n                --gcds-topic-menu-topiclist-item-first-margin-block-end\n              );width:100%}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child [role=menuitem]{font:var(--gcds-topic-menu-topiclist-item-first-font);text-decoration:underline}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:var(--gcds-topic-menu-topiclist-item-last-left);position:absolute;top:var(--gcds-topic-menu-topiclist-item-last-top)}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [aria-expanded=true]{background:transparent}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu]{list-style:disc;padding-block-start:0}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu]{background:transparent;border-block-start:0;-webkit-box-shadow:none;box-shadow:none;left:auto;min-height:auto;top:auto;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li{width:var(--gcds-topic-menu-mostrequested-item-width)}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:first-child{margin-block-end:var(\n                  --gcds-topic-menu-mostrequested-item-first-margin-block-end\n                )}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:first-child [role=menuitem]{font:var(--gcds-topic-menu-mostrequested-item-first-font);text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:last-child{left:auto;position:relative;top:auto}@media screen and (61.9375rem <= width <= 74.9375rem){:host .gcds-topic-menu [role=menu] [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:auto;margin-block-start:var(\n                --gcds-topic-menu-mostrequested-item-last-margin-block-start\n              );position:relative;top:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu]{margin-block-end:0;padding-block-end:0;position:relative}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:last-child{margin-block-start:0}}:host .gcds-topic-menu [role=menuitem],:host .gcds-topic-menu [role=menuitem]:visited{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-menuitem-border-block-end);box-sizing:border-box;color:var(--gcds-topic-menu-menuitem-text);display:block;font:var(--gcds-topic-menu-menuitem-font);padding:var(--gcds-topic-menu-menuitem-padding);text-decoration:none;text-underline-offset:var(\n          --gcds-topic-menu-menuitem-text-underline-offset\n        );width:var(--gcds-topic-menu-menuitem-width)}:host .gcds-topic-menu [role=menuitem]:focus,:host .gcds-topic-menu [role=menuitem]:visited:focus{z-index:9999!important}:host .gcds-topic-menu [role=menuitem]:hover,:host .gcds-topic-menu [role=menuitem]:visited:hover,:host .gcds-topic-menu [role=menuitem]:visited[aria-expanded=true],:host .gcds-topic-menu [role=menuitem][aria-expanded=true]{background-color:var(--gcds-topic-menu-menuitem-expanded-background);color:var(--gcds-topic-menu-menuitem-expanded-text)}:host .gcds-topic-menu [role=menuitem][aria-haspopup=true][aria-expanded=false][aria-controls]:not([aria-controls*=sub]){background-color:var(--gcds-topic-menu-themelist-background)}}@layer mobile{@media screen and (width <= 61.9375rem){:host .gcds-topic-menu .visible-sm-inline{display:inline-block;text-decoration:underline}:host .gcds-topic-menu .hidden-sm{display:none}:host .gcds-topic-menu [role=menu]{margin-block-end:var(\n          --gcds-topic-menu-mobile-themelist-margin-block-start\n        );position:static;width:auto}:host .gcds-topic-menu [role=menu] [role=menu]{border-block-start:0;-webkit-box-shadow:none;box-shadow:none;margin-block-end:0;min-height:auto;padding:0;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(\n                  --gcds-topic-menu-mobile-topiclist-menuitem-border-block-end\n                );padding:var(--gcds-topic-menu-mobile-topiclist-menuitem-padding)}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]:hover{background-color:transparent;color:var(\n                    --gcds-topic-menu-mobile-topiclist-menuitem-hover-text\n                  )}}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup]{font:var(\n                  --gcds-topic-menu-mobile-topiclist-menuitem-haspopup-font\n                )}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child{margin-block-end:0}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(\n                  --gcds-topic-menu-mobile-topiclist-item-first-menuitem-border\n                );color:var(\n                --gcds-topic-menu-mobile-topiclist-item-first-menuitem-text\n              );font:var(\n                --gcds-topic-menu-mobile-topiclist-menuitem-haspopup-font\n              );text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:auto;position:static;top:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-mostrequested-border);color:var(\n                --gcds-topic-menu-mobile-topiclist-item-last-menuitem-text\n              );text-decoration:none}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menuitem]:hover{color:var(\n                    --gcds-topic-menu-mobile-topiclist-item-last-menuitem-hover-text\n                  );text-decoration:underline}}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu]{list-style:none;padding-block-start:0}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-mostrequested-border)}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li [role=menuitem]:hover{color:var(\n                        --gcds-topic-menu-mobile-mostrequested-hover-text\n                      );text-decoration:underline}}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child,:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{background-color:var(\n              --gcds-topic-menu-mobile-mostrequested-background\n            )}:host .gcds-topic-menu [role=menuitem]{width:auto}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li{margin-inline-start:var(\n              --gcds-topic-menu-mobile-item-expanded-margin-inline-start\n            )}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:first-child,:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child{margin-inline-start:0}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:first-child [role=menuitem],:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child [role=menuitem]{padding-inline-start:var(\n                  --gcds-topic-menu-mobile-item-expanded-padding-inline-start\n                )}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child [role=menu] [role=menuitem]{padding-inline-start:0}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] [role=menu] li{margin-inline-start:var(\n              --gcds-topic-menu-mobile-mostrequested-expanded-margin-inline-start\n            )}:host .gcds-topic-menu [aria-expanded=true]+[role=menu] [role=menu] [role=menu]{background-color:var(\n            --gcds-topic-menu-mobile-mostrequested-background\n          )}:host .gcds-topic-menu [aria-haspopup]:not(button):before{content:\"\\25BA\\a0\"}:host .gcds-topic-menu [aria-haspopup][aria-expanded=true]:not(button):before{content:\"\\25BC\\a0\"}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu]{border-inline-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-themelist-border)}}}@layer xsMobile{@media screen and (width <= 47.9375rem){:host .gcds-topic-menu>[role=menu]{margin-inline:calc(-50vw - -50%)}}}@layer focus{:host .gcds-topic-menu :is(button[aria-haspopup=true],[role=menuitem]):focus{background-color:var(--gcds-topic-menu-focus-background);border-color:var(--gcds-topic-menu-focus-background);border-inline-end:0;border-radius:var(--gcds-topic-menu-focus-border-radius);box-shadow:var(--gcds-topic-menu-focus-box-shadow);color:var(--gcds-topic-menu-focus-text);outline:var(--gcds-topic-menu-focus-outline);outline-offset:var(--gcds-topic-menu-focus-outline-offset)}}";
const GcdsTopicMenuStyle0 = gcdsTopicMenuCss;

const GcdsTopicMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.home = false;
        this.open = false;
        this.lang = undefined;
        this.navItems = [];
        this.navSize = undefined;
    }
    /**
     * Keyboard controls of theme and topic menu
     */
    async keyDownListener(e) {
        if (this.el == document.activeElement &&
            this.themeList.contains(document.activeElement.shadowRoot.activeElement)) {
            const key = e.key;
            const currentIndex = this.navItems.indexOf(document.activeElement.shadowRoot.activeElement);
            const activeElement = this.navItems[currentIndex];
            switch (key) {
                case 'ArrowDown':
                    e.preventDefault();
                    // If on last item, jump to first item
                    if (currentIndex + 1 > this.navItems.length - 1) {
                        await this.focusMenuLink(this.navItems, activeElement, 0);
                        // Jump to next item
                    }
                    else {
                        await this.focusMenuLink(this.navItems, activeElement, currentIndex + 1);
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    // If on first item, jump to last
                    if (currentIndex - 1 < 0) {
                        await this.focusMenuLink(this.navItems, activeElement, this.navItems.length - 1);
                        // Jump to next item
                    }
                    else {
                        await this.focusMenuLink(this.navItems, activeElement, currentIndex - 1);
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    // Theme links
                    if (activeElement.hasAttribute('aria-haspopup') &&
                        !activeElement.hasAttribute('data-keep-expanded')) {
                        await this.updateNavItemQueue(activeElement.parentNode.children[1]);
                        activeElement.setAttribute('aria-expanded', 'true');
                        this.navItems[0].focus();
                        // Most requested link - desktop
                    }
                    else if (activeElement.hasAttribute('aria-haspopup') &&
                        this.navSize == 'desktop') {
                        await this.focusMenuLink(this.navItems, activeElement, currentIndex + 1);
                        // Most requested link - mobile
                    }
                    else if (activeElement.hasAttribute('aria-haspopup') &&
                        this.navSize == 'mobile') {
                        await this.updateNavItemQueue(activeElement.parentNode.children[1]);
                        activeElement.setAttribute('aria-expanded', 'true');
                        this.navItems[0].focus();
                    }
                    break;
                case 'Enter':
                    if (activeElement.closest('ul').hasAttribute('data-top-menu')) {
                        await this.updateNavItemQueue(activeElement.parentNode.children[1]);
                        this.navItems[0].focus();
                    }
                    break;
                case 'ArrowLeft':
                case 'Escape': {
                    e.preventDefault();
                    const parentList = activeElement.closest('ul');
                    // In most requested menu
                    if (parentList.parentNode
                        .querySelector('a')
                        .hasAttribute('data-keep-expanded')) {
                        await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
                        await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));
                        // on mobile, close expandable area
                        if (this.navSize == 'mobile') {
                            parentList.parentNode
                                .querySelector('a')
                                .setAttribute('aria-expanded', 'false');
                        }
                        // Exit menu
                    }
                    else if (parentList.parentNode.closest('ul')) {
                        await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
                        await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));
                        if (this.navSize == 'mobile') {
                            parentList.parentNode
                                .querySelector('a')
                                .setAttribute('aria-expanded', 'false');
                        }
                        // Close theme and topic menu, focus menu button
                    }
                    else {
                        this.menuButton.focus();
                        await this.toggleNav();
                    }
                    break;
                }
                case 'Tab':
                    await this.toggleNav();
                    break;
            }
        }
    }
    /**
     * Close all theme menus
     */
    async closeAllMenus() {
        for (let x = 0; x < this.themeList.children.length; x++) {
            const themeLink = this.themeList.children[x].querySelector('a');
            themeLink.setAttribute('aria-expanded', 'false');
        }
    }
    /**
     * Toggle open theme and topic menu
     */
    async toggleNav() {
        this.open = !this.open;
        if (this.open) {
            // Check window size to set the state
            const mediaQuery = window.matchMedia('screen and (max-width: 991px)');
            const nav = this.el;
            if (mediaQuery.matches) {
                this.navSize = 'mobile';
            }
            else {
                this.navSize = 'desktop';
            }
            // Add change event listener to keep track of window changing size
            mediaQuery.addEventListener('change', async (e) => {
                if (e.matches) {
                    nav.updateNavSize('mobile');
                    nav.shadowRoot
                        .querySelectorAll('[data-keep-expanded]')
                        .forEach(el => {
                        el.setAttribute('aria-expanded', 'false');
                    });
                }
                else {
                    nav.updateNavSize('desktop');
                    nav.shadowRoot
                        .querySelectorAll('[data-keep-expanded]')
                        .forEach(el => {
                        el.setAttribute('aria-expanded', 'true');
                    });
                }
            });
            if (this.navSize == 'desktop') {
                this.themeList.children[0].children[0].setAttribute('aria-expanded', 'true');
            }
            else {
                // Close most requested on mobile
                this.el.shadowRoot
                    .querySelectorAll('[data-keep-expanded]')
                    .forEach(el => {
                    el.setAttribute('aria-expanded', 'false');
                });
            }
            setTimeout(() => {
                this.themeList.children[0].querySelector('a').focus();
            }, 50);
            await this.updateNavItemQueue(this.themeList);
        }
        else {
            this.closeAllMenus();
        }
    }
    /*
     * Pass new window size: desktop or mobile
     */
    async updateNavSize(size) {
        this.navSize = size;
    }
    /*
     * Get current navSize state
     */
    async getNavSize() {
        return this.navSize;
    }
    /**
     * Update keyboard focus queue
     */
    async updateNavItemQueue(parent) {
        const focusableElements = [];
        for (let x = 0; x < parent.children.length; x++) {
            const link = parent.children[x].querySelector('a');
            if (link) {
                focusableElements.push(link);
                if (link.hasAttribute('data-keep-expanded') &&
                    this.navSize == 'desktop') {
                    for (let c = 0; c < link.parentNode.children[1].children.length; c++) {
                        focusableElements.push(link.parentNode.children[1].children[c].querySelector('a'));
                    }
                }
            }
        }
        this.navItems = focusableElements;
    }
    /**
     * Focus menu link
     */
    focusMenuLink(queue, activeElement, nextStep) {
        if (activeElement.closest('ul').hasAttribute('data-top-menu') &&
            activeElement.hasAttribute('aria-haspopup') &&
            !activeElement.hasAttribute('data-keep-expanded')) {
            this.closeAllMenus();
        }
        else if (activeElement.hasAttribute('aria-haspopup') &&
            !activeElement.hasAttribute('data-keep-expanded')) {
            activeElement.setAttribute('aria-expanded', 'false');
        }
        queue[nextStep].focus();
        if (queue[nextStep].hasAttribute('aria-haspopup') &&
            this.navSize == 'desktop') {
            queue[nextStep].setAttribute('aria-expanded', 'true');
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
        try {
            const response = await fetch(`https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`);
            this.listItems = await response.text();
        }
        catch (error) {
            this.listItems = snapshots[this.lang];
        }
    }
    async componentDidLoad() {
        const hostElement = this.el;
        let menuEnterTimer;
        // Since we load the HTML, loop through elements and add event listeners to add functionality
        for (let x = 0; x < this.themeList.children.length; x++) {
            const themeLink = this.themeList.children[x].querySelector('a');
            // Click
            themeLink.addEventListener('click', async (e) => {
                e.preventDefault();
                // Open topic lists
                if ((await hostElement.getNavSize()) == 'desktop') {
                    await hostElement.closeAllMenus();
                    themeLink.setAttribute('aria-expanded', 'true');
                }
                else {
                    if (themeLink.getAttribute('aria-expanded') == 'false') {
                        themeLink.setAttribute('aria-expanded', 'true');
                        await hostElement.updateNavItemQueue(themeLink.parentNode.children[1]);
                        setTimeout(() => {
                            themeLink.parentNode.children[1].children[0]
                                .querySelector('a')
                                .focus();
                        }, 50);
                    }
                    else {
                        await hostElement.closeAllMenus();
                        await hostElement.updateNavItemQueue(themeLink.closest('ul'));
                        setTimeout(() => {
                            themeLink.focus();
                        }, 50);
                    }
                }
            });
            // Hover actions
            themeLink.addEventListener('mouseenter', async () => {
                // Change active theme if hovering on menuitem
                if ((await hostElement.getNavSize()) == 'desktop') {
                    menuEnterTimer = setTimeout(async function () {
                        await hostElement.closeAllMenus();
                        themeLink.setAttribute('aria-expanded', 'true');
                    }, 400);
                }
            });
            // Cancel hover timer if mouseut before completes
            themeLink.addEventListener('mouseleave', () => {
                clearTimeout(menuEnterTimer);
            });
            // Most requested click
            const mostRequested = this.themeList.children[x]
                .querySelector('ul')
                .querySelector('[aria-haspopup]');
            mostRequested.addEventListener('click', async (e) => {
                e.preventDefault();
                if ((await hostElement.getNavSize()) == 'mobile') {
                    if (mostRequested.getAttribute('aria-expanded') == 'true') {
                        mostRequested.setAttribute('aria-expanded', 'false');
                    }
                    else {
                        mostRequested.setAttribute('aria-expanded', 'true');
                        const mostRequestedList = mostRequested.parentNode.querySelector('ul');
                        mostRequestedList.children[0].querySelector('a').focus();
                        await hostElement.updateNavItemQueue(mostRequestedList);
                    }
                }
            });
        }
    }
    render() {
        const { home, lang } = this;
        return (h(Host, { key: '77e9f945df4058bd3c547231d6cdb6ec9052fc84' }, h("nav", { key: '5ca25a73101119a0ceffd543c7ff55b7d891e994', class: "gcds-topic-menu", "aria-labelledby": "gcds-topic-menu__heading" }, h("gcds-sr-only", { key: 'dd8d544d5de7d0445e1e163481fae5b25497d811', id: "gcds-topic-menu__heading", tag: "h2" }, I18N$1[lang].menuLabelFull), h("button", { key: '5b7d43ea46077bc46f364c4eaaa4ebfbd1fd3ec7', "aria-haspopup": "true", "aria-expanded": this.open.toString(), "aria-label": I18N$1[lang].buttonLabel, onClick: async () => await this.toggleNav(), ref: element => (this.menuButton = element), class: home && 'gcds-topic-menu--home' }, this.lang == 'en' ? (h(Fragment, null, h("gcds-sr-only", { tag: "span" }, I18N$1[lang].menuLabelHidden), I18N$1[lang].menuToggle)) : (h(Fragment, null, I18N$1[lang].menuToggle, h("gcds-sr-only", { tag: "span" }, I18N$1[lang].menuLabelHidden))), h("gcds-icon", { key: '72b28e6124b97e3781e693b0811c012d9a18dcd9', name: "chevron-down", "margin-left": "100", size: "text-small" })), h("ul", { key: '0dc47fdd32219dec0313e04da9e5e6df57dc906e', role: "menu", "aria-orientation": "vertical", "data-top-menu": true, innerHTML: this.listItems, ref: element => (this.themeList = element) }))));
    }
    get el() { return getElement(this); }
};
GcdsTopicMenu.style = GcdsTopicMenuStyle0;

const I18N = {
  en: {
    summary: {
      text: 'An official website of the Government of Canada.',
      link: 'Learn to recognize one',
    },
    content: {
      description:
        "It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:",
      url: {
        heading: 'Canada.ca or gc.ca',
        text: "Government of Canada website's normally use Canada.ca or gc.ca in the URL.",
      },
      languages: {
        heading: "Available in both of Canada's Official Languages",
        text: 'Information will be available in both English and French.',
      },
      https: {
        heading: 'HTTPS',
        text: 'Secure Government of Canada websites use',
      },
      contact: {
        heading: 'A point of contact',
        text: 'Contact information will have Canada.ca, gc.ca, or the department name in the email address.',
      },
    },
  },
  fr: {
    summary: {
      text: 'Les sites Web officiels du gouvernement du Canada.',
      link: 'Comment les reconnaître',
    },
    content: {
      description:
        "Il peut être difficile de savoir quels sites sont fiables. Avant de partager des renseignements, vérifiez les points suivant pour déterminer s'il s'agit bien d'un site du gouvernement du Canada:",
      url: {
        heading: 'Canada.ca ou gc.ca',
        text: "On retrouve normalement Canada.ca ou gc.ca dans l'adresse URL d'un site Web du gouvernement du Canada.",
      },
      languages: {
        heading: 'Offert dans les deux langues officielles',
        text: 'Vérifiez que les renseignements sont accessibles en français et en anglais.',
      },
      https: {
        heading: 'HTTPS',
        text: "Lorsqu'un navigateur affiche les sites Web sécuritaires du gouvernement du Canada, on retrouve",
      },
      contact: {
        heading: 'Un point de communication',
        text: "On retrouve Canada.ca, gc.ca ou le nom du ministère dans l'URL de toute adresse courriel du gouvernement du Canada.",
      },
    },
  },
};

const CanadaFlag = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.3 33" width="25">
  <path fill="#FF0000" d="M0,0h16v32.5H0V0z M46.5,16.6l-1-0.5c-0.5-0.2-0.3-0.6-0.2-1.1v-0.2l1-3.6l-2.9,0.6c-0.5,0.1-0.9,0.2-1.1-0.3 l-0.7-1.7l-2.8,3c-0.8,0.8-1.5,0.4-1.2-0.8l1.3-6.2l-1.9,1c-0.5,0.2-0.7,0.3-1-0.2l-2.2-4.4l-2.3,4.6c-0.2,0.3-0.6,0.2-0.9-0.1 l-2.1-1.2l1.4,6.8c0.2,0.9-0.5,1.3-1,0.7L26,9.8l-0.9,1.7c-0.2,0.4-0.4,0.6-1.2,0.4L21,11.3l1.2,3.6c0.1,0.6,0.1,0.9-0.2,1.1 l-1.3,0.7l6,4.9c0.5,0.4,0.4,0.9,0.2,1.5l-0.7,1.7l5.1-1c1.1-0.2,1.6-0.2,1.6,0.4l-0.2,6.3h1.7l-0.2-6.3c0-0.6,0.5-0.6,1.2-0.4 l5.5,1l-0.5-1.7c-0.2-0.7-0.4-0.9,0.2-1.5L46.5,16.6z M51.4,0v32.5h16V0H51.4z" />
</svg>`;

const ContentToggleArrow = `<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="7.4" viewBox="0 0 12 7.4">
  <path d="M10.6,0L6,4.6L1.4,0L0,1.4l6,6l6-6L10.6,0z" />
</svg>`;

const gcdsVerifyBannerCss = "@layer reset, default, fixed, container;@layer reset{:host{display:block}}@layer default{:host .gcds-verify-banner{background-color:var(--gcds-verify-banner-background);color:var(--gcds-verify-banner-text);font:var(--gcds-verify-banner-font)}:host .gcds-verify-banner :is(summary,.verify-banner__content){font-size:90%}:host .gcds-verify-banner summary{cursor:pointer;display:flex;margin-inline:auto;padding-block:var(--gcds-verify-banner-summary-padding)}:host .gcds-verify-banner summary :is(.svg-container,p small){margin:var(--gcds-verify-banner-summary-content-margin)}:host .gcds-verify-banner summary p{align-items:center;display:flex;flex-wrap:wrap;line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner summary .verify-banner__toggle{background:none;border:0;color:var(--gcds-verify-banner-toggle-text);flex:0 0 auto;font-weight:var(--gcds-verify-banner-toggle-font-weight);padding:0;pointer-events:none;text-decoration:underline}:host .gcds-verify-banner summary .verify-banner__toggle .svg-container path{fill:var(--gcds-verify-banner-toggle-text)}:host .gcds-verify-banner .verify-banner__content{border-block-start:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);margin:0 auto;padding-block-end:var(--gcds-verify-banner-content-padding-block-end);padding-block-start:var(\n        --gcds-verify-banner-content-padding-block-start\n      )}:host .gcds-verify-banner .verify-banner__content li{list-style:none}:host .gcds-verify-banner .verify-banner__content li :is(h4,p){width:90%}:host .gcds-verify-banner .verify-banner__content h4{margin:var(--gcds-verify-banner-content-heading-margin)}:host .gcds-verify-banner .verify-banner__content p{line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner[open] summary .verify-banner__toggle svg{transform:rotate(-180deg)}}@layer fixed{:host .gcds-verify-banner.verify-banner--is-fixed{position:sticky;top:0;width:var(--gcds-verify-banner-max-content-width-full);z-index:9999}}@layer container{:host .gcds-verify-banner .container-lg,:host .gcds-verify-banner .container-md,:host .gcds-verify-banner .container-sm,:host .gcds-verify-banner .container-xl,:host .gcds-verify-banner .container-xs{width:90%}:host .gcds-verify-banner .container-full{max-width:var(--gcds-verify-banner-container-full);padding-inline:var(--gcds-verify-banner-container-padding)}:host .gcds-verify-banner .container-xl{max-width:var(--gcds-verify-banner-container-xl)}:host .gcds-verify-banner .container-lg{max-width:var(--gcds-verify-banner-container-lg)}:host .gcds-verify-banner .container-md{max-width:var(--gcds-verify-banner-container-md)}:host .gcds-verify-banner .container-sm{max-width:var(--gcds-verify-banner-container-sm)}:host .gcds-verify-banner .container-xs{max-width:var(--gcds-verify-banner-container-xs)}}";
const GcdsVerifyBannerStyle0 = gcdsVerifyBannerCss;

const GcdsVerifyBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.container = 'xl';
        this.isFixed = false;
        this.lang = undefined;
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
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { container, isFixed, lang } = this;
        return (h(Host, { key: '79bc4dc615e909274744d7c9658fbe004c2bf6bc' }, h("details", { key: '0e01a3f845f9f882c07b1c34ab51a2f381c8bf5f', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: '60a371e675c308932c2f5af336c6e81035ca01f2', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: '7b0def4d6a9a4eb3a313fff1fe66a0bc6b1f051a', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: 'a074a77e354a0166aa6770f32fd83d1cdbd8532a' }, h("small", { key: '1acc5177f5d3ba56d97816fe2f99a7568107e433' }, I18N[lang].summary.text), h("button", { key: 'ec6a3f1625d23552f8d31c0cde5803ddc2a77272', class: "verify-banner__toggle" }, h("small", { key: '3f6d49e3165de7c1c6b2e7d6d06d274f0fbdd56a' }, I18N[lang].summary.link), h("span", { key: '153fc0c626c8a986db416c5ac29713a2ac0fcdf1', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: 'e81165bfd96795ccf462da1d4a1dda868395cce5', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: '22045e8846b47339074fd5f38f031ca4b8959d8d' }, h("small", { key: '473ff5b3a65b167204a67097f66a6d84d0a4ce23' }, I18N[lang].content.description)), h("br", { key: '15af7e05f46d20060c48a59474588e60831a094e' }), h("gcds-grid", { key: '709f44671c2d73683385dbf9621718d9c20bc289', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'f65ebc8634708bc47b1a32e92782555083685064' }, h("h4", { key: '6c4cf0f3461551b7a0f6c1ab98a00d027f1dd5a2' }, I18N[lang].content.url.heading), h("p", { key: '85f95f3ca4a0fba659d60f6145d3e37089a8ecd4' }, h("small", { key: '1b105c8da0a8976ab8c4e1bad11447be51a65c8f' }, I18N[lang].content.url.text))), h("li", { key: '93c3f0c0487ba36d347f58bffc777ce66de6f3fd' }, h("h4", { key: 'f8481a2a32400da5a36109fa56a962593e0312e2' }, I18N[lang].content.languages.heading), h("p", { key: 'd9596aee415d7c38b2dc9a573805baae85d05a38' }, h("small", { key: '904e6811890b96a3bd96dea52204a6d15e3b44ac' }, I18N[lang].content.languages.text))), h("li", { key: '7844b115d12d5071d9d23ee3f7fef4507461b607' }, h("h4", { key: '36843578e05e2c110e759355324dc428c1902e7b' }, I18N[lang].content.https.heading), h("p", { key: '70cf52e7807ff64061d0ca654f5295e94bb32fd1' }, h("small", { key: '1764d52ed82aecfcf0ca8f533848d08114852403' }, I18N[lang].content.https.text, " ", h("strong", { key: '6675bf241c5f83bb100ccd15d78cd1d6351fdc37' }, "https://"), "."))), h("li", { key: '8779e017066292331a05451847ac7c3d5865999a' }, h("h4", { key: 'd82025f6d665cc8df4ddb97cc73e539c058ae1b0' }, I18N[lang].content.contact.heading), h("p", { key: '391899c66d166527c07eebaa1a017b665a45e354' }, h("small", { key: 'ea86b227a962ba2bfe0784d6bf89b24c592c26ba' }, I18N[lang].content.contact.text))))))));
    }
    get el() { return getElement(this); }
};
GcdsVerifyBanner.style = GcdsVerifyBannerStyle0;

export { GcdsAlert as gcds_alert, GcdsBreadcrumbs as gcds_breadcrumbs, GcdsBreadcrumbsItem as gcds_breadcrumbs_item, GcdsButton as gcds_button, GcdsCard as gcds_card, GcdsCheckbox as gcds_checkbox, GcdsContainer as gcds_container, GcdsDateInput as gcds_date_input, GcdsDateModified as gcds_date_modified, GcdsDetails as gcds_details, GcdsErrorMessage as gcds_error_message, GcdsErrorSummary as gcds_error_summary, GcdsFieldset as gcds_fieldset, GcdsFileUploader as gcds_file_uploader, GcdsFooter as gcds_footer, GcdsGrid as gcds_grid, GcdsGridCol as gcds_grid_col, GcdsHeader as gcds_header, GcdsHeading as gcds_heading, GcdsHint as gcds_hint, GcdsIcon as gcds_icon, GcdsInput as gcds_input, GcdsLabel as gcds_label, GcdsLangToggle as gcds_lang_toggle, GcdsLink as gcds_link, GcdsNavGroup as gcds_nav_group, GcdsNavLink as gcds_nav_link, GcdsNotice as gcds_notice, GcdsPagination as gcds_pagination, GcdsPhaseBanner as gcds_phase_banner, GcdsRadioGroup as gcds_radio_group, GcdsSearch as gcds_search, GcdsSelect as gcds_select, GcdsSideNav as gcds_side_nav, GcdsSignature as gcds_signature, GcdsSrOnly as gcds_sr_only, GcdsStepper as gcds_stepper, GcdsText as gcds_text, GcdsTextarea as gcds_textarea, GcdsTopNav as gcds_top_nav, GcdsTopicMenu as gcds_topic_menu, GcdsVerifyBanner as gcds_verify_banner };

//# sourceMappingURL=gcds-alert_42.entry.js.map