module.exports = {
  en: {
    heading: 'Handle error messages and validation',
    listitems: [
      'Use the `required` attribute to activate the required validator. Validation will happen by default on the `onBlur` event. A missing or invalid entry will prompt an inline error message with preset text.',
      'If you need to change the validation event, use the `validate-on` attribute. Validation can happen on blur, when the element loses focus, or manually with the `validate()` method.',
      'Use the `required` attribute for fields that must be filled in. This places "required" at the end of the label.',
      'Use the `error-message` attribute to include an error message text for all required inputs. Avoid using error messages for optional ones.',
      'For optional fields, avoid adding the `error-message` attribute.',
      'For an optional field that needs validation based on user input (like validating an email address format), opt to add custom validation with a custom error message.',
    ],
  },
  fr: {
    heading: "Traiter les messages d'erreur et la validation",
    listitems: [
      "Utilisez l'attribut `required` pour activer le valideur de champ obligatoire. La validation s'effectuera par défaut pendant l'évènement `onBlur`. Une réponse manquante ou non valide affichera un message d'erreur intercalé prédéfini.",
      "Si vous devez modifier l'évènement de validation, utilisez l'attribut `validate-on`. La validation peut se produire pendant l'évènement onBlur, lorsque l'élément perd son état ciblé, ou de façon manuelle avec la méthode `validate()`.",
      "Utilisez l'attribut `required` pour les champs qui doivent obligatoirement être remplis. La mention «&nbsp;obligatoire&nbsp;» sera alors ajoutée à la fin de l'étiquette.",
      "Utilisez l'attribut `error-message` pour inclure un message d'erreur pour tous les champs de saisie obligatoires. Évitez d'utiliser des messages d'erreur pour les champs de saisie facultatifs.",
      "Pour les champs facultatifs, évitez d'ajouter l'attribut `error-message`.",
      "Pour un champ facultatif nécessitant une validation qui dépend de ce que l'utilisateur a saisi (par exemple pour valider un format d'adresse courriel), ajoutez plutôt une validation et un message d'erreur personnalisés.",
    ],
  },
};
