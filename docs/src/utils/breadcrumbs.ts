import { routes } from "../i18n/config";
import type { Locale, RouteKey } from "./docs-static-paths";

type BreadcrumbItem = {
  href: string;
  label: string;
};

const routeConfig = routes as Record<string, any>;

const labels: Record<string, Record<Locale, string>> = {
  home: { en: "Home", fr: "Accueil" },
  about: { en: "About us", fr: "A propos" },
  components: { en: "Components", fr: "Composants" },
  button: { en: "Button", fr: "Bouton" },
};

const getLabel = (key: string, locale: Locale) => labels[key]?.[locale] || key;

export const getFullRoutePath = (routeKey: RouteKey, locale: Locale): string => {
  for (const parentKey in routeConfig) {
    if (parentKey === routeKey) {
      const slug = routeConfig[parentKey][locale] || "";
      return slug ? `/${locale}/${slug}` : `/${locale}`;
    }

    if (routeConfig[parentKey].children && routeConfig[parentKey].children[routeKey]) {
      return `/${locale}/${routeConfig[parentKey][locale]}/${routeConfig[parentKey].children[routeKey][locale]}`;
    }
  }

  return `/${locale}`;
};

export const getBreadcrumbItems = (currentLocale: Locale, routeKey: RouteKey): BreadcrumbItem[] => {
  if (routeKey === "home") {
    return [];
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { href: `/${currentLocale}`, label: getLabel("home", currentLocale) },
  ];

  for (const parentKey in routeConfig) {
    if (routeConfig[parentKey].children && routeConfig[parentKey].children[routeKey]) {
      if (routeConfig[parentKey][currentLocale]) {
        breadcrumbItems.push({
          href: `/${currentLocale}/${routeConfig[parentKey][currentLocale]}`,
          label: getLabel(parentKey, currentLocale),
        });
      }
      break;
    }
  }

  breadcrumbItems.push({
    href: getFullRoutePath(routeKey, currentLocale),
    label: getLabel(routeKey, currentLocale),
  });

  return breadcrumbItems;
};

