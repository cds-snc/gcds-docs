// AUTO-GENERATED — DO NOT EDIT

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
      "description": {
        "en": "The gcdsBlur event is emitted when the link loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le lien cesse d'être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": {
        "en": "The gcdsClick event is emitted when the link has been clicked. It contains the href in the event detail when using simple display, or an object with page and href when using list display.",
        "fr": "L’événement gcdsClick est émis lorsque l’on clique sur le lien. Les détails de l’événement contiennent l’attribut href pour une pagination simple, ou un objet contenant page et attribut href pour une pagination en liste."
      },
      "details": "object | string"
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
