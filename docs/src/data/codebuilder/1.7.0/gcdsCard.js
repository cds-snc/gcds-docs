// AUTO-GENERATED — DO NOT EDIT

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
      "description": {
        "en": "The default slot is for adding description content to the card. It will overwrite the description attribute if it’s used.",
        "fr": "L'emplacement par défaut sert à ajouter du contenu descriptif à la carte. Il remplace l'attribut description s'il est utilisé."
      }
    },
    {
      "name": "title",
      "description": {
        "en": "The title slot is for the card title if it needs rich text styling or an icon. It falls back to the card-title attribute, which is mirrored into the light DOM so the title text stays readable by DOM-text extraction tools.",
        "fr": "L’emplacement title permet d’ajouter un titre à la carte lorsque celui-ci nécessite une mise en forme enrichie ou une icône. Si l'emplacement n’est pas utilisé, l’attribut card-title est utilisé à sa place. Le texte du titre est reproduit dans le DOM léger (Light DOM) afin de rester accessible aux outils d’extraction de texte du DOM."
      }
    }
  ],
  "events": [
    {
      "name": "gcdsBlur",
      "description": {
        "en": "The gcdsBlur event is emitted when the card loses focus.",
        "fr": "L’événement gcdsBlur est émis lorsque la carte cesse d'être ciblée."
      },
      "details": "void"
    },
    {
      "name": "gcdsClick",
      "description": {
        "en": "The gcdsClick event is emitted when the card has been clicked. It contains the href in the event detail.",
        "fr": "L’événement gcdsClick est émis lorsque l’on clique sur la carte. Les détails de l’événement contiennent l’attribut href."
      },
      "details": "string"
    },
    {
      "name": "gcdsFocus",
      "description": {
        "en": "The gcdsFocus event is emitted when the card has focus.",
        "fr": "L’événement gcdsFocus est émis lorsque la carte est ciblée."
      },
      "details": "void"
    }
  ]
};
