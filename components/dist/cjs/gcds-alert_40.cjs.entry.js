'use strict';

var index = require('./index-BsuxX3YX.js');
var utils = require('./utils-DEpZ14B7.js');

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

const gcdsAlertCss = () => `@layer reset, default, fixed, role, wide, compact, hover, focus;@layer reset{:host{display:block}:host .gcds-alert{box-sizing:border-box;text-align:left}:host .gcds-alert .alert__close-btn{box-sizing:border-box;cursor:pointer;padding:0}:host .gcds-alert slot{display:initial}}@layer default{:host .gcds-alert{border-inline-start:var(--gcds-alert-border-width) solid transparent;color:var(--gcds-alert-text);container:component alert/inline-size;font:var(--gcds-alert-font);padding:var(--gcds-alert-padding)}:host .gcds-alert .alert__content{flex:1 1 auto}:host .gcds-alert .alert__content .alert__heading{font:var(--gcds-alert-content-heading-font);margin:var(--gcds-alert-content-heading-margin)}:host .gcds-alert .alert__content ::slotted(*){margin-block-start:0}:host .gcds-alert .alert__content ::slotted(:last-child){margin-block-end:0}:host .gcds-alert .alert__content ::slotted(:not(:last-child)){margin-block-end:var(--gcds-alert-content-slotted-margin)}:host .gcds-alert .alert__content ::slotted(ol),:host .gcds-alert .alert__content ::slotted(ul){margin-inline-start:var(--gcds-alert-content-slotted-list-margin);padding:0}:host .gcds-alert .alert__close-btn{background-color:var(--gcds-alert-button-default-background);border:var(--gcds-alert-button-border-width) solid transparent;border-radius:var(--gcds-alert-button-border-radius);color:var(--gcds-alert-button-default-text);margin:var(--gcds-alert-button-margin);transition:all .15s ease-in-out}:host .gcds-alert .alert__close-btn gcds-icon{align-items:center;display:flex;height:var(--gcds-alert-button-icon-width-and-height);justify-content:center;padding:var(--gcds-alert-button-icon-padding);width:var(--gcds-alert-button-icon-width-and-height)}}@layer fixed{:host .gcds-alert.alert--is-fixed{border:0;position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-alert.alert--role-danger{background-color:var(--gcds-alert-danger-background);border-color:var(--gcds-alert-danger-icon);color:var(--gcds-alert-danger-text)}:host .gcds-alert.alert--role-danger .alert__icon{color:var(--gcds-alert-danger-icon)}:host .gcds-alert.alert--role-info{background-color:var(--gcds-alert-info-background);border-color:var(--gcds-alert-info-icon);color:var(--gcds-alert-info-text)}:host .gcds-alert.alert--role-info .alert__icon{color:var(--gcds-alert-info-icon)}:host .gcds-alert.alert--role-success{background-color:var(--gcds-alert-success-background);border-color:var(--gcds-alert-success-icon);color:var(--gcds-alert-success-text)}:host .gcds-alert.alert--role-success .alert__icon{color:var(--gcds-alert-success-icon)}:host .gcds-alert.alert--role-warning{background-color:var(--gcds-alert-warning-background);border-color:var(--gcds-alert-warning-icon);color:var(--gcds-alert-warning-text)}:host .gcds-alert.alert--role-warning .alert__icon{color:var(--gcds-alert-warning-icon)}}@layer wide{@container alert (width >= 36em){:host .gcds-alert .alert__container{align-items:flex-start;display:flex}}}@layer compact{@container alert (width < 36em){:host .gcds-alert .alert__icon{margin:var(--gcds-alert-icon-mobile-margin)}:host .gcds-alert .alert__heading{margin:var(--gcds-alert-content-heading-mobile-margin)}:host .gcds-alert .alert__close-btn{margin:var(--gcds-alert-button-mobile-margin)}}}@layer hover{:is(:host .gcds-alert .alert__close-btn:active,:host .gcds-alert .alert__close-btn:hover){border-color:currentColor}}@layer focus{:host .gcds-alert .alert__close-btn:focus{background-color:var(--gcds-alert-button-focus-background);border-color:var(--gcds-alert-button-focus-background);box-shadow:0 0 0 var(--gcds-alert-button-border-width) var(--gcds-alert-button-focus-text);color:var(--gcds-alert-button-focus-text);outline:var(--gcds-alert-button-outline-width) solid var(--gcds-alert-button-focus-background);outline-offset:var(--gcds-alert-button-border-width)}}`;

const GcdsAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsDismiss = index.createEvent(this, "gcdsDismiss");
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang, } = this;
        return (index.h(index.Host, { key: '196150e847d3cea200cdb167c2cd2fee5cb2cea5' }, isOpen ? (index.h("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`, role: "alert", "aria-label": alertRole === 'danger'
                ? I18N$q[lang].label.danger
                : alertRole === 'info'
                    ? I18N$q[lang].label.info
                    : alertRole === 'success'
                        ? I18N$q[lang].label.success
                        : alertRole === 'warning'
                            ? I18N$q[lang].label.warning
                            : null }, index.h("gcds-container", { size: isFixed ? container : 'full', alignment: "center" }, index.h("div", { class: "alert__container" }, !hideRoleIcon && (index.h("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", "margin-right": "175", name: (alertRole === 'danger'
                ? 'exclamation-circle'
                : alertRole === 'info'
                    ? 'info-circle'
                    : alertRole === 'success'
                        ? 'checkmark-circle'
                        : alertRole === 'warning'
                            ? 'warning-triangle'
                            : undefined) })), index.h("div", { class: "alert__content" }, index.h("p", { class: "alert__heading" }, index.h("strong", null, heading)), index.h("slot", null)), !hideCloseBtn && (index.h("button", { class: "alert__close-btn", onClick: e => {
                const event = utils.emitEvent(e, this.gcdsDismiss);
                if (event) {
                    this.isOpen = false;
                }
            }, "aria-label": I18N$q[lang].closeBtn }, index.h("gcds-icon", { "aria-hidden": "true", name: "close", size: "text" }))))))) : null));
    }
    get el() { return index.getElement(this); }
};
GcdsAlert.style = gcdsAlertCss();

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

const gcdsBreadcrumbsCss = () => `@layer reset,default;@layer reset{:host{display:block}:host .gcds-breadcrumbs ol{list-style:none;overflow-x:hidden}}@layer default{:host .gcds-breadcrumbs ol{margin:var(--gcds-breadcrumbs-margin);padding:var(--gcds-breadcrumbs-padding)}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before,:host .gcds-breadcrumbs ol:not(.has-canada-link) ::slotted(:first-child):before{display:none}:host .gcds-breadcrumbs ol.has-canada-link gcds-breadcrumbs-item:first-child:before{display:none}}`;

const GcdsBreadcrumbs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { hideCanadaLink, lang } = this;
        return (index.h(index.Host, { key: 'f0eefe430929add48ae1206e8d6df0e3d04ceb65' }, index.h("nav", { key: '6080bc827624fe8711ced9bd3b53defda780be6f', "aria-label": I18N$p[lang].label, class: "gcds-breadcrumbs" }, index.h("ol", { key: '734f991a4ede7c602d744d2b40dd92da2d419faf', class: hideCanadaLink ? '' : 'has-canada-link' }, !hideCanadaLink ? (index.h("gcds-breadcrumbs-item", { href: I18N$p[lang].link }, "Canada.ca")) : null, index.h("slot", { key: '7204e441446c6640b0530a98ac1439c4d1185b35' })))));
    }
    get el() { return index.getElement(this); }
};
GcdsBreadcrumbs.style = gcdsBreadcrumbsCss();

const gcdsBreadcrumbsItemCss = () => `@layer reset,default,hover,focus;@layer reset{:host(.gcds-breadcrumbs-item){display:inline-block}:host(.gcds-breadcrumbs-item) gcds-link::part(link){display:inline-block;white-space:normal}:host(.gcds-breadcrumbs-item) slot{display:block}}@layer default{:host(.gcds-breadcrumbs-item){margin:var(--gcds-breadcrumbs-item-margin)!important}:host(.gcds-breadcrumbs-item):before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 8 14"><path fill="26374a" d="M7.7 6.3c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0z"/></svg>');display:inline-block;margin:var(--gcds-breadcrumbs-item-arrow-margin);width:.375rem}:host(.gcds-breadcrumbs-item) gcds-link::part(link){font:var(--gcds-breadcrumbs-item-font)}}`;

const GcdsBreadcrumbsItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
    }
    render() {
        const { href } = this;
        return (index.h(index.Host, { key: '682b212a6c22f60f5949b2664f5ace5bc172c3cf', role: "listitem", class: "gcds-breadcrumbs-item" }, index.h("gcds-link", { key: '00a6c00e78201987c9df9c1072547dc6465f29b1', size: "regular", href: href }, index.h("slot", { key: '6ea92ac89f08c8c9f64e727e92d4d68a60f9a2ba' }))));
    }
    get el() { return index.getElement(this); }
};
GcdsBreadcrumbsItem.style = gcdsBreadcrumbsItemCss();

const I18N$o = {
  en: {
    label: 'Opens in a new tab.',
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet.",
  },
};

const gcdsButtonCss = () => `@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);display:inline-block;font:var(--gcds-button-font-desktop);padding:var(--gcds-button-padding);text-align:center;text-wrap:balance;transition:all .15s ease-in-out;width:var(--gcds-button-width)}@media only screen and (width < 48em){:host .gcds-button{font:var(--gcds-button-font-mobile)}}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-start{background-color:var(--gcds-button-start-default-background);color:var(--gcds-button-start-default-text);font:var(--gcds-button-start-font-desktop);padding:var(--gcds-button-start-padding)}@media only screen and (width < 48em){:host .gcds-button.button--role-start{font:var(--gcds-button-start-font-mobile)}}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font-desktop);padding:var(--gcds-button-small-padding)}@media only screen and (width < 48em){:host .gcds-button.button--small{font:var(--gcds-button-small-font-mobile)}}}@layer disabled{:host([disabled]){pointer-events:none}:host([disabled]) .gcds-button[aria-disabled=true]{cursor:not-allowed;opacity:var(--gcds-button-shared-disabled-opacity);pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-start{background-color:var(--gcds-button-start-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background);color:var(--gcds-button-shared-active-text)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}`;

const GcdsButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsClick = index.createEvent(this, "gcdsClick");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
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
            const event = utils.emitEvent(e, this.gcdsClick, emitValue);
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
                this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
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
        observer.observe(this.el, utils.observerConfig);
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateType(this.type);
        this.validateButtonRole(this.buttonRole);
        this.validateSize(this.size);
        this.validateDisabled(this.disabled);
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
        return (index.h(index.Host, { key: 'f66acbffcd0a9ad259e72475e8899ea3cd03c171' }, index.h(Tag, Object.assign({ key: '9a133537992501c37c98b393c0238c252d5bb3b7' }, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => !disabled ? this.handleClick(e) : e.stopImmediatePropagation(), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: element => (this.shadowElement = element) }, inheritedAttributes, { part: "button" }), index.h("slot", { key: '6182e46131e20271386f52fd53e95490876fbb55' }), type === 'link' && target === '_blank' ? (index.h("gcds-icon", { name: "external", label: I18N$o[lang].label, "margin-left": "150" })) : null)));
    }
    static get delegatesFocus() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "type": [{
                "validateType": 0
            }],
        "buttonRole": [{
                "validateButtonRole": 0
            }],
        "size": [{
                "validateSize": 0
            }],
        "disabled": [{
                "validateDisabled": 0
            }]
    }; }
};
GcdsButton.style = gcdsButtonCss();

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

const gcdsCardCss = () => `@layer reset, default, link, hover, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);border:var(--gcds-card-border);color:var(--gcds-card-color);display:block;height:100%;max-width:var(--gcds-card-max-width);overflow:hidden;padding:var(--gcds-card-padding);position:relative}:host .gcds-card .gcds-badge{background-color:var(--gcds-card-badge-background-color);left:0;padding:var(--gcds-card-badge-padding);position:absolute;text-wrap:nowrap;top:0}@media only screen and (width < 48em){:host .gcds-card .gcds-badge{padding:var(--gcds-card-badge-mobile-padding)}}:host .gcds-card .gcds-card__image{display:block;margin:var(--gcds-card-image-margin);width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-desktop);width:fit-content}@media only screen and (width < 48em){:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-mobile)}}:host .gcds-card .gcds-card__title:has(+.gcds-card__description){margin:var(--gcds-card-title-margin)}:host .gcds-card .gcds-card__description{--gcds-text-size-body-desktop:var(--gcds-card-description-font-desktop)}:host .gcds-card .gcds-card__description>*{position:relative;z-index:1}@media only screen and (width < 48em){:host .gcds-card .gcds-card__description{font:var(--gcds-card-description-font-mobile)}}}@layer link{:host .gcds-card gcds-link::part(link):after{bottom:0;content:"";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:0}}@layer hover{@media (hover:hover){:host .gcds-card:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}@layer focus{:host .gcds-card:focus-within{box-shadow:var(--gcds-card-focus-box-shadow);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset)}:host gcds-link::part(link):focus{background-color:var(--gcds-card-focus-link-background-color);border:var(--gcds-card-focus-link-border);box-shadow:var(--gcds-card-focus-link-box-shadow);color:var(--gcds-card-focus-link-color);outline:var(--gcds-card-focus-link-outline);text-decoration:underline currentColor var(--gcds-card-focus-link-text-decoration-thickness)}}`;

const GcdsCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
        observer.observe(this.el, utils.observerConfig);
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
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        this.validateBadge();
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-card', this.errors, ['badge']);
        }
    }
    get renderDescription() {
        if (this.el.innerHTML.trim() != '') {
            return (index.h("div", { class: "gcds-card__description" }, index.h("slot", null)));
        }
        else if (this.description) {
            return (index.h("div", { class: "gcds-card__description" }, index.h("gcds-text", { "margin-bottom": "0" }, this.description)));
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
            return (index.h(index.Host, { key: '902ab3fc2b4d1a491d2f2909de5e37a423eb23f2' }, index.h("div", { key: '031a4590ddc8a53a23ed4fe0038d5d24fc97ed17', class: "gcds-card" }, badge && !errors.includes('badge') && (index.h("gcds-text", { key: '4e88651121d4bbfcd79352402d8557ad72997bad', id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "small" }, index.h("strong", { key: '1a588e4fda30fc3831bc01946619ccb4a8b75fc9' }, index.h("gcds-sr-only", { key: 'e59a94f22d1ca8b191e09518c00c2ffe5923eab2', tag: "span" }, I18N$n[lang].tagged), badge))), imgSrc && (index.h("img", { key: '5cafcc07dde740da62f2aedb007bb11942728256', src: imgSrc, alt: imgAlt ? imgAlt : '', class: "gcds-card__image" })), Element ? (index.h(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), index.h("gcds-link", { href: href }, cardTitle))) : (index.h("gcds-link", Object.assign({ href: href, class: "gcds-card__title", rel: rel, target: target }, taggedAttr), cardTitle)), renderDescription)));
        }
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "cardTitle": [{
                "validateCardTitle": 0
            }],
        "href": [{
                "validateHref": 0
            }],
        "badge": [{
                "validateBadge": 0
            }]
    }; }
};
GcdsCard.style = gcdsCardCss();

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
        validate: (x, context) => {
            const res1 = v1.validate(x, context);
            const res2 = v2.validate(x, context);
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
                en: utils.validationErrors.en.required,
                fr: utils.validationErrors.fr.required,
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
                en: utils.validationErrors.en.requiredEmail,
                fr: utils.validationErrors.fr.requiredEmail,
            },
        };
    },
};
const requiredFileInput = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: utils.validationErrors.en.requiredFile,
                fr: utils.validationErrors.fr.requiredFile,
            },
        };
    },
};
const requiredSelectField = {
    validate: (value) => {
        return {
            valid: value != null && value.trim() != '',
            reason: {
                en: utils.validationErrors.en.requiredSelect,
                fr: utils.validationErrors.fr.requiredSelect,
            },
        };
    },
};
const requiredDateInput = {
    validate: (date, context) => {
        var _a, _b;
        if (utils.isValidDate(date)) {
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
        // Backwards compatibility if params.format is not supplied
        const inferredFormat = splitDate.length === 3 ? 'full' : 'compact';
        const format = (_b = (_a = context === null || context === void 0 ? void 0 : context.params) === null || _a === void 0 ? void 0 : _a.format) !== null && _b !== void 0 ? _b : inferredFormat;
        return getDateInputError(dateObject, format);
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
        errorResponse.reason.en = utils.validationErrors.en.dateInput.all;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.all;
        // No day set
    }
    else if (!day && month && year && (format === 'full' || format === 'iso')) {
        errorResponse.errors.day = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.missingday;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingday;
        // No month set
    }
    else if ((day && !month && year) ||
        (!day && !month && year && format === 'compact')) {
        errorResponse.errors.month = true;
        if (format === 'iso') {
            errorResponse.reason.en = utils.validationErrors.en.dateInput.missingmonthinput;
            errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingmonthinput;
        }
        else {
            errorResponse.reason.en = utils.validationErrors.en.dateInput.missingmonth;
            errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingmonth;
        }
        // No year set
    }
    else if ((day && month && !year) ||
        (!day && month && !year && format === 'compact')) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.missingyear;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingyear;
        // No day and month set
    }
    else if (!day && !month && year) {
        errorResponse.errors.day = true;
        errorResponse.errors.month = true;
        if (format === 'iso') {
            errorResponse.reason.en =
                utils.validationErrors.en.dateInput.missingmonthinputday;
            errorResponse.reason.fr =
                utils.validationErrors.fr.dateInput.missingmonthinputday;
        }
        else {
            errorResponse.reason.en = utils.validationErrors.en.dateInput.missingmonthday;
            errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingmonthday;
        }
        // No day and year set
    }
    else if (!day && month && !year) {
        errorResponse.errors.day = true;
        errorResponse.errors.year = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.missingdayyear;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingdayyear;
        // No month and year set
    }
    else if (day && !month && !year) {
        errorResponse.errors.year = true;
        errorResponse.errors.month = true;
        if (format === 'iso') {
            errorResponse.reason.en =
                utils.validationErrors.en.dateInput.missingmonthinputyear;
            errorResponse.reason.fr =
                utils.validationErrors.fr.dateInput.missingmonthinputyear;
        }
        else {
            errorResponse.reason.en = utils.validationErrors.en.dateInput.missingmonthyear;
            errorResponse.reason.fr = utils.validationErrors.fr.dateInput.missingmonthyear;
        }
        // Year is formatted incorrectly
    }
    else if (year.toString().length != 4) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.invalidyearlength;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.invalidyearlength;
        // Year format
    }
    else if (Number(year) < 0 || Number(year) > 9999) {
        errorResponse.errors.year = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.invalidyear;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.invalidyear;
        // Invalid month
    }
    else if (Number(month) < 1 || Number(month) > 12) {
        errorResponse.errors.month = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.invalidmonth;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.invalidmonth;
        // Invalid day
    }
    else if (!utils.isValidDay(`${year}-${month}-${day}`)) {
        errorResponse.errors.day = true;
        errorResponse.reason.en = utils.validationErrors.en.dateInput.invalidday;
        errorResponse.reason.fr = utils.validationErrors.fr.dateInput.invalidday;
    }
    return errorResponse;
};
const requiredRadio = {
    validate: (value) => {
        return {
            valid: value != null && value != '',
            reason: {
                en: utils.validationErrors.en.requiredRadio,
                fr: utils.validationErrors.fr.requiredRadio,
            },
        };
    },
};
const requiredCheckboxGroup = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: utils.validationErrors.en.requiredCheckboxGroup,
                fr: utils.validationErrors.fr.requiredCheckboxGroup,
            },
        };
    },
};
const requiredCheckboxSingle = {
    validate: (value) => {
        return {
            valid: value.length > 0,
            reason: {
                en: utils.validationErrors.en.requiredCheckboxSingle,
                fr: utils.validationErrors.fr.requiredCheckboxSingle,
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
    const { name, disabled, hasError, errorMessage, gcdsFocus, gcdsInput, gcdsChange, gcdsClick, gcdsBlur, required, hint, isGroup, lang, value, checkboxTitle, form, hideLabel, onBlurValidate, } = element;
    const attrsInput = {
        name: name,
        id: checkbox.id,
        disabled: disabled,
        required: required,
        value: checkbox.value,
        title: checkboxTitle,
        form: form,
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
    if (!isGroup && hideLabel) {
        labelAttrs['hide-label'] = hideLabel;
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
    return (index.h("div", { class: `gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}` }, index.h("input", Object.assign({ type: "checkbox" }, attrsInput, { onBlur: isGroup ? () => gcdsBlur.emit() : onBlurValidate, onFocus: () => gcdsFocus.emit(), onChange: e => handleInput(e, gcdsChange), onInput: e => handleInput(e, gcdsInput), onClick: e => !disabled ? emitEvent(e, gcdsClick) : e.stopImmediatePropagation(), ref: (el) => (element.shadowElement = [...(element.shadowElement || []), el]) })), index.h("gcds-label", Object.assign({}, labelAttrs, { onClick: e => e.stopPropagation() })), checkbox.hint || (!isGroup && hint) ? (index.h("gcds-hint", { "hint-id": checkbox.id }, !isGroup && hint ? hint : checkbox.hint)) : null, !isGroup && errorMessage ? (index.h("gcds-error-message", { messageId: checkbox.id }, errorMessage)) : null));
};

const I18N$m = {
  en: {
    required: ' (required)',
  },
  fr: {
    required: ' (obligatoire)',
  },
};

const gcdsCheckboxesCss = () => `@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-checkboxes__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-checkboxes__fieldset legend{padding:0}:host .gcds-checkbox{padding:0}:host .gcds-checkbox gcds-label{display:block}:host .gcds-checkbox gcds-label>label:after,:host .gcds-checkbox gcds-label>label:before{box-sizing:border-box;content:"";cursor:pointer;position:absolute}}@layer default{:host .gcds-checkboxes__fieldset{margin:var(--gcds-checkbox-fieldset-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-desktop);margin:var(--gcds-checkbox-legend-margin)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend{font:var(--gcds-checkbox-legend-font-mobile)}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend .legend__required{font:var(--gcds-checkbox-legend-required-font-mobile)}}:host .gcds-checkboxes__fieldset .gcds-checkboxes__legend:not(:has(+gcds-hint)){margin:var(--gcds-checkbox-legend-hint-margin)}:host .gcds-checkbox{color:var(--gcds-checkbox-default-text);font:var(--gcds-checkbox-font);margin:var(--gcds-checkbox-margin)!important;max-width:var(--gcds-checkbox-max-width);min-height:calc(var(--gcds-checkbox-input-height-and-width) - var(--gcds-checkbox-padding));padding:var(--gcds-checkbox-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-checkbox :is(gcds-label,gcds-hint,gcds-error-message){padding:var(--gcds-checkbox-label-padding)!important}:host .gcds-checkbox gcds-hint::part(hint){margin:0}:host .gcds-checkbox gcds-label:after,:host .gcds-checkbox gcds-label:before,:host .gcds-checkbox input{position:absolute}:host .gcds-checkbox gcds-label>label:before,:host .gcds-checkbox input{height:var(--gcds-checkbox-input-height-and-width);left:0;top:0;width:var(--gcds-checkbox-input-height-and-width)}:host .gcds-checkbox input{opacity:0}:host .gcds-checkbox gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-checkbox-label-font-desktop);--gcds-label-font-mobile:var(--gcds-checkbox-label-font-mobile)}:host .gcds-checkbox gcds-label>label:before{background-color:var(--gcds-checkbox-default-background);border:var(--gcds-checkbox-input-border-width) solid;border-radius:var(--gcds-checkbox-input-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-checkbox gcds-label>label:after{border:var(--gcds-checkbox-check-border-width) solid;border-block-start:0!important;border-inline-start:0!important;height:var(--gcds-checkbox-check-height);left:var(--gcds-checkbox-check-left);opacity:0;top:var(--gcds-checkbox-check-top);transform:rotate(40deg);width:var(--gcds-checkbox-check-width)}:host .gcds-checkbox input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-checkbox.gcds-checkbox--disabled{color:var(--gcds-checkbox-disabled-text)}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:after,:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-checkbox.gcds-checkbox--disabled gcds-label>label:before{background-color:var(--gcds-checkbox-disabled-background);border-color:currentcolor}:host .gcds-checkbox.gcds-checkbox--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-checkbox-danger-border)}:host .gcds-checkbox.gcds-checkbox--error:not(:focus-within) gcds-label>label:after{color:var(--gcds-checkbox-danger-border)}}@layer focus{:host .gcds-checkbox:focus-within input:focus+gcds-label>label:before{background:var(--gcds-checkbox-focus-background);box-shadow:var(--gcds-checkbox-focus-box-shadow);color:var(--gcds-checkbox-focus-color);outline:var(--gcds-checkbox-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-checkbox-input-border-width)}:host .gcds-checkbox:focus-within input:focus+gcds-label>label:after{color:var(--gcds-checkbox-focus-color)}}`;

const GcdsCheckboxes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsClick = index.createEvent(this, "gcdsClick");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsError = index.createEvent(this, "gcdsError");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.isGroup = false;
        // @ts-ignore - Used by renderCheckbox() to set title on error
        this.checkboxTitle = '';
        this._validator = defaultValidator;
        /**
         * For single checkbox, specifies if the label is hidden or not.
         */
        this.hideLabel = false;
        /**
         * For checkbox groups, specifies if the legend is hidden or not.
         */
        this.hideLegend = false;
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
                this.updateValidity();
            }
            customEvent.emit([...this.value]);
        };
    }
    validateName() {
        this.errors = utils.handleErrors(this.errors, 'name', this.name);
    }
    validateLegend() {
        if (this.isGroup) {
            this.errors = utils.handleErrors(this.errors, 'legend', this.legend);
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
        this.errors = utils.handleErrors(this.errors, 'options', this.optionsArr, invalidOptions);
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
                utils.logError('gcds-checkboxes', ['Invalid array for value']);
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
        this.updateValidity();
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
    /**
     * Read-only property of the checkboxes, returns a ValidityState object that represents the validity states this element is in.
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
        utils.handleValidationResult(this.el, this._validator.validate(this.value), this.isGroup ? this.legend : this.optionsArr[0].label, this.gcdsError, this.gcdsValid, this.lang);
        this.checkboxTitle = this.errorMessage;
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
    /**
     * Check the validity of gcds-checkboxes
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-checkboxes
     */
    async getValidationMessage() {
        return this.internals.validationMessage;
    }
    /**
     * Update gcds-checkboxes's validity using internal input
     */
    updateValidity() {
        var _a;
        if (((_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const validity = utils.validateRadioCheckboxGroup(this.shadowElement);
            let validationMessage = null;
            if (validity === null || validity === void 0 ? void 0 : validity.valueMissing) {
                validationMessage =
                    this.lang === 'en'
                        ? 'Choose an option to continue.'
                        : 'Choisissez une option pour continuer.';
            }
            this.internals.setValidity(validity, validationMessage, this.shadowElement[0]);
            // Set input title when HTML error occruring
            this.checkboxTitle = validationMessage;
        }
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
        return utils.isValid(this.errors, ['name', 'legend', 'options']);
    }
    async componentWillLoad() {
        var _a;
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
            utils.logError('gcds-checkboxes', this.errors);
        }
        this.initialState = this.value;
    }
    async componentDidUpdate() {
        // Validate props again if changed after render
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-checkboxes', this.errors);
        }
    }
    async componentDidLoad() {
        this.updateValidity();
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                this.shadowElement[0].focus();
            });
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
                utils.logError('gcds-checkboxes', ['Invalid JSON string for options']);
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
        this.shadowElement = [];
        if (this.validateRequiredProps()) {
            return (index.h(index.Host, { key: '2ada091aa7634da7f9bcf86f966c91d6aea49d37', onBlur: () => this.isGroup && this.onBlurValidate() }, this.isGroup ? (index.h("fieldset", Object.assign({ class: "gcds-checkboxes__fieldset" }, fieldsetAttrs), index.h("legend", { id: "checkboxes-legend", class: "gcds-checkboxes__legend" }, this.hideLegend ? (index.h("gcds-sr-only", { tag: "span" }, legend, required && (index.h("span", { class: "legend__required" }, I18N$m[this.lang].required)))) : (index.h(index.Fragment, null, legend, required && (index.h("span", { class: "legend__required" }, I18N$m[this.lang].required))))), hint ? (index.h("gcds-hint", { id: "checkboxes-hint", "hint-id": "checkboxes" }, hint)) : null, errorMessage ? (index.h("div", null, index.h("gcds-error-message", { id: "checkboxes-error", messageId: "checkboxes" }, errorMessage))) : null, this.optionsArr &&
                this.optionsArr.map(checkbox => {
                    return renderCheckbox(checkbox, this, utils.emitEvent, this.handleInput);
                }))) : (this.optionsArr &&
                this.optionsArr.length > 0 &&
                renderCheckbox(this.optionsArr[0], this, utils.emitEvent, this.handleInput))));
        }
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "name": [{
                "validateName": 0
            }],
        "legend": [{
                "validateLegend": 0
            }],
        "options": [{
                "validateOptions": 0
            }],
        "disabled": [{
                "validateDisabledCheckbox": 0
            }],
        "value": [{
                "validateValue": 0
            }],
        "errorMessage": [{
                "validateErrorMessage": 0
            }],
        "validator": [{
                "validateValidator": 0
            }],
        "hasError": [{
                "validateHasError": 0
            }],
        "lang": [{
                "watchLang": 0
            }]
    }; }
};
GcdsCheckboxes.style = gcdsCheckboxesCss();

const gcdsContainerCss = () => `@layer reset,default,border,margin,padding,alignment,size,layout;@layer reset{:host{display:block}:host .gcds-container{box-sizing:border-box;display:block;margin:0;padding:0}:host .gcds-container slot{display:initial}}@layer default{:host .gcds-container[class*=size]{width:var(--gcds-container-size-full)}}@layer border{:host .gcds-container.container-border{border:var(--gcds-container-border)}}@layer margin{:host .gcds-container.m-0{margin:var(--gcds-container-spacing-0)}:host .gcds-container.m-25{margin:var(--gcds-container-spacing-25)}:host .gcds-container.m-50{margin:var(--gcds-container-spacing-50)}:host .gcds-container.m-75{margin:var(--gcds-container-spacing-75)}:host .gcds-container.m-100{margin:var(--gcds-container-spacing-100)}:host .gcds-container.m-125{margin:var(--gcds-container-spacing-125)}:host .gcds-container.m-150{margin:var(--gcds-container-spacing-150)}:host .gcds-container.m-175{margin:var(--gcds-container-spacing-175)}:host .gcds-container.m-200{margin:var(--gcds-container-spacing-200)}:host .gcds-container.m-225{margin:var(--gcds-container-spacing-225)}:host .gcds-container.m-250{margin:var(--gcds-container-spacing-250)}:host .gcds-container.m-300{margin:var(--gcds-container-spacing-300)}:host .gcds-container.m-350{margin:var(--gcds-container-spacing-350)}:host .gcds-container.m-400{margin:var(--gcds-container-spacing-400)}:host .gcds-container.m-450{margin:var(--gcds-container-spacing-450)}:host .gcds-container.m-500{margin:var(--gcds-container-spacing-500)}:host .gcds-container.m-550{margin:var(--gcds-container-spacing-550)}:host .gcds-container.m-600{margin:var(--gcds-container-spacing-600)}:host .gcds-container.m-650{margin:var(--gcds-container-spacing-650)}:host .gcds-container.m-700{margin:var(--gcds-container-spacing-700)}:host .gcds-container.m-750{margin:var(--gcds-container-spacing-750)}:host .gcds-container.m-800{margin:var(--gcds-container-spacing-800)}:host .gcds-container.m-850{margin:var(--gcds-container-spacing-850)}:host .gcds-container.m-900{margin:var(--gcds-container-spacing-900)}:host .gcds-container.m-950{margin:var(--gcds-container-spacing-950)}:host .gcds-container.m-1000{margin:var(--gcds-container-spacing-1000)}:host .gcds-container.m-1050{margin:var(--gcds-container-spacing-1050)}:host .gcds-container.m-1100{margin:var(--gcds-container-spacing-1100)}:host .gcds-container.m-1150{margin:var(--gcds-container-spacing-1150)}:host .gcds-container.m-1200{margin:var(--gcds-container-spacing-1200)}:host .gcds-container.m-1250{margin:var(--gcds-container-spacing-1250)}}@layer padding{:host .gcds-container.p-0{padding:var(--gcds-container-spacing-0)}:host .gcds-container.p-25{padding:var(--gcds-container-spacing-25)}:host .gcds-container.p-50{padding:var(--gcds-container-spacing-50)}:host .gcds-container.p-75{padding:var(--gcds-container-spacing-75)}:host .gcds-container.p-100{padding:var(--gcds-container-spacing-100)}:host .gcds-container.p-125{padding:var(--gcds-container-spacing-125)}:host .gcds-container.p-150{padding:var(--gcds-container-spacing-150)}:host .gcds-container.p-175{padding:var(--gcds-container-spacing-175)}:host .gcds-container.p-200{padding:var(--gcds-container-spacing-200)}:host .gcds-container.p-225{padding:var(--gcds-container-spacing-225)}:host .gcds-container.p-250{padding:var(--gcds-container-spacing-250)}:host .gcds-container.p-300{padding:var(--gcds-container-spacing-300)}:host .gcds-container.p-350{padding:var(--gcds-container-spacing-350)}:host .gcds-container.p-400{padding:var(--gcds-container-spacing-400)}:host .gcds-container.p-450{padding:var(--gcds-container-spacing-450)}:host .gcds-container.p-500{padding:var(--gcds-container-spacing-500)}:host .gcds-container.p-550{padding:var(--gcds-container-spacing-550)}:host .gcds-container.p-600{padding:var(--gcds-container-spacing-600)}:host .gcds-container.p-650{padding:var(--gcds-container-spacing-650)}:host .gcds-container.p-700{padding:var(--gcds-container-spacing-700)}:host .gcds-container.p-750{padding:var(--gcds-container-spacing-750)}:host .gcds-container.p-800{padding:var(--gcds-container-spacing-800)}:host .gcds-container.p-850{padding:var(--gcds-container-spacing-850)}:host .gcds-container.p-900{padding:var(--gcds-container-spacing-900)}:host .gcds-container.p-950{padding:var(--gcds-container-spacing-950)}:host .gcds-container.p-1000{padding:var(--gcds-container-spacing-1000)}:host .gcds-container.p-1050{padding:var(--gcds-container-spacing-1050)}:host .gcds-container.p-1100{padding:var(--gcds-container-spacing-1100)}:host .gcds-container.p-1150{padding:var(--gcds-container-spacing-1150)}:host .gcds-container.p-1200{padding:var(--gcds-container-spacing-1200)}:host .gcds-container.p-1250{padding:var(--gcds-container-spacing-1250)}}@layer alignment{:host .gcds-container.alignment-start{margin-inline-start:0!important}:host .gcds-container.alignment-center{margin-inline:auto!important}:host .gcds-container.alignment-end{margin-inline-end:0!important;margin-inline-start:auto!important}}@layer size{:host .gcds-container.size-xl{max-width:var(--gcds-container-size-xl)}:host .gcds-container.size-lg{max-width:var(--gcds-container-size-lg)}:host .gcds-container.size-md{max-width:var(--gcds-container-size-md)}:host .gcds-container.size-sm{max-width:var(--gcds-container-size-sm)}:host .gcds-container.size-xs{max-width:var(--gcds-container-size-xs)}}@layer layout{:host .gcds-container.layout-full{max-width:100%!important}:host .gcds-container.layout-page{margin-inline:auto!important;max-width:90%!important;width:var(--gcds-container-size-xl)!important}}`;

const GcdsContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Defines if the container has a border.
         */
        this.border = false;
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
        const { alignment, border, layout, margin, padding, size, tag } = this;
        const Tag = tag;
        return (index.h(index.Host, { key: 'ad484bbd9acbfd917d528e05f9467c2bf2b4fae9' }, index.h(Tag, { key: '0a4f80b47a7b1a2f0ba81368ecb3004a8fc5a57f', class: `
            gcds-container
            ${border ? 'container-border' : ''}
            ${alignment && layout != 'page' ? `alignment-${alignment}` : ''}
            ${layout ? `layout-${layout}` : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          ` }, index.h("slot", { key: '0be601a53f54cb8bfb36ec45ec9ace5d8f9cca62' }))));
    }
    get el() { return index.getElement(this); }
};
GcdsContainer.style = gcdsContainerCss();

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
    rangeUnderflow: 'Date must be on or after {{min}}.',
    rangeOverflow: 'Date must be on or before {{max}}.',
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
    rangeUnderflow: 'La date doit être le {{min}} ou après.',
    rangeOverflow: 'La date doit être le {{max}} ou avant.',
  },
};

const gcdsDateInputCss = () => `@layer reset, default, hint, error;@layer reset{:host{display:block}:host .gcds-date-input__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-date-input__fieldset legend{padding:0}}@layer default{:host .gcds-date-input__fieldset legend{color:var(--gcds-date-input-fieldset-text);font:var(--gcds-date-input-fieldset-font-desktop)}:host .gcds-date-input__fieldset legend .legend__required{font:var(--gcds-date-input-fieldset-required-font-desktop);margin:var(--gcds-date-input-fieldset-required-margin)!important;vertical-align:middle}@media only screen and (width < 48em){:host .gcds-date-input__fieldset legend{font:var(--gcds-date-input-fieldset-font-mobile)}:host .gcds-date-input__fieldset legend .legend__required{font:var(--gcds-date-input-fieldset-required-font-mobile)}}:host .gcds-date-input__day,:host .gcds-date-input__month,:host .gcds-date-input__year{display:inline-block;margin-inline-end:var(--gcds-date-input-margin);--gcds-label-font-desktop:var(--gcds-date-input-label-font-desktop);--gcds-label-font-mobile:var(--gcds-date-input-label-font-mobile )}}@layer hint{:host gcds-hint{margin:var(--gcds-date-input-fieldset-hint-margin)}}@layer error{:host gcds-input.gcds-date-input--error::part(input),:host gcds-select.gcds-date-input--error::part(select){border-color:var(--gcds-date-input-danger-border)}}`;

const GcdsDateInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsError = index.createEvent(this, "gcdsError");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        // Array to store which native HTML errors are happening on the input
        this.htmlValidationErrors = [];
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
         * Block non-numeric keys in year and day inputs
         * This replicates how a number input would function
         */
        this.blockInvalidKeys = (ev) => {
            const allowed = [
                'Backspace',
                'Delete',
                'ArrowLeft',
                'ArrowRight',
                'Tab',
                'Home',
                'End',
            ];
            if (allowed.includes(ev.key))
                return;
            if (!/^\d$/.test(ev.key)) {
                ev.preventDefault();
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
        if (!this.format ||
            (this.format !== 'full' &&
                this.format !== 'compact' &&
                this.format !== 'iso')) {
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
        else {
            this.yearValue = '';
            this.monthValue = '';
            this.dayValue = '';
            this.internals.setFormValue(null);
        }
        this.updateValidity();
    }
    /**
     * Read-only property of the date-input, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
    }
    validateValidator() {
        this._validator = getValidator(this.validator);
    }
    /**
     * Call any active validators
     */
    async validate() {
        var _a, _b, _c, _d;
        const format = this.format;
        const value = format === 'full' || format === 'iso'
            ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
            : `${this.yearValue}-${this.monthValue}`;
        this.hasError = utils.handleValidationResult(this.el, this._validator.validate(value, { params: { format } }), this.legend, this.gcdsError, this.gcdsValid, this.lang, { day: false, month: false, year: false });
        // Don't use the valueMissing and badInput errors here since they are handled by the validator above
        if (!this.internals.checkValidity() && !((_a = this.internals.validity) === null || _a === void 0 ? void 0 : _a.valueMissing) && !((_b = this.internals.validity) === null || _b === void 0 ? void 0 : _b.badInput)) {
            this.errorMessage = (_c = this.htmlValidationErrors[0]) === null || _c === void 0 ? void 0 : _c.errorMessage;
            this.hasError = Object.assign(Object.assign({}, this.hasError), (_d = this.htmlValidationErrors[0]) === null || _d === void 0 ? void 0 : _d.hasError);
        }
    }
    /**
     * Check the validity of gcds-date-input
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-date-input
     */
    async getValidationMessage() {
        return this.internals.validationMessage;
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
     * Combine validity states of internal form elements and validate
     * Returns combined ValidityState, array of elements with errors and error message
     */
    checkAndValidateValidity() {
        var _a, _b, _c, _d, _e, _f;
        // Order elements based on format and language
        let elements = [this.monthInput, this.yearInput];
        if (this.format === 'full') {
            this.lang === 'en' ? elements.splice(1, 0, this.dayInput) : elements.unshift(this.dayInput);
        }
        else if (this.format === 'iso') {
            elements = [this.yearInput, this.monthInput, this.dayInput];
        }
        this.htmlValidationErrors = [];
        let valid = true;
        let valueMissing = false;
        let badInput = false;
        let rangeUnderflow = false;
        let rangeOverflow = false;
        let formError = [];
        let errorMessage = null;
        // Check if required or some value has been entered
        if (this.required || this.value != null) {
            elements.forEach(el => {
                // valueMissing validation
                if (el.value === '' || el.value == null) {
                    valueMissing = true;
                    valid = false;
                    formError.push(el);
                }
            });
            errorMessage = getDateInputError({
                day: (_a = this.dayInput) === null || _a === void 0 ? void 0 : _a.value,
                month: (_b = this.monthInput) === null || _b === void 0 ? void 0 : _b.value,
                year: (_c = this.yearInput) === null || _c === void 0 ? void 0 : _c.value
            }, this.format).reason[this.lang];
        }
        // Check if any field has bad input
        if (this.required && !valueMissing) {
            const badInputError = getDateInputError({
                day: (_d = this.dayInput) === null || _d === void 0 ? void 0 : _d.value,
                month: (_e = this.monthInput) === null || _e === void 0 ? void 0 : _e.value,
                year: (_f = this.yearInput) === null || _f === void 0 ? void 0 : _f.value
            }, this.format);
            if (badInputError.reason.en != '') {
                badInput = true;
                errorMessage = badInputError.reason[this.lang];
                formError = elements;
                this.htmlValidationErrors.push({
                    error: 'badInput',
                    hasError: badInputError.errors,
                    errorMessage
                });
            }
        }
        // Only check min if all values are present and valid
        if (this.value != null && this.min && !valueMissing && !badInput) {
            const setDate = new Date(this.value);
            const minDate = new Date(this.min);
            if (setDate < minDate) {
                valid = false;
                rangeUnderflow = true;
                formError = elements;
                errorMessage = I18N$l[this.lang].rangeUnderflow.replace('{{min}}', this.min);
                this.htmlValidationErrors.push({
                    error: 'rangeUnderflow',
                    hasError: { day: true, month: true, year: true },
                    errorMessage
                });
            }
        }
        // Only check max if all values are present, valid and no min error
        if (this.value != null && this.max && !valueMissing && !badInput && !rangeUnderflow) {
            const setDate = new Date(this.value);
            const maxDate = new Date(this.max);
            if (setDate > maxDate) {
                valid = false;
                rangeOverflow = true;
                errorMessage = I18N$l[this.lang].rangeOverflow.replace('{{max}}', this.max);
                this.htmlValidationErrors.push({
                    error: 'rangeOverflow',
                    hasError: { day: true, month: true, year: true },
                    errorMessage
                });
                formError = elements;
            }
        }
        const validity = {
            valueMissing,
            typeMismatch: false,
            patternMismatch: false,
            tooLong: false,
            tooShort: false,
            rangeUnderflow,
            rangeOverflow,
            stepMismatch: false,
            badInput,
            customError: false,
            valid,
        };
        return {
            validity,
            formError,
            errorMessage
        };
    }
    /**
     * Update gcds-date-input's validity using internal form elements
     */
    updateValidity() {
        if (((this.format === 'full' || this.format === 'iso') &&
            (!this.yearInput || !this.monthInput || !this.dayInput)) ||
            (this.format === 'compact' && (!this.yearInput || !this.monthInput)))
            return;
        const { validity, formError, errorMessage } = this.checkAndValidateValidity();
        let validationMessage = null;
        if ((validity === null || validity === void 0 ? void 0 : validity.valueMissing) || (validity === null || validity === void 0 ? void 0 : validity.badInput) || (validity === null || validity === void 0 ? void 0 : validity.rangeUnderflow) || (validity === null || validity === void 0 ? void 0 : validity.rangeOverflow)) {
            validationMessage = errorMessage;
        }
        this.internals.setValidity(validity, validationMessage, formError[0]);
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
        observer.observe(this.el, utils.observerConfig);
    }
    /**
     * Logic to combine all input values together based on format
     */
    setValue() {
        const { format } = this;
        let { yearValue, monthValue, dayValue } = this;
        // Sanitizes a numeric date value, optionally normalizing to two digits with padding
        const sanitizeValue = (value, pad = true) => {
            if (!value || value === '0')
                return value;
            let sanitizedValue = value.replace(/[eE-]/g, '');
            // Normalize to two digits if possible, e.g. '3' -> '03'
            if (pad)
                sanitizedValue = String(parseInt(sanitizedValue, 10)).padStart(2, '0');
            return sanitizedValue;
        };
        dayValue = sanitizeValue(dayValue);
        this.dayValue = dayValue;
        if (format === 'iso') {
            monthValue = sanitizeValue(monthValue);
            this.monthValue = monthValue;
        }
        yearValue = sanitizeValue(yearValue, false);
        this.yearValue = yearValue;
        if (format === 'full' || format === 'iso') {
            this.value = `${yearValue}-${monthValue}-${dayValue}`;
        }
        else if (format === 'compact') {
            this.value = `${yearValue}-${monthValue}`;
        }
        this.internals.setFormValue(this.value);
        this.updateValidity();
        return true;
    }
    /**
     * Split value into parts depending on format
     */
    splitFormValue() {
        if (this.format === 'compact') {
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
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        // Assign required validator if needed
        requiredValidator(this.el, 'date-input');
        this.validateValidator();
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-date-input', this.errors);
        }
        this.watchValue();
        if (this.value && utils.isValidDate(this.value)) {
            this.splitFormValue();
            this.setValue();
            this.initialValue = this.value;
        }
    }
    async componentDidLoad() {
        this.updateValidity();
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.fieldset) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { legend, name, format, required, hint, errorMessage, disabled, lang, hasError, form, } = this;
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
        const month = this.format !== 'iso' ? (index.h("gcds-select", Object.assign({ label: I18N$l[lang].month, selectId: "month", name: "month", defaultValue: I18N$l[lang].selectmonth, disabled: disabled, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), value: this.monthValue, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage, form: form, ref: el => (this.monthInput = el) }), options.map(option => (index.h("option", { key: option, value: option }, I18N$l[lang]['months'][option]))))) : (index.h("gcds-input", Object.assign({ name: "month", label: I18N$l[lang].month, inputId: "month", type: "text", inputmode: "numeric", size: 2, disabled: disabled, value: this.monthValue, onInput: e => this.handleInput(e, 'month'), onChange: e => this.handleInput(e, 'month'), onKeyDown: this.blockInvalidKeys, class: `gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}`, "validate-on": 'other' }, requiredAttr, { "aria-invalid": hasError['month'].toString(), "aria-description": hasError['month'] && errorMessage, form: form, ref: el => (this.monthInput = el) })));
        const year = (index.h("gcds-input", Object.assign({ key: 'd2cb93276494328fa676b3caa524df0d171bab8c', name: "year", label: I18N$l[lang].year, inputId: "year", type: "text", inputmode: "numeric", size: 4, disabled: disabled, value: this.yearValue, onInput: e => this.handleInput(e, 'year'), onChange: e => this.handleInput(e, 'year'), onKeyDown: this.blockInvalidKeys, class: `gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}`, "validate-on": 'other' }, requiredAttr, { "aria-invalid": hasError['year'].toString(), "aria-description": hasError['year'] && errorMessage, form: form, ref: el => (this.yearInput = el) })));
        const day = (index.h("gcds-input", Object.assign({ key: 'c49e3271490ee991238806a466391ddd36dc5e69', name: "day", label: I18N$l[lang].day, inputId: "day", type: "text", inputmode: "numeric", size: 2, disabled: disabled, value: this.dayValue, onInput: e => this.handleInput(e, 'day'), onChange: e => this.handleInput(e, 'day'), onKeyDown: this.blockInvalidKeys, "validate-on": 'other', class: `gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}` }, requiredAttr, { "aria-invalid": hasError['day'].toString(), "aria-description": hasError['day'] && errorMessage, form: form, ref: el => (this.dayInput = el) })));
        let formatArray;
        if (format === 'iso') {
            formatArray = [year, month, day];
        }
        else if (format === 'compact') {
            formatArray = [month, year];
        }
        else if (format === 'full') {
            formatArray = lang === 'en' ? [month, day, year] : [day, month, year];
        }
        return (index.h(index.Host, { key: 'bf42aef4ccdef2292ef655e6ef22119c2ad16164', name: name, onBlur: () => this.onBlur() }, this.validateRequiredProps() && (index.h("fieldset", Object.assign({ key: '14c3367ba75e75d448d85d526909e5e38fa35e62', class: "gcds-date-input__fieldset" }, fieldsetAttrs, { ref: el => (this.fieldset = el) }), index.h("legend", { key: 'dc842742fe3e58aac7b9742129f28344c4750d05', id: "date-input-legend" }, legend, required ? (index.h("span", { class: "legend__required" }, I18N$l[lang].required)) : null), hint ? (index.h("gcds-hint", { id: "date-input-hint", "hint-id": "date-input" }, hint)) : null, errorMessage ? (index.h("div", null, index.h("gcds-error-message", { id: "date-input-error", messageId: "date-input" }, errorMessage))) : null, formatArray))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "name": [{
                "validateName": 0
            }],
        "legend": [{
                "validateLegend": 0
            }],
        "format": [{
                "validateFormat": 0
            }],
        "value": [{
                "watchValue": 0
            }],
        "validator": [{
                "validateValidator": 0
            }]
    }; }
};
GcdsDateInput.style = gcdsDateInputCss();

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

const gcdsDateModifiedCss = () => `@layer reset,default;@layer reset{:host{display:block}:host dl{margin:0}:host slot{display:initial}}@layer default{:host .gcds-date-modified{margin:var(--gcds-date-modified-margin)}:host .gcds-date-modified :is(dt,gcds-text,dd){display:inline}:host .gcds-date-modified dd{margin:var(--gcds-date-modified-description-margin)}:host .gcds-date-modified gcds-text::part(text){font:var(--gcds-date-modified-font)}}`;

const GcdsDateModified = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        observer.observe(this.el, utils.observerConfig);
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
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-date-modified', this.errors);
        }
    }
    render() {
        const { lang, type } = this;
        return (index.h(index.Host, { key: '1c0180127dc767b6325799407aee9610452ba009' }, this.validateRequiredProps() && (index.h("dl", { key: 'd4814585e3662edd273b2b5ba51f4afca50c2f9d', class: "gcds-date-modified" }, index.h("dt", { key: 'c0f27815209a9a37e5a8d16bde2ccd0dc6beea2d' }, index.h("gcds-text", { key: '1295064a3da09ce540b1236eac44aad5dc0dec27', display: "inline", "margin-bottom": "0" }, type === 'version' ? I18N$k[lang].version : I18N$k[lang].date)), index.h("dd", { key: '84ab0a6e2f87a96a7159bfc63670ce6f60fc9c53' }, index.h("gcds-text", { key: '28857771b0c12e53e246e7d8c04f473667d1e99a', display: "inline", "margin-bottom": "0" }, type === 'version' ? (index.h("slot", null)) : (index.h("time", null, index.h("slot", null)))))))));
    }
    get el() { return index.getElement(this); }
};
GcdsDateModified.style = gcdsDateModifiedCss();

const gcdsDetailsCss = () => `@layer reset, default, hover, focus, print;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font-desktop);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(         --gcds-details-default-decoration-thickness       );text-underline-offset:var(--gcds-details-summary-underline-offset);transition:background-color .15s ease-in-out,color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-details .details__summary{font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:"";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding);position:relative}:host .gcds-details .details__panel summary{display:none}:host .gcds-details .details__panel:before{background-color:var(--gcds-details-panel-border-color);content:"";display:block;height:100%;left:0;position:absolute;top:0;width:var(--gcds-details-panel-border-width)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font-mobile)}}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin-block-end:var(--gcds-details-panel-slotted-margin)!important;margin-block-start:0!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(           --gcds-details-panel-slotted-margin         )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small-mobile)}}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness)}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}@layer print{@media print{:host .gcds-details .details__summary{color:var(--gcds-details-print-summary-text);font-weight:var(--gcds-details-print-summary-font-weight);text-decoration:none}:host .gcds-details .details__summary:before{transform:rotate(90deg)}:host .gcds-details .details__panel{clip-path:none;clip:auto;border-left:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);display:block;height:auto;overflow:visible;position:static;white-space:normal;width:auto}}}`;

const GcdsDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
        return (index.h(index.Host, { key: 'a8855995ccdee282fc82fbc3faf8bd3640a8d5f9' }, index.h("div", { key: 'f84122872e89f4da0b2fce92ef38fb3628ad4c0f', class: "gcds-details" }, index.h("button", { key: '3caac4040fbbe5c65d702295dc47e3d2dcab26f4', "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = utils.emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggle();
                }
            }, class: "details__summary", id: "details__summary" }, detailsTitle), index.h("details", { key: '50968918b5228addc1dd75a22d84899cf505c5df', open: open, id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary", onToggle: ev => this.handleToggle(ev), ref: element => (this.detailsElement = element) }, index.h("summary", { key: '913ae5d54310b2661f0f98f4a3c785fee46d8065' }, detailsTitle), index.h("slot", { key: '03045642ba8da8b1ccb58221cb91198aa10287dc' })))));
    }
    get el() { return index.getElement(this); }
};
GcdsDetails.style = gcdsDetailsCss();

const gcdsErrorMessageCss = () => `@layer reset,default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message gcds-icon,:host .error-message::part(text){color:var(--gcds-error-message-text-color)}}`;

const GcdsErrorMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const { messageId } = this;
        return (index.h(index.Host, { key: '21581fffc30d2d5b32f190fb2e3363ce9d5e8df3', id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, index.h("gcds-text", { key: '4e17781e0c19fa251d7f2c401b8ef87cc6027e02', class: "error-message", role: "alert", "margin-bottom": "75" }, index.h("gcds-icon", { key: '3fdb32f58f2d4bba9cb7892c164310389c12268e', name: "warning-triangle", "margin-right": "50" }), index.h("strong", { key: '9b4cf0d7d579dd6f0276205e80d426b39e10b823' }, index.h("slot", { key: '63e6cbf5ab1388c78b228bd46deea73893e5184b' })))));
    }
    get el() { return index.getElement(this); }
};
GcdsErrorMessage.style = gcdsErrorMessageCss();

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

const gcdsErrorSummaryCss = () => `@layer reset, default, compact;@layer reset{:host{display:block}}@layer default{:host{container:component summary/inline-size}:host .gcds-error-summary{border:var(--gcds-error-summary-border-width) solid var(--gcds-error-summary-border-color);color:var(--gcds-error-summary-text);display:none;margin:var(--gcds-error-summary-margin);padding:var(--gcds-error-summary-padding);transition:background .15s ease-in-out,border .15s ease-in-out,color .15s ease-in-out}:host .gcds-error-summary.gcds-show{display:block}:host .gcds-error-summary .summary__errorlist{margin:var(--gcds-error-summary-list-margin);padding:0}:host .gcds-error-summary .summary__errorlist .summary__listitem{max-width:var(--gcds-error-summary-max-width)}:host .gcds-error-summary .summary__errorlist .summary__listitem:not(:last-child){padding:var(--gcds-error-summary-list-item-padding)}:host .gcds-error-summary .summary__errorlist .summary__listitem gcds-link::part(link):not(:focus){color:var(--gcds-error-summary-link-color)}}@layer compact{@container summary (width < 24em){:host .gcds-error-summary{padding:var(--gcds-error-summary-mobile-padding)}}}`;

const GcdsErrorSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
        return (index.h(index.Host, { key: '8357850a4bbf857b53c87f57c99f19531a850c24' }, index.h("div", { key: '0ecb4bca42f58e44a44a20b949228d0c0298756f', role: "alert", tabindex: "-1", ref: element => (this.shadowElement = element), class: `gcds-error-summary ${(hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0
                ? 'gcds-show'
                : ''}` }, index.h("gcds-heading", { key: '796ceab1bc0936c5bb0bdbf36167c1e91304fdd3', tag: "h2", "margin-top": "0", "margin-bottom": "225" }, heading !== null && heading !== void 0 ? heading : I18N$j[lang].heading), index.h("ol", { key: 'c48b80ded47df7e1041a1b84d1152d3ae7c2bd70', class: "summary__errorlist" }, (hasSubmitted || errorLinks) &&
            Object.keys(errorQueue).length > 0 &&
            Object.keys(errorQueue).map(key => {
                return (index.h("li", { class: "summary__listitem" }, index.h("gcds-link", { size: "regular", href: errorLinks ? key : '#', onClick: e => {
                        e.preventDefault();
                        errorLinks
                            ? this.focusElement(key)
                            : errorQueue[key].focus();
                    } }, errorLinks ? errorQueue[key] : key)));
            })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "listen": [{
                "listenChanged": 0
            }],
        "errorLinks": [{
                "errorLinksChanged": 0
            }]
    }; }
};
GcdsErrorSummary.style = gcdsErrorSummaryCss();

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

const gcdsFileUploaderCss = () => `@layer reset, default, input, files, disabled, error, focus, active;@layer reset{:host{display:block}:host .gcds-file-uploader-wrapper{border:0;margin:0;padding:0}:host .gcds-file-uploader-wrapper button{cursor:pointer;font:inherit;outline:0}}@layer default{:host .gcds-file-uploader-wrapper{align-items:flex-start;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font-desktop);max-width:90%;transition:color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-file-uploader-wrapper{font:var(--gcds-file-uploader-font-mobile)}}:host .gcds-file-uploader-wrapper button{border-radius:var(--gcds-file-uploader-button-border-radius);transition:all .15s ease-in-out}}@layer input{:host .gcds-file-uploader-wrapper .file-uploader__input{display:inline-block;position:relative}:host .gcds-file-uploader-wrapper .file-uploader__input button{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);color:var(--gcds-file-uploader-button-text);font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-button-margin);padding:var(--gcds-file-uploader-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__input input{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}:host .gcds-file-uploader-wrapper .file-uploader__input input::-webkit-file-upload-button{cursor:pointer}:host .gcds-file-uploader-wrapper .file-uploader__input #file-uploader__summary{height:0;margin:0;overflow:hidden;visibility:hidden}}@layer files{:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);display:flex;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:not(:last-of-type){border-block-end:0}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:last-of-type{margin:var(--gcds-file-uploader-button-margin)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text{overflow:auto}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text::part(text){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button{align-items:center;background:transparent;border:0;color:var(--gcds-file-uploader-file-button-default-text);display:flex;font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-file-button-margin);padding:var(--gcds-file-uploader-file-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus) span{overflow:visible;text-decoration:underline var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(           --gcds-file-uploader-file-button-underline-offset         )}}@layer disabled{:host .gcds-file-uploader-wrapper.gcds-disabled{color:var(--gcds-file-uploader-disabled-text)}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-file-uploader-wrapper.gcds-disabled :is(.file-uploader__input,.file-uploader__uploaded-file){pointer-events:none}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file button{color:inherit}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button{background-color:var(--gcds-file-uploader-disabled-background);border-color:currentColor}}@layer error{:host .gcds-file-uploader-wrapper.gcds-error .file-uploader__uploaded-file{border-color:var(--gcds-file-uploader-file-danger-border-color)}}@layer hover{@media (hover:hover){:host .gcds-file-uploader-wrapper .file-uploader__input:not(:focus-within):hover button{background-color:var(--gcds-file-uploader-hover-button-background)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover{color:var(--gcds-file-uploader-file-button-hover-text)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover span{text-decoration-thickness:var(             --gcds-file-uploader-file-button-hover-decoration-thickness           )}}}@layer focus{:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__input:focus-within button,:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file button:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-focus-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset)}}@layer active{:host .gcds-file-uploader-wrapper .file-uploader__input:has(input:active) button{background-color:var(--gcds-file-uploader-active-button-background);border-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}}`;

const GcdsFileUploader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsRemoveFile = index.createEvent(this, "gcdsRemoveFile");
        this.gcdsError = index.createEvent(this, "gcdsError");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.inputTitle = '';
        this._validator = defaultValidator;
        /**
         * Specifies if the label is hidden or not.
         */
        this.hideLabel = false;
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
            else {
                this.updateValidity();
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
            this.updateValidity();
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
     * Read-only property of the file uploader, returns a ValidityState object that represents the validity states this element is in.
     */
    get validity() {
        return this.internals.validity;
    }
    /**
     * Call any active validators
     */
    async validate() {
        utils.handleValidationResult(this.el, this._validator.validate(this.shadowElement.files), this.label, this.gcdsError, this.gcdsValid, this.lang);
        this.inputTitle = this.errorMessage;
    }
    /**
     * Check the validity of gcds-file-uploader
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-file-uploader
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
        this.internals.setFormValue('');
        this.value = [];
    }
    formStateRestoreCallback(state) {
        this.internals.setFormValue(state);
        this.value = state;
    }
    /**
     * Update gcds-file-uploader's validity using internal input
     */
    updateValidity() {
        if (!this.shadowElement)
            return;
        const validity = this.shadowElement.validity;
        let validationMessage = null;
        if (validity === null || validity === void 0 ? void 0 : validity.valueMissing) {
            validationMessage = this.lang === 'en' ? 'You must upload a file to continue.' : 'Vous devez téléverser un fichier pour continuer.';
        }
        this.internals.setValidity(validity, validationMessage, this.shadowElement);
        // Set input title when HTML error occruring
        this.inputTitle = validationMessage;
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
            this.updateValidity();
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledSelect();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'file');
        this.validateValidator();
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
    }
    async componentDidLoad() {
        this.updateValidity();
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { accept, disabled, errorMessage, hasError, hint, label, hideLabel, lang, multiple, name, required, uploaderId, value, inputTitle, autofocus, form, inheritedAttributes, } = this;
        const attrsInput = Object.assign(Object.assign({ accept,
            disabled,
            multiple,
            name,
            required,
            value, title: inputTitle, autofocus,
            form }, inheritedAttributes), { 'aria-describedby': `${inheritedAttributes['aria-describedby']
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
        return (index.h(index.Host, { key: '721fa21feacadea9e08bda4fe69d3ab18e2be221' }, index.h("div", { key: 'b43f8b42ecdccfd5920701f630544c215d246c61', class: `gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, index.h("gcds-label", Object.assign({ key: 'f357b2680946db0669e20197d004a646762be18a' }, attrsLabel, { "hide-label": hideLabel, "label-for": uploaderId, lang: lang })), hint ? index.h("gcds-hint", { "hint-id": uploaderId }, hint) : null, errorMessage ? (index.h("gcds-error-message", { messageId: uploaderId }, errorMessage)) : null, index.h("div", { key: '30f6e721c0118e2f97306fb5b0187c7fa19ba86c', class: `file-uploader__input ${value.length > 0 ? 'uploaded-files' : ''}`, onDrop: e => this.handleDrop(e), onDragOver: e => e.preventDefault() }, index.h("button", { key: '378ca74e8d9d28c3dbf41615e8777d072ddf4019', type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N$i[lang].button.upload), index.h("input", Object.assign({ key: '8a6114ed281966242a59cde5838454ebd6b010f5', type: "file", id: uploaderId }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) })), value.length > 0 ? (index.h("gcds-sr-only", { id: "file-uploader__summary" }, index.h("span", null, I18N$i[lang].summary.selected, " "), value.map(file => (index.h("span", null, file, " "))))) : (index.h("gcds-sr-only", { id: "file-uploader__summary" }, I18N$i[lang].summary.unselected))), value.length > 0
            ? value.map(file => (index.h("div", { class: "file-uploader__uploaded-file", "aria-label": `${I18N$i[lang].removeFile} ${file}.` }, index.h("gcds-text", { "margin-bottom": "0" }, file), index.h("button", { onClick: e => this.removeFile(e) }, index.h("span", null, I18N$i[lang].button.remove), index.h("gcds-icon", { name: "close", size: "text", "margin-left": "150" })))))
            : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": [{
                "validateDisabledSelect": 0
            }],
        "files": [{
                "watchFiles": 0
            }],
        "errorMessage": [{
                "validateErrorMessage": 0
            }],
        "validator": [{
                "validateValidator": 0
            }],
        "hasError": [{
                "validateHasError": 0
            }]
    }; }
};
GcdsFileUploader.style = gcdsFileUploaderCss();

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

const gcdsFooterCss = () => `@layer reset, default, contextual, main, sub, compact, medium, wide;@layer reset{:host{display:block}:host ul{list-style-type:none;margin:0;padding:0}:host slot{display:initial}:host gcds-link::part(link):not(:hover){text-decoration:none}:host .gcds-footer__sub ul li{display:block}}@layer default{:host{font:var(--gcds-footer-font)}:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-desktop)}:host .gcds-footer__header,:host .sub__header,:host .themenav__header{clip:rect(1px,1px,1px,1px);height:1px;margin:0;overflow:hidden;position:absolute;width:1px}:host [class$=__container]{justify-content:space-between;margin:var(--gcds-footer-container-margin);max-width:var(--gcds-footer-container-width);width:90%}:host nav{position:relative}:host [class$=__list]{display:grid;grid-template-columns:1fr;list-style:none;padding:var(--gcds-footer-list-padding);grid-gap:var(--gcds-footer-grid-gap)}:host [class$=__list] li gcds-link::part(link){color:var(--gcds-footer-main-text)}:host h3{font:var(--gcds-footer-font-heading);margin:var(--gcds-footer-heading-margin)}:host gcds-link::part(link){font:var(--gcds-footer-font)}}@layer contextual{:host .gcds-footer__contextual{background-color:var(--gcds-footer-contextual-background);color:var(--gcds-footer-contextual-text);container:component contextual/inline-size;margin-block-end:-1px}}@layer main{:host .gcds-footer__main{background-color:var(--gcds-footer-main-background);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAC9CAMAAAAwXXHOAAAAe1BMVEUAAAAYJjgbKDogIDkcOTkgMDgoKEMdJzgdKDcAAAAgKTkfLj4gKDgfKjgeJjgeKjgcKDgfJzhAQEAfKzceKDgdKDcdKjcAVVUhN0MeKDceKzcAAFUdKjgcKzkeLTwaMzMdKjcfKTYZJjIcKzkaKDgcKDgYKjgbKTgYKDjo9/gwAAAAKXRSTlMASTkoCSATe/8BUCHNSWXct1sEU+D9nQMXeIoD8zYiCsN1PST/bZK221OBjhQAAA8qSURBVHgB7NVVAUNRDAWwPr5jZp5/jwMR/Us0HAgAAAAAAAAAAAAAAAAAAAAgS1U3TRt/XdNHEqiGUurReBIxLUOQSNBm88VytRa0ZIK22Zbd/iBo2Vzn8XS+hKCRqDpdr7e4PyKe11ckger9Zdc+bGULYSAMj2uZMab/Bl/mJoWXLiuvNV8HiH/PYgSGMIdmFvhjZg7NHJoZEcRtZmQEbjOj5NDMoZlDM3No1kxIidvMUlowuy2lgtltS9qE2WUlTwN2H7fGTQMkrBtqYGhBWDMhjRs7KcKaSWnc2BkOrZ8lSRujpALWMjQOW1PCmil9F8PWtNCQbzekHLamgvUSmhda9DsLWOqHmramgHUMbU+bbxLWypLGjZ3V7wraSj/FsPmm0JCHTimHzTc7YI2E5oWWjRfk0Na00AKNWOqXcmgX2ZLuj50OzUoHh/14Em1Y5NaRgSGq26HTUm/UrBubTZhDe8CiAheZQ1uPuBk0hxaPGKPNobHZciz4PjSmv2gXWOmDTQ8DduMa4KOYFFqiBQsdVXvQ3lTPZwJ+xL1IxJzbdO53w42RPUJbQACsKXsTzU6cDm3pbEec/dl4fvn+xGmMZIPQCj9D45TQlo6EgVnKDjuyfjQ/KLTSsWAAI7PLXyeCI/46480scE6cRAs+o+ln7lwDQstz1nwzDSR6cGh7EYilIV+01KtoFJpDk3bVloZ80ZZeJcBEEw7teP7QikDp1QJi+bl+Ep/NoXHrVQFZvt8Ih/a5vrJ3J8iJK0EQQCvPkplVdf8T/rBFB61vYYStMWCTMYA2b82j1Qti2A5rSuMFLcKMOwZVvQGtKhnPGmpAG0HkayIK94Vm5AY0w4xnDVSRmpNRr4moRNw3/m2nTqtZmlPsF7QXtKNjbcWvXide0A5NvqBthDIfAFq5ytnv988OrbSV+vPQKh4AGoLjH+u5obG1lWbcP68ajXFOqn9dE+31/kf/ROvhBe3VSKsXtB9oor0aaUjJeEE7LmhtpxF/ON5TqTv8gnZ7hdZlzcn4u2G9oP2TPmdXGkEtsV1/u9+JXZ/mWd0vaHuTGn8Ps7WEoy38Z2MT16u0Ur2g3dbpBJylke7uPz2+wUKA14bS2Gq+oO0MtJ0/DQ1CICj5WtE5vpoXtHb/dWi5QCMyLoeWlIwb8oJWTI048o9DY5FEIGB+7kwy/ym0mtK/ABrCtE7mgv23oUEIMBCQr54K/Hqb0A3QGAyfCy7/MDRGpDygZQTvCq0M1/vdnaBhvfJtaDGgYSz+VWhkyeEIBGHyvtAQEXBEsO4DzeuVY6CNRfxlaJKIBVqAKdwVGge0uBO05LzygnZYqKJjQAsLsRVCOro3AD4gtMJ5mfUNsBehOf5koIwFmhnmJWjQiOOo2I8Hje0YCTe/DvYitPqr0IpFNqIcKf1xaFDOvxIOaAnkq0abBRmdURfLAVLa6d8OzXOFk/KrjfYPhq8a/Rk0RAR/O7RUcyyzlS9ox0Jrd7sq+97QAMAJAPeBVhMESv2CdiC0ZmZUhSvqX0LjuF/CLnyA5rekfaeZAc6vNEjNx4BGgPF0sWOEASnDiHIgwxL+GTSP+yUp1aVTJxZoxTu0WHP+jXBEZ+AAaBLj6QLEEhphyZGMdLACljfn1iFVZta3oPEtu6ClluAODYmah8L8GNAs5RPXaBTYSkZFlCOKkSpCvNDrtOsb0Fpvae6AVlriO0BLTtBya84udgRHQmNLxXi2ZK4Ko4K5QLNHk3z71ImI/DY07YDGPvqKIe+/Sgdz8xUbFnFcG42xI6xeGhLxXGHVqjAc9glajuuh7gvtH1xtm/t7nZwaRrVFsWIz4M3QiJuGOhlPFai5LoxEvN/YDO+p0bhoI/GFSx25vJBRUuEKtGZ8P+Q7NB8AjWGpHdysNG+GBt801Il4qiw9y3PrgWySCZICKUn5CbQ0gx0Rkb2cWjjcxhL6tM7zIyLQo7jYCL6v1SVoR5YtHChGHQDNWZIqt4AUbm6juX4ztJSWko+l0LIqz3fVkvoTaNKAVpISgI33JN5CuPiezOWxEJERqSUZkIPaBc3x/djVatfuNtrlcTRfbjuyfTO0auzDv8RPd1V6BevcrbLfln2qypFS7YHm1s50MokeazxD6/bn0PK4WbY6YHjDl9uOVt06qc7eY4edlqRMM54oXJ7rikCDzYjigLbwIwufQatgB7P19VTmkPQ5tIrvp3Z/ugprOo4tqbgJrRng5VnSwUsgUHpPvmUNzbv+PmRw+TriCWfRmyyHvehaoC3mkOHiJ9Aa7Codk21oR/YGsH+sBJokbI30pE5BJDcnr0a84wLi2qMfVcSpyZHJZ/wM3yKLEfYZ2gKPkb4IbeRnoMk2D/qDi/ug5apOiiksnWK2Pw71fnYBcb1FkjDblHe/TipsxBNCay+eEmdoyIhwBhv3hzaCoz5L1vtq+5oLynFJjz8Ua/MytI3OgPe1DWZoT/kGtAo2Y7kb0FjvdwwXfwZafXz3Rh4KzRpR3QStPpxv2RegjV3YD21Ibvx6aFhwOeMMLZLLJpZ/CFqeUroUHPURn43boXnjzLmk/OEE50+hcQVtsM1fD62rGRGJGZodSyWHRkzJ46Ft5Xhobp2T+9tom52B1Bx/8MxPoeWAtjqi+cuhjZIqztCQY9o9ay62flZoqSnNPdD8BWi+XqO5sYKWV/88cgWNzwUNGilOb+UoTxMpaIPKGGHpSaGxt2wcX6NRb8m9n4+GStZ2NevyWMx2eK6S8zmheSF1AjbA1fu9iu7yVAsOaOXM0V7PsdynhXTXer9G1JnLv/pBaNYqxX3Q3N09+uZ7oGHUmPvG0WY97VVSg1OWHP20n+jtdYU2iqtrnn7D22qNP5k9QcsAhlaM5Qpw6TDUej9XzwsjOCZi0EvRWWN1PC5uM13O+jo0AhG1H+0MDXMt4vRWZ0Bd57QkMLu6q97u+lNo0TtGfEoyW3Pq2Wq0ZLVXb+PrHA651NoMdGFZ0QwN9kmHPJbrtGBUrfdvVABYlNcYY1mqgtTyWEt5EhGIwJehoVS31WhTrxMzp1ZXdXW3Pg0itSMgydbllAe0D2k+WY3GcMdiiOOSpIhJHoSIHKfXGdrN2YZ2+lYZUWN1PC7Q/C1orJJMUqs49kCDSzdnQDsgnbwATc8HLTNIogTAdqr9FljJt8gRHLPCzwctv9TcS30nRumTJOq20cXe2sHngobwtTNBV5VGjoCWPiUljT5BZfZYPf/QApyAAR8KrXk0tP0pBkvfzvNBU6XtUgIArSLeYtl2tmoN8bmGN3gBWtwPmiPC+ka6+qmgYfmrfRquFdafokNhtN2I1BTDQOlH0tXVN0IDpmXdAVqxr1RF0MWYLTWtOY1pPQP9dNBwGVpjQIvwsXhqvCyvJgNRRdB7odFlg2P5SGiVWVlVWedfvqpWt7dk9Mbez6E1OXaXlAHNqeDsOOoZT50DGtfQYgx7XIZWrrHY6ezTQvWy0/OG+ZAgu4KLdBCWigBLTYA5VsdHWFfc0BkYw3Ek0tIx0Exa8scZejPI6ZaSTqOrydUeXoEWu6FpBzQ8HrS8Bg2XqvriAKj2fN2cW0pGcN7QY0F9GhbGVOy5PL01X/af16DBhZjDjUbZMdAi1tDyvGOEY/uAFqv8KLTsR4NGtBwR7P4/tMrlqOIlaOftOb6jV9eqcWzI88IZGr8HjU6J6w2gtSfNGCHSV6FVVUk9ZexYZ1TmvbHrMrQVpXRJ5dScct4Cza0HnIJaoKljA9rAw3ECAQ6DNmagAEsFAKUGgByry49kFkmvoY2qC4kATSCQ2h/O3wY/2uvcbopUWntT1VegSfEwQc8TtD5DqwGtlsPW/6cM90DLz6GNfGt4g1qSJ7BZX/lWbkkwgjSJa52BVme936RyjW2n28hYHijKdRXakeNozAeC5p6bVyz5/1clun2SlhHuAe37NZoyO6uzDoFmWrcn17PjRUqS19DM1hKAHj0nywEta2pGje0aWfaryK5lf34JWldfh0YsRW1yHk94OGfKpbybA9pYOk+3N5ai91sOqNEYDjqgkXOvEzBLSp78NNBmJlMSGOdY30luVouFNbSoM3FIDAjB99uypgq6GRaDGsGynBGZERY9gyFWv3yyB+qmNdK0KnLynqwBeRpHQypP7VVj6ZO47wmNxLSSvWoWW8qPl7+WihHBvjBrUnbeCs1LG80Ra2g5/c/GOdWdFVEIYzl4ftXWhp6sL0KrU4HcBo1SZakjLHwCbbMLO4LI5aFWfcsMqsf7wmscOJ6yAS2yJJDQW8oEy6U7QqNV2JqX8ekE4o8X9KeEsxJrM9+Axv9/g7wGTUozgsSWMyGsnSkjIgitU7wIjVvQ3nIztMK8jZHjIcPb0HL113VwQMvWhcR9gpREbjR1x1Pqc42GiJUOS833e9tuzfnJGm1Qy9R2TGp3ENxwSeKWU+eoYSwE9kLTRWiTm+Jn0LQUMEsPBW38QpUkQdRoBEg9RnUcLOP0LC8Z9Rwk5Tu0ZeuqF7Yk8ZaUjLfUacHnDedD1EACxg3QDOvgmOnSxyQHNJ0PSNuSnUpb6dSyNvbWqmeZ9qlpUTWOmtPchLZx3DVoejRoWjLXzfW+XEMSAlKaE7ScoBVT6mF2eiUflK6q6vGgestpe1f1MW8E25cB7YeyDW1kExoHND8uNGjEYalBBi3J5ocxJsmrrkOTqM1e54PEAX07noc3Nh2XS4cFN0IbIeF6NGj+2C0zF0j8WGr48KldpTnfhVakpSRTByeD+nZyo42mJtQMH+d5xK7boY08ADQmyLkrsD1NzPpkXPRwaOsuXEAHx5n/ClpANQoSpI4OXNeg8RGhwWPYiUB//taLi9BqQOsngXZI0t6G1oTukanqfzho41ezndrOdWgsJf8eNKm8eep8qsQPhLFtaO/oJhkRXCrFdETwAjTAvwza/k7sCxozsaeAMlIX0mmjRs8rgjo0/x6aXol/HLoOuYLiHAd9NDRSAuH/2rtXI4tiIAaidizSfPKPcGvBpQ9ZrA+ZBLqGykg5YeXXpsdv7a4Rlv9nSSC0K527jgKhadw1TgCh6buSY0BodWtuSe0cENr9xlvbOSA0+V/XHceA0DROA6HptNNAaJoqh4HQ1E4CoamqZ9c5IDTVrMNAaBrHgdDuOg+E1s4DoWmcBkJTrdNAaGrngdDaT4DQ9jc/AULzM8Af2qL98u71t1EAAAAASUVORK5CYII=);background-position:100% 100%;background-repeat:no-repeat;color:var(--gcds-footer-main-text);container:component main/inline-size}:host .gcds-footer__main nav:first-of-type:after{border-block-end:var(--gcds-footer-main-nav-first-after-border-width) solid var(--gcds-footer-main-nav-first-after-border-color);content:"";display:block;margin:var(--gcds-footer-grid-gap) 0;width:var(--gcds-footer-main-nav-first-after-width)}:host .gcds-footer__main nav.main__themenav .themenav__list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(19,1fr)}}@layer sub{:host .gcds-footer__sub{background-color:var(--gcds-footer-sub-background);container:component sub/inline-size}:host .gcds-footer__sub .sub__container{display:grid;grid-gap:var(--gcds-footer-grid-gap);grid-template-areas:"list wordmark";grid-template-columns:3fr 1fr}:host .gcds-footer__sub .sub__container nav{align-items:center;display:flex;grid-area:list}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:flex;grid-area:wordmark}:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{align-self:end;margin:var(--gcds-footer-sub-signature-margin);max-height:var(--gcds-footer-sub-signature-max-height);min-width:var(--gcds-footer-sub-signature-min-width);width:var(--gcds-footer-sub-signature-width)}}@layer compact{@media only screen and (width < 48em){:host .gcds-footer__contextual,:host .gcds-footer__main,:host .gcds-footer__sub{padding:var(--gcds-footer-band-padding-mobile)}}@container sub (width <= 30em){:host .gcds-footer__sub .sub__container .sub__wordmark gcds-signature,:host .gcds-footer__sub .sub__container slot[name=wordmark] gcds-signature{max-height:var(--gcds-footer-sub-signature-sm-max-height);width:var(--gcds-footer-sub-signature-sm-width)}}}@layer medium{@container contextual (width >= 45em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr}}@container main (width >= 45em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(10,1fr)}}@container sub (width < 60.2em){:host .gcds-footer__sub .sub__container{display:block}:host .gcds-footer__sub .sub__container ul li{margin:0 0 var(--gcds-footer-grid-gap)}}}@layer wide{@container contextual (width >= 60.2em){:host .gcds-footer__contextual [class$=__list]{grid-template-columns:1fr 1fr 1fr}}@container main (width >= 60.2em){:host .gcds-footer__main [class$=__list]{grid-template-columns:1fr 1fr 1fr}:host .gcds-footer__main nav.main__themenav .themenav__list{grid-template-rows:repeat(7,1fr)}}@container sub (width >= 60.2em){:host .gcds-footer__sub .sub__container ul li{display:inline-block;margin-block-end:0}:host .gcds-footer__sub .sub__container ul li:first-of-type:before{content:"";margin:0}:host .gcds-footer__sub .sub__container ul li:before{content:"\\2022";display:inline;margin:var(--gcds-footer-sub-listitem-before-margin)}:host .gcds-footer__sub .sub__container .sub__wordmark,:host .gcds-footer__sub .sub__container slot[name=wordmark]{display:inline-block}}}`;

const GcdsFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
        if (this.el.querySelector('[slot="signature"]')) {
            return index.h("slot", { name: "wordmark" });
        }
        else {
            return (index.h("div", { class: "sub__wordmark" }, index.h("gcds-signature", { type: "wordmark", lang: this.lang })));
        }
    }
    render() {
        const { lang, display, contextualHeading, contextualLinksObject, subLinks, subLinksObject, renderSignature, } = this;
        const govNav = I18N$h[lang].gov.menu;
        const themeNav = I18N$h[lang].themes.menu;
        const siteNav = I18N$h[lang].site.menu;
        let contextualLinkCount = 0;
        let subLinkCount = 0;
        return (index.h(index.Host, { key: 'f1b8da552d3024692e8a2a617e9009aa3757fa14', role: "contentinfo", "aria-label": "Footer" }, index.h("gcds-sr-only", { key: '29c26f6e7b8fd4004a7f0ff572e101b12518c5a1', tag: "h2" }, I18N$h[lang].about), contextualLinksObject && contextualHeading && (index.h("div", { key: '56310768170e0095b55dc958685f31612f97884b', class: "gcds-footer__contextual" }, index.h("div", { key: '6f969587463df4f2486492421a9f0a2d08dbdc08', class: "contextual__container" }, index.h("nav", { key: 'c2cddfebf418a7d14eb50e9bb854c80d12c58c28', "aria-labelledby": "contextual__heading" }, index.h("h3", { key: '96f67bd4be77214e4f3aa794e87d6c6c8589646f', id: "contextual__heading", class: "contextual__heading" }, contextualHeading), index.h("ul", { key: '9acda60496ee805776ed0f1ff375da195d3a2616', class: "contextual__list" }, Object.keys(contextualLinksObject).map(key => {
            if (contextualLinkCount < 3) {
                contextualLinkCount++;
                return (index.h("li", null, index.h("gcds-link", { size: "small", href: contextualLinksObject[key] }, key)));
            }
        })))))), display === 'full' ? (index.h("div", { class: "gcds-footer__main" }, index.h("div", { class: "main__container" }, index.h("nav", { class: "main__govnav", "aria-labelledby": "govnav__heading" }, index.h("h3", { id: "govnav__heading" }, I18N$h[lang].gov.heading), index.h("ul", { class: "govnav__list" }, Object.keys(govNav).map(value => (index.h("li", null, index.h("gcds-link", { size: "small", href: govNav[value].link }, govNav[value].text)))))), index.h("nav", { class: "main__themenav", "aria-labelledby": "themenav__heading" }, index.h("gcds-sr-only", { tag: "h4", id: "themenav__heading" }, I18N$h[lang].themes.heading), index.h("ul", { class: "themenav__list" }, Object.keys(themeNav).map(value => (index.h("li", null, index.h("gcds-link", { size: "small", href: themeNav[value].link }, themeNav[value].text))))))))) : null, index.h("div", { key: '79a17bdbee68f0285ff012bd7cdd20ca866e664b', class: "gcds-footer__sub" }, index.h("div", { key: 'aef50d91b3e5516a243d4c291495d8e5d7037796', class: "sub__container" }, index.h("nav", { key: 'dcf518e4d3c42fd079127d1f941104d56399499a', "aria-labelledby": "sub__heading" }, index.h("gcds-sr-only", { key: 'e7aaa4d7bd8b60ec410c844804062bfeb0a41225', tag: "h3", id: "sub__heading" }, I18N$h[lang].site.heading), index.h("ul", { key: '4131cef714c576d9386e9bcfc7f0c002179e3de1' }, subLinks
            ? Object.keys(subLinksObject).map(key => {
                if (subLinkCount < 5) {
                    subLinkCount++;
                    return (index.h("li", null, index.h("gcds-link", { size: "small", href: subLinksObject[key] }, key)));
                }
            })
            : Object.keys(siteNav).map(value => {
                return (index.h("li", null, index.h("gcds-link", { size: "small", href: siteNav[value].link }, siteNav[value].text)));
            }))), renderSignature))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "contextualLinks": [{
                "contextualLinksChanged": 0
            }],
        "subLinks": [{
                "subLinksChanged": 0
            }]
    }; }
};
GcdsFooter.style = gcdsFooterCss();

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

const gcdsGridCss = () => `@layer reset, default, display, align, justify, place, equalHeight, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid{box-sizing:border-box;margin:0;padding:0}}@layer default{:host .gcds-grid{gap:var(--gcds-grid-gap);grid-template-columns:var(--gcds-grid-columns,1fr)}}@layer display{:host .gcds-grid.display-grid-with-cols{display:grid;grid-template-columns:1fr}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}}@layer align{:host .gcds-grid.align-content-center{align-content:center}:host .gcds-grid.align-content-end{align-content:end}:host .gcds-grid.align-content-space-around{align-content:space-around}:host .gcds-grid.align-content-space-between{align-content:space-between}:host .gcds-grid.align-content-space-evenly{align-content:space-evenly}:host .gcds-grid.align-content-start{align-content:start}:host .gcds-grid.align-content-stretch{align-content:stretch}:host .gcds-grid.align-items-baseline{align-items:baseline}:host .gcds-grid.align-items-center{align-items:center}:host .gcds-grid.align-items-end{align-items:end}:host .gcds-grid.align-items-start{align-items:start}:host .gcds-grid.align-items-stretch{align-items:stretch}}@layer justify{:host .gcds-grid.justify-content-center{justify-content:center}:host .gcds-grid.justify-content-end{justify-content:end}:host .gcds-grid.justify-content-space-around{justify-content:space-around}:host .gcds-grid.justify-content-space-between{justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{justify-content:space-evenly}:host .gcds-grid.justify-content-start{justify-content:start}:host .gcds-grid.justify-content-stretch{justify-content:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}}@layer place{:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}}@layer equalHeight{:host .gcds-grid.equal-row-height{align-items:stretch;grid-auto-rows:1fr}}@layer tablet{@media screen and (width >= 48em){:host .gcds-grid{gap:var(--gcds-grid-gap-tablet,var(--gcds-grid-gap));grid-template-columns:var(         --gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)       )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-tablet),minmax(0,1fr))}}}@layer desktop{@media screen and (width >= 64em){:host .gcds-grid{gap:var(--gcds-grid-gap-desktop,var(--gcds-grid-gap-tablet,var(--gcds-grid-gap)));grid-template-columns:var(         --gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))       )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-desktop),minmax(0,1fr))}}}`;

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
        index.registerInstance(this, hostRef);
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
        const { alignment, alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, display, equalRowHeight, gap, gapTablet, gapDesktop, justifyContent, justifyItems, placeContent, placeItems, tag, } = this;
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
        return (index.h(index.Host, null, container ? (index.h("gcds-container", { size: container, alignment: alignment }, index.h(Tag, { class: classNames, style: handleGridStyles() }, index.h("slot", null)))) : (index.h(Tag, { class: classNames, style: handleGridStyles() }, index.h("slot", null)))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "gap": [{
                "validateGap": 0
            }],
        "gapTablet": [{
                "validateGapTablet": 0
            }],
        "gapDesktop": [{
                "validateGapDesktop": 0
            }],
        "tag": [{
                "validateTag": 0
            }]
    }; }
};
GcdsGrid.style = gcdsGridCss();

const gcdsGridColCss = () => `@layer reset, default, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid-col{box-sizing:border-box;display:block;margin:0;padding:0}}@layer default{:host{grid-column:span var(--gcds-grid-columns-default-base) /span var(--gcds-grid-columns-default-base)}:host .gcds-grid-col{height:100%;width:100%}}@layer tablet{@media screen and (width >= 48em){:host{grid-column:span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet)) /span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet))}}}@layer desktop{@media screen and (width >= 64em){:host{grid-column:span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop)) /span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop))}}}`;

const GcdsGridCol = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { style: handleColSize() }, index.h(Tag, { class: "gcds-grid-col" }, index.h("slot", null))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "tablet": [{
                "validateTablet": 0
            }],
        "desktop": [{
                "validateDesktop": 0
            }]
    }; }
};
GcdsGridCol.style = gcdsGridColCss();

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

const gcdsHeaderCss = () => `@layer reset, default, brand, menu, wide;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host{margin:var(--gcds-header-margin)!important}:host .gcds-header__container--menu{margin:0 auto;max-width:var(--gcds-header-container-max-width);position:relative;width:90%}:host .gcds-header__container--menu :is(slot[name=account]){position:absolute;right:0;top:0}:host .gcds-header__container--breadcrumbs{display:flex;justify-content:space-between;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__skip-to-nav{margin-inline:auto;position:absolute;text-align:center;top:var(--gcds-header-skiptonav-top);width:100%}:host .gcds-header__skip-to-nav gcds-link{left:0;position:absolute;top:0;width:inherit;z-index:3}:host .gcds-header__skip-to-nav gcds-link:not(:focus){height:0;overflow:hidden;width:0;clip:rect(0,0,0,0)}:host{--gcds-top-nav-width-full:var(--gcds-top-nav-width-constrained)}:host :is(slot[name=account]){flex-shrink:0;margin-left:auto;margin-top:var(--gcds-spacing-50)}:host ::slotted(gcds-button[slot=account]){--gcds-button-border-radius:var(--gcds-spacing-0);--gcds-button-font-desktop:var(--gcds-text-size-small-mobile);--gcds-button-font-mobile:var(--gcds-text-size-small-mobile);--gcds-button-mobile-margin:var(--gcds-spacing-0);--gcds-button-padding:var(--gcds-spacing-100) var(--gcds-spacing-200)}}@layer brand{:host .gcds-header__brand{border-block-end:var(--gcds-header-brand-border-width) solid var(--gcds-header-brand-border-color);container:component brand/inline-size;padding:var(--gcds-header-brand-padding)}:host .gcds-header__brand .brand__container{display:grid;grid-gap:var(--gcds-header-brand-grid-gap);grid-template-areas:"signature toggle" "search search";grid-template-columns:1fr .1fr;margin:0 auto;max-width:var(--gcds-header-container-max-width);width:90%}:host .gcds-header__brand .brand__container.container--simple{grid-template-areas:"signature toggle"}:host .gcds-header__brand .brand__container :is(.brand__toggle,slot[name=toggle]){grid-area:toggle;text-align:right}:host .gcds-header__brand .brand__container :is(.brand__signature,slot[name=signature]){align-content:center;grid-area:signature}:host .gcds-header__brand .brand__container .brand__search{display:block;grid-area:search;max-width:100%}:host .gcds-header__brand .brand__container .brand__search ::slotted(gcds-search){--gcds-search-input-width:35ch}}@layer menu{:host{--gcds-nav-group-mobile-trigger-margin:var(       --gcds-header-menu-top-nav-mobile-trigger-margin     )}}@layer wide{@container brand (width >= 51.2em){:host .gcds-header__brand .brand__container{grid-template-areas:"toggle toggle" "signature search";grid-template-columns:1fr 1fr}:host .gcds-header__brand .brand__container .brand__search,:host .gcds-header__brand .brand__container slot[name=search]{margin-inline-start:auto;width:fit-content}}}`;

const GcdsHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    get renderSkipToNav() {
        if (this.el.querySelector('[slot="skip-to-nav"]')) {
            return index.h("slot", { name: "skip-to-nav" });
        }
        else if (this.skipToHref) {
            return (index.h("nav", { class: "gcds-header__skip-to-nav", "aria-label": I18N$f[this.lang].skipLabel }, index.h("gcds-link", { href: this.skipToHref }, I18N$f[this.lang].skip)));
        }
        else {
            return;
        }
    }
    get renderToggle() {
        if (this.el.querySelector('[slot="toggle"]')) {
            return index.h("slot", { name: "toggle" });
        }
        else if (this.langHref) {
            return (index.h("section", { class: "brand__toggle" }, index.h("gcds-lang-toggle", { lang: this.lang, href: this.langHref })));
        }
        else {
            return;
        }
    }
    get renderSignature() {
        if (this.el.querySelector('[slot="signature"]')) {
            return index.h("slot", { name: "signature" });
        }
        else {
            return (index.h("div", { class: "brand__signature" }, index.h("gcds-signature", { type: "signature", "has-link": this.signatureHasLink, lang: this.lang })));
        }
    }
    get renderSearch() {
        if (this.el.querySelector('[slot="search"]')) {
            return (index.h("div", { class: "brand__search" }, index.h("slot", { name: "search" })));
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
    get hasAccount() {
        return !!this.el.querySelector('[slot="account"]');
    }
    get hasThemeTopicMenu() {
        return !!this.el.querySelector('gcds-topic-menu[slot="menu"]');
    }
    render() {
        const { renderSkipToNav, renderToggle, renderSignature, renderSearch, hasSearch, hasBanner, hasBreadcrumb, hasAccount, hasThemeTopicMenu, } = this;
        return (index.h(index.Host, { key: '25c9114f95330e8a16d1cf69d4927423b8f64ff7', role: "banner" }, renderSkipToNav, hasBanner ? index.h("slot", { name: "banner" }) : null, index.h("div", { key: 'd9ac7c2d0fb7db251b738ba652d2ba524b64efd7', class: "gcds-header__brand" }, index.h("div", { key: '11ab18238d458cb665d1481a4080a53b194b148b', class: `brand__container ${!hasSearch ? 'container--simple' : ''}` }, renderToggle, renderSignature, renderSearch)), hasThemeTopicMenu ? (index.h("div", { class: "gcds-header__container--menu" }, index.h("slot", { name: "menu" }), hasAccount ? index.h("slot", { name: "account" }) : null)) : index.h("slot", { name: "menu" }), hasBreadcrumb || (!hasBreadcrumb && !hasThemeTopicMenu && hasAccount) ? (index.h("div", { class: "gcds-header__container--breadcrumbs" }, hasBreadcrumb ? index.h("slot", { name: "breadcrumb" }) : null, hasAccount && !hasThemeTopicMenu ? index.h("slot", { name: "account" }) : null)) : null));
    }
    get el() { return index.getElement(this); }
};
GcdsHeader.style = gcdsHeaderCss();

// Helper function to generate SpacingArray dynamically
function generateSpacingArray() {
    const values = [];
    for (let i = 0; i <= 1250; i += 25) {
        values.push(i.toString());
    }
    return values;
}
const SpacingArray = generateSpacingArray();

const gcdsHeadingCss = () => `@layer reset, default, limit, role, margin;@layer reset{:host{color:var(--gcds-heading-default-text);display:block}:host :is(h1,h2,h3,h4,h5,h6){box-sizing:border-box;margin:0}:host slot{display:initial}}@layer default{:host :is(h1,h2,h3,h4,h5,h6){text-wrap:balance}:host h1.gcds-heading{font:var(--gcds-heading-h1-desktop)}@media only screen and (width < 48em){:host h1.gcds-heading{font:var(--gcds-heading-h1-mobile)}}:host h1.gcds-heading:after{background-color:var(--gcds-heading-h1-border-background);content:"";display:block;height:var(--gcds-heading-h1-border-height);margin-block-start:var(--gcds-heading-h1-border-margin);width:var(--gcds-heading-h1-border-width)}:host h2.gcds-heading{font:var(--gcds-heading-h2-desktop)}@media only screen and (width < 48em){:host h2.gcds-heading{font:var(--gcds-heading-h2-mobile)}}:host h3.gcds-heading{font:var(--gcds-heading-h3-desktop)}@media only screen and (width < 48em){:host h3.gcds-heading{font:var(--gcds-heading-h3-mobile)}}:host h4.gcds-heading{font:var(--gcds-heading-h4-desktop)}@media only screen and (width < 48em){:host h4.gcds-heading{font:var(--gcds-heading-h4-mobile)}}:host h5.gcds-heading{font:var(--gcds-heading-h5-desktop)}@media only screen and (width < 48em){:host h5.gcds-heading{font:var(--gcds-heading-h5-mobile)}}:host h6.gcds-heading{font:var(--gcds-heading-h6-desktop)}@media only screen and (width < 48em){:host h6.gcds-heading{font:var(--gcds-heading-h6-mobile)}}}@layer limit{:host h1.limit{max-width:var(--gcds-heading-character-limit-h1)}:host h2.limit{max-width:var(--gcds-heading-character-limit-h2)}:host h3.limit{max-width:var(--gcds-heading-character-limit-h3)}:host h4.limit{max-width:var(--gcds-heading-character-limit-h4)}:host h5.limit{max-width:var(--gcds-heading-character-limit-h5)}:host h6.limit{max-width:var(--gcds-heading-character-limit-h6)}}@layer margin{:host :is(h1,h2,h3,h4,h5,h6).mt-0{margin-block-start:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mt-25{margin-block-start:var(--gcds-heading-spacing-25)}:host :is(h1,h2,h3,h4,h5,h6).mt-50{margin-block-start:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mt-75{margin-block-start:var(--gcds-heading-spacing-75)}:host :is(h1,h2,h3,h4,h5,h6).mt-100{margin-block-start:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mt-125{margin-block-start:var(--gcds-heading-spacing-125)}:host :is(h1,h2,h3,h4,h5,h6).mt-150{margin-block-start:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mt-175{margin-block-start:var(--gcds-heading-spacing-175)}:host :is(h1,h2,h3,h4,h5,h6).mt-200{margin-block-start:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mt-225{margin-block-start:var(--gcds-heading-spacing-225)}:host :is(h1,h2,h3,h4,h5,h6).mt-250{margin-block-start:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mt-300{margin-block-start:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mt-350{margin-block-start:var(--gcds-heading-spacing-350)}:host :is(h1,h2,h3,h4,h5,h6).mt-400{margin-block-start:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mt-450{margin-block-start:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mt-500{margin-block-start:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mt-550{margin-block-start:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mt-600{margin-block-start:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mt-650{margin-block-start:var(--gcds-heading-spacing-650)}:host :is(h1,h2,h3,h4,h5,h6).mt-700{margin-block-start:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mt-750{margin-block-start:var(--gcds-heading-spacing-750)}:host :is(h1,h2,h3,h4,h5,h6).mt-800{margin-block-start:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mt-850{margin-block-start:var(--gcds-heading-spacing-850)}:host :is(h1,h2,h3,h4,h5,h6).mt-900{margin-block-start:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mt-950{margin-block-start:var(--gcds-heading-spacing-950)}:host :is(h1,h2,h3,h4,h5,h6).mt-1000{margin-block-start:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mt-1050{margin-block-start:var(--gcds-heading-spacing-1050)}:host :is(h1,h2,h3,h4,h5,h6).mt-1100{margin-block-start:var(--gcds-heading-spacing-1100)}:host :is(h1,h2,h3,h4,h5,h6).mt-1150{margin-block-start:var(--gcds-heading-spacing-1150)}:host :is(h1,h2,h3,h4,h5,h6).mt-1200{margin-block-start:var(--gcds-heading-spacing-1200)}:host :is(h1,h2,h3,h4,h5,h6).mt-1250{margin-block-start:var(--gcds-heading-spacing-1250)}:host :is(h1,h2,h3,h4,h5,h6).mb-0{margin-block-end:var(--gcds-heading-spacing-0)}:host :is(h1,h2,h3,h4,h5,h6).mb-25{margin-block-end:var(--gcds-heading-spacing-25)}:host :is(h1,h2,h3,h4,h5,h6).mb-50{margin-block-end:var(--gcds-heading-spacing-50)}:host :is(h1,h2,h3,h4,h5,h6).mb-75{margin-block-end:var(--gcds-heading-spacing-75)}:host :is(h1,h2,h3,h4,h5,h6).mb-100{margin-block-end:var(--gcds-heading-spacing-100)}:host :is(h1,h2,h3,h4,h5,h6).mb-125{margin-block-end:var(--gcds-heading-spacing-125)}:host :is(h1,h2,h3,h4,h5,h6).mb-150{margin-block-end:var(--gcds-heading-spacing-150)}:host :is(h1,h2,h3,h4,h5,h6).mb-175{margin-block-end:var(--gcds-heading-spacing-175)}:host :is(h1,h2,h3,h4,h5,h6).mb-200{margin-block-end:var(--gcds-heading-spacing-200)}:host :is(h1,h2,h3,h4,h5,h6).mb-225{margin-block-end:var(--gcds-heading-spacing-225)}:host :is(h1,h2,h3,h4,h5,h6).mb-250{margin-block-end:var(--gcds-heading-spacing-250)}:host :is(h1,h2,h3,h4,h5,h6).mb-300{margin-block-end:var(--gcds-heading-spacing-300)}:host :is(h1,h2,h3,h4,h5,h6).mb-350{margin-block-end:var(--gcds-heading-spacing-350)}:host :is(h1,h2,h3,h4,h5,h6).mb-400{margin-block-end:var(--gcds-heading-spacing-400)}:host :is(h1,h2,h3,h4,h5,h6).mb-450{margin-block-end:var(--gcds-heading-spacing-450)}:host :is(h1,h2,h3,h4,h5,h6).mb-500{margin-block-end:var(--gcds-heading-spacing-500)}:host :is(h1,h2,h3,h4,h5,h6).mb-550{margin-block-end:var(--gcds-heading-spacing-550)}:host :is(h1,h2,h3,h4,h5,h6).mb-600{margin-block-end:var(--gcds-heading-spacing-600)}:host :is(h1,h2,h3,h4,h5,h6).mb-650{margin-block-end:var(--gcds-heading-spacing-650)}:host :is(h1,h2,h3,h4,h5,h6).mb-700{margin-block-end:var(--gcds-heading-spacing-700)}:host :is(h1,h2,h3,h4,h5,h6).mb-750{margin-block-end:var(--gcds-heading-spacing-750)}:host :is(h1,h2,h3,h4,h5,h6).mb-800{margin-block-end:var(--gcds-heading-spacing-800)}:host :is(h1,h2,h3,h4,h5,h6).mb-850{margin-block-end:var(--gcds-heading-spacing-850)}:host :is(h1,h2,h3,h4,h5,h6).mb-900{margin-block-end:var(--gcds-heading-spacing-900)}:host :is(h1,h2,h3,h4,h5,h6).mb-950{margin-block-end:var(--gcds-heading-spacing-950)}:host :is(h1,h2,h3,h4,h5,h6).mb-1000{margin-block-end:var(--gcds-heading-spacing-1000)}:host :is(h1,h2,h3,h4,h5,h6).mb-1050{margin-block-end:var(--gcds-heading-spacing-1050)}:host :is(h1,h2,h3,h4,h5,h6).mb-1100{margin-block-end:var(--gcds-heading-spacing-1100)}:host :is(h1,h2,h3,h4,h5,h6).mb-1150{margin-block-end:var(--gcds-heading-spacing-1150)}:host :is(h1,h2,h3,h4,h5,h6).mb-1200{margin-block-end:var(--gcds-heading-spacing-1200)}:host :is(h1,h2,h3,h4,h5,h6).mb-1250{margin-block-end:var(--gcds-heading-spacing-1250)}}@layer role{:host .gcds-heading.role-primary{color:var(--gcds-heading-role-primary)}:host .gcds-heading.role-secondary{color:var(--gcds-heading-role-secondary)}:host .gcds-heading.role-light{color:var(--gcds-heading-role-light)}}`;

const GcdsHeading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Sets the main style of the heading.
         */
        this.headingRole = 'primary';
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
    validateHeadingRole(newValue) {
        const values = ['light', 'primary', 'secondary'];
        if (!values.includes(newValue)) {
            this.headingRole = 'primary';
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
        const { characterLimit, marginTop, marginBottom, tag, headingRole } = this;
        const Tag = tag;
        return (index.h(index.Host, { key: '27a2ae93a052f3ed90830b1834c510a3da6aaeb1' }, index.h(Tag, { key: '582d4079c24ad038345816c59331500238824e03', class: `
            gcds-heading
            ${headingRole ? `role-${headingRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          ` }, index.h("slot", { key: '54569b6f4c34e43be86c45e61b80723e3aa3043c' }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "tag": [{
                "validateTag": 0
            }],
        "headingRole": [{
                "validateHeadingRole": 0
            }],
        "marginTop": [{
                "validateMarginTop": 0
            }],
        "marginBottom": [{
                "validateMarginBottom": 0
            }]
    }; }
};
GcdsHeading.style = gcdsHeadingCss();

const gcdsHintCss = () => `@layer reset,default;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-hint,:host gcds-text::part(text){color:var(--gcds-hint-text)}:host .gcds-hint{margin:var(--gcds-hint-margin)}}`;

const GcdsHint = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const { hintId } = this;
        return (index.h(index.Host, { key: '61a3e7529f1f8cdab787a3be7f6b1d38b06cf29d', id: `hint-${hintId}` }, index.h("gcds-text", { key: '32304bb4004c7357f63ea4c04b39be5fa1b491a8', class: "gcds-hint", "margin-bottom": "0", part: "hint" }, index.h("slot", { key: '2313fb6ca5b5fde4572e522c86d249508eecf900' }))));
    }
    get el() { return index.getElement(this); }
};
GcdsHint.style = gcdsHintCss();

const I18N$e = {
  en: {
    nameError: 'gcds-icon: Invalid name.',
  },
  fr: {
    nameError: 'gcds-icon: Nom invalide.',
  },
};

const gcdsIconCss = () => `@layer reset, default, names, margin, size; @layer reset {   :host {     display: inline-block;   }   :host :host .gcds-icon {     font-size: inherit;     line-height: inherit;     color: inherit;   } } @layer default {   :host .gcds-icon {     font-family: var(--gcds-icon-font-family) !important;     speak: never;     font-style: normal;     font-weight: normal;     font-variant: normal;     text-transform: none;     line-height: 1;     -webkit-font-smoothing: antialiased;     -moz-osx-font-smoothing: grayscale;   } } @layer names {   :host .gcds-icon-arrow-down:before {     content: "\\f013";   }   :host .gcds-icon-arrow-up:before {     content: "\\f011";   }   :host .gcds-icon-arrow-up-down:before {     content: "\\f012";   }   :host .gcds-icon-checkmark-circle:before {     content: "\\f021";   }   :host .gcds-icon-chevron-down:before {     content: "\\f020";   }   :host .gcds-icon-chevron-left:before {     content: "\\f01f";   }   :host .gcds-icon-chevron-right:before {     content: "\\f01e";   }   :host .gcds-icon-chevron-up:before {     content: "\\f01d";   }   :host .gcds-icon-close:before {     content: "\\f01c";   }   :host .gcds-icon-download:before {     content: "\\f01b";   }   :host .gcds-icon-email:before {     content: "\\f01a";   }   :host .gcds-icon-exclamation-circle:before {     content: "\\f019";   }   :host .gcds-icon-external:before {     content: "\\f018";   }   :host .gcds-icon-filter:before {     content: "\\f005";   }   :host .gcds-icon-info-circle:before {     content: "\\f017";   }   :host .gcds-icon-phone:before {     content: "\\f016";   }   :host .gcds-icon-search:before {     content: "\\f002";   }   :host .gcds-icon-sort:before {     content: "\\f003";   }   :host .gcds-icon-tune:before {     content: "\\f000";   }   :host .gcds-icon-warning-triangle:before {     content: "\\f014";   } } @layer margin {   :host .gcds-icon {        }   :host .gcds-icon.ml-0 {     margin-inline-start: var(--gcds-icon-margin-0);   }   :host .gcds-icon.ml-25 {     margin-inline-start: var(--gcds-icon-margin-25);   }   :host .gcds-icon.ml-50 {     margin-inline-start: var(--gcds-icon-margin-50);   }   :host .gcds-icon.ml-75 {     margin-inline-start: var(--gcds-icon-margin-75);   }   :host .gcds-icon.ml-100 {     margin-inline-start: var(--gcds-icon-margin-100);   }   :host .gcds-icon.ml-125 {     margin-inline-start: var(--gcds-icon-margin-125);   }   :host .gcds-icon.ml-150 {     margin-inline-start: var(--gcds-icon-margin-150);   }   :host .gcds-icon.ml-175 {     margin-inline-start: var(--gcds-icon-margin-175);   }   :host .gcds-icon.ml-200 {     margin-inline-start: var(--gcds-icon-margin-200);   }   :host .gcds-icon.ml-225 {     margin-inline-start: var(--gcds-icon-margin-225);   }   :host .gcds-icon.ml-250 {     margin-inline-start: var(--gcds-icon-margin-250);   }   :host .gcds-icon.ml-300 {     margin-inline-start: var(--gcds-icon-margin-300);   }   :host .gcds-icon.ml-350 {     margin-inline-start: var(--gcds-icon-margin-350);   }   :host .gcds-icon.ml-400 {     margin-inline-start: var(--gcds-icon-margin-400);   }   :host .gcds-icon.ml-450 {     margin-inline-start: var(--gcds-icon-margin-450);   }   :host .gcds-icon.ml-500 {     margin-inline-start: var(--gcds-icon-margin-500);   }   :host .gcds-icon.ml-550 {     margin-inline-start: var(--gcds-icon-margin-550);   }   :host .gcds-icon.ml-600 {     margin-inline-start: var(--gcds-icon-margin-600);   }   :host .gcds-icon.ml-650 {     margin-inline-start: var(--gcds-icon-margin-650);   }   :host .gcds-icon.ml-700 {     margin-inline-start: var(--gcds-icon-margin-700);   }   :host .gcds-icon.ml-750 {     margin-inline-start: var(--gcds-icon-margin-750);   }   :host .gcds-icon.ml-800 {     margin-inline-start: var(--gcds-icon-margin-800);   }   :host .gcds-icon.ml-850 {     margin-inline-start: var(--gcds-icon-margin-850);   }   :host .gcds-icon.ml-900 {     margin-inline-start: var(--gcds-icon-margin-900);   }   :host .gcds-icon.ml-950 {     margin-inline-start: var(--gcds-icon-margin-950);   }   :host .gcds-icon.ml-1000 {     margin-inline-start: var(--gcds-icon-margin-1000);   }   :host .gcds-icon.ml-1050 {     margin-inline-start: var(--gcds-icon-margin-1050);   }   :host .gcds-icon.ml-1100 {     margin-inline-start: var(--gcds-icon-margin-1100);   }   :host .gcds-icon.ml-1150 {     margin-inline-start: var(--gcds-icon-margin-1150);   }   :host .gcds-icon.ml-1200 {     margin-inline-start: var(--gcds-icon-margin-1200);   }   :host .gcds-icon.ml-1250 {     margin-inline-start: var(--gcds-icon-margin-1250);   }   :host .gcds-icon {        }   :host .gcds-icon.mr-0 {     margin-inline-end: var(--gcds-icon-margin-0);   }   :host .gcds-icon.mr-25 {     margin-inline-end: var(--gcds-icon-margin-25);   }   :host .gcds-icon.mr-50 {     margin-inline-end: var(--gcds-icon-margin-50);   }   :host .gcds-icon.mr-75 {     margin-inline-end: var(--gcds-icon-margin-75);   }   :host .gcds-icon.mr-100 {     margin-inline-end: var(--gcds-icon-margin-100);   }   :host .gcds-icon.mr-125 {     margin-inline-end: var(--gcds-icon-margin-125);   }   :host .gcds-icon.mr-150 {     margin-inline-end: var(--gcds-icon-margin-150);   }   :host .gcds-icon.mr-175 {     margin-inline-end: var(--gcds-icon-margin-175);   }   :host .gcds-icon.mr-200 {     margin-inline-end: var(--gcds-icon-margin-200);   }   :host .gcds-icon.mr-225 {     margin-inline-end: var(--gcds-icon-margin-225);   }   :host .gcds-icon.mr-250 {     margin-inline-end: var(--gcds-icon-margin-250);   }   :host .gcds-icon.mr-300 {     margin-inline-end: var(--gcds-icon-margin-300);   }   :host .gcds-icon.mr-350 {     margin-inline-end: var(--gcds-icon-margin-350);   }   :host .gcds-icon.mr-400 {     margin-inline-end: var(--gcds-icon-margin-400);   }   :host .gcds-icon.mr-450 {     margin-inline-end: var(--gcds-icon-margin-450);   }   :host .gcds-icon.mr-500 {     margin-inline-end: var(--gcds-icon-margin-500);   }   :host .gcds-icon.mr-550 {     margin-inline-end: var(--gcds-icon-margin-550);   }   :host .gcds-icon.mr-600 {     margin-inline-end: var(--gcds-icon-margin-600);   }   :host .gcds-icon.mr-650 {     margin-inline-end: var(--gcds-icon-margin-650);   }   :host .gcds-icon.mr-700 {     margin-inline-end: var(--gcds-icon-margin-700);   }   :host .gcds-icon.mr-750 {     margin-inline-end: var(--gcds-icon-margin-750);   }   :host .gcds-icon.mr-800 {     margin-inline-end: var(--gcds-icon-margin-800);   }   :host .gcds-icon.mr-850 {     margin-inline-end: var(--gcds-icon-margin-850);   }   :host .gcds-icon.mr-900 {     margin-inline-end: var(--gcds-icon-margin-900);   }   :host .gcds-icon.mr-950 {     margin-inline-end: var(--gcds-icon-margin-950);   }   :host .gcds-icon.mr-1000 {     margin-inline-end: var(--gcds-icon-margin-1000);   }   :host .gcds-icon.mr-1050 {     margin-inline-end: var(--gcds-icon-margin-1050);   }   :host .gcds-icon.mr-1100 {     margin-inline-end: var(--gcds-icon-margin-1100);   }   :host .gcds-icon.mr-1150 {     margin-inline-end: var(--gcds-icon-margin-1150);   }   :host .gcds-icon.mr-1200 {     margin-inline-end: var(--gcds-icon-margin-1200);   }   :host .gcds-icon.mr-1250 {     margin-inline-end: var(--gcds-icon-margin-1250);   } } @layer size {   :host .gcds-icon.size-text-small {     font-size: var(--gcds-icon-font-size-text-small);     line-height: var(--gcds-icon-line-height-text-small);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-text-small {       font-size: var(--gcds-icon-font-size-text-small-mobile);       line-height: var(--gcds-icon-line-height-text-small-mobile);     }   }   :host .gcds-icon.size-text {     font-size: var(--gcds-icon-font-size-text);     line-height: var(--gcds-icon-line-height-text);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-text {       font-size: var(--gcds-icon-font-size-text-mobile);       line-height: var(--gcds-icon-line-height-text-mobile);     }   }   :host .gcds-icon.size-h6 {     font-size: var(--gcds-icon-font-size-h6);     line-height: var(--gcds-icon-line-height-h6);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-h6 {       font-size: var(--gcds-icon-font-size-h6-mobile);       line-height: var(--gcds-icon-line-height-h6-mobile);     }   }   :host .gcds-icon.size-h5 {     font-size: var(--gcds-icon-font-size-h5);     line-height: var(--gcds-icon-line-height-h5);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-h5 {       font-size: var(--gcds-icon-font-size-h5-mobile);       line-height: var(--gcds-icon-line-height-h5-mobile);     }   }   :host .gcds-icon.size-h4 {     font-size: var(--gcds-icon-font-size-h4);     line-height: var(--gcds-icon-line-height-h4);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-h4 {       font-size: var(--gcds-icon-font-size-h4-mobile);       line-height: var(--gcds-icon-line-height-h4-mobile);     }   }   :host .gcds-icon.size-h3 {     font-size: var(--gcds-icon-font-size-h3);     line-height: var(--gcds-icon-line-height-h3);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-h3 {       font-size: var(--gcds-icon-font-size-h3-mobile);       line-height: var(--gcds-icon-line-height-h3-mobile);     }   }   :host .gcds-icon.size-h2 {     font-size: var(--gcds-icon-font-size-h2);     line-height: var(--gcds-icon-line-height-h2);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-h2 {       font-size: var(--gcds-icon-font-size-h2-mobile);       line-height: var(--gcds-icon-line-height-h2-mobile);     }   }   :host .gcds-icon.size-h1 {     font-size: var(--gcds-icon-font-size-h1);     line-height: var(--gcds-icon-line-height-h1);   }   @media only screen and (width < 48em) {     :host .gcds-icon.size-h1 {       font-size: var(--gcds-icon-font-size-h1-mobile);       line-height: var(--gcds-icon-line-height-h1-mobile);     }   } }`;

const GcdsIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '447a454486166e31b5d75b782f24d741e8ecf51f' }, index.h("span", { key: 'a114b9edb1972f636c7116d51afb0c83c481fe9a', class: `
            gcds-icon gcds-icon-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
          `, role: "img", "aria-label": label ? label : false, "aria-hidden": label ? 'false' : 'true' })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "name": [{
                "validateName": 0
            }],
        "size": [{
                "validateSize": 0
            }]
    }; }
};
GcdsIcon.style = gcdsIconCss();

function isSuggestionObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const validKeys = ['value', 'label'];
    const objKeys = Object.keys(obj);
    const hasValidTypes = typeof obj.label === 'string' &&
        (obj.value === undefined || typeof obj.value === 'string');
    const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));
    return hasValidTypes && hasOnlyValidKeys;
}

const gcdsInputCss = () => `@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-input-wrapper{border:0;margin:0;padding:0}:host .gcds-input-wrapper input{box-sizing:border-box}}@layer default{:host .gcds-input-wrapper{color:var(--gcds-input-default-text);font:var(--gcds-input-font-desktop);max-width:75ch;transition:color .15s ease-in-out;width:100%}@media only screen and (width < 48em){:host .gcds-input-wrapper{font:var(--gcds-input-font-mobile)}}:host .gcds-input-wrapper input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);color:var(--gcds-input-default-text);display:block;font:inherit!important;height:auto;margin:var(--gcds-input-margin)!important;max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}:host .gcds-input-wrapper input[type=number]{-moz-appearance:textfield}:host .gcds-input-wrapper input[type=number]::-webkit-inner-spin-button,:host .gcds-input-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}}@layer disabled{:host .gcds-input-wrapper.gcds-disabled{color:var(--gcds-input-disabled-text)}:host .gcds-input-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-input-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-input-wrapper.gcds-disabled input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-input-wrapper input.gcds-error:not(:focus){border-color:var(--gcds-input-danger-border)}}@layer focus{:host .gcds-input-wrapper:focus-within input:focus{border-color:var(--gcds-input-focus-border);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-border);outline-offset:var(--gcds-input-border-width)}}`;

const GcdsInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsSuggestionSelected = index.createEvent(this, "gcdsSuggestionSelected");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsError = index.createEvent(this, "gcdsError");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
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
        this.inputmode = null;
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
                if (this.suggestionsArr &&
                    this.suggestionsArr.some((suggestion) => { var _a; return val == ((_a = suggestion.value) !== null && _a !== void 0 ? _a : suggestion.label); })) {
                    this.gcdsSuggestionSelected.emit(this.value);
                }
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
    validateSuggestions() {
        if (this.suggestions == null ||
            (typeof this.suggestions === 'string' && this.suggestions.trim() == '')) {
            this.suggestionsArr = null;
            return;
        }
        let invalidObject = false;
        // Assign suggestionsArr from passed options string or array
        if (typeof this.suggestions === 'string') {
            try {
                this.suggestions = JSON.parse(this.suggestions);
            }
            catch (e) {
                utils.logError('gcds-input', ['Invalid JSON string for suggestions']);
                this.suggestions = null;
            }
        }
        if (Array.isArray(this.suggestions)) {
            this.suggestionsArr = this.suggestions;
        }
        else {
            this.suggestionsArr = null;
        }
        // Validate options has type SuggestionOption, we allow an empty array to be used.
        if (this.suggestionsArr) {
            invalidObject = this.suggestionsArr.some(dlObject => !isSuggestionObject(dlObject));
        }
        else {
            invalidObject = true;
        }
        // Log error if no or invalid optionsObject
        const errors = utils.handleErrors([], 'suggestions', this.suggestionsArr, invalidObject);
        if (errors.length > 0) {
            utils.logError('gcds-input', errors);
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
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
    }
    /**
     * Call any active validators
     */
    async validate() {
        utils.handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
        // Native HTML validation
        if ((this.required && !this.internals.checkValidity()) ||
            !this.internals.checkValidity()) {
            if (!this.internals.validity.valueMissing) {
                this.errorMessage = utils.formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
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
            validationMessage = utils.formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        this.validateSuggestions();
        this.validateDisabledInput();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'input', this.type);
        this.validateValidator();
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
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
        const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, inputmode, value, hasError, autocomplete, autofocus, form, max, maxlength, min, minlength, pattern, readonly, step, inputTitle, inheritedAttributes, lang, } = this;
        // Use max-width to keep field responsive
        const style = {
            maxWidth: `calc(${size * 2}ch + 1.5rem)`,
        };
        const attrsInput = Object.assign({ disabled,
            required,
            type,
            inputmode,
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
        return (index.h(index.Host, { key: 'b9d81df6f50cd08e4b9377996a79824c9bbe488a' }, index.h("div", { key: 'e39afd146c1c70a88a2eb55570cd50892f0d20c3', class: `gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, index.h("gcds-label", Object.assign({ key: '0f3ad082733230e3fc87e1fc4b76f72199805034' }, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang: lang })), hint ? index.h("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (index.h("gcds-error-message", { messageId: inputId }, errorMessage)) : null, index.h("input", Object.assign({ key: '5f56bec9c378c59913566d81a58dd4b853963653' }, attrsInput, { class: hasError ? 'gcds-error' : null, id: inputId, name: name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', size: size, style: size ? style : null, list: this.suggestionsArr && this.suggestionsArr.length > 0
                ? `datalist-for-${inputId}`
                : null, part: "input", ref: element => (this.shadowElement = element) })), this.suggestionsArr && this.suggestionsArr.length > 0 ? (index.h("datalist", { id: `datalist-for-${inputId}` }, this.suggestionsArr.map((suggestionOption) => {
            var _a;
            return (index.h("option", { value: (_a = suggestionOption.value) !== null && _a !== void 0 ? _a : suggestionOption.label }, suggestionOption.label));
        }))) : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": [{
                "validateDisabledInput": 0
            }],
        "errorMessage": [{
                "validateErrorMessage": 0
            }],
        "value": [{
                "watchValue": 0
            }],
        "validator": [{
                "validateValidator": 0
            }],
        "suggestions": [{
                "validateSuggestions": 0
            }],
        "hasError": [{
                "validateHasError": 0
            }],
        "aria-invalid": [{
                "ariaInvalidWatcher": 0
            }],
        "aria-description": [{
                "ariaDescriptiondWatcher": 0
            }]
    }; }
};
GcdsInput.style = gcdsInputCss();

const I18N$d = {
  en: {
    required: 'required',
  },
  fr: {
    required: 'obligatoire',
  },
};

const gcdsLabelCss = () => `@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-label{color:var(--gcds-label-text);cursor:pointer;display:block;font:var(--gcds-label-font-desktop);margin:var(--gcds-label-margin)!important;max-width:100%}@media only screen and (width < 48em){:host .gcds-label{font:var(--gcds-label-font-mobile)}}:host .gcds-label.label--hidden>span{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host .gcds-label .label--required{font-weight:var(--gcds-label-required-font-weight);margin:var(--gcds-label-required-margin)!important}}`;

const GcdsLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { hideLabel, labelFor, label, required, lang } = this;
        return (index.h(index.Host, { key: '767bb6fb7624e2bf10eb66ac8c91e7af80d33305', id: `label-for-${labelFor}` }, index.h("label", { key: '0cfa64b20e425fe7db457bbab0f364f8348adcd8', htmlFor: labelFor, class: `gcds-label ${hideLabel ? 'label--hidden' : ''}` }, index.h("span", { key: '2b10ced874e632d6f340946639fd54c9cfb33443' }, label), required ? (index.h("span", { "aria-hidden": "true", class: "label--required" }, "(", I18N$d[lang].required, ")")) : null)));
    }
    get el() { return index.getElement(this); }
};
GcdsLabel.style = gcdsLabelCss();

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

const gcdsLangToggleCss = () => `@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host .gcds-lang-toggle h2{margin:0;overflow:hidden;position:absolute;width:0}}@layer default{:host .gcds-lang-toggle gcds-link::part(link){display:inline-block;padding:var(--gcds-lang-toggle-padding)}:host .gcds-lang-toggle span{display:none}:host .gcds-lang-toggle abbr{text-decoration:none;text-transform:uppercase}}@layer desktop{@media screen and (width >= 48em){:host .gcds-lang-toggle gcds-link::part(link){font:var(--gcds-lang-toggle-font-desktop);padding-inline:0!important}:host .gcds-lang-toggle span{display:initial}:host .gcds-lang-toggle abbr{display:none}}}@layer mobile{@media screen and (width < 48em){:host .gcds-lang-toggle gcds-link::part(link){font:var(--gcds-lang-toggle-font-mobile)}}}`;

const GcdsLangToggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { lang, href } = this;
        return (index.h(index.Host, { key: 'f12de208eb52786450f1c4212e0b1d6716f75405' }, index.h("div", { key: '6c35c46a64ea431c30feb804c5c9b5022e181cd3', class: "gcds-lang-toggle" }, index.h("gcds-sr-only", { key: '0cbdffb1ae027b07fbf9f3a6af803af2a0f79f58', id: "lang-toggle__heading", tag: "h2" }, I18N$c[lang].heading), index.h("gcds-link", { key: 'fce48c5a07de4d05c78ac121feb93f86c18343f8', size: "regular", href: href, lang: I18N$c[lang].abbreviation }, index.h("span", { key: '4f7fe6e4596793f459dd834695b91948aa155839' }, I18N$c[lang].language), index.h("abbr", { key: '0c37e52fc3e196cf2d2666654044fc381e3c8cc6', title: I18N$c[lang].language }, I18N$c[lang].abbreviation)))));
    }
    get el() { return index.getElement(this); }
};
GcdsLangToggle.style = gcdsLangToggleCss();

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

const gcdsLinkCss = () => `@layer reset, default, display, size, roles, hover, visited, focus;@layer reset{:host{display:inline}:host slot{display:initial}}@layer default{:host .gcds-link{color:var(--gcds-link-default);cursor:pointer;text-decoration-color:currentColor;text-decoration-style:solid;text-decoration-thickness:var(--gcds-link-decoration-thickness);text-underline-offset:var(--gcds-link-underline-offset);transition:all .35s}:host .gcds-link .text-icon-group{white-space:nowrap}}@layer display{:host .gcds-link.d-block{display:block}}@layer size{:host .gcds-link.link--small{font:var(--gcds-link-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--small{font:var(--gcds-link-font-small-mobile)}}:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-mobile)}}:host .gcds-link.link--inherit{font:inherit}}@layer roles{:host .gcds-link.role-light{color:var(--gcds-link-light)}}@layer hover{@media (hover:hover){:host .gcds-link:hover{text-decoration-thickness:var(--gcds-link-hover-decoration-thickness)}:host .gcds-link:hover:not(.role-light){color:var(--gcds-link-hover)}}}@layer visited{:host .gcds-link:not(.role-light):visited{color:var(--gcds-link-visited)}}@layer focus{:host .gcds-link:focus{background-color:var(--gcds-link-focus-background);border-radius:var(--gcds-link-focus-border-radius);box-shadow:var(--gcds-link-focus-box-shadow);color:var(--gcds-link-focus-text);outline:var(--gcds-link-focus-outline-width) solid var(--gcds-link-focus-background);outline-offset:var(--gcds-link-focus-outline-offset);text-decoration:none}}`;

const GcdsLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
        /**
         * Props
         */
        /**
         * Sets the main style of the link.
         */
        this.linkRole = 'default';
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
    validateLinkRole(newValue) {
        const values = ['default', 'light'];
        if (!values.includes(newValue)) {
            this.linkRole = 'default';
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
        observer.observe(this.el, utils.observerConfig);
    }
    componentWillLoad() {
        // Validate attributes and set defaults
        this.validateLinkRole(this.linkRole);
        this.validateSize(this.size);
        this.validateDisplay(this.display);
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement, [
            'referrerpolicy',
        ]);
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    /**
     * Returns the correct icon for the link, if applicable.
     * If none of these conditions match, no icon is rendered.
     */
    getIcon() {
        const { href, target, external, download, lang } = this;
        const isExternal = target === '_blank' || external;
        if (isExternal) {
            return index.h("gcds-icon", { name: "external", label: I18N$b[lang].external });
        }
        if (download !== undefined) {
            return index.h("gcds-icon", { name: "download", label: I18N$b[lang].download });
        }
        if (href === null || href === void 0 ? void 0 : href.toLowerCase().startsWith('mailto:')) {
            return index.h("gcds-icon", { name: "email", label: I18N$b[lang].email });
        }
        if (href === null || href === void 0 ? void 0 : href.toLowerCase().startsWith('tel:')) {
            return index.h("gcds-icon", { name: "phone", label: I18N$b[lang].phone });
        }
        return null;
    }
    render() {
        const { size, display, href, rel, target, external, download, type, inheritedAttributes, linkRole, } = this;
        const attrs = {
            href,
            rel,
            target,
            download,
            type,
        };
        const isExternal = target === '_blank' || external;
        return (index.h(index.Host, { key: 'be11bc7a4e4c284633054cdc9a2374af97b0ac27' }, index.h("a", Object.assign({ key: '5a12d4e848d792c42b4805bb83b81387ccbc699e', tabIndex: 0 }, attrs, { class: `gcds-link link--${size} ${display != 'inline' ? `d-${display}` : ''} ${linkRole != 'default' ? `role-${linkRole}` : ''}`, ref: element => (this.shadowElement = element), target: isExternal ? '_blank' : target, rel: isExternal ? 'noopener noreferrer' : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => utils.emitEvent(e, this.gcdsClick, href) }), index.h("slot", { key: '7058ae9242230b4f77542a3453d2a273e6bdfd18' }), this.getIcon() && (index.h("span", { key: '2c14791e6082d0ff8d3308c7922f6f0902da055d', class: "text-icon-group" }, "\u00A0", this.getIcon())))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "linkRole": [{
                "validateLinkRole": 0
            }],
        "size": [{
                "validateSize": 0
            }],
        "display": [{
                "validateDisplay": 0
            }]
    }; }
};
GcdsLink.style = gcdsLinkCss();

const gcdsNavGroupCss = () => `@layer reset, defaults, sideNav, topNav, mobileNav, desktop, mobile, hover, focus;@layer reset{:host *{box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{align-self:flex-end;display:flex;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{align-items:center;background:transparent;border:0;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:flex;font:var(--gcds-nav-group-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}:host ul{list-style:none}}@layer sideNav{:host .gcds-trigger--expandable{margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}}@layer topNav{:host .gcds-trigger--dropdown{padding:var(--gcds-nav-group-top-nav-trigger-padding);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration-color:transparent;text-underline-offset:var(       --gcds-nav-group-top-nav-trigger-underline-offset     );transition:all .25s ease-in-out}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(         --gcds-nav-group-top-nav-trigger-expanded-background-color       )}:host .gcds-trigger--dropdown gcds-icon{margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);order:2}}@layer mobileNav{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);flex-direction:row-reverse;justify-content:center;margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}:host([open].gcds-mobile-nav){background-color:var(--gcds-nav-group-mobile-overlay-background);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:100}:host([open].gcds-mobile-nav) .gcds-nav-group__container{background-color:var(--gcds-nav-group-mobile-background);border-radius:var(--gcds-nav-group-mobile-border-radius);bottom:0;height:var(--gcds-nav-group-mobile-height);left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding)!important;position:fixed;width:100%}}@layer desktop{@media only screen and (width >= 48em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}:host .gcds-nav--expandable{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);left:0;margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}:host .gcds-nav--dropdown.dropdown-right{left:auto;right:0}:host(.gcds-mobile-nav) .gcds-nav-group__container>.gcds-nav--expandable{display:block;padding:0}:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}:host(.gcds-mobile-nav-topnav)>.gcds-nav-group__container>.gcds-nav--expandable{display:flex}}}@layer mobile{@media only screen and (width < 48em){:host(.gcds-mobile-nav)>.gcds-nav-group__container>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}:host([open]:not(.gcds-mobile-nav)) .gcds-nav-group__list{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}}@layer hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(           --gcds-nav-group-top-nav-trigger-hover-decoration-thickness         )}:host .gcds-trigger--expandable:hover{background-color:var(           --gcds-nav-group-side-nav-trigger-hover-background         )}}}@layer focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}`;

const GcdsNavGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsClick = index.createEvent(this, "gcdsClick");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
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
            const topnav = utils.closestElement('gcds-top-nav', this.el);
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
                document.body.style.width = '100%';
            }
            else {
                document.body.style.removeProperty('position');
                document.body.style.removeProperty('width');
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
            // Set the navStyle to 'dropdown' and add a class for alignment if specified
            this.navStyle = 'dropdown';
            // Get the alignment value from the parent + append the corresponding class
            const alignment = this.el.parentNode.getAttribute('alignment');
            if (alignment === 'end') {
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
        return (index.h(index.Host, { key: '35428e90e183130456e1c7f80231621e82b04690', role: "listitem", open: open }, index.h("div", { key: 'cee8d305928e4a3a15359e628f4123d5a106a3dd', class: "gcds-nav-group__container" }, index.h("button", { key: 'e2498be00124fcc55a05d5f8bd5b84e62d819f4d', "aria-haspopup": "true", tabIndex: 0, "aria-expanded": open.toString(), ref: element => (this.triggerElement = element), class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => {
                const event = utils.emitEvent(e, this.gcdsClick);
                if (event) {
                    this.toggleNav();
                }
            } }, index.h("gcds-icon", { key: 'b0f8639723d0719737c91a746dfc29ccef9d9ddf', name: (this.navStyle === 'expandable'
                ? open
                    ? 'chevron-down'
                    : 'chevron-right'
                : open
                    ? 'chevron-up'
                    : 'chevron-down') }), closeTrigger && open ? closeTrigger : openTrigger), index.h("ul", { key: 'c1f4082ff6112488786ace93d9316ee6e6befb50', "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, index.h("slot", { key: '46e0d5e8bb9cee9bbef1fbd4b826e55f20c89137' })))));
    }
    get el() { return index.getElement(this); }
};
GcdsNavGroup.style = gcdsNavGroupCss();

const gcdsNavLinkCss = () => `@layer reset, default, variants, hover, active, focus;@layer reset{:host .gcds-nav-link{box-sizing:border-box}:host .gcds-nav-link slot{display:initial}}@layer default{:host .gcds-nav-link{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:flex;font:var(--gcds-nav-link-font);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(       --gcds-nav-link-default-decoration-thickness     );text-underline-offset:var(--gcds-nav-link-default-underline-offset);transition:all .25s ease-in-out}:host .gcds-nav-link[aria-current=page]{pointer-events:none;text-decoration:none}@media only screen and (width < 64em){:host .gcds-nav-link{min-width:50%}}@media only screen and (width > 48em){:host .gcds-nav-link{max-width:var(--gcds-nav-link-default-max-width)}}@media only screen and (width >= 48em){:host([slot=home])>.gcds-nav-link{font:var(--gcds-nav-link-home-font)}:host([slot=home])>.gcds-nav-link:not(:hover){text-decoration-color:transparent}:host([slot=home])>.gcds-nav-link:not(:hover):not(:focus){color:var(--gcds-nav-link-home-text)!important}}}@layer variants{@media only screen and (width >= 48em){:host>.gcds-nav-link--topnav.gcds-nav-link{border-block:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:var(--gcds-nav-link-top-nav-margin);padding:var(--gcds-nav-link-top-nav-padding)}:host([slot=home])>.gcds-nav-link--topnav.gcds-nav-link{padding:var(--gcds-nav-link-top-nav-home-padding)}}:host>.gcds-nav-link--sidenav.gcds-nav-link{padding:var(--gcds-nav-link-side-nav-padding)}@media only screen and (width >= 48em){:host([slot=home])>.gcds-nav-link--sidenav.gcds-nav-link{margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}}}@layer hover{@media (hover:hover){:host .gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text);text-decoration-thickness:var(         --gcds-nav-link-hover-decoration-thickness       )}:host(:not([slot=home])) .gcds-nav-link:hover{background-color:var(--gcds-nav-link-side-nav-hover-background);color:var(--gcds-nav-link-hover-text)}}}@layer active{:host .gcds-nav-link[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text)}@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link[aria-current=page]{background-color:transparent;border-block-end-color:currentColor;color:var(--gcds-nav-link-home-text)}}:host>.gcds-nav-link--sidenav.gcds-nav-link[aria-current=page]{font-weight:var(--gcds-nav-link-active-font-weight)}}@layer focus{:host .gcds-nav-link:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);box-shadow:var(--gcds-nav-link-focus-box-shadow);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}`;

const GcdsNavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsClick = index.createEvent(this, "gcdsClick");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
        return (index.h(index.Host, { key: '69d1a5cf3b6ec8277ecbc0b994c679a85485f288', role: "listitem" }, index.h("a", Object.assign({ key: 'e6fa6df38ec8f39e69e6e030846353e969640680', class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href: href }, linkAttrs, { tabIndex: 0, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => utils.emitEvent(e, this.gcdsClick, href), ref: element => (this.linkElement = element) }), index.h("slot", { key: '77b17d920b3c8e9fed6467aff446f928d246cf19' }))));
    }
    get el() { return index.getElement(this); }
};
GcdsNavLink.style = gcdsNavLinkCss();

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

const gcdsNoticeCss = () => `@layer reset, default, type;@layer reset{:host{display:block}:host .gcds-notice{box-sizing:border-box;text-align:left}:host .gcds-notice slot{display:initial}}@layer default{:host .gcds-notice{color:var(--gcds-notice-text);display:grid;gap:var(--gcds-notice-icon-gap);grid-template-columns:var(--gcds-notice-icon-width) auto}:host .gcds-notice .notice__heading{--gcds-heading-h2-desktop:var(         --gcds-notice-content-heading-font-desktop       );--gcds-heading-h2-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h4-desktop:var(         --gcds-notice-content-heading-font-desktop       );--gcds-heading-h4-mobile:var(--gcds-notice-content-heading-font-mobile);--gcds-heading-h5-desktop:var(         --gcds-notice-content-heading-font-desktop       );--gcds-heading-h5-mobile:var(--gcds-notice-content-heading-font-mobile);margin-block-start:var(         --gcds-notice-content-heading-margin-block-start-desktop       )}@media only screen and (width < 48em){:host .gcds-notice .notice__heading{margin-block-start:var(           --gcds-notice-content-heading-margin-block-start-mobile         )}}:host .gcds-notice .notice__icon{margin:var(--gcds-notice-icon-margin)}:host .gcds-notice .notice__icon:before{background-color:currentColor;content:"";display:block;height:var(--gcds-notice-icon-before-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice .notice__icon:after{background-color:currentColor;content:"";display:block;height:var(--gcds-notice-icon-after-height);margin:0 auto;width:var(--gcds-notice-border-width)}:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-desktop);margin-block-start:0}@media only screen and (width < 48em){:host .gcds-notice ::slotted(*){font:var(--gcds-notice-content-slotted-font-mobile)}}:host .gcds-notice ::slotted(:last-child){margin-block-end:0}:host .gcds-notice ::slotted(:not(:last-child)){margin-block-end:var(--gcds-notice-content-slotted-margin)}:host .gcds-notice ::slotted(ol),:host .gcds-notice ::slotted(ul){margin-inline-start:var(--gcds-notice-content-slotted-list-margin);padding:0}}@layer type{:host .gcds-notice.notice--role-danger .notice__icon{color:var(--gcds-notice-danger-text)}:host .gcds-notice.notice--role-info .notice__icon{color:var(--gcds-notice-info-text)}:host .gcds-notice.notice--role-success .notice__icon{color:var(--gcds-notice-success-text)}:host .gcds-notice.notice--role-warning .notice__icon{color:var(--gcds-notice-warning-text)}}`;

const GcdsNotice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * States
         */
        /**
         * State to track validation on properties
         * Contains a list of properties that have an error associated with them
         */
        this.errors = [];
    }
    validateNoticeRole() {
        if (!this.noticeRole) {
            this.errors.push('noticeRole');
        }
        else if (this.errors.includes('noticeRole')) {
            this.errors.splice(this.errors.indexOf('noticeRole'), 1);
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
        observer.observe(this.el, utils.observerConfig);
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
        this.validateNoticeRole();
        this.validateNoticeTitleTag();
        this.validateChildren();
        if (this.errors.includes('noticeRole') ||
            this.errors.includes('noticeTitle') ||
            this.errors.includes('noticeTitleTag') ||
            this.errors.includes('children')) {
            return false;
        }
        return true;
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-notice', this.errors);
        }
    }
    render() {
        const { noticeRole, noticeTitle, noticeTitleTag } = this;
        const iconRoles = {
            danger: 'exclamation-circle',
            info: 'info-circle',
            success: 'checkmark-circle',
            warning: 'warning-triangle',
        };
        return (index.h(index.Host, { key: 'eeefda750a72d686551bf8fb9d19e01041443383' }, this.validateRequiredProps() && (index.h("section", { key: '6e02932b54e765e2209dbfce48d195cf49c18b71', class: `gcds-notice notice--role-${noticeRole}` }, index.h("gcds-icon", { key: '3dc298767a00715811ccec1f9c372acf919fd3d4', class: "notice__icon", size: "h4", name: iconRoles[noticeRole] }), index.h("div", { key: '214a8893e623fa271f673cb79df6a732a6c72964' }, index.h("gcds-heading", { key: 'ea7a87df48aa86ca8c85128dfcdd49ea39430217', tag: noticeTitleTag, "margin-top": "0", "margin-bottom": "100", class: "notice__heading" }, index.h("gcds-sr-only", { key: '517fd7249667e0f971b009f65b070dc11440d69e', tag: "span" }, I18N$a[this.lang][noticeRole]), noticeTitle), index.h("slot", { key: 'fdf48fa2daceb1af2f8058e53e4a3d00d6424444' }))))));
    }
    get el() { return index.getElement(this); }
};
GcdsNotice.style = gcdsNoticeCss();

const I18N$9 = {
  en: {
    next: 'Next',
    listNext: 'Next',
    previous: 'Previous',
    listPrevious: 'Previous',
    previousMobile: 'Prev',
    nextPage: 'Next page',
    previousPage: 'Previous page',
    pageNumber: 'Page {#}',
    pageNumberOf: 'Page {#} of {total} of {label}',
  },
  fr: {
    next: 'Suivant',
    listNext: 'Suiv.',
    previous: 'Précédent',
    listPrevious: 'Préc.',
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
function constructClasses(page, current, total) {
    /**
     * Pages that should always remain visible in the pagination:
     * - First page.
     * - Last page.
     * - Current page.
     * - Immediate neighbors of the current page.
     */
    const alwaysVisibleSet = new Set([
        1,
        total,
        current,
        current - 1,
        current + 1,
    ]);
    const alwaysVisible = page === 1 ||
        page === total ||
        page === current ||
        page === current - 1 ||
        page === current + 1;
    /**
     * Pages that should always remain visible in the pagination:
     * - First page.
     * - Last page.
     * - Current page.
     * - Immediate neighbors of the current page.
     */
    if (alwaysVisible)
        return '';
    const prevVisible = alwaysVisibleSet.has(page - 1);
    const nextVisible = alwaysVisibleSet.has(page + 1);
    /**
     * If both neighbors are visible, this page sits between visible pages,
     * and can't be collapsed.
     */
    if (prevVisible && nextVisible) {
        return '';
    }
    /**
     * Determine which side of the current page this page is on.
     * Used for directional collapsing (left vs right).
     */
    const side = page < current ? 'left' : 'right';
    /**
     * Calculate how far this page is from the current page.
     * Determines how aggressively it should be collapsed.
     */
    const distance = Math.abs(page - current);
    /**
     * Group pages into collapse levels:
     * - Group 1: closest hidden pages.
     * - Group 2: further away.
     * - Group 3: farthest away.
     */
    const group = Math.ceil((distance - 1) / 2);
    return `collapse-${side}-${group}`;
}

const gcdsPaginationCss = () => `@charset "UTF-8"; @layer reset, default, list, simple, wide, compact, hover, active, focus; @layer reset {   :host {     display: block;   }   :host .gcds-pagination ul {     padding: 0;     list-style: none;   } } @layer default {   :host .gcds-pagination {     container: component pagination/inline-size;   }   :host .gcds-pagination li a {     color: var(--gcds-pagination-default-text);     font: var(--gcds-pagination-font-desktop);     border-radius: var(--gcds-pagination-border-radius);   }   @media only screen and (width < 48em) {     :host .gcds-pagination li a {       font: var(--gcds-pagination-font-mobile);     }   } } @layer list {   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) {     display: flex;     flex-direction: row;     margin: 0;     max-width: 100%;   }   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li {     margin: var(--gcds-pagination-listitem-margin);   }   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li > span.gcds-pagination-list-ellipses {     height: 3rem;     min-width: 3rem;     display: flex;     justify-content: center;     align-items: center;   }   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li > span.gcds-pagination-list-ellipses.gcds-pagination-end-button, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li > span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile {     padding: var(--gcds-pagination-list-end-button-padding);     width: auto;     min-width: auto;     height: auto;     text-decoration: none;   }   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button span, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button-mobile span, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li > span.gcds-pagination-list-ellipses.gcds-pagination-end-button span, :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li > span.gcds-pagination-list-ellipses.gcds-pagination-end-button-mobile span {     text-decoration: underline;   }   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li.gcds-pagination-mobile-prevnext {     display: none;   }   :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li.gcds-pagination-list-mobile-ellipses {     display: none;   }   :host .gcds-pagination .gcds-pagination-list-mobile-prevnext {     margin: var(--gcds-pagination-mobile-list-prevnext-margin);   } } @layer simple {   :host .gcds-pagination-simple {     display: flex;     flex-direction: column;     justify-content: space-between;   }   :host .gcds-pagination-simple li {     margin: var(--gcds-pagination-simple-listitem-margin);   }   :host .gcds-pagination-simple li:has(+ li) {     margin-block-end: var(--gcds-pagination-simple-listitem-divider-margin);     border-block-end: var(--gcds-pagination-simple-listitem-divider-border);     padding: var(--gcds-pagination-simple-listitem-divider-padding);   }   :host .gcds-pagination-simple li a {     display: grid;     padding: var(--gcds-pagination-simple-padding);   }   :host .gcds-pagination-simple li a > gcds-icon {     grid-area: icon;   }   :host .gcds-pagination-simple li a > .gcds-pagination-simple-text {     grid-area: text;     margin: var(--gcds-pagination-simple-listitem-text-margin);   }   :host .gcds-pagination-simple li a > span {     grid-area: label;     font-weight: var(--gcds-pagination-simple-label-font-weight);   }   :host .gcds-pagination-simple .gcds-pagination-simple-listitem a {     text-decoration: none;   }   :host .gcds-pagination-simple .gcds-pagination-simple-listitem a .gcds-pagination-simple-text,   :host .gcds-pagination-simple .gcds-pagination-simple-listitem a span {     text-decoration: underline;   }   :host .gcds-pagination-simple .gcds-pagination-simple-listitem a {     grid-template-areas: "icon text" "icon label";     grid-template-columns: 2rem 6fr;   } } @layer wide {      :host .gcds-pagination-list-mobile-prevnext {     display: none;   }   :host .gcds-pagination-list li:first-child {     margin-inline-start: 0 !important;   }   :host .gcds-pagination-list li:last-child {     margin-inline-end: 0 !important;   } } @layer compact {            @container pagination (width <= 39em) {     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)):not(:has(.list-ellipsis-left)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)):not(:has(.list-ellipsis-left)) .collapse-left-1:not(:has(+ .collapse-left-1)) {       position: relative;       display: block;       min-width: 3rem;     }     @media only screen and (width < 31em) {       :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)):not(:has(.list-ellipsis-left)) .collapse-left-1:not(:has(+ .collapse-left-1)) {         min-width: 1rem;       }     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)):not(:has(.list-ellipsis-left)) .collapse-left-1:not(:has(+ .collapse-left-1)):after {       content: "…";       position: absolute;       inset: 0;       display: flex;       align-items: center;       justify-content: center;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)):not(:has(.list-ellipsis-left)) .collapse-left-1:not(:has(+ .collapse-left-1)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)):not(:has(.list-ellipsis-left)) .collapse-left-1:not(:has(+ .collapse-left-1)) a {       display: none;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)):not(:has(.list-ellipsis-left)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)):not(:has(.list-ellipsis-left)) .collapse-left-2:not(:has(+ .collapse-left-2)) {       position: relative;       display: block;       min-width: 3rem;     }     @media only screen and (width < 31em) {       :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)):not(:has(.list-ellipsis-left)) .collapse-left-2:not(:has(+ .collapse-left-2)) {         min-width: 1rem;       }     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)):not(:has(.list-ellipsis-left)) .collapse-left-2:not(:has(+ .collapse-left-2)):after {       content: "…";       position: absolute;       inset: 0;       display: flex;       align-items: center;       justify-content: center;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)):not(:has(.list-ellipsis-left)) .collapse-left-2:not(:has(+ .collapse-left-2)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)):not(:has(.list-ellipsis-left)) .collapse-left-2:not(:has(+ .collapse-left-2)) a {       display: none;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):not(:has(.collapse-left-4)):not(:has(.list-ellipsis-left)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):not(:has(.collapse-left-4)):not(:has(.list-ellipsis-left)) .collapse-left-3:not(:has(+ .collapse-left-3)) {       position: relative;       display: block;       min-width: 3rem;     }     @media only screen and (width < 31em) {       :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):not(:has(.collapse-left-4)):not(:has(.list-ellipsis-left)) .collapse-left-3:not(:has(+ .collapse-left-3)) {         min-width: 1rem;       }     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):not(:has(.collapse-left-4)):not(:has(.list-ellipsis-left)) .collapse-left-3:not(:has(+ .collapse-left-3)):after {       content: "…";       position: absolute;       inset: 0;       display: flex;       align-items: center;       justify-content: center;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):not(:has(.collapse-left-4)):not(:has(.list-ellipsis-left)) .collapse-left-3:not(:has(+ .collapse-left-3)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):not(:has(.collapse-left-4)):not(:has(.list-ellipsis-left)) .collapse-left-3:not(:has(+ .collapse-left-3)) a {       display: none;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)):not(:has(.list-ellipsis-right)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)):not(:has(.list-ellipsis-right)) .collapse-right-1:not(:has(+ .collapse-right-1)) {       position: relative;       display: block;       min-width: 3rem;     }     @media only screen and (width < 31em) {       :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)):not(:has(.list-ellipsis-right)) .collapse-right-1:not(:has(+ .collapse-right-1)) {         min-width: 1rem;       }     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)):not(:has(.list-ellipsis-right)) .collapse-right-1:not(:has(+ .collapse-right-1)):after {       content: "…";       position: absolute;       inset: 0;       display: flex;       align-items: center;       justify-content: center;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)):not(:has(.list-ellipsis-right)) .collapse-right-1:not(:has(+ .collapse-right-1)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)):not(:has(.list-ellipsis-right)) .collapse-right-1:not(:has(+ .collapse-right-1)) a {       display: none;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)):not(:has(.list-ellipsis-right)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)):not(:has(.list-ellipsis-right)) .collapse-right-2:not(:has(+ .collapse-right-2)) {       position: relative;       display: block;       min-width: 3rem;     }     @media only screen and (width < 31em) {       :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)):not(:has(.list-ellipsis-right)) .collapse-right-2:not(:has(+ .collapse-right-2)) {         min-width: 1rem;       }     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)):not(:has(.list-ellipsis-right)) .collapse-right-2:not(:has(+ .collapse-right-2)):after {       content: "…";       position: absolute;       inset: 0;       display: flex;       align-items: center;       justify-content: center;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)):not(:has(.list-ellipsis-right)) .collapse-right-2:not(:has(+ .collapse-right-2)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)):not(:has(.list-ellipsis-right)) .collapse-right-2:not(:has(+ .collapse-right-2)) a {       display: none;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):not(:has(.collapse-right-4)):not(:has(.list-ellipsis-right)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):not(:has(.collapse-right-4)):not(:has(.list-ellipsis-right)) .collapse-right-3:not(:has(+ .collapse-right-3)) {       position: relative;       display: block;       min-width: 3rem;     }     @media only screen and (width < 31em) {       :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):not(:has(.collapse-right-4)):not(:has(.list-ellipsis-right)) .collapse-right-3:not(:has(+ .collapse-right-3)) {         min-width: 1rem;       }     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):not(:has(.collapse-right-4)):not(:has(.list-ellipsis-right)) .collapse-right-3:not(:has(+ .collapse-right-3)):after {       content: "…";       position: absolute;       inset: 0;       display: flex;       align-items: center;       justify-content: center;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):not(:has(.collapse-right-4)):not(:has(.list-ellipsis-right)) .collapse-right-3:not(:has(+ .collapse-right-3)) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):not(:has(.collapse-right-4)):not(:has(.list-ellipsis-right)) .collapse-right-3:not(:has(+ .collapse-right-3)) a {       display: none;     }   }         @container pagination (width <= 34em) {     :host .gcds-pagination .gcds-pagination-list li {       margin: var(--gcds-pagination-mobile-list-item-margin);     }   }         @container pagination (width <= 39em) {     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3) .collapse-left-3,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3) .collapse-right-3,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3) .collapse-left-2,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3) .collapse-right-2, :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) .collapse-left-3,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) .collapse-right-3,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) .collapse-left-2,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) .collapse-right-2 {       display: none;     }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3), :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) {            }     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):has(.list-btn-prev ~ .list-btn-next) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3):has(.list-btn-prev ~ .list-btn-next) .collapse-right-1, :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):has(.list-btn-prev ~ .list-btn-next) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3):has(.list-btn-prev ~ .list-btn-next) .collapse-right-1 {       display: none;     }   }   :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3), :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) {        }   @container pagination (width <= 22em) {     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-3) .collapse-right-1, :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-3) .collapse-right-1 {       display: none;     }   }         @container pagination (width <= 39em) {     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)) .collapse-left-2,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)) .collapse-right-2,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-2):not(:has(.collapse-right-3)) .collapse-right-1, :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)) .collapse-left-2,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)) .collapse-right-2,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-2):not(:has(.collapse-left-3)) .collapse-right-1 {       display: none;     }   }         @container pagination (width <= 39em) {     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-right-1):not(:has(.collapse-right-2)) .collapse-right-1, :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)) .collapse-left-1,     :host .gcds-pagination .gcds-pagination-list:has(.collapse-left-1):not(:has(.collapse-left-2)) .collapse-right-1 {       display: none;     }   }            :host .gcds-pagination {        }   :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(8)) {        }   @container pagination (width <= 29em) {     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(8)):not(:has(.collapse-left-3, .collapse-right-3)):not(:has(.collapse-left-2 + .collapse-left-2,     .collapse-right-2 + .collapse-right-2)) .gcds-pagination-list .gcds-pagination-end-button {       display: none;     }     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(8)):not(:has(.collapse-left-3, .collapse-right-3)):not(:has(.collapse-left-2 + .collapse-left-2,     .collapse-right-2 + .collapse-right-2)) .gcds-pagination-list-mobile-prevnext {       display: flex;     }   }   @container pagination (width <= 26em) {     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(8)):not(:has(.collapse-left-3, .collapse-right-3)) .gcds-pagination-list .gcds-pagination-end-button {       display: none;     }     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(8)):not(:has(.collapse-left-3, .collapse-right-3)) .gcds-pagination-list-mobile-prevnext {       display: flex;     }   }   :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next) {        }   @container pagination (width <= 23em) {     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(7)) .gcds-pagination-list .gcds-pagination-end-button {       display: none;     }     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(7)) .gcds-pagination-list-mobile-prevnext {       display: flex;     }   }   @container pagination (width <= 22em) {     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(6)) .gcds-pagination-list .gcds-pagination-end-button {       display: none;     }     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(6)) .gcds-pagination-list-mobile-prevnext {       display: flex;     }   }   @container pagination (width <= 18em) {     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(5)) .gcds-pagination-list .gcds-pagination-end-button {       display: none;     }     :host .gcds-pagination:has(.gcds-pagination-list .list-btn-prev) :has(.gcds-pagination-list .list-btn-next):has(li:nth-child(5)) .gcds-pagination-list-mobile-prevnext {       display: flex;     }   }   :host .gcds-pagination {        }   @container pagination (width <= 16em) {     :host .gcds-pagination:has(.gcds-pagination-list .collapse-left-3,     .gcds-pagination-list .collapse-right-3) .gcds-pagination-list .gcds-pagination-end-button {       display: none;     }     :host .gcds-pagination:has(.gcds-pagination-list .collapse-left-3,     .gcds-pagination-list .collapse-right-3) .gcds-pagination-list-mobile-prevnext {       display: flex;     }   }      @media only screen and (width < 31em) {     :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a {       border: var(--gcds-pagination-border-width) solid currentColor;     }     :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li > span.gcds-pagination-list-ellipses {       min-width: auto;     }     :host .gcds-pagination :is(.gcds-pagination-list, .gcds-pagination-list-mobile-prevnext) li a.gcds-pagination-end-button {       height: 2rem;     }   } } @layer hover {   @media (hover: hover) {     :host .gcds-pagination ul li a:hover {       background: var(--gcds-pagination-hover-background);       color: var(--gcds-pagination-hover-text);     }   } } @layer active {   :host .gcds-pagination ul li a:active:not(:focus), :host .gcds-pagination ul li a[aria-current*=page]:not(:focus) {     color: var(--gcds-pagination-active-text);     background: var(--gcds-pagination-active-background);     border-color: var(--gcds-pagination-active-background);     text-decoration: none;   } } @layer focus {   :host .gcds-pagination ul li a:focus {     color: var(--gcds-pagination-focus-text);     background-color: var(--gcds-pagination-focus-background);     outline: var(--gcds-pagination-focus-outline-width) solid var(--gcds-pagination-focus-background);     outline-offset: var(--gcds-pagination-border-width);     box-shadow: var(--gcds-pagination-focus-box-shadow);     text-decoration: none;     border-color: var(--gcds-pagination-focus-background);   } }`;

const GcdsPagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsClick = index.createEvent(this, "gcdsClick");
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
    watchTotalPages() {
        if (this.display == 'list') {
            this.configureListPagination();
        }
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
            'onClick': e => utils.emitEvent(e, this.gcdsClick, { page: page, href }),
        };
        if (page == this.currentPage && !end) {
            linkAttrs['aria-current'] = 'page';
        }
        if (end) {
            return (index.h("li", { class: `list-btn-${end === 'next' ? 'next' : 'prev'}` }, end === 'next' ? (index.h("a", Object.assign({}, linkAttrs, { class: !mobile
                    ? 'gcds-pagination-end-button'
                    : 'gcds-pagination-end-button-mobile' }), index.h("span", null, I18N$9[this.lang].listNext), index.h("gcds-icon", { "margin-left": "150", name: "chevron-right" }))) : (index.h("a", Object.assign({}, linkAttrs, { class: !mobile
                    ? 'gcds-pagination-end-button'
                    : 'gcds-pagination-end-button-mobile' }), index.h("gcds-icon", { "margin-right": "150", name: "chevron-left" }), index.h("span", null, mobile
                ? I18N$9[this.lang].previousMobile
                : I18N$9[this.lang].listPrevious)))));
        }
        else {
            return (index.h("li", { class: page != 1 && page != this.totalPages
                    ? constructClasses(page, this.currentPage, this.totalPages)
                    : '' }, index.h("a", Object.assign({}, linkAttrs), page)));
        }
    }
    /**
     * Function to render the right steps for display="list" pagination
     */
    configureListPagination() {
        this.listitems = [];
        this.mobilePrevNext = [];
        // Add "previous" button if not on first page
        if (this.currentPage != 1) {
            this.listitems.push(this.configurePaginationStep(this.currentPage, 'previous'));
            this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'previous', true));
        }
        // Flags to see if ellipses have been rendered
        let previousEllipses = false;
        let nextEllipses = false;
        for (let i = 1; i <= this.totalPages; i++) {
            // === Conditions for showing page numbers ===
            const alwaysRender = i === 1 ||
                i === this.totalPages ||
                i === this.currentPage ||
                (i >= this.currentPage - 2 && i <= this.currentPage + 2) ||
                this.totalPages < 10;
            // Special cases for first few or last few pages
            const edgeRender = (this.currentPage <= 5 && i <= 7) ||
                (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6) ||
                (this.currentPage === 5 && i === 2) ||
                (this.currentPage === this.totalPages - 4 && i === this.totalPages - 1);
            if (alwaysRender || edgeRender) {
                this.listitems.push(this.configurePaginationStep(i));
                continue;
            }
            // === Left ellipsis ===
            if (!previousEllipses && i < this.currentPage - 2) {
                this.listitems.push(index.h("li", { class: "list-ellipsis-left", "aria-hidden": "true" }, index.h("span", { class: "gcds-pagination-list-ellipses" }, "\u2026")));
                previousEllipses = true;
                continue;
            }
            // === Right ellipsis ===
            if (!nextEllipses && i > this.currentPage + 2 && i < this.totalPages) {
                this.listitems.push(index.h("li", { class: "list-ellipsis-right", "aria-hidden": "true" }, index.h("span", { class: "gcds-pagination-list-ellipses" }, "\u2026")));
                nextEllipses = true;
                continue;
            }
            // === Mobile-specific ellipses ===
            if ((i === 2 &&
                this.currentPage < 6 &&
                this.currentPage > 3 &&
                this.totalPages > 9) ||
                (i === 2 &&
                    this.totalPages < 10 &&
                    this.totalPages > 5 &&
                    this.currentPage > 3)) {
                this.listitems.push(index.h("li", { class: "gcds-pagination-list-mobile-ellipses", "aria-hidden": "true" }, index.h("span", { class: "gcds-pagination-list-ellipses" }, "\u2026")));
            }
            if ((i === this.totalPages - 1 &&
                this.currentPage > this.totalPages - 5 &&
                this.currentPage < this.totalPages - 2 &&
                this.totalPages > 9) ||
                (i === this.totalPages - 1 &&
                    this.totalPages < 10 &&
                    this.totalPages > 5 &&
                    this.currentPage < this.totalPages - 2)) {
                this.listitems.push(index.h("li", { class: "gcds-pagination-list-mobile-ellipses", "aria-hidden": "true" }, index.h("span", { class: "gcds-pagination-list-ellipses" }, "\u2026")));
            }
        }
        // Add "next" button if not on last page
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
        return (index.h(index.Host, { key: '33a4801fe9a067f50e79eb2ae5a977d23c192ec3', role: "navigation", "aria-label": label }, index.h("div", { key: '2da704d9ab9b02f92b817d6d86a2eb1da56500ce', class: "gcds-pagination" }, display === 'list' ? (index.h("div", null, index.h("ul", { class: "gcds-pagination-list" }, this.listitems), index.h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))) : (index.h("ul", { class: "gcds-pagination-simple" }, previousHref && (index.h("li", { class: "gcds-pagination-simple-listitem" }, index.h("a", { href: previousHref, tabindex: 0, "aria-label": `${I18N$9[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => utils.emitEvent(e, this.gcdsClick, previousHref) }, index.h("gcds-icon", { "margin-right": "150", name: "chevron-left", size: "h6" }), index.h("div", { class: "gcds-pagination-simple-text" }, I18N$9[lang].previous), index.h("span", null, previousLabel)))), nextHref && (index.h("li", { class: "gcds-pagination-simple-listitem" }, index.h("a", { href: nextHref, tabindex: 0, "aria-label": `${I18N$9[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ''}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: e => utils.emitEvent(e, this.gcdsClick, nextHref) }, index.h("gcds-icon", { "margin-right": "150", name: "chevron-right", size: "h6" }), index.h("div", { class: "gcds-pagination-simple-text" }, I18N$9[lang].next), index.h("span", null, nextLabel)))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "totalPages": [{
                "watchTotalPages": 0
            }],
        "currentPage": [{
                "watchCurrentPage": 0
            }],
        "url": [{
                "urlChanged": 0
            }],
        "lang": [{
                "watchLang": 0
            }]
    }; }
};
GcdsPagination.style = gcdsPaginationCss();

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

const I18N$8 = {
  en: {
    required: ' (required)',
  },
  fr: {
    required: ' (obligatoire)',
  },
};

const gcdsRadiosCss = () => `@layer reset, default, disabled, error, focus, a11y.highcontrast;@layer reset{:host{display:block}:host .gcds-radios__fieldset{border:0;min-inline-size:auto;padding:0}:host .gcds-radios__fieldset legend{padding:0}:host .gcds-radio{border:0;padding:0}:host .gcds-radio gcds-label{display:block}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{box-sizing:border-box;content:"";cursor:pointer;position:absolute}}@layer default{:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-desktop);margin:var(--gcds-radio-legend-margin)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-desktop)}@media only screen and (width < 48em){:host .gcds-radios__legend{font:var(--gcds-radio-legend-font-mobile)}:host .gcds-radios__legend .legend__required{font:var(--gcds-radio-legend-required-font-mobile)}}:host .gcds-radios__legend:not(:has(+gcds-hint)){margin:var(--gcds-radio-legend-hint-margin)}:host gcds-hint:part(hint){margin:var(--gcds-radio-hint-margin)}:host .gcds-radio{color:var(--gcds-radio-default-text);font:var(--gcds-radio-font);margin:var(--gcds-radio-margin)!important;max-width:var(--gcds-radio-max-width);min-height:calc(var(--gcds-radio-input-height-and-width) - var(--gcds-radio-padding));padding:var(--gcds-radio-padding) 0 0;position:relative;transition:color .15s ease-in-out}:host .gcds-radio :is(gcds-label,gcds-hint){padding:var(--gcds-radio-label-padding)!important}:host .gcds-radio gcds-hint::part(hint){margin:0}:host .gcds-radio gcds-label:after,:host .gcds-radio gcds-label:before,:host .gcds-radio input{position:absolute}:host .gcds-radio gcds-label>label:before,:host .gcds-radio input{height:var(--gcds-radio-input-height-and-width);left:0;top:0;width:var(--gcds-radio-input-height-and-width)}:host .gcds-radio input{opacity:0}:host .gcds-radio gcds-label>label{width:fit-content;--gcds-label-font-desktop:var(--gcds-radio-label-font-desktop);--gcds-label-font-mobile:var(--gcds-radio-label-font-mobile)}:host .gcds-radio gcds-label>label:after,:host .gcds-radio gcds-label>label:before{border-radius:var(--gcds-radio-border-radius)}:host .gcds-radio gcds-label>label:before{background-color:var(--gcds-radio-default-background);border:var(--gcds-radio-input-border-width) solid;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out}:host .gcds-radio gcds-label>label:after{background-color:currentcolor;height:var(--gcds-radio-check-height-and-width);left:var(--gcds-radio-check-left);opacity:0;top:var(--gcds-radio-check-top);width:var(--gcds-radio-check-height-and-width)}:host .gcds-radio input:checked+gcds-label>label:after{opacity:1}}@layer disabled{:host .gcds-radio.gcds-radio--disabled{color:var(--gcds-radio-disabled-text)}:host .gcds-radio.gcds-radio--disabled gcds-label>label{--gcds-label-text:currentColor;cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:after,:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{cursor:not-allowed}:host .gcds-radio.gcds-radio--disabled gcds-label>label:before{background-color:var(--gcds-radio-disabled-background);border-color:var(--gcds-radio-disabled-border)}:host .gcds-radio.gcds-radio--disabled gcds-hint{--gcds-hint-text:currentColor}}@layer error{:host gcds-error-message{margin:var(--gcds-radio-error-message-margin)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:before{border-color:var(--gcds-radio-danger-border)}:host .gcds-radio.gcds-radio--error:not(:focus-within) gcds-label>label:after{background-color:var(--gcds-radio-danger-border)}}@layer focus{:host .gcds-radio:focus-within input:focus+gcds-label>label:before{background:var(--gcds-radio-focus-background);box-shadow:var(--gcds-radio-focus-box-shadow);color:var(--gcds-radio-focus-color);outline:var(--gcds-radio-focus-outline-width) solid currentcolor;outline-offset:var(--gcds-radio-input-border-width)}:host .gcds-radio:focus-within input:focus+gcds-label>label:after{box-shadow:inset 0 0 2rem var(--gcds-radio-focus-color)}}@layer a11y.highcontrast{@media (prefers-color-scheme:light){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}@media (prefers-color-scheme:dark){:host .gcds-radio gcds-label>label:after{background-color:buttonText}}}`;

const GcdsRadios = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
        this.gcdsError = index.createEvent(this, "gcdsError");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.radioTitle = '';
        this._validator = defaultValidator;
        /**
         * Set event to call validator
         */
        this.validateOn = 'blur';
        /**
         * Specifies if the legend is hidden or not.
         */
        this.hideLegend = false;
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
            else {
                this.updateValidity();
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
                utils.logError('gcds-radios', ['Invalid JSON string for options']);
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
        this.errors = utils.handleErrors(this.errors, 'options', this.optionsArr, invalidObject);
    }
    validateName() {
        this.errors = utils.handleErrors(this.errors, 'name', this.name);
    }
    validateLegend() {
        this.errors = utils.handleErrors(this.errors, 'legend', this.legend);
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
            this.updateValidity();
        }
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
    /**
     * Call any active validators
     */
    async validate() {
        utils.handleValidationResult(this.el, this._validator.validate(this.value), this.legend, this.gcdsError, this.gcdsValid, this.lang);
        this.radioTitle = this.errorMessage;
    }
    /**
     * Check the validity of gcds-radios
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-radios
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
        if (this.value != this.initialValue) {
            this.internals.setFormValue(this.initialValue, 'checked');
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
    updateValidity() {
        var _a;
        if (((_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.length) > 1) {
            const validity = utils.validateRadioCheckboxGroup(this.shadowElement);
            let validationMessage = null;
            if (validity === null || validity === void 0 ? void 0 : validity.valueMissing) {
                validationMessage = this.lang === 'en' ? 'Choose an option to continue.' : 'Choisissez une option pour continuer.';
            }
            this.internals.setValidity(validity, validationMessage, this.shadowElement[0]);
            // Set input title when HTML error occruring
            this.radioTitle = validationMessage;
        }
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
        return utils.isValid(this.errors, ['name', 'legend', 'options']);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.validateOptions();
        this.validateRequiredProps();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'radio');
        this.validateValidator();
        this.initialValue = this.value ? this.value : null;
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-radios', this.errors);
        }
    }
    async componentDidUpdate() {
        // Validate props again if changed after render
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-radios', this.errors);
        }
    }
    async componentDidLoad() {
        this.updateValidity();
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                this.shadowElement[0].focus();
            });
        }
    }
    render() {
        const { lang, name, legend, value, required, hint, errorMessage, disabled, hasError, radioTitle, form, inheritedAttributes, } = this;
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
            return (index.h(index.Host, { key: '3bd16e4a6cc77fc6114f37791a4342baef496716', onBlur: () => this.onBlurValidate() }, index.h("fieldset", Object.assign({ key: '8c91df0fae62ebcae079551bc5362e1770d2da23', class: "gcds-radios__fieldset" }, fieldsetAttrs), index.h("legend", { key: '7372c1addc1d1c715b58ca0dd3dcc75fc6c38be4', id: "radios-legend", class: "gcds-radios__legend" }, this.hideLegend ? (index.h("gcds-sr-only", { tag: "span" }, legend, required && index.h("span", { class: "legend__required" }, I18N$8[lang].required))) : (index.h(index.Fragment, null, legend, required && index.h("span", { class: "legend__required" }, I18N$8[lang].required)))), hint ? (index.h("gcds-hint", { id: "radios-hint", "hint-id": "radios" }, hint)) : null, errorMessage ? (index.h("gcds-error-message", { id: "radios-error", messageId: "radios" }, errorMessage)) : null, this.optionsArr &&
                this.optionsArr.map(radio => {
                    const attrsInput = Object.assign({ name, disabled: disabled, required: required, value: radio.value, checked: radio.value === value, title: radioTitle, form: form }, inheritedAttributes);
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
                    return (index.h("div", { class: `gcds-radio ${disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}` }, index.h("input", Object.assign({ id: radio.id, type: "radio" }, attrsInput, { onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), ref: (el) => (this.shadowElement = [...(this.shadowElement || []), el]) })), index.h("gcds-label", { label: radio.label, "label-for": radio.id, lang: lang, onClick: e => e.stopPropagation() }), radio.hint ? (index.h("gcds-hint", { "hint-id": radio.id }, radio.hint)) : null));
                }))));
        }
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": [{
                "validateOptions": 0
            }],
        "name": [{
                "validateName": 0
            }],
        "legend": [{
                "validateLegend": 0
            }],
        "errorMessage": [{
                "validateErrorMessage": 0
            }],
        "value": [{
                "validateValue": 0
            }],
        "validator": [{
                "validateValidator": 0
            }],
        "lang": [{
                "watchLang": 0
            }]
    }; }
};
GcdsRadios.style = gcdsRadiosCss();

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

const gcdsSearchCss = () => `@layer reset,default,focus;@layer reset{:host{display:block}:host .gcds-search input{background-image:none;box-sizing:border-box}:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}}@layer default{:host .gcds-search .gcds-search__header{display:block;height:0;margin:0;overflow:hidden;width:0}:host .gcds-search .gcds-search__form{display:flex;margin:var(--gcds-search-margin)!important}:host .gcds-search input{background-color:var(--gcds-search-default-background);border:var(--gcds-search-border-width) solid var(--gcds-search-border-color);border-radius:0;border-right:0 solid transparent;box-sizing:border-box;color:var(--gcds-search-default-text);font:var(--gcds-search-font);max-height:var(--gcds-search-max-height);max-width:100%;padding:var(--gcds-search-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:var(--gcds-search-input-width,100%)}:host .gcds-search input::placeholder{color:var(--gcds-search-placeholder)}:host .gcds-search gcds-button{--gcds-button-mobile-margin:0}:host .gcds-search gcds-button::part(button){border-radius:0;height:var(--gcds-search-button-width-height);padding:0;width:var(--gcds-search-button-width-height)}}@layer focus{:host .gcds-search input:focus{border-color:var(--gcds-search-focus-border-color);border-width:var(--gcds-search-focus-border-width);box-shadow:var(--gcds-search-focus-box-shadow);margin:var(--gcds-search-focus-margin);outline:var(--gcds-search-outline-width) solid var(--gcds-search-focus-border-color);outline-offset:var(--gcds-search-border-width);z-index:30}:host .gcds-search ::part(button):focus{box-shadow:var(--gcds-search-focus-box-shadow)}}`;

const GcdsSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsSubmit = index.createEvent(this, "gcdsSubmit");
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
        /**
         * Array of suggested search terms
         */
        this.suggestedArray = null;
        this.handleInput = (e, customEvent) => {
            const input = e.target;
            this.value = input.value;
            customEvent.emit(this.value);
        };
    }
    watchSuggestedHandler() {
        if (this.suggested == null || this.suggested.length === 0) {
            this.suggestedArray = null;
            return;
        }
        if (typeof this.suggested === 'string') {
            try {
                this.suggested = JSON.parse(this.suggested);
            }
            catch (e) {
                console.error('gcds-search: suggested prop is not valid JSON string', e);
                this.suggestedArray = null;
                return;
            }
        }
        this.suggestedArray = this.suggested;
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.watchSuggestedHandler();
        // Observe lang attribute changes
        this.updateLang();
    }
    render() {
        const { placeholder, action, method, name, value, lang, searchId, suggestedArray, } = this;
        const labelText = `${I18N$7[lang].searchLabel.replace('{$}', placeholder)}`;
        const attrsInput = {
            name,
            placeholder: labelText,
        };
        const formAction = action === '/sr/srb.html'
            ? `https://www.canada.ca/${lang}/sr/srb.html`
            : action;
        return (index.h(index.Host, { key: '86ac279eefbc17baee674c2997e127d3b5a20802' }, index.h("section", { key: 'c61a273e09c805540ca3a1a31cdcb749c7e04b1f', class: "gcds-search" }, index.h("gcds-sr-only", { key: '14f5c0f5d537821b1ee7e573824fb4e8f52ce9d0', tag: "h2" }, I18N$7[lang].search), index.h("form", { key: 'd4bc7d4570f4d456216e8388edf9e2632c5d97ca', action: formAction, method: method, role: "search", onSubmit: e => utils.emitEvent(e, this.gcdsSubmit, this.value), class: "gcds-search__form" }, index.h("gcds-label", { key: 'f9b12776718938c81ae1e832b7e9cbd990e36b4e', label: labelText, "label-for": searchId, "hide-label": true }), index.h("input", Object.assign({ key: '949cebb5efdf13db2ac669d5f7ed87892e235b10', type: "search", id: searchId }, (suggestedArray ? { list: 'search-list' } : {}), { size: 35, maxLength: 170, onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), onFocus: () => this.gcdsFocus.emit(), onBlur: () => this.gcdsBlur.emit() }, attrsInput, { class: "gcds-search__input", value: value })), suggestedArray && (index.h("datalist", { key: '99dae417e4c831258c23d4149e89cc7391ecd058', id: "search-list" }, suggestedArray.map((k, v) => (index.h("option", { value: k, key: v }))))), index.h("gcds-button", { key: '666e36ab503ef667109cd437ed797dbb77ca8aff', type: "submit", class: "gcds-search__button", exportparts: "button" }, index.h("gcds-icon", { key: 'c116c3c0d584bf47417852aec4211ca0a7b4a304', name: "search", label: I18N$7[lang].search, size: "h3" }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "suggested": [{
                "watchSuggestedHandler": 0
            }]
    }; }
};
GcdsSearch.style = gcdsSearchCss();

const gcdsSelectCss = () => `@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-select-wrapper{border:0;margin:0;padding:0}:host .gcds-select-wrapper select{box-sizing:border-box}:host .gcds-select-wrapper slot{display:initial}}@layer default{:host .gcds-select-wrapper{color:var(--gcds-select-default-text);font:var(--gcds-select-font-desktop);max-width:75ch;transition:color .15s ease-in-out}@media only screen and (width < 48em){:host .gcds-select-wrapper{font:var(--gcds-select-font-mobile)}}:host .gcds-select-wrapper select{-webkit-appearance:none;-moz-appearance:none;background-color:var(--gcds-select-default-background);background-image:url("data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.799988 0.900024L7.79999 7.90003L14.8 0.900024' stroke='currentColor' stroke-width='2'/></svg>");background-position-x:var(--gcds-select-arrow-position-x);background-position-y:50%;background-repeat:no-repeat;border:var(--gcds-select-border-width) solid;border-radius:var(--gcds-select-border-radius);box-sizing:border-box;color:var(--gcds-select-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-select-margin)!important;max-width:100%;min-height:var(--gcds-select-min-width-and-height);min-width:var(--gcds-select-min-width-and-height);padding:var(--gcds-select-padding)!important;transition:all .15s ease-in-out}}@layer disabled{:host .gcds-select-wrapper.gcds-disabled{color:var(--gcds-select-disabled-text)}:host .gcds-select-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-select-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-select-wrapper.gcds-disabled select:disabled{background-color:var(--gcds-select-disabled-background);border-color:var(--gcds-select-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-select-wrapper.gcds-error:not(:focus-within) select{border-color:var(--gcds-select-danger-border)}}@layer focus{:host .gcds-select-wrapper:focus-within select:focus{border-color:var(--gcds-select-focus-border);box-shadow:var(--gcds-select-focus-box-shadow);outline:var(--gcds-select-outline-width) solid var(--gcds-select-focus-border);outline-offset:var(--gcds-select-border-width)}}`;

const GcdsSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsError = index.createEvent(this, "gcdsError");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.selectTitle = '';
        this._validator = defaultValidator;
        /**
         * Specifies if the label is hidden or not.
         */
        this.hideLabel = false;
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
            else {
                this.updateValidity();
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
        if (!this.shadowElement)
            return;
        if (val && this.checkIfValidValue(val)) {
            this.internals.setFormValue(val);
            this.shadowElement.value = val;
        }
        else {
            this.internals.setFormValue(null);
            this.value = null;
        }
        this.updateValidity();
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
     * Read-only property of the select, returns a ValidityState object that represents the validity states this element is in.
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
     * Watch HTML attribute aria-invalid to inherit changes
     */
    ariaInvalidWatcher() {
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
    }
    ariaDescriptiondWatcher() {
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
    }
    /**
     * Call any active validators
     */
    async validate() {
        utils.handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
        this.selectTitle = this.errorMessage;
    }
    /**
     * Check the validity of gcds-select
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Get validationMessage of gcds-select
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
        else if (option.hasAttribute('selected')) {
            this.value = value;
            this.internals.setFormValue(value);
            this.initialValue = this.value ? this.value : null;
        }
    }
    checkIfValidValue(value) {
        let isValid = false;
        this.options.forEach(option => {
            if (option.nodeName === 'OPTION') {
                const optionValue = option.getAttribute('value');
                if (optionValue === value) {
                    isValid = true;
                }
            }
            else if (option.nodeName === 'OPTGROUP') {
                const subOptions = Array.from(option.children);
                subOptions.map(sub => {
                    const subOptionValue = sub.getAttribute('value');
                    if (subOptionValue === value) {
                        isValid = true;
                    }
                });
            }
        });
        return isValid;
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
     * Update gcds-select's validity using internal select
     */
    updateValidity() {
        if (!this.shadowElement)
            return;
        const validity = this.shadowElement.validity;
        let validationMessage = null;
        if (validity === null || validity === void 0 ? void 0 : validity.valueMissing) {
            validationMessage =
                this.lang === 'en'
                    ? 'Choose an option to continue.'
                    : 'Choisissez une option pour continuer.';
        }
        this.internals.setValidity(validity, validationMessage, this.shadowElement);
        // Set select title when HTML error occruring
        this.selectTitle = validationMessage;
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledSelect();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'select');
        this.validateValidator();
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement);
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
            this.value = this.checkIfValidValue(this.value) ? this.value : null;
        }
    }
    async componentDidLoad() {
        this.observeOptions();
        this.updateValidity();
        // Logic to enable autofocus
        if (this.autofocus) {
            requestAnimationFrame(() => {
                var _a;
                (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
    }
    render() {
        const { lang, selectId, label, hideLabel, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError, name, options, selectTitle, autofocus, form, autocomplete, } = this;
        const attrsSelect = Object.assign({ name,
            disabled,
            required,
            value, title: selectTitle, autofocus,
            form,
            autocomplete }, inheritedAttributes);
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
        return (index.h(index.Host, { key: '96d13736e97c6cd165def86e834e8e913da7883d' }, index.h("div", { key: 'c226ed1c624942877cdcfbd088e86fdb46cd4fe6', class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`, part: "wrapper" }, index.h("gcds-label", Object.assign({ key: 'a07f3de00c68794b0196e6ad8042612d200e5f76' }, attrsLabel, { "hide-label": hideLabel, "label-for": selectId, lang: lang })), hint ? index.h("gcds-hint", { "hint-id": selectId }, hint) : null, errorMessage ? (index.h("gcds-error-message", { messageId: selectId }, errorMessage)) : null, index.h("select", Object.assign({ key: '3a99f318ad798ec20a73af2bf3fd1dbf52f311b5' }, attrsSelect, { id: selectId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-invalid": inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                    ? 'true'
                    : 'false', part: "select", ref: element => (this.shadowElement = element) }), defaultValue ? (index.h("option", { value: "", disabled: true, selected: true }, defaultValue)) : null, options.map(opt => {
            if (opt.nodeName === 'OPTION') {
                const selected = opt.hasAttribute('selected')
                    ? { selected: true }
                    : null;
                return (index.h("option", Object.assign({ value: opt.getAttribute('value') }, selected), opt.textContent));
            }
            else if (opt.nodeName === 'OPTGROUP') {
                const optGroupChildren = Array.from(opt.children).map(sub => {
                    const selected = sub.hasAttribute('selected')
                        ? { selected: true }
                        : null;
                    return (index.h("option", Object.assign({ value: sub.getAttribute('value') }, selected), sub.textContent));
                });
                return (index.h("optgroup", { label: opt.getAttribute('label') }, optGroupChildren));
            }
        })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": [{
                "validateDisabledSelect": 0
            }],
        "value": [{
                "watchValue": 0
            }],
        "errorMessage": [{
                "validateErrorMessage": 0
            }],
        "validator": [{
                "validateValidator": 0
            }],
        "hasError": [{
                "validateHasError": 0
            }],
        "aria-invalid": [{
                "ariaInvalidWatcher": 0
            }],
        "aria-description": [{
                "ariaDescriptiondWatcher": 0
            }]
    }; }
};
GcdsSelect.style = gcdsSelectCss();

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

const gcdsSideNavCss = () => `@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}}@layer default{:host{width:100%}:host .gcds-side-nav__heading{color:var(--gcds-side-nav-heading-color);display:block;font:var(--gcds-side-nav-heading-font);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}}@layer desktop{@media only screen and (width >= 48em){:host .gcds-side-nav{max-width:var(--gcds-side-nav-max-width)}}}@layer mobile{@media only screen and (width < 48em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}`;

const GcdsSideNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        if (e.relatedTarget !== null &&
            e.relatedTarget !== this.el &&
            !this.el.contains(e.relatedTarget)) {
            if (this.navSize == 'mobile') {
                if (this.mobile.hasAttribute('open')) {
                    await this.mobile.toggleNav();
                }
            }
        }
    }
    async keyDownListener(e) {
        var _a;
        if (this.el.contains(document.activeElement)) {
            handleKeyDownNav(e, this.el, this.navItems);
        }
        if (this.navSize === 'mobile' &&
            ((_a = this.mobile) === null || _a === void 0 ? void 0 : _a.open) &&
            e.key === 'Escape') {
            // Close mobile nav on ESC
            await this.mobile.toggleNav();
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
        observer.observe(this.el, utils.observerConfig);
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
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { label, lang } = this;
        return (index.h(index.Host, { key: 'cb1dce8bcf9a4f6f6a83f40b9ae35a1f69eecb55' }, index.h("nav", { key: '4d6e131139f437afa494865a9a16546c28378764', "aria-label": `${label}${I18N$6[lang].navLabel}`, class: "gcds-side-nav" }, index.h("ul", { key: '545b0eed21a11fcb2795a81ca3ad54f29a4311c6' }, index.h("gcds-nav-group", { key: '62c894a97778e43064b83341ce52b064c4555779', menuLabel: I18N$6[lang].menuLabel, closeTrigger: I18N$6[lang].closeTrigger, openTrigger: I18N$6[lang].menuLabel, class: "gcds-mobile-nav", ref: element => (this.mobile = element), lang: lang }, index.h("slot", { key: 'edaa0c63d976d732bc5294c59e2b0346572a2a31', name: "home" }, index.h("li", { key: '45d762b61ace15f094077513b2aa09794e63e9e0', class: "gcds-side-nav__heading" }, label)), index.h("slot", { key: '2ed4c1c3c852a3213fa095ce9f0df30ac437abd4' }))))));
    }
    get el() { return index.getElement(this); }
};
GcdsSideNav.style = gcdsSideNavCss();

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

var SignatureEn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-en-title">
	<title id="signature-en-title">Government of Canada</title>
	<path d="M0,0 36.84,0 36.84,75.01 0,75.01z M118.54,0 155.38,0 155.38,75.01 118.54,75.01z M72.58,15.61,77.84,4.9l5.22,10.32c.65,1.09,1.18,1,2.22.48l4.49-2.22L86.85,27.89c-.61,2.83,1,3.66,2.75,1.74L96,22.79l1.7,3.87c.57,1.17,1.43,1,2.57.79l6.61-1.39-2.22,8.35,0,.18c-.26,1.09-.78,2,.44,2.53l2.35,1.17L93.77,49.82c-1.39,1.43-.91,1.87-.39,3.48l1.26,3.87-12.71-2.3c-1.57-.39-2.66-.39-2.7.87l.52,14.58H75.93l.52-14.54c0-1.43-1.09-1.39-3.66-.86L61,57.18l1.52-3.87c.52-1.48.66-2.48-.52-3.48L48.11,38.46l2.57-1.57c.74-.57.78-1.17.39-2.44L48.46,26l6.7,1.43c1.87.44,2.39,0,2.87-1l1.87-3.83L66.52,30c1.17,1.39,2.83.48,2.31-1.52L65.65,12.86l4.92,2.83c.78.48,1.61.61,2.09-.3" class="fip_flag" />
	<path d="M29.4,31.73h-3.46l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.57.12,15.82.12c6.75,0,12.41,3.59,13.23,10.55h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.08,8.56-3.24,8.65-8.48h-8.21V15.47H29.4ZM44.83,28.44c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.24,28.44,44.83,28.44Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52,8.77,44.83,8.77s-11.29,4.93-11.29,11.76S37.65,32.34,44.83,32.34ZM58,9.38h5.36L69,26.54h.09l5.45-17.17h5.1l-8,22.35h-5.53ZM86.51,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61H98c-.87,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM106.7,9.38h4.63V13.7h.09a7.21,7.21,0,0,1,6.53-4.93,11.69,11.69,0,0,1,1.86.13v4.76a17.6,17.6,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V31.73H106.7V9.38ZM121.92,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73h-4.93V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73h-4.93V9.38ZM146.74,9.38h4.67v3.11h.13a7.47,7.47,0,0,1,6.87-3.72c2.72,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V31.73h-4.93V18.67c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6v13.1h-4.93V17.38c0-3.07-1-4.71-3.93-4.71-2.55,0-4.89,2.08-4.89,5.79V31.73h-4.93V9.38ZM188.21,18.58a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.25c.82-6.7-3.5-13.06-10.55-13.06-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM208.4,9.38h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V31.73H223.1V17.68c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V31.73H208.4V9.38ZM231,9.38h3.71V2.67h4.93v6.7h4.45v3.68h-4.45V25c0,2,.17,3.07,2.38,3.07a8.25,8.25,0,0,0,2.08-.18v3.81c-1.08.08-2.12.26-3.2.26-5.15,0-6.1-2-6.19-5.71V13.05H231V9.38ZM12,71.68c-4.41,0-6.36-4-6.36-7.91S7.6,55.9,12,55.9s6.36,4,6.36,7.87S16.43,71.68,12,71.68Zm0,3.89c7.18,0,11.28-4.93,11.28-11.8S19.19,52,12,52s-11.29,4.93-11.29,11.76S4.83,75.57,12,75.57ZM25.2,52.61h3.67V50.76c0-5.71,3-6.66,6.18-6.66a13.89,13.89,0,0,1,3.46.3v3.85a8.32,8.32,0,0,0-2.29-.26c-1.34,0-2.42.48-2.42,2.33v2.29H38v3.68H33.8V75h-4.93V56.29H25.2ZM74.58,53.91c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.44-3.59,7.87-8.09H80c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.54-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.4ZM98.06,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93C89,57,91,55.9,93.73,55.9c2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM108.3,52.61H113V55.9l.09.09a8,8,0,0,1,7-4c4.84,0,7.91,2.59,7.91,7.61V75H123V60.92c-.09-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V75H108.3V52.61ZM146.91,67.45c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.36,12.36,0,0,0,3.11-.56V71.6a7.19,7.19,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69ZM161,64c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S161,67.88,161,64ZM178.22,44.1h-4.93V55.51h-.09c-1.51-2.46-4.63-3.5-7.44-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.41,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.1ZM197.37,67.45c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34Zm4.93-9c0-4.71-4.58-6.48-9-6.48-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.54,4.93-3.54,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.35,12.35,0,0,0,3.11-.56V71.6a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69Z" class="fip_text" transform="translate(218,0)" />
	<path d="M29.47,32H26l-.82-3.63c-2.9,3.29-5.53,4.37-9.3,4.37-9.25,0-14.79-7.35-14.79-16.17S6.64.4,15.89.4C22.64.4,28.3,4,29.12,11h-5.27c-.52-4.06-4.06-6.14-8-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c5.53.09,8.56-3.24,8.65-8.47h-8.21V15.75h13.14V32ZM44.9,28.72c-4.41,0-6.36-4-6.36-7.91s1.95-7.87,6.36-7.87,6.36,4,6.36,7.87S49.31,28.72,44.9,28.72Zm0,3.89c7.18,0,11.29-4.93,11.29-11.8S52.08,9,44.9,9,33.62,14,33.62,20.81,37.73,32.61,44.9,32.61ZM79.93,32h-4.84V28.9H75a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V9.65h4.93V23.36c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V32ZM82.91,9.65h5.36l5.66,17.17H94l5.45-17.17h5.1l-8,22.35H91ZM111.4,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C128.66,15.4,124.33,9,117.28,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM131.6,9.65h4.63V14h.08A7.22,7.22,0,0,1,142.84,9a11.75,11.75,0,0,1,1.86.13v4.76a17.5,17.5,0,0,0-2.12-.22c-3.37,0-6.05,2.72-6.05,7.65V32H131.6V9.65ZM146.81,9.65h4.67v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32h-4.93V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V32h-4.93ZM175.48,18.86a5.84,5.84,0,0,1,5.88-5.92c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C192.73,15.4,188.41,9,181.36,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.94,11.76,10.94,11.76,4.89,0,9-2.72,10.12-7.61h-4.67c-.87,2.47-2.6,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM195.67,9.65h4.67v3.11h.13A7.47,7.47,0,0,1,207.34,9c2.73,0,5.28,1.17,6.27,3.72a8.07,8.07,0,0,1,7-3.72c4.71,0,7.48,2.08,7.48,7.52V32h-4.93V19c0-3.55-.22-6-4.06-6-3.33,0-4.76,2.21-4.76,6V32h-4.93V17.65c0-3.07-1-4.71-3.93-4.71-2.55,0-4.88,2.08-4.88,5.79V32h-4.93V9.65ZM237.14,18.86A5.84,5.84,0,0,1,243,12.94c3.33,0,5.45,2.81,5.62,5.92Zm16.43,3.24C254.39,15.4,250.06,9,243,9c-6.66,0-10.81,5.45-10.81,11.8,0,6.87,3.93,11.76,10.94,11.76,4.88,0,9-2.72,10.12-7.61h-4.67c-.86,2.47-2.59,3.72-5.45,3.72-4.11,0-6-3.11-6-6.62ZM257.33,9.65H262v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V32H272V18c-.08-3.5-1.47-5-4.37-5-3.29,0-5.41,2.59-5.41,5.88V32h-4.93ZM279.9,9.65h3.72V3h4.93v6.7H293v3.68h-4.45V25.27c0,2,.17,3.07,2.38,3.07a8.43,8.43,0,0,0,2.08-.17V32c-1.08.08-2.12.26-3.2.26-5.14,0-6.09-2-6.18-5.71V13.33h-3.72V9.65ZM5.69,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S5.69,68.15,5.69,64.31ZM22.9,44.37H18V55.79h-.09c-1.51-2.46-4.63-3.5-7.43-3.5-4.89,0-9.69,3.54-9.69,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.08v3h4.67V44.37ZM47.89,75.25H43V72.13H43a7.51,7.51,0,0,1-6.36,3.72c-5.84,0-8.34-2.94-8.34-8.78V52.89h4.93V66.59c0,3.94,1.6,5.36,4.28,5.36,4.11,0,5.49-2.63,5.49-6.1v-13h4.93V75.25ZM86.63,54.19c-.91-3.55-3.2-6.14-7.7-6.14-6.62,0-9.38,5.84-9.38,11.76s2.77,11.76,9.38,11.76c4.8,0,7.43-3.58,7.87-8.08h5.28c-.43,7.39-5.66,12.5-13.14,12.5-9.25,0-14.79-7.35-14.79-16.17s5.53-16.17,14.79-16.17c7,0,12.45,3.89,13.1,10.55h-5.41ZM110.11,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-9-6.49-4.93,0-9.81,1.69-10.16,7.44h4.93c.22-2.42,2.17-3.55,4.93-3.55,2,0,4.63.48,4.63,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.6,1.38-8.6,7,0,4.37,3.63,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.37,12.37,0,0,0,3.11-.56V71.88a7.21,7.21,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM120.35,52.89H125v3.29l.09.09a8,8,0,0,1,7-4c4.85,0,7.91,2.59,7.91,7.61V75.25h-4.93V61.19c-.08-3.5-1.47-5-4.37-5-3.29,0-5.4,2.59-5.4,5.88V75.25h-4.93ZM159,67.72c0,3.11-3.37,4.24-5.54,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72S157.45,65,159,64v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.46,11.46,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.81,2.72a12.33,12.33,0,0,0,3.11-.56V71.88a7.17,7.17,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77ZM173.06,64.31c0-4,1.64-8.13,6.27-8.13,3.8,0,6.18,2.94,6.18,7.87,0,3.89-1.86,7.91-6.27,7.91S173.06,68.15,173.06,64.31Zm17.21-19.93h-4.93V55.79h-.09c-1.51-2.46-4.62-3.5-7.43-3.5-4.89,0-9.68,3.54-9.68,11.63,0,6.7,3.42,11.93,10.46,11.93,2.81,0,5.62-1.08,6.92-3.63h.09v3h4.67V44.37ZM209.42,67.72c0,3.11-3.37,4.24-5.53,4.24-1.73,0-4.54-.65-4.54-2.85,0-2.59,1.9-3.37,4-3.72s4.54-.35,6.05-1.34v3.68Zm4.93-9c0-4.71-4.58-6.49-8.95-6.49-4.93,0-9.82,1.69-10.16,7.44h4.93c.22-2.42,2.16-3.55,4.93-3.55,2,0,4.62.48,4.62,3,0,2.9-3.16,2.51-6.7,3.16-4.15.47-8.61,1.38-8.61,7,0,4.37,3.64,6.53,7.65,6.53a11.47,11.47,0,0,0,7.74-2.72c.39,2,1.82,2.72,3.8,2.72a12.34,12.34,0,0,0,3.11-.56V71.88a7.18,7.18,0,0,1-1.21.08c-.91,0-1.17-.47-1.17-1.69V58.77Z" class="fip_text" transform="translate(526,0)" />
</svg>
`;

var SignatureFr = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819 78" preserveAspectRatio="xMinYMin meet" role="img" aria-labelledby="signature-fr-title">
	<title id="signature-fr-title">Gouvernement du Canada</title>
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

const gcdsSignatureCss = () => `@layer reset, default, type.signature, type.wordmark, variant.colour, variant.white, desktop, highcontrast;@layer reset{:host{display:block;width:fit-content}}@layer default{:host .gcds-signature{display:flex}:host svg{display:block;max-width:100%}:host svg .fip_flag{fill:var(--gcds-signature-color-flag)}}@layer type.signature{:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height)}}@layer type.wordmark{:host([type=wordmark]) svg{height:var(--gcds-signature-wordmark-height);width:auto}}@layer variant.colour{:host(:not([variant=white])) svg .fip_text{fill:var(--gcds-signature-color-text)}}@layer variant.white{:host([variant=white]) svg :is(.fip_text){fill:var(--gcds-signature-white-default)}}@layer desktop{@media screen and (width >= 64em){:host(:not([type=wordmark])) svg{height:var(--gcds-signature-signature-height-desktop)}}}@layer highcontrast{@media (forced-colors:active){:host svg .fip_text{fill:CanvasText}}}`;

const GcdsSignature = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
            sigAttrs['href'] = I18N$5[lang].link;
        }
        return (index.h(index.Host, { key: 'eec74b983904b1498601a6c1d12ac5aaf6821208' }, type === 'signature' ? (index.h(Tag, Object.assign({}, sigAttrs), index.h("div", { innerHTML: selectSVG }), index.h("gcds-sr-only", { tag: "span", lang: lang === 'en' ? 'fr' : 'en' }, lang === 'en'
            ? `/ ${I18N$5.fr.gc}`
            : `/ ${I18N$5.en.gc}`))) : (index.h("div", { class: "gcds-signature", innerHTML: selectSVG }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "type": [{
                "validateType": 0
            }],
        "variant": [{
                "validateVariant": 0
            }]
    }; }
};
GcdsSignature.style = gcdsSignatureCss();

const gcdsSrOnlyCss = () => `@layer reset,default;@layer reset{:host slot{display:initial}}@layer default{:host{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}`;

const GcdsSrOnly = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'f2e667f21a09928c5b940cd4cc2c830ceed9f5d6' }, index.h(Tag, { key: 'ace85b55311b598b9b1449f32dd03c7cffd7d6a0' }, index.h("slot", { key: '3a05da8f35b06eaec871d03827532e8121c7b298' }))));
    }
    static get watchers() { return {
        "tag": [{
                "validateTag": 0
            }]
    }; }
};
GcdsSrOnly.style = gcdsSrOnlyCss();

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

const gcdsStepperCss = () => `@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-stepper .gcds-stepper__steps{display:block;font:var(--gcds-stepper-font-desktop);margin:var(--gcds-stepper-margin-desktop)}@media only screen and (width < 48em){:host .gcds-stepper .gcds-stepper__steps{font:var(--gcds-stepper-font-mobile);margin:var(--gcds-stepper-margin-mobile)}}}`;

const GcdsStepper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        observer.observe(this.el, utils.observerConfig);
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
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        const valid = this.validateRequiredProps();
        if (!valid) {
            utils.logError('gcds-stepper', this.errors);
        }
    }
    render() {
        const { currentStep, lang, totalSteps, tag } = this;
        return (index.h(index.Host, { key: 'd15ae2125394f3cfdbfccb6ec354044328dff24a' }, this.validateRequiredProps() && (index.h("gcds-heading", { key: '01ba8e1736524f51efb7c3b4ac8ecad139162af5', tag: tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "225" }, index.h("span", { key: '55e102a27b4357dca87ab7655e3e460e408e8343', class: "gcds-stepper__steps" }, `${I18N$4[lang].step} ${currentStep} ${I18N$4[lang].of} ${totalSteps}`, index.h("gcds-sr-only", { key: '82d574caac2f88de380f319c86f4f933819a2e0e' }, " : ")), index.h("slot", { key: '261aef7f578b3e0b9db62216d68331777588ebff' })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "currentStep": [{
                "validateCurrentStep": 0
            }],
        "totalSteps": [{
                "validateTotalSteps": 0
            }]
    }; }
};
GcdsStepper.style = gcdsStepperCss();

/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
//   createdAt: Date
//   nested: {
//     foo: [
//       {
//         bar: 'bar'
//       }
//     ]
//     bar: { subBar: boolean }[]
//     baz: {
//       foo: 'foo'
//       bar: {
//         baz: 'baz'
//       }
//     }
//   }
// }


// Is this type a tuple?

// If this type is a tuple, what indices are allowed?

///

function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function makeStateUpdater(key, instance) {
  return updater => {
    instance.setState(old => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every(val => typeof val === 'number');
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = subArr => {
    subArr.forEach(item => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return depArgs => {
    let depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    const newDeps = getDeps(depArgs);
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = ' ' + str;
          }
          return str;
        };
        console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
  return {
    debug: () => {
      var _tableOptions$debugAl;
      return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
    },
    key: "production" === 'development',
    onChange
  };
}

function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table, column, row, cell) => ({
      table,
      column,
      row,
      cell: cell,
      getValue: cell.getValue,
      renderValue: cell.renderValue
    }), getMemoOptions(table.options, 'debugCells'))
  };
  table._features.forEach(feature => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}

function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? typeof String.prototype.replaceAll === 'function' ? accessorKey.replaceAll('.', '_') : accessorKey.replace(/\./g, '_') : undefined) != null ? _ref : typeof resolvedColumnDef.header === 'string' ? resolvedColumnDef.header : undefined;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    // Support deep accessor keys
    if (accessorKey.includes('.')) {
      accessorFn = originalRow => {
        let result = originalRow;
        for (const key of accessorKey.split('.')) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
        }
        return result;
      };
    } else {
      accessorFn = originalRow => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent: parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...((_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap(d => d.getFlatColumns()))];
    }, getMemoOptions(table.options, 'debugColumns')),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], orderColumns => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap(column => column.getLeafColumns());
        return orderColumns(leafColumns);
      }
      return [column];
    }, getMemoOptions(table.options, 'debugColumns'))
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }

  // Yes, we have to convert table to unknown, because we know more than the compiler here.
  return column;
}

const debug = 'debugHeaders';
//

function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = h => {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header: header,
      column
    })
  };
  table._features.forEach(feature => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
const Headers = {
  createTable: table => {
    // Header Groups

    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter(column => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, getMemoOptions(table.options, debug));
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter(column => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, 'center');
    }, getMemoOptions(table.options, debug));
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'left');
    }, getMemoOptions(table.options, debug));
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'right');
    }, getMemoOptions(table.options, debug));

    // Footer Groups

    table.getFooterGroups = memo(() => [table.getHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug));

    // Flat Headers

    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], headerGroups => {
      return headerGroups.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug));

    // Leaf Headers

    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, getMemoOptions(table.options, debug));
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...((_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : []), ...((_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : []), ...((_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : [])].map(header => {
        return header.getLeafHeaders();
      }).flat();
    }, getMemoOptions(table.options, debug));
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  // Find the max depth of the columns:
  // build the leaf column row
  // build each buffer row going up
  //    placeholder for non-existent level
  //    real column for existing level

  let maxDepth = 0;
  const findMaxDepth = function (columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter(column => column.getIsVisible()).forEach(column => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    // The header group we are creating
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join('_'),
      headers: []
    };

    // The parent columns we're going to scan next
    const pendingParentHeaders = [];

    // Scan each column for parents
    headersToGroup.forEach(headerToGroup => {
      // What is the latest (last) parent column?

      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        // The parent header is new
        column = headerToGroup.column.parent;
      } else {
        // The parent header is repeated
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        // This column is repeated. Add it as a sub header to the next batch
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        // This is a new header. Let's create it
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join('_'),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter(d => d.column === column).length}` : undefined,
          depth,
          index: pendingParentHeaders.length
        });

        // Add the headerToGroup as a subHeader of the new header
        header.subHeaders.push(headerToGroup);
        // Add the new header to the pendingParentHeaders to get grouped
        // in the next batch
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();

  // headerGroups = headerGroups.filter(headerGroup => {
  //   return !headerGroup.headers.every(header => header.isPlaceholder)
  // })

  const recurseHeadersForSpans = headers => {
    const filteredHeaders = headers.filter(header => header.column.getIsVisible());
    return filteredHeaders.map(header => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach(_ref => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}

const createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: columnId => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return undefined;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: columnId => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return undefined;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: columnId => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => flattenBy(row.subRows, d => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : undefined,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], leafColumns => {
      return leafColumns.map(column => {
        return createCell(table, row, column, column.id);
      });
    }, getMemoOptions(table.options, 'debugRows')),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], allCells => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, getMemoOptions(table.options, 'debugRows'))
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};

//

const ColumnFaceting = {
  createColumn: (column, table) => {
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return undefined;
      }
      return column._getFacetedMinMaxValues();
    };
  }
};

const includesString = (row, columnId, filterValue) => {
  var _filterValue$toString, _row$getValue;
  const search = filterValue == null || (_filterValue$toString = filterValue.toString()) == null ? void 0 : _filterValue$toString.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = val => testFalsey(val);
const includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = val => testFalsey(val);
const equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = val => testFalsey(val);
const arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = val => testFalsey(val);
const arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some(val => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some(val => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = val => testFalsey(val);
const weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = val => testFalsey(val);
const inNumberRange = (row, columnId, filterValue) => {
  let [min, max] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min && rowValue <= max;
};
inNumberRange.resolveFilterValue = val => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== 'number' ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== 'number' ? parseFloat(unsafeMax) : unsafeMax;
  let min = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return [min, max];
};
inNumberRange.autoRemove = val => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);

// Export

const filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
// Utils

function testFalsey(val) {
  return val === undefined || val === null || val === '';
}

//

const ColumnFiltering = {
  getDefaultColumnDef: () => {
    return {
      filterFn: 'auto'
    };
  },
  getInitialState: state => {
    return {
      columnFilters: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnFiltersChange: makeStateUpdater('columnFilters', table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'string') {
        return filterFns.includesString;
      }
      if (typeof value === 'number') {
        return filterFns.inNumberRange;
      }
      if (typeof value === 'boolean') {
        return filterFns.equals;
      }
      if (value !== null && typeof value === 'object') {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === 'auto' ? column.getAutoFilterFn() : // @ts-ignore
      (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find(d => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex(d => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = value => {
      table.setColumnFilters(old => {
        const filterFn = column.getFilterFn();
        const previousFilter = old == null ? void 0 : old.find(d => d.id === column.id);
        const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : undefined);

        //
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter(d => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousFilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map(d => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
  },
  createRow: (row, _table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: table => {
    table.setColumnFilters = updater => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = old => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter(filter => {
          const column = leafColumns.find(d => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.resetColumnFilters = defaultState => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === 'undefined' || typeof value === 'string' && !value;
}

const sum = (columnId, _leafRows, childRows) => {
  // It's faster to just add the aggregations together instead of
  // process leaf nodes individually
  return childRows.reduce((sum, next) => {
    const nextValue = next.getValue(columnId);
    return sum + (typeof nextValue === 'number' ? nextValue : 0);
  }, 0);
};
const min = (columnId, _leafRows, childRows) => {
  let min;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null && (min > value || min === undefined && value >= value)) {
      min = value;
    }
  });
  return min;
};
const max = (columnId, _leafRows, childRows) => {
  let max;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null && (max < value || max === undefined && value >= value)) {
      max = value;
    }
  });
  return max;
};
const extent = (columnId, _leafRows, childRows) => {
  let min;
  let max;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min === undefined) {
        if (value >= value) min = max = value;
      } else {
        if (min > value) min = value;
        if (max < value) max = value;
      }
    }
  });
  return [min, max];
};
const mean = (columnId, leafRows) => {
  let count = 0;
  let sum = 0;
  leafRows.forEach(row => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count, sum += value;
    }
  });
  if (count) return sum / count;
  return;
};
const median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map(row => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map(d => d.getValue(columnId))).values());
};
const uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map(d => d.getValue(columnId))).size;
};
const count = (_columnId, leafRows) => {
  return leafRows.length;
};
const aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};

//

const ColumnGrouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: props => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: 'auto'
    };
  },
  getInitialState: state => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onGroupingChange: makeStateUpdater('grouping', table),
      groupedColumnMode: 'reorder'
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping(old => {
        // Find any existing grouping for this column
        if (old != null && old.includes(column.id)) {
          return old.filter(d => d !== column.id);
        }
        return [...(old != null ? old : []), column.id];
      });
    };
    column.getCanGroup = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup) return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'number') {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === '[object Date]') {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === 'auto' ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: table => {
    table.setGrouping = updater => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = defaultState => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = columnId => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter(col => !grouping.includes(col.id));
  if (groupedColumnMode === 'remove') {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map(g => leafColumns.find(col => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}

//

const ColumnOrdering = {
  getInitialState: state => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnOrderChange: makeStateUpdater('columnOrder', table)
    };
  },
  createColumn: (column, table) => {
    column.getIndex = memo(position => [_getVisibleLeafColumns(table, position)], columns => columns.findIndex(d => d.id === column.id), getMemoOptions(table.options, 'debugColumns'));
    column.getIsFirstColumn = position => {
      var _columns$;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
    };
    column.getIsLastColumn = position => {
      var _columns;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
    };
  },
  createTable: table => {
    table.setColumnOrder = updater => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = defaultState => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => columns => {
      // Sort grouped columns to the start of the column list
      // before the headers are built
      let orderedColumns = [];

      // If there is no order, return the normal columns
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];

        // If there is an order, make a copy of the columns
        const columnsCopy = [...columns];

        // And make a new ordered array of the columns

        // Loop over the columns and place them in order into the new array
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex(d => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }

        // If there are any columns left, add them to the end
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, getMemoOptions(table.options, 'debugTable'));
  }
};

//

const getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
const ColumnPinning = {
  getInitialState: state => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnPinningChange: makeStateUpdater('columnPinning', table)
    };
  },
  createColumn: (column, table) => {
    column.pin = position => {
      const columnIds = column.getLeafColumns().map(d => d.id).filter(Boolean);
      table.setColumnPinning(old => {
        var _old$left3, _old$right3;
        if (position === 'right') {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter(d => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter(d => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === 'left') {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter(d => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter(d => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter(d => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter(d => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some(d => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map(d => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some(d => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some(d => right == null ? void 0 : right.includes(d));
      return isLeft ? 'left' : isRight ? 'right' : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...(left != null ? left : []), ...(right != null ? right : [])];
      return allCells.filter(d => !leftAndRight.includes(d.column.id));
    }, getMemoOptions(table.options, 'debugRows'));
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left], (allCells, left) => {
      const cells = (left != null ? left : []).map(columnId => allCells.find(cell => cell.column.id === columnId)).filter(Boolean).map(d => ({
        ...d,
        position: 'left'
      }));
      return cells;
    }, getMemoOptions(table.options, 'debugRows'));
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map(columnId => allCells.find(cell => cell.column.id === columnId)).filter(Boolean).map(d => ({
        ...d,
        position: 'right'
      }));
      return cells;
    }, getMemoOptions(table.options, 'debugRows'));
  },
  createTable: table => {
    table.setColumnPinning = updater => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = defaultState => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = position => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map(columnId => allColumns.find(column => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, 'debugColumns'));
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map(columnId => allColumns.find(column => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, 'debugColumns'));
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...(left != null ? left : []), ...(right != null ? right : [])];
      return allColumns.filter(d => !leftAndRight.includes(d.id));
    }, getMemoOptions(table.options, 'debugColumns'));
  }
};

function safelyAccessDocument(_document) {
  return _document || (typeof document !== 'undefined' ? document : null);
}

//

//

const defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
const getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
const ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: state => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      columnResizeMode: 'onEnd',
      columnResizeDirection: 'ltr',
      onColumnSizingChange: makeStateUpdater('columnSizing', table),
      onColumnSizingInfoChange: makeStateUpdater('columnSizingInfo', table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = memo(position => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(0, column.getIndex(position)).reduce((sum, column) => sum + column.getSize(), 0), getMemoOptions(table.options, 'debugColumns'));
    column.getAfter = memo(position => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(column.getIndex(position) + 1).reduce((sum, column) => sum + column.getSize(), 0), getMemoOptions(table.options, 'debugColumns'));
    column.resetSize = () => {
      table.setColumnSizing(_ref2 => {
        let {
          [column.id]: _,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum = 0;
      const recurse = header => {
        if (header.subHeaders.length) {
          header.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum += (_header$column$getSiz = header.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = _contextDocument => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return e => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          // lets not respond to multiple touches (e.g. 2 or 3 fingers)
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map(d => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== 'number') {
            return;
          }
          table.setColumnSizingInfo(old => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === 'rtl' ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach(_ref3 => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === 'onChange' || eventType === 'end') {
            table.setColumnSizing(old => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = clientXPos => updateOffset('move', clientXPos);
        const onEnd = clientXPos => {
          updateOffset('end', clientXPos);
          table.setColumnSizingInfo(old => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = safelyAccessDocument(_contextDocument);
        const mouseEvents = {
          moveHandler: e => onMove(e.clientX),
          upHandler: e => {
            contextDocument == null || contextDocument.removeEventListener('mousemove', mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener('mouseup', mouseEvents.upHandler);
            onEnd(e.clientX);
          }
        };
        const touchEvents = {
          moveHandler: e => {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }
            onMove(e.touches[0].clientX);
            return false;
          },
          upHandler: e => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener('touchmove', touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener('touchend', touchEvents.upHandler);
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }
            onEnd((_e$touches$ = e.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          contextDocument == null || contextDocument.addEventListener('touchmove', touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener('touchend', touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener('mousemove', mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener('mouseup', mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo(old => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: table => {
    table.setColumnSizing = updater => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = updater => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = defaultState => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = defaultState => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
let passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === 'boolean') return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop = () => {};
    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === 'touchstart';
}

//

const ColumnVisibility = {
  getInitialState: state => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnVisibilityChange: makeStateUpdater('columnVisibility', table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = value => {
      if (column.getCanHide()) {
        table.setColumnVisibility(old => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _ref, _table$getState$colum;
      const childColumns = column.columns;
      return (_ref = childColumns.length ? childColumns.some(c => c.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return e => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], cells => {
      return cells.filter(cell => cell.column.getIsVisible());
    }, getMemoOptions(table.options, 'debugRows'));
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], getMemoOptions(table.options, 'debugRows'));
  },
  createTable: table => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter(d => d.getIsVisible()).map(d => d.id).join('_')], columns => {
        return columns.filter(d => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, getMemoOptions(table.options, 'debugColumns'));
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod('getVisibleFlatColumns', () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod('getVisibleLeafColumns', () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod('getLeftVisibleLeafColumns', () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod('getRightVisibleLeafColumns', () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod('getCenterVisibleLeafColumns', () => table.getCenterLeafColumns());
    table.setColumnVisibility = updater => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = defaultState => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = value => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some(column => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some(column => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return e => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
function _getVisibleLeafColumns(table, position) {
  return !position ? table.getVisibleLeafColumns() : position === 'center' ? table.getCenterVisibleLeafColumns() : position === 'left' ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}

//

const GlobalFaceting = {
  createTable: table => {
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, '__global__');
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, '__global__');
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, '__global__');
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};

//

const GlobalFiltering = {
  getInitialState: state => {
    return {
      globalFilter: undefined,
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onGlobalFilterChange: makeStateUpdater('globalFilter', table),
      globalFilterFn: 'auto',
      getColumnCanGlobalFilter: column => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === 'string' || typeof value === 'number';
      }
    };
  },
  createColumn: (column, table) => {
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
      return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
  },
  createTable: table => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      const {
        globalFilterFn: globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === 'auto' ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
    };
    table.setGlobalFilter = updater => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = defaultState => {
      table.setGlobalFilter(defaultState ? undefined : table.initialState.globalFilter);
    };
  }
};

//

const RowExpanding = {
  getInitialState: state => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onExpandedChange: makeStateUpdater('expanded', table),
      paginateExpandedRows: true
    };
  },
  createTable: table => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = updater => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = expanded => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = defaultState => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some(row => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return e => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;

      // If expanded is true, save some cycles and return true
      if (typeof expanded === 'boolean') {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }

      // If any row is not expanded, return false
      if (table.getRowModel().flatRows.some(row => !row.getIsExpanded())) {
        return false;
      }

      // They must all be expanded :shrug:
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach(id => {
        const splitId = id.split('.');
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = expanded => {
      table.setExpanded(old => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach(rowId => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand) return;
        row.toggleExpanded();
      };
    };
  }
};

//

const defaultPageIndex = 0;
const defaultPageSize = 10;
const getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
const RowPagination = {
  getInitialState: state => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...(state == null ? void 0 : state.pagination)
      }
    };
  },
  getDefaultOptions: table => {
    return {
      onPaginationChange: makeStateUpdater('pagination', table)
    };
  },
  createTable: table => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = updater => {
      const safeUpdater = old => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = defaultState => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = updater => {
      table.setPagination(old => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === 'undefined' || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = defaultState => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = defaultState => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = updater => {
      table.setPagination(old => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    //deprecated
    table.setPageCount = updater => table.setPagination(old => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === 'number') {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], pageCount => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
      }
      return pageOptions;
    }, getMemoOptions(table.options, 'debugTable'));
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex(old => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex(old => {
        return old + 1;
      });
    };
    table.firstPage = () => {
      return table.setPageIndex(0);
    };
    table.lastPage = () => {
      return table.setPageIndex(table.getPageCount() - 1);
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
    };
    table.getRowCount = () => {
      var _table$options$rowCou;
      return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
    };
  }
};

//

const getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
const RowPinning = {
  getInitialState: state => {
    return {
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onRowPinningChange: makeStateUpdater('rowPinning', table)
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map(_ref => {
        let {
          id
        } = _ref;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map(_ref2 => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const rowIds = new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning(old => {
        var _old$top3, _old$bottom3;
        if (position === 'bottom') {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter(d => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter(d => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === 'top') {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter(d => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter(d => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter(d => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter(d => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref3;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === 'function') {
        return enableRowPinning(row);
      }
      return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some(d => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some(d => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? 'top' : isBottom ? 'bottom' : false;
    };
    row.getPinnedIndex = () => {
      var _ref4, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position) return -1;
      const visiblePinnedRowIds = (_ref4 = position === 'top' ? table.getTopRows() : table.getBottomRows()) == null ? void 0 : _ref4.map(_ref5 => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
  },
  createTable: table => {
    table.setRowPinning = updater => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = defaultState => {
      var _table$initialState$r, _table$initialState;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = position => {
      var _pinningState$positio;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table._getPinnedRows = (visibleRows, pinnedRowIds, position) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ?
      //get all rows that are pinned even if they would not be otherwise visible
      //account for expanded parent rows, but not pagination or filtering
      (pinnedRowIds != null ? pinnedRowIds : []).map(rowId => {
        const row = table.getRow(rowId, true);
        return row.getIsAllParentsExpanded() ? row : null;
      }) :
      //else get only visible rows that are pinned
      (pinnedRowIds != null ? pinnedRowIds : []).map(rowId => visibleRows.find(row => row.id === rowId));
      return rows.filter(Boolean).map(d => ({
        ...d,
        position
      }));
    };
    table.getTopRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top], (allRows, topPinnedRowIds) => table._getPinnedRows(allRows, topPinnedRowIds, 'top'), getMemoOptions(table.options, 'debugRows'));
    table.getBottomRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.bottom], (allRows, bottomPinnedRowIds) => table._getPinnedRows(allRows, bottomPinnedRowIds, 'bottom'), getMemoOptions(table.options, 'debugRows'));
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = new Set([...(top != null ? top : []), ...(bottom != null ? bottom : [])]);
      return allRows.filter(d => !topAndBottom.has(d.id));
    }, getMemoOptions(table.options, 'debugRows'));
  }
};

//

const RowSelection = {
  getInitialState: state => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onRowSelectionChange: makeStateUpdater('rowSelection', table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: table => {
    table.setRowSelection = updater => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = defaultState => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = value => {
      table.setRowSelection(old => {
        value = typeof value !== 'undefined' ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;

        // We don't use `mutateRowIsSelected` here for performance reasons.
        // All of the rows are flat already, so it wouldn't be worth it
        if (value) {
          preGroupedFlatRows.forEach(row => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach(row => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = value => table.setRowSelection(old => {
      const resolvedValue = typeof value !== 'undefined' ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach(row => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });

    // addRowSelectionRange: rowId => {
    //   const {
    //     rows,
    //     rowsById,
    //     options: { selectGroupingRows, selectSubRows },
    //   } = table

    //   const findSelectedRow = (rows: Row[]) => {
    //     let found
    //     rows.find(d => {
    //       if (d.getIsSelected()) {
    //         found = d
    //         return true
    //       }
    //       const subFound = findSelectedRow(d.subRows || [])
    //       if (subFound) {
    //         found = subFound
    //         return true
    //       }
    //       return false
    //     })
    //     return found
    //   }

    //   const firstRow = findSelectedRow(rows) || rows[0]
    //   const lastRow = rowsById[rowId]

    //   let include = false
    //   const selectedRowIds = {}

    //   const addRow = (row: Row) => {
    //     mutateRowIsSelected(selectedRowIds, row.id, true, {
    //       rowsById,
    //       selectGroupingRows: selectGroupingRows!,
    //       selectSubRows: selectSubRows!,
    //     })
    //   }

    //   table.rows.forEach(row => {
    //     const isFirstRow = row.id === firstRow.id
    //     const isLastRow = row.id === lastRow.id

    //     if (isFirstRow || isLastRow) {
    //       if (!include) {
    //         include = true
    //       } else if (include) {
    //         addRow(row)
    //         include = false
    //       }
    //     }

    //     if (include) {
    //       addRow(row)
    //     }
    //   })

    //   table.setRowSelection(selectedRowIds)
    // },
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, 'debugTable'));
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, 'debugTable'));
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, 'debugTable'));

    ///

    // getGroupingRowCanSelect: rowId => {
    //   const row = table.getRow(rowId)

    //   if (!row) {
    //     throw new Error()
    //   }

    //   if (typeof table.options.enableGroupingRowSelection === 'function') {
    //     return table.options.enableGroupingRowSelection(row)
    //   }

    //   return table.options.enableGroupingRowSelection ?? false
    // },

    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some(row => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter(row => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some(row => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter(row => row.getCanSelect()).some(d => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return e => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return e => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection(old => {
        var _opts$selectChildren;
        value = typeof value !== 'undefined' ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === 'some';
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === 'all';
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === 'function') {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === 'function') {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === 'function') {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return e => {
        var _target;
        if (!canSelect) return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
const mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);

  // const isGrouped = row.getIsGrouped()

  // if ( // TODO: enforce grouping row selection rules
  //   !isGrouped ||
  //   (isGrouped && table.options.enableGroupingRowSelection)
  // ) {
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach(key => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  // }

  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach(row => mutateRowIsSelected(selectedRowIds, row.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};

  // Filters top level and nested rows
  const recurseRows = function (rows, depth) {
    return rows.map(row => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach(subRow => {
    // Bail out early if we know both of these
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }

    // Check row selection of nested subrows
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === 'all') {
        someSelected = true;
      } else if (subRowChildrenSelected === 'some') {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? 'all' : someSelected ? 'some' : false;
}

const reSplitAlphaNumeric = /([0-9]+)/gm;
const alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};

// The text filter is more basic (less numeric support)
// but is much faster
const text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};

// The text filter is more basic (less numeric support)
// but is much faster
const textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const datetime = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);

  // Can handle nullish values
  // Use > and < because == (and ===) doesn't work with
  // Date objects (would require calling getTime()).
  return a > b ? 1 : a < b ? -1 : 0;
};
const basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};

// Utils

function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }
    return String(a);
  }
  if (typeof a === 'string') {
    return a;
  }
  return '';
}

// Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity
function compareAlphanumeric(aStr, bStr) {
  // Split on number groups, but keep the delimiter
  // Then remove falsey split values
  const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);

  // While
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();

    // Both are string
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }

    // One is a string, one is a number
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }

    // Both are numbers
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}

// Exports

const sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};

//

const RowSorting = {
  getInitialState: state => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: 'auto',
      sortUndefined: 1
    };
  },
  getDefaultOptions: table => {
    return {
      onSortingChange: makeStateUpdater('sorting', table),
      isMultiSortEvent: e => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === '[object Date]') {
          return sortingFns.datetime;
        }
        if (typeof value === 'string') {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'string') {
        return 'asc';
      }
      return 'desc';
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === 'auto' ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      // if (column.columns.length) {
      //   column.columns.forEach((c, i) => {
      //     if (c.id) {
      //       table.toggleColumnSorting(c.id, undefined, multi || !!i)
      //     }
      //   })
      //   return
      // }

      // this needs to be outside of table.setSorting to be in sync with rerender
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== 'undefined' && desc !== null;
      table.setSorting(old => {
        // Find any existing sorting for this column
        const existingSorting = old == null ? void 0 : old.find(d => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex(d => d.id === column.id);
        let newSorting = [];

        // What should we do with this sort action?
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === 'desc';

        // Multi-mode
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = 'toggle';
          } else {
            sortAction = 'add';
          }
        } else {
          // Normal mode
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = 'replace';
          } else if (existingSorting) {
            sortAction = 'toggle';
          } else {
            sortAction = 'replace';
          }
        }

        // Handle toggle states that will remove the sorting
        if (sortAction === 'toggle') {
          // If we are "actually" toggling (not a manual set value), should we remove the sorting?
          if (!hasManualValue) {
            // Is our intention to remove?
            if (!nextSortingOrder) {
              sortAction = 'remove';
            }
          }
        }
        if (sortAction === 'add') {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          // Take latest n columns
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === 'toggle') {
          // This flips (or sets) the
          newSorting = old.map(d => {
            if (d.id === column.id) {
              return {
                ...d,
                desc: nextDesc
              };
            }
            return d;
          });
        } else if (sortAction === 'remove') {
          newSorting = old.filter(d => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === 'desc';
      return sortDescFirst ? 'desc' : 'asc';
    };
    column.getNextSortingOrder = multi => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && (
      // If enableSortRemove, enable in general
      multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true) // If multi, don't allow if enableMultiRemove))
      ) {
        return false;
      }
      return isSorted === 'desc' ? 'asc' : 'desc';
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find(d => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? 'desc' : 'asc';
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex(d => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      //clear sorting for just 1 column
      table.setSorting(old => old != null && old.length ? old.filter(d => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return e => {
        if (!canSort) return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(undefined, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: table => {
    table.setSorting = updater => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = defaultState => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};

const builtInFeatures = [Headers, ColumnVisibility, ColumnOrdering, ColumnPinning, ColumnFaceting, ColumnFiltering, GlobalFaceting,
//depends on ColumnFaceting
GlobalFiltering,
//depends on ColumnFiltering
RowSorting, ColumnGrouping,
//depends on RowSorting
RowExpanding, RowPagination, RowPinning, RowSelection, ColumnSizing];

//

function createTable(options) {
  var _options$_features, _options$initialState;
  const _features = [...builtInFeatures, ...((_options$_features = options._features) != null ? _options$_features : [])];
  let table = {
    _features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = options => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options);
    }
    return {
      ...defaultOptions,
      ...options
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...((_options$initialState = options.initialState) != null ? _options$initialState : {})
  };
  table._features.forEach(feature => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: cb => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;

        // Schedule a microtask to run the queued callbacks after
        // the current call stack (render, etc) has finished.
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch(error => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: updater => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: updater => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join('.') : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up

    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], defaultColumn => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: props => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: props => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, getMemoOptions(options, 'debugColumns')),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], columnDefs => {
      const recurseColumns = function (columnDefs, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs.map(columnDef => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, getMemoOptions(options, 'debugColumns')),
    getAllFlatColumns: memo(() => [table.getAllColumns()], allColumns => {
      return allColumns.flatMap(column => {
        return column.getFlatColumns();
      });
    }, getMemoOptions(options, 'debugColumns')),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], flatColumns => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, getMemoOptions(options, 'debugColumns')),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns) => {
      let leafColumns = allColumns.flatMap(column => column.getLeafColumns());
      return orderColumns(leafColumns);
    }, getMemoOptions(options, 'debugColumns')),
    getColumn: columnId => {
      const column = table._getAllFlatColumnsById()[columnId];
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}

function getCoreRowModel() {
  return table => memo(() => [table.options.data], data => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function (originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        // This could be an expensive check at scale, so we should move it somewhere else, but where?
        // if (!id) {
        //   if ("production" !== 'production') {
        //     throw new Error(`getRowId expected an ID, but got ${id}`)
        //   }
        // }

        // Make the row
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, undefined, parentRow == null ? void 0 : parentRow.id);

        // Keep track of every row in a flat array
        rowModel.flatRows.push(row);
        // Also keep track of every row by its ID
        rowModel.rowsById[row.id] = row;
        // Push table row into parent
        rows.push(row);

        // Get the original subrows
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);

          // Then recursively access them
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, getMemoOptions(table.options, 'debugTable', 'getRowModel', () => table._autoResetPageIndex()));
}
function expandRows(rowModel) {
  const expandedRows = [];
  const handleRow = row => {
    var _row$subRows;
    expandedRows.push(row);
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
      row.subRows.forEach(handleRow);
    }
  };
  rowModel.rows.forEach(handleRow);
  return {
    rows: expandedRows,
    flatRows: rowModel.flatRows,
    rowsById: rowModel.rowsById
  };
}

function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) {
    return filterRowModelFromLeafs(rows, filterRowImpl, table);
  }
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  var _table$options$maxLea;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
  const recurseFilterRows = function (rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];

    // Filter from children up first
    for (let i = 0; i < rowsToFilter.length; i++) {
      var _row$subRows;
      let row = rowsToFilter[i];
      const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
      newRow.columnFilters = row.columnFilters;
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        row = newRow;
        if (filterRow(row) && !newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
        if (filterRow(row) || newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
      } else {
        row = newRow;
        if (filterRow(row)) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
        }
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  var _table$options$maxLea2;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;

  // Filters top level and nested rows
  const recurseFilterRows = function (rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    // Filter from parents downward first

    const rows = [];

    // Apply the filter to any subRows
    for (let i = 0; i < rowsToFilter.length; i++) {
      let row = rowsToFilter[i];
      const pass = filterRow(row);
      if (pass) {
        var _row$subRows2;
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
          const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
        }
        rows.push(row);
        newFilteredFlatRows.push(row);
        newFilteredRowsById[row.id] = row;
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}

function getFilteredRowModel() {
  return table => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter], (rowModel, columnFilters, globalFilter) => {
    if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      for (let i = 0; i < rowModel.flatRows.length; i++) {
        rowModel.flatRows[i].columnFilters = {};
        rowModel.flatRows[i].columnFiltersMeta = {};
      }
      return rowModel;
    }
    const resolvedColumnFilters = [];
    const resolvedGlobalFilters = [];
    (columnFilters != null ? columnFilters : []).forEach(d => {
      var _filterFn$resolveFilt;
      const column = table.getColumn(d.id);
      if (!column) {
        return;
      }
      const filterFn = column.getFilterFn();
      if (!filterFn) {
        return;
      }
      resolvedColumnFilters.push({
        id: d.id,
        filterFn,
        resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
      });
    });
    const filterableIds = (columnFilters != null ? columnFilters : []).map(d => d.id);
    const globalFilterFn = table.getGlobalFilterFn();
    const globallyFilterableColumns = table.getAllLeafColumns().filter(column => column.getCanGlobalFilter());
    if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
      filterableIds.push('__global__');
      globallyFilterableColumns.forEach(column => {
        var _globalFilterFn$resol;
        resolvedGlobalFilters.push({
          id: column.id,
          filterFn: globalFilterFn,
          resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
        });
      });
    }
    let currentColumnFilter;
    let currentGlobalFilter;

    // Flag the prefiltered row model with each filter state
    for (let j = 0; j < rowModel.flatRows.length; j++) {
      const row = rowModel.flatRows[j];
      row.columnFilters = {};
      if (resolvedColumnFilters.length) {
        for (let i = 0; i < resolvedColumnFilters.length; i++) {
          currentColumnFilter = resolvedColumnFilters[i];
          const id = currentColumnFilter.id;

          // Tag the row with the column filter state
          row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, filterMeta => {
            row.columnFiltersMeta[id] = filterMeta;
          });
        }
      }
      if (resolvedGlobalFilters.length) {
        for (let i = 0; i < resolvedGlobalFilters.length; i++) {
          currentGlobalFilter = resolvedGlobalFilters[i];
          const id = currentGlobalFilter.id;
          // Tag the row with the first truthy global filter state
          if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, filterMeta => {
            row.columnFiltersMeta[id] = filterMeta;
          })) {
            row.columnFilters.__global__ = true;
            break;
          }
        }
        if (row.columnFilters.__global__ !== true) {
          row.columnFilters.__global__ = false;
        }
      }
    }
    const filterRowsImpl = row => {
      // Horizontally filter rows through each column
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };

    // Filter final rows using all of the active filters
    return filterRows(rowModel.rows, filterRowsImpl, table);
  }, getMemoOptions(table.options, 'debugTable', 'getFilteredRowModel', () => table._autoResetPageIndex()));
}

function getPaginationRowModel(opts) {
  return table => memo(() => [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? undefined : table.getState().expanded], (pagination, rowModel) => {
    if (!rowModel.rows.length) {
      return rowModel;
    }
    const {
      pageSize,
      pageIndex
    } = pagination;
    let {
      rows,
      flatRows,
      rowsById
    } = rowModel;
    const pageStart = pageSize * pageIndex;
    const pageEnd = pageStart + pageSize;
    rows = rows.slice(pageStart, pageEnd);
    let paginatedRowModel;
    if (!table.options.paginateExpandedRows) {
      paginatedRowModel = expandRows({
        rows,
        flatRows,
        rowsById
      });
    } else {
      paginatedRowModel = {
        rows,
        flatRows,
        rowsById
      };
    }
    paginatedRowModel.flatRows = [];
    const handleRow = row => {
      paginatedRowModel.flatRows.push(row);
      if (row.subRows.length) {
        row.subRows.forEach(handleRow);
      }
    };
    paginatedRowModel.rows.forEach(handleRow);
    return paginatedRowModel;
  }, getMemoOptions(table.options, 'debugTable'));
}

function getSortedRowModel() {
  return table => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];

    // Filter out sortings that correspond to non existing columns
    const availableSorting = sortingState.filter(sort => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach(sortEntry => {
      const column = table.getColumn(sortEntry.id);
      if (!column) return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = rows => {
      // This will also perform a stable sorting using the row index
      // if needed.
      const sortedData = rows.map(row => ({
        ...row
      }));
      sortedData.sort((rowA, rowB) => {
        for (let i = 0; i < availableSorting.length; i += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i];
          const columnInfo = columnInfoById[sortEntry.id];
          const sortUndefined = columnInfo.sortUndefined;
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;

          // All sorting ints should always return in ascending order
          if (sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === undefined;
            const bUndefined = bValue === undefined;
            if (aUndefined || bUndefined) {
              if (sortUndefined === 'first') return aUndefined ? -1 : 1;
              if (sortUndefined === 'last') return aUndefined ? 1 : -1;
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? sortUndefined : -sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }

          // If sorting is non-zero, take care of desc and inversion
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });

      // If there are sub-rows, sort them
      sortedData.forEach(row => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, getMemoOptions(table.options, 'debugTable', 'getSortedRowModel', () => table._autoResetPageIndex()));
}

const I18N$3 = {
  en: {
    activeBadgeLabel: '{count} active filter',
    all: 'All',
    asc: 'asc',
    ascending: 'Ascending',
    default: 'default',
    desc: 'desc',
    descending: 'Descending',
    filter: 'Filter',
    filterAndSort: 'Filter and sort',
    headingActivateAsc: ': activate for ascending sort',
    headingActivateDesc: ': activate for descending sort',
    headingRemoveSort: ': activate to remove sorting',
    modalApplyButton: 'Apply',
    modalResetAllButton: 'Reset all',
    modalClose: 'Close',
    noDataHeading: 'No data to display',
    noDataText: "There's currently no data available for this table.",
    noResultsHeading: 'No results match your filter',
    noResultsText: 'Try clearing or updating the filter to see results.',
    noResultsClearFilter: 'Clear filter',
    paginationLabel: 'Table pagination',
    pillFilter: 'Filter:',
    pillRemoveFilter: 'Click to remove filter',
    pillRemoveSort: 'Click to remove sorting',
    pillSort: 'Sorted by:',
    radioLabelNoSort: 'No sorting',
    rowsPerPage: 'Rows',
    showingMatchesPagination: 'Showing {start} to {end} of {filtered} matches',
    showingMatches: 'Showing {matchNumber} matches',
    showingNoMatches: 'No matches found',
    showingPages: 'Showing {start} to {end} of {total} rows',
    showingAllRows: 'Showing {total} rows',
    showingNoRows: 'No rows to show',
    sort: 'Sort',
  },
  fr: {
    activeBadgeLabel: '{count} filtre actif',
    all: 'Tout',
    asc: 'asc',
    ascending: 'Ascendant',
    default: 'défaut',
    desc: 'desc',
    descending: 'Descendant',
    filter: 'Filtrer',
    filterAndSort: 'Filtrer et trier',
    headingActivateAsc: ': activer le tri par ordre ascendant',
    headingActivateDesc: ': activer le tri par ordre descendant',
    headingRemoveSort: ': activer pour enlever le tri',
    modalApplyButton: 'Appliquer',
    modalResetAllButton: 'Tout réinitialiser',
    modalClose: 'Fermer',
    noDataHeading: 'Pas de données à afficher',
    noDataText: 'Ce tableau ne contient aucune donnée pour le moment.',
    noResultsHeading: 'Aucun résultat pour ce filtre',
    noResultsText: 'Effacez ou modifiez le filtre pour afficher des résultats.',
    noResultsClearFilter: 'Effacer le filtre',
    paginationLabel: 'Pagination du tableau',
    pillFilter: 'Filtrer :',
    pillRemoveFilter: 'Cliquer pour enlever le filtre',
    pillRemoveSort: 'Cliquer pour enlever le tri',
    pillSort: 'Trié par :',
    radioLabelNoSort: 'Aucun tri',
    rowsPerPage: 'Lignes',
    showingMatchesPagination:
      'Affiche {start} à {end} sur {filtered} résultats',
    showingMatches: 'Affiche {matchNumber} résultats',
    showingNoMatches: 'Aucun résultat trouvé',
    showingPages: 'Affiche {start} à {end} sur {total} lignes',
    showingAllRows: 'Affiche {total} lignes',
    showingNoRows: 'Aucune ligne à afficher',
    sort: 'Trier',
  },
};

const buildInitialSorting = (columns) => {
    return (columns !== null && columns !== void 0 ? columns : [])
        .filter(col => col.sortDirection)
        .map(col => ({
        id: col.field,
        desc: col.sortDirection === 'desc',
    }));
};
const buildColumnDefs = (columns, sort) => {
    return (columns !== null && columns !== void 0 ? columns : []).map(col => ({
        id: col.field,
        accessorKey: col.field,
        header: col.header,
        // Per-column sort: falls back to global `sort` prop
        enableSorting: col.sort !== undefined ? col.sort : sort,
    }));
};
const buildTableOptions = (GcdsTable) => {
    var _a;
    return {
        data: ((_a = GcdsTable.data) !== null && _a !== void 0 ? _a : []),
        columns: buildColumnDefs(GcdsTable.columns, GcdsTable.sort),
        state: {
            sorting: GcdsTable.sorting,
            columnFilters: GcdsTable.columnFilters,
            globalFilter: GcdsTable.globalFilter,
            pagination: GcdsTable.paginationState,
            columnPinning: {},
        },
        onStateChange: () => { },
        renderFallbackValue: null,
        // Sorting
        enableSorting: GcdsTable.sortEnabled(),
        sortDescFirst: false,
        manualSorting: false,
        onSortingChange: (updater) => {
            var _a;
            GcdsTable.sorting =
                typeof updater === 'function' ? updater(GcdsTable.sorting) : updater;
            (_a = GcdsTable.table) === null || _a === void 0 ? void 0 : _a.setOptions((prev) => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { sorting: GcdsTable.sorting }) })));
        },
        // Filtering
        enableFilters: GcdsTable.filter,
        onGlobalFilterChange: (updater) => {
            var _a;
            GcdsTable.globalFilter =
                typeof updater === 'function'
                    ? updater(GcdsTable.globalFilter)
                    : updater;
            (_a = GcdsTable.table) === null || _a === void 0 ? void 0 : _a.setOptions((prev) => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { globalFilter: GcdsTable.globalFilter }) })));
        },
        // Pagination
        manualPagination: false,
        onPaginationChange: (updater) => {
            var _a;
            GcdsTable.paginationState =
                typeof updater === 'function'
                    ? updater(GcdsTable.paginationState)
                    : updater;
            GcdsTable.paginationCurrentPage = GcdsTable.paginationState.pageIndex + 1;
            (_a = GcdsTable.table) === null || _a === void 0 ? void 0 : _a.setOptions((prev) => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { pagination: GcdsTable.paginationState }) })));
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: GcdsTable.pagination
            ? getPaginationRowModel()
            : undefined,
        getFilteredRowModel: GcdsTable.filter ? getFilteredRowModel() : undefined,
        // Keep pagination active even when disabled so state is consistent
        autoResetPageIndex: true,
    };
};
const updateTableOptions = (GcdsTable) => {
    if (GcdsTable.table) {
        GcdsTable.table.setOptions((prev) => (Object.assign(Object.assign({}, prev), buildTableOptions(GcdsTable))));
        // Force re-render by touching the sorting property
        GcdsTable.sorting = [...GcdsTable.sorting];
    }
};
const parseSizeOptions = (options) => {
    const defaultValue = [10, 25, 50, 0];
    if (typeof options === 'string') {
        try {
            const parsed = JSON.parse(options);
            if (Array.isArray(parsed) &&
                parsed.every(opt => typeof opt === 'number')) {
                return parsed;
            }
            else {
                console.error('[gcds-table] Invalid pagination-size-options format. Expected JSON array of numbers.');
                return defaultValue;
            }
        }
        catch (e) {
            console.error('[gcds-table] Error parsing pagination-size-options:', e);
            return defaultValue;
        }
    }
    if (Array.isArray(options) && options.every(v => typeof v === 'number')) {
        return options;
    }
    console.error('[gcds-table] Invalid pagination-size-options type. Expected string or array of numbers.');
    return defaultValue;
};

// ─── Render helpers ───────────────────────────────────────────────────────
/* Get appropriate sort icon based on column's sort state
 * @param column - the column to get the sort icon for
 * Returns an empty string if the column is not sortable, an up arrow if sorted ascending, a down arrow if sorted descending, and a generic sort icon if sortable but not currently sorted.
 */
const getSortIcon = (column) => {
    if (!(column === null || column === void 0 ? void 0 : column.getCanSort()))
        return '';
    const sorted = column.getIsSorted();
    if (sorted === 'asc')
        return 'arrow-up';
    if (sorted === 'desc')
        return 'arrow-down';
    return 'arrow-up-down';
};
/* Get appropriate sort button title based on column's sort state
 * @param column - the column to get the sort title for
 * @param lang - the current language for internationalization
 * Returns a string indicating the current sort state and the action that will be taken if the button is pressed.
 */
const getSortTitle = (column, lang) => {
    let sortText = '';
    if (column.getIsSorted() === 'asc') {
        sortText = I18N$3[lang].headingActivateDesc;
    }
    else if (column.getIsSorted() === 'desc') {
        sortText = I18N$3[lang].headingRemoveSort;
    }
    else if (column.getIsSorted() === false) {
        sortText = I18N$3[lang].headingActivateAsc;
    }
    return `${column.columnDef.header} ${sortText}`;
};
/* Get the current table status text based on the pagination and filtering state
 * @param el - the table element containing the current filter and pagination state
 * @param table - the TanStack Table instance to get row counts from
 * @param paginationState - the current pagination state to determine page index and size
 * @param lang - the current language for internationalization
 * Returns a string describing the current table status, such as how many rows are being shown, how many total rows there are, and how many match the current filter.
 */
const renderTableStatus = (el, table, paginationState, lang) => {
    var _a, _b;
    const currentPageIndex = (_a = paginationState === null || paginationState === void 0 ? void 0 : paginationState.pageIndex) !== null && _a !== void 0 ? _a : 0;
    const totalRows = table.getPreFilteredRowModel().rows.length;
    const filteredRows = table.getFilteredRowModel().rows.length;
    const paginationSize = (_b = paginationState === null || paginationState === void 0 ? void 0 : paginationState.pageSize) !== null && _b !== void 0 ? _b : 0;
    // Filtered results with multiple pages
    if (el.filter &&
        el.filterValue &&
        el.pagination &&
        table.getPageCount() > 1) {
        return I18N$3[lang].showingMatchesPagination
            .replace('{start}', currentPageIndex * paginationSize + 1)
            .replace('{end}', Math.min((currentPageIndex + 1) * paginationSize, totalRows))
            .replace('{filtered}', filteredRows);
        // Filtered results on singular page
    }
    else if (el.filter &&
        el.filterValue &&
        el.pagination &&
        table.getPageCount() === 1) {
        return I18N$3[lang].showingMatches.replace('{matchNumber}', filteredRows);
        // No results match filter
    }
    else if (el.filter && el.filterValue && filteredRows === 0) {
        return I18N$3[lang].showingNoMatches;
        // Rows across multiple pages
    }
    else if (!el.filterValue && el.pagination && table.getPageCount() > 1) {
        return I18N$3[lang].showingPages
            .replace('{start}', currentPageIndex * paginationSize + 1)
            .replace('{end}', Math.min((currentPageIndex + 1) * paginationSize, totalRows))
            .replace('{total}', totalRows);
        // No rows avalable
    }
    else if (table.getRowCount() === 0) {
        return I18N$3[lang].showingNoRows;
        // Rows on one page
    }
    else {
        return I18N$3[lang].showingAllRows.replace('{total}', totalRows);
    }
};
const renderSortRadios = (element) => {
    var _a, _b;
    const { el, table, lang } = element;
    const radioOptions = [
        {
            id: 'nosort',
            label: `${I18N$3[lang].radioLabelNoSort}${((_a = element.initialSorting) === null || _a === void 0 ? void 0 : _a.length) === 0 ? ` — ${I18N$3[lang].default}` : ''}`,
            value: 'null',
        },
    ];
    let isSorted = 'null';
    ((_b = el === null || el === void 0 ? void 0 : el.columns) !== null && _b !== void 0 ? _b : [])
        .filter(col => col.sort !== false)
        .map(col => {
        var _a, _b, _c, _d;
        if ((_a = table === null || table === void 0 ? void 0 : table.getColumn(col.field)) === null || _a === void 0 ? void 0 : _a.getIsSorted()) {
            isSorted =
                ((_b = table === null || table === void 0 ? void 0 : table.getColumn(col.field)) === null || _b === void 0 ? void 0 : _b.getIsSorted()) === 'asc'
                    ? `asc-${col.field}`
                    : `desc-${col.field}`;
        }
        let ascDefaultLabel = '';
        let descDefaultLabel = '';
        if (((_d = (_c = element.initialSorting) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.id) === col.field) {
            if (element.initialSorting[0].desc) {
                descDefaultLabel = ` — ${I18N$3[lang].default}`;
            }
            else {
                ascDefaultLabel = ` — ${I18N$3[lang].default}`;
            }
        }
        radioOptions.push({
            id: `asc-${col.field}`,
            label: `${col.header} (${I18N$3[lang].ascending})${ascDefaultLabel}`,
            value: `asc-${col.field}`,
        });
        radioOptions.push({
            id: `desc-${col.field}`,
            label: `${col.header} (${I18N$3[lang].descending})${descDefaultLabel}`,
            value: `desc-${col.field}`,
        });
    });
    return (index.h("div", { class: "gcds-table__modal-sort" }, index.h("gcds-heading", { tag: "h3", "margin-top": "0", "margin-bottom": "0" }, index.h("div", null, index.h("gcds-icon", { name: "sort", size: "h6", "margin-right": "100", "aria-hidden": "true" }), I18N$3[lang].sort)), index.h("gcds-radios", { legend: I18N$3[lang].sort, "hide-legend": true, name: "sort", autoFocus: true, options: radioOptions, value: isSorted, ref: el => (element.sortRadios = el) })));
};
const getSortValue = (sort) => {
    if (!(sort === null || sort === void 0 ? void 0 : sort.length))
        return 'null';
    const { id, desc } = sort[0];
    return `${desc ? 'desc' : 'asc'}-${id}`;
};
const renderFilterSortModal = element => {
    const { filter, filterValue, lang } = element;
    return (index.h("div", { class: "gcds-table__filters" }, index.h("gcds-button", { size: "small", "button-role": "primary", onClick: () => element.filterSortModal.showModal() }, index.h("div", null, element.filter && element.sortEnabled() ? (index.h("gcds-icon", { name: "tune", size: "h5", "margin-right": "50" })) : element.filter ? (index.h("gcds-icon", { name: "filter", size: "h5", "margin-right": "50" })) : (index.h("gcds-icon", { name: "sort", size: "h5", "margin-right": "50" })), element.filter && element.sortEnabled()
        ? I18N$3[lang].filterAndSort
        : element.filter
            ? I18N$3[lang].filter
            : I18N$3[lang].sort, filter && filterValue && (index.h(index.Fragment, null, index.h("gcds-sr-only", { tag: "span" }, ":"), index.h("span", { class: "gcds-table__active-count", "aria-label": `${I18N$3[lang].activeBadgeLabel.replace('{count}', 1)}` }, "1"))))), index.h("dialog", { class: "gcds-table__modal", "aria-modal": "true", "aria-labelledby": "gcds-table__modal-heading", ref: el => (element.filterSortModal = el) }, index.h("div", { class: "gcds-table__modal-header" }, index.h("gcds-heading", { tag: "h2", id: "gcds-table__modal-heading", marginTop: "0", marginBottom: "0" }, I18N$3[lang].filterAndSort), index.h("gcds-button", { "button-role": "secondary", onClick: () => {
            element.filterSortModal.close();
            if (element.filter) {
                element.filterInput.value = element.initialFilter;
            }
            if (element.sortEnabled()) {
                element.sortRadios.value = getSortValue(element.initialSorting);
            }
        } }, I18N$3[lang].modalClose)), index.h("form", { class: "gcds-table__modal-body", onSubmit: ev => {
            ev.preventDefault();
            if (element.filter) {
                element.filterValue = element.filterInput.value;
            }
            if (element.sortEnabled()) {
                const sortValue = element.sortRadios.value;
                if (sortValue === 'null') {
                    element.sorting = [];
                }
                else {
                    const [direction, field] = sortValue.split('-');
                    element.sorting = [
                        {
                            id: field,
                            desc: direction === 'desc',
                        },
                    ];
                }
            }
            updateTableOptions(element);
            element.filterSortModal.close();
        } }, index.h("div", { class: "gcds-table__modal-content" }, element.filter && (index.h("gcds-input", { class: "gcds-table__modal-filter", type: "search", label: I18N$3[lang].filter, name: "filter", inputId: "gcds-table-filter", autoFocus: true, value: filterValue, ref: el => (element.filterInput = el) })), element.sortEnabled() && renderSortRadios(element)), index.h("div", { class: "gcds-table__modal-footer" }, index.h("gcds-button", { "button-role": "secondary", onClick: () => {
            if (element.filter) {
                element.filterInput.value = element.initialFilter;
            }
            if (element.sortEnabled()) {
                element.sortRadios.value = getSortValue(element.initialSorting);
            }
        } }, I18N$3[lang].modalResetAllButton), index.h("gcds-button", { "button-role": "primary", type: "submit" }, I18N$3[lang].modalApplyButton))))));
};
const renderFilterPills = (filterValue, lang, onRemove) => {
    if (!filterValue)
        return null;
    return (index.h("div", { class: "gcds-table__active-filter" }, index.h("button", { class: "gcds-table__pill", onClick: onRemove, title: I18N$3[lang].pillRemoveFilter }, index.h("gcds-sr-only", { tag: "span" }, I18N$3[lang].pillFilter), filterValue, index.h("gcds-icon", { name: "close", size: "text-small" }))));
};
const renderSortPills = (sorting, table, lang, onRemove) => {
    if ((sorting === null || sorting === void 0 ? void 0 : sorting.length) === 0)
        return null;
    return (index.h("div", { class: "gcds-table__active-sorting" }, index.h("span", { class: "gcds-table__sort-label" }, I18N$3[lang].pillSort), sorting === null || sorting === void 0 ? void 0 :
        sorting.map(sort => {
            const column = table.getColumn(sort.id);
            if (!column)
                return null;
            return (index.h("button", { class: "gcds-table__pill", onClick: () => onRemove(column.id), title: I18N$3[lang].pillRemoveSort }, `${column.columnDef.header} (${sort.desc ? I18N$3[lang].descending : I18N$3[lang].ascending})`, index.h("gcds-icon", { name: "close", size: "text-small" })));
        })));
};

const gcdsTableCss = () => `@layer reset, default, empty, controls, pagination, overwrites, modal, alignment;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-table{font:var(--gcds-table-font)}:host .gcds-table table{border-block-start:var(--gcds-table-border-width) solid var(--gcds-table-outer-border-color);border-collapse:collapse;color:var(--gcds-table-text);margin-block-start:var(--gcds-table-margin);width:100%}:host .gcds-table table caption{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host .gcds-table table th{border-block-end:var(--gcds-table-header-cell-border-width) solid var(--gcds-table-header-cell-border-color);color:var(--gcds-table-header-cell-text);font-weight:var(--gcds-table-header-cell-font-weight);padding:0;text-align:left}:host .gcds-table table th>button{all:unset;box-sizing:border-box;cursor:pointer;display:block;position:relative;width:100%;z-index:1}:host .gcds-table table th>button:hover{background:var(--gcds-table-header-cell-hover-background)}:host .gcds-table table th>button:focus{background-color:var(--gcds-table-header-cell-focus-background);border-color:var(--gcds-table-header-cell-focus-background);box-shadow:var(--gcds-table-header-cell-focus-box-shadow);color:var(--gcds-table-header-cell-focus-text);outline:var(--gcds-table-header-cell-focus-outline-width) solid var(--gcds-table-header-cell-focus-background);outline-offset:var(--gcds-table-header-cell-focus-outline-offset)}@media only screen and (width >= 48em){:host .gcds-table table th:not(:has(>button)),:host .gcds-table table th>button{padding:var(--gcds-table-cell-padding-desktop)}}:host .gcds-table table th[aria-sort=none]>button:not(:hover):not(:focus):not(:active) .gcds-table__sort-icon{opacity:0}:host .gcds-table table thead th{vertical-align:top}:host .gcds-table table tbody th,:host .gcds-table table tbody tr{border-block-end:var(--gcds-table-border-width) solid var(--gcds-table-cell-border-color)}@media only screen and (width >= 48em){:host .gcds-table table tbody td{padding:var(--gcds-table-cell-padding-desktop)}}@media only screen and (width >= 48em){:host .gcds-table table tbody th,:host .gcds-table table:has(tbody th) thead th:first-child{border-inline-end:var(--gcds-table-header-cell-border-width) solid var(--gcds-table-header-cell-border-color)}}@media only screen and (width < 48em){:host .gcds-table table td,:host .gcds-table table th{display:block;font-weight:var(--gcds-table-font-weight-mobile);padding:var(--gcds-table-cell-padding-mobile)}:host .gcds-table table td:before,:host .gcds-table table th:before{color:var(--gcds-table-label-mobile);content:attr(data-column);display:block;font-size:var(--gcds-table-font-size-small)}:host .gcds-table table td:first-of-type,:host .gcds-table table th:first-of-type{padding-block-start:var(               --gcds-table-cell-padding-mobile-first-last             )}:host .gcds-table table td:last-of-type,:host .gcds-table table th:last-of-type{padding-block-end:var(--gcds-table-cell-padding-mobile-first-last)}:host .gcds-table table thead th{position:absolute;clip:rect(0 0 0 0)}:host .gcds-table table tbody th{border:0}}}@layer empty{:host .gcds-table .gcds-table__empty{background-color:var(--gcds-table-empty-background);padding:var(--gcds-table-empty-padding-desktop);--gcds-heading-h3-desktop:var(--gcds-heading-h3-mobile);--gcds-text-size-body-desktop:var(--gcds-table-font);--gcds-text-size-body-mobile:var(--gcds-table-font)}@media only screen and (width < 48em){:host .gcds-table .gcds-table__empty{padding:var(--gcds-table-empty-padding-mobile)}}}@layer controls{:host .gcds-table .gcds-table__filters{border-block-end:var(--gcds-table-filters-border-width) solid var(--gcds-table-filters-border-color);margin-block-end:var(--gcds-table-filters-margin);padding-block-end:var(--gcds-table-filters-padding)}:host .gcds-table .gcds-table__filters gcds-button div{align-items:center;display:flex}:host .gcds-table .gcds-table__filters .gcds-table__active-count{align-items:center;background:var(--gcds-table-filters-count-background);border-radius:var(--gcds-table-filters-count-border-radius);color:var(--gcds-table-filters-count-text);display:inline-flex;font-size:var(--gcds-table-font-size-small);justify-content:center;line-height:var(--gcds-table-filters-count-line-height);margin-inline-start:var(--gcds-table-filters-count-margin);padding:var(--gcds-table-filters-count-padding)}:host .gcds-table .gcds-table__active-pills{display:flex;gap:var(--gcds-table-gap)}@media only screen and (width < 48em){:host .gcds-table .gcds-table__active-pills{flex-direction:column}}:host .gcds-table .gcds-table__active-pills:not(:empty){margin-block-end:var(--gcds-table-active-pills-margin)}:host .gcds-table .gcds-table__active-pills .gcds-table__pill{align-items:center;background-color:var(--gcds-table-pill-background);border:0;border-radius:var(--gcds-table-pill-border-radius);color:var(--gcds-table-pill-text);cursor:pointer;display:inline-flex;font:inherit;padding:var(--gcds-table-pill-padding)}:host .gcds-table .gcds-table__active-pills .gcds-table__pill gcds-icon{height:var(--gcds-table-pill-icon-size);margin-inline-start:var(--gcds-table-pill-icon-margin);width:var(--gcds-table-pill-icon-size)}:host .gcds-table .gcds-table__active-pills .gcds-table__pill:hover:not(:focus){background-color:var(--gcds-table-pill-hover-background);color:var(--gcds-table-pill-hover-text)}:host .gcds-table .gcds-table__active-pills .gcds-table__pill:focus{background-color:var(--gcds-table-pill-focus-background);border-color:var(--gcds-table-pill-focus-background);box-shadow:var(--gcds-table-pill-focus-box-shadow);color:var(--gcds-table-pill-focus-text);outline:var(--gcds-table-pill-focus-outline-width) solid var(--gcds-table-pill-focus-background);outline-offset:var(--gcds-table-pill-focus-outline-offset)}:host .gcds-table .gcds-table__active-pills .gcds-table__active-sorting .gcds-table__sort-label{display:inline-block;margin-inline-end:var(--gcds-table-active-sorting-margin)}@media only screen and (width >= 48em){:host .gcds-table .gcds-table__active-pills .gcds-table__active-filter+.gcds-table__active-sorting{border-inline-start:var(--gcds-table-active-sorting-border-width) solid var(--gcds-table-active-sorting-border-color);padding-inline-start:var(--gcds-table-active-sorting-padding)}}:host .gcds-table .gcds-table__row-management{display:flex;gap:var(--gcds-table-gap)}@media only screen and (width >= 30em){:host .gcds-table .gcds-table__row-management{align-items:center}}@media only screen and (width < 30em){:host .gcds-table .gcds-table__row-management{flex-direction:column}}:host .gcds-table .gcds-table__row-management{--gcds-label-font-desktop:var(--gcds-table-font);--gcds-label-margin:0;--gcds-select-margin:0;--gcds-select-padding:var(--gcds-table-select-padding)}:host .gcds-table .gcds-table__row-management gcds-select::part(wrapper){align-items:center;display:inline-flex;gap:var(--gcds-table-gap)}:host .gcds-table .gcds-table__row-management gcds-select::part(select){font:var(--gcds-table-font);line-height:1;min-height:auto}@media only screen and (width >= 30em){:host .gcds-table .gcds-table__row-management .gcds-table__page-size+.gcds-table__page-info{border-inline-start:var(--gcds-table-page-info-border-width) solid var(--gcds-table-page-info-border-color);padding-inline-start:var(--gcds-table-page-info-padding)}}}@layer pagination{:host .gcds-table gcds-pagination{margin-block-start:var(--gcds-table-pagination-margin)}}@layer overwrites{:host .gcds-table .gcds-table__filters>gcds-button,:host .gcds-table .gcds-table__table gcds-button{--gcds-button-mobile-width:auto;--gcds-button-font-desktop:var(--gcds-table-font);--gcds-button-font-mobile:var(--gcds-table-font);--gcds-button-small-font-desktop:var(--gcds-table-font);--gcds-button-small-font-mobile:var(--gcds-table-font);--gcds-button-start-font-desktop:var(--gcds-table-font);--gcds-button-start-font-mobile:var(--gcds-table-font);--gcds-button-padding:var(--gcds-table-button-padding);--gcds-button-small-padding:var(--gcds-table-button-padding);--gcds-button-start-padding:var(--gcds-table-button-padding)}}@layer modal{:host .gcds-table .gcds-table__modal{background:var(--gcds-table-modal-background);border:0;border-radius:var(--gcds-table-modal-border-radius-desktop);box-shadow:var(--gcds-table-modal-box-shadow);max-height:var(--gcds-table-modal-max-height-desktop);max-width:var(--gcds-table-modal-max-width);padding:0;width:var(--gcds-table-modal-width)}:host .gcds-table .gcds-table__modal[open]{display:flex;flex-direction:column}:host .gcds-table .gcds-table__modal::backdrop{background-color:var(--gcds-table-modal-backdrop-background)}@media only screen and (width < 48em){:host .gcds-table .gcds-table__modal:modal{border-radius:var(--gcds-table-modal-border-radius-mobile);inset:unset;bottom:0;height:var(--gcds-table-modal-height-mobile);left:0;margin:0;max-height:var(--gcds-table-modal-height-mobile);overflow-y:scroll;position:fixed}}:host .gcds-table .gcds-table__modal gcds-button{--gcds-button-font-desktop:var(--gcds-button-font-mobile)}:host .gcds-table .gcds-table__modal .gcds-table__modal-header{align-items:center;border-block-end:var(--gcds-table-modal-border);display:flex;flex:0 0 auto;justify-content:space-between;padding:var(--gcds-table-modal-spacing);--gcds-heading-h2-desktop:var(--gcds-table-modal-header-heading);--gcds-heading-h2-mobile:var(--gcds-table-modal-header-heading)}:host .gcds-table .gcds-table__modal .gcds-table__modal-body{display:flex;flex:1 1 auto;flex-direction:column;min-height:0}:host .gcds-table .gcds-table__modal .gcds-table__modal-content,:host .gcds-table .gcds-table__modal .gcds-table__modal-footer{padding:var(--gcds-table-modal-spacing)}:host .gcds-table .gcds-table__modal .gcds-table__modal-content{flex:1 1 auto;min-height:0;overflow-y:auto}:host .gcds-table .gcds-table__modal .gcds-table__modal-content .gcds-table__modal-filter+.gcds-table__modal-sort{border-block-start:var(--gcds-table-modal-border);margin-block-start:var(--gcds-table-modal-spacing);padding-block-start:var(--gcds-table-modal-spacing)}:host .gcds-table .gcds-table__modal .gcds-table__modal-content .gcds-table__modal-sort{--gcds-heading-h3-desktop:var(--gcds-radio-legend-font-desktop);--gcds-heading-h3-mobile:var(--gcds-radio-legend-font-mobile)}:host .gcds-table .gcds-table__modal .gcds-table__modal-content .gcds-table__modal-sort div{display:flex}:host .gcds-table .gcds-table__modal .gcds-table__modal-content gcds-input{--gcds-label-font-desktop:var(--gcds-table-modal-body-font-bold);--gcds-label-font-mobile:var(--gcds-table-modal-body-font-bold)}:host .gcds-table .gcds-table__modal .gcds-table__modal-content gcds-radios{--gcds-radio-legend-font-desktop:var(           --gcds-table-modal-body-font-bold         );--gcds-radio-legend-font-mobile:var(--gcds-table-modal-body-font-bold);--gcds-radio-label-font-desktop:var(           --gcds-table-modal-body-font-medium         );--gcds-radio-label-font-mobile:var(           --gcds-table-modal-body-font-medium         )}:host .gcds-table .gcds-table__modal .gcds-table__modal-footer{background-color:var(--gcds-table-modal-background);box-shadow:var(--gcds-table-modal-footer-box-shadow);display:flex;flex:0 0 auto;gap:var(--gcds-table-modal-spacing)}@media only screen and (width < 48em){:host .gcds-table .gcds-table__modal .gcds-table__modal-footer{flex-direction:column}}:host .gcds-table .gcds-table__modal .gcds-table__modal-footer gcds-button{flex:1}:host .gcds-table .gcds-table__modal .gcds-table__modal-footer gcds-button::part(button){padding:var(--gcds-table-modal-footer-button-padding);width:var(--gcds-table-modal-footer-button-width)}}@layer alignment{:host .gcds-table .alignment-start{text-align:left}:host .gcds-table .alignment-center{text-align:center}:host .gcds-table .alignment-end{text-align:right}@media only screen and (width < 48em){:host .gcds-table table td,:host .gcds-table table th{text-align:left!important}}}`;

const GcdsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsTableStateChange = index.createEvent(this, "gcdsTableStateChange");
        // ─── Props ────────────────────────────────────────────────────────────────
        /** Column definitions */
        this.columns = [];
        /** Row data */
        this.data = [];
        /** Enable global column sorting (can be overridden per column) */
        this.sort = false;
        /** Enable pagination */
        this.pagination = false;
        /** Current page index */
        this.paginationCurrentPage = 1;
        /** Number of rows per page */
        this.paginationSize = 10;
        /**
         * Available page-size options.
         * Use 0 to represent "All rows".
         */
        // prettier-ignore
        this.paginationSizeOptions = [10, 25, 50, 0];
        /** Enable global filter */
        this.filter = false;
        /** Current filter string */
        this.filterValue = '';
        // ─── Internal state ───────────────────────────────────────────────────────
        this.sorting = [];
        // @ts-ignore - this is used in building table options
        this.columnFilters = [];
        this.globalFilter = this.filterValue;
        this.paginationState = {
            pageIndex: Math.max(0, this.paginationCurrentPage - 1),
            pageSize: this.pagination
                ? this.paginationSize === 0
                    ? Number.MAX_SAFE_INTEGER
                    : this.paginationSize
                : Number.MAX_SAFE_INTEGER,
        };
        // TanStack table instance (not reactive – mutations trigger re-renders via @State)
        this.table = null;
        this.lastEmittedRowIds = '';
        // Flags to help stop multiple rendering on first load
        this.isInitializing = true;
        this.hasRenderedOnce = false;
        // Store initial values to determine if they have been changed by the user
        // @ts-ignore - these are used in event handlers to reset filter/sort state
        this.initialFilter = this.filterValue;
        // @ts-ignore - these are used in event handlers to reset filter/sort state
        this.initialSorting = [];
    }
    // ─── Watchers ─────────────────────────────────────────────────────────────
    onColumnsChange(newVal) {
        if (this.isInitializing)
            return;
        if (typeof newVal === 'string') {
            try {
                this.columns = JSON.parse(newVal);
            }
            catch (e) {
                console.error('[gcds-table] Invalid JSON in column-data:', e);
            }
        }
        updateTableOptions(this);
        this.syncSlottedElements();
    }
    onDataChange(newVal) {
        if (this.isInitializing)
            return;
        if (typeof newVal === 'string') {
            try {
                this.data = JSON.parse(newVal);
            }
            catch (e) {
                console.error('[gcds-table] Invalid JSON in data property:', e);
            }
        }
        updateTableOptions(this);
        this.syncSlottedElements();
    }
    onSortChange() {
        if (this.isInitializing)
            return;
        this.onDataChange(this.data);
    }
    onPaginationChange(newVal) {
        if (this.isInitializing)
            return;
        if (newVal) {
            this.paginationState = {
                pageIndex: Math.max(0, this.paginationCurrentPage - 1),
                pageSize: this.paginationSize === 0
                    ? Number.MAX_SAFE_INTEGER
                    : this.paginationSize,
            };
        }
        else {
            this.paginationState = {
                pageIndex: Math.max(0, this.paginationCurrentPage - 1),
                pageSize: Number.MAX_SAFE_INTEGER,
            };
        }
        this.onDataChange(this.data);
    }
    onPageChange(newPage) {
        var _a;
        if (this.isInitializing)
            return;
        newPage = Math.round(newPage);
        this.paginationState = Object.assign(Object.assign({}, this.paginationState), { pageIndex: Math.max(0, newPage - 1) });
        (_a = this.table) === null || _a === void 0 ? void 0 : _a.setOptions(prev => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { pagination: this.paginationState }) })));
    }
    onPageSizeChange(newSize) {
        var _a, _b, _c, _d;
        if (this.isInitializing)
            return;
        newSize = Math.round(newSize);
        const totalRows = (_c = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getPreFilteredRowModel()) === null || _b === void 0 ? void 0 : _b.rows.length) !== null && _c !== void 0 ? _c : 0;
        if (newSize === 0) {
            this.paginationState = {
                pageIndex: 0,
                pageSize: totalRows === 0 ? 1 : totalRows,
            };
        }
        else {
            this.paginationState = {
                pageIndex: this.paginationState.pageIndex + 1 > Math.ceil(totalRows / newSize)
                    ? 0
                    : this.paginationState.pageIndex,
                pageSize: newSize === 0 ? totalRows : newSize,
            };
        }
        (_d = this.table) === null || _d === void 0 ? void 0 : _d.setOptions(prev => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { pagination: this.paginationState }) })));
    }
    onSizeOptionsChange(newVal) {
        if (this.isInitializing)
            return;
        this.paginationSizeOptions = parseSizeOptions(newVal);
        updateTableOptions(this);
    }
    onFilterValueChange(newVal) {
        var _a;
        if (this.isInitializing)
            return;
        if (!this.filter && newVal !== '') {
            this.filterValue = '';
            return;
        }
        this.globalFilter = newVal;
        (_a = this.table) === null || _a === void 0 ? void 0 : _a.setOptions(prev => (Object.assign(Object.assign({}, prev), { state: Object.assign(Object.assign({}, prev.state), { globalFilter: this.globalFilter }) })));
    }
    onLangChange(newVal) {
        if (this.isInitializing)
            return;
        this.lang = newVal;
    }
    // ─── Helpers ──────────────────────────────────────────────────────────────
    initTable() {
        this.table = createTable(buildTableOptions(this));
    }
    emitStateChangeIfDirty() {
        var _a, _b;
        const rows = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getRowModel().rows) !== null && _b !== void 0 ? _b : [];
        // Compute a stable fingerprint of the current visible row set
        const rowIdFingerprint = rows.map(r => r.id).join(',');
        // Only emit if the visible rows have actually changed
        if (rowIdFingerprint === this.lastEmittedRowIds)
            return;
        this.lastEmittedRowIds = rowIdFingerprint;
        this.gcdsTableStateChange.emit({
            visibleRows: rows.map((row, rowIndex) => ({
                rowId: row.id,
                rowIndex,
                original: row.original,
            })),
            page: this.paginationState.pageIndex + 1,
            pageSize: this.paginationSize,
            filterValue: this.filterValue,
            sorting: this.sorting.length > 0 ? this.sorting : null,
        });
    }
    sortEnabled() {
        var _a;
        return (this.sort || ((_a = this.columns) !== null && _a !== void 0 ? _a : []).some(col => col.sort));
    }
    getTemplate(columnKey) {
        return this.el.querySelector(`template[slot="cell:${columnKey}"]`);
    }
    applyBindings(el, row) {
        const bindings = Array.from(el.attributes).filter(attr => attr.name.startsWith('data-bind'));
        for (const binding of bindings) {
            let prop;
            let value;
            if (binding.name === 'data-bind-template') {
                prop = 'textContent';
                value = binding.value.replace(/\{(\w+)\}/g, (_, field) => { var _a; return String((_a = row[field]) !== null && _a !== void 0 ? _a : ''); });
            }
            else if (binding.name === 'data-bind') {
                prop = 'textContent';
                value = row[binding.value];
            }
            else if (binding.name.startsWith('data-bind-template-')) {
                prop = binding.name.replace('data-bind-template-', '');
                value = binding.value.replace(/\{(\w+)\}/g, (_, field) => { var _a; return String((_a = row[field]) !== null && _a !== void 0 ? _a : ''); });
            }
            else {
                prop = binding.name.replace('data-bind-', '');
                value = row[binding.value];
            }
            if (prop in el) {
                el[prop] = value;
            }
            else {
                el.setAttribute(prop, String(value !== null && value !== void 0 ? value : ''));
            }
        }
    }
    /*
     * Clone elements from templates to use in slots
     */
    createSlottedElements() {
        var _a, _b;
        const slottedColumns = this.columns.filter(s => s.slotted && !s.managed);
        const rows = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getCoreRowModel().rows) !== null && _b !== void 0 ? _b : [];
        rows.forEach(row => {
            slottedColumns.forEach(column => {
                const slotName = this.getManagedSlotName(row.id, column.field);
                const template = this.getTemplate(column.field);
                if (!template)
                    return;
                const clone = template.content.cloneNode(true);
                const wrapper = document.createElement('span');
                wrapper.setAttribute('slot', slotName);
                wrapper.appendChild(clone);
                const child = wrapper.querySelector('*');
                if (child) {
                    this.applyBindings(child, row.original);
                    child.row = row.original;
                    child.column = column;
                    child.rowIndex = row.index;
                    child.value = row.getValue(column.field);
                }
                this.el.appendChild(wrapper);
            });
        });
    }
    syncSlottedElements() {
        var _a, _b;
        const slottedColumns = this.columns.filter(s => s.slotted && !s.managed);
        if (slottedColumns.length === 0)
            return;
        const rows = (_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getCoreRowModel().rows) !== null && _b !== void 0 ? _b : [];
        // Index slotted elements
        const existingMap = new Map();
        this.el.querySelectorAll('[slot^="cell-"]').forEach(el => {
            existingMap.set(el.getAttribute('slot'), el);
        });
        // Check if slotted elements already exist or need to be created based on rows
        rows.forEach(row => {
            slottedColumns.forEach(column => {
                const slotName = this.getManagedSlotName(row.id, column.field);
                const existing = existingMap.get(slotName);
                if (existing) {
                    // Slot already in the DOM — just refresh its bindings.
                    const child = existing.querySelector('*');
                    if (child) {
                        this.applyBindings(child, row.original);
                        child.row = row.original;
                        child.column = column;
                        child.rowIndex = row.index;
                        child.value = row.getValue(column.field);
                    }
                    // Mark as handled so it isn't removed below.
                    existingMap.delete(slotName);
                }
                else {
                    // New row/column combination — create from scratch.
                    const template = this.getTemplate(column.field);
                    if (!template)
                        return;
                    const clone = template.content.cloneNode(true);
                    const wrapper = document.createElement('span');
                    wrapper.setAttribute('slot', slotName);
                    wrapper.appendChild(clone);
                    const child = wrapper.querySelector('*');
                    if (child) {
                        this.applyBindings(child, row.original);
                        child.row = row.original;
                        child.column = column;
                        child.rowIndex = row.index;
                        child.value = row.getValue(column.field);
                    }
                    this.el.appendChild(wrapper);
                }
            });
        });
        // Remove stale slotted elements
        existingMap.forEach(el => el.remove());
    }
    // ─── Event handlers ───────────────────────────────────────────────────────
    /*
     * Handle sort toggling by updating table state
     */
    handleSortToggle(columnId) {
        var _a;
        const col = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getColumn(columnId);
        if (!(col === null || col === void 0 ? void 0 : col.getCanSort()))
            return;
        col.toggleSorting();
    }
    /*
     * Handle page size selection by updating table state and focusing the table
     */
    handlePageSizeSelect(e) {
        const select = e.target;
        const val = Number(select.value);
        this.paginationSize = val;
    }
    /*
     * Handle pagination control clicks by updating table state and focusing the table
     */
    handlePaginationClick(e) {
        var _a, _b;
        this.paginationCurrentPage = e.detail.page;
        // focus table here to ensure keyboard users can navigate from pagination controls to table rows
        (_a = this.shadowElement) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = this.shadowElement) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    getManagedSlotName(row, columnField) {
        return `cell-${row}-${columnField}`;
    }
    // ─── Methods ────────────────────────────────────────────────────────────
    async getVisibleRows() {
        var _a, _b;
        return ((_b = (_a = this.table) === null || _a === void 0 ? void 0 : _a.getRowModel().rows.map(row => ({
            rowId: row.id,
            rowIndex: row.index,
            original: row.original,
        }))) !== null && _b !== void 0 ? _b : []);
    }
    // ─── Lifecycle ────────────────────────────────────────────────────────────
    componentWillLoad() {
        this.isInitializing = true;
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        // Validate if information is being passed as JSON strings and parse it
        if (typeof this.columns === 'string') {
            try {
                this.columns = JSON.parse(this.columns);
            }
            catch (e) {
                console.error(e);
            }
        }
        if (typeof this.data === 'string') {
            try {
                this.data = JSON.parse(this.data);
            }
            catch (e) {
                console.error(e);
            }
        }
        this.paginationSizeOptions = parseSizeOptions(this.paginationSizeOptions);
        // Seed initial sort from sortDirection column definitions
        if (this.sortEnabled()) {
            this.sorting = buildInitialSorting(this.columns);
        }
        this.initialSorting = this.sorting;
        this.initTable();
        if (this.table) {
            this.createSlottedElements();
        }
        this.isInitializing = false;
    }
    componentDidRender() {
        if (!this.hasRenderedOnce) {
            this.hasRenderedOnce = true;
            return;
        }
        this.emitStateChangeIfDirty();
    }
    // ─── Render ───────────────────────────────────────────────────────────────
    render() {
        var _a;
        if (!this.table)
            return null;
        const headerGroups = this.table.getHeaderGroups();
        const rows = this.pagination
            ? this.table.getPaginationRowModel().rows
            : this.table.getRowModel().rows;
        return (index.h(index.Host, null, index.h("section", { class: "gcds-table" }, this.el.querySelector('[slot="caption"]') && (index.h("div", { id: "gcds-table__caption" }, index.h("slot", { name: "caption" }))), (this.filter || this.sortEnabled()) && renderFilterSortModal(this), index.h("div", { class: "gcds-table__active-pills" }, this.filter && renderFilterPills(this.filterValue, this.lang, () => {
            this.filterValue = '';
            updateTableOptions(this);
        }), renderSortPills(this.sorting, this.table, this.lang, (columnId) => {
            this.sorting = this.sorting.filter(s => s.id !== columnId);
            updateTableOptions(this);
        })), index.h("div", { class: "gcds-table__row-management" }, this.pagination && (index.h("div", { class: "gcds-table__page-size" }, index.h("gcds-select", { label: I18N$3[this.lang].rowsPerPage, name: "page-size", selectId: "gcds-table-page-size", value: this.paginationSize.toString(), onChange: e => this.handlePageSizeSelect(e) }, this.paginationSizeOptions.map(opt => (index.h("option", { key: opt, value: opt }, opt === 0 ? I18N$3[this.lang].all : opt)))))), index.h("span", { class: "gcds-table__page-info", role: "status", "aria-live": "polite" }, renderTableStatus(this.el, this.table, this.paginationState, this.lang))), index.h("table", { class: "gcds-table__table", tabindex: "-1", "aria-labelledby": this.el.querySelector('[slot="caption"]')
                ? 'gcds-table__caption'
                : undefined, ref: el => {
                if (el)
                    this.shadowElement = el;
            } }, index.h("thead", null, headerGroups.map(hg => (index.h("tr", { key: hg.id }, hg.headers.map(header => {
            var _a;
            const colDef = ((_a = this.columns) !== null && _a !== void 0 ? _a : []).find(c => c.field === header.id);
            const canSort = header.column.getCanSort();
            const alignmentClass = (colDef === null || colDef === void 0 ? void 0 : colDef.alignment)
                ? `alignment-${colDef.alignment}`
                : '';
            const iconName = getSortIcon(header.column);
            return (index.h("th", { key: header.id, class: `gcds-table__th ${alignmentClass}`, scope: "col", "aria-sort": header.column.getIsSorted() === 'asc'
                    ? 'ascending'
                    : header.column.getIsSorted() === 'desc'
                        ? 'descending'
                        : canSort
                            ? 'none'
                            : undefined }, canSort ? (index.h("button", { onClick: () => this.handleSortToggle(header.id), title: getSortTitle(header.column, this.lang) }, colDef === null || colDef === void 0 ? void 0 :
                colDef.header, iconName && (index.h("gcds-icon", { name: iconName, class: "gcds-table__sort-icon", "aria-hidden": "true" })))) : (colDef === null || colDef === void 0 ? void 0 : colDef.header)));
        }))))), index.h("tbody", null, rows.length === 0 ? (index.h("tr", null, index.h("td", { class: "gcds-table__empty", colSpan: ((_a = this.columns) !== null && _a !== void 0 ? _a : []).length }, this.filter && this.filterValue !== '' ? (index.h("div", null, index.h("gcds-heading", { tag: "h3", "heading-role": "secondary", "margin-top": "0", "margin-bottom": "100" }, I18N$3[this.lang].noResultsHeading), index.h("gcds-text", { "text-role": "secondary", "margin-bottom": "200" }, I18N$3[this.lang].noResultsText), index.h("gcds-button", { onClick: () => (this.filterValue = this.initialFilter) }, I18N$3[this.lang].noResultsClearFilter))) : (index.h("div", null, index.h("gcds-heading", { tag: "h3", "heading-role": "secondary", "margin-top": "0", "margin-bottom": "100" }, I18N$3[this.lang].noDataHeading), index.h("gcds-text", { "text-role": "secondary", "margin-bottom": "0" }, I18N$3[this.lang].noDataText)))))) : (rows.map(row => (index.h("tr", { key: row.id, "data-test": row.id, class: "gcds-table__row" }, row.getVisibleCells().map(cell => {
            var _a, _b;
            const colDef = ((_a = this.columns) !== null && _a !== void 0 ? _a : []).find(c => c.field === cell.column.id);
            const isSlotted = colDef === null || colDef === void 0 ? void 0 : colDef.slotted;
            let cellContent;
            let Tag = 'td';
            let scope = {};
            // Check if table header in row
            if (colDef === null || colDef === void 0 ? void 0 : colDef.rowHeader) {
                Tag = 'th';
                scope = {
                    scope: 'row',
                };
            }
            const fallbackValue = String((_b = cell.getValue()) !== null && _b !== void 0 ? _b : '');
            cellContent = !isSlotted ? (fallbackValue) : (index.h("slot", { name: this.getManagedSlotName(row.id, cell.column.id) }, fallbackValue));
            return (index.h(Tag, Object.assign({ key: cell.id, class: `gcds-table__td${(colDef === null || colDef === void 0 ? void 0 : colDef.alignment) ? ` alignment-${colDef.alignment}` : ''}`, "data-column": colDef === null || colDef === void 0 ? void 0 : colDef.header, "data-cell": `${cell.column.id}-${row.id}` }, scope), cellContent));
        }))))))), (this.pagination && this.paginationSize !== 0 && rows.length != 0) &&
            (this.table.getFilteredRowModel().rows.length > this.paginationSize) &&
            (index.h("gcds-pagination", { display: "list", currentPage: this.paginationState.pageIndex + 1, totalPages: this.table.getPageCount(), label: I18N$3[this.lang].paginationLabel, onGcdsClick: e => this.handlePaginationClick(e), lang: this.lang })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "columns": [{
                "onColumnsChange": 0
            }],
        "data": [{
                "onDataChange": 0
            }],
        "sort": [{
                "onSortChange": 0
            }],
        "pagination": [{
                "onPaginationChange": 0
            }],
        "paginationCurrentPage": [{
                "onPageChange": 0
            }],
        "paginationSize": [{
                "onPageSizeChange": 0
            }],
        "paginationSizeOptions": [{
                "onSizeOptionsChange": 0
            }],
        "filterValue": [{
                "onFilterValueChange": 0
            }],
        "lang": [{
                "onLangChange": 0
            }]
    }; }
};
GcdsTable.style = gcdsTableCss();

const gcdsTextCss = () => `@layer reset, default, display, limit, margin, role, size, style, weight;@layer reset{:host{color:var(--gcds-text-role-primary);display:block}:host .gcds-text{box-sizing:border-box;display:inherit;margin:0}:host .gcds-text slot{display:initial}}@layer default{:host .gcds-text{font:var(--gcds-text-size-body-desktop)}@media only screen and (width < 48em){:host .gcds-text{font:var(--gcds-text-size-body-mobile)}}}@layer display{:host.d-block{display:block}:host.d-flex{display:flex}:host.d-inline{display:inline}:host.d-inline-block{display:inline-block}:host.d-inline-flex{display:inline-flex}:host.d-none{display:none}}@layer limit{:host .gcds-text.limit{max-width:var(--gcds-text-character-limit)}}@layer margin{:host .gcds-text.mt-0{margin-block-start:var(--gcds-text-spacing-0)}:host .gcds-text.mt-25{margin-block-start:var(--gcds-text-spacing-25)}:host .gcds-text.mt-50{margin-block-start:var(--gcds-text-spacing-50)}:host .gcds-text.mt-75{margin-block-start:var(--gcds-text-spacing-75)}:host .gcds-text.mt-100{margin-block-start:var(--gcds-text-spacing-100)}:host .gcds-text.mt-125{margin-block-start:var(--gcds-text-spacing-125)}:host .gcds-text.mt-150{margin-block-start:var(--gcds-text-spacing-150)}:host .gcds-text.mt-175{margin-block-start:var(--gcds-text-spacing-175)}:host .gcds-text.mt-200{margin-block-start:var(--gcds-text-spacing-200)}:host .gcds-text.mt-225{margin-block-start:var(--gcds-text-spacing-225)}:host .gcds-text.mt-250{margin-block-start:var(--gcds-text-spacing-250)}:host .gcds-text.mt-300{margin-block-start:var(--gcds-text-spacing-300)}:host .gcds-text.mt-350{margin-block-start:var(--gcds-text-spacing-350)}:host .gcds-text.mt-400{margin-block-start:var(--gcds-text-spacing-400)}:host .gcds-text.mt-450{margin-block-start:var(--gcds-text-spacing-450)}:host .gcds-text.mt-500{margin-block-start:var(--gcds-text-spacing-500)}:host .gcds-text.mt-550{margin-block-start:var(--gcds-text-spacing-550)}:host .gcds-text.mt-600{margin-block-start:var(--gcds-text-spacing-600)}:host .gcds-text.mt-650{margin-block-start:var(--gcds-text-spacing-650)}:host .gcds-text.mt-700{margin-block-start:var(--gcds-text-spacing-700)}:host .gcds-text.mt-750{margin-block-start:var(--gcds-text-spacing-750)}:host .gcds-text.mt-800{margin-block-start:var(--gcds-text-spacing-800)}:host .gcds-text.mt-850{margin-block-start:var(--gcds-text-spacing-850)}:host .gcds-text.mt-900{margin-block-start:var(--gcds-text-spacing-900)}:host .gcds-text.mt-950{margin-block-start:var(--gcds-text-spacing-950)}:host .gcds-text.mt-1000{margin-block-start:var(--gcds-text-spacing-1000)}:host .gcds-text.mt-1050{margin-block-start:var(--gcds-text-spacing-1050)}:host .gcds-text.mt-1100{margin-block-start:var(--gcds-text-spacing-1100)}:host .gcds-text.mt-1150{margin-block-start:var(--gcds-text-spacing-1150)}:host .gcds-text.mt-1200{margin-block-start:var(--gcds-text-spacing-1200)}:host .gcds-text.mt-1250{margin-block-start:var(--gcds-text-spacing-1250)}:host .gcds-text.mb-0{margin-block-end:var(--gcds-text-spacing-0)}:host .gcds-text.mb-25{margin-block-end:var(--gcds-text-spacing-25)}:host .gcds-text.mb-50{margin-block-end:var(--gcds-text-spacing-50)}:host .gcds-text.mb-75{margin-block-end:var(--gcds-text-spacing-75)}:host .gcds-text.mb-100{margin-block-end:var(--gcds-text-spacing-100)}:host .gcds-text.mb-125{margin-block-end:var(--gcds-text-spacing-125)}:host .gcds-text.mb-150{margin-block-end:var(--gcds-text-spacing-150)}:host .gcds-text.mb-175{margin-block-end:var(--gcds-text-spacing-175)}:host .gcds-text.mb-200{margin-block-end:var(--gcds-text-spacing-200)}:host .gcds-text.mb-225{margin-block-end:var(--gcds-text-spacing-225)}:host .gcds-text.mb-250{margin-block-end:var(--gcds-text-spacing-250)}:host .gcds-text.mb-300{margin-block-end:var(--gcds-text-spacing-300)}:host .gcds-text.mb-350{margin-block-end:var(--gcds-text-spacing-350)}:host .gcds-text.mb-400{margin-block-end:var(--gcds-text-spacing-400)}:host .gcds-text.mb-450{margin-block-end:var(--gcds-text-spacing-450)}:host .gcds-text.mb-500{margin-block-end:var(--gcds-text-spacing-500)}:host .gcds-text.mb-550{margin-block-end:var(--gcds-text-spacing-550)}:host .gcds-text.mb-600{margin-block-end:var(--gcds-text-spacing-600)}:host .gcds-text.mb-650{margin-block-end:var(--gcds-text-spacing-650)}:host .gcds-text.mb-700{margin-block-end:var(--gcds-text-spacing-700)}:host .gcds-text.mb-750{margin-block-end:var(--gcds-text-spacing-750)}:host .gcds-text.mb-800{margin-block-end:var(--gcds-text-spacing-800)}:host .gcds-text.mb-850{margin-block-end:var(--gcds-text-spacing-850)}:host .gcds-text.mb-900{margin-block-end:var(--gcds-text-spacing-900)}:host .gcds-text.mb-950{margin-block-end:var(--gcds-text-spacing-950)}:host .gcds-text.mb-1000{margin-block-end:var(--gcds-text-spacing-1000)}:host .gcds-text.mb-1050{margin-block-end:var(--gcds-text-spacing-1050)}:host .gcds-text.mb-1100{margin-block-end:var(--gcds-text-spacing-1100)}:host .gcds-text.mb-1150{margin-block-end:var(--gcds-text-spacing-1150)}:host .gcds-text.mb-1200{margin-block-end:var(--gcds-text-spacing-1200)}:host .gcds-text.mb-1250{margin-block-end:var(--gcds-text-spacing-1250)}}@layer variants.role{:host .gcds-text.role-primary{color:var(--gcds-text-role-primary)}:host .gcds-text.role-secondary{color:var(--gcds-text-role-secondary)}:host .gcds-text.role-light{color:var(--gcds-text-role-light)}}@layer variants.size{:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-desktop)}@media only screen and (width < 48em){:host .gcds-text :is(small,::slotted(small)),:host .gcds-text.size-small{font:var(--gcds-text-size-small-mobile)}}}@layer variants.style{:host .gcds-text ::slotted(em){font-style:italic}}@layer variants.weight{:host .gcds-text ::slotted(strong){font-weight:var(--gcds-text-weight-bold)}}`;

const GcdsText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '8219a6791a91322d1ce17a98f133303745d805a9', class: `${display != 'block' ? `d-${display}` : ''}` }, index.h("p", { key: 'ddea4733adb26b3d854466f07cddc3c384ad448d', class: `
            gcds-text
            ${textRole ? `role-${textRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
            ${size === 'small' ? `size-small` : ''}
          `, part: "text" }, size === 'small' ? (index.h("small", null, index.h("slot", null))) : (index.h("slot", null)))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "textRole": [{
                "validateTextRole": 0
            }],
        "display": [{
                "validateDisplay": 0
            }],
        "marginTop": [{
                "validateMarginTop": 0
            }],
        "marginBottom": [{
                "validateMarginBottom": 0
            }],
        "size": [{
                "validateSize": 0
            }]
    }; }
};
GcdsText.style = gcdsTextCss();

const I18N$2 = {
  en: {
    characters: {
      left: 'Characters left: ',
      maxlength: 'You can enter up to {{num}} characters',
    },
  },
  fr: {
    characters: {
      left: 'Caractères restants\u00A0: ',
      maxlength: "Vous pouvez saisir jusqu'à {{num}} caractères",
    },
  },
};

const gcdsTextareaCss = () => `@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-textarea-wrapper{border:0;margin:0;padding:0}:host .gcds-textarea-wrapper textarea{box-sizing:border-box}}@layer default{:host .gcds-textarea-wrapper{color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font-desktop);max-width:75ch;transition:color .15s ease-in-out;width:100%}@media only screen and (width < 48em){:host .gcds-textarea-wrapper{font:var(--gcds-textarea-font-mobile)}}:host .gcds-textarea-wrapper textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin)!important;max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}}@layer disabled{:host .gcds-textarea-wrapper.gcds-disabled{color:var(--gcds-textarea-disabled-text)}:host .gcds-textarea-wrapper.gcds-disabled gcds-label{--gcds-label-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled gcds-hint{--gcds-hint-text:currentColor}:host .gcds-textarea-wrapper.gcds-disabled textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-textarea-wrapper .error-message-container{display:block}:host .gcds-textarea-wrapper textarea.gcds-error:not(:focus){border-color:var(--gcds-textarea-danger-border)}}@layer focus{:host .gcds-textarea-wrapper:focus-within textarea:focus{border-color:var(--gcds-textarea-focus-border);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-border);outline-offset:var(--gcds-textarea-border-width)}}`;

const GcdsTextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gcdsFocus = index.createEvent(this, "gcdsFocus");
        this.gcdsBlur = index.createEvent(this, "gcdsBlur");
        this.gcdsChange = index.createEvent(this, "gcdsChange");
        this.gcdsInput = index.createEvent(this, "gcdsInput");
        this.gcdsError = index.createEvent(this, "gcdsError");
        this.gcdsValid = index.createEvent(this, "gcdsValid");
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
        // For accurate character count updates
        this.lastInputTimeStamp = null;
        this.lastInputValue = '';
        this.valueChecker = null;
        this._validator = defaultValidator;
        /**
         * If true, character limit counter will not be displayed under the textarea.
         */
        this.hideLimit = false;
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
        this.onFocus = () => {
            this.gcdsFocus.emit();
            // Start value checking on input
            this.valueChecker = window.setInterval(() => {
                if (!this.lastInputTimeStamp ||
                    Date.now() - 500 >= this.lastInputTimeStamp) {
                    this.updateIfValueChanged();
                }
            }, 1000);
        };
        this.onBlur = () => {
            if (this.validateOn == 'blur') {
                this.validate();
            }
            this.gcdsBlur.emit();
            // Cancel value checking on blur
            if (this.valueChecker) {
                window.clearInterval(this.valueChecker);
            }
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
                if (this.maxlength) {
                    this.lastInputTimeStamp = Date.now();
                }
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
     * Update character count if value has changed
     */
    updateIfValueChanged() {
        if (this.shadowElement.value !== this.lastInputValue) {
            this.lastInputValue = this.shadowElement.value;
            setTimeout(() => {
                const srCount = this.el.shadowRoot.querySelector(`#textarea__sr-count-${this.textareaId}`);
                if (srCount) {
                    srCount.textContent = `${I18N$2[this.lang].characters.left}${this.value === undefined ? this.maxlength : this.maxlength - this.value.length}`;
                }
            }, 1500);
        }
    }
    /**
     * Call any active validators
     */
    async validate() {
        utils.handleValidationResult(this.el, this._validator.validate(this.value), this.label, this.gcdsError, this.gcdsValid, this.lang);
        // Native HTML validation
        if ((this.required && !this.internals.checkValidity()) ||
            !this.internals.checkValidity()) {
            if (!this.internals.validity.valueMissing) {
                this.errorMessage = utils.formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
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
            validationMessage = utils.formatHTMLErrorMessage(this.htmlValidationErrors[0], this.lang, this.el);
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
        this.validateDisabledTextarea();
        this.validateHasError();
        this.validateErrorMessage();
        // Assign required validator if needed
        requiredValidator(this.el, 'textarea');
        this.validateValidator();
        this.inheritedAttributes = utils.inheritAttributes(this.el, this.shadowElement, [
            'placeholder',
        ]);
        this.internals.setFormValue(this.value ? this.value : null);
        this.initialValue = this.value ? this.value : null;
        this.lastInputValue = this.value ? this.value : '';
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
        const { autofocus, cols, disabled, errorMessage, form, hideLabel, hideLimit, hint, label, maxlength, minlength, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name, textareaTitle, } = this;
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
            form,
            maxlength,
            minlength,
            required,
            rows, title: textareaTitle }, inheritedAttributes);
        if (hint || errorMessage || maxlength) {
            const hintID = hint ? `hint-${textareaId} ` : '';
            const errorID = errorMessage ? `error-message-${textareaId} ` : '';
            const countID = maxlength ? `textarea__count-${textareaId} ` : '';
            attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
                ? `${attrsTextarea['aria-describedby']}`
                : ''}`;
        }
        return (index.h(index.Host, { key: 'f807f25b63c0abb356df1365d9382f318bae2775' }, index.h("div", { key: 'd27317f81d9523571726a5b2715517176b4a7af7', class: `gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, index.h("gcds-label", Object.assign({ key: 'b05b09daf2c31c6aad4d0ffb304c05c2f217661b' }, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang: lang })), hint ? index.h("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (index.h("gcds-error-message", { messageId: textareaId }, errorMessage)) : null, index.h("textarea", Object.assign({ key: '049f2689bf962525062abb78941ad3fec2a55ced' }, attrsTextarea, { class: hasError ? 'gcds-error' : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.onFocus(), onInput: e => this.handleInput(e, this.gcdsInput), onChange: e => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? 'true' : 'false', style: cols ? style : null, ref: element => (this.shadowElement = element) }), value), maxlength ? (index.h(index.Fragment, null, index.h("gcds-sr-only", { tag: "span", id: `textarea__count-${textareaId}` }, I18N$2[lang].characters.maxlength.replace('{{num}}', maxlength)), !hideLimit && (index.h("gcds-text", { id: `textarea__visual-count-${textareaId}`, "aria-hidden": "true" }, I18N$2[lang].characters.left, value == undefined ? maxlength : maxlength - value.length)), index.h("gcds-sr-only", { tag: "span" }, index.h("span", { id: `textarea__sr-count-${textareaId}`, role: "status", "aria-atomic": "true" })))) : null)));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": [{
                "validateDisabledTextarea": 0
            }],
        "errorMessage": [{
                "validateErrorMessage": 0
            }],
        "value": [{
                "watchValue": 0
            }],
        "validator": [{
                "validateValidator": 0
            }],
        "hasError": [{
                "validateHasError": 0
            }]
    }; }
};
GcdsTextarea.style = gcdsTextareaCss();

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

const gcdsTopNavCss = () => `@layer reset, default, desktop;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}:host ul{padding:0}}@layer default{:host .gcds-top-nav .gcds-top-nav__container{display:flex;flex-direction:column;margin-inline:auto;max-width:var(--gcds-top-nav-max-width);width:var(--gcds-top-nav-width-full)}}@layer desktop{@media only screen and (width >= 48em){:host .gcds-top-nav{border-block-end:var(--gcds-top-nav-border-width) solid var(--gcds-top-nav-border-color)}:host .gcds-top-nav .gcds-top-nav__container{align-items:flex-end;flex-direction:row;width:var(--gcds-top-nav-width-constrained)}:host .gcds-top-nav .nav-container__list{align-items:flex-end;display:flex;width:fit-content}:host .gcds-top-nav .nav-container__list.nav-list--end{margin-inline-start:auto}}}`;

const GcdsTopNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Nav alignment
         */
        this.alignment = 'start';
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
        if (e.relatedTarget !== null &&
            e.relatedTarget !== this.el &&
            !this.el.contains(e.relatedTarget)) {
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
        else if (this.navSize == 'mobile' &&
            this.mobile.open == true &&
            e.key == 'Escape') {
            // Close mobile nav on ESC
            await this.mobile.toggleNav();
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
        observer.observe(this.el, utils.observerConfig);
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
        this.lang = utils.assignLanguage(this.el);
        this.updateLang();
    }
    render() {
        const { label, alignment, lang } = this;
        return (index.h(index.Host, { key: 'b5891498135a91923fec6cea31c0cf294f1b5aba' }, index.h("div", { key: 'bde31751abedae987bb85c12636102f92a3b6814', class: "gcds-top-nav" }, index.h("nav", { key: '8e3cdf1d2e6f8b714612fed6c43ec42b81ab2c7b', "aria-label": `${label}${I18N$1[lang].navLabel}` }, index.h("ul", { key: '5f687ee3eea1dc73c4b5bb620d1304fe5ac648d6', class: "gcds-top-nav__container" }, index.h("gcds-nav-group", { key: '137bc7b72a9fa328aff0a60271269f20b1033ba7', menuLabel: I18N$1[lang].menuLabel, closeTrigger: I18N$1[lang].closeTrigger, openTrigger: I18N$1[lang].menuLabel, class: "gcds-mobile-nav gcds-mobile-nav-topnav", ref: element => (this.mobile = element), lang: lang }, index.h("slot", { key: '4e8fd794e2e06459a069507c14c1ef4639dd453e', name: "home" }), index.h("li", { key: '9ca94d212ccd1729f840036a2aed4b2c023f36fd', class: `nav-container__list nav-list--${alignment}` }, index.h("ul", { key: '4ea1a55b4adb03b9614b320f2b52dc0a6e48cd5c', class: `nav-container__list nav-list--${alignment}` }, index.h("slot", { key: '4eeb9ba9be3b3cc7906e94bc23c3ca8fb31464c8' })))))))));
    }
    get el() { return index.getElement(this); }
};
GcdsTopNav.style = gcdsTopNavCss();

const I18N = {
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

const gcdsTopicMenuCss = () => `@layer reset, default, mobile, xsMobile, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0}}@layer default{:host .gcds-topic-menu__heading,:host .gcds-topic-menu__main{display:inherit;height:0;margin:0;overflow:hidden;width:0}:host .visible-sm-inline{display:none}:host .gcds-topic-menu{font:var(--gcds-topic-menu-font);position:relative}:host .gcds-topic-menu button[aria-haspopup=true]{background-color:var(--gcds-topic-menu-button-background);border:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-button-border);color:var(--gcds-topic-menu-button-text);cursor:pointer;font:inherit;margin-inline-start:0;padding:var(--gcds-topic-menu-button-padding);text-transform:uppercase}:host .gcds-topic-menu button[aria-haspopup=true].gcds-topic-menu--home{background-color:var(--gcds-topic-menu-button-home-background);border-color:var(--gcds-topic-menu-button-home-border-color);color:var(--gcds-topic-menu-button-home-text)}:host .gcds-topic-menu button[aria-haspopup=true]:hover,:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]{background-color:var(--gcds-topic-menu-button-expanded-background);border-color:var(--gcds-topic-menu-button-expanded-border-color);color:var(--gcds-topic-menu-button-expanded-text)}:host .gcds-topic-menu [aria-haspopup=true][aria-expanded=false]+[role=menu]{display:none}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu]{z-index:9991}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu] [role=menuitem]{position:relative;z-index:9991}:host .gcds-topic-menu [aria-haspopup=true][aria-expanded=true]+[role=menu]{z-index:9990}:host .gcds-topic-menu [role=menu]{background-color:var(--gcds-topic-menu-topiclist-background);color:var(--gcds-topic-menu-themelist-text);list-style:none;margin:0;padding:0;position:absolute;width:var(--gcds-topic-menu-themelist-width)}:host .gcds-topic-menu [role=menu][data-top-menu]{-webkit-box-shadow:var(--gcds-topic-menu-topiclist-box-shadow);box-shadow:var(--gcds-topic-menu-topiclist-box-shadow)}:host .gcds-topic-menu [role=menu]>li{border-inline-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-themelist-item-border)}:host .gcds-topic-menu [role=menu]>li:first-child{border-block-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-themelist-item-border)}:host .gcds-topic-menu [role=menu] [role=menu]{border-block-start:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-topiclist-border);color:var(--gcds-topic-menu-topiclist-text);left:var(--gcds-topic-menu-topiclist-left);margin-block-end:var(--gcds-topic-menu-topiclist-margin-block-end);min-height:var(--gcds-topic-menu-topiclist-min-height);padding:var(--gcds-topic-menu-topiclist-padding);top:0;width:var(--gcds-topic-menu-topiclist-width)}:host .gcds-topic-menu [role=menu] [role=menu] li{border:0;width:45%}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]{border-block-end:0;border-inline-end:0;color:var(--gcds-topic-menu-topiclist-menuitem-text);padding:var(--gcds-topic-menu-topiclist-menuitem-padding);text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup=true],:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup=true]:hover{color:var(--gcds-topic-menu-topiclist-menuitem-popup-text);font:var(--gcds-topic-menu-topiclist-menuitem-popup-font);text-decoration:none}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]:hover{color:var(--gcds-topic-menu-topiclist-menuitem-hover-text);text-decoration-thickness:var(                     --gcds-topic-menu-topiclist-menuitem-hover-text-decoration-thickness                   )}}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child{margin-block-end:var(                 --gcds-topic-menu-topiclist-item-first-margin-block-end               );width:100%}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child [role=menuitem]{font:var(--gcds-topic-menu-topiclist-item-first-font);text-decoration:underline}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:var(--gcds-topic-menu-topiclist-item-last-left);position:absolute;top:var(--gcds-topic-menu-topiclist-item-last-top)}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [aria-expanded=true]{background:transparent}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu]{list-style:disc;padding-block-start:0}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu]{background:transparent;border-block-start:0;-webkit-box-shadow:none;box-shadow:none;left:auto;min-height:auto;top:auto;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li{width:var(--gcds-topic-menu-mostrequested-item-width)}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:first-child{margin-block-end:var(                   --gcds-topic-menu-mostrequested-item-first-margin-block-end                 )}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:first-child [role=menuitem]{font:inherit;text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:last-child{left:auto;position:relative;top:auto}@media screen and (61.9375rem <= width <= 74.9375rem){:host .gcds-topic-menu [role=menu] [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:auto;margin-block-start:var(                 --gcds-topic-menu-mostrequested-item-last-margin-block-start               );position:relative;top:auto}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu]{margin-block-end:0;padding-block-end:0;position:relative}:host .gcds-topic-menu [role=menu] [role=menu] [role=menu] li:last-child{margin-block-start:0}}:host .gcds-topic-menu [role=menuitem],:host .gcds-topic-menu [role=menuitem]:visited{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-menuitem-border-block-end);box-sizing:border-box;color:var(--gcds-topic-menu-menuitem-text);display:block;font:var(--gcds-topic-menu-font);padding:var(--gcds-topic-menu-menuitem-padding);text-decoration:none;text-underline-offset:var(           --gcds-topic-menu-menuitem-text-underline-offset         );width:var(--gcds-topic-menu-menuitem-width)}:host .gcds-topic-menu [role=menuitem]:focus,:host .gcds-topic-menu [role=menuitem]:visited:focus{z-index:9999!important}:host .gcds-topic-menu [role=menuitem]:hover,:host .gcds-topic-menu [role=menuitem]:visited:hover,:host .gcds-topic-menu [role=menuitem]:visited[aria-expanded=true],:host .gcds-topic-menu [role=menuitem][aria-expanded=true]{background-color:var(--gcds-topic-menu-menuitem-expanded-background);color:var(--gcds-topic-menu-menuitem-expanded-text)}:host .gcds-topic-menu [role=menuitem][aria-haspopup=true][aria-expanded=false][aria-controls]:not([aria-controls*=sub]):not(:hover){background-color:var(--gcds-topic-menu-themelist-background)}}@layer mobile{@media screen and (width <= 61.9375rem){:host .gcds-topic-menu .visible-sm-inline{display:inline-block;text-decoration:underline}:host .gcds-topic-menu .hidden-sm{display:none}:host .gcds-topic-menu [role=menu]{margin-block-end:var(           --gcds-topic-menu-mobile-themelist-margin-block-start         );position:static;width:auto}:host .gcds-topic-menu [role=menu] [role=menu]{border-block-start:0;-webkit-box-shadow:none;box-shadow:none;margin-block-end:0;min-height:auto;padding:0;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(                   --gcds-topic-menu-mobile-topiclist-menuitem-border-block-end                 );padding:var(--gcds-topic-menu-mobile-topiclist-menuitem-padding)}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem]:hover{background-color:transparent;color:var(                     --gcds-topic-menu-mobile-topiclist-menuitem-hover-text                   )}}:host .gcds-topic-menu [role=menu] [role=menu] li [role=menuitem][aria-haspopup]{font:inherit}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child{margin-block-end:0}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(                   --gcds-topic-menu-mobile-topiclist-item-first-menuitem-border                 );color:var(                 --gcds-topic-menu-mobile-topiclist-item-first-menuitem-text               );text-decoration:underline;width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{left:auto;position:static;top:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-mostrequested-border);color:var(                 --gcds-topic-menu-mobile-topiclist-item-last-menuitem-text               );text-decoration:none}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menuitem]:hover{color:var(                     --gcds-topic-menu-mobile-topiclist-item-last-menuitem-hover-text                   );text-decoration:underline}}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu]{list-style:none;padding-block-start:0}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li{width:auto}:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li [role=menuitem]{border-block-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-mostrequested-border)}@media (hover:hover){:host .gcds-topic-menu [role=menu] [role=menu] li:last-child [role=menu] li [role=menuitem]:hover{color:var(                         --gcds-topic-menu-mobile-mostrequested-hover-text                       );text-decoration:underline}}:host .gcds-topic-menu [role=menu] [role=menu] li:first-child,:host .gcds-topic-menu [role=menu] [role=menu] li:last-child{background-color:var(               --gcds-topic-menu-mobile-mostrequested-background             )}:host .gcds-topic-menu [role=menuitem]{width:auto}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li{margin-inline-start:var(               --gcds-topic-menu-mobile-item-expanded-margin-inline-start             )}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:first-child,:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child{margin-inline-start:0}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:first-child [role=menuitem],:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child [role=menuitem]{padding-inline-start:var(                   --gcds-topic-menu-mobile-item-expanded-padding-inline-start                 )}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] li:last-child [role=menu] [role=menuitem]{padding-inline-start:0}:host .gcds-topic-menu [aria-expanded=true]:not(button)+[role=menu] [role=menu] li{margin-inline-start:var(               --gcds-topic-menu-mobile-mostrequested-expanded-margin-inline-start             )}:host .gcds-topic-menu [aria-expanded=true]+[role=menu] [role=menu] [role=menu]{background-color:var(             --gcds-topic-menu-mobile-mostrequested-background           )}:host .gcds-topic-menu [aria-haspopup]:not(button):before{content:"\\25BA\\a0"}:host .gcds-topic-menu [aria-haspopup][aria-expanded=true]:not(button):before{content:"\\25BC\\a0"}:host .gcds-topic-menu button[aria-haspopup=true][aria-expanded=true]+[role=menu]{border-inline-end:var(--gcds-topic-menu-border-width) solid var(--gcds-topic-menu-mobile-themelist-border)}}}@layer xsMobile{@media screen and (width <= 47.9375rem){:host .gcds-topic-menu>[role=menu]{margin-inline:calc(-50vw - -50%)}}}@layer focus{:host .gcds-topic-menu :is(button[aria-haspopup=true],[role=menuitem]):focus{background-color:var(--gcds-topic-menu-focus-background);border-color:var(--gcds-topic-menu-focus-background);border-inline-end:0;border-radius:var(--gcds-topic-menu-focus-border-radius);box-shadow:var(--gcds-topic-menu-focus-box-shadow);color:var(--gcds-topic-menu-focus-text);outline:var(--gcds-topic-menu-focus-outline);outline-offset:var(--gcds-topic-menu-focus-outline-offset)}}`;

const GcdsTopicMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Props
         */
        /**
         * Sets the homepage styling
         */
        this.home = false;
        /**
         * States
         */
        /**
         * Open state of menu
         */
        this.open = false;
        /**
         * Queue of nav items for keyboard navigation
         */
        this.navItems = [];
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
        observer.observe(this.el, utils.observerConfig);
    }
    async componentWillLoad() {
        // Define lang attribute
        this.lang = utils.assignLanguage(this.el);
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
        return (index.h(index.Host, { key: '1936f54bc8f2ed6c9ec2e2def9f0f16321eded97' }, index.h("nav", { key: 'a48ef744a47b8369bac52206ebf45b6daf770319', class: "gcds-topic-menu", "aria-labelledby": "gcds-topic-menu__heading" }, index.h("gcds-sr-only", { key: '3f0efb671e1d51faf88b973f32b1a057c9d5bf66', id: "gcds-topic-menu__heading", tag: "h2" }, I18N[lang].menuLabelFull), index.h("button", { key: '709a8b58c6856780b6a51d5f0fb05e95e851de81', "aria-haspopup": "true", "aria-expanded": this.open.toString(), "aria-label": I18N[lang].buttonLabel, onClick: async () => await this.toggleNav(), ref: element => (this.menuButton = element), class: home && 'gcds-topic-menu--home' }, this.lang == 'en' ? (index.h(index.Fragment, null, index.h("gcds-sr-only", { tag: "span" }, I18N[lang].menuLabelHidden), I18N[lang].menuToggle)) : (index.h(index.Fragment, null, I18N[lang].menuToggle, index.h("gcds-sr-only", { tag: "span" }, I18N[lang].menuLabelHidden))), index.h("gcds-icon", { key: '15d20053343aa55cb6559d37c6b5ffa5a45e06f6', name: "chevron-down", "margin-left": "100", size: "text-small" })), index.h("ul", { key: 'ae9ef701537dbb33065a579de9cc81c6015b5a18', role: "menu", "aria-orientation": "vertical", "data-top-menu": true, innerHTML: this.listItems, ref: element => (this.themeList = element) }))));
    }
    get el() { return index.getElement(this); }
};
GcdsTopicMenu.style = gcdsTopicMenuCss();

exports.gcds_alert = GcdsAlert;
exports.gcds_breadcrumbs = GcdsBreadcrumbs;
exports.gcds_breadcrumbs_item = GcdsBreadcrumbsItem;
exports.gcds_button = GcdsButton;
exports.gcds_card = GcdsCard;
exports.gcds_checkboxes = GcdsCheckboxes;
exports.gcds_container = GcdsContainer;
exports.gcds_date_input = GcdsDateInput;
exports.gcds_date_modified = GcdsDateModified;
exports.gcds_details = GcdsDetails;
exports.gcds_error_message = GcdsErrorMessage;
exports.gcds_error_summary = GcdsErrorSummary;
exports.gcds_file_uploader = GcdsFileUploader;
exports.gcds_footer = GcdsFooter;
exports.gcds_grid = GcdsGrid;
exports.gcds_grid_col = GcdsGridCol;
exports.gcds_header = GcdsHeader;
exports.gcds_heading = GcdsHeading;
exports.gcds_hint = GcdsHint;
exports.gcds_icon = GcdsIcon;
exports.gcds_input = GcdsInput;
exports.gcds_label = GcdsLabel;
exports.gcds_lang_toggle = GcdsLangToggle;
exports.gcds_link = GcdsLink;
exports.gcds_nav_group = GcdsNavGroup;
exports.gcds_nav_link = GcdsNavLink;
exports.gcds_notice = GcdsNotice;
exports.gcds_pagination = GcdsPagination;
exports.gcds_radios = GcdsRadios;
exports.gcds_search = GcdsSearch;
exports.gcds_select = GcdsSelect;
exports.gcds_side_nav = GcdsSideNav;
exports.gcds_signature = GcdsSignature;
exports.gcds_sr_only = GcdsSrOnly;
exports.gcds_stepper = GcdsStepper;
exports.gcds_table = GcdsTable;
exports.gcds_text = GcdsText;
exports.gcds_textarea = GcdsTextarea;
exports.gcds_top_nav = GcdsTopNav;
exports.gcds_topic_menu = GcdsTopicMenu;
