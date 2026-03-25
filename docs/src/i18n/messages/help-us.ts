export type HelpUsLocale = "en" | "fr";

export const helpUsMessages: Record<
  HelpUsLocale,
  {
    heading: string;
    text: string[];
    btnFeedback: string;
    btnReport: string;
  }
> = {
  en: {
    heading: "Help us improve",
    text: [
      "Have questions or a request? Give feedback on our contact form.",
      "Something's wrong? Raise it through GitHub with an account. You'll have access to the team's direct responses, progress made on your issue, and issues raised by others.",
    ],
    btnFeedback: "Give feedback",
    btnReport: "Report an issue on GitHub",
  },
  fr: {
    heading: "Aidez-nous a nous ameliorer",
    text: [
      "Vous avez des questions ou des demandes? Faites-nous part de vos commentaires a l'aide de notre formulaire de contact.",
      "Quelque chose ne va pas? Signalez-le sur GitHub en creant un compte. Vous pourrez acceder aux reponses de l'equipe, suivre les progres realises concernant votre problemes et voir les problemes signales par d'autres personnes.",
    ],
    btnFeedback: "Fournir des commentaires",
    btnReport: "Signaler un probleme sur Github",
  },
};

