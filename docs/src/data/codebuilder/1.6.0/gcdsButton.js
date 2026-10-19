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