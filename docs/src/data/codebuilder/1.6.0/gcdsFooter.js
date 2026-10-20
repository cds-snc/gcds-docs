// AUTO-GENERATED — DO NOT EDIT

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
      "control": "text",
      "type": "object | string",
    }
  ],
  "slots": [],
  "events": [
    {
      "name": "gcdsBlur",
      "description": {
        "en": "The gcdsBlur event is emitted when the link loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le lien cesse d’être ciblé."
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
