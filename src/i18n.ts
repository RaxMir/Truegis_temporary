import { useCallback, useEffect, useState } from "react";

export type Lang = "uz" | "ru" | "en";
export const LANGS: Lang[] = ["uz", "ru", "en"];
export type Tr<T> = Record<Lang, T>;

const KEY = "truegis_lang";

/** Язык: ?lang= в адресе → сохранённый выбор → язык браузера (ru/en) → узбекский. */
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl && (LANGS as string[]).includes(fromUrl)) return fromUrl as Lang;
  const saved = localStorage.getItem(KEY);
  if (saved && (LANGS as string[]).includes(saved)) return saved as Lang;
  const nav = navigator.language.slice(0, 2);
  if (nav === "ru") return "ru";
  if (nav === "en") return "en";
  return "uz";
}

export function useLang(titles: Tr<string>, descriptions: Tr<string>) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const setLang = useCallback((next: Lang) => {
    localStorage.setItem(KEY, next);
    setLangState(next);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = titles[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", descriptions[lang]);
  }, [lang, titles, descriptions]);
  return { lang, setLang };
}
