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
      "description": {
        "en": "The default slot is for placing the link text.",
        "fr": "L'emplacement par défaut sert à placer le texte du lien."
      }
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": {
        "en": "The gcdsBlur event is emitted when the link loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le lien cesse d'être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": {
        "en": "The gcdsClick event is emitted when the link has been clicked. It contains the href in the event detail.",
        "fr": "L’événement gcdsClick est émis lorsque l’on clique sur le lien. Les détails de l’événement contiennent l’attribut href."
      },
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the link has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le lien devient ciblé."
      },
      "details": "void"
    }
  ]
};
