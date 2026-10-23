export const gcdsAlert = {
  "tag": "gcds-alert",
  "attributes": [
    {
      "name": "alert-role",
      "control": "select",
      "type": "\"danger\" | \"info\" | \"success\" | \"warning\"",
      "defaultValue": "info",
      "options": [
        "danger",
        "info",
        "success",
        "warning"
      ]
    },
    {
      "name": "container",
      "control": "select",
      "type": "\"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
      "defaultValue": "full",
      "options": [
        "full",
        "lg",
        "md",
        "sm",
        "xl",
        "xs"
      ]
    },
    {
      "name": "heading",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "hide-close-btn",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "hide-role-icon",
      "control": "select",
      "type": "boolean",
      "defaultValue": "false",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "is-fixed",
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
        "en": "The default slot allows you to add any type of content to the alert’s message. You can add things like text, links, or buttons.",
        "fr": "L’emplacement par défaut sert à ajouter tout type de contenu au message de l’alerte, comme du texte, des liens ou des boutons."
      }
    }
  ],
  "events": [
    {
      "name": "gcdsDismiss",
      "description": {
        "en": "The gcdsDismiss event is emitted when the dismiss button is clicked.",
        "fr": "L’événement gcdsDismiss est émis lorsque l’on clique sur le bouton Fermer."
      },
      "details": "void"
    }
  ]
};