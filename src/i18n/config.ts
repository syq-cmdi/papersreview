export const languages = {
  zh: "中文",
  en: "English"
} as const;

export const defaultLang = "zh";

export type Language = keyof typeof languages;

export const localizedPaths = {
  zh: {
    home: "/zh/",
    about: "/zh/about/",
    publications: "/zh/publications/",
    talks: "/zh/talks/",
    projects: "/zh/projects/",
    team: "/zh/team/",
    news: "/zh/news/",
    resources: "/zh/resources/",
    contact: "/zh/contact/"
  },
  en: {
    home: "/en/",
    publications: "/en/publications/",
    team: "/en/team/"
  }
} as const;
