export const gcdsAlert = {
  "tag": "gcds-alert",
  "attributes": [
    {
      "name": "alert-role",
      "control": "select",
      "type": "\"danger\" | \"info\" | \"success\" | \"warning\"",
      "defaultValue": "info",
      "options": [
        "danger",
        "info",
        "success",
        "warning"
      ]
    },
    {
      "name": "container",
      "control": "select",
      "type": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
      "defaultValue": "full",
      "options": [
        "full",
        "lg",
        "md",
        "sm",
        "xl",
        "xs"
      ]
    },
    {
      "name": "heading",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "hide-close-btn",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hide-role-icon",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "is-fixed",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the alert."
    }
  ],
  "events": [
    {
      "name": "gcdsDismiss",
      "description": "Events",
      "details": "void"
    }
  ]
};

export const gcdsBreadcrumbs = {
  "tag": "gcds-breadcrumbs",
  "attributes": [
    {
      "name": "hide-canada-link",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the breadcrumb items."
    }
  ],
  "events": []
};

export const gcdsBreadcrumbsItem = {
  "tag": "gcds-breadcrumbs-item",
  "attributes": [
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the breadcrumb item link label."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsButton = {
  "tag": "gcds-button",
  "attributes": [
    {
      "name": "button-id",
      "control": "text",
      "type": "string"
    },
    {
      "name": "button-role",
      "control": "select",
      "type": "\"danger\" | \"primary\" | \"secondary\" | \"start\"",
      "defaultValue": "primary",
      "options": [
        "danger",
        "primary",
        "secondary",
        "start"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "download",
      "control": "text",
      "type": "string"
    },
    {
      "name": "href",
      "control": "text",
      "type": "string"
    },
    {
      "name": "name",
      "control": "text",
      "type": "string"
    },
    {
      "name": "rel",
      "control": "text",
      "type": "string"
    },
    {
      "name": "size",
      "control": "select",
      "type": "\"regular\" | \"small\"",
      "defaultValue": "regular",
      "options": [
        "regular",
        "small"
      ]
    },
    {
      "name": "target",
      "control": "text",
      "type": "string"
    },
    {
      "name": "type",
      "control": "select",
      "type": "\"button\" | \"link\" | \"reset\" | \"submit\"",
      "defaultValue": "button",
      "options": [
        "button",
        "link",
        "reset",
        "submit"
      ]
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the button/link label."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the button loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the button has been clicked. Contains the value or href in the event detail.",
      "details": "string | void"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the button has focus.",
      "details": "void"
    }
  ]
};

export const gcdsCard = {
  "tag": "gcds-card",
  "attributes": [
    {
      "name": "badge",
      "control": "text",
      "type": "string"
    },
    {
      "name": "card-title",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "card-title-tag",
      "control": "select",
      "type": "\"h3\" | \"h4\" | \"h5\" | \"h6\"",
      "options": [
        "h3",
        "h4",
        "h5",
        "h6"
      ]
    },
    {
      "name": "description",
      "control": "text",
      "type": "string"
    },
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "img-alt",
      "control": "text",
      "type": "string"
    },
    {
      "name": "img-src",
      "control": "text",
      "type": "string"
    },
    {
      "name": "rel",
      "control": "text",
      "type": "string"
    },
    {
      "name": "target",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the card description. Accepts rich text and overwrites the\ndescription prop if used. The description prop is mirrored into this slot for the same\nDOM-text reason when nothing is slotted."
    },
    {
      "name": "title",
      "description": "Slot for the card title. Accepts rich text, so markup such as\n`<abbr>`, `<em>` or an icon can be used where the card-title prop cannot. Falls back to\nthe card-title prop, which is mirrored into the light DOM so the title text stays\nreadable by DOM-text extraction tools."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the card loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the card has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the card has focus.",
      "details": "void"
    }
  ]
};

export const gcdsCheckboxes = {
  "tag": "gcds-checkboxes",
  "attributes": [
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hide-legend",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "legend",
      "control": "text",
      "type": "string"
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "options",
      "control": "select",
      "type": "CheckboxObject[] | string",
      "required": true,
      "options": []
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "select",
      "type": "string | string[]",
      "defaultValue": "[]",
      "options": []
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the checkbox loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when a checkbox has been changed. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the checkbox has been clicked.",
      "details": "void"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the checkbox has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the checkbox has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when a checkbox has been inputted. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the checkbox has a validation error.",
      "details": "object"
    }
  ]
};

