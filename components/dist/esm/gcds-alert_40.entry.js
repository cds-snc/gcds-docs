import { r as registerInstance, d as createEvent, h, a as Host, c as getElement } from './index-BMZbJN0q.js';
import { o as observerConfig, a as assignLanguage, e as emitEvent, i as inheritAttributes, l as logError, b as isValidDate, h as handleErrors, c as handleValidationResult, d as isValid, f as formatHTMLErrorMessage, g as closestElement } from './utils-DL822Lqm.js';

const I18N$p = {
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

const GcdsAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsDismiss = createEvent(this, "gcdsDismiss");
        /**
         * Props
         */
        /**
         * Defines alert role.
         */
        this.alertRole = 'info';
        /**
         * Defines the max width of the alert content.
         */
        this.container = 'full';
        /**
         * Defines if the alert's close button is displayed or not.
         */
        this.hideCloseBtn = false;
        /**
         * Defines if the alert's role icon is displayed or not.
         */
        this.hideRoleIcon = false;
        /**
         * Defines if the alert's position is fixed.
         */
        this.isFixed = false;
        /**
         * States
         */
        /**
         * Specifies if the alert is open or not.
         */
        this.isOpen = true;
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
        return (h(Host, { key: '9ca55e2b6562e7dfda9e367b21b5d2aa3bbe37d7' }, isOpen ? (h("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`, role: "alert", "aria-label": alertRole === 'danger'
                ? I18N$p[lang].label.danger
                : alertRole === 'info'
                    ? I18N$p[lang].label.info
                    : alertRole === 'success'
                        ? I18N$p[lang].label.success
                        : alertRole === 'warning'
                            ? I18N$p[lang].label.warning
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
            }, "aria-label": I18N$p[lang].closeBtn }, h("gcds-icon", { "aria-hidden": "true", name: "close", size: "text" }))))))) : null));
    }
    get el() { return getElement(this); }
};
GcdsAlert.style = gcdsAlertCss;

const I18N$o = {
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

const GcdsBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Defines if the default canada.ca link is displayed or omitted.
         */
        this.hideCanadaLink = false;
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
        return (h(Host, { key: '03039bf66fd3e4f7939818708e4b2e3eecb9ea16' }, h("nav", { key: 'a544a335b8a3308bac153517792c2ff9b24cc436', "aria-label": I18N$o[lang].label, class: "gcds-breadcrumbs" }, h("ol", { key: 'f4daf2765861e5b362e50c5197e34457c2088aa4', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (h("gcds-breadcrumbs-item", { href: I18N$o[lang].link }, "Canada.ca")) : null, h("slot", { key: '0001a34312ea97c7e9c4f41f656051482184142e' })))));
    }
    get el() { return getElement(this); }
};
GcdsBreadcrumbs.style = gcdsBreadcrumbsCss;

const gcdsBreadcrumbsItemCss = "@layer reset, default, hover, focus;@layer reset{:host(.gcds-breadcrumbs-item){display:inline-block}:host(.gcds-breadcrumbs-item) gcds-link::part(link){display:inline-block;white-space:normal}:host(.gcds-breadcrumbs-item) slot{display:block}}@layer default{:host(.gcds-breadcrumbs-item){margin:var(--gcds-breadcrumbs-item-margin)!important}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"12\" viewBox=\"0 0 8 14\"><path fill=\"26374a\" d=\"M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0z\"/></svg>');display:inline-block;margin:var(--gcds-breadcrumbs-item-arrow-margin);width:.375rem}:host(.gcds-breadcrumbs-item) gcds-link::part(link){font:var(--gcds-breadcrumbs-item-font)}}";

const GcdsBreadcrumbsItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
    }
    render() {
        const { href } = this;
        return (h(Host, { key: '95b1e4dcb1f26c4bbecaed7084c46f7440a939c9', role: "listitem", class: "gcds-breadcrumbs-item" }, h("gcds-link", { key: 'c60332192cfe17f487017acbd89a49adbc288e19', size: "regular", href: href }, h("slot", { key: '34993248082e9a129d2753695db93a7b5ac771f1' }))));
    }
    get el() { return getElement(this); }
};
GcdsBreadcrumbsItem.style = gcdsBreadcrumbsItemCss;

const I18N$n = {
  en: {
    label: 'Opens in a new tab.',
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet.",
  },
};

const gcdsButtonCss = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);display:inline-block;font:var(--gcds-button-font-desktop);padding:var(--gcds-button-padding);text-align:center;text-wrap:balance;transition:all .15s ease-in-out;width:var(--gcds-button-width)}@media only screen and (width < 48em){:host .gcds-button{font:var(--gcds-button-font-mobile)}}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-start{background-color:var(--gcds-button-start-default-background);color:var(--gcds-button-start-default-text);font:var(--gcds-button-start-font-desktop);padding:var(--gcds-button-start-padding)}@media only screen and (width < 48em){:host .gcds-button.button--role-start{font:var(--gcds-button-start-font-mobile)}}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}}@layer disabled{:host([disabled]){pointer-events:none}:host([disabled]) .gcds-button[aria-disabled=true]{cursor:not-allowed;opacity:var(--gcds-button-shared-disabled-opacity);pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-start{background-color:var(--gcds-button-start-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";

const GcdsButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        /**
         * Props
         */
        /**
         * Set button types
         */
        // prettier-ignore
        this.type = 'button';
        /**
         * Set the main style
         */
        this.buttonRole = 'primary';
        /**
         * Set the button size
         */
        this.size = 'regular';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
        this.handleClick = (e) => {
            // Check button type, emit value with submit button and href with link.
            const emitValue = this.type === 'submit'
                ? this.value
                : this.type === 'link'
                    ? this.href
                    : undefined;
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
    validateDisabled(newValue) {
        if (newValue === false || (newValue === true && this.type === 'link')) {
            this.el.removeAttribute('disabled');
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
        this.validateDisabled(this.disabled);
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
        return (h(Host, { key: 'e9340ebfb8c10ce33a593b6b7f54394949317506' }, h(Tag, Object.assign({ key: 'c62ba255b62ddbff1c3dbef61a4e64973df1bccb' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => !disabled ? this.handleClick(e) : e.stopImmediatePropagation(), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), h("slot", { key: 'f922fc8e16a85bce258204ff670bc6aaa81ca119' }), type === 'link' && target === '_blank' ? (h("gcds-icon", { name: "external", label: I18N$n[lang].label, "margin-left": "150" })) : null)));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["validateType"],
        "buttonRole": ["validateButtonRole"],
        "size": ["validateSize"],
        "disabled": ["validateDisabled"]
    }; }
};
GcdsButton.style = gcdsButtonCss;

const I18N$m = {
  en: {
    tagged: 'Tagged:',
    badgeError: 'gcds-card: The badge attribute has a character limit of 20 characters.',
  },
  fr: {
    tagged: 'Baliser :',
    badgeError: 'gcds-card: L\'attribut badge a une limite de caractères de 20 caractères.',
  },
};

const gcdsCardCss = "@layer reset, default, link, hover, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);box-shadow:var(--gcds-card-box-shadow);color:var(--gcds-card-color);display:block;height:100%;max-width:var(--gcds-card-max-width);overflow:hidden;padding:var(--gcds-card-padding);position:relative}:host .gcds-card .gcds-badge{background-color:var(--gcds-card-badge-background-color);left:0;padding:var(--gcds-card-badge-padding);position:absolute;text-wrap:nowrap;top:0}@media only screen and (width < 48em){:host .gcds-card .gcds-badge{padding:var(--gcds-card-badge-mobile-padding)}}:host .gcds-card .gcds-card__image{margin:var(--gcds-card-image-margin);width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-desktop);width:fit-content}@media only screen and (width < 48em){:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-mobile)}}:host .gcds-card .gcds-card__title:has(+.gcds-card__description){margin:var(--gcds-card-title-margin)}:host .gcds-card .gcds-card__description{--gcds-text-size-body-desktop:var(--gcds-card-description-font-desktop)}@media only screen and (width < 48em){:host .gcds-card .gcds-card__description{font:var(--gcds-card-description-font-mobile)}}}@layer link{:host .gcds-card gcds-link::part(link):after{bottom:0;content:\"\";left:0;pointer-events:auto;position:absolute;right:0;top:0}}@layer hover{@media (hover:hover){:host .gcds-card:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}@layer focus{:host .gcds-card:focus-within{box-shadow:var(--gcds-card-focus-box-shadow);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset)}:host gcds-link::part(link):focus{background-color:var(--gcds-card-focus-link-background-color);border:var(--gcds-card-focus-link-border);box-shadow:var(--gcds-card-focus-link-box-shadow);color:var(--gcds-card-focus-link-color);outline:var(--gcds-card-focus-link-outline);text-decoration:underline currentColor var(--gcds-card-focus-link-text-decoration-thickness)}}";

const GcdsCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        /**
         * The card title tag property specifies the HTML heading element for the title.
         * This property does not modify the font size. It is used to assign the heading level
         * in order to maintain heading hierarchy and accessibility for assistive technologies.
         */
        this.cardTitleTag = 'a';
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
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
            console.error(`${I18N$m['en'].badgeError} | ${I18N$m['fr'].badgeError}`);
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
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-card', this.errors, ['badge']);
        }
    }
    get renderDescription() {
        if (this.el.innerHTML.trim() != '') {
            return (h("div", { class: "gcds-card__description" }, h("slot", null)));
        }
        else if (this.description) {
            return (h("div", { class: "gcds-card__description" }, h("gcds-text", { "margin-bottom": "0" }, this.description)));
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
            return (h(Host, { key: 'e2311efdcaaadb272a36f44c3e3eb051b4767b5d' }, h("div", { key: '234bde32e565a54786b2f872762ed95c19c821cc', class: "gcds-card" }, badge && !errors.includes('badge') && (h("gcds-text", { key: '844bfe328181351d24e68b83f57b7d4f9a9a3b75', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, h("strong", { key: '565872d89c99d6c4541b2ec494b8abdbfc79d035' }, h("gcds-sr-only", { key: '30196619952eb4d38d677db62184d9491e458c19', tag: "span" }, I18N$m[lang].tagged), badge))), imgSrc && (h("img", { key: 'b233e6e13e836831ab9c207483529a7424b5c887', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element != 'a' ? (h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), h("gcds-link", { href: href }, cardTitle))) : (h("gcds-link", Object.assign({ href: href, class: "gcds-card__title" }, taggedAttr), cardTitle)), renderDescription)));
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "cardTitle": ["validateCardTitle"],
        "href": ["validateHref"],
        "badge": ["validateBadge"]
    }; }
};
GcdsCard.style = gcdsCardCss;

const defaultValidator = {
    validate: () => {
        return {
            valid: true,
            reason: {
                en: '',
                fr: '',
            },
        };
    },
};
function combineValidators(v1, v2) {
    return {
        validate: (x) => {
            const res1 = v1.validate(x);
            const res2 = v2.validate(x);
            if ((typeof res1 === 'object' && !res1.valid) ||
                (typeof res1 === 'boolean' && !res1)) {
                return typeof res1 === 'object'
                    ? res1
                    : { valid: res1, reason: v1.errorMessage };
            }
            else if ((typeof res2 === 'object' && !res2.valid) ||
                (typeof res2 === 'boolean' && !res2)) {
                return typeof res2 === 'object'
                    ? res2
                    : { valid: res2, reason: v2.errorMessage };
            }
            else {
                return {
                    valid: true,
                    reason: {
                        en: '',
                        fr: '',
                    },
                };
            }
        },
    };
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
            case 'date-input':
                if (element.validator) {
                    element.validator.unshift('requiredDateInput');
                }
                else {
                    element.validator = ['requiredDateInput'];
                }
                break;
            case 'radio':
                if (element.validator) {
                    element.validator.unshift('requiredRadio');
                }
                else {
                    element.validator = ['requiredRadio'];
                }
                break;
            case 'checkboxGroup':
                if (element.validator) {
                    element.validator.unshift('requiredCheckboxGroup');
                }
                else {
                    element.validator = ['requiredCheckboxGroup'];
                }
                break;
            case 'checkboxSingle':
                if (element.validator) {
                    element.validator.unshift('requiredCheckboxSingle');
                }
                else {
                    element.validator = ['requiredCheckboxSingle'];
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
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: 'Enter information to continue.',
                fr: 'Saisissez des renseignements pour continuer.',
            },
        };
    },
};
const requiredEmailField = {
    validate: (value) => {
        return {
            valid: value != null &&
                value.trim() != '' &&
                (value.toLowerCase().match(emailPattern) ? true : false),
            reason: {
                en: 'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
                fr: 'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
            },
        };
    },
};
const requiredFileInput = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: 'You must upload a file to continue.',
                fr: 'Vous devez téléverser un fichier pour continuer.',
            },
        };
    },
};
const requiredSelectField = {
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: 'Choose an option to continue.',
                fr: 'Choisissez une option pour continuer.',
            },
        };
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
            return {
                valid: true,
                reason: {
                    en: '',
                    fr: '',
                },
            };
        }
        const splitDate = date.split('-');
        const dateObject = {
            day: splitDate[2],
            month: splitDate[1],
            year: splitDate[0],
        };
        const format = splitDate.length === 3 ? 'full' : 'compact';
        const error = getDateInputError(dateObject, format);
        return error;
    },
};
const getDateInputError = (dateValues, format) => {
    const { day, month, year } = dateValues;
    const errorResponse = {
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
    else if (!day && month && year && format === 'full') {
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
const requiredRadio = {
    validate: (value) => {
        return {
            valid: value != null && value != '',
            reason: {
                en: 'Choose an option to continue.',
                fr: 'Choisissez une option pour continuer.',
            },
        };
    },
};
const requiredCheckboxGroup = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: 'Choose an option to continue.',
                fr: 'Choisissez une option pour continuer.',
            },
        };
    },
};
const requiredCheckboxSingle = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: 'You must check the box to continue.',
                fr: 'Vous devez cocher la case pour continuer.',
            },
        };
    },
};

var ValidatorsName;
(function (ValidatorsName) {
    ValidatorsName["requiredField"] = "requiredField";
    ValidatorsName["requiredEmailField"] = "requiredEmailField";
    ValidatorsName["requiredCheck"] = "requiredCheck";
    ValidatorsName["requiredFileInput"] = "requiredFileInput";
    ValidatorsName["requiredSelectField"] = "requiredSelectField";
    ValidatorsName["requiredDateInput"] = "requiredDateInput";
    ValidatorsName["requiredRadio"] = "requiredRadio";
    ValidatorsName["requiredCheckboxGroup"] = "requiredCheckboxGroup";
    ValidatorsName["requiredCheckboxSingle"] = "requiredCheckboxSingle";
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
        case ValidatorsName.requiredDateInput:
            return requiredDateInput;
        case ValidatorsName.requiredFileInput:
            return requiredFileInput;
        case ValidatorsName.requiredRadio:
            return requiredRadio;
        case ValidatorsName.requiredCheckboxGroup:
            return requiredCheckboxGroup;
        case ValidatorsName.requiredCheckboxSingle:
            return requiredCheckboxSingle;
        default:
            return defaultValidator;
    }
}

/* Check if passed object matches required CheckboxObject type
 * @param obj - object to check
 */
function isCheckboxObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const validKeys = ['id', 'label', 'value', 'hint', 'checked', 'required'];
    const objKeys = Object.keys(obj);
    // Check if all properties match the expected type
    const hasValidTypes = typeof obj.id === 'string' &&
        typeof obj.label === 'string' &&
        (obj.value === undefined || typeof obj.value === 'string') &&
        (obj.hint === undefined || typeof obj.hint === 'string') &&
        (obj.checked === undefined || typeof obj.checked === 'boolean');
    // Ensure no extra properties exist
    const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));
    return hasValidTypes && hasOnlyValidKeys;
}
/* Loop through the optionsArr and check if each option/checkbox is formatted correctly
 * @param optionsArr - array of objects to be checked
 */
function validateOptionsArray(optionsArr) {
    let invalidOptionsArr = false;
    if (optionsArr && optionsArr.length >= 1) {
        invalidOptionsArr = optionsArr.some(checkbox => !isCheckboxObject(checkbox));
    }
    else if (optionsArr && optionsArr.length == 0) {
        invalidOptionsArr = true;
    }
    return invalidOptionsArr;
}
/* Loop through manually assigned value to check if it is available in rendered checkboxes
 * @param optionsArr - array of checkbox objects to compare to
 * @param element - the checkboxes element
 */
function cleanUpValues(optionsArr, element) {
    const availableValues = [];
    optionsArr.forEach(checkbox => {
        availableValues.push(checkbox.value ? checkbox.value : 'on');
        if ((checkbox.checked == 'true' || checkbox.checked === true) &&
            !element.value.includes(checkbox.value || 'on')) {
            element.value = [
                ...element.value,
                checkbox.value ? checkbox.value : 'on',
            ];
        }
    });
    // Remove any values that are not available in the inputs
    element.value
        .filter(value => !availableValues.includes(value))
        .forEach(value => {
        element.value = element.value.filter(item => item !== value);
    });
}
const renderCheckbox = (checkbox, element, emitEvent, handleInput) => {
    const { name, disabled, hasError, errorMessage, gcdsFocus, gcdsInput, gcdsChange, gcdsClick, gcdsBlur, required, hint, isGroup, lang, value, onBlurValidate, } = element;
    const attrsInput = {
        name: name,
        id: checkbox.id,
        disabled: disabled,
        required: checkbox.required,
        value: checkbox.value,
    };
    const labelAttrs = {
        'label': checkbox.label,
        'label-for': checkbox.id,
        lang,
    };
    if (!isGroup && required) {
        labelAttrs['required'] = required;
        attrsInput['required'] = required;
    }
    if (checkbox.hint) {
        const hintID = `hint-${checkbox.id}`;
        attrsInput['aria-describedby'] = `${hintID}${attrsInput['aria-describedby'] ? `${attrsInput['aria-describedby']}` : ''}`;
    }
    if (value.includes(checkbox.value)) {
        attrsInput['checked'] = true;
    }
    if (hasError) {
        attrsInput['aria-invalid'] = 'true';
        attrsInput['aria-description'] = errorMessage;
    }
    return (h("div", { class: `gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}` },
        h("input", Object.assign({ type: "checkbox" }, attrsInput, { onBlur: isGroup ? () => gcdsBlur.emit() : onBlurValidate, onFocus: () => gcdsFocus.emit(), onChange: e => handleInput(e, gcdsChange), onInput: e => handleInput(e, gcdsInput), onClick: e => !disabled ? emitEvent(e, gcdsClick) : e.stopImmediatePropagation() })),
        h("gcds-label", Object.assign({}, labelAttrs, { onClick: e => e.stopPropagation() })),
        checkbox.hint || (!isGroup && hint) ? (h("gcds-hint", { "hint-id": checkbox.id }, !isGroup && hint ? hint : checkbox.hint)) : null,
        !isGroup && errorMessage ? (h("gcds-error-message", { messageId: checkbox.id }, errorMessage)) : null));
};

const gcdsCheckboxesCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-checkboxes__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-checkboxes__fieldset legend{padding:0}:host .gcds-checkbox{padding:0}:host .gcds-checkbox gcds-label{display:block}:host .gcds-checkbox gcds-label>label:after,:host .gcds-checkbox gcds-label>label:before{box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}}@layer default{:host .gcds-checkboxes__fieldset{margin:var(--gcds-checkbox-fieldset-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-desktop);margin:var(--gcds-checkbox-legend-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-mobile)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-mobile)}}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend:not(:has(+gcds-hint)){margin:var(--gcds-checkbox-legend-hint-margin)}:host .gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin)!important;max-width:var(--gcds-checkbox-max-width);min-height:calc(var(--gcds-checkbox-input-height-and-width) - var(--gcds-checkbox-padding));padding:var(--gcds-checkbox-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-checkbox :is(gcds-label,gcds-hint,gcds-error-message){padding:var(--gcds-checkbox-label-padding)!important}:host .gcds-checkbox gcds-hint::part(hint){margin:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{position:absolute}:host .gcds-checkbox gcds-label>label:before,:host .gcds-checkbox input{height:var(--gcds-checkbox-input-height-and-width);left:0;top:0;width:var(--gcds-checkbox-input-height-and-width)}:host .gcds-checkbox input{opacity:0}:host .gcds-checkbox gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-checkbox-label-font-desktop);--gcds-label-font-mobile:var(--gcds-checkbox-label-font-mobile)}:host .gcds-checkbox gcds-label>label:before{background-color:var(--gcds-checkbox-default-background);border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-checkbox gcds-label>label:after{border:var(--gcds-checkbox-check-border-width) solid;border-block-start:0!important;border-inline-start:0!important;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);width:var(--gcds-checkbox-check-width)}:host .gcds-checkbox input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-checkbox.gcds-checkbox--disabled{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:after,:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor}:host .gcds-checkbox.gcds-checkbox--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-checkbox-danger-border)}:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:after{color:var(--gcds-checkbox-danger-border)}}@layer focus{:host .gcds-checkbox:focus-within input:focus+gcds-label>label:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);color:var(--gcds-checkbox-focus-color);outline:var(--gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}:host .gcds-checkbox:focus-within input:focus+gcds-label>label:after{color:var(--gcds-checkbox-focus-color)}}";

const GcdsCheckboxes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsError = createEvent(this, "gcdsError");
        this.gcdsValid = createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.isGroup = false;
        this._validator = defaultValidator;
        /**
         * Value for checkboxes component.
         */
        this.value = [];
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
        this.onBlurValidate = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        // Handle input and change events
        this.handleInput = (e, customEvent) => {
            const isInputEvent = e.type === 'input';
            if (isInputEvent) {
                const target = e.target;
                if (target.checked) {
                    this.value = [...this.value, target.value];
                }
                else {
                    // Modify options to prevent re-adding prechecked values when user unchecks
                    this.options = (typeof this.options === 'string'
                        ? JSON.parse(this.options)
                        : this.options).map(check => check.value === target.value ? Object.assign(Object.assign({}, check), { checked: false }) : check);
                    // Remove item from value array when unchecked
                    this.value = this.value.filter(item => item !== target.value);
                }
                // Keep form-associated value in sync
                if (this.value.length > 0) {
                    this.internals.setFormValue(this.value.toString());
                }
                else {
                    this.internals.setFormValue(null);
                }
            }
            customEvent.emit([...this.value]);
        };
    }
    validateName() {
        this.errors = handleErrors(this.errors, 'name', this.name);
    }
    validateLegend() {
        if (this.isGroup) {
            this.errors = handleErrors(this.errors, 'legend', this.legend);
        }
    }
    validateOptions() {
        let invalidOptions = false;
        // Assign optionsArr based on valid options property
        invalidOptions = this.assignOptionsArray();
        // Check if each checkbox object is formatted correctly
        if (this.optionsArr && !invalidOptions) {
            invalidOptions = validateOptionsArray(this.optionsArr);
            // Assign if isGroup logic more than one checkbox object
            if (this.optionsArr && this.optionsArr.length > 1) {
                this.isGroup = true;
            }
        }
        // Log error if invalidOptions
        this.errors = handleErrors(this.errors, 'options', this.optionsArr, invalidOptions);
    }
    validateDisabledCheckbox() {
        if (this.required) {
            this.disabled = false;
        }
    }
    validateValue(newValue) {
        // Convert string to array
        if (!Array.isArray(newValue)) {
            try {
                this.value = JSON.parse(newValue);
            }
            catch (e) {
                logError('gcds-checkboxes', ['Invalid array for value']);
                this.value = [];
            }
        }
        else if (this.optionsArr) {
            // Remove any manually set values that do not match available inputs
            cleanUpValues(this.optionsArr, this.el);
            // Set form value only when a value is assigned
            if (this.value.length > 0) {
                this.internals.setFormValue(this.value.toString());
            }
        }
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else {
            this.hasError = this.errorMessage ? !this.hasError : false;
        }
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
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
        handleValidationResult(this.el, this._validator.validate(this.value), this.isGroup ? this.legend : this.optionsArr[0].label, this.gcdsError, this.gcdsValid, this.lang);
    }
    /*
     * FormData listener to append values like native checkboxes
     */
    formdataListener(e) {
        const data = e.formData;
        this.value.forEach(value => {
            // Set formdata for first entry to remove array
            if (this.value.indexOf(value) === 0) {
                data.set(this.name, value);
            }
            else {
                data.append(this.name, value);
            }
        });
    }
    // Submit validation handler
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
        if (this.value != this.initialState) {
            this.value = this.initialState;
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = [...state.split(',')];
    }
    /*
     * Observe lang attribute change
     */
    watchLang(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.lang = newValue;
        }
    }
    /*
     * Validate required properties
     */
    validateRequiredProps() {
        this.validateOptions();
        this.validateValue(this.value);
        this.validateLegend();
        this.validateName();
        return isValid(this.errors, ['name', 'legend', 'options']);
    }
    async componentWillLoad() {
        var _a;
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        const valid = this.validateRequiredProps();
        this.validateDisabledCheckbox();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, this.isGroup ? 'checkboxGroup' : 'checkboxSingle');
        this.validateValidator();
        // Assign checkbox hint to component hint if not group
        if (!this.isGroup &&
            this.optionsArr &&
            ((_a = this.optionsArr[0]) === null || _a === void 0 ? void 0 : _a.hint) &&
            !this.hint) {
            this.hint = this.optionsArr[0].hint;
        }
        if (!valid) {
            logError('gcds-checkboxes', this.errors);
        }
        this.initialState = this.value;
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    async componentDidUpdate() {
        // Validate props again if changed after render
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-checkboxes', this.errors);
        }
    }
    /*
     * Validate passed options and assign optionsArr if proper formatting
     */
    assignOptionsArray() {
        let invalidOptions = false;
        if (Array.isArray(this.options)) {
            this.optionsArr = this.options;
        }
        else if (typeof this.options === 'string' && this.options.trim() !== '') {
            try {
                // Assign to random variable to not restart options validation
                const optionsCheck = JSON.parse(this.options);
                if (Array.isArray(optionsCheck)) {
                    this.optionsArr = optionsCheck;
                }
                else {
                    this.optionsArr = null;
                    invalidOptions = true;
                }
            }
            catch (e) {
                logError('gcds-checkboxes', ['Invalid JSON string for options']);
                this.options = null;
                invalidOptions = true;
            }
        }
        return invalidOptions;
    }
    render() {
        const { legend, required, hint, errorMessage } = this;
        const fieldsetAttrs = {
            'tabindex': '-1',
            'aria-labelledby': 'checkboxes-legend',
        };
        if (hint) {
            const hintID = this.hint ? `checkboxes-hint ` : '';
            fieldsetAttrs['aria-labelledby'] =
                `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '1c4a5af6bf3886cf38fe0a9eb05781aabab35bbf', onBlur: () => this.isGroup && this.onBlurValidate() }, this.isGroup ? (h("fieldset", Object.assign({ class: "gcds-checkboxes__fieldset" }, fieldsetAttrs), h("legend", { id: "checkboxes-legend", class: "gcds-checkboxes__legend" }, legend, required ? (h("span", { class: "legend__required" }, " (required)")) : null), hint ? (h("gcds-hint", { id: "checkboxes-hint", "hint-id": "checkboxes" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "checkboxes-error", messageId: "checkboxes" }, errorMessage))) : null, this.optionsArr &&
                this.optionsArr.map(checkbox => {
                    return renderCheckbox(checkbox, this, emitEvent, this.handleInput);
                }))) : (this.optionsArr &&
                this.optionsArr.length > 0 &&
                renderCheckbox(this.optionsArr[0], this, emitEvent, this.handleInput))));
        }
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "options": ["validateOptions"],
        "disabled": ["validateDisabledCheckbox"],
        "value": ["validateValue"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "lang": ["watchLang"]
    }; }
};
GcdsCheckboxes.style = gcdsCheckboxesCss;

const gcdsContainerCss = "@layer reset, default, border, centered, main, margin, padding, size;@layer reset{:host{display:block}:host .gcds-container{box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container slot{display:initial}}@layer default{:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}}@layer border{:host .gcds-container.container-border{border:var(--gcds-container-border)}}@layer centered{:host .gcds-container.container-centered{margin-inline:auto!important}}@layer main{:host .gcds-container.container-main:not(.size-full){width:90%}}@layer margin{:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-25{margin:var(--gcds-container-spacing-25)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-75{margin:var(--gcds-container-spacing-75)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-125{margin:var(--gcds-container-spacing-125)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-175{margin:var(--gcds-container-spacing-175)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-225{margin:var(--gcds-container-spacing-225)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-350{margin:var(--gcds-container-spacing-350)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-650{margin:var(--gcds-container-spacing-650)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-750{margin:var(--gcds-container-spacing-750)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-850{margin:var(--gcds-container-spacing-850)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-950{margin:var(--gcds-container-spacing-950)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}:host .gcds-container.m-1050{margin:var(--gcds-container-spacing-1050)}:host .gcds-container.m-1100{margin:var(--gcds-container-spacing-1100)}:host .gcds-container.m-1150{margin:var(--gcds-container-spacing-1150)}:host .gcds-container.m-1200{margin:var(--gcds-container-spacing-1200)}:host .gcds-container.m-1250{margin:var(--gcds-container-spacing-1250)}}@layer padding{:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-25{padding:var(--gcds-container-spacing-25)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-75{padding:var(--gcds-container-spacing-75)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-125{padding:var(--gcds-container-spacing-125)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-175{padding:var(--gcds-container-spacing-175)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-225{padding:var(--gcds-container-spacing-225)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-350{padding:var(--gcds-container-spacing-350)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-650{padding:var(--gcds-container-spacing-650)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-750{padding:var(--gcds-container-spacing-750)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-850{padding:var(--gcds-container-spacing-850)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-950{padding:var(--gcds-container-spacing-950)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}:host .gcds-container.p-1050{padding:var(--gcds-container-spacing-1050)}:host .gcds-container.p-1100{padding:var(--gcds-container-spacing-1100)}:host .gcds-container.p-1150{padding:var(--gcds-container-spacing-1150)}:host .gcds-container.p-1200{padding:var(--gcds-container-spacing-1200)}:host .gcds-container.p-1250{padding:var(--gcds-container-spacing-1250)}}@layer size{:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}}";

const GcdsContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Defines if the container has a border.
         */
        this.border = false;
        /**
         * Defines if the container is centered.
         */
        this.centered = false;
        /**
         * Defines if the container is the main page container. When true,
         * the width will be set to 90% for smaller screens to ensure consistency
         * with the responsiveness of other core layout components (header + footer).
         */
        this.mainContainer = false;
        /**
         * Defines container size.
         */
        this.size = 'full';
        /**
         * Set tag for container.
         */
        this.tag = 'div';
    }
    render() {
        const { border, centered, mainContainer, margin, padding, size, tag } = this;
        const Tag = tag;
        return (h(Host, { key: '158cd288fe99ffdcc6d6d98ed0679521989516ab' }, h(Tag, { key: '64af2b520df43454dce4e7154533192484bcf502', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, h("slot", { key: 'd396a7a600b82d553fd23674400677cbdd2e9a06' }))));
    }
    get el() { return getElement(this); }
};
GcdsContainer.style = gcdsContainerCss;

const I18N$l = {
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

const GcdsDateInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsError = createEvent(this, "gcdsError");
        this.gcdsValid = createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Specifies if the date input is disabled or not.
         */
        this.disabled = false;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * States
         */
        /**
         * State to track individual month value
         */
        this.monthValue = '';
        /**
         * State to track individual month value
         */
        this.dayValue = '';
        /**
         * State to track individual month value
         */
        this.yearValue = '';
        /**
         * Specifies if the date input is invalid.
         */
        this.hasError = {
            day: false,
            month: false,
            year: false,
        };
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
    watchValue() {
        if (this.value) {
            this.splitFormValue();
            this.internals.setFormValue(this.value);
        }
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Call any active validators
     */
    async validate() {
        this.hasError = handleValidationResult(this.el, this._validator.validate(this.format === 'full'
            ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
            : `${this.yearValue}-${this.monthValue}`), this.legend, this.gcdsError, this.gcdsValid, this.lang, { day: false, month: false, year: false });
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
        if (format === 'full') {
            this.value = `${yearValue}-${monthValue}-${dayValue}`;
        }
        else if (format === 'compact') {
            this.value = `${yearValue}-${monthValue}`;
        }
        this.internals.setFormValue(this.value);
        return true;
    }
    /**
     * Split value into parts depending on format
     */
    splitFormValue() {
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
        // Assign required validator if needed
        requiredValidator(this.el, 'date-input');
        this.validateValidator();
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-input', this.errors);
        }
        this.watchValue();
        if (this.value && isValidDate(this.value)) {
            this.splitFormValue();
            this.setValue();
            this.initialValue = this.value;
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
        const month = (h("gcds-select", Object.assign({ key: '7036ccea3931372a5a182a6a392db606045a0da5', label: I18N$l[lang].month, selectId: "month", name: "month", defaultValue: I18N$l[lang].selectmonth, disabled: disabled, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), value: this.monthValue, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage }), options.map(option => (h("option", { key: option, value: option }, I18N$l[lang]['months'][option])))));
        const year = (h("gcds-input", Object.assign({ key: 'b0be7d9e018a48119d9448035e4c5ec1d5eaf85f', name: "year", label: I18N$l[lang].year, inputId: "year", type: "number", size: 4, disabled: disabled, value: this.yearValue, onInput: e => this.handleInput(e, 'year'), onChange: e => this.handleInput(e, 'year'), class: `gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}`, "validate-on": 'other' }, requiredAttr, { "aria-invalid": hasError['year'].toString(), "aria-description": hasError['year'] && errorMessage })));
        const day = (h("gcds-input", Object.assign({ key: 'aff040a276b1fa0e1258ced275b4b46813dec447', name: "day", label: I18N$l[lang].day, inputId: "day", type: "number", size: 2, disabled: disabled, value: this.dayValue, onInput: e => this.handleInput(e, 'day'), onChange: e => this.handleInput(e, 'day'), "validate-on": 'other', class: `gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['day'].toString(), "aria-description": hasError['day'] && errorMessage })));
        return (h(Host, { key: '57441b137fd61b30700f5df2858fd0e196565d69', name: name, onBlur: () => this.onBlur() }, this.validateRequiredProps() && (h("fieldset", Object.assign({ key: 'b854c9516c33aff4409a3e321501a9b4337138a1', class: "gcds-date-input__fieldset" }, fieldsetAttrs), h("legend", { key: '499c80dd1000be586698ab3e2cd495d1a91b0187', id: "date-input-legend" }, legend, required ? (h("span", { class: "legend__required" }, I18N$l[lang].required)) : null), hint ? (h("gcds-hint", { id: "date-input-hint", "hint-id": "date-input" }, hint)) : null, errorMessage ? (h("div", null, h("gcds-error-message", { id: "date-input-error", messageId: "date-input" }, errorMessage))) : null, format == 'compact'
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
        "value": ["watchValue"],
        "validator": ["validateValidator"]
    }; }
};
GcdsDateInput.style = gcdsDateInputCss;

const I18N$k = {
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

const GcdsDateModified = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Set date modified type. Default is date.
         */
        this.type = 'date';
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-date-modified', this.errors);
        }
    }
    render() {
        const { lang, type } = this;
        return (h(Host, { key: 'cda63407c2b6dc57f860d505f61a9f78c15c96b3' }, this.validateRequiredProps() && (h("dl", { key: '3324ca2c0c64c5f89c4a398344f3892fb1637073', class: "gcds-date-modified" }, h("dt", { key: '46bb18c35af4cfccd2e8cc71943fb3bee51de503' }, h("gcds-text", { key: 'd9b12fc046a396ba12817b210eb100980c59d720', display: "inline", "margin-bottom": "0" }, type === 'version' ? I18N$k[lang].version : I18N$k[lang].date)), h("dd", { key: 'cc81cb879d8fc1a06832aa6f80d29c179892afc7' }, h("gcds-text", { key: 'cebba414553c7357b8bf9033d4d84e2a2ec03521', display: "inline", "margin-bottom": "0" }, type === 'version' ? (h("slot", null)) : (h("time", null, h("slot", null)))))))));
    }
    get el() { return getElement(this); }
};
GcdsDateModified.style = gcdsDateModifiedCss;

const gcdsDetailsCss = "@layer reset, default, hover, focus, print;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font-desktop);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n        --gcds-details-default-decoration-thickness\n      );text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-details .details__summary{font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:\"\";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding);position:relative}:host .gcds-details .details__panel summary{display:none}:host .gcds-details .details__panel:before{background-color:var(--gcds-details-panel-border-color);content:\"\";display:block;height:100%;left:0;position:absolute;top:0;width:var(--gcds-details-panel-border-width)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin-block-end:var(--gcds-details-panel-slotted-margin)!important;margin-block-start:0!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(\n          --gcds-details-panel-slotted-margin\n        )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-mobile)}}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}@layer print{@media print{:host .gcds-details .details__summary{color:var(--gcds-details-print-summary-text);font-weight:var(--gcds-details-print-summary-font-weight);text-decoration:none}:host .gcds-details .details__summary:before{transform:rotate(90deg)}:host .gcds-details .details__panel{clip-path:none;clip:auto;border-left:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);display:block;height:auto;overflow:visible;position:static;white-space:normal;width:auto}}}";

const GcdsDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        /**
         * Defines if the details panel is open by default or not.
         */
        this.open = false;
        /*
         * Handle the details being toggled by other means (e.g., ctrl+f)
         */
        this.handleToggle = (ev) => {
            this.open = !this.open;
            this.open = ev.target.open;
        };
    }
    /**
     * Listen to beforeprint and afterprint events to handle details state
     * when printing. This ensures that the details are open when printing,
     * and closed after printing if they were closed before.
     */
    handleBeforePrint() {
        if (!this.open) {
            this.toggle();
            this.detailsElement.setAttribute('data-was-closed', 'true');
        }
    }
    handleAfterPrint() {
        var _a;
        if (((_a = this.detailsElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-was-closed')) === 'true') {
            this.toggle();
            this.detailsElement.removeAttribute('data-was-closed');
        }
    }
    /**
     * Methods
     */
    /*
     * Toggle details open or closed
     */
    async toggle() {
        this.open = !this.open;
        this.detailsElement.open = this.open;
    }
    render() {
        const { detailsTitle, open } = this;
        return (h(Host, { key: '165e069eb5507fe81e7f2e3f23d70cf3e5979aa7' }, h("div", { key: 'a9bbede603871396dcdbfe6d8a4a25952b611f58', class: "gcds-details" }, h("button", { key: 'fa1db12503e14a3e99781759a3fc5f1544a24235', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), h("details", { key: 'b63ec18b239b98bbb308989a4b71d4bda95372be', open: open, id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary", onToggle: ev => this.handleToggle(ev), ref: element => (this.detailsElement = element) }, h("summary", { key: 'f64cf84f9a239e19e8978e8511b94bc7b2e7dfc0' }, detailsTitle), h("slot", { key: 'd438628d3f47d1a15f4e03a603a86f08bf25a658' })))));
    }
    get el() { return getElement(this); }
};
GcdsDetails.style = gcdsDetailsCss;

const gcdsErrorMessageCss = "@layer reset, default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message gcds-icon,:host .error-message::part(text){color:var(--gcds-error-message-text-color)}}";

const GcdsErrorMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { messageId } = this;
        return (h(Host, { key: '045fc9bca1001d5ad8a083333b64293c8152c4e5', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, h("gcds-text", { key: 'de9f869bdbe90f798821bffbe8aa9e930d703544', class: "error-message", role: "alert", "margin-bottom": "75" }, h("gcds-icon", { key: '0f579edfda3b98171166c90ee6b87d4e025762da', name: "warning-triangle", "margin-right": "50" }), h("strong", { key: '92704a625f29719fc7f31426fb6d20756213de30' }, h("slot", { key: '657508619840d11cfdd81fb207de294bc1256de7' })))));
    }
    get el() { return getElement(this); }
};
GcdsErrorMessage.style = gcdsErrorMessageCss;

const I18N$j = {
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

const GcdsErrorSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        /**
         * Specifies if the error summary should listen for GcdsError event to generate error list.
         */
        this.listen = true;
        this.errorLinksObject = {};
        /**
         * Queue of erros
         */
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
        const target = `[for=${id.replace('#', '')}]`;
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
        return (h(Host, { key: 'a42f126a2bbbe41621a5c56d04c87b31e87d0363' }, h("div", { key: 'eeee2e16453b3c7911042cabb079ab072d3bcd09', role: "alert", tabindex: "-1", ref: element => (this.shadowElement = element), class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0
                ? 'gcds-show'
                : ''}` }, h("gcds-heading", { key: '5c0aa122bc9f7a1dc250d856734d99befb88502e', tag: "h2", "margin-top": "0", "margin-bottom": "225" }, heading !== null && heading !== void 0 ? heading : I18N$j[lang].heading), h("ol", { key: '2fd12eca1a9ffe4f11aedfdd3b93d3a0becf7420', class: "summary__errorlist" }, (hasSubmitted || errorLinks) &&
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
GcdsErrorSummary.style = gcdsErrorSummaryCss;

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

const gcdsFileUploaderCss = "@layer reset, default, input, files, disabled, error, focus, active;@layer reset{:host{display:block}:host .gcds-file-uploader-wrapper{border:0;margin:0;padding:0}:host .gcds-file-uploader-wrapper button{cursor:pointer;font:inherit;outline:0}}@layer default{:host .gcds-file-uploader-wrapper{align-items:flex-start;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font-desktop);max-width:90%;transition:color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-file-uploader-wrapper{font:var(--gcds-file-uploader-font-mobile)}}:host .gcds-file-uploader-wrapper button{border-radius:var(--gcds-file-uploader-file-button-border-radius);transition:all .15s ease-in-out}}@layer input{:host .gcds-file-uploader-wrapper .file-uploader__input{display:inline-block;position:relative}:host .gcds-file-uploader-wrapper .file-uploader__input button{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);color:var(--gcds-file-uploader-button-text);font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-button-margin);padding:var(--gcds-file-uploader-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__input input{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}:host .gcds-file-uploader-wrapper .file-uploader__input input::-webkit-file-upload-button{cursor:pointer}:host .gcds-file-uploader-wrapper .file-uploader__input #file-uploader__summary{height:0;margin:0;overflow:hidden;visibility:hidden}}@layer files{:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);display:flex;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:not(:last-of-type){border-block-end:0}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:last-of-type{margin:var(--gcds-file-uploader-button-margin)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text{overflow:auto}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text::part(text){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button{align-items:center;background:transparent;border:0;color:var(--gcds-file-uploader-file-button-default-text);display:flex;font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-file-button-margin);padding:var(--gcds-file-uploader-file-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus) span{overflow:visible;text-decoration:underline var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(\n          --gcds-file-uploader-file-button-underline-offset\n        )}}@layer disabled{:host .gcds-file-uploader-wrapper.gcds-disabled{color:var(--gcds-file-uploader-disabled-text)}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled :is(.file-uploader__input,.file-uploader__uploaded-file){pointer-events:none}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file button{color:inherit}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button{background-color:var(--gcds-file-uploader-disabled-background);border-color:currentColor}}@layer error{:host .gcds-file-uploader-wrapper.gcds-error .file-uploader__uploaded-file{border-color:var(--gcds-file-uploader-file-danger-border-color)}}@layer hover{@media (hover:hover){:host .gcds-file-uploader-wrapper .file-uploader__input:not(:focus-within):hover button{background-color:var(--gcds-file-uploader-hover-button-background)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover{color:var(--gcds-file-uploader-file-button-hover-text)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover span{text-decoration-thickness:var(\n            --gcds-file-uploader-file-button-hover-decoration-thickness\n          )}}}@layer focus{:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__input:focus-within button,:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file button:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset)}}@layer active{:host .gcds-file-uploader-wrapper .file-uploader__input:has(input:active) button{background-color:var(--gcds-file-uploader-active-button-background);border-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}}";

const GcdsFileUploader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsRemoveFile = createEvent(this, "gcdsRemoveFile");
        this.gcdsError = createEvent(this, "gcdsError");
        this.gcdsValid = createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Specifies if a file uploader element is disabled or not.
         */
        this.disabled = false;
        /**
         * Value for a file uploader element.
         */
        this.value = [];
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
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
            this.gcdsChange.emit(this.value);
            this.el.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
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
        this._validator = getValidator(this.validator);
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
        handleValidationResult(this.el, this._validator.validate(this.shadowElement.files), this.label, this.gcdsError, this.gcdsValid, this.lang);
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
            this.gcdsChange.emit(this.value);
            this.el.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
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
        // Assign required validator if needed
        requiredValidator(this.el, 'file');
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
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
        return (h(Host, { key: '3c4798ba95cfb45c77e484ea3836968f7d3698e1' }, h("div", { key: '115b140d32698bb3983683c31daee9de34831f08', class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: 'cfe225f2311c2a75ec06bd5c26c031223385b9ab' }, attrsLabel, { "label-for": uploaderId, lang: lang })), hint ? h("gcds-hint", { "hint-id": uploaderId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: uploaderId }, errorMessage)) : null, h("div", { key: 'd185acf8dfa1ce7ba4fd20026d55dfb5b5bc77bf', class: `file-uploader__input ${value.length > 0 ? 'uploaded-files' : ''}`, onDrop: e => this.handleDrop(e), onDragOver: e => e.preventDefault() }, h("button", { key: '9a2288f444c5c259dc5bc0a6a4a035284634bd8e', type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N$i[lang].button.upload), h("input", Object.assign({ key: 'd90e7244310af4e497ce2002a1b05d058f8b2b45', type: "file", id: uploaderId }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) })), value.length > 0 ? (h("gcds-sr-only", { id: "file-uploader__summary" }, h("span", null, I18N$i[lang].summary.selected, " "), value.map(file => (h("span", null, file, " "))))) : (h("gcds-sr-only", { id: "file-uploader__summary" }, I18N$i[lang].summary.unselected))), value.length > 0
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
GcdsFileUploader.style = gcdsFileUploaderCss;

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
          text: 'Money and finances',
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
        life: {
          text: 'Manage life events',
          link: 'https://www.canada.ca/en/services/life-events.html',
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
          text: 'Argent et finances',
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
        life: {
          text: 'Gérer les événements de la vie',
          link: 'https://www.canada.ca/fr/services/evenements-vie.html',
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

const gcdsFooterCss = "@layer reset, default, contextual, main, sub, compact, medium, wide;@layer reset{:host{display:block}:host ul{list-style-type:none;margin:0;padding:0}:host slot{display:initial}:host gcds-link::part(link):not(:hover){text-decoration:none}:host .gcds-footer__sub ul li{display:block}}@layer default{:host{font:var(--gcds-footer-font)}:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-desktop)}:host .gcds-footer__header,:host .sub__header,:host .themenav__header{clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host [class$=__container]{justify-content:space-between;margin:var(--gcds-footer-container-margin);max-width:var(--gcds-footer-container-width);width:90%}:host nav{position:relative}:host [class$=__list]{display:grid;grid-template-columns:1fr;list-style:none;padding:var(--gcds-footer-list-padding);grid-gap:var(--gcds-footer-grid-gap)}:host [class$=__list] li gcds-link::part(link){color:var(--gcds-footer-main-text)}:host h3{font:var(--gcds-footer-font-heading);margin:var(--gcds-footer-heading-margin)}:host gcds-link::part(link){font:var(--gcds-footer-font)}}@layer contextual{:host .gcds-footer__contextual{background-color:var(--gcds-footer-contextual-background);color:var(--gcds-footer-contextual-text);container:component contextual/inline-size;margin-block-end:-1px}}@layer main{:host .gcds-footer__main{background-color:var(--gcds-footer-main-background);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAC9CAMAAAAwXXHOAAAAe1BMVEUAAAAYJjgbKDogIDkcOTkgMDgoKEMdJzgdKDcAAAAgKTkfLj4gKDgfKjgeJjgeKjgcKDgfJzhAQEAfKzceKDgdKDcdKjcAVVUhN0MeKDceKzcAAFUdKjgcKzkeLTwaMzMdKjcfKTYZJjIcKzkaKDgcKDgYKjgbKTgYKDjo9/gwAAAAKXRSTlMASTkoCSATe/8BUCHNSWXct1sEU+D9nQMXeIoD8zYiCsN1PST/bZK221OBjhQAAA8qSURBVHgB7NVVAUNRDAWwPr5jZp5/jwMR/Us0HAgAAAAAAAAAAAAAAAAAAAAgS1U3TRt/XdNHEqiGUurReBIxLUOQSNBm88VytRa0ZIK22Zbd/iBo2Vzn8XS+hKCRqDpdr7e4PyKe11ckger9Zdc+bGULYSAMj2uZMab/Bl/mJoWXLiuvNV8HiH/PYgSGMIdmFvhjZg7NHJoZEcRtZmQEbjOj5NDMoZlDM3No1kxIidvMUlowuy2lgtltS9qE2WUlTwN2H7fGTQMkrBtqYGhBWDMhjRs7KcKaSWnc2BkOrZ8lSRujpALWMjQOW1PCmil9F8PWtNCQbzekHLamgvUSmhda9DsLWOqHmramgHUMbU+bbxLWypLGjZ3V7wraSj/FsPmm0JCHTimHzTc7YI2E5oWWjRfk0Na00AKNWOqXcmgX2ZLuj50OzUoHh/14Em1Y5NaRgSGq26HTUm/UrBubTZhDe8CiAheZQ1uPuBk0hxaPGKPNobHZciz4PjSmv2gXWOmDTQ8DduMa4KOYFFqiBQsdVXvQ3lTPZwJ+xL1IxJzbdO53w42RPUJbQACsKXsTzU6cDm3pbEec/dl4fvn+xGmMZIPQCj9D45TQlo6EgVnKDjuyfjQ/KLTSsWAAI7PLXyeCI/46480scE6cRAs+o+ln7lwDQstz1nwzDSR6cGh7EYilIV+01KtoFJpDk3bVloZ80ZZeJcBEEw7teP7QikDp1QJi+bl+Ep/NoXHrVQFZvt8Ih/a5vrJ3J8iJK0EQQCvPkplVdf8T/rBFB61vYYStMWCTMYA2b82j1Qti2A5rSuMFLcKMOwZVvQGtKhnPGmpAG0HkayIK94Vm5AY0w4xnDVSRmpNRr4moRNw3/m2nTqtZmlPsF7QXtKNjbcWvXide0A5NvqBthDIfAFq5ytnv988OrbSV+vPQKh4AGoLjH+u5obG1lWbcP68ajXFOqn9dE+31/kf/ROvhBe3VSKsXtB9oor0aaUjJeEE7LmhtpxF/ON5TqTv8gnZ7hdZlzcn4u2G9oP2TPmdXGkEtsV1/u9+JXZ/mWd0vaHuTGn8Ps7WEoy38Z2MT16u0Ur2g3dbpBJylke7uPz2+wUKA14bS2Gq+oO0MtJ0/DQ1CICj5WtE5vpoXtHb/dWi5QCMyLoeWlIwb8oJWTI048o9DY5FEIGB+7kwy/ym0mtK/ABrCtE7mgv23oUEIMBCQr54K/Hqb0A3QGAyfCy7/MDRGpDygZQTvCq0M1/vdnaBhvfJtaDGgYSz+VWhkyeEIBGHyvtAQEXBEsO4DzeuVY6CNRfxlaJKIBVqAKdwVGge0uBO05LzygnZYqKJjQAsLsRVCOro3AD4gtMJ5mfUNsBehOf5koIwFmhnmJWjQiOOo2I8Hje0YCTe/DvYitPqr0IpFNqIcKf1xaFDOvxIOaAnkq0abBRmdURfLAVLa6d8OzXOFk/KrjfYPhq8a/Rk0RAR/O7RUcyyzlS9ox0Jrd7sq+97QAMAJAPeBVhMESv2CdiC0ZmZUhSvqX0LjuF/CLnyA5rekfaeZAc6vNEjNx4BGgPF0sWOEASnDiHIgwxL+GTSP+yUp1aVTJxZoxTu0WHP+jXBEZ+AAaBLj6QLEEhphyZGMdLACljfn1iFVZta3oPEtu6ClluAODYmah8L8GNAs5RPXaBTYSkZFlCOKkSpCvNDrtOsb0Fpvae6AVlriO0BLTtBya84udgRHQmNLxXi2ZK4Ko4K5QLNHk3z71ImI/DY07YDGPvqKIe+/Sgdz8xUbFnFcG42xI6xeGhLxXGHVqjAc9glajuuh7gvtH1xtm/t7nZwaRrVFsWIz4M3QiJuGOhlPFai5LoxEvN/YDO+p0bhoI/GFSx25vJBRUuEKtGZ8P+Q7NB8AjWGpHdysNG+GBt801Il4qiw9y3PrgWySCZICKUn5CbQ0gx0Rkb2cWjjcxhL6tM7zIyLQo7jYCL6v1SVoR5YtHChGHQDNWZIqt4AUbm6juX4ztJSWko+l0LIqz3fVkvoTaNKAVpISgI33JN5CuPiezOWxEJERqSUZkIPaBc3x/djVatfuNtrlcTRfbjuyfTO0auzDv8RPd1V6BevcrbLfln2qypFS7YHm1s50MokeazxD6/bn0PK4WbY6YHjDl9uOVt06qc7eY4edlqRMM54oXJ7rikCDzYjigLbwIwufQatgB7P19VTmkPQ5tIrvp3Z/ugprOo4tqbgJrRng5VnSwUsgUHpPvmUNzbv+PmRw+TriCWfRmyyHvehaoC3mkOHiJ9Aa7Codk21oR/YGsH+sBJokbI30pE5BJDcnr0a84wLi2qMfVcSpyZHJZ/wM3yKLEfYZ2gKPkb4IbeRnoMk2D/qDi/ug5apOiiksnWK2Pw71fnYBcb1FkjDblHe/TipsxBNCay+eEmdoyIhwBhv3hzaCoz5L1vtq+5oLynFJjz8Ua/MytI3OgPe1DWZoT/kGtAo2Y7kb0FjvdwwXfwZafXz3Rh4KzRpR3QStPpxv2RegjV3YD21Ibvx6aFhwOeMMLZLLJpZ/CFqeUroUHPURn43boXnjzLmk/OEE50+hcQVtsM1fD62rGRGJGZodSyWHRkzJ46Ft5Xhobp2T+9tom52B1Bx/8MxPoeWAtjqi+cuhjZIqztCQY9o9ay62flZoqSnNPdD8BWi+XqO5sYKWV/88cgWNzwUNGilOb+UoTxMpaIPKGGHpSaGxt2wcX6NRb8m9n4+GStZ2NevyWMx2eK6S8zmheSF1AjbA1fu9iu7yVAsOaOXM0V7PsdynhXTXer9G1JnLv/pBaNYqxX3Q3N09+uZ7oGHUmPvG0WY97VVSg1OWHP20n+jtdYU2iqtrnn7D22qNP5k9QcsAhlaM5Qpw6TDUej9XzwsjOCZi0EvRWWN1PC5uM13O+jo0AhG1H+0MDXMt4vRWZ0Bd57QkMLu6q97u+lNo0TtGfEoyW3Pq2Wq0ZLVXb+PrHA651NoMdGFZ0QwN9kmHPJbrtGBUrfdvVABYlNcYY1mqgtTyWEt5EhGIwJehoVS31WhTrxMzp1ZXdXW3Pg0itSMgydbllAe0D2k+WY3GcMdiiOOSpIhJHoSIHKfXGdrN2YZ2+lYZUWN1PC7Q/C1orJJMUqs49kCDSzdnQDsgnbwATc8HLTNIogTAdqr9FljJt8gRHLPCzwctv9TcS30nRumTJOq20cXe2sHngobwtTNBV5VGjoCWPiUljT5BZfZYPf/QApyAAR8KrXk0tP0pBkvfzvNBU6XtUgIArSLeYtl2tmoN8bmGN3gBWtwPmiPC+ka6+qmgYfmrfRquFdafokNhtN2I1BTDQOlH0tXVN0IDpmXdAVqxr1RF0MWYLTWtOY1pPQP9dNBwGVpjQIvwsXhqvCyvJgNRRdB7odFlg2P5SGiVWVlVWedfvqpWt7dk9Mbez6E1OXaXlAHNqeDsOOoZT50DGtfQYgx7XIZWrrHY6ezTQvWy0/OG+ZAgu4KLdBCWigBLTYA5VsdHWFfc0BkYw3Ek0tIx0Exa8scZejPI6ZaSTqOrydUeXoEWu6FpBzQ8HrS8Bg2XqvriAKj2fN2cW0pGcN7QY0F9GhbGVOy5PL01X/af16DBhZjDjUbZMdAi1tDyvGOEY/uAFqv8KLTsR4NGtBwR7P4/tMrlqOIlaOftOb6jV9eqcWzI88IZGr8HjU6J6w2gtSfNGCHSV6FVVUk9ZexYZ1TmvbHrMrQVpXRJ5dScct4Cza0HnIJaoKljA9rAw3ECAQ6DNmagAEsFAKUGgByry49kFkmvoY2qC4kATSCQ2h/O3wY/2uvcbopUWntT1VegSfEwQc8TtD5DqwGtlsPW/6cM90DLz6GNfGt4g1qSJ7BZX/lWbkkwgjSJa52BVme936RyjW2n28hYHijKdRXakeNozAeC5p6bVyz5/1clun2SlhHuAe37NZoyO6uzDoFmWrcn17PjRUqS19DM1hKAHj0nywEta2pGje0aWfaryK5lf34JWldfh0YsRW1yHk94OGfKpbybA9pYOk+3N5ai91sOqNEYDjqgkXOvEzBLSp78NNBmJlMSGOdY30luVouFNbSoM3FIDAjB99uypgq6GRaDGsGynBGZERY9gyFWv3yyB+qmNdK0KnLynqwBeRpHQypP7VVj6ZO47wmNxLSSvWoWW8qPl7+WihHBvjBrUnbeCs1LG80Ra2g5/c/GOdWdFVEIYzl4ftXWhp6sL0KrU4HcBo1SZakjLHwCbbMLO4LI5aFWfcsMqsf7wmscOJ6yAS2yJJDQW8oEy6U7QqNV2JqX8ekE4o8X9KeEsxJrM9+Axv9/g7wGTUozgsSWMyGsnSkjIgitU7wIjVvQ3nIztMK8jZHjIcPb0HL113VwQMvWhcR9gpREbjR1x1Pqc42GiJUOS833e9tuzfnJGm1Qy9R2TGp3ENxwSeKWU+eoYSwE9kLTRWiTm+Jn0LQUMEsPBW38QpUkQdRoBEg9RnUcLOP0LC8Z9Rwk5Tu0ZeuqF7Yk8ZaUjLfUacHnDedD1EACxg3QDOvgmOnSxyQHNJ0PSNuSnUpb6dSyNvbWqmeZ9qlpUTWOmtPchLZx3DVoejRoWjLXzfW+XEMSAlKaE7ScoBVT6mF2eiUflK6q6vGgestpe1f1MW8E25cB7YeyDW1kExoHND8uNGjEYalBBi3J5ocxJsmrrkOTqM1e54PEAX07noc3Nh2XS4cFN0IbIeF6NGj+2C0zF0j8WGr48KldpTnfhVakpSRTByeD+nZyo42mJtQMH+d5xK7boY08ADQmyLkrsD1NzPpkXPRwaOsuXEAHx5n/ClpANQoSpI4OXNeg8RGhwWPYiUB//taLi9BqQOsngXZI0t6G1oTukanqfzho41ezndrOdWgsJf8eNKm8eep8qsQPhLFtaO/oJhkRXCrFdETwAjTAvwza/k7sCxozsaeAMlIX0mmjRs8rgjo0/x6aXol/HLoOuYLiHAd9NDRSAuH/2rtXI4tiIAaidizSfPKPcGvBpQ9ZrA+ZBLqGykg5YeXXpsdv7a4Rlv9nSSC0K527jgKhadw1TgCh6buSY0BodWtuSe0cENr9xlvbOSA0+V/XHceA0DROA6HptNNAaJoqh4HQ1E4CoamqZ9c5IDTVrMNAaBrHgdDuOg+E1s4DoWmcBkJTrdNAaGrngdDaT4DQ9jc/AULzM8Af2qL98u71t1EAAAAASUVORK5CYII=);background-position:100% 100%;background-repeat:no-repeat;color:var(--gcds-footer-main-text);container:component main/inline-size}:host .gcds-footer__main nav:first-of-type:after{border-block-end:var(--gcds-footer-main-nav-first-after-border-width) solid var(--gcds-footer-main-nav-first-after-border-color);content:\"\";display:block;margin:var(--gcds-footer-grid-gap) 0;width:var(--gcds-footer-main-nav-first-after-width)}:host .gcds-footer__main nav.main__themenav .themenav__list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(19,1fr)}}@layer sub{:host .gcds-footer__sub{background-color:var(--gcds-footer-sub-background);container:component sub/inline-size}:host .gcds-footer__sub .sub__container{display:grid;grid-gap:var(--gcds-footer-grid-gap);grid-template-areas:\"list wordmark\";grid-template-columns:3fr 1fr}:host .gcds-footer__sub .sub__container nav{align-items:center;display:flex;grid-area:list}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:flex;grid-area:wordmark}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{align-self:end;margin:var(--gcds-footer-sub-signature-margin);max-height:var(--gcds-footer-sub-signature-max-height);min-width:var(--gcds-footer-sub-signature-min-width);width:var(--gcds-footer-sub-signature-width)}}@layer compact{@media only screen and (width < 48em){:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-mobile)}}@container sub (width <= 30em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{max-height:var(--gcds-footer-sub-signature-sm-max-height);width:var(--gcds-footer-sub-signature-sm-width)}}}@layer medium{@container contextual (width >= 45em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr}}@container main (width >= 45em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(10,1fr)}}@container sub (width < 60.2em){:host .gcds-footer__sub .sub__container{display:block}:host .gcds-footer__sub .sub__container ul li{margin:0 0 var(--gcds-footer-grid-gap)}}}@layer wide{@container contextual (width >= 60.2em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr 1fr}}@container main (width >= 60.2em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(7,1fr)}}@container sub (width >= 60.2em){:host .gcds-footer__sub .sub__container ul li{display:inline-block;margin-block-end:0}:host .gcds-footer__sub .sub__container ul li:first-of-type:before{content:\"\";margin:0}:host .gcds-footer__sub .sub__container ul li:before{content:\"\\2022\";display:inline;margin:var(--gcds-footer-sub-listitem-before-margin)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:inline-block}}}";

const GcdsFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        /**
         * Props
         */
        /**
         * Display mode of the footer
         */
        this.display = 'compact';
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
        return (h(Host, { key: 'b3085c45d846bacbff55a8eb9b1c00a89430886b', role: "contentinfo", "aria-label": "Footer" }, h("gcds-sr-only", { key: '606efe8477781956571e6f5f491a33a3a62f04b4', tag: "h2" }, I18N$h[lang].about), contextualLinksObject && contextualHeading && (h("div", { key: 'f4dc0c8107d91eed92c48a29bea4d11cc27ca1aa', class: "gcds-footer__contextual" }, h("div", { key: '2be8f275989cfc74bf6b2df084ca4728672df764', class: "contextual__container" }, h("nav", { key: '0e95de45f38aa31290b69802459dd8b613bce6fe', "aria-labelledby": "contextual__heading" }, h("h3", { key: 'cfcf705300e7697459313ac429a1cfdc18dd3bd2', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), h("ul", { key: 'e40575b0fb05baf1755e4f6112aa653b971d05c5', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (h("li", null, h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (h("div", { class: "gcds-footer__main" }, h("div", { class: "main__container" }, h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, h("h3", { id: "govnav__heading" }, I18N$h[lang].gov.heading), h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N$h[lang].themes.heading), h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (h("li", null, h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, h("div", { key: 'f22c6b3df1149c3c5f8be387f8e8f6409474703f', class: "gcds-footer__sub" }, h("div", { key: '81e35cd5397e1a9f0c373e14d1f16568c70eb690', class: "sub__container" }, h("nav", { key: 'ee7c37a240a121893142c51f887d49ad98add671', "aria-labelledby": "sub__heading" }, h("gcds-sr-only", { key: '75fef71daa19b43442a973ac70053a7ce90c7a6e', tag: "h3", id: "sub__heading" }, I18N$h[lang].site.heading), h("ul", { key: '4d3f7e2cb406dd420def9b0580892bb54d985269' }, subLinks
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
GcdsFooter.style = gcdsFooterCss;

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
        /**
         * Defines if grid container is centered or not
         */
        this.centered = false;
        /**
         * Defines element as grid or inline-grid container
         */
        this.display = 'grid';
        /**
         * Sets all grid items to have an equal height,
         * based on the tallest item.
         */
        this.equalRowHeight = false;
        /**
         * Defines the horizontal and vertical spacing between items in
         * a grid container for all viewports if gap-tablet and gap-desktop
         * are not defined. Option to set different spacing for desktop
         * with gap-desktop and for tablet with gap-tablet.
         */
        this.gap = '300';
        /**
         * Set tag for grid container
         */
        this.tag = 'div';
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
GcdsGrid.style = gcdsGridCss;

const gcdsGridColCss = "@layer reset, default, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid-col{box-sizing:border-box;display:block;margin:0;padding:0}}@layer default{:host{grid-column:span var(--gcds-grid-columns-default-base) /span var(--gcds-grid-columns-default-base)}:host .gcds-grid-col{height:100%;width:100%}}@layer tablet{@media screen and (width >= 48em){:host{grid-column:span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet)) /span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet))}}}@layer desktop{@media screen and (width >= 64em){:host{grid-column:span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop)) /span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop))}}}";

const GcdsGridCol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "tablet": ["validateTablet"],
        "desktop": ["validateDesktop"]
    }; }
};
GcdsGridCol.style = gcdsGridColCss;

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

const GcdsHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        /**
         * GcdsSignature - GCDS signature links to Canada.ca
         */
        this.signatureHasLink = true;
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
        return (h(Host, { key: 'a7aec791ab78ca2491fd9dfc043e3b42453de2a4', role: "banner" }, renderSkipToNav, hasBanner ? h("slot", { name: "banner" }) : null, h("div", { key: '1ffdfb16dbd583dc45d65edde526f10ca5445d3d', class: "gcds-header__brand" }, h("div", { key: 'fd921bdd08e088d99849ee37e67ff70502630cfb', class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), h("slot", { key: '6ace8183cce4cf7de0c04c99763194f002ea4e3f', name: "menu" }), hasBreadcrumb ? (h("div", { class: "gcds-header__container" }, h("slot", { name: "breadcrumb" }))) : null));
    }
    get el() { return getElement(this); }
};
GcdsHeader.style = gcdsHeaderCss;

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

const GcdsHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the line length to a maximum amount of characters per line for
         * each heading level, ensuring a comfortable, accessible reading length.
         */
        this.characterLimit = true;
        /**
         * Adds margin below the heading. The default margin-botttom is 300.
         */
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
        return (h(Host, { key: '507c9c3fc2b151e9e529b3f155bc07394aa8fbb4' }, h(Tag, { key: '6a24d145608e7f8bec9bb7282c02b7a2d3c030d4', class: `
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, h("slot", { key: 'fc7c907330d467d951a008b36379c34b8bdfcf5f' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "tag": ["validateTag"],
        "marginTop": ["validateMarginTop"],
        "marginBottom": ["validateMarginBottom"]
    }; }
};
GcdsHeading.style = gcdsHeadingCss;

const gcdsHintCss = "@layer reset, default;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-hint,:host gcds-text::part(text){color:var(--gcds-hint-text)}:host .gcds-hint{margin:var(--gcds-hint-margin)}}";

const GcdsHint = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { hintId } = this;
        return (h(Host, { key: '61a3e7529f1f8cdab787a3be7f6b1d38b06cf29d', id: `hint-${hintId}` }, h("gcds-text", { key: '32304bb4004c7357f63ea4c04b39be5fa1b491a8', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, h("slot", { key: '2313fb6ca5b5fde4572e522c86d249508eecf900' }))));
    }
    get el() { return getElement(this); }
};
GcdsHint.style = gcdsHintCss;

const I18N$e = {
  en: {
    nameError: 'gcds-icon: Invalid name.',
  },
  fr: {
    nameError: 'gcds-icon: Nom invalide.',
  },
};

const gcdsIconCss = "@layer reset, default, names, margin, size;\n@layer reset {\n  :host {\n    display: inline-block;\n  }\n  :host :host .gcds-icon {\n    font-size: inherit;\n    line-height: inherit;\n    color: inherit;\n  }\n}\n@layer default {\n  :host .gcds-icon {\n    font-family: var(--gcds-icon-font-family) !important;\n    speak: never;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n@layer names {\n  :host .gcds-icon-checkmark-circle:before {\n    content: \"\\e908\";\n  }\n  :host .gcds-icon-chevron-down:before {\n    content: \"\\e900\";\n  }\n  :host .gcds-icon-chevron-left:before {\n    content: \"\\e901\";\n  }\n  :host .gcds-icon-chevron-right:before {\n    content: \"\\e902\";\n  }\n  :host .gcds-icon-chevron-up:before {\n    content: \"\\e903\";\n  }\n  :host .gcds-icon-close:before {\n    content: \"\\e90b\";\n  }\n  :host .gcds-icon-download:before {\n    content: \"\\e906\";\n  }\n  :host .gcds-icon-email:before {\n    content: \"\\e905\";\n  }\n  :host .gcds-icon-exclamation-circle:before {\n    content: \"\\e909\";\n  }\n  :host .gcds-icon-external:before {\n    content: \"\\e904\";\n  }\n  :host .gcds-icon-info-circle:before {\n    content: \"\\e90a\";\n  }\n  :host .gcds-icon-phone:before {\n    content: \"\\e90c\";\n  }\n  :host .gcds-icon-search:before {\n    content: \"\\e907\";\n  }\n  :host .gcds-icon-warning-triangle:before {\n    content: \"\\e90d\";\n  }\n}\n@layer margin {\n  :host .gcds-icon {\n    /* Margin left */\n  }\n  :host .gcds-icon.ml-0 {\n    margin-inline-start: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.ml-25 {\n    margin-inline-start: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.ml-50 {\n    margin-inline-start: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.ml-75 {\n    margin-inline-start: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.ml-100 {\n    margin-inline-start: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.ml-125 {\n    margin-inline-start: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.ml-150 {\n    margin-inline-start: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.ml-175 {\n    margin-inline-start: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.ml-200 {\n    margin-inline-start: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.ml-225 {\n    margin-inline-start: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.ml-250 {\n    margin-inline-start: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.ml-300 {\n    margin-inline-start: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.ml-350 {\n    margin-inline-start: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.ml-400 {\n    margin-inline-start: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.ml-450 {\n    margin-inline-start: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.ml-500 {\n    margin-inline-start: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.ml-550 {\n    margin-inline-start: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.ml-600 {\n    margin-inline-start: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.ml-650 {\n    margin-inline-start: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.ml-700 {\n    margin-inline-start: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.ml-750 {\n    margin-inline-start: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.ml-800 {\n    margin-inline-start: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.ml-850 {\n    margin-inline-start: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.ml-900 {\n    margin-inline-start: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.ml-950 {\n    margin-inline-start: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.ml-1000 {\n    margin-inline-start: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.ml-1050 {\n    margin-inline-start: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.ml-1100 {\n    margin-inline-start: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.ml-1150 {\n    margin-inline-start: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.ml-1200 {\n    margin-inline-start: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.ml-1250 {\n    margin-inline-start: var(--gcds-icon-margin-1250);\n  }\n  :host .gcds-icon {\n    /* Margin right */\n  }\n  :host .gcds-icon.mr-0 {\n    margin-inline-end: var(--gcds-icon-margin-0);\n  }\n  :host .gcds-icon.mr-25 {\n    margin-inline-end: var(--gcds-icon-margin-25);\n  }\n  :host .gcds-icon.mr-50 {\n    margin-inline-end: var(--gcds-icon-margin-50);\n  }\n  :host .gcds-icon.mr-75 {\n    margin-inline-end: var(--gcds-icon-margin-75);\n  }\n  :host .gcds-icon.mr-100 {\n    margin-inline-end: var(--gcds-icon-margin-100);\n  }\n  :host .gcds-icon.mr-125 {\n    margin-inline-end: var(--gcds-icon-margin-125);\n  }\n  :host .gcds-icon.mr-150 {\n    margin-inline-end: var(--gcds-icon-margin-150);\n  }\n  :host .gcds-icon.mr-175 {\n    margin-inline-end: var(--gcds-icon-margin-175);\n  }\n  :host .gcds-icon.mr-200 {\n    margin-inline-end: var(--gcds-icon-margin-200);\n  }\n  :host .gcds-icon.mr-225 {\n    margin-inline-end: var(--gcds-icon-margin-225);\n  }\n  :host .gcds-icon.mr-250 {\n    margin-inline-end: var(--gcds-icon-margin-250);\n  }\n  :host .gcds-icon.mr-300 {\n    margin-inline-end: var(--gcds-icon-margin-300);\n  }\n  :host .gcds-icon.mr-350 {\n    margin-inline-end: var(--gcds-icon-margin-350);\n  }\n  :host .gcds-icon.mr-400 {\n    margin-inline-end: var(--gcds-icon-margin-400);\n  }\n  :host .gcds-icon.mr-450 {\n    margin-inline-end: var(--gcds-icon-margin-450);\n  }\n  :host .gcds-icon.mr-500 {\n    margin-inline-end: var(--gcds-icon-margin-500);\n  }\n  :host .gcds-icon.mr-550 {\n    margin-inline-end: var(--gcds-icon-margin-550);\n  }\n  :host .gcds-icon.mr-600 {\n    margin-inline-end: var(--gcds-icon-margin-600);\n  }\n  :host .gcds-icon.mr-650 {\n    margin-inline-end: var(--gcds-icon-margin-650);\n  }\n  :host .gcds-icon.mr-700 {\n    margin-inline-end: var(--gcds-icon-margin-700);\n  }\n  :host .gcds-icon.mr-750 {\n    margin-inline-end: var(--gcds-icon-margin-750);\n  }\n  :host .gcds-icon.mr-800 {\n    margin-inline-end: var(--gcds-icon-margin-800);\n  }\n  :host .gcds-icon.mr-850 {\n    margin-inline-end: var(--gcds-icon-margin-850);\n  }\n  :host .gcds-icon.mr-900 {\n    margin-inline-end: var(--gcds-icon-margin-900);\n  }\n  :host .gcds-icon.mr-950 {\n    margin-inline-end: var(--gcds-icon-margin-950);\n  }\n  :host .gcds-icon.mr-1000 {\n    margin-inline-end: var(--gcds-icon-margin-1000);\n  }\n  :host .gcds-icon.mr-1050 {\n    margin-inline-end: var(--gcds-icon-margin-1050);\n  }\n  :host .gcds-icon.mr-1100 {\n    margin-inline-end: var(--gcds-icon-margin-1100);\n  }\n  :host .gcds-icon.mr-1150 {\n    margin-inline-end: var(--gcds-icon-margin-1150);\n  }\n  :host .gcds-icon.mr-1200 {\n    margin-inline-end: var(--gcds-icon-margin-1200);\n  }\n  :host .gcds-icon.mr-1250 {\n    margin-inline-end: var(--gcds-icon-margin-1250);\n  }\n}\n@layer size {\n  :host .gcds-icon.size-text-small {\n    font-size: var(--gcds-icon-font-size-text-small);\n    line-height: var(--gcds-icon-line-height-text-small);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text-small {\n      font-size: var(--gcds-icon-font-size-text-small-mobile);\n      line-height: var(--gcds-icon-line-height-text-small-mobile);\n    }\n  }\n  :host .gcds-icon.size-text {\n    font-size: var(--gcds-icon-font-size-text);\n    line-height: var(--gcds-icon-line-height-text);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-text {\n      font-size: var(--gcds-icon-font-size-text-mobile);\n      line-height: var(--gcds-icon-line-height-text-mobile);\n    }\n  }\n  :host .gcds-icon.size-h6 {\n    font-size: var(--gcds-icon-font-size-h6);\n    line-height: var(--gcds-icon-line-height-h6);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h6 {\n      font-size: var(--gcds-icon-font-size-h6-mobile);\n      line-height: var(--gcds-icon-line-height-h6-mobile);\n    }\n  }\n  :host .gcds-icon.size-h5 {\n    font-size: var(--gcds-icon-font-size-h5);\n    line-height: var(--gcds-icon-line-height-h5);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h5 {\n      font-size: var(--gcds-icon-font-size-h5-mobile);\n      line-height: var(--gcds-icon-line-height-h5-mobile);\n    }\n  }\n  :host .gcds-icon.size-h4 {\n    font-size: var(--gcds-icon-font-size-h4);\n    line-height: var(--gcds-icon-line-height-h4);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h4 {\n      font-size: var(--gcds-icon-font-size-h4-mobile);\n      line-height: var(--gcds-icon-line-height-h4-mobile);\n    }\n  }\n  :host .gcds-icon.size-h3 {\n    font-size: var(--gcds-icon-font-size-h3);\n    line-height: var(--gcds-icon-line-height-h3);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h3 {\n      font-size: var(--gcds-icon-font-size-h3-mobile);\n      line-height: var(--gcds-icon-line-height-h3-mobile);\n    }\n  }\n  :host .gcds-icon.size-h2 {\n    font-size: var(--gcds-icon-font-size-h2);\n    line-height: var(--gcds-icon-line-height-h2);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h2 {\n      font-size: var(--gcds-icon-font-size-h2-mobile);\n      line-height: var(--gcds-icon-line-height-h2-mobile);\n    }\n  }\n  :host .gcds-icon.size-h1 {\n    font-size: var(--gcds-icon-font-size-h1);\n    line-height: var(--gcds-icon-line-height-h1);\n  }\n  @media only screen and (width < 48em) {\n    :host .gcds-icon.size-h1 {\n      font-size: var(--gcds-icon-font-size-h1-mobile);\n      line-height: var(--gcds-icon-line-height-h1-mobile);\n    }\n  }\n}";

const GcdsIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Defines the size of the icon.
         */
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
        return (h(Host, { key: '9767ef8285004f25317ad156ac39d21a0267c6d3' }, h("span", { key: 'c7a3dfe9ed1b093e5a6d9a37bdc5c11e7154b462', class: `
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
GcdsIcon.style = gcdsIconCss;

const gcdsInputCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-input-wrapper{border:0;margin:0;padding:0}:host .gcds-input-wrapper input{box-sizing:border-box}}@layer default{:host .gcds-input-wrapper{color:var(--gcds-input-default-text);font:var(--gcds-input-font-desktop);max-width:75ch;transition:color .15s ease-in-out;width:100%}@media only screen and (width < 48em){:host .gcds-input-wrapper{font:var(--gcds-input-font-mobile)}}:host .gcds-input-wrapper input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);color:var(--gcds-input-default-text);display:block;font:inherit!important;height:auto;margin:var(--gcds-input-margin)!important;max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}:host .gcds-input-wrapper input[type=number]{-moz-appearance:textfield}:host .gcds-input-wrapper input[type=number]::-webkit-inner-spin-button,:host .gcds-input-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}}@layer disabled{:host .gcds-input-wrapper.gcds-disabled{color:var(--gcds-input-disabled-text)}:host .gcds-input-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-input-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-input-wrapper.gcds-disabled input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-input-wrapper input.gcds-error:not(:focus){border-color:var(--gcds-input-danger-border)}}@layer focus{:host .gcds-input-wrapper:focus-within input:focus{border-color:var(--gcds-input-focus-border);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-border);outline-offset:var(--gcds-input-border-width)}}";

const GcdsInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsError = createEvent(this, "gcdsError");
        this.gcdsValid = createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        // Array to store which native HTML errors are happening on the input
        this.htmlValidationErrors = [];
        this.inputTitle = '';
        this._validator = defaultValidator;
        /**
         * Props
         */
        /**
         * Specifies if an input element is disabled or not.
         */
        this.disabled = false;
        /**
         * Specifies if the label is hidden or not.
         */
        this.hideLabel = false;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Set Input types
         */
        // prettier-ignore
        this.type = 'text';
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        /**
         * Handling input and change events on input
         */
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null);
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            else {
                this.updateValidity();
            }
            customEvent.emit(this.value);
        };
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
    watchValue(val) {
        this.internals.setFormValue(val ? val : null);
    }
    /**
     * Read-only property of the input, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
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
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
    /**
     * Call any active validators
     */
    async validate() {
        handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
        // Native HTML validation
        if ((this.required && !this.internals.checkValidity()) ||
            !this.internals.checkValidity()) {
            if (!this.internals.validity.valueMissing) {
                this.errorMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
                this.inputTitle = this.errorMessage;
            }
        }
    }
    /**
     * Check the validity of gcds-input
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-input
     */
    async getValidationMessage() {
        return this.internals.validationMessage;
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
    /**
     * Update gcds-input's validity using internal input
     */
    updateValidity(override) {
        const validity = this.shadowElement.validity;
        this.htmlValidationErrors = [];
        for (const key in validity) {
            // Do not include valid or missingValue keys
            if (validity[key] === true && key !== 'valid') {
                this.htmlValidationErrors.push(key);
            }
        }
        // Add override values to HTML errors array
        for (const key in override) {
            this.htmlValidationErrors.push(key);
        }
        const validityState = override
            ? Object.assign(Object.assign({}, this.shadowElement.validity), override) : this.shadowElement.validity;
        let validationMessage = null;
        if (this.htmlValidationErrors.length > 0) {
            validationMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
        }
        this.internals.setValidity(validityState, validationMessage, this.shadowElement);
        // Set input title when HTML error occruring
        this.inputTitle = validationMessage;
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
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentDidLoad() {
        let lengthValidity;
        // maxlength/minlength validation on load
        if (this.value && (this.minlength || this.maxlength)) {
            if (this.minlength && this.value.length < this.minlength) {
                lengthValidity = { tooShort: true };
            }
            else if (this.maxlength && this.value.length > this.maxlength) {
                lengthValidity = { tooLong: true };
            }
        }
        this.updateValidity(lengthValidity);
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, value, hasError, autocomplete, autofocus, form, max, maxlength, min, minlength, pattern, readonly, step, inputTitle, inheritedAttributes, lang, } = this;
        // Use max-width to keep field responsive
        const style = {
            maxWidth: `calc(${size * 2}ch + 1.5rem)`,
        };
        const attrsInput = Object.assign({ disabled,
            required,
            type,
            autocomplete,
            autofocus,
            form,
            max,
            maxlength,
            min,
            minlength,
            pattern,
            readonly,
            step,
            value, title: inputTitle }, inheritedAttributes);
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
        return (h(Host, { key: '9e1013a5309943d7d31bdbe27b0c40ad50547f20' }, h("div", { key: '05bdd407c9d032b45363937f384cd3bb4656d450', class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: 'd089b67c3e41629c03b25298fd61b972d2e9df0c' }, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? h("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: inputId }, errorMessage)) : null, h("input", Object.assign({ key: 'b596e0a0f64de1592f76614dbd1141baa07cec4f' }, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
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
        "value": ["watchValue"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "aria-invalid": ["ariaInvalidWatcher"],
        "aria-description": ["ariaDescriptiondWatcher"]
    }; }
};
GcdsInput.style = gcdsInputCss;

const I18N$d = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsLabelCss = "@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-label{color:var(--gcds-label-text);cursor:pointer;display:block;font:var(--gcds-label-font-desktop);margin:var(--gcds-label-margin)!important;max-width:100%}@media only screen and (width < 48em){:host .gcds-label{font:var(--gcds-label-font-mobile)}}:host .gcds-label.label--hidden{height:0;margin:0;opacity:0;overflow:hidden;width:0}:host .gcds-label .label--required{font-weight:var(--gcds-label-required-font-weight);margin:var(--gcds-label-required-margin)!important}}";

const GcdsLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const { hideLabel, labelFor, label, required, lang } = this;
        return (h(Host, { key: '74bd8cdab28f3e11ad1af0e5d90ffbcdfeca4f3b', id: `label-for-${labelFor}` }, h("label", { key: 'a99ff6d66462b03f1b40759ada8dfe53eaa985ce', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}` }, h("span", { key: '1740af0193beae308a1227d729493c257e6ee813' }, label), required ? (h("span", { "aria-hidden": "true", class: "label--required" }, "(", I18N$d[lang].required, ")")) : null)));
    }
    get el() { return getElement(this); }
};
GcdsLabel.style = gcdsLabelCss;

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

const GcdsLangToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
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
        return (h(Host, { key: 'abb80842d149c0505fdfaeb1bea1d693f8ab7acd' }, h("div", { key: '544f51158c13552ca6d918a976851ae114d8b15b', class: "gcds-lang-toggle" }, h("gcds-sr-only", { key: 'ad847ef3d7b32528ac5a02d86907e7646a6133b6', id: "lang-toggle__heading", tag: "h2" }, I18N$c[lang].heading), h("gcds-link", { key: '7ed33cd0eee4468e60294eb449627a546128f9b8', size: "regular", href: href, lang: I18N$c[lang].abbreviation }, h("span", { key: 'd1586f4d7c5b2b0b16f5e123e0dbc1715e9a7616' }, I18N$c[lang].language), h("abbr", { key: '38bfded01448eeccd475feca0275d34cbb8745b3', title: I18N$c[lang].language }, I18N$c[lang].abbreviation)))));
    }
    get el() { return getElement(this); }
};
GcdsLangToggle.style = gcdsLangToggleCss;

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

const GcdsLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        /**
         * Props
         */
        /**
         * Sets the main style of the link.
         */
        this.variant = 'default';
        /**
         * Set the link size
         */
        this.size = 'inherit';
        /**
         * Sets the display behavior of the link
         */
        this.display = 'inline';
        /**
         * The target attribute specifies where to open the linked document
         */
        this.target = '_self';
        /**
         * Whether the link is external or not
         */
        this.external = false;
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
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
        return (h(Host, { key: '8cd9092b220f6cea2f5311e3053e0fbed489b40e' }, h("a", Object.assign({ key: '112763038c0564dd208a1172c28c26026c27b511', tabIndex: 0 }, attrs, { class: `gcds-link link--${size} ${display != 'inline' ? `d-${display}` : ''} ${variant != 'default' ? `variant-${variant}` : ''}`, ref: element => (this.shadowElement = element), target: isExternal ? '_blank' : target, rel: isExternal ? 'noopener noreferrer' : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href) }), h("slot", { key: '749225ef8d310a8499061c7b8e6831ea3d68cad0' }), target === '_blank' || external ? (h("gcds-icon", { name: "external", label: I18N$b[lang].external, "margin-left": "75" })) : download !== undefined ? (h("gcds-icon", { name: "download", label: I18N$b[lang].download, "margin-left": "75" })) : href && href.toLowerCase().startsWith('mailto:') ? (h("gcds-icon", { name: "email", label: I18N$b[lang].email, "margin-left": "75" })) : (href &&
            href.toLowerCase().startsWith('tel:') && (h("gcds-icon", { name: "phone", label: I18N$b[lang].phone, "margin-left": "75" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "variant": ["validateVariant"],
        "size": ["validateSize"],
        "display": ["validateDisplay"]
    }; }
};
GcdsLink.style = gcdsLinkCss;

const gcdsNavGroupCss = "@layer reset, defaults, sideNav, topNav, mobileNav, desktop, mobile, hover, focus;@layer reset{:host *{box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{align-self:flex-end;display:flex;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{align-items:center;background:transparent;border:0;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:flex;font:var(--gcds-nav-group-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}:host ul{list-style:none}}@layer sideNav{:host .gcds-trigger--expandable{font-weight:var(--gcds-nav-group-side-nav-trigger-font-weight);margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}}@layer topNav{:host .gcds-trigger--dropdown{padding:var(--gcds-nav-group-top-nav-trigger-padding);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration-color:transparent;text-underline-offset:var(\n      --gcds-nav-group-top-nav-trigger-underline-offset\n    );transition:all .25s ease-in-out}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(\n        --gcds-nav-group-top-nav-trigger-expanded-background-color\n      )}:host .gcds-trigger--dropdown gcds-icon{margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);order:2}}@layer mobileNav{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);flex-direction:row-reverse;justify-content:center;margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}:host([open].gcds-mobile-nav){background-color:var(--gcds-nav-group-mobile-background);height:100vh;left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding)!important;position:fixed;top:0;width:100%;z-index:100}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}:host .gcds-nav--expandable{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);left:0;margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}:host .gcds-nav--dropdown.dropdown-right{left:auto;right:0}:host(.gcds-mobile-nav)>.gcds-nav--expandable{display:block;padding:0}:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}:host(.gcds-mobile-nav-topnav)>.gcds-nav--expandable{display:flex}}}@layer mobile{@media only screen and (width < 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}:host([open]:not(.gcds-mobile-nav)) .gcds-nav-group__list{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}@media only screen and (48em < width < 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{align-self:flex-start;width:auto}}}@layer hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(\n          --gcds-nav-group-top-nav-trigger-hover-decoration-thickness\n        )}:host .gcds-trigger--expandable:hover{background-color:var(\n          --gcds-nav-group-side-nav-trigger-hover-background\n        )}}}@layer focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}";

const GcdsNavGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        /**
         * Has the nav group been expanded
         */
        this.open = false;
    }
    // Close dropdowns on focusout when on desktop screen size
    async focusOutListener(e) {
        if ((e.target === this.el || this.el.contains(e.target)) &&
            !this.el.contains(e.relatedTarget) &&
            this.navStyle.includes('dropdown') &&
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
            // Set the navStyle to 'dropdown' and add a class for alignment if specified
            this.navStyle = 'dropdown';
            // Get the alignment value from the parent + append the corresponding class
            const alignment = this.el.parentNode.getAttribute('alignment');
            if (alignment === 'right') {
                this.navStyle += ' dropdown-right';
            }
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
        return (h(Host, { key: 'e83cd752015541c3d3c66df11acea95bb47d328f', role: "listitem", open: open }, h("button", { key: 'c454fdad83340bfda53c6be88fad4d04832b616d', "aria-haspopup": "true", tabIndex: 0, "aria-expanded": open.toString(), ref: element => (this.triggerElement = element), class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggleNav();
                }
            } }, h("gcds-icon", { key: '6a2a04d5728d1b23860522b3419c054621abae4f', name: this.navStyle === 'expandable'
                ? open
                    ? 'chevron-down'
                    : 'chevron-right'
                : open
                    ? 'chevron-up'
                    : 'chevron-down' }), closeTrigger && open ? closeTrigger : openTrigger), h("ul", { key: 'be77203e415fe750b349dec603812cd8a8cb5bab', "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, h("slot", { key: '0e98b6827f549b1ff852d15dbbe7e4f8a0546c24' }))));
    }
    get el() { return getElement(this); }
};
GcdsNavGroup.style = gcdsNavGroupCss;

const gcdsNavLinkCss = "@layer reset, default, variants, hover, active, focus;@layer reset{:host .gcds-nav-link{box-sizing:border-box}:host .gcds-nav-link slot{display:initial}}@layer default{:host .gcds-nav-link{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:flex;font:var(--gcds-nav-link-font);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n      --gcds-nav-link-default-decoration-thickness\n    );text-underline-offset:var(--gcds-nav-link-default-underline-offset);transition:all .25s ease-in-out}@media only screen and (width < 64em){:host .gcds-nav-link{font:var(--gcds-nav-link-font-mobile);min-width:50%}}@media only screen and (width > 48em){:host .gcds-nav-link{max-width:var(--gcds-nav-link-default-max-width)}}:host .gcds-nav-link[aria-current=page]{pointer-events:none;text-decoration:none}}@layer variants{@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link{border-block:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:var(--gcds-nav-link-top-nav-margin);padding:var(--gcds-nav-link-top-nav-padding)}:host>.gcds-nav-link--topnav.gcds-nav-link:not(:hover){text-decoration-color:transparent}:host([slot=home])>.gcds-nav-link{font:var(--gcds-nav-link-top-nav-home-font);padding:var(--gcds-nav-link-top-nav-home-padding)}}:host>.gcds-nav-link--sidenav.gcds-nav-link{padding:var(--gcds-nav-link-side-nav-padding)}}@layer hover{@media (hover:hover){:host .gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text);text-decoration-thickness:var(\n        --gcds-nav-link-hover-decoration-thickness\n      )}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover,:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text)}:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{background-color:var(--gcds-nav-link-side-nav-hover-background)}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover{background-color:var(--gcds-nav-link-top-nav-hover-background)}}}@layer active{:host .gcds-nav-link[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text)}@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link[aria-current=page]{background-color:transparent;border-block-end-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-top-nav-text)}}:host>.gcds-nav-link--sidenav.gcds-nav-link[aria-current=page]{font-weight:var(--gcds-nav-link-active-font-weight)}}@layer focus{:host .gcds-nav-link:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);box-shadow:var(--gcds-nav-link-focus-box-shadow);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}";

const GcdsNavLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsClick = createEvent(this, "gcdsClick");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
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
        return (h(Host, { key: '69d1a5cf3b6ec8277ecbc0b994c679a85485f288', role: "listitem" }, h("a", Object.assign({ key: 'e6fa6df38ec8f39e69e6e030846353e969640680', class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href: href }, linkAttrs, { tabIndex: 0, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, href), ref: element => (this.linkElement = element) }), h("slot", { key: '77b17d920b3c8e9fed6467aff446f928d246cf19' }))));
    }
    get el() { return getElement(this); }
};
GcdsNavLink.style = gcdsNavLinkCss;

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

const GcdsNotice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * States
         */
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
        const valid = this.validateRequiredProps();
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
        return (h(Host, { key: '8a00f86f682e7a061c99658762079acc79d2277e' }, this.validateRequiredProps() && (h("section", { key: '04219293eafd3fe86c13826820644a02584a389d', class: `gcds-notice notice--type-${type}` }, h("gcds-icon", { key: '9d095dbcf44d3d39a408f55531164e76ae969b42', class: "notice__icon", size: "h4", name: iconTypes[type] }), h("div", { key: '525e51d6030072ee8b88a99e4e01078868e6df87' }, h("gcds-heading", { key: 'fd5adaf2b185a71d0d70e5174af1d590fb405c2c', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, h("gcds-sr-only", { key: 'b8955dccf72340580e7cf30ae2bba76b7704b50e', tag: "span" }, I18N$a[this.lang][type]), noticeTitle), h("slot", { key: '781c621945781994d22fc5c0e9974ac852e0fe39' }))))));
    }
    get el() { return getElement(this); }
};
GcdsNotice.style = gcdsNoticeCss;

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

const gcdsPaginationCss = "@layer reset, default, list, simple, wide, compact, hover, active, focus;@layer reset{:host{display:block}:host .gcds-pagination ul{list-style:none;padding:0}}@layer default{:host .gcds-pagination{container:component pagination/inline-size}:host .gcds-pagination li{margin:var(--gcds-pagination-listitem-margin)}:host .gcds-pagination li a{border-radius:var(--gcds-pagination-border-radius);color:var(--gcds-pagination-default-text);font:var(--gcds-pagination-font-desktop)}@media only screen and (width < 48em){:host .gcds-pagination li a{font:var(--gcds-pagination-font-mobile)}}}@layer list{:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext){display:flex;flex-direction:row;margin:0 auto;width:fit-content}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{align-items:center;display:flex;height:3rem;justify-content:center;min-width:3rem}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile{height:auto;min-width:auto;padding:var(--gcds-pagination-list-end-button-padding);text-decoration:none;width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button span,:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile span{text-decoration:underline}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-list-mobile-ellipses{display:none}:host .gcds-pagination .gcds-pagination-list-mobile-prevnext{display:flex;margin:var(--gcds-pagination-mobile-list-prevnext-margin)}}@layer simple{:host .gcds-pagination-simple{display:flex;flex-direction:column;justify-content:space-between}:host .gcds-pagination-simple li{display:inline-block;justify-content:space-between;margin:var(--gcds-pagination-simple-listitem-margin);width:fit-content}:host .gcds-pagination-simple li a{display:grid;padding:var(--gcds-pagination-simple-padding)}:host .gcds-pagination-simple li a>gcds-icon{grid-area:icon}:host .gcds-pagination-simple li a>.gcds-pagination-simple-text{grid-area:text;margin:var(--gcds-pagination-simple-listitem-text-margin)}:host .gcds-pagination-simple li a>span{font-weight:var(--gcds-pagination-simple-label-font-weight);grid-area:label}:host .gcds-pagination-simple .gcds-pagination-simple-next a,:host .gcds-pagination-simple .gcds-pagination-simple-previous a{text-decoration:none}:host .gcds-pagination-simple .gcds-pagination-simple-next a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-next a span,:host .gcds-pagination-simple .gcds-pagination-simple-previous a .gcds-pagination-simple-text,:host .gcds-pagination-simple .gcds-pagination-simple-previous a span{text-decoration:underline}:host .gcds-pagination-simple .gcds-pagination-simple-previous a{grid-template-areas:\"icon text\" \"icon label\";grid-template-columns:.25fr 1fr}:host .gcds-pagination-simple .gcds-pagination-simple-next a{grid-template-areas:\"text icon\" \"label icon\";grid-template-columns:1fr .25fr}}@layer wide{@container pagination (width > 44em){:host .gcds-pagination-list-mobile-prevnext{display:none}}@container pagination (width > 20em){:host .gcds-pagination-simple{flex-direction:row}:host .gcds-pagination-simple .gcds-pagination-simple-next{margin-left:auto}}}@layer compact{@container pagination (width <= 44em){:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li a{border:var(--gcds-pagination-border-width) solid}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li>span.gcds-pagination-list-ellipses{min-width:auto}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li:has(>a.gcds-pagination-end-button){margin:0}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li .gcds-pagination-end-button{display:none}:host .gcds-pagination :is(.gcds-pagination-list,.gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext{display:block}}@container pagination (width <= 30em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-sm{display:none}}@container pagination (width <= 27.5em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xs{display:none}}@container pagination (width <= 25em){:host .gcds-pagination-list .gcds-pagination-list-breakpoint-xxs{display:none}}@container pagination (width <= 19em){:host .gcds-pagination-list li{margin:var(--gcds-pagination-mobile-list-item-margin)}}}@layer hover{@media (hover:hover){:host .gcds-pagination ul li a:hover{background:var(--gcds-pagination-hover-background);color:var(--gcds-pagination-hover-text)}}}@layer active{:host .gcds-pagination ul li a:active:not(:focus),:host .gcds-pagination ul li a[aria-current*=page]:not(:focus){background:var(--gcds-pagination-active-background);border-color:var(--gcds-pagination-active-background);color:var(--gcds-pagination-active-text);text-decoration:none}}@layer focus{:host .gcds-pagination ul li a:focus{background-color:var(--gcds-pagination-focus-background);border-color:var(--gcds-pagination-focus-background);box-shadow:var(--gcds-pagination-focus-box-shadow);color:var(--gcds-pagination-focus-text);outline:var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);outline-offset:var(--gcds-pagination-border-width);text-decoration:none}}";

const GcdsPagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsClick = createEvent(this, "gcdsClick");
        this.listitems = [];
        this.mobilePrevNext = [];
        /*
         * Props
         */
        /**
         * Determines the pagination display style.
         */
        this.display = 'list';
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
        return (h(Host, { key: '7de8352d25f9bf89e58d2c3ed98a14ab62acb98b', role: "navigation", "aria-label": label }, h("div", { key: 'f63a8dbf6f85c1ec54abf67d01ef423ec8dcc2c7', class: "gcds-pagination" }, display === 'list' ? (h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))) : (h("ul", { class: "gcds-pagination-simple" }, previousHref && (h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, tabindex: 0, "aria-label": `${I18N$9[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, previousHref) }, h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N$9[lang].previous), h("span", null, previousLabel)))), nextHref && (h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, tabindex: 0, "aria-label": `${I18N$9[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => emitEvent(e, this.gcdsClick, nextHref) }, h("div", { class: "gcds-pagination-simple-text" }, I18N$9[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "150", name: "chevron-right" })))))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "currentPage": ["watchCurrentPage"],
        "url": ["urlChanged"],
        "lang": ["watchLang"]
    }; }
};
GcdsPagination.style = gcdsPaginationCss;

const I18N$8 = {
  en: {
    label: 'Banner',
  },
  fr: {
    label: 'Bannière',
  },
};

const gcdsPhaseBannerCss = "@layer reset, default, fixed, role, wide, compact;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-phase-banner{container:component banner/inline-size;font:var(--gcds-phase-banner-font);line-height:var(--gcds-phase-banner-line-height)}:host .gcds-phase-banner .banner__content{padding:var(--gcds-phase-banner-padding)}:host .gcds-phase-banner .banner__icon{display:flex;margin:0}:host .gcds-phase-banner .banner__icon.icon--left{margin-inline-end:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon.icon--right{margin-inline-start:var(--gcds-phase-banner-icon-margin)}:host .gcds-phase-banner .banner__icon ::slotted(img),:host .gcds-phase-banner .banner__icon ::slotted(svg){max-height:var(--gcds-phase-banner-icon-max-height)}:host .gcds-phase-banner .banner__details{align-items:baseline;display:flex;flex-wrap:wrap}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(gcds-button){flex:0 0 auto}:host .gcds-phase-banner .banner__details ::slotted(a),:host .gcds-phase-banner .banner__details ::slotted(small),:host .gcds-phase-banner .banner__details ::slotted(span){font-size:80%!important}:host .gcds-phase-banner .banner__details ::slotted(p){font:var(--gcds-phase-banner-font);margin:0}:host .gcds-phase-banner .banner__details ::slotted(a){color:inherit}:host .gcds-phase-banner .banner__details ::slotted(gcds-button){margin:var(--gcds-phase-banner-details-cta-margin);transform:scale(90%)}}@layer fixed{:host .gcds-phase-banner.banner-is-fixed{position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-phase-banner.banner--role-primary{background-color:var(--gcds-phase-banner-primary-background);color:var(--gcds-phase-banner-primary-text)}:host .gcds-phase-banner.banner--role-secondary{background-color:var(--gcds-phase-banner-secondary-background);color:var(--gcds-phase-banner-secondary-text)}}@layer wide{@container banner (width >= 36em){:host .gcds-phase-banner .banner__content{display:flex}}}@layer compact{@container banner (width < 36em){:host .gcds-phase-banner .banner__content .banner__icon{display:none}}}";

const GcdsPhaseBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Defines banner role.
         */
        this.bannerRole = 'primary';
        /**
         * Defines the container width of the phase banner content
         */
        this.container = 'xl';
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
        return (h(Host, { key: '9e22cdaf600a5c04b1a6866e7ca6386a1c52b22f' }, h("div", { key: '8815335957b79321257d2652ab9412071678c835', class: `gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`, role: "status", "aria-label": I18N$8[lang].label }, h("gcds-container", { key: 'f2ea1e5e0462f877f5f220762dc2ba0731177956', size: container, centered: true }, h("div", { key: '8f53b7147fa6cda3d0c93e48d1af7e7ee5e939b3', class: "banner__content" }, h("figure", { key: '065b45c6af563cde9a1239e0d156e7851cd5ec9b', class: "banner__icon icon--left" }, h("slot", { key: '0ebff7836c9f90e51d99ce83ade049a4560061a9', name: "banner-icon-left" })), h("div", { key: '75c91c8cefc6258a786d7a8a5bb0a12192701555', class: "banner__details" }, h("slot", { key: '02d2d3d4bc23219520073a35c14da40e4a98df44', name: "banner-text" }), h("slot", { key: 'd23c8e87203df30dfbb97682fc610acbb4477b90', name: "banner-cta" })), h("figure", { key: 'eb80fcd4a211eae36bfeaf198c75f6fdf0eac375', class: "banner__icon icon--right" }, h("slot", { key: 'ab144b1be3f32ab0efdb19ad5be68f12b342e745', name: "banner-icon-right" })))))));
    }
    get el() { return getElement(this); }
};
GcdsPhaseBanner.style = gcdsPhaseBannerCss;

function isRadioObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const validKeys = ['id', 'label', 'value', 'hint', 'checked'];
    const objKeys = Object.keys(obj);
    // Check if all properties match the expected type
    const hasValidTypes = typeof obj.id === 'string' &&
        typeof obj.label === 'string' &&
        typeof obj.value === 'string' &&
        (obj.hint === undefined || typeof obj.hint === 'string') &&
        (obj.checked === undefined || typeof obj.checked === 'boolean');
    // Ensure no extra properties exist
    const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));
    return hasValidTypes && hasOnlyValidKeys;
}

const I18N$7 = {
  en: {
    required: ' (required)',
  },
  fr: {
    required: ' (obligatoire)',
  },
};

const gcdsRadiosCss = "@layer reset, default, disabled, error, focus, a11y.highcontrast;@layer reset{:host{display:block}:host .gcds-radios__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-radios__fieldset legend{padding:0}:host .gcds-radio{border:0;padding:0}:host .gcds-radio gcds-label{display:block}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{box-sizing:border-box;content:\"\";cursor:pointer;position:absolute}}@layer default{:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-desktop);margin:var(--gcds-radio-legend-margin)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-mobile)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-mobile)}}:host .gcds-radios__legend:not(:has(+gcds-hint)){margin:var(--gcds-radio-legend-hint-margin)}:host gcds-hint:part(hint){margin:var(--gcds-radio-hint-margin)}:host .gcds-radio{color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin)!important;max-width:var(--gcds-radio-max-width);min-height:calc(var(--gcds-radio-input-height-and-width) - var(--gcds-radio-padding));padding:var(--gcds-radio-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-radio :is(gcds-label,gcds-hint){padding:var(--gcds-radio-label-padding)!important}:host .gcds-radio gcds-hint::part(hint){margin:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before,:host .gcds-radio input{position:absolute}:host .gcds-radio gcds-label>label:before,:host .gcds-radio input{height:var(--gcds-radio-input-height-and-width);left:0;top:0;width:var(--gcds-radio-input-height-and-width)}:host .gcds-radio input{opacity:0}:host .gcds-radio gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-radio-label-font-desktop);--gcds-label-font-mobile:var(--gcds-radio-label-font-mobile)}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{border-radius:var(--gcds-radio-border-radius)}:host .gcds-radio gcds-label>label:before{background-color:var(--gcds-radio-default-background);border:var(--gcds-radio-input-border-width) solid;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-radio gcds-label>label:after{background-color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);width:var(--gcds-radio-check-height-and-width)}:host .gcds-radio input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-radio.gcds-radio--disabled{color:var(--gcds-radio-disabled-text)}:host .gcds-radio.gcds-radio--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:after,:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border)}:host .gcds-radio.gcds-radio--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host gcds-error-message{margin:var(--gcds-radio-error-message-margin)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-radio-danger-border)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:after{background-color:var(--gcds-radio-danger-border)}}@layer focus{:host .gcds-radio:focus-within input:focus+gcds-label>label:before{background:var(--gcds-radio-focus-background);box-shadow:var(--gcds-radio-focus-box-shadow);color:var(--gcds-radio-focus-color);outline:var(--gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}:host .gcds-radio:focus-within input:focus+gcds-label>label:after{box-shadow:inset 0 0 2rem var(--gcds-radio-focus-color)}}@layer a11y.highcontrast{@media (prefers-color-scheme:light){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}@media (prefers-color-scheme:dark){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}}";

