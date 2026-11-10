import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";
const KEY = "truegis_theme";

/** Тема: сохранённый выбор → настройка системы. Атрибут ставит ещё скрипт в <head> (без мигания). */
function current(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(current);
  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(KEY, next);
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "light" ? "#f6f7fb" : "#0a090c");
    window.dispatchEvent(new Event("themechange"));
  }, []);
  // все useTheme на странице (шапка, 3D-сцены) видят одну тему
  useEffect(() => {
    const sync = () => setThemeState(current());
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);
  // пока посетитель сам не выбрал — следуем за системой
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: light)");
    if (!mq) return;
    const on = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(KEY)) return;
      const next: Theme = e.matches ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      window.dispatchEvent(new Event("themechange"));
    };
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return { theme, toggle: () => setTheme(theme === "light" ? "dark" : "light") };
}
