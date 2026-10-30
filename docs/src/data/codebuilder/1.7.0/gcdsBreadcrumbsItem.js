// AUTO-GENERATED — DO NOT EDIT

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
      "description": {
        "en": "The default slot of the breadcrumbs item is for adding the item's text.",
        "fr": "L'emplacement par défaut de l'élément du chemin de navigation sert à ajouter le texte de cet élément."
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
