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
      "description": "Slot for the main content of the alert."
    }
  ],
  "events": [
    {
      "name": "gcdsDismiss",
      "description": "Events",
      "details": "void"
    }
  ]
};