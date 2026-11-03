// AUTO-GENERATED — DO NOT EDIT

export const gcdsErrorSummary = {
  "tag": "gcds-error-summary",
  "attributes": [
    {
      "name": "error-links",
      "control": "text",
      "type": "object | string",
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
        "fr": "L’événement gcdsFocus est émis lorsque le lien est ciblé."
      },
      "details": "void"
    }
  ]
};