export const gcdsContainer = {
  "tag": "gcds-container",
  "attributes": [
    {
      "name": "alignment",
      "control": "select",
      "type": "\"center\" | \"end\" | \"start\"",
      "options": [
        "center",
        "end",
        "start"
      ]
    },
    {
      "name": "border",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "layout",
      "control": "select",
      "type": "\"full\" | \"page\"",
      "options": [
        "full",
        "page"
      ]
    },
    {
      "name": "margin",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "padding",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "size",
      "control": "select",
      "type": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
      "defaultValue": "full",
      "options": [
        "full",
        "lg",
        "md",
        "sm",
        "xl",
        "xs"
      ]
    },
    {
      "name": "tag",
      "control": "text",
      "type": "string",
      "defaultValue": "div"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the container."
    }
  ],
  "events": []
};

export const gcdsDateInput = {
  "tag": "gcds-date-input",
  "attributes": [
    {
      "name": "autocomplete",
      "control": "select",
      "type": "\"bday\" | \"cc-exp\" | \"off\" | \"on\"",
      "options": [
        "bday",
        "cc-exp",
        "off",
        "on"
      ]
    },
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "format",
      "control": "select",
      "type": "\"compact\" | \"full\" | \"iso\"",
      "required": true,
      "options": [
        "compact",
        "full",
        "iso"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "legend",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "max",
      "control": "text",
      "type": "string"
    },
    {
      "name": "min",
      "control": "text",
      "type": "string"
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when a date-input loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when a date-input has changed. Contains the new value in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when a date-input has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when a date-input has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the date-input has received input. Contains the new value in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when a date-input has validated.",
      "details": "object"
    }
  ]
};

