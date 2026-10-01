// AUTO-GENERATED — DO NOT EDIT

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