const GcdsRadios = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsValid = createEvent(this, "gcdsValid");
        this.gcdsError = createEvent(this, "gcdsError");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
        this.onBlur = () => {
            this.gcdsBlur.emit();
        };
        this.onBlurValidate = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
        };
        this.handleInput = (e, customEvent) => {
            const val = e.target && e.target.value;
            this.value = val;
            this.internals.setFormValue(val ? val : null, 'checked');
            if (e.type === 'change') {
                const changeEvt = new e.constructor(e.type, e);
                this.el.dispatchEvent(changeEvt);
            }
            customEvent.emit(this.value);
        };
    }
    validateOptions() {
        let invalidObject = false;
        // Assign optionsArr from passed options string or array
        if (typeof this.options === 'string' && this.options.trim() !== '') {
            try {
                this.options = JSON.parse(this.options);
            }
            catch (e) {
                logError('gcds-radios', ['Invalid JSON string for options']);
                this.options = null;
            }
        }
        if (Array.isArray(this.options)) {
            this.optionsArr = this.options;
        }
        else {
            this.optionsArr = null;
        }
        // Validate options has type RadioObject
        if (this.optionsArr && this.optionsArr.length > 1) {
            invalidObject = this.optionsArr.some(radio => !isRadioObject(radio));
        }
        else {
            invalidObject = true;
        }
        // Assign value if passed options has a checked radio
        if (this.optionsArr && !this.value) {
            this.optionsArr.forEach(radio => {
                if (radio.checked === 'true' || radio.checked === true) {
                    this.value = radio.value;
                    this.internals.setFormValue(radio.value, 'checked');
                }
            });
        }
        // Log error if no or invalid optionsObject
        this.errors = handleErrors(this.errors, 'options', this.optionsArr, invalidObject);
    }
    validateName() {
        this.errors = handleErrors(this.errors, 'name', this.name);
    }
    validateLegend() {
        this.errors = handleErrors(this.errors, 'legend', this.legend);
    }
    validateErrorMessage() {
        if (this.disabled) {
            this.errorMessage = '';
        }
        else {
            this.hasError = this.errorMessage ? true : false;
        }
    }
    validateValue() {
        if (this.optionsArr && this.value !== null) {
            let isValidValue = false;
            this.optionsArr.map(radio => {
                if (radio.value == this.value) {
                    isValidValue = true;
                }
            });
            // unset value if no radio button with value available
            if (!isValidValue) {
                this.value = null;
                this.internals.setFormValue(this.value);
            }
        }
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Call any active validators
     */
    async validate() {
        handleValidationResult(this.el, this._validator.validate(this.value), this.legend, this.gcdsError, this.gcdsValid, this.lang);
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
            this.internals.setFormValue(this.initialValue, 'checked');
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
    watchLang(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.lang = newValue;
        }
    }
    /*
     * Validate required properties
     */
    validateRequiredProps() {
        this.validateLegend();
        this.validateName();
        return isValid(this.errors, ['name', 'legend', 'options']);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = assignLanguage(this.el);
        this.validateOptions();
        this.validateRequiredProps();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'radio');
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
        this.initialValue = this.value ? this.value : null;
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-radios', this.errors);
        }
    }
    async componentDidUpdate() {
        // Validate props again if changed after render
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-radios', this.errors);
        }
    }
    render() {
        const { lang, name, legend, value, required, hint, errorMessage, disabled, hasError, inheritedAttributes, } = this;
        const fieldsetAttrs = {
            'tabindex': '-1',
            'aria-labelledby': 'radios-legend',
        };
        if (hint) {
            const hintID = this.hint ? `radios-hint ` : '';
            fieldsetAttrs['aria-labelledby'] =
                `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
        }
        if (this.validateRequiredProps()) {
            return (h(Host, { key: '863fb42cf8b4ad89a28170ded8066c3220b6434e', onBlur: () => this.onBlurValidate() }, h("fieldset", Object.assign({ key: '460e85e366045fd2bffa39cba97603070bb029ff', class: "gcds-radios__fieldset" }, fieldsetAttrs), h("legend", { key: '8f37f944357de5f5a5b30758276ad3faee992851', id: "radios-legend", class: "gcds-radios__legend" }, legend, required ? (h("span", { class: "legend__required" }, I18N$7[lang].required)) : null), hint ? (h("gcds-hint", { id: "radios-hint", "hint-id": "radios" }, hint)) : null, errorMessage ? (h("gcds-error-message", { id: "radios-error", messageId: "radios" }, errorMessage)) : null, this.optionsArr &&
                this.optionsArr.map(radio => {
                    const attrsInput = Object.assign({ name, disabled: disabled, required: required, value: radio.value, checked: radio.value === value }, inheritedAttributes);
                    if (radio.hint) {
                        const hintID = radio.hint ? `hint-${radio.id} ` : '';
                        attrsInput['aria-describedby'] = `${hintID}${attrsInput['aria-describedby']
                            ? `${attrsInput['aria-describedby']}`
                            : ''}`;
                    }
                    if (hasError) {
                        attrsInput['aria-invalid'] = 'true';
                        attrsInput['aria-description'] = errorMessage;
                    }
                    return (h("div", { class: `gcds-radio ${disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, h("input", Object.assign({ id: radio.id, type: "radio" }, attrsInput, { onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit() })), h("gcds-label", { label: radio.label, "label-for": radio.id, lang: lang, onClick: e => e.stopPropagation() }), radio.hint ? (h("gcds-hint", { "hint-id": radio.id }, radio.hint)) : null));
                }))));
        }
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "options": ["validateOptions"],
        "name": ["validateName"],
        "legend": ["validateLegend"],
        "errorMessage": ["validateErrorMessage"],
        "value": ["validateValue"],
        "validator": ["validateValidator"],
        "lang": ["watchLang"]
    }; }
};
GcdsRadios.style = gcdsRadiosCss;