export const gcdsDateModified = {
  "tag": "gcds-date-modified",
  "attributes": [
    {
      "name": "type",
      "control": "select",
      "type": "\"date\" | \"version\"",
      "defaultValue": "date",
      "options": [
        "date",
        "version"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the date/version number."
    }
  ],
  "events": []
};

export const gcdsDetails = {
  "tag": "gcds-details",
  "attributes": [
    {
      "name": "details-title",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "open",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the details panel."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the details loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the details has been clicked.",
      "details": "void"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the details has focus.",
      "details": "void"
    }
  ]
};

export const gcdsErrorMessage = {
  "tag": "gcds-error-message",
  "attributes": [
    {
      "name": "message-id",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the error message content."
    }
  ],
  "events": []
};

export const gcdsErrorSummary = {
  "tag": "gcds-error-summary",
  "attributes": [
    {
      "name": "error-links",
      "control": "select",
      "type": "object | string",
      "options": []
    },
    {
      "name": "heading",
      "control": "text",
      "type": "string"
    },
    {
      "name": "listen",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsFieldset = {
  "tag": "gcds-fieldset",
  "attributes": [
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "legend",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "legend-size",
      "control": "select",
      "type": "\"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
      "required": true,
      "options": [
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the form elements."
    }
  ],
  "events": []
};

export const gcdsFileUploader = {
  "tag": "gcds-file-uploader",
  "attributes": [
    {
      "name": "accept",
      "control": "text",
      "type": "string"
    },
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "files",
      "control": "text",
      "type": "FileList"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "multiple",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "uploader-id",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string | number | FileList>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "text",
      "type": "string[]",
      "defaultValue": "[]"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the uploader loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the user has made a file selection. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the uploader has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the uploader has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the user has uploaded a file. Contains the new value in the event detail.",
      "details": "string[]"
    },
    {
      "name": "gcdsRemoveFile",
      "description": "Remove file and update value.",
      "details": "any"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the uploader has a validation error.",
      "details": "object"
    }
  ]
};

export const gcdsFooter = {
  "tag": "gcds-footer",
  "attributes": [
    {
      "name": "contextual-heading",
      "control": "text",
      "type": "string"
    },
    {
      "name": "contextual-links",
      "control": "select",
      "type": "object | string",
      "options": []
    },
    {
      "name": "display",
      "control": "select",
      "type": "\"compact\" | \"full\"",
      "defaultValue": "compact",
      "options": [
        "compact",
        "full"
      ]
    },
    {
      "name": "sub-links",
      "control": "select",
      "type": "object | string",
      "options": []
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsGrid = {
  "tag": "gcds-grid",
  "attributes": [
    {
      "name": "align-content",
      "control": "select",
      "type": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
      "options": [
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly",
        "start",
        "stretch"
      ]
    },
    {
      "name": "align-items",
      "control": "select",
      "type": "\"baseline\" | \"center\" | \"end\" | \"start\" | \"stretch\"",
      "options": [
        "baseline",
        "center",
        "end",
        "start",
        "stretch"
      ]
    },
    {
      "name": "alignment",
      "control": "select",
      "type": "\"center\" | \"end\" | \"start\"",
      "options": [
        "center",
        "end",
        "start"
      ]
    },
    {
      "name": "columns",
      "control": "text",
      "type": "string"
    },
    {
      "name": "columns-desktop",
      "control": "text",
      "type": "string"
    },
    {
      "name": "columns-tablet",
      "control": "text",
      "type": "string"
    },
    {
      "name": "container",
      "control": "select",
      "type": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
      "options": [
        "full",
        "lg",
        "md",
        "sm",
        "xl",
        "xs"
      ]
    },
    {
      "name": "display",
      "control": "select",
      "type": "\"grid\" | \"inline-grid\"",
      "defaultValue": "grid",
      "options": [
        "grid",
        "inline-grid"
      ]
    },
    {
      "name": "equal-row-height",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "gap",
      "control": "select",
      "type": "\"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\"",
      "defaultValue": "300",
      "options": [
        "150",
        "175",
        "200",
        "225",
        "250",
        "300",
        "350",
        "400",
        "450",
        "500",
        "550",
        "600",
        "650",
        "700",
        "750",
        "800"
      ]
    },
    {
      "name": "gap-desktop",
      "control": "select",
      "type": "\"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\"",
      "options": [
        "150",
        "175",
        "200",
        "225",
        "250",
        "300",
        "350",
        "400",
        "450",
        "500",
        "550",
        "600",
        "650",
        "700",
        "750",
        "800"
      ]
    },
    {
      "name": "gap-tablet",
      "control": "select",
      "type": "\"150\" | \"175\" | \"200\" | \"225\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"750\" | \"800\"",
      "options": [
        "150",
        "175",
        "200",
        "225",
        "250",
        "300",
        "350",
        "400",
        "450",
        "500",
        "550",
        "600",
        "650",
        "700",
        "750",
        "800"
      ]
    },
    {
      "name": "justify-content",
      "control": "select",
      "type": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
      "options": [
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly",
        "start",
        "stretch"
      ]
    },
    {
      "name": "justify-items",
      "control": "select",
      "type": "\"center\" | \"end\" | \"start\" | \"stretch\"",
      "options": [
        "center",
        "end",
        "start",
        "stretch"
      ]
    },
    {
      "name": "place-content",
      "control": "select",
      "type": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
      "options": [
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly",
        "start",
        "stretch"
      ]
    },
    {
      "name": "place-items",
      "control": "select",
      "type": "\"center\" | \"end\" | \"start\" | \"stretch\"",
      "options": [
        "center",
        "end",
        "start",
        "stretch"
      ]
    },
    {
      "name": "tag",
      "control": "select",
      "type": "\"article\" | \"aside\" | \"div\" | \"dl\" | \"main\" | \"nav\" | \"ol\" | \"section\" | \"ul\"",
      "defaultValue": "div",
      "options": [
        "article",
        "aside",
        "div",
        "dl",
        "main",
        "nav",
        "ol",
        "section",
        "ul"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the grid."
    }
  ],
  "events": []
};

export const gcdsGridCol = {
  "tag": "gcds-grid-col",
  "attributes": [
    {
      "name": "desktop",
      "control": "select",
      "type": "1 | 10 | 11 | 12 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
      "options": [
        "1",
        "10",
        "11",
        "12",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    },
    {
      "name": "tablet",
      "control": "select",
      "type": "1 | 2 | 3 | 4 | 5 | 6",
      "defaultValue": "6",
      "options": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ]
    },
    {
      "name": "tag",
      "control": "text",
      "type": "string",
      "defaultValue": "div"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the grid coloumn."
    }
  ],
  "events": []
};

export const gcdsHeader = {
  "tag": "gcds-header",
  "attributes": [
    {
      "name": "lang-href",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "signature-has-link",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "skip-to-href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "account",
      "description": "Slot to add a custom account link in the bottom-right of the header."
    },
    {
      "name": "banner",
      "description": "Slot to add a banner across the top of the header."
    },
    {
      "name": "breadcrumb",
      "description": "Slot to add breadcrumbs at the bottom of the header."
    },
    {
      "name": "menu",
      "description": "Slot to add a menu below the divider line."
    },
    {
      "name": "search",
      "description": "Slot to add a search field to the right of the header."
    },
    {
      "name": "signature",
      "description": "Slot to replace Government of Canada signature."
    },
    {
      "name": "skip-to-nav",
      "description": "Slot to add a hidden skip to content navigation at the top of the header."
    },
    {
      "name": "toggle",
      "description": "Slot to add a custom language toggle in the top-right of the header."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsHeading = {
  "tag": "gcds-heading",
  "attributes": [
    {
      "name": "character-limit",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "heading-role",
      "control": "select",
      "type": "\"light\" | \"primary\" | \"secondary\"",
      "defaultValue": "primary",
      "options": [
        "light",
        "primary",
        "secondary"
      ]
    },
    {
      "name": "margin-bottom",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "defaultValue": "300",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "margin-top",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "tag",
      "control": "select",
      "type": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
      "required": true,
      "options": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the heading content"
    }
  ],
  "events": []
};

export const gcdsHint = {
  "tag": "gcds-hint",
  "attributes": [
    {
      "name": "hint-id",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the hint content."
    }
  ],
  "events": []
};

export const gcdsIcon = {
  "tag": "gcds-icon",
  "attributes": [
    {
      "name": "label",
      "control": "text",
      "type": "string"
    },
    {
      "name": "margin-left",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "margin-right",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "name",
      "control": "select",
      "type": "\"arrow-down\" | \"arrow-up\" | \"arrow-up-down\" | \"checkmark-circle\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"close\" | \"download\" | \"email\" | \"exclamation-circle\" | \"external\" | \"filter\" | \"info-circle\" | \"phone\" | \"search\" | \"sort\" | \"tune\" | \"warning-triangle\"",
      "required": true,
      "options": [
        "arrow-down",
        "arrow-up",
        "arrow-up-down",
        "checkmark-circle",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "chevron-up",
        "close",
        "download",
        "email",
        "exclamation-circle",
        "external",
        "filter",
        "info-circle",
        "phone",
        "search",
        "sort",
        "tune",
        "warning-triangle"
      ]
    },
    {
      "name": "size",
      "control": "select",
      "type": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"inherit\" | \"text\" | \"text-small\"",
      "defaultValue": "inherit",
      "options": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "text",
        "text-small"
      ]
    }
  ],
  "slots": [],
  "events": []
};

export const gcdsInput = {
  "tag": "gcds-input",
  "attributes": [
    {
      "name": "autocomplete",
      "control": "text",
      "type": "string"
    },
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "input-id",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "inputmode",
      "control": "select",
      "type": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
      "defaultValue": "null",
      "options": [
        "decimal",
        "email",
        "none",
        "numeric",
        "search",
        "tel",
        "text",
        "url"
      ]
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "max",
      "control": "select",
      "type": "number | string",
      "options": []
    },
    {
      "name": "maxlength",
      "control": "text",
      "type": "number"
    },
    {
      "name": "min",
      "control": "select",
      "type": "number | string",
      "options": []
    },
    {
      "name": "minlength",
      "control": "text",
      "type": "number"
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "pattern",
      "control": "text",
      "type": "string"
    },
    {
      "name": "readonly",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "size",
      "control": "text",
      "type": "number"
    },
    {
      "name": "step",
      "control": "select",
      "type": "\"any\" | number",
      "options": [
        "any"
      ]
    },
    {
      "name": "suggestions",
      "control": "select",
      "type": "SuggestionOption[] | string",
      "options": []
    },
    {
      "name": "type",
      "control": "select",
      "type": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
      "defaultValue": "text",
      "options": [
        "email",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "url"
      ]
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the input loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the input has changed.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the input has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the input has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the element has received input.",
      "details": "string"
    },
    {
      "name": "gcdsSuggestionSelected",
      "description": "Emitted when a suggestion is selected.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the input has a validation error.",
      "details": "object"
    }
  ]
};

export const gcdsLabel = {
  "tag": "gcds-label",
  "attributes": [
    {
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "label",
      "control": "text",
      "type": "string"
    },
    {
      "name": "label-for",
      "control": "text",
      "type": "string"
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [
    {
      "name": "",
      "description": "Slot for the label content."
    }
  ],
  "events": []
};

export const gcdsLangToggle = {
  "tag": "gcds-lang-toggle",
  "attributes": [
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsLink = {
  "tag": "gcds-link",
  "attributes": [
    {
      "name": "display",
      "control": "select",
      "type": "\"block\" | \"inline\"",
      "defaultValue": "inline",
      "options": [
        "block",
        "inline"
      ]
    },
    {
      "name": "download",
      "control": "text",
      "type": "string"
    },
    {
      "name": "external",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "link-role",
      "control": "select",
      "type": "\"default\" | \"light\"",
      "defaultValue": "default",
      "options": [
        "default",
        "light"
      ]
    },
    {
      "name": "rel",
      "control": "text",
      "type": "string"
    },
    {
      "name": "size",
      "control": "select",
      "type": "\"inherit\" | \"regular\" | \"small\"",
      "defaultValue": "inherit",
      "options": [
        "inherit",
        "regular",
        "small"
      ]
    },
    {
      "name": "target",
      "control": "text",
      "type": "string",
      "defaultValue": "_self"
    },
    {
      "name": "type",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the link content."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in the event detail.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsNavGroup = {
  "tag": "gcds-nav-group",
  "attributes": [
    {
      "name": "close-trigger",
      "control": "text",
      "type": "string"
    },
    {
      "name": "menu-label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "open",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "open-trigger",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the list of navigation links."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the button blurs.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the button has been clicked.",
      "details": "void"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the button has been focus.",
      "details": "void"
    }
  ]
};

export const gcdsNavLink = {
  "tag": "gcds-nav-link",
  "attributes": [
    {
      "name": "current",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the navigation link content."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsNotice = {
  "tag": "gcds-notice",
  "attributes": [
    {
      "name": "notice-role",
      "control": "select",
      "type": "\"danger\" | \"info\" | \"success\" | \"warning\"",
      "required": true,
      "options": [
        "danger",
        "info",
        "success",
        "warning"
      ]
    },
    {
      "name": "notice-title",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "notice-title-tag",
      "control": "select",
      "type": "\"h2\" | \"h3\" | \"h4\" | \"h5\"",
      "required": true,
      "options": [
        "h2",
        "h3",
        "h4",
        "h5"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the main content of the notice."
    }
  ],
  "events": []
};

export const gcdsPagination = {
  "tag": "gcds-pagination",
  "attributes": [
    {
      "name": "current-page",
      "control": "text",
      "type": "number"
    },
    {
      "name": "display",
      "control": "select",
      "type": "\"list\" | \"simple\"",
      "defaultValue": "list",
      "options": [
        "list",
        "simple"
      ]
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "next-href",
      "control": "text",
      "type": "string"
    },
    {
      "name": "next-label",
      "control": "text",
      "type": "string"
    },
    {
      "name": "previous-href",
      "control": "text",
      "type": "string"
    },
    {
      "name": "previous-label",
      "control": "text",
      "type": "string"
    },
    {
      "name": "total-pages",
      "control": "text",
      "type": "number"
    },
    {
      "name": "url",
      "control": "select",
      "type": "object | string",
      "options": []
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the link loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": "Emitted when the link has been clicked. Contains the href in event detail when using simple display,\nor an object with page and href when using list display.",
      "details": "object | string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the link has focus.",
      "details": "void"
    }
  ]
};

export const gcdsRadios = {
  "tag": "gcds-radios",
  "attributes": [
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "hide-legend",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "legend",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "options",
      "control": "select",
      "type": "RadioObject[] | string",
      "required": true,
      "options": []
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the radios has lost focus",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when a radios option is checked (but not when unchecked). Contains new value in event detail",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when radios has a validation error",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when radios has received focus",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when radios has been changed as a direct result of a user action (a radio option has been selected). Contains new value in event detail",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when radios has passed validation",
      "details": "void"
    }
  ]
};

export const gcdsSearch = {
  "tag": "gcds-search",
  "attributes": [
    {
      "name": "action",
      "control": "text",
      "type": "string",
      "defaultValue": "/sr/srb.html"
    },
    {
      "name": "method",
      "control": "select",
      "type": "\"get\" | \"post\"",
      "defaultValue": "get",
      "options": [
        "get",
        "post"
      ]
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "defaultValue": "q"
    },
    {
      "name": "placeholder",
      "control": "text",
      "type": "string",
      "defaultValue": "Canada.ca"
    },
    {
      "name": "search-id",
      "control": "text",
      "type": "string",
      "defaultValue": "search"
    },
    {
      "name": "suggested",
      "control": "select",
      "type": "string | string[]",
      "options": []
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the search input has lost focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the search input value has changed.",
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the search input has gained focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the search element has received input.",
      "details": "string"
    },
    {
      "name": "gcdsSubmit",
      "description": "Emitted when the search form has submitted.",
      "details": "string"
    }
  ]
};

export const gcdsSelect = {
  "tag": "gcds-select",
  "attributes": [
    {
      "name": "autocomplete",
      "control": "text",
      "type": "string"
    },
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "default-value",
      "control": "text",
      "type": "string"
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "select-id",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for options and option groups."
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the select loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the select value has changed.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the select has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the select has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the select has received input.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the select has a validation error.",
      "details": "object"
    }
  ]
};

export const gcdsSideNav = {
  "tag": "gcds-side-nav",
  "attributes": [
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the navigation groups and navigation links."
    },
    {
      "name": "home",
      "description": "Slot for the home link or site title."
    }
  ],
  "events": []
};

export const gcdsSignature = {
  "tag": "gcds-signature",
  "attributes": [
    {
      "name": "has-link",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "type",
      "control": "select",
      "type": "\"signature\" | \"wordmark\"",
      "defaultValue": "signature",
      "options": [
        "signature",
        "wordmark"
      ]
    },
    {
      "name": "variant",
      "control": "select",
      "type": "\"colour\" | \"white\"",
      "defaultValue": "colour",
      "options": [
        "colour",
        "white"
      ]
    }
  ],
  "slots": [],
  "events": []
};

export const gcdsSrOnly = {
  "tag": "gcds-sr-only",
  "attributes": [
    {
      "name": "tag",
      "control": "select",
      "type": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"p\" | \"span\"",
      "defaultValue": "p",
      "options": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the hidden accessible content."
    }
  ],
  "events": []
};

export const gcdsStepper = {
  "tag": "gcds-stepper",
  "attributes": [
    {
      "name": "current-step",
      "control": "text",
      "type": "number",
      "required": true
    },
    {
      "name": "tag",
      "control": "select",
      "type": "\"h1\" | \"h2\" | \"h3\"",
      "defaultValue": "h2",
      "options": [
        "h1",
        "h2",
        "h3"
      ]
    },
    {
      "name": "total-steps",
      "control": "text",
      "type": "number",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the heading content."
    }
  ],
  "events": []
};

export const gcdsTable = {
  "tag": "gcds-table",
  "attributes": [
    {
      "name": "columns",
      "control": "select",
      "type": "TableColumn[] | string",
      "defaultValue": "[]",
      "options": []
    },
    {
      "name": "data",
      "control": "select",
      "type": "object[] | string",
      "defaultValue": "[]",
      "options": []
    },
    {
      "name": "filter",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "filter-value",
      "control": "text",
      "type": "string",
      "defaultValue": ""
    },
    {
      "name": "pagination",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "pagination-current-page",
      "control": "text",
      "type": "number",
      "defaultValue": "1"
    },
    {
      "name": "pagination-size",
      "control": "text",
      "type": "number",
      "defaultValue": "10"
    },
    {
      "name": "pagination-size-options",
      "control": "select",
      "type": "number[] | string",
      "defaultValue": "[10, 25, 50, 0]",
      "options": []
    },
    {
      "name": "sort",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [
    {
      "name": "caption",
      "description": "Slot to give an accessible name to the table, so that assistive technologies can identify it and announce it."
    },
    {
      "name": "cell:<field>",
      "description": "Slot to assign HTML content to a table cell, where <field> corresponds to the `field` property of a column definition."
    }
  ],
  "events": [
    {
      "name": "gcdsTableStateChange",
      "description": "",
      "details": "GcdsTableStateChange"
    }
  ]
};

export const gcdsText = {
  "tag": "gcds-text",
  "attributes": [
    {
      "name": "character-limit",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "display",
      "control": "select",
      "type": "\"block\" | \"flex\" | \"inline\" | \"inline-block\" | \"inline-flex\" | \"none\"",
      "defaultValue": "block",
      "options": [
        "block",
        "flex",
        "inline",
        "inline-block",
        "inline-flex",
        "none"
      ]
    },
    {
      "name": "margin-bottom",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "defaultValue": "300",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "margin-top",
      "control": "select",
      "type": "\"0\" | \"100\" | \"1000\" | \"1050\" | \"1100\" | \"1150\" | \"1200\" | \"125\" | \"1250\" | \"150\" | \"175\" | \"200\" | \"225\" | \"25\" | \"250\" | \"300\" | \"350\" | \"400\" | \"450\" | \"50\" | \"500\" | \"550\" | \"600\" | \"650\" | \"700\" | \"75\" | \"750\" | \"800\" | \"850\" | \"900\" | \"950\"",
      "defaultValue": "0",
      "options": [
        "0",
        "100",
        "1000",
        "1050",
        "1100",
        "1150",
        "1200",
        "125",
        "1250",
        "150",
        "175",
        "200",
        "225",
        "25",
        "250",
        "300",
        "350",
        "400",
        "450",
        "50",
        "500",
        "550",
        "600",
        "650",
        "700",
        "75",
        "750",
        "800",
        "850",
        "900",
        "950"
      ]
    },
    {
      "name": "size",
      "control": "select",
      "type": "\"body\" | \"small\"",
      "defaultValue": "body",
      "options": [
        "body",
        "small"
      ]
    },
    {
      "name": "text-role",
      "control": "select",
      "type": "\"light\" | \"primary\" | \"secondary\"",
      "defaultValue": "primary",
      "options": [
        "light",
        "primary",
        "secondary"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the content of the text element."
    }
  ],
  "events": []
};

export const gcdsTextarea = {
  "tag": "gcds-textarea",
  "attributes": [
    {
      "name": "autofocus",
      "control": "select",
      "type": "boolean",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "cols",
      "control": "text",
      "type": "number"
    },
    {
      "name": "disabled",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "error-message",
      "control": "text",
      "type": "string"
    },
    {
      "name": "form",
      "control": "text",
      "type": "string"
    },
    {
      "name": "hide-label",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hide-limit",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hint",
      "control": "text",
      "type": "string"
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "maxlength",
      "control": "text",
      "type": "number"
    },
    {
      "name": "minlength",
      "control": "text",
      "type": "number"
    },
    {
      "name": "name",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "required",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "rows",
      "control": "text",
      "type": "number",
      "defaultValue": "5"
    },
    {
      "name": "textarea-id",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "validate-on",
      "control": "select",
      "type": "\"blur\" | \"other\" | \"submit\"",
      "defaultValue": "blur",
      "options": [
        "blur",
        "other",
        "submit"
      ]
    },
    {
      "name": "validator",
      "control": "select",
      "type": "(string | ValidatorEntry | Validator<string>)[]",
      "options": []
    },
    {
      "name": "validity",
      "control": "text",
      "type": "ValidityState",
      "onlyProperty": true
    },
    {
      "name": "value",
      "control": "text",
      "type": "string"
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": "Emitted when the textarea loses focus.",
      "details": "void"
    },
    {
      "name": "gcdsChange",
      "description": "Emitted when the textarea has changed.",
      "details": "string"
    },
    {
      "name": "gcdsError",
      "description": "Emitted when the textarea has a validation error.",
      "details": "object"
    },
    {
      "name": "gcdsFocus",
      "description": "Emitted when the textarea has focus.",
      "details": "void"
    },
    {
      "name": "gcdsInput",
      "description": "Emitted when the textarea has received input.",
      "details": "string"
    },
    {
      "name": "gcdsValid",
      "description": "Emitted when the textarea has a validation error.",
      "details": "object"
    }
  ]
};

export const gcdsTopNav = {
  "tag": "gcds-top-nav",
  "attributes": [
    {
      "name": "alignment",
      "control": "select",
      "type": "\"end\" | \"start\"",
      "defaultValue": "start",
      "options": [
        "end",
        "start"
      ]
    },
    {
      "name": "label",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Slot for the navigation groups and navigation links."
    },
    {
      "name": "home",
      "description": "Slot for the home link or site title."
    }
  ],
  "events": []
};

export const gcdsTopicMenu = {
  "tag": "gcds-topic-menu",
  "attributes": [
    {
      "name": "home",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    }
  ],
  "slots": [],
  "events": []
};

