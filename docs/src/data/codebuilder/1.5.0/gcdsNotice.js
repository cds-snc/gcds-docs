// AUTO-GENERATED — DO NOT EDIT

export const gcdsNotice = {
  "tag": "gcds-notice",
  "attributes": [
    {
      "name": "notice-role",
      "control": "select",
      "type": "\"danger\" | \"info\" | \"success\" | \"warning\"",
      "required": true,
      "options": [
        "danger",
        "info",
        "success",
        "warning"
      ]
    },
    {
      "name": "notice-title",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "notice-title-tag",
      "control": "select",
      "type": "\"h2\" | \"h3\" | \"h4\" | \"h5\"",
      "required": true,
      "options": [
        "h2",
        "h3",
        "h4",
        "h5"
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": {
        "en": "The default slot is for placing the message of the notice.",
        "fr": "L'emplacement par défaut sert à placer le message de l'avis."
      }
    }
  ],
  "events": []
};