const I18N$6 = {
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

const GcdsSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsSubmit = createEvent(this, "gcdsSubmit");
        /**
         * Set the placeholder and label for the search input. Becomes "Search [placeholder]"
         */
        this.placeholder = 'Canada.ca';
        /**
         * Sets the action for the search form. Default will be canada.ca global search
         */
        this.action = '/sr/srb.html';
        /**
         * Set the form method of the search form
         */
        this.method = 'get';
        /**
         * Set the name of the search input
         */
        this.name = 'q';
        /**
         * Set the id of the search input
         */
        this.searchId = 'search';
        this.handleInput = (e, customEvent) => {
            const input = e.target;
            this.value = input.value;
            customEvent.emit(this.value);
        };
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
        const labelText = `${I18N$6[lang].searchLabel.replace('{$}', placeholder)}`;
        const attrsInput = {
            name,
            placeholder: labelText,
        };
        const formAction = action === '/sr/srb.html'
            ? `https://www.canada.ca/${lang}/sr/srb.html`
            : action;
        return (h(Host, { key: '6f097c6decfc75124cfb075d08d9538fac97f247' }, h("section", { key: 'cac50e05b5b1993c7b582c077b52ebc0347c684d', class: "gcds-search" }, h("gcds-sr-only", { key: 'da41472fe9dc9dc4278a4324c5c59727bf659737', tag: "h2" }, I18N$6[lang].search), h("form", { key: 'd8daa855f964aea373212e226410c18a174fc2f7', action: formAction, method: method, role: "search", onSubmit: e => emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, h("gcds-label", { key: 'eaa37cf81c073de64d06459be03f3d11bb35ee8b', label: labelText, "label-for": searchId, "hide-label": true }), h("input", Object.assign({ key: '7efdfeecf78cd58fae9fe13300da38a0883c40b2', type: "search", id: searchId }, (suggested ? { list: 'search-list' } : {}), { size: 34, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggested && (h("datalist", { key: 'a8c7737d2ad864cc08ac28fa19a4c3a4f2dbf654', id: "search-list" }, suggested.map((k, v) => (h("option", { value: k, key: v }))))), h("gcds-button", { key: 'b999f4297899ff1441b1fd201f14762b942b896a', type: "submit", class: "gcds-search__button", exportparts: "button" }, h("gcds-icon", { key: '148d9e7fb4265b12093070af8b0604341d300994', name: "search", label: I18N$6[lang].search, size: "h3" }))))));
    }
    get el() { return getElement(this); }
};
GcdsSearch.style = gcdsSearchCss;

const gcdsSelectCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-select-wrapper{border:0;margin:0;padding:0}:host .gcds-select-wrapper select{box-sizing:border-box}:host .gcds-select-wrapper slot{display:initial}}@layer default{:host .gcds-select-wrapper{color:var(--gcds-select-default-text);font:var(--gcds-select-font-desktop);max-width:75ch;transition:color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-select-wrapper{font:var(--gcds-select-font-mobile)}}:host .gcds-select-wrapper select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url(\"data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>\");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin)!important;max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding)!important;transition:all .15s ease-in-out}}@layer disabled{:host .gcds-select-wrapper.gcds-disabled{color:var(--gcds-select-disabled-text)}:host .gcds-select-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-select-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-select-wrapper.gcds-disabled select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-select-wrapper.gcds-error:not(:focus-within) select{border-color:var(--gcds-select-danger-border)}}@layer focus{:host .gcds-select-wrapper:focus-within select:focus{border-color:var(--gcds-select-focus-border);box-shadow:var(--gcds-select-focus-box-shadow);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-border);outline-offset:var(--gcds-select-border-width)}}";

const GcdsSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsError = createEvent(this, "gcdsError");
        this.gcdsValid = createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this._validator = defaultValidator;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Specifies if a select element is disabled or not.
         */
        this.disabled = false;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
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
    }
    validateDisabledSelect() {
        if (this.required) {
            this.disabled = false;
        }
    }
    watchValue(val) {
        this.internals.setFormValue(val ? val : null);
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
        this._validator = getValidator(this.validator);
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
        handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
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
            this.internals.setFormValue(value);
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
        // Assign required validator if needed
        requiredValidator(this.el, 'select');
        this.validateValidator();
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
        return (h(Host, { key: 'f0926042e4a71b93d14a0e17bccee1df28807359' }, h("div", { key: 'bcf0fabf3ee8db8bf5eaa46a5adcbb5ef5d0ef8a', class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '00ad8e8924c6793cfe63b3226b1d361f758e9aee' }, attrsLabel, { "label-for": selectId, lang: lang })), hint ? h("gcds-hint", { "hint-id": selectId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: selectId }, errorMessage)) : null, h("select", Object.assign({ key: '4de00ba765ca550a1697f29abbb1fa0394736e39' }, attrsSelect, { id: selectId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', part: "select", ref: element => (this.shadowElement = element) }), defaultValue ? (h("option", { value: "", disabled: true, selected: true }, defaultValue)) : null, options.map(opt => {
            if (opt.nodeName === 'OPTION') {
                const selected = opt.hasAttribute('selected')
                    ? { selected: true }
                    : null;
                return (h("option", Object.assign({ value: opt.getAttribute('value') }, selected), opt.textContent));
            }
            else if (opt.nodeName === 'OPTGROUP') {
                const optGroupChildren = Array.from(opt.children).map(sub => {
                    const selected = sub.hasAttribute('selected')
                        ? { selected: true }
                        : null;
                    return (h("option", Object.assign({ value: sub.getAttribute('value') }, selected), sub.textContent));
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
        "value": ["watchValue"],
        "errorMessage": ["validateErrorMessage"],
        "validator": ["validateValidator"],
        "hasError": ["validateHasError"],
        "aria-invalid": ["ariaInvalidWatcher"],
        "aria-description": ["ariaDescriptiondWatcher"]
    }; }
};
GcdsSelect.style = gcdsSelectCss;

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
            setTimeout(() => {
                nav.updateNavItemQueue(nav);
            }, 200);
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
            setTimeout(() => {
                nav.updateNavItemQueue(nav);
            }, 200);
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
            setTimeout(() => {
                nav.updateNavItemQueue(nav);
            }, 200);
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

const I18N$5 = {
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

const GcdsSideNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Queue of nav items for keyboard navigation
         */
        this.navItems = [];
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
        return (h(Host, { key: 'b41f9b092e8f23a6353b7064b449731ffaaaa14b' }, h("nav", { key: '26b4d5a3a82cf9216f56a7b9b1151035df7d72c7', "aria-label": `${label}${I18N$5[lang].navLabel}`, class: "gcds-side-nav" }, h("h2", { key: '4eb8709e0f213912b559fa81da7478be87609db0', class: "gcds-side-nav__heading" }, label), h("ul", { key: '99881fe85061138b0885b11513bad6bae1521c7d' }, h("gcds-nav-group", { key: '631d8e89b0e174de1338ec11de22cc717fe64e0a', menuLabel: I18N$5[lang].menuLabel, closeTrigger: I18N$5[lang].closeTrigger, openTrigger: I18N$5[lang].menuLabel, class: "gcds-mobile-nav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: '2e860631635649db3c4dca11f0d2cc58f4eb4b8a' }))))));
    }
    get el() { return getElement(this); }
};
GcdsSideNav.style = gcdsSideNavCss;

const I18N$4 = {
  en: {
    link: 'https://canada.ca/en.html',
    gc: 'Government of Canada',
  },
  fr: {
    link: 'https://canada.ca/fr.html',
    gc: 'Gouvernement du Canada',
  },
};

var SignatureEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-en-title">
	<title id="signature-en-title">Government of Canada / Gouvernement du Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(526,0)" />
</svg>
`;

var SignatureFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-fr-title">
	<title id="signature-fr-title">Gouvernement du Canada / Government of Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(575,0)" />
</svg>
`;

var WordmarkEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-en-title">
	<title id="wordmark-en-title">Symbol of the Government of Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;

var WordmarkFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 143 34" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="wordmark-fr-title">
	<title id="wordmark-fr-title">Symbole du Gouvernement du Canada</title>
	<g id="wmms" transform="translate(-1, -1)">
		<path class="fip_flag" d="M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"/>
		<path class="fip_text" d="M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"/>
	</g>
</svg>`;

const gcdsSignatureCss = "@layer reset, default, type.signature, type.wordmark, variant.colour, variant.white, desktop;@layer reset{:host{display:block;width:fit-content}}@layer default{:host .gcds-signature{display:flex}:host svg{display:block;max-width:100%}:host svg .fip_flag{fill:var(--gcds-signature-color-flag)}}@layer type.signature{:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height)}}@layer type.wordmark{:host([type=wordmark]) svg{height:var(--gcds-signature-wordmark-height);width:auto}}@layer variant.colour{:host(:not([variant=white])) svg .fip_text{fill:var(--gcds-signature-color-text)}}@layer variant.white{:host([variant=white]) svg :is(.fip_text){fill:var(--gcds-signature-white-default)}}@layer desktop{@media screen and (width >= 64em){:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height-desktop)}}}";

const GcdsSignature = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * The type of graphic to render
         */
        this.type = 'signature';
        /**
         * The colour variant to render
         */
        this.variant = 'colour';
        /**
         * Has link to canada.ca. Only applies to signature
         */
        this.hasLink = false;
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
    render() {
        const { type, hasLink, lang, selectSVG } = this;
        const sigAttrs = {
            class: 'gcds-signature',
        };
        const Tag = hasLink ? 'a' : 'div';
        if (Tag === 'a') {
            sigAttrs['href'] = I18N$4[lang].link;
        }
        return (h(Host, { key: '9371550c9068d0041b6c661746206cd0f9eab90b' }, type === 'signature' ? (h(Tag, Object.assign({}, sigAttrs), h("div", { innerHTML: selectSVG }))) : (h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["validateType"],
        "variant": ["validateVariant"]
    }; }
};
GcdsSignature.style = gcdsSignatureCss;

const gcdsSrOnlyCss = "@layer reset, default;@layer reset{:host slot{display:initial}}@layer default{:host{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}";

const GcdsSrOnly = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the appropriate HTML tag for the content.
         */
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
        return (h(Host, { key: 'c3d546661babf7e4c34bbf46600431ea761b2624' }, h(Tag, { key: '32bd3afe9621aa3bcd787bdb95d64ecb18819e0e' }, h("slot", { key: 'd2c250f425e5e988995957b984f7c05e3413651c' }))));
    }
    static get watchers() { return {
        "tag": ["validateTag"]
    }; }
};
GcdsSrOnly.style = gcdsSrOnlyCss;

const I18N$3 = {
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

const GcdsStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Defines the heading tag to render
         */
        this.tag = 'h2';
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
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
        const valid = this.validateRequiredProps();
        if (!valid) {
            logError('gcds-stepper', this.errors);
        }
    }
    render() {
        const { currentStep, lang, totalSteps, tag } = this;
        return (h(Host, { key: '668131869ea8b9e4542e097e28efbfae9b5a6bae' }, this.validateRequiredProps() && (h("gcds-heading", { key: 'e50a066d662ef3e606e21da157731de6e6b6b78a', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, h("span", { key: 'c573ba75a978b689698fb8eab50caa08853d12e3', class: "gcds-stepper__steps" }, `${I18N$3[lang].step} ${currentStep} ${I18N$3[lang].of} ${totalSteps}`, h("gcds-sr-only", { key: 'fea60de171d7e2412957e922944421f9cbb6d379' }, " : ")), h("slot", { key: '679d080d48b257b840ee9d78e693f06df548faee' })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "currentStep": ["validateCurrentStep"],
        "totalSteps": ["validateTotalSteps"]
    }; }
};
GcdsStepper.style = gcdsStepperCss;

const gcdsTextCss = "@layer reset, default, display, limit, margin, role, size, style, weight;@layer reset{:host{color:var(--gcds-text-role-primary);display:block}:host .gcds-text{box-sizing:border-box;display:inherit;margin:0}:host .gcds-text slot{display:initial}}@layer default{:host .gcds-text{font:var(--gcds-text-size-body-desktop)}@media only screen and (width < 48em){:host .gcds-text{font:var(--gcds-text-size-body-mobile)}}}@layer display{:host.d-block{display:block}:host.d-flex{display:flex}:host.d-inline{display:inline}:host.d-inline-block{display:inline-block}:host.d-inline-flex{display:inline-flex}:host.d-none{display:none}}@layer limit{:host .gcds-text.limit{max-width:var(--gcds-text-character-limit)}}@layer margin{:host .gcds-text.mt-0{margin-block-start:var(--gcds-text-spacing-0)}:host .gcds-text.mt-25{margin-block-start:var(--gcds-text-spacing-25)}:host .gcds-text.mt-50{margin-block-start:var(--gcds-text-spacing-50)}:host .gcds-text.mt-75{margin-block-start:var(--gcds-text-spacing-75)}:host .gcds-text.mt-100{margin-block-start:var(--gcds-text-spacing-100)}:host .gcds-text.mt-125{margin-block-start:var(--gcds-text-spacing-125)}:host .gcds-text.mt-150{margin-block-start:var(--gcds-text-spacing-150)}:host .gcds-text.mt-175{margin-block-start:var(--gcds-text-spacing-175)}:host .gcds-text.mt-200{margin-block-start:var(--gcds-text-spacing-200)}:host .gcds-text.mt-225{margin-block-start:var(--gcds-text-spacing-225)}:host .gcds-text.mt-250{margin-block-start:var(--gcds-text-spacing-250)}:host .gcds-text.mt-300{margin-block-start:var(--gcds-text-spacing-300)}:host .gcds-text.mt-350{margin-block-start:var(--gcds-text-spacing-350)}:host .gcds-text.mt-400{margin-block-start:var(--gcds-text-spacing-400)}:host .gcds-text.mt-450{margin-block-start:var(--gcds-text-spacing-450)}:host .gcds-text.mt-500{margin-block-start:var(--gcds-text-spacing-500)}:host .gcds-text.mt-550{margin-block-start:var(--gcds-text-spacing-550)}:host .gcds-text.mt-600{margin-block-start:var(--gcds-text-spacing-600)}:host .gcds-text.mt-650{margin-block-start:var(--gcds-text-spacing-650)}:host .gcds-text.mt-700{margin-block-start:var(--gcds-text-spacing-700)}:host .gcds-text.mt-750{margin-block-start:var(--gcds-text-spacing-750)}:host .gcds-text.mt-800{margin-block-start:var(--gcds-text-spacing-800)}:host .gcds-text.mt-850{margin-block-start:var(--gcds-text-spacing-850)}:host .gcds-text.mt-900{margin-block-start:var(--gcds-text-spacing-900)}:host .gcds-text.mt-950{margin-block-start:var(--gcds-text-spacing-950)}:host .gcds-text.mt-1000{margin-block-start:var(--gcds-text-spacing-1000)}:host .gcds-text.mt-1050{margin-block-start:var(--gcds-text-spacing-1050)}:host .gcds-text.mt-1100{margin-block-start:var(--gcds-text-spacing-1100)}:host .gcds-text.mt-1150{margin-block-start:var(--gcds-text-spacing-1150)}:host .gcds-text.mt-1200{margin-block-start:var(--gcds-text-spacing-1200)}:host .gcds-text.mt-1250{margin-block-start:var(--gcds-text-spacing-1250)}:host .gcds-text.mb-0{margin-block-end:var(--gcds-text-spacing-0)}:host .gcds-text.mb-25{margin-block-end:var(--gcds-text-spacing-25)}:host .gcds-text.mb-50{margin-block-end:var(--gcds-text-spacing-50)}:host .gcds-text.mb-75{margin-block-end:var(--gcds-text-spacing-75)}:host .gcds-text.mb-100{margin-block-end:var(--gcds-text-spacing-100)}:host .gcds-text.mb-125{margin-block-end:var(--gcds-text-spacing-125)}:host .gcds-text.mb-150{margin-block-end:var(--gcds-text-spacing-150)}:host .gcds-text.mb-175{margin-block-end:var(--gcds-text-spacing-175)}:host .gcds-text.mb-200{margin-block-end:var(--gcds-text-spacing-200)}:host .gcds-text.mb-225{margin-block-end:var(--gcds-text-spacing-225)}:host .gcds-text.mb-250{margin-block-end:var(--gcds-text-spacing-250)}:host .gcds-text.mb-300{margin-block-end:var(--gcds-text-spacing-300)}:host .gcds-text.mb-350{margin-block-end:var(--gcds-text-spacing-350)}:host .gcds-text.mb-400{margin-block-end:var(--gcds-text-spacing-400)}:host .gcds-text.mb-450{margin-block-end:var(--gcds-text-spacing-450)}:host .gcds-text.mb-500{margin-block-end:var(--gcds-text-spacing-500)}:host .gcds-text.mb-550{margin-block-end:var(--gcds-text-spacing-550)}:host .gcds-text.mb-600{margin-block-end:var(--gcds-text-spacing-600)}:host .gcds-text.mb-650{margin-block-end:var(--gcds-text-spacing-650)}:host .gcds-text.mb-700{margin-block-end:var(--gcds-text-spacing-700)}:host .gcds-text.mb-750{margin-block-end:var(--gcds-text-spacing-750)}:host .gcds-text.mb-800{margin-block-end:var(--gcds-text-spacing-800)}:host .gcds-text.mb-850{margin-block-end:var(--gcds-text-spacing-850)}:host .gcds-text.mb-900{margin-block-end:var(--gcds-text-spacing-900)}:host .gcds-text.mb-950{margin-block-end:var(--gcds-text-spacing-950)}:host .gcds-text.mb-1000{margin-block-end:var(--gcds-text-spacing-1000)}:host .gcds-text.mb-1050{margin-block-end:var(--gcds-text-spacing-1050)}:host .gcds-text.mb-1100{margin-block-end:var(--gcds-text-spacing-1100)}:host .gcds-text.mb-1150{margin-block-end:var(--gcds-text-spacing-1150)}:host .gcds-text.mb-1200{margin-block-end:var(--gcds-text-spacing-1200)}:host .gcds-text.mb-1250{margin-block-end:var(--gcds-text-spacing-1250)}}@layer variants.role{:host .gcds-text.role-primary{color:var(--gcds-text-role-primary)}:host .gcds-text.role-secondary{color:var(--gcds-text-role-secondary)}:host .gcds-text.role-light{color:var(--gcds-text-role-light)}}@layer variants.size{:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-desktop)}@media only screen and (width < 48em){:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-mobile)}}}@layer variants.style{:host .gcds-text ::slotted(em){font-style:italic}}@layer variants.weight{:host .gcds-text ::slotted(strong){font-weight:var(--gcds-text-weight-bold)}}";

const GcdsText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Sets the main style of the text.
         */
        this.textRole = 'primary';
        /**
         * Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.
         */
        this.characterLimit = true;
        /**
         * Specifies the display behaviour of the text.
         */
        this.display = 'block';
        /**
         * Adds margin above the text.
         */
        this.marginTop = '0';
        /**
         * Adds margin below the text.
         */
        this.marginBottom = '300';
        /**
         * Sets the appropriate HTML tags for the selected size.
         */
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
        return (h(Host, { key: '60d33fada39b1dd1af0af482be9d9d3d158d248b', class: `${display != 'block' ? `d-${display}` : ''}` }, h("p", { key: '5c890123f5244dd5a67f01819bbd309d67f2458a', class: `
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
GcdsText.style = gcdsTextCss;

const I18N$2 = {
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

const gcdsTextareaCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-textarea-wrapper{border:0;margin:0;padding:0}:host .gcds-textarea-wrapper textarea{box-sizing:border-box}}@layer default{:host .gcds-textarea-wrapper{color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font-desktop);max-width:75ch;transition:color .15s ease-in-out;width:100%}@media only screen and (width < 48em){:host .gcds-textarea-wrapper{font:var(--gcds-textarea-font-mobile)}}:host .gcds-textarea-wrapper textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin)!important;max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}}@layer disabled{:host .gcds-textarea-wrapper.gcds-disabled{color:var(--gcds-textarea-disabled-text)}:host .gcds-textarea-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-textarea-wrapper .error-message-container{display:block}:host .gcds-textarea-wrapper textarea.gcds-error:not(:focus){border-color:var(--gcds-textarea-danger-border)}}@layer focus{:host .gcds-textarea-wrapper:focus-within textarea:focus{border-color:var(--gcds-textarea-focus-border);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-border);outline-offset:var(--gcds-textarea-border-width)}}";

const GcdsTextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gcdsFocus = createEvent(this, "gcdsFocus");
        this.gcdsBlur = createEvent(this, "gcdsBlur");
        this.gcdsChange = createEvent(this, "gcdsChange");
        this.gcdsInput = createEvent(this, "gcdsInput");
        this.gcdsError = createEvent(this, "gcdsError");
        this.gcdsValid = createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        // Array to store which native HTML errors are happening on the textarea
        this.htmlValidationErrors = [];
        this.textareaTitle = '';
        this._validator = defaultValidator;
        /**
         * Specifies if a textarea element is disabled or not.
         */
        this.disabled = false;
        /**
         * Specifies if the label is hidden or not.
         */
        this.hideLabel = false;
        /**
         * Specifies if a form field is required or not.
         */
        this.required = false;
        /**
         * Default value for textarea rows.
         */
        this.rows = 5;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Set additional HTML attributes not available in component properties
         */
        this.inheritedAttributes = {};
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
            else {
                this.updateValidity();
            }
            customEvent.emit(this.value);
        };
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
        // Update DOM textarea if it exists
        if (this.shadowElement) {
            this.shadowElement.value = val || '';
        }
        // Update form value for form association
        this.internals.setFormValue(val || null);
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Read-only property of the textarea, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
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
        handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
        // Native HTML validation
        if ((this.required && !this.internals.checkValidity()) ||
            !this.internals.checkValidity()) {
            if (!this.internals.validity.valueMissing) {
                this.errorMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
                this.textareaTitle = this.errorMessage;
            }
        }
    }
    /**
     * Check the validity of gcds-textarea
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-textarea
     */
    async getValidationMessage() {
        return this.internals.validationMessage;
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
        if (this.value !== this.initialValue) {
            // Update all relevant values to initialValue
            this.value = this.initialValue;
            // Update DOM element if available
            if (this.shadowElement) {
                this.shadowElement.value = this.initialValue || '';
            }
            // Update form value
            this.internals.setFormValue(this.initialValue || null);
        }
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
    }
    /**
     * Update gcds-textarea's validity using internal textarea validity
     */
    updateValidity(override) {
        const validity = this.shadowElement.validity;
        this.htmlValidationErrors = [];
        for (const key in validity) {
            // Do not include valid or missingValue keys
            if (validity[key] === true && key !== 'valid') {
                this.htmlValidationErrors.push(key);
            }
        }
        // Add override values to HTML errors array
        for (const key in override) {
            this.htmlValidationErrors.push(key);
        }
        const validityState = override
            ? Object.assign(Object.assign({}, this.shadowElement.validity), override) : this.shadowElement.validity;
        let validationMessage = null;
        if (this.htmlValidationErrors.length > 0) {
            validationMessage = formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
        }
        this.internals.setValidity(validityState, validationMessage, this.shadowElement);
        // Set textarea title when HTML error occruring
        this.textareaTitle = validationMessage;
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
        // Assign required validator if needed
        requiredValidator(this.el, 'textarea');
        this.validateValidator();
        this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
    }
    componentDidLoad() {
        let lengthValidity;
        // maxlength/minlength validation on load
        if (this.value && (this.minlength || this.characterCount)) {
            if (this.minlength && this.value.length < this.minlength) {
                lengthValidity = { tooShort: true };
            }
            else if (this.characterCount &&
                this.value.length > this.characterCount) {
                lengthValidity = { tooLong: true };
            }
        }
        this.updateValidity(lengthValidity);
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { autofocus, characterCount, cols, disabled, errorMessage, hideLabel, hint, label, minlength, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name, textareaTitle, } = this;
        // Use max-width instead of cols attribute to keep field responsive
        const style = {
            maxWidth: `${cols * 1.5}ch`,
        };
        const attrsLabel = {
            label,
            required,
        };
        const attrsTextarea = Object.assign({ name,
            autofocus,
            disabled,
            minlength,
            required,
            rows, title: textareaTitle }, inheritedAttributes);
        if (hint || errorMessage || characterCount) {
            const hintID = hint ? `hint-${textareaId} ` : '';
            const errorID = errorMessage ? `error-message-${textareaId} ` : '';
            const countID = characterCount ? `textarea__count-${textareaId} ` : '';
            attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
                ? `${attrsTextarea['aria-describedby']}`
                : ''}`;
        }
        return (h(Host, { key: '462ff694237b5ece2b94a25006fa2166c82c3130' }, h("div", { key: '418df2a7b21570cb908dd30cb958a01fe95f2f87', class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({ key: '9e09924f599db5ef90109d0ae5141e00fce25455' }, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? h("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (h("gcds-error-message", { messageId: textareaId }, errorMessage)) : null, h("textarea", Object.assign({ key: '3dc1cafeace916ff5fe1b644a0a47223d0e2c76c' }, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), characterCount ? (h("gcds-text", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == undefined
            ? `${characterCount} ${I18N$2[lang].characters.allowed}`
            : `${characterCount - value.length} ${I18N$2[lang].characters.left}`)) : null)));
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
GcdsTextarea.style = gcdsTextareaCss;

const I18N$1 = {
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

const gcdsTopNavCss = "@layer reset, default, desktop;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}:host ul{padding:0}}@layer default{:host .gcds-top-nav .gcds-top-nav__container{display:flex;flex-direction:column;margin-inline:auto;max-width:var(--gcds-top-nav-max-width);width:90%}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-top-nav{border-block-end:var(--gcds-top-nav-border-width) solid var(--gcds-top-nav-border-color)}:host .gcds-top-nav .gcds-top-nav__container{align-items:flex-end;flex-direction:row}:host .gcds-top-nav .nav-container__list{align-items:flex-end;display:flex;width:fit-content}:host .gcds-top-nav .nav-container__list.nav-list--right{margin-inline-start:auto}:host .gcds-top-nav .nav-container__list.nav-list--center{margin-inline:auto}}}";

const GcdsTopNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Nav alignment
         */
        this.alignment = 'left';
        /**
         * Queue of nav items for keyboard navigation
         */
        this.navItems = [];
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
        return (h(Host, { key: '0a185f63b720d7a6b47ad9204a40b506f4dbcbd4' }, h("div", { key: '86accc24657db6c1532deaa30a04c5ad17f281cd', class: "gcds-top-nav" }, h("nav", { key: '52684b858af7b5d205dabe7eee8071d8b2de79d4', "aria-label": `${label}${I18N$1[lang].navLabel}` }, h("ul", { key: '1d106bcb07ca67ac7be572acf26c4fa3d9128996', class: "gcds-top-nav__container" }, h("gcds-nav-group", { key: 'cf80fff5c8c117f09ddcc1540a7361cba5e9aef7', menuLabel: I18N$1[lang].menuLabel, closeTrigger: I18N$1[lang].closeTrigger, openTrigger: I18N$1[lang].menuLabel, class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: element => (this.mobile = element), lang: lang }, h("slot", { key: '584ce592a08c84caabf664181ec2f3a769c9ac0d', name: "home" }), h("li", { key: 'd1a187f963160af82d10cd72bc1fa2c8bd1ffe0f', class: `nav-container__list nav-list--${alignment}` }, h("ul", { key: '3ece4687ccb79e67f30f5b08824acb254d1b1de8', class: `nav-container__list nav-list--${alignment}` }, h("slot", { key: 'edb4abbcabd29d9a65b79f27ac74da8c2896d092' })))))))));
    }
    get el() { return getElement(this); }
};
GcdsTopNav.style = gcdsTopNavCss;

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

var CanadaFlag = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.3 33" width="25">
  <path fill="#FF0000" d="M0,0h16v32.5H0V0z M46.5,16.6l-1-0.5c-0.5-0.2-0.3-0.6-0.2-1.1v-0.2l1-3.6l-2.9,0.6c-0.5,0.1-0.9,0.2-1.1-0.3 l-0.7-1.7l-2.8,3c-0.8,0.8-1.5,0.4-1.2-0.8l1.3-6.2l-1.9,1c-0.5,0.2-0.7,0.3-1-0.2l-2.2-4.4l-2.3,4.6c-0.2,0.3-0.6,0.2-0.9-0.1 l-2.1-1.2l1.4,6.8c0.2,0.9-0.5,1.3-1,0.7L26,9.8l-0.9,1.7c-0.2,0.4-0.4,0.6-1.2,0.4L21,11.3l1.2,3.6c0.1,0.6,0.1,0.9-0.2,1.1 l-1.3,0.7l6,4.9c0.5,0.4,0.4,0.9,0.2,1.5l-0.7,1.7l5.1-1c1.1-0.2,1.6-0.2,1.6,0.4l-0.2,6.3h1.7l-0.2-6.3c0-0.6,0.5-0.6,1.2-0.4 l5.5,1l-0.5-1.7c-0.2-0.7-0.4-0.9,0.2-1.5L46.5,16.6z M51.4,0v32.5h16V0H51.4z" />
</svg>`;

var ContentToggleArrow = `<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="7.4" viewBox="0 0 12 7.4">
  <path d="M10.6,0L6,4.6L1.4,0L0,1.4l6,6l6-6L10.6,0z" />
</svg>`;

const gcdsVerifyBannerCss = "@layer reset, default, fixed, container;@layer reset{:host{display:block}}@layer default{:host .gcds-verify-banner{background-color:var(--gcds-verify-banner-background);color:var(--gcds-verify-banner-text);font:var(--gcds-verify-banner-font)}:host .gcds-verify-banner :is(summary,.verify-banner__content){font-size:90%}:host .gcds-verify-banner summary{cursor:pointer;display:flex;margin-inline:auto;padding-block:var(--gcds-verify-banner-summary-padding)}:host .gcds-verify-banner summary :is(.svg-container,p small){margin:var(--gcds-verify-banner-summary-content-margin)}:host .gcds-verify-banner summary p{align-items:center;display:flex;flex-wrap:wrap;line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner summary .verify-banner__toggle{background:none;border:0;color:var(--gcds-verify-banner-toggle-text);flex:0 0 auto;font-weight:var(--gcds-verify-banner-toggle-font-weight);padding:0;pointer-events:none;text-decoration:underline}:host .gcds-verify-banner summary .verify-banner__toggle .svg-container path{fill:var(--gcds-verify-banner-toggle-text)}:host .gcds-verify-banner .verify-banner__content{border-block-start:var(--gcds-verify-banner-content-border-width) solid var(--gcds-verify-banner-content-border-color);margin:0 auto;padding-block-end:var(--gcds-verify-banner-content-padding-block-end);padding-block-start:var(\n        --gcds-verify-banner-content-padding-block-start\n      )}:host .gcds-verify-banner .verify-banner__content li{list-style:none}:host .gcds-verify-banner .verify-banner__content li :is(h4,p){width:90%}:host .gcds-verify-banner .verify-banner__content h4{margin:var(--gcds-verify-banner-content-heading-margin)}:host .gcds-verify-banner .verify-banner__content p{line-height:var(--gcds-verify-banner-line-height);margin:0}:host .gcds-verify-banner[open] summary .verify-banner__toggle svg{transform:rotate(-180deg)}}@layer fixed{:host .gcds-verify-banner.verify-banner--is-fixed{position:sticky;top:0;width:var(--gcds-verify-banner-max-content-width-full);z-index:9999}}@layer container{:host .gcds-verify-banner .container-lg,:host .gcds-verify-banner .container-md,:host .gcds-verify-banner .container-sm,:host .gcds-verify-banner .container-xl,:host .gcds-verify-banner .container-xs{width:90%}:host .gcds-verify-banner .container-full{max-width:var(--gcds-verify-banner-container-full);padding-inline:var(--gcds-verify-banner-container-padding)}:host .gcds-verify-banner .container-xl{max-width:var(--gcds-verify-banner-container-xl)}:host .gcds-verify-banner .container-lg{max-width:var(--gcds-verify-banner-container-lg)}:host .gcds-verify-banner .container-md{max-width:var(--gcds-verify-banner-container-md)}:host .gcds-verify-banner .container-sm{max-width:var(--gcds-verify-banner-container-sm)}:host .gcds-verify-banner .container-xs{max-width:var(--gcds-verify-banner-container-xs)}}";

const GcdsVerifyBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Defines the container width of the verify banner content
         */
        this.container = 'xl';
        /**
         * Defines if the banner's position is fixed.
         */
        this.isFixed = false;
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
        return (h(Host, { key: '81973537a21ff8bc06d7af751286180909137d4f' }, h("details", { key: 'ea98f8b396c065be3338f62f1b4bdfbffddc6d68', class: `gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}` }, h("summary", { key: 'b83b678363782e280872028016c1830f057f79a5', class: container ? `container-${container}` : '', "aria-expanded": "false", role: "button" }, h("span", { key: 'ea8489486256e7cf983ea62b534b3b953ffbdfd9', class: "svg-container", innerHTML: CanadaFlag }), h("p", { key: '441d0f62bfaa8232766fa25d4f293856d5919fc5' }, h("small", { key: 'fd9985644c5d448e783fe121392dcc752a11894c' }, I18N[lang].summary.text), h("button", { key: 'e367c1f16b77914512d7191d9c4acb979da28898', class: "verify-banner__toggle" }, h("small", { key: '1b7cec1da1f70df3108188f67c58df05e9f43265' }, I18N[lang].summary.link), h("span", { key: '88387f3e006781d43354182badf4db34ac890752', class: "svg-container", innerHTML: ContentToggleArrow })))), h("div", { key: '2a90d1b70f1ccf1c08f2d887f6bd4ec89138362a', class: `verify-banner__content ${container ? `container-${container}` : ''}` }, h("p", { key: 'c70e302d34681c52dbb2157020955821de2e66a0' }, h("small", { key: '91e86ac20f3241a976463438b7164183e16584ec' }, I18N[lang].content.description)), h("br", { key: '802f4c5b24f4b63b9764056638329a1be0580e2a' }), h("gcds-grid", { key: 'c9347190bdd322599825eb56bc78e63fcf28702f', tag: "ul", container: "lg", columns: "1fr", "columns-tablet": container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr' }, h("li", { key: 'bcbd1951e53638d63f335c3960c3be067f674f25' }, h("h4", { key: '093d8a04f8eb8ddb1d3b8aa07e430f2cc0ddc76d' }, I18N[lang].content.url.heading), h("p", { key: 'd5c47c818ecde61d8ef45138408231ec8332eee9' }, h("small", { key: '21e821fe073fa5260ba129da8e53f226e5f7922d' }, I18N[lang].content.url.text))), h("li", { key: '6bf334ae274e581dc7e7529b8e078123aa501836' }, h("h4", { key: '38001a7718f7a4384d8dbd7816285e193bd80f0f' }, I18N[lang].content.languages.heading), h("p", { key: 'a42c56b425effc00caf0a2b2d3c79aea52c7a4d5' }, h("small", { key: 'c05571e761970df2293667ca25f91d657d7784ff' }, I18N[lang].content.languages.text))), h("li", { key: 'f6c5b8619a5014470dd835c684244ac145f2c5fd' }, h("h4", { key: '3ac2cf2d08c5f94d07bcd7fbe1786b7a138d4f0d' }, I18N[lang].content.https.heading), h("p", { key: '596499c8b77e7260776da2ab782670820687a2b0' }, h("small", { key: '9b81bf698364397d705d0c20df078cb5f2f97171' }, I18N[lang].content.https.text, " ", h("strong", { key: 'b187d642957907d9501d13c617e3e54c1fa11887' }, "https://"), "."))), h("li", { key: '086c41a49bebea39aa287aa213e288ddd4c4d2f8' }, h("h4", { key: 'dd45cc64f0ad0779e28f228fdee78d6216c4c747' }, I18N[lang].content.contact.heading), h("p", { key: '745ab9a7fcfff95e6df069e182f334ecda0b27dd' }, h("small", { key: '7c7ae86324f385e9b23461126a418ecbb8f09a16' }, I18N[lang].content.contact.text))))))));
    }
    get el() { return getElement(this); }
};
GcdsVerifyBanner.style = gcdsVerifyBannerCss;

export { GcdsAlert as gcds_alert, GcdsBreadcrumbs as gcds_breadcrumbs, GcdsBreadcrumbsItem as gcds_breadcrumbs_item, GcdsButton as gcds_button, GcdsCard as gcds_card, GcdsCheckboxes as gcds_checkboxes, GcdsContainer as gcds_container, GcdsDateInput as gcds_date_input, GcdsDateModified as gcds_date_modified, GcdsDetails as gcds_details, GcdsErrorMessage as gcds_error_message, GcdsErrorSummary as gcds_error_summary, GcdsFileUploader as gcds_file_uploader, GcdsFooter as gcds_footer, GcdsGrid as gcds_grid, GcdsGridCol as gcds_grid_col, GcdsHeader as gcds_header, GcdsHeading as gcds_heading, GcdsHint as gcds_hint, GcdsIcon as gcds_icon, GcdsInput as gcds_input, GcdsLabel as gcds_label, GcdsLangToggle as gcds_lang_toggle, GcdsLink as gcds_link, GcdsNavGroup as gcds_nav_group, GcdsNavLink as gcds_nav_link, GcdsNotice as gcds_notice, GcdsPagination as gcds_pagination, GcdsPhaseBanner as gcds_phase_banner, GcdsRadios as gcds_radios, GcdsSearch as gcds_search, GcdsSelect as gcds_select, GcdsSideNav as gcds_side_nav, GcdsSignature as gcds_signature, GcdsSrOnly as gcds_sr_only, GcdsStepper as gcds_stepper, GcdsText as gcds_text, GcdsTextarea as gcds_textarea, GcdsTopNav as gcds_top_nav, GcdsVerifyBanner as gcds_verify_banner };
//# sourceMappingURL=gcds-alert.gcds-breadcrumbs.gcds-breadcrumbs-item.gcds-button.gcds-card.gcds-checkboxes.gcds-container.gcds-date-input.gcds-date-modified.gcds-details.gcds-error-message.gcds-error-summary.gcds-file-uploader.gcds-footer.gcds-grid.gcds-grid-col.gcds-header.gcds-heading.gcds-hint.gcds-icon.gcds-input.gcds-label.gcds-lang-toggle.gcds-link.gcds-nav-group.gcds-nav-link.gcds-notice.gcds-pagination.gcds-phase-banner.gcds-radios.gcds-search.gcds-select.gcds-side-nav.gcds-signature.gcds-sr-only.gcds-stepper.gcds-text.gcds-textarea.gcds-top-nav.gcds-verify-banner.entry.js.map

//# sourceMappingURL=gcds-alert_40.entry.js.map