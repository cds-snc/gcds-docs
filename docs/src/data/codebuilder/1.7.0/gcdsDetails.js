// AUTO-GENERATED — DO NOT EDIT

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
      "description": {
        "en": "The default slot is for adding content inside the details component.",
        "fr": "L'emplacement par défaut sert à ajouter du contenu à l'intérieur du composant."
      }
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": {
        "en": "The gcdsBlur event is emitted when details loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le composant de détails cesse d’être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": {
        "en": "The gcdsClick event is emitted when details has been clicked. It contains the value in the event detail.",
        "fr": "L’événement gcdsClick est émis lorsque l’on clique sur le composant de détails. Les détails de l’événement contiennent la valeur."
      },
      "details": "void"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when details has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque le composant de détails devient ciblé."
      },
      "details": "void"
    }
  ]
};
