// AUTO-GENERATED — DO NOT EDIT

export const gcdsHeader = {
  "tag": "gcds-header",
  "attributes": [
    {
      "name": "lang-href",
      "control": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "signature-has-link",
      "control": "select",
      "type": "boolean",
      "defaultValue": "true",
      "options": [
        "true",
        "false"
      ]
    },
    {
      "name": "skip-to-href",
      "control": "text",
      "type": "string",
      "required": true
    }
  ],
  "slots": [
    {
      "name": "account",
      "description": {
        "en": 'The account slot is for adding a custom account link in the bottom-right of the header. Use this slot with a gcds-button to include a button element, styled as the Canada.ca contextual sign in button, for actions like "Sign in" and "Sign out".',
        "fr": "L’emplacement account permet d’ajouter un lien de compte personnalisé dans le coin inférieur droit de l’en-tête. Utilisez cet emplacement avec un gcds-button pour ajouter un bouton dont le style correspond à celui du bouton contextuel de connexion de Canada.ca, pour des actions comme « Se connecter » et « Se déconnecter »."
      }
    },
    {
      "name": "banner",
      "description": {
        "en": "The banner slot is for adding a banner across the top of the header. Use this slot to display site-wide alerts or promotional messages.",
        "fr": "L'emplacement banner sert à ajouter une bannière en haut de l'en-tête. Utilisez-le pour afficher des alertes à l'échelle du site ou des messages promotionnels."
      }
    },
    {
      "name": "breadcrumb",
      "description": {
        "en": "The breadcrumb slot is for adding breadcrumbs below the header. Use this slot to show the user’s current page location and navigation path.",
        "fr": "L'emplacement breadcrumbs sert à ajouter un chemin de navigation sous l'en-tête. Utilisez-le pour indiquer où se trouve l'utilisateur dans le site et comment il y est arrivé."
      }
    },
    {
      "name": "menu",
      "description": {
        "en": "The menu slot is for adding a navigation menu below the divider line. For instance, you can use the top-nav component within this slot to provide the site’s primary navigation links.",
        "fr": "L'emplacement menu sert à ajouter un menu de navigation sous la ligne de séparation. Par exemple, vous pouvez y placer le composant top-nav pour fournir les liens de navigation principaux du site."
      }
    },
    {
      "name": "search",
      "description": {
        "en": "The search slot is for adding a search field to the header. Use this slot to allow users to search site content directly from the header.",
        "fr": "L'emplacement search sert à ajouter un champ de recherche à l'en-tête. Utilisez-le pour permettre aux utilisateurs de chercher du contenu directement depuis l'en-tête."
      }
    },
    {
      "name": "signature",
      "description": {
        "en": "The signature slot is for replacing the default Government of Canada signature. Use this slot to display a custom signature or logo if needed.",
        "fr": "L'emplacement signature sert à remplacer la signature par défaut du gouvernement du Canada. Utilisez-le pour afficher une signature ou un logo personnalisé."
      }
    },
    {
      "name": "skip-to-nav",
      "description": {
        "en": 'The skip-to-nav slot is for adding a "skip to content" link at the top of the header. By default, the header includes a “skip to main content” link to improve accessibility for users of assistive technologies. The target for this default link can be set using the skip-to-href prop. Use this slot to add additional skip links or a custom “skip to content” link.',
        "fr": "L'emplacement skip-to-nav sert à ajouter un lien « Passer au contenu » en haut de l'en-tête. Par défaut, l'en-tête inclut déjà un lien « Passer au contenu principal » dont la cible peut être définie à l'aide de la propriété skip-to-href. Utilisez cet emplacement pour ajouter des liens de saut supplémentaires ou un lien « Passer au contenu » personnalisé."
      }
    },
    {
      "name": "toggle",
      "description": {
        "en": "The toggle slot is for adding a custom language toggle in the header. By default, the header includes a language toggle that includes English and French. The target for this default language toggle can be set using the lang-href prop. Use this slot to add additional available languages.",
        "fr": "L'emplacement toggle sert à ajouter un bouton de basculement de langue personnalisé dans l'en-tête. Par défaut, l'en-tête inclut déjà un bouton pour basculer entre l'anglais et le français, dont la cible peut être définie avec la propriété lang-href. Utilisez cet emplacement pour prendre en charge des langues supplémentaires."
      }
    }
  ],
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
