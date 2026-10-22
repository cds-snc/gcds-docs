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
      "description": {
        "en": "The default slot is for adding the button or link label text.",
        "fr": "L'emplacement par défaut sert à ajouter le texte du libellé du bouton ou du lien."
      }
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": {
        "en": "The gcdsBlur event is emitted when the button loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque le bouton cesse d'être ciblé."
      },
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": {
        "en": "The gcdsClick event is emitted when the button has been clicked. It contains the value or href in the event detail.",
        "fr": "L’événement gcdsClick est émis lorsque l’on clique sur le bouton. Les détails de l’événement contiennent la valeur ou l’attribut href."
      },
      "details": "string | void"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the button has focus.",
        "fr": "L'événement gcdsFocus est émis lorsque le bouton est ciblé."
      },
      "details": "void"
    }
  ]
};