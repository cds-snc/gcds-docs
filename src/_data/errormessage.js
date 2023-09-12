module.exports = {
  en: {
    heading: 'Handle error messages and validation',
    listitems: [
      'Use the `required` attribute to activate the required validator. Validation will happen by default on the `onBlur` event. A missing or invalid entry will prompt an inline error message with preset text.',
      'If you need to change the validation event, use the `validate-on` attribute. Validation can happen on blur, when the element loses focus, or manually with the `validate()` method.',
      'Use the `required` attribute for fields that must be filled in. This places "(required)" at the end of the label.',
      'Use the `error message` attribute to include an error message text for all required inputs. Avoid using error messages for optional ones.',
      'For optional fields, avoid adding the `error-message` attribute.',
      'For an optional field that needs validation based on user input (like validating an email address format), opt to add custom validation with a custom error message.',
    ],
  },
  fr: {
    heading: "Traitez les messages d'erreur et la validation",
    listitems: [
      "Utilisez l'attribut `required` pour activer le validateur nécessaire. La validation s'effectuera par défaut pendant l'événement `onBlur`.",
      "Si vous devez modifier l'événement de validation, utilisez l'attribut `validate-on`. Une validation onBlur est possible lorsque l'élément n'est plus ciblé. Il est également possible de procéder à une validation manuelle avec la méthode `validate()`.",
      "Employez l'attribut `required` pour les champs obligatoires. Cet attribut insérera la mention « (obligatoire) » à la fin de la case à cocher.",
      "Conservez l'attribut `error-message` par défaut pour une zone de texte obligatoire qui doit être validée. Une entrée manquante ou non valide affichera un message d'erreur intercalé.",
      "Supprimez l'attribut `error-message` par défaut si la zone de texte est facultative.",
    ],
  },
};
