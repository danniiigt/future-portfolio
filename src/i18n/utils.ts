import { ui, defaultLang } from "./ui";
import type { AstroGlobal } from "astro";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(Astro: AstroGlobal) {
  const language: string = Astro?.params?.language || "es";

  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    if (language in ui) return ui[language][key] || ui[defaultLang][key];
    return ui[defaultLang][key];
  };
}
